"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const links = [
  { href: "/about", label: "About" },
  { href: "/portfolio", label: "Work" },
  { href: "/contact", label: "Contact" },
];

const Nav = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#07111f]/80 backdrop-blur-xl">
      <nav className="mx-auto flex h-[4.5rem] max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8" aria-label="Primary navigation">
        <Link href="/" className="font-mono text-sm font-semibold tracking-[0.14em] text-white" onClick={() => setIsOpen(false)}>
          AR<span className="text-cyan-300">/</span>
        </Link>

        <div className="hidden items-center gap-2 md:flex">
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-md px-3 py-2 text-sm font-medium transition ${
                  active ? "bg-white/10 text-white" : "text-slate-300 hover:bg-white/5 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <a
            href="mailto:saifullahemo@gmail.com"
            className="ml-2 rounded-full bg-cyan-300 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200"
          >
            Hire me
          </a>
        </div>

        <button
          type="button"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((open) => !open)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-white/15 bg-white/5 text-white md:hidden"
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {isOpen && (
        <div className="border-t border-white/10 bg-[#07111f] px-5 py-4 md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-2">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="rounded-md px-3 py-3 text-base font-medium text-slate-200 hover:bg-white/5"
              >
                {link.label}
              </Link>
            ))}
            <a
              href="mailto:saifullahemo@gmail.com"
              className="mt-2 rounded-md bg-cyan-300 px-3 py-3 text-center text-base font-semibold text-slate-950"
            >
              Hire me
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Nav;
