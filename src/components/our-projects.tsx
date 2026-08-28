import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ClipboardList, GraduationCap } from "lucide-react";
import { ScrollReveal } from "@/components/scroll-reveal";

type Project = {
  name: string;
  repo?: string;
  href?: string;
  image?: string;
  icon?: typeof ClipboardList;
};

const PROJECTS: Project[] = [
  {
    name: "RSA Academy",
    repo: "RSA-Acadamy",
    image: "/projects/rsa-academy.png",
  },
  {
    name: "Hydration & Prayer Reminder Bot",
    repo: "reminder-drink-prayer",
    image: "/projects/reminder-drink-prayer.png",
  },
  {
    name: "ZNU Queue & Ticket System",
    repo: "-ZNU_counter",
    image: "/projects/znu-counter.png",
  },
  {
    name: "Student Records System",
    repo: "dynamic--form-based-web-application",
    icon: ClipboardList,
  },
  {
    name: "Wedding Invitations (3 editions)",
    href: "https://github.com/ebrahimmehasen?tab=repositories&q=wedding-invitation",
    image: "/projects/wedding-invitation1.png",
  },
  {
    name: "Learn Academy",
    repo: "learn-academy",
    image: "/projects/learn-academy.png",
  },
  {
    name: "Student Registration Form",
    repo: "uni",
    icon: GraduationCap,
  },
];

export function OurProjects() {
  return (
    <section id="projects" className="border-b border-line bg-ink">
      <div className="mx-auto max-w-(--container-max) px-6 lg:px-10 py-24 lg:py-32">
        <ScrollReveal className="max-w-2xl">
          <span className="font-mono text-xs tracking-widest text-brand-300">
            OUR PROJECTS
          </span>
          <h2 className="mt-4 font-display font-semibold text-3xl sm:text-4xl leading-tight tracking-tight text-ink-fg">
            Real work, shipped and running.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-ink-fg-muted">
            A selection of systems we&apos;ve engineered end to end. Open any
            project to read its full technical README on GitHub.
          </p>
        </ScrollReveal>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((project, i) => (
            <ScrollReveal key={project.repo ?? project.href} delay={(i % 3) * 0.06}>
              <Link
                href={
                  project.href ??
                  `https://github.com/ebrahimmehasen/${project.repo}#readme`
                }
                target="_blank"
                rel="noopener noreferrer"
                className="group block h-full overflow-hidden rounded-2xl border border-line bg-ink-2 transition-colors hover:border-brand-400/60"
              >
                <div className="relative aspect-16/10 overflow-hidden bg-ink-3">
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={`${project.name} screenshot`}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-ink-3 to-ink-2">
                      <div className="hex-grid absolute inset-0 opacity-25" aria-hidden />
                      {project.icon ? (
                        <project.icon
                          size={40}
                          strokeWidth={1.5}
                          className="relative text-brand-400 transition-transform duration-500 group-hover:scale-110"
                        />
                      ) : null}
                    </div>
                  )}
                </div>
                <div className="flex items-center justify-between px-5 py-4">
                  <span className="text-sm font-medium text-ink-fg">
                    {project.name}
                  </span>
                  <ArrowUpRight
                    size={16}
                    className="shrink-0 text-ink-fg-muted transition-colors group-hover:text-brand-300"
                  />
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
