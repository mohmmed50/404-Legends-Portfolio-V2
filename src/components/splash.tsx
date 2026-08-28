"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";

const AUTO_DISMISS_MS = 2600;
const SESSION_KEY = "404l-splash-seen";

export function Splash() {
  const [visible, setVisible] = useState(true);
  const rootRef = useRef<HTMLDivElement>(null);
  const markRef = useRef<HTMLDivElement>(null);
  const dismissedRef = useRef(false);
  const dismissRef = useRef<() => void>(() => {});
  const autoTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const root = rootRef.current;
    const mark = markRef.current;
    if (!root || !mark) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let alreadySeen = false;
    try {
      alreadySeen = sessionStorage.getItem(SESSION_KEY) === "1";
    } catch {
      alreadySeen = false;
    }

    // Returning within the session, or a reduced-motion preference: don't gate
    // the site behind an intro at all — hide it on the next frame.
    if (alreadySeen || prefersReducedMotion) {
      dismissedRef.current = true;
      const raf = requestAnimationFrame(() => setVisible(false));
      return () => cancelAnimationFrame(raf);
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const teardown = () => {
      window.removeEventListener("wheel", onInteract);
      window.removeEventListener("touchmove", onInteract);
      window.removeEventListener("keydown", onKeydown);
      if (autoTimerRef.current) clearTimeout(autoTimerRef.current);
    };

    function onInteract() {
      dismiss();
    }

    function onKeydown(e: KeyboardEvent) {
      if (
        e.key === "ArrowDown" ||
        e.key === "PageDown" ||
        e.key === " " ||
        e.key === "Enter" ||
        e.key === "Escape"
      ) {
        dismiss();
      }
    }

    function dismiss() {
      if (dismissedRef.current) return;
      dismissedRef.current = true;
      teardown();
      try {
        sessionStorage.setItem(SESSION_KEY, "1");
      } catch {
        /* storage unavailable — the splash simply shows again next load */
      }

      gsap.to(root, {
        opacity: 0,
        duration: 0.6,
        ease: "power2.inOut",
        onComplete: () => {
          document.body.style.overflow = previousOverflow;
          setVisible(false);
        },
      });
    }

    dismissRef.current = dismiss;

    gsap.fromTo(
      mark,
      { opacity: 0, scale: 0.85 },
      { opacity: 1, scale: 1, duration: 1, ease: "power3.out", delay: 0.1 }
    );

    window.addEventListener("wheel", onInteract, { passive: true });
    window.addEventListener("touchmove", onInteract, { passive: true });
    window.addEventListener("keydown", onKeydown);
    autoTimerRef.current = setTimeout(dismiss, AUTO_DISMISS_MS);

    return () => {
      teardown();
      document.body.style.overflow = previousOverflow;
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      ref={rootRef}
      data-splash
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-ink"
    >
      <div ref={markRef} style={{ opacity: 0 }} aria-hidden>
        <Image
          src="/brand/mark-1024.png"
          alt=""
          width={420}
          height={420}
          priority
          className="h-56 w-56 animate-glow-pulse sm:h-72 sm:w-72 lg:h-[22rem] lg:w-[22rem]"
        />
      </div>

      <button
        type="button"
        onClick={() => dismissRef.current()}
        autoFocus
        className="group absolute bottom-10 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 rounded-md px-4 py-2 font-mono text-xs tracking-widest text-ink-fg-muted transition-colors hover:text-ink-fg focus-visible:text-ink-fg"
      >
        <span>ENTER</span>
        <span className="h-8 w-px bg-line transition-colors group-hover:bg-brand-400" />
        <span className="sr-only">404 Legends — enter the site</span>
      </button>
    </div>
  );
}
