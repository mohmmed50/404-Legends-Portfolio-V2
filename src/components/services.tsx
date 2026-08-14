import {
  Code2,
  Globe,
  Smartphone,
  Network,
  Workflow,
  Sparkles,
  Plug,
} from "lucide-react";
import { ScrollReveal } from "@/components/scroll-reveal";
import { TiltCard } from "@/components/tilt-card";

const SERVICES = [
  {
    icon: Code2,
    title: "Software Engineering",
    description:
      "Custom software systems built around real business requirements.",
  },
  {
    icon: Globe,
    title: "Web Applications",
    description: "Scalable, responsive, production-ready web platforms.",
  },
  {
    icon: Smartphone,
    title: "Mobile Applications",
    description: "Cross-platform and native mobile experiences.",
  },
  {
    icon: Network,
    title: "System Architecture",
    description:
      "APIs, databases, integrations, infrastructure, and scalable architecture.",
  },
  {
    icon: Workflow,
    title: "Automation",
    description:
      "Turn repetitive workflows into reliable automated systems.",
  },
  {
    icon: Sparkles,
    title: "AI & Intelligent Systems",
    description:
      "AI-powered applications, computer vision, automation, and intelligent workflows.",
  },
  {
    icon: Plug,
    title: "System Integration",
    description:
      "Connect existing systems, APIs, databases, and third-party services.",
  },
];

export function Services() {
  return (
    <section id="services" className="border-b border-line bg-ink">
      <div className="mx-auto max-w-(--container-max) px-6 lg:px-10 py-24 lg:py-32">
        <ScrollReveal className="max-w-2xl">
          <span className="font-mono text-xs tracking-widest text-brand-300">
            CAPABILITIES
          </span>
          <h2 className="mt-4 font-display font-semibold text-3xl sm:text-4xl leading-tight tracking-tight text-ink-fg">
            What we build
          </h2>
        </ScrollReveal>

        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map(({ icon: Icon, title, description }, i) => (
            <ScrollReveal key={title} delay={(i % 3) * 0.06}>
              <TiltCard className="h-full bg-ink-2 p-7 transition-colors hover:bg-ink-3">
                <Icon size={22} className="text-brand-400" strokeWidth={1.75} />
                <h3 className="mt-5 font-display font-semibold text-base text-ink-fg">
                  {title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-fg-muted">
                  {description}
                </p>
              </TiltCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
