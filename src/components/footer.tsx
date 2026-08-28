import Image from "next/image";
import Link from "next/link";
import { Mail } from "lucide-react";
import { NAV_LINKS, SITE } from "@/lib/site";

const LINKS = [...NAV_LINKS, { href: "#contact", label: "Contact" }];

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
                className="inline-flex h-9 items-center gap-2 rounded-md border border-line px-3 text-sm text-ink-fg-muted transition-colors hover:border-brand-400/60 hover:text-brand-200"
              >
                <Mail size={16} />
                {SITE.email}
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
