"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const LINKS = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#process", label: "Process" },
  { href: "#projects", label: "Projects" },
  { href: "#technology", label: "Technology" },
];

export function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "bg-ink/85 backdrop-blur-md border-b border-line"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav
        aria-label="Primary"
        className="mx-auto max-w-(--container-max) px-6 lg:px-10 h-18 flex items-center justify-between"
        style={{ height: "4.5rem" }}
      >
        <Link
          href="#top"
          className="flex items-center gap-2.5 shrink-0"
          aria-label="404 Legends — home"
        >
          <Image
            src="/brand/mark.png"
            alt=""
            width={34}
            height={34}
            priority
            className="h-8 w-8"
          />
          <span className="font-display font-semibold text-[1.05rem] tracking-tight text-ink-fg">
            404 <span className="text-brand-400">LEGENDS</span>
          </span>
        </Link>

        <ul className="hidden md:flex items-center gap-8">
          {LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-sm text-ink-fg-muted hover:text-ink-fg transition-colors"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <Link
            href="#contact"
            className="inline-flex items-center rounded-md bg-brand-500 hover:bg-brand-400 transition-colors px-4 py-2 text-sm font-medium text-white"
          >
            Start a Project
          </Link>
        </div>

        <button
          type="button"
          className="md:hidden inline-flex items-center justify-center h-10 w-10 text-ink-fg"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-ink border-t border-line">
          <ul className="px-6 py-4 flex flex-col gap-1">
            {LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block py-2.5 text-base text-ink-fg-muted hover:text-ink-fg transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="pt-2">
              <Link
                href="#contact"
                onClick={() => setOpen(false)}
                className="inline-flex w-full items-center justify-center rounded-md bg-brand-500 px-4 py-2.5 text-sm font-medium text-white"
              >
                Start a Project
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
