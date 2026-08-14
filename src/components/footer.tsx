import Image from "next/image";
import Link from "next/link";

const LINKS = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#process", label: "Process" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#technology", label: "Technology" },
  { href: "#contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="bg-ink">
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
              Where 404 Becomes Legend. We turn complex problems into
              reliable software systems.
            </p>
          </div>

          <nav aria-label="Footer" className="grid grid-cols-2 gap-x-10 gap-y-2 sm:grid-cols-3">
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
          <p>&copy; {new Date().getFullYear()} 404 Legends. All rights reserved.</p>
          <p className="font-mono">PREMIUM SOFTWARE SOLUTIONS</p>
        </div>
      </div>
    </footer>
  );
}
