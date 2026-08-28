import Image from "next/image";
import Link from "next/link";
import { Mail } from "lucide-react";
import { NAV_LINKS, SITE } from "@/lib/site";

const LINKS = [...NAV_LINKS, { href: "#contact", label: "Contact" }];

function GithubMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" width={16} height={16} aria-hidden className={className}>
      <path
        fill="currentColor"
        d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8Z"
      />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-line bg-ink">
      <div className="mx-auto max-w-(--container-max) px-6 lg:px-10 py-14">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-sm">
            <Link href="#top" className="inline-flex items-center gap-2.5">
              <Image
                src="/brand/mark.png"
                alt=""
                width={28}
                height={28}
                className="h-7 w-7"
              />
              <span className="font-display font-semibold text-base text-ink-fg">
                404 <span className="text-brand-400">LEGENDS</span>
              </span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-ink-fg-muted">
              {SITE.tagline} We turn complex problems into reliable software
              systems.
            </p>
            <div className="mt-5 flex items-center gap-3">
              <Link
                href={`mailto:${SITE.email}`}
                aria-label="Email 404 Legends"
                className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-line text-ink-fg-muted transition-colors hover:border-brand-400/60 hover:text-brand-200"
              >
                <Mail size={16} />
              </Link>
              <Link
                href={SITE.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="404 Legends on GitHub"
                className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-line text-ink-fg-muted transition-colors hover:border-brand-400/60 hover:text-brand-200"
              >
                <GithubMark />
              </Link>
            </div>
          </div>

          <nav
            aria-label="Footer"
            className="grid grid-cols-2 gap-x-10 gap-y-2 sm:grid-cols-3"
          >
            {LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-ink-fg-muted hover:text-ink-fg transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-line pt-6 text-xs text-ink-fg-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {new Date().getFullYear()} {SITE.name}. All rights reserved.
          </p>
          <p className="font-mono">PREMIUM SOFTWARE SOLUTIONS</p>
        </div>
      </div>
    </footer>
  );
}
