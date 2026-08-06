// src/components/layout/Navbar.tsx
'use client';

import { useEffect, useState, useRef } from 'react';
import { Menu, X, Download, Sparkles, Home, User, Briefcase, Layers, Mail, Award } from 'lucide-react';
import { cn } from '@/lib/utils';
import { ThemeToggle } from './ThemeToggle';
import { motion, AnimatePresence, Variants } from 'framer-motion';

const links = [
  { href: '#why', label: 'Why Wiggle', icon: Sparkles },
  { href: '#about', label: 'About', icon: User },
  { href: '#roles', label: 'Roles', icon: Briefcase },
  { href: '#experience', label: 'Experience', icon: Award },
  { href: '#projects', label: 'Work', icon: Layers },
  { href: '#contact', label: 'Contact', icon: Mail },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const lastYRef = useRef(0);
  const headerRef = useRef<HTMLElement>(null);

  // Scroll handling — lastY stored in a ref so the effect does not re-subscribe on every scroll
  useEffect(() => {
    let ticking = false;

    const onScroll = () => {
      if (ticking) return;
      ticking = true;

      requestAnimationFrame(() => {
        const y = window.scrollY;
        const isScrolled = y > 12;
        const shouldHide = y > lastYRef.current && y > 80;

        setScrolled(isScrolled);
        setHidden(shouldHide);
        lastYRef.current = y;

        const sections = document.querySelectorAll('section[id]');
        let currentSection = '';
        sections.forEach((section) => {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            currentSection = section.id;
          }
        });
        setActiveSection(currentSection);

        ticking = false;
      });
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const navVariants: Variants = {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring' as const, stiffness: 300, damping: 30 },
    },
  };

  const mobileMenuVariants: Variants = {
    closed: {
      opacity: 0,
      y: -20,
      height: 0,
      transition: { type: 'spring' as const, stiffness: 400, damping: 35 },
    },
    open: {
      opacity: 1,
      y: 0,
      height: 'auto',
      transition: {
        type: 'spring' as const,
        stiffness: 400,
        damping: 35,
        staggerChildren: 0.05,
        delayChildren: 0.1,
      },
    },
  };

  const mobileItemVariants: Variants = {
    closed: { opacity: 0, x: -20 },
    open: { opacity: 1, x: 0 },
  };

  return (
    <>
      <motion.header
        ref={headerRef}
        variants={navVariants}
        initial="visible"
        animate={hidden && !open ? 'hidden' : 'visible'}
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          scrolled
            ? 'border-b border-slate-200/50 dark:border-slate-800/50 bg-white/80 dark:bg-slate-950/80 backdrop-blur-xl shadow-lg shadow-slate-200/20 dark:shadow-none'
            : 'bg-transparent'
        )}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2.5 sm:px-6 lg:px-8">
          <a
            href="#"
            className="group relative flex items-center gap-2 text-sm font-semibold tracking-tight text-slate-900 dark:text-white"
          >
            <Home className="h-4 w-4 text-brand-600 dark:text-brand-400" />
            <span className="relative text-slate-900 dark:text-white">
              Brightwell
              <span className="absolute -bottom-0.5 left-0 h-0.5 w-0 bg-gradient-to-r from-brand-500 to-accent-500 transition-all duration-300 group-hover:w-full" />
            </span>
          </a>

          <nav className="hidden items-center gap-0.5 lg:flex" role="navigation" aria-label="Main navigation">
            {links.map((link) => {
              const Icon = link.icon;
              const isActive = activeSection === link.href.replace('#', '');

              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={cn(
                    'relative rounded-full px-3 py-1.5 text-sm font-medium transition-all duration-200',
                    isActive
                      ? 'text-brand-600 dark:text-brand-400'
                      : 'text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
                  )}
                  aria-current={isActive ? 'page' : undefined}
                >
                  <span className="flex items-center gap-1.5">
                    <Icon
                      className={cn(
                        'h-3.5 w-3.5',
                        isActive ? 'text-brand-600 dark:text-brand-400' : 'text-slate-500 dark:text-slate-400'
                      )}
                    />
                    {link.label}
                  </span>
                  {isActive && (
                    <span className="absolute -bottom-0.5 left-1/2 h-0.5 w-6 -translate-x-1/2 rounded-full bg-gradient-to-r from-brand-500 to-accent-500" />
                  )}
                </a>
              );
            })}

            <a
              href="/resume"
              className="group relative ml-2 inline-flex items-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-slate-900 to-slate-800 dark:from-white dark:to-slate-200 px-3.5 py-1.5 text-sm font-medium text-white dark:text-slate-900 shadow-lg shadow-slate-900/20 dark:shadow-none transition-all hover:shadow-xl hover:shadow-slate-900/30 dark:hover:shadow-brand-400/20"
            >
              <Download size={14} className="text-white dark:text-slate-900" />
              <span className="relative">CV</span>
            </a>

            <div className="ml-2">
              <ThemeToggle />
            </div>
          </nav>

          <div className="flex items-center gap-2 lg:hidden">
            <ThemeToggle />
            <button
              type="button"
              className="relative rounded-full p-2 text-slate-700 dark:text-slate-300 transition-colors hover:bg-slate-100 dark:hover:bg-slate-800"
              onClick={() => setOpen(!open)}
              aria-label={open ? 'Close menu' : 'Open menu'}
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              variants={mobileMenuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="border-t border-slate-200/50 dark:border-slate-800/50 bg-white/95 dark:bg-slate-950/95 backdrop-blur-xl lg:hidden"
            >
              <nav className="flex flex-col gap-1 px-4 py-4" role="navigation" aria-label="Mobile navigation">
                {links.map((link) => {
                  const Icon = link.icon;
                  const isActive = activeSection === link.href.replace('#', '');

                  return (
                    <motion.a
                      key={link.href}
                      href={link.href}
                      onClick={() => setOpen(false)}
                      variants={mobileItemVariants}
                      className={cn(
                        'flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium transition-all duration-200',
                        isActive
                          ? 'bg-brand-50 dark:bg-brand-950/30 text-brand-600 dark:text-brand-400'
                          : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                      )}
                      aria-current={isActive ? 'page' : undefined}
                    >
                      <Icon
                        className={cn(
                          'h-4 w-4',
                          isActive ? 'text-brand-500 dark:text-brand-400' : 'text-slate-400 dark:text-slate-500'
                        )}
                      />
                      {link.label}
                    </motion.a>
                  );
                })}

                <motion.a
                  href="/resume"
                  onClick={() => setOpen(false)}
                  variants={mobileItemVariants}
                  className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-slate-900 to-slate-800 dark:from-white dark:to-slate-200 px-3 py-3 text-sm font-medium text-white dark:text-slate-900"
                >
                  <Download size={16} />
                  Download CV
                </motion.a>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      <div className="h-14 lg:h-16" />
    </>
  );
}
