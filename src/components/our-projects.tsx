import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ClipboardList, GraduationCap } from "lucide-react";
import { ScrollReveal } from "@/components/scroll-reveal";

type Project = {
  name: string;
  description: string;
  tags: string[];
  repo?: string;
  href?: string;
  image?: string;
  icon?: typeof ClipboardList;
  live?: string;
};

const PROJECTS: Project[] = [
  {
    name: "RSA Academy",
    description:
      "Education platform for tutoring centres — four role-based portals, real-time grading, and scheduled payment and attendance reminders.",
    tags: ["Next.js", "Supabase", "TypeScript"],
    repo: "RSA-Acadamy",
    image: "/projects/rsa-academy.png",
    live: "https://rsa-academy.online",
  },
  {
    name: "ZNU Queue & Ticket System",
    description:
      "Queue and ticket-printing system in three synced parts: a desktop printer app, a public display, and a staff call page, live over Supabase.",
    tags: ["PySide6", "Next.js", "Supabase Realtime"],
    repo: "-ZNU_counter",
    image: "/projects/znu-counter.png",
    live: "https://znu-counter-voice.vercel.app",
  },
  {
    name: "Student Records System",
    description:
      "ASP.NET Core system for equivalent-certificate students: automatic grade calculation per certificate, three-role review dashboards, and a full audit log.",
    tags: [".NET 8", "EF Core", "SQL Server"],
    repo: "dynamic--form-based-web-application",
    icon: ClipboardList,
  },
  {
    name: "Hydration & Prayer Reminder Bot",
    description:
      "Windows background bot that schedules activity-based hydration breaks around local prayer times, with an offline cache when the API is unreachable.",
    tags: ["Python", "Win32", "Aladhan API"],
    repo: "reminder-drink-prayer",
    image: "/projects/reminder-drink-prayer.png",
  },
  {
    name: "Learn Academy",
    description:
      "Education platform variant focused on the financial side of a centre — parent payments, teacher salaries, financial reports, and daily cron reminders.",
    tags: ["Next.js", "Supabase", "Tailwind"],
    repo: "learn-academy",
    image: "/projects/learn-academy.png",
  },
  {
    name: "Wedding Invitations (3 editions)",
    description:
      "Three digital wedding-invitation builds — splash screen, live countdown, maps and RSVP — each fully customisable from a single config file.",
    tags: ["HTML", "CSS", "Vanilla JS"],
    href: "https://github.com/ebrahimmehasen?tab=repositories&q=wedding-invitation",
    image: "/projects/wedding-invitation1.png",
  },
  {
    name: "Student Registration Form",
    description:
      "PHP student-intake form with server-first submission and an offline JSON/CSV fallback, built as a fully RTL Arabic interface.",
    tags: ["PHP", "JavaScript", "RTL"],
    repo: "uni",
    icon: GraduationCap,
  },
];

function projectHref(project: Project) {
  return (
    project.href ?? `https://github.com/ebrahimmehasen/${project.repo}#readme`
  );
}

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
                href={projectHref(project)}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-ink-2 transition-colors hover:border-brand-400/60"
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
                  {project.live ? (
                    <span className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full border border-brand-400/40 bg-ink/80 px-2.5 py-1 font-mono text-[0.65rem] uppercase tracking-wider text-brand-200 backdrop-blur-sm">
                      <span className="h-1.5 w-1.5 rounded-full bg-brand-400" />
                      Live
                    </span>
                  ) : null}
                </div>

                <div className="flex flex-1 flex-col p-5">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="text-sm font-semibold text-ink-fg">
                      {project.name}
                    </h3>
                    <ArrowUpRight
                      size={16}
                      className="mt-0.5 shrink-0 text-ink-fg-muted transition-colors group-hover:text-brand-300"
                    />
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-ink-fg-muted">
                    {project.description}
                  </p>
                  <ul className="mt-4 flex flex-wrap gap-1.5 pt-0.5">
                    {project.tags.map((tag) => (
                      <li
                        key={tag}
                        className="rounded-md border border-line bg-ink-3 px-2 py-0.5 font-mono text-[0.7rem] text-steel-400"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
