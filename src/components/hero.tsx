import Link from "next/link";
import { ArrowRight, ArrowDownRight } from "lucide-react";
import { HeroMark } from "@/components/hero-mark";
import { HeroIntro } from "@/components/hero-intro";
import { MagneticButton } from "@/components/magnetic-button";

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-line"
    >
      <div className="absolute inset-0 hex-grid hex-grid-pan opacity-60" aria-hidden />
      <div
        className="absolute -top-40 left-1/2 -translate-x-1/2 h-[36rem] w-[36rem] rounded-full opacity-25 blur-3xl"
        style={{
          background:
            "radial-gradient(closest-side, var(--color-brand-500), transparent)",
        }}
        aria-hidden
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-ink" aria-hidden />

      <HeroIntro>
        <div className="relative mx-auto max-w-(--container-max) px-6 lg:px-10 pt-40 pb-28 lg:pt-48 lg:pb-36">
          <div className="max-w-3xl">
            <div
              data-reveal
              className="inline-flex items-center gap-2 rounded-full border border-line bg-ink-2/80 px-3.5 py-1.5 font-mono text-xs tracking-wide text-brand-300"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-brand-400" />
              SOFTWARE ENGINEERING STUDIO
            </div>

            <h1
              data-reveal
              className="mt-7 font-display font-semibold text-4xl sm:text-5xl lg:text-6xl leading-[1.08] tracking-tight text-ink-fg"
            >
              Where <span className="text-gradient-brand">404</span> Becomes{" "}
              <span className="text-gradient-brand">Legend.</span>
            </h1>

            <p
              data-reveal
              className="mt-6 text-lg leading-relaxed text-ink-fg-muted max-w-xl"
            >
              We engineer software systems, digital products, and intelligent
              solutions that turn complex problems into technology that works.
            </p>

            <div data-reveal className="mt-10 flex flex-wrap items-center gap-4">
              <MagneticButton>
                <Link
                  href="#contact"
                  className="group inline-flex items-center gap-2 rounded-md bg-brand-500 hover:bg-brand-400 transition-colors px-5 py-3 text-sm font-medium text-white"
                >
                  Start a Project
                  <ArrowRight
                    size={16}
                    className="transition-transform group-hover:translate-x-0.5"
                  />
                </Link>
              </MagneticButton>
              <Link
                href="#portfolio"
                className="group inline-flex items-center gap-2 rounded-md border border-line px-5 py-3 text-sm font-medium text-ink-fg hover:border-brand-400/60 hover:text-brand-200 transition-colors"
              >
                Explore Our Work
                <ArrowDownRight
                  size={16}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5"
                />
              </Link>
            </div>

            <p data-reveal className="mt-4 text-sm text-ink-fg-muted">
              We turn complex problems into reliable software systems.
            </p>
          </div>
        </div>
      </HeroIntro>

      <HeroMark />
    </section>
  );
}
