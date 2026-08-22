"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";

export function Splash() {
  const [visible, setVisible] = useState(true);
  const rootRef = useRef<HTMLDivElement>(null);
  const markRef = useRef<HTMLDivElement>(null);
  const dismissedRef = useRef(false);

  useEffect(() => {
    const root = rootRef.current;
    const mark = markRef.current;
    if (!root || !mark) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function dismiss() {
      if (dismissedRef.current) return;
      dismissedRef.current = true;
      window.removeEventListener("wheel", onInteract);
      window.removeEventListener("touchmove", onInteract);
      window.removeEventListener("keydown", onKeydown);

      gsap.to(root!, {
        opacity: 0,
        duration: prefersReducedMotion ? 0.01 : 0.6,
        ease: "power2.inOut",
        onComplete: () => {
          document.body.style.overflow = previousOverflow;
          setVisible(false);
        },
      });
    }

    function onInteract() {
      dismiss();
    }

    function onKeydown(e: KeyboardEvent) {
      if (e.key === "ArrowDown" || e.key === " " || e.key === "PageDown" || e.key === "Enter") {
        dismiss();
      }
    }

    if (prefersReducedMotion) {
      gsap.set(mark, { opacity: 1, scale: 1 });
    } else {
      gsap.fromTo(
        mark,
        { opacity: 0, scale: 0.85 },
        { opacity: 1, scale: 1, duration: 1, ease: "power3.out", delay: 0.1 }
      );
    }

    window.addEventListener("wheel", onInteract, { passive: true });
    window.addEventListener("touchmove", onInteract, { passive: true });
    window.addEventListener("keydown", onKeydown);

    return () => {
      window.removeEventListener("wheel", onInteract);
      window.removeEventListener("touchmove", onInteract);
      window.removeEventListener("keydown", onKeydown);
      document.body.style.overflow = previousOverflow;
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      ref={rootRef}
      onClick={() => {
        window.dispatchEvent(new Event("wheel"));
      }}
      className="fixed inset-0 z-[100] flex cursor-pointer items-center justify-center bg-ink"
    >
      <div ref={markRef} style={{ opacity: 0 }} aria-hidden>
        <Image
          src="/brand/mark-1024.png"
          alt="404 Legends"
          width={420}
          height={420}
          priority
          className="h-56 w-56 animate-glow-pulse sm:h-72 sm:w-72 lg:h-[22rem] lg:w-[22rem]"
        />
      </div>
      <span className="sr-only">404 Legends — scroll to enter the site</span>
      <div className="pointer-events-none absolute bottom-10 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-ink-fg-muted">
        <span className="font-mono text-xs tracking-widest">SCROLL</span>
        <span className="h-8 w-px bg-line" />
      </div>
    </div>
  );
}
