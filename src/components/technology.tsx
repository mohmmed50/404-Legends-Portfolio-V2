import { ScrollReveal } from "@/components/scroll-reveal";

const STACK = [
  "Python",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Flutter",
  "Node.js",
  ".NET",
  "Laravel",
  "PostgreSQL",
  "SQL Server",
  "Firebase",
  "Supabase",
  "Cloud Platforms",
  "AI / ML",
];

function StackPills() {
  return (
    <>
      {STACK.map((tech) => (
        <li
          key={tech}
          className="shrink-0 rounded-full border border-line bg-ink-2 px-4 py-2 font-mono text-xs text-ink-fg-muted"
        >
          {tech}
        </li>
      ))}
    </>
  );
}

export function Technology() {
  return (
    <section id="technology" className="border-b border-line bg-ink-2/40">
      <div className="mx-auto max-w-(--container-max) px-6 lg:px-10 py-24 lg:py-32">
        <ScrollReveal className="max-w-2xl">
          <span className="font-mono text-xs tracking-widest text-brand-300">
            TECHNOLOGY
          </span>
          <h2 className="mt-4 font-display font-semibold text-3xl sm:text-4xl leading-tight tracking-tight text-ink-fg">
            The stack behind the work
          </h2>
          <p className="mt-5 text-base leading-relaxed text-ink-fg-muted">
            We choose technology based on the problem, not the trend.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.08}>
          <div
            className="mt-12 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]"
          >
            <ul className="marquee-track flex w-max items-center gap-3">
              <StackPills />
              <StackPills />
            </ul>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
