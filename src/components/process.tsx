"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollReveal } from "@/components/scroll-reveal";

let registered = false;

const STEPS = [
  {
    n: "01",
    title: "Discover",
    description: "Map the real problem, constraints, and what success looks like.",
  },
  {
    n: "02",
    title: "Architect",
    description: "Design the system, data model, and integration boundaries.",
  },
  {
    n: "03",
    title: "Build",
    description: "Engineer it in reviewable increments with tests alongside.",
  },
  {
    n: "04",
    title: "Test",
    description: "Validate against real scenarios, edge cases, and load.",
  },
  {
    n: "05",
    title: "Deploy",
    description: "Ship to production with monitoring and a rollback path.",
  },
  {
    n: "06",
    title: "Evolve",
    description: "Maintain, optimize, and scale as the system earns its keep.",
  },
];

export function Process() {
  const sectionRef = useRef<HTMLElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!registered) {
      gsap.registerPlugin(ScrollTrigger);
      registered = true;
    }

    const section = sectionRef.current;
    const line = lineRef.current;
    if (!section || !line) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) {
      gsap.set(line, { scaleX: 1 });
      return;
    }

    const ctx = gsap.context(() => {
      gsap.to(line, {
        scaleX: 1,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top 75%",
          end: "bottom 60%",
          scrub: 0.4,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="process"
      ref={sectionRef}
      className="border-b border-line bg-ink-2/40"
    >
      <div className="mx-auto max-w-(--container-max) px-6 lg:px-10 py-24 lg:py-32">
        <ScrollReveal className="max-w-2xl">
          <span className="font-mono text-xs tracking-widest text-brand-300">
            HOW WE WORK
          </span>
          <h2 className="mt-4 font-display font-semibold text-3xl sm:text-4xl leading-tight tracking-tight text-ink-fg">
            Engineering process
          </h2>
          <p className="mt-5 text-base leading-relaxed text-ink-fg-muted">
            Six stages, run in the open — you always know what we&apos;re on and
            what&apos;s next.
          </p>
        </ScrollReveal>

        <div className="relative mt-16">
          <div className="absolute left-0 right-0 top-1 hidden h-px bg-line xl:block" />
          <div
            ref={lineRef}
            className="line-draw absolute left-0 right-0 top-1 hidden h-px bg-brand-400 xl:block"
          />

          <div className="grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
            {STEPS.map((step, i) => (
              <ScrollReveal key={step.n} delay={(i % 6) * 0.05}>
                <div className="relative">
                  <div className="flex items-center gap-3 xl:block">
                    <span
                      className="hidden h-2 w-2 rounded-full bg-brand-400 ring-4 ring-ink-2 xl:block"
                      aria-hidden
                    />
                    <span className="font-mono text-sm text-brand-400 xl:mt-4 xl:block">
                      {step.n}
                    </span>
                  </div>
                  <h3 className="mt-3 font-display font-semibold text-lg text-ink-fg">
                    {step.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink-fg-muted">
                    {step.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
