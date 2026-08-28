"use client";

import { useEffect, useRef, type ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

let registered = false;

const VIEW_WIDTH = 40;
const X_LEFT = 8;
const X_RIGHT = 30;
const DOT_SIZE = 10;
const SLIDE_DISTANCE = 40;

export function SectionConnector({ children }: { children: ReactNode }) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!registered) {
      gsap.registerPlugin(ScrollTrigger);
      registered = true;
    }

    const wrap = wrapRef.current;
    const content = contentRef.current;
    const svg = svgRef.current;
    const path = pathRef.current;
    const dot = dotRef.current;
    if (!wrap || !content || !svg || !path || !dot) return;

    const qaForce =
      new URLSearchParams(window.location.search).get("motion") === "force";
    const prefersReducedMotion =
      !qaForce &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    // The connector line and its scroll-linked motion are a large-screen accent
    // only — it is visually hidden below lg and adds nothing on touch layouts.
    const isDesktop = window.matchMedia("(min-width: 1024px)").matches;
    const animate = !prefersReducedMotion && isDesktop;

    let scaleX = 1;
    let st: ScrollTrigger | undefined;

    const build = () => {
      const sections = Array.from(content.children) as HTMLElement[];
      const total = content.scrollHeight;
      if (total === 0 || sections.length === 0) return;

      scaleX = wrap.clientWidth / VIEW_WIDTH;

      const boundaries = [0];
      let acc = 0;
      sections.forEach((section) => {
        acc += section.offsetHeight;
        boundaries.push(acc);
      });

      let d = `M ${X_LEFT} 0`;
      for (let i = 1; i < boundaries.length; i++) {
        const y0 = boundaries[i - 1];
        const y1 = boundaries[i];
        const yMid = (y0 + y1) / 2;
        const xFrom = i % 2 === 1 ? X_LEFT : X_RIGHT;
        const xTo = i % 2 === 1 ? X_RIGHT : X_LEFT;
        const bend = (y1 - y0) * 0.18;
        d += ` C ${xFrom} ${yMid - bend}, ${xTo} ${yMid + bend}, ${xTo} ${y1}`;
      }

      svg.setAttribute("viewBox", `0 0 ${VIEW_WIDTH} ${total}`);
      svg.setAttribute("height", `${total}`);
      path.setAttribute("d", d);

      const length = path.getTotalLength();
      gsap.set(path, {
        strokeDasharray: length,
        strokeDashoffset: animate ? length : 0,
      });

      if (!animate) {
        dot.style.opacity = "0";
      }
    };

    build();

    const resizeObserver = new ResizeObserver(() => {
      build();
      st?.refresh();
    });
    resizeObserver.observe(content);

    let ctx: gsap.Context | undefined;

    if (animate) {
      st = ScrollTrigger.create({
        trigger: wrap,
        start: "top 65%",
        end: "bottom bottom",
        scrub: 0.5,
        onUpdate: (self) => {
          const length = path.getTotalLength();
          const progress = self.progress;
          path.style.strokeDashoffset = String(length * (1 - progress));
          const point = path.getPointAtLength(length * progress);
          dot.style.opacity = "1";
          dot.style.transform = `translate(${
            point.x * scaleX - DOT_SIZE / 2
          }px, ${point.y - DOT_SIZE / 2}px)`;
        },
      });

      ctx = gsap.context(() => {
        const sections = Array.from(content.children) as HTMLElement[];
        sections.forEach((section, i) => {
          const fromX = i % 2 === 0 ? -SLIDE_DISTANCE : SLIDE_DISTANCE;
          gsap.fromTo(
            section,
            { x: fromX, opacity: 0 },
            {
              x: 0,
              opacity: 1,
              duration: 0.9,
              ease: "power3.out",
              scrollTrigger: {
                trigger: section,
                start: "top 82%",
                toggleActions: "play none none none",
              },
            }
          );
        });
      }, wrapRef);
    }

    return () => {
      resizeObserver.disconnect();
      st?.kill();
      ctx?.revert();
    };
  }, []);

  return (
    <div ref={wrapRef} className="relative overflow-x-clip">
      <svg
        ref={svgRef}
        className="pointer-events-none absolute left-0 top-0 hidden w-full lg:block"
        preserveAspectRatio="none"
        aria-hidden
      >
        <defs>
          <filter
            id="connector-glow"
            x="-300%"
            y="-300%"
            width="700%"
            height="700%"
          >
            <feGaussianBlur stdDeviation="2.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <path
          ref={pathRef}
          fill="none"
          stroke="var(--color-brand-400)"
          strokeWidth={1.5}
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
          filter="url(#connector-glow)"
          opacity={0.85}
        />
      </svg>
      <div
        ref={dotRef}
        className="pointer-events-none absolute left-0 top-0 hidden h-2.5 w-2.5 rounded-full bg-brand-300 opacity-0 shadow-[0_0_16px_4px_rgba(61,120,238,0.8)] lg:block"
        aria-hidden
      />
      <div ref={contentRef}>{children}</div>
    </div>
  );
}
