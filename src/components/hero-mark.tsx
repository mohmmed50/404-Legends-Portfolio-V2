"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

let registered = false;

export function HeroMark() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (!registered) {
      gsap.registerPlugin(ScrollTrigger);
      registered = true;
    }

    const wrap = wrapRef.current;
    const img = imgRef.current;
    if (!wrap || !img) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        wrap,
        { opacity: 0, scale: 0.9, rotate: -6 },
        { opacity: 1, scale: 1, rotate: 0, duration: 1.1, ease: "power3.out", delay: 0.15 }
      );

      if (!prefersReducedMotion) {
        gsap.to(img, {
          y: -18,
          duration: 3.2,
          ease: "sine.inOut",
          yoyo: true,
          repeat: -1,
        });

        gsap.to(wrap, {
          y: 90,
          ease: "none",
          scrollTrigger: {
            trigger: wrap,
            start: "top top",
            end: "bottom top",
            scrub: 0.6,
          },
        });
      }
    }, wrapRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={wrapRef}
      className="pointer-events-none absolute right-[-4rem] top-1/2 -translate-y-1/2 hidden lg:block"
      style={{ opacity: 0 }}
      aria-hidden
    >
      <Image
        ref={imgRef}
        src="/brand/mark.png"
        alt=""
        width={480}
        height={480}
        priority
        className="h-[26rem] w-[26rem] opacity-90 drop-shadow-[0_0_60px_rgba(21,84,217,0.35)]"
      />
    </div>
  );
}
