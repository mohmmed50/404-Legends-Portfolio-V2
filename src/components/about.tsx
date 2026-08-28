import { ScrollReveal } from "@/components/scroll-reveal";

const FOUR_ZERO_FOUR = [
  "A missing piece",
  "A broken system",
  "A workflow no one has automated",
  "A problem no one has solved yet",
];

const LEGENDS = [
  "Production systems, not prototypes",
  "Architecture that survives scale",
  "Code we can hand over and support",
  "Judgment on what to build — and what not to",
];

const FOOTPRINT = [
  "Education platforms",
  "Queue & operations systems",
  "Internal tools & dashboards",
  "Automation & AI workflows",
];

export function About() {
  return (
    <section id="about" className="border-b border-line bg-ink">
      <div className="mx-auto max-w-(--container-max) px-6 lg:px-10 py-24 lg:py-32">
        <ScrollReveal className="max-w-2xl">
          <span className="font-mono text-xs tracking-widest text-brand-300">
            ABOUT 404 LEGENDS
          </span>
          <h2 className="mt-4 font-display font-semibold text-3xl sm:text-4xl leading-tight tracking-tight text-ink-fg">
            A software engineering studio, not a website shop.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-ink-fg-muted">
            404 Legends builds custom software, web and mobile applications,
            enterprise systems, and AI-powered products for organizations that
            need technology they can rely on. We take a problem from first
            conversation to a system running in production — and stay
            accountable for how it holds up.
          </p>
        </ScrollReveal>

        <div className="mt-16 grid gap-6 lg:grid-cols-2">
          <ScrollReveal delay={0.05}>
            <div className="flex h-full flex-col rounded-2xl border border-line bg-ink-2 p-8">
              <span className="font-display font-semibold text-5xl text-steel-200">
                404
              </span>
              <p className="mt-3 text-sm text-ink-fg-muted">
                Every hard problem starts as a 404 — something missing, broken,
                or unsolved.
              </p>
              <ul className="mt-6 space-y-2.5">
                {FOUR_ZERO_FOUR.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-sm text-ink-fg-muted"
                  >
                    <span className="h-1 w-1 shrink-0 rounded-full bg-steel-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.12}>
            <div className="flex h-full flex-col rounded-2xl border border-brand-700/50 bg-gradient-to-br from-brand-900/40 to-ink-2 p-8">
              <span className="font-display font-semibold text-5xl text-gradient-brand">
                LEGENDS
              </span>
              <p className="mt-3 text-sm text-ink-fg-muted">
                What we bring to it — engineering discipline and the standard we
                hold every build to.
              </p>
              <ul className="mt-6 space-y-2.5">
                {LEGENDS.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-sm text-ink-fg-muted"
                  >
                    <span className="h-1 w-1 shrink-0 rounded-full bg-brand-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={0.05}>
          <div className="mt-6 flex flex-col gap-4 rounded-2xl border border-line bg-ink-2 p-6 sm:flex-row sm:items-center sm:gap-8">
            <span className="font-mono text-xs tracking-widest text-brand-300 whitespace-nowrap">
              WHAT WE&apos;VE BUILT
            </span>
            <ul className="flex flex-wrap gap-x-6 gap-y-2">
              {FOOTPRINT.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2.5 text-sm text-ink-fg-muted"
                >
                  <span className="h-1 w-1 shrink-0 rounded-full bg-brand-400" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
