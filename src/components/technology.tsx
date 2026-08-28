import { ScrollReveal } from "@/components/scroll-reveal";

const STACK_GROUPS = [
  {
    label: "Languages",
    items: ["Python", "JavaScript", "TypeScript"],
  },
  {
    label: "Frameworks & Runtime",
    items: ["React", "Next.js", "Flutter", "Node.js", ".NET", "Laravel"],
  },
  {
    label: "Data",
    items: ["PostgreSQL", "SQL Server", "Firebase", "Supabase"],
  },
  {
    label: "Platforms & AI",
    items: ["Cloud Platforms", "AI / ML"],
  },
];

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
            We choose technology based on the problem, not the trend — and go
            deep on a focused set rather than chasing every new tool.
          </p>
        </ScrollReveal>

        <dl className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-line bg-line lg:grid-cols-2">
          {STACK_GROUPS.map((group, i) => (
            <ScrollReveal key={group.label} delay={(i % 2) * 0.06}>
              <div className="flex h-full flex-col gap-4 bg-ink p-7 lg:flex-row lg:gap-6">
                <dt className="shrink-0 font-mono text-xs tracking-widest text-brand-300 lg:w-36 lg:pt-1.5">
                  {group.label.toUpperCase()}
                </dt>
                <dd className="min-w-0">
                  <ul className="flex flex-wrap gap-2">
                    {group.items.map((tech) => (
                      <li
                        key={tech}
                        className="rounded-full border border-line bg-ink-2 px-3.5 py-1.5 font-mono text-xs text-ink-fg-muted"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>
                </dd>
              </div>
            </ScrollReveal>
          ))}
        </dl>
      </div>
    </section>
  );
}
