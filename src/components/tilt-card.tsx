"use client";

import { useEffect, useRef, type ReactNode } from "react";
import gsap from "gsap";

export function TiltCard({
  children,
  className,
  max = 6,
}: {
  children: ReactNode;
  className?: string;
  max?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      window.matchMedia("(pointer: coarse)").matches
    ) {
      return;
    }

    const rotateX = gsap.quickTo(el, "rotateX", {
      duration: 0.5,
      ease: "power3.out",
    });
    const rotateY = gsap.quickTo(el, "rotateY", {
      duration: 0.5,
      ease: "power3.out",
    });

    const onMove = (e: PointerEvent) => {
      const rect = el.getBoundingClientRect();
      const px = (e.clientX - rect.left) / rect.width - 0.5;
      const py = (e.clientY - rect.top) / rect.height - 0.5;
      rotateY(px * max * 2);
      rotateX(-py * max * 2);
    };

    const onLeave = () => {
      rotateX(0);
      rotateY(0);
    };

    gsap.set(el, { transformPerspective: 800, transformStyle: "preserve-3d" });
    el.addEventListener("pointermove", onMove);
    el.addEventListener("pointerleave", onLeave);
    return () => {
      el.removeEventListener("pointermove", onMove);
      el.removeEventListener("pointerleave", onLeave);
    };
  }, [max]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
