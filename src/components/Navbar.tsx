"use client";

import { useEffect, useState } from "react";
import { Menu, X, Download } from "lucide-react";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "./ThemeToggle";

const links = [
  { href: "#why", label: "Why Wiggle" },
  { href: "#about", label: "About" },
  { href: "#roles", label: "Roles" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Work" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [lastY, setLastY] = useState(0);

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const y = window.scrollY;
        setScrolled(y > 12);
        setHidden(y > lastY && y > 80);
        setLastY(y);
        ticking = false;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [lastY]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        hidden && !open ? "-translate-y-full" : "translate-y-0",
        scrolled
          ? "border-b border-slate-200/70 bg-white/70 shadow-sm backdrop-blur-xl dark:border-slate-800/80 dark:bg-slate-950/70 dark:shadow-none"
          : "bg-transparent"
      )}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3.5 sm:px-6 lg:px-8">
        <a
          href="#"
          className="group text-sm font-semibold tracking-tight text-slate-900 dark:text-white"
        >
          Brightwell
          <span className="text-brand-600 dark:text-brand-400 transition-colors group-hover:text-accent-500">
            →Wiggle
          </span>
        </a>

        <nav className="hidden items-center gap-1 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-full px-3 py-1.5 text-sm text-slate-600 transition hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800/80 dark:hover:text-white"
            >
              {l.label}
            </a>
          ))}
          <a
            href="/resume"
            className="ml-2 inline-flex items-center gap-1.5 rounded-full bg-slate-900 px-3.5 py-1.5 text-sm font-medium text-white transition hover:bg-brand-600 dark:bg-white dark:text-slate-900 dark:hover:bg-brand-400"
          >
            <Download size={14} />
            CV
          </a>
          <div className="ml-2">
            <ThemeToggle />
          </div>
        </nav>

        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />
          <button
            type="button"
            className="rounded-full p-2 text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-slate-200/80 bg-white/95 px-4 py-4 backdrop-blur-xl dark:border-slate-800 dark:bg-slate-950/95 lg:hidden">
          <nav className="flex flex-col gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
              >
                {l.label}
              </a>
            ))}
            <a
              href="/resume"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-xl bg-slate-900 px-3 py-2.5 text-center text-sm font-medium text-white dark:bg-white dark:text-slate-900"
            >
              Download CV
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
