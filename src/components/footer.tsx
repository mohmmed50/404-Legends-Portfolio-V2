import Image from "next/image";
import Link from "next/link";
import { Mail } from "lucide-react";
import { NAV_LINKS, SITE } from "@/lib/site";

const LINKS = [...NAV_LINKS, { href: "#contact", label: "Contact" }];

function WhatsappMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" width={16} height={16} aria-hidden className={className}>
      <path
        fill="currentColor"
        d="M8.02 0A7.94 7.94 0 0 0 1.1 11.9L0 16l4.2-1.1A7.94 7.94 0 1 0 8.02 0Zm0 1.46a6.48 6.48 0 0 1 5.54 9.86l-.2.32.65 2.38-2.44-.64-.31.18a6.48 6.48 0 1 1-3.24-12.1Zm-2.6 3.5c-.14 0-.36.05-.55.26-.19.2-.72.7-.72 1.7s.74 1.98.84 2.12c.1.13 1.43 2.28 3.54 3.1 1.75.68 2.11.55 2.49.51.38-.03 1.22-.5 1.4-.98.17-.48.17-.9.12-.98-.05-.09-.19-.14-.4-.24-.2-.1-1.22-.6-1.41-.67-.19-.07-.33-.1-.47.1-.14.21-.53.67-.65.8-.12.14-.24.16-.44.06-.2-.1-.86-.32-1.63-1.01-.6-.54-1.01-1.2-1.13-1.4-.12-.21-.01-.32.09-.42.09-.09.2-.24.3-.36.1-.12.13-.2.2-.34.07-.14.03-.26-.02-.36-.05-.1-.45-1.12-.63-1.53-.15-.36-.3-.36-.44-.37h-.38Z"
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
            <div className="mt-5 flex flex-wrap items-center gap-3">
              <Link
                href={`mailto:${SITE.email}`}
                aria-label="Email 404 Legends"
                className="inline-flex h-9 items-center gap-2 rounded-md border border-line px-3 text-sm text-ink-fg-muted transition-colors hover:border-brand-400/60 hover:text-brand-200"
              >
                <Mail size={16} />
                {SITE.email}
              </Link>
              <Link
                href={SITE.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Message 404 Legends on WhatsApp"
                className="inline-flex h-9 items-center gap-2 rounded-md border border-line px-3 text-sm text-ink-fg-muted transition-colors hover:border-brand-400/60 hover:text-brand-200"
              >
                <WhatsappMark />
                WhatsApp
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
