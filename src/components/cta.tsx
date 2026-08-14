import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ScrollReveal } from "@/components/scroll-reveal";
import { MagneticButton } from "@/components/magnetic-button";

export function CTA() {
  return (
    <section id="contact" className="relative overflow-hidden border-b border-line bg-ink">
      <div
        className="absolute inset-0 hex-grid opacity-40"
        aria-hidden
      />
      <div
        className="absolute left-1/2 top-1/2 h-[28rem] w-[28rem] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-20 blur-3xl animate-pulse-slow"
        style={{
          background:
            "radial-gradient(closest-side, var(--color-brand-500), transparent)",
        }}
        aria-hidden
      />

      <div className="relative mx-auto max-w-(--container-max) px-6 lg:px-10 py-24 lg:py-32 text-center">
        <ScrollReveal className="mx-auto max-w-2xl">
          <h2 className="font-display font-semibold text-3xl sm:text-4xl lg:text-5xl leading-tight tracking-tight text-ink-fg">
            Have a problem worth engineering a solution for?
          </h2>
          <p className="mt-6 text-lg text-ink-fg-muted">
            Tell us what you&apos;re building. We&apos;ll tell you how we&apos;d
            build it.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <MagneticButton>
              <Link
                href="mailto:hello@404legends.com"
                className="group inline-flex items-center gap-2 rounded-md bg-brand-500 hover:bg-brand-400 transition-colors px-6 py-3.5 text-sm font-medium text-white"
              >
                Start a Project
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-0.5"
                />
              </Link>
            </MagneticButton>
          </div>
          <p className="mt-5 font-mono text-sm text-ink-fg-muted">
            hello@404legends.com
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
