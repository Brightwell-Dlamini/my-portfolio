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
  const [lastY, setLastY] = useState(0);
  const [activeSection, setActiveSection] = useState('');
  const headerRef = useRef<HTMLElement>(null);

  // Enhanced scroll handling with throttling
  useEffect(() => {
    let ticking = false;

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      
      requestAnimationFrame(() => {
        const y = window.scrollY;
        const isScrolled = y > 12;
        const shouldHide = y > lastY && y > 80;
        
        setScrolled(isScrolled);
        setHidden(shouldHide);
        setLastY(y);
        
        // Detect active section
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
    
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, [lastY]);

  // Close mobile menu on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Lock body scroll when mobile menu is open
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

  // Animation variants with proper typing
  const navVariants: Variants = {
    hidden: { 
      y: -100, 
      opacity: 0 
    },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 300,
        damping: 30,
      }
    },
  };

  const mobileMenuVariants: Variants = {
    closed: { 
      opacity: 0,
      y: -20,
      height: 0,
      transition: {
        type: "spring" as const,
        stiffness: 400,
        damping: 35,
      }
    },
    open: { 
      opacity: 1,
      y: 0,
      height: "auto",
      transition: {
        type: "spring" as const,
        stiffness: 400,
        damping: 35,
        staggerChildren: 0.05,
        delayChildren: 0.1,
      }
    },
  };

  const mobileItemVariants: Variants = {
    closed: { opacity: 0, x: -20 },
    open: { opacity: 1, x: 0 },
  };

  const linkVariants: Variants = {
    initial: { scale: 1 },
    hover: { 
      scale: 1.05,
      transition: { 
        type: "spring" as const, 
        stiffness: 400, 
        damping: 25 
      }
    },
    tap: { scale: 0.95 },
  };

  const indicatorVariants: Variants = {
    hidden: { scale: 0, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 500,
        damping: 30,
      }
    },
  };

  return (
    <>
      <motion.header
        ref={headerRef}
        variants={navVariants}
        initial="visible"
        animate={hidden && !open ? 'hidden' : 'visible'}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled
            ? "border-b border-slate-200/50 dark:border-slate-800/50 bg-white/80 dark:bg-slate-950/80 backdrop-blur-xl shadow-lg shadow-slate-200/20 dark:shadow-none"
            : "bg-transparent"
        )}
        style={{
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(12px)' : 'none',
        }}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2.5 sm:px-6 lg:px-8">
          {/* Logo with animated glow */}
          <motion.a
            href="#"
            className="group relative flex items-center gap-2 text-sm font-semibold tracking-tight text-slate-900 dark:text-white"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <motion.div
              className="relative"
              animate={{
                rotate: [0, -5, 0, 5, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              <Home className="h-4 w-4 text-brand-600 dark:text-brand-400" />
            </motion.div>
            <span className="relative text-slate-900 dark:text-white">
              Brightwell
              <motion.span
                className="absolute -bottom-0.5 left-0 h-0.5 w-0 bg-gradient-to-r from-brand-500 to-accent-500 transition-all duration-300 group-hover:w-full"
              />
            </span>
           
            <motion.span
              className="absolute -inset-1 rounded-full bg-brand-500/0 blur-xl transition-all duration-500 group-hover:bg-brand-500/10 dark:group-hover:bg-brand-400/10"
            />
          </motion.a>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-0.5 lg:flex" role="navigation" aria-label="Main navigation">
            {links.map((link) => {
              const Icon = link.icon;
              const isActive = activeSection === link.href.replace('#', '');
              
              return (
                <motion.a
                  key={link.href}
                  href={link.href}
                  variants={linkVariants}
                  initial="initial"
                  whileHover="hover"
                  whileTap="tap"
                  className={cn(
                    "relative rounded-full px-3 py-1.5 text-sm font-medium transition-all duration-200",
                    isActive
                      ? "text-brand-600 dark:text-brand-400"
                      : "text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
                  )}
                  aria-current={isActive ? 'page' : undefined}
                >
                  <span className="flex items-center gap-1.5">
                    <Icon className={cn(
                      "h-3.5 w-3.5",
                      isActive ? "text-brand-600 dark:text-brand-400" : "text-slate-500 dark:text-slate-400"
                    )} />
                    {link.label}
                  </span>
                  
                  {/* Active indicator with spring animation */}
                  {isActive && (
                    <motion.span
                      layoutId="activeNavDot"
                      variants={indicatorVariants}
                      initial="hidden"
                      animate="visible"
                      className="absolute -bottom-0.5 left-1/2 h-0.5 w-6 -translate-x-1/2 rounded-full bg-gradient-to-r from-brand-500 to-accent-500"
                    />
                  )}
                  
                  {/* Hover background */}
                  {!isActive && (
                    <motion.span
                      className="absolute inset-0 rounded-full bg-slate-100/0 dark:bg-slate-800/0 transition-colors duration-200"
                      whileHover={{ 
                        backgroundColor: scrolled 
                          ? 'rgba(241, 245, 249, 0.8)' 
                          : 'rgba(241, 245, 249, 0.6)'
                      }}
                      transition={{ duration: 0.2 }}
                    />
                  )}
                </motion.a>
              );
            })}
            
            {/* CV Download Button with shine effect */}
            <motion.a
              href="/resume"
              className="group relative ml-2 inline-flex items-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-slate-900 to-slate-800 dark:from-white dark:to-slate-200 px-3.5 py-1.5 text-sm font-medium text-white dark:text-slate-900 shadow-lg shadow-slate-900/20 dark:shadow-none transition-all hover:shadow-xl hover:shadow-slate-900/30 dark:hover:shadow-brand-400/20"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <motion.span
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"
              />
              <motion.span
                animate={{ y: [0, -2, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              >
                <Download size={14} className="text-white dark:text-slate-900" />
              </motion.span>
              <span className="relative">CV</span>
              <motion.span
                className="absolute -inset-1 rounded-full bg-brand-500/0 blur-xl transition-all duration-500 group-hover:bg-brand-500/20 dark:group-hover:bg-brand-400/10"
              />
            </motion.a>

            {/* Theme Toggle */}
            <div className="ml-2">
              <ThemeToggle />
            </div>
          </nav>

          {/* Mobile Controls */}
          <div className="flex items-center gap-2 lg:hidden">
            <ThemeToggle />
            
            <motion.button
              type="button"
              className="relative rounded-full p-2 text-slate-700 dark:text-slate-300 transition-colors hover:bg-slate-100 dark:hover:bg-slate-800"
              onClick={() => setOpen(!open)}
              aria-label={open ? 'Close menu' : 'Open menu'}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <AnimatePresence mode="wait">
                {open ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X size={20} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu size={20} />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu with improved animations */}
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
                      whileHover={{ x: 5 }}
                      className={cn(
                        "flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium transition-all duration-200",
                        isActive
                          ? "bg-brand-50 dark:bg-brand-950/30 text-brand-600 dark:text-brand-400"
                          : "text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
                      )}
                      aria-current={isActive ? 'page' : undefined}
                    >
                      <Icon className={cn(
                        "h-4 w-4",
                        isActive ? "text-brand-500 dark:text-brand-400" : "text-slate-400 dark:text-slate-500"
                      )} />
                      {link.label}
                      {isActive && (
                        <motion.span
                          className="ml-auto h-1.5 w-1.5 rounded-full bg-brand-500 dark:bg-brand-400"
                          layoutId="activeMobileDot"
                        />
                      )}
                    </motion.a>
                  );
                })}
                
                <motion.a
                  href="/resume"
                  onClick={() => setOpen(false)}
                  variants={mobileItemVariants}
                  className="group relative mt-2 overflow-hidden rounded-xl bg-gradient-to-r from-slate-900 to-slate-800 dark:from-white dark:to-slate-200 px-3 py-3 text-center text-sm font-medium text-white dark:text-slate-900 transition-all hover:shadow-lg"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <motion.span
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"
                  />
                  <span className="flex items-center justify-center gap-2">
                    <Download size={16} className="text-white dark:text-slate-900" />
                    Download CV
                  </span>
                </motion.a>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Spacer to prevent content from hiding under fixed header */}
      <div className="h-14 lg:h-16" />
    </>
  );
}
