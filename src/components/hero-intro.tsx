"use client";

import { useEffect, useRef, type ReactNode } from "react";
import gsap from "gsap";

export function HeroIntro({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;

    const targets = root.querySelectorAll<HTMLElement>("[data-reveal]");
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      gsap.set(targets, { opacity: 1, y: 0 });
      return;
    }

    gsap.set(targets, { opacity: 0, y: 22 });
    gsap.to(targets, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power3.out",
      stagger: 0.12,
      delay: 0.1,
    });
  }, []);

  return <div ref={ref}>{children}</div>;
}
