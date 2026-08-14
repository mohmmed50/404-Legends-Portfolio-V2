"use client";

import { useEffect, useRef, type ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

let registered = false;

export function ImageWipeReveal({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!registered) {
      gsap.registerPlugin(ScrollTrigger);
      registered = true;
    }

    const el = ref.current;
    if (!el) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      gsap.set(el, { clipPath: "inset(0% 0% 0% 0%)", opacity: 1 });
      return;
    }

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { clipPath: "inset(0% 0% 0% 100%)", opacity: 1 },
        {
          clipPath: "inset(0% 0% 0% 0%)",
          duration: 0.9,
          ease: "power3.inOut",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            once: true,
          },
        }
      );
    }, ref);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={ref} className={className} style={{ clipPath: "inset(0% 0% 0% 100%)" }}>
      {children}
    </div>
  );
}
