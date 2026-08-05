// src/components/sections/Footer.tsx
'use client';

import { motion, useInView, Variants } from 'framer-motion';
import { useRef } from 'react';
import {
  Heart,
  Sparkles,
  Code2,
  Zap,
  Rocket,
  Globe,
  MapPin,
  Mail,
  Github,
  Linkedin,
  Twitter,
  ArrowUp,
  Star,
  Shield,
  Award,
} from 'lucide-react';
import Link from 'next/link';

export function Footer() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-50px" });

  const socialLinks = [
    { name: 'GitHub', icon: Github, href: 'https://github.com/Brightwell-Dlamini' },
    { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com/in/brightwell-dlamini' },
    { name: 'Twitter', icon: Twitter, href: 'https://twitter.com/brightwell_d' },
    { name: 'Email', icon: Mail, href: 'mailto:dlaminibrightwell@gmail.com' },
  ];

  const footerLinks = [
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  // Animation variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.1,
        ease: 'easeInOut',
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: 'easeInOut' },
    },
  };

  const floatVariants: Variants = {
    initial: { y: 0 },
    animate: {
      y: [0, -4, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      ref={sectionRef}
      className="relative overflow-hidden border-t border-slate-200/80 bg-gradient-to-b from-white via-slate-50/50 to-white py-12 dark:border-slate-800/80 dark:from-slate-950 dark:via-slate-900/50 dark:to-slate-950"
    >
      {/* Animated Background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-20 -left-20 h-40 w-40 rounded-full bg-brand-400/10 blur-2xl dark:bg-brand-600/10"
          animate={{
            x: [0, 20, 0],
            y: [0, -10, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute -bottom-20 -right-20 h-40 w-40 rounded-full bg-accent-400/10 blur-2xl dark:bg-accent-600/10"
          animate={{
            x: [0, -20, 0],
            y: [0, 10, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="flex flex-col items-center gap-8"
        >
          {/* Built With Badge */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 rounded-full border border-slate-200/80 bg-white/70 px-4 py-1.5 text-xs font-medium text-slate-600 backdrop-blur-sm dark:border-slate-700/80 dark:bg-slate-900/60 dark:text-slate-300"
          >
            <motion.span
              variants={floatVariants}
              initial="initial"
              animate="animate"
            >
              <Sparkles className="h-3.5 w-3.5 text-amber-400" />
            </motion.span>
            <span>Built with</span>
            <Heart className="h-3.5 w-3.5 text-rose-500" />
            <span>and</span>
            <Code2 className="h-3.5 w-3.5 text-brand-500" />
            <span>— from Mankayane to the world</span>
          </motion.div>

          {/* Quick Links */}
          <motion.nav
            variants={itemVariants}
            className="flex flex-wrap items-center justify-center gap-4"
            aria-label="Footer navigation"
          >
            {footerLinks.map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="text-sm font-medium text-slate-600 transition-colors hover:text-brand-600 dark:text-slate-400 dark:hover:text-brand-400"
              >
                {link.label}
              </motion.a>
            ))}
          </motion.nav>

          {/* Social Links */}
          <motion.div
            variants={itemVariants}
            className="flex items-center gap-3"
          >
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target={social.name === 'Email' ? undefined : '_blank'}
                  rel={social.name === 'Email' ? undefined : 'noopener noreferrer'}
                  whileHover={{ 
                    scale: 1.15, 
                    y: -2,
                    transition: { type: 'spring', stiffness: 400, damping: 25 }
                  }}
                  whileTap={{ scale: 0.9 }}
                  className="rounded-full bg-white/80 p-2.5 text-slate-600 shadow-sm backdrop-blur transition-all hover:bg-brand-50 hover:text-brand-600 dark:bg-slate-900/60 dark:text-slate-400 dark:hover:bg-brand-950/40 dark:hover:text-brand-400"
                  aria-label={social.name}
                >
                  <Icon className="h-4 w-4" />
                </motion.a>
              );
            })}
          </motion.div>

          {/* Bottom Section */}
          <motion.div
            variants={itemVariants}
            className="flex w-full flex-col items-center gap-3 border-t border-slate-200/50 pt-6 dark:border-slate-800/50 sm:flex-row sm:justify-between"
          >
            <div className="flex flex-col items-center gap-1 sm:flex-row sm:gap-3">
              <p className="text-sm text-slate-500 dark:text-slate-400">
                © {new Date().getFullYear()} Brightwell Dlamini
              </p>
              <span className="hidden text-slate-300 dark:text-slate-700 sm:inline">·</span>
              <div className="flex items-center gap-1.5 text-xs text-slate-400 dark:text-slate-500">
                <MapPin className="h-3 w-3" />
                <span>Mankayane, Eswatini</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              {/* Status Badge */}
              <div className="flex items-center gap-1.5">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                </span>
                <span className="text-xs text-slate-500 dark:text-slate-400">
                  Open to opportunities
                </span>
              </div>

              {/* Back to Top Button */}
              <motion.button
                onClick={scrollToTop}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="rounded-full bg-brand-500/10 p-2 text-brand-600 transition-colors hover:bg-brand-500/20 dark:bg-brand-500/20 dark:text-brand-400 dark:hover:bg-brand-500/30"
                aria-label="Back to top"
              >
                <ArrowUp className="h-4 w-4" />
              </motion.button>
            </div>
          </motion.div>

          {/* Trust Badges */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center justify-center gap-4 text-xs text-slate-400 dark:text-slate-500"
          >
            <div className="flex items-center gap-1.5">
              <Shield className="h-3 w-3 text-brand-400" />
              <span>Secure</span>
            </div>
            <span className="text-slate-300 dark:text-slate-700">·</span>
            <div className="flex items-center gap-1.5">
              <Award className="h-3 w-3 text-amber-400" />
              <span>Proven expertise</span>
            </div>
            <span className="text-slate-300 dark:text-slate-700">·</span>
            <div className="flex items-center gap-1.5">
              <Rocket className="h-3 w-3 text-brand-400" />
              <span>Ready to build</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
}
