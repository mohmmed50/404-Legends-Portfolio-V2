import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { ScrollReveal } from "@/components/scroll-reveal";
import { MagneticButton } from "@/components/magnetic-button";
import { SITE } from "@/lib/site";

const MAILTO = `mailto:${SITE.email}?subject=${encodeURIComponent(
  "Project inquiry — 404 Legends"
)}`;

export function CTA() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden border-b border-line bg-ink"
    >
      <div className="absolute inset-0 hex-grid opacity-40" aria-hidden />
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
          <span className="font-mono text-xs tracking-widest text-brand-300">
            START HERE
          </span>
          <h2 className="mt-4 font-display font-semibold text-3xl sm:text-4xl lg:text-5xl leading-tight tracking-tight text-ink-fg">
            Have a problem worth engineering a solution for?
          </h2>
          <p className="mt-6 text-lg text-ink-fg-muted">
            Tell us what you&apos;re building and where it&apos;s stuck.
            We&apos;ll come back with how we&apos;d approach it — scope, stack,
            and the risks worth knowing about.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <MagneticButton>
              <Link
                href={MAILTO}
                className="group inline-flex items-center gap-2 rounded-md bg-brand-500 hover:bg-brand-400 transition-colors px-6 py-3.5 text-sm font-medium text-white"
              >
                Start a Project
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-0.5"
                />
              </Link>
            </MagneticButton>
            <Link
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-md border border-line px-6 py-3.5 text-sm font-medium text-ink-fg hover:border-brand-400/60 hover:text-brand-200 transition-colors"
            >
              See the work first
              <ArrowUpRight
                size={16}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
          </div>

          <p className="mt-6 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 font-mono text-sm text-ink-fg-muted">
            <Link
              href={MAILTO}
              className="transition-colors hover:text-brand-200"
            >
              {SITE.email}
            </Link>
            <span className="text-line" aria-hidden>
              /
            </span>
            <Link
              href={SITE.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-brand-200"
            >
              WhatsApp
            </Link>
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
