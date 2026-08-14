import { ScrollReveal } from "@/components/scroll-reveal";

const FOUR_ZERO_FOUR = ["Errors", "Missing pieces", "Broken systems", "Hard problems"];
const LEGENDS = ["Expertise", "Engineering", "Reliability", "Ambition"];

export function About() {
  return (
    <section id="about" className="border-b border-line bg-ink">
      <div className="mx-auto max-w-(--container-max) px-6 lg:px-10 py-24 lg:py-32">
        <ScrollReveal className="max-w-2xl">
          <span className="font-mono text-xs tracking-widest text-brand-300">
            ABOUT 404 LEGENDS
          </span>
          <h2 className="mt-4 font-display font-semibold text-3xl sm:text-4xl leading-tight tracking-tight text-ink-fg">
            We turn complex problems into reliable software systems.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-ink-fg-muted">
            404 Legends is a software engineering and digital solutions
            company. We build custom software, web and mobile applications,
            enterprise systems, and AI-powered products for organizations
            that need technology they can rely on — not just a website.
          </p>
        </ScrollReveal>

        <div className="mt-16 grid gap-6 lg:grid-cols-2">
          <ScrollReveal delay={0.05}>
            <div className="h-full rounded-2xl border border-line bg-ink-2 p-8">
              <span className="font-display font-semibold text-5xl text-steel-200">
                404
              </span>
              <p className="mt-3 text-sm text-ink-fg-muted">
                Every hard problem starts as one: a missing piece, a broken
                system, a challenge no one has solved yet.
              </p>
              <ul className="mt-6 space-y-2.5">
                {FOUR_ZERO_FOUR.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-sm text-ink-fg-muted"
                  >
                    <span className="h-1 w-1 rounded-full bg-steel-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.12}>
            <div className="h-full rounded-2xl border border-brand-700/50 bg-gradient-to-br from-brand-900/40 to-ink-2 p-8">
              <span className="font-display font-semibold text-5xl text-gradient-brand">
                LEGENDS
              </span>
              <p className="mt-3 text-sm text-ink-fg-muted">
                What we bring to it: engineering discipline, judgment, and
                the ambition to build things that hold up under pressure.
              </p>
              <ul className="mt-6 space-y-2.5">
                {LEGENDS.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-sm text-ink-fg-muted"
                  >
                    <span className="h-1 w-1 rounded-full bg-brand-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
