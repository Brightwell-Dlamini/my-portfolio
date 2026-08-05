// src/components/Hero.tsx
'use client';

import { motion, useScroll, useTransform, Variants } from 'framer-motion';
import {
  ArrowDown,
  Download,
  Mail,
  Phone,
  Sparkles,
  CheckCircle,
  ArrowRight,
  Github,
  Linkedin,
  Twitter,
  MapPin,
  Award,
  Code2,
  Layers,
  Star,
  Zap,
} from 'lucide-react';
import { useState, useRef } from 'react';

export function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();

  // Parallax scroll effects
  const opacity = useTransform(scrollY, [0, 400], [1, 0.8]);
  const scale = useTransform(scrollY, [0, 400], [1, 0.98]);
  const yOffset = useTransform(scrollY, [0, 300], [0, 30]);

  // Mouse tracking for 3D tilt
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    setMousePosition({
      x: (e.clientX - centerX) / rect.width,
      y: (e.clientY - centerY) / rect.height,
    });
  };

  const handleMouseLeave = () => {
    setMousePosition({ x: 0, y: 0 });
  };

  // ✅ CORRECTED STATS - based on your feedback
  const stats = [
    { label: 'Years Experience', value: '8+', icon: Award },
    { label: 'Projects Delivered', value: '5+', icon: Code2 },
    { label: 'Tech Stack Mastery', value: '5+', icon: Layers },
    { label: 'Happy Clients', value: '3+', icon: Star },
  ];

  // Social links
  const socialLinks = [
    { name: 'GitHub', icon: Github, href: 'https://github.com/brightwell-dlamini' },
    { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com/in/brightwell-dlamini' },
    { name: 'Twitter', icon: Twitter, href: 'https://twitter.com/brightwell_d' },
  ];

  // Animation variants with proper typing
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
        ease: 'easeInOut',
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeInOut' },
    },
  };

  const floatVariants: Variants = {
    initial: { y: 0 },
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  };

  const pulseVariants: Variants = {
    initial: { scale: 1, opacity: 0.6 },
    animate: {
      scale: [1, 1.1, 1],
      opacity: [0.6, 0.8, 0.6],
      transition: {
        duration: 2.5,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  };

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-[calc(100vh-3.5rem)] lg:min-h-[calc(100vh-4rem)] overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-100/50 dark:from-slate-950 dark:via-slate-900 dark:to-black flex items-center"
    >
      {/* Animated Background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Gradient Orbs */}
        <motion.div
          className="glow-orb absolute -top-32 -left-32 h-[600px] w-[600px] rounded-full bg-brand-400/30 dark:bg-brand-600/20"
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          style={{
            transform: `translate(${mousePosition.x * -20}px, ${mousePosition.y * -20}px)`,
          }}
        />
        <motion.div
          className="glow-orb absolute -bottom-32 -right-32 h-[500px] w-[500px] rounded-full bg-accent-500/25 dark:bg-accent-500/20"
          animate={{
            x: [0, -40, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          style={{
            transform: `translate(${mousePosition.x * 20}px, ${mousePosition.y * 20}px)`,
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-400/10 dark:bg-indigo-600/10 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiM5Q0EzQUYiIGZpbGwtb3BhY2l0eT0iMC4wNCI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyek0zNiAyNHYySDI0di0yaDEyeiIvPjwvZz48L2c+PC9zdmc+')] bg-[length:60px_60px] opacity-50 dark:opacity-30" />

        {/* Animated lines */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-0 left-0 h-px w-1/3 bg-gradient-to-r from-transparent via-brand-500/30 to-transparent"
            animate={{ x: ['-100%', '200%'] }}
            transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
          />
          <motion.div
            className="absolute bottom-0 right-0 h-px w-1/3 bg-gradient-to-r from-transparent via-brand-500/30 to-transparent"
            animate={{ x: ['200%', '-100%'] }}
            transition={{ duration: 8, repeat: Infinity, ease: 'linear', delay: 2 }}
          />
        </div>
      </div>

      {/* Main Content */}
      <motion.div
        style={{ opacity, scale, y: yOffset }}
        className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full py-8 sm:py-12 lg:py-16"
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12 items-center"
        >
          {/* Left Column - Content */}
          <div className="flex flex-col justify-center">
            {/* Status Badge */}
            <motion.div variants={itemVariants} className="mb-4">
              <div className="inline-flex items-center gap-3 rounded-full border border-slate-200/80 bg-white/70 px-4 py-1.5 text-xs font-medium tracking-wider text-slate-600 shadow-sm backdrop-blur-sm dark:border-slate-700/80 dark:bg-slate-900/60 dark:text-slate-300">
                <motion.span
                  className="relative flex h-2 w-2"
                  variants={pulseVariants}
                  initial="initial"
                  animate="animate"
                >
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500 shadow-[0_0_12px_rgba(16,185,129,0.6)]" />
                </motion.span>
                <span className="uppercase tracking-[0.15em]">Application · Open to Work</span>
              </div>
            </motion.div>

            {/* Main Heading */}
            <motion.div variants={itemVariants} className="space-y-3">
              <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl dark:text-white">
                Hi,{' '}
                <span className="relative inline-block">
                  Brightwell
                  <motion.span
                    className="absolute -bottom-1 left-0 h-1 w-full rounded-full bg-gradient-to-r from-brand-500 to-accent-500"
                    initial={{ width: 0 }}
                    animate={{ width: '100%' }}
                    transition={{ delay: 0.5, duration: 0.8, ease: 'easeInOut' }}
                  />
                </span>{' '}
                Dlamini here.
              </h1>
            </motion.div>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="mt-4 max-w-xl text-sm leading-relaxed text-slate-600 sm:text-base dark:text-slate-300"
            >
              I think I&apos;m the best fit for{' '}
              <span className="relative inline-block font-semibold text-slate-900 dark:text-white">
                Wiggle Digital
                <motion.span
                  className="absolute -bottom-0.5 left-0 h-0.5 w-full bg-brand-400/60 dark:bg-brand-500/40"
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ delay: 0.8, duration: 0.6, ease: 'easeInOut' }}
                />
              </span>
              . Wiggle&apos;s brief asks for people who can design interfaces, ship full‑stack
              products and own content systems. That is exactly the mix I practise — and the reason
              this application is structured the way a digital product would be: clear hierarchy,
              honest proof and a direct path to conversation.
            </motion.p>

            {/* Stats Grid - CORRECTED */}
            <motion.div
              variants={itemVariants}
              className="mt-5 grid grid-cols-2 gap-2 sm:grid-cols-4 sm:gap-3"
            >
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="rounded-xl border border-slate-200/70 bg-white/60 p-2.5 backdrop-blur-sm transition-all hover:shadow-md dark:border-slate-700/70 dark:bg-slate-900/40"
                  >
                    <div className="flex items-center gap-2">
                      <Icon className="h-4 w-4 text-brand-500 dark:text-brand-400" />
                      <div>
                        <div className="text-lg font-bold text-slate-900 dark:text-white">
                          {stat.value}
                        </div>
                        <div className="text-[9px] font-medium uppercase tracking-wide text-slate-500 dark:text-slate-400">
                          {stat.label}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="mt-6 flex flex-wrap items-center gap-2"
            >
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-600 to-brand-500 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-brand-500/25 transition-all hover:shadow-xl hover:shadow-brand-500/35 dark:from-brand-500 dark:to-brand-400"
              >
                <span>See the work</span>
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <ArrowRight className="h-4 w-4" />
                </motion.span>
                <span className="absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-brand-500 to-brand-400 opacity-0 blur-xl transition-opacity group-hover:opacity-30" />
              </motion.a>

              <motion.a
                href="/resume"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-5 py-2.5 text-sm font-semibold text-slate-800 shadow-sm backdrop-blur transition-all hover:border-brand-300 hover:bg-white hover:text-brand-700 hover:shadow-md dark:border-slate-700 dark:bg-slate-900/50 dark:text-slate-100 dark:hover:border-brand-500/50 dark:hover:text-brand-300"
              >
                <motion.span
                  animate={{ y: [0, -3, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <Download size={16} />
                </motion.span>
                Download CV
              </motion.a>

              <motion.a
                href="#contact"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 rounded-full px-3 py-2.5 text-sm font-medium text-slate-600 transition-colors hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
              >
                Contact
                <motion.span
                  animate={{ y: [0, 5, 0] }}
                  transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <ArrowDown size={14} />
                </motion.span>
              </motion.a>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              variants={itemVariants}
              className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-slate-500 dark:text-slate-400"
            >
              <motion.a
                href="mailto:dlaminibrightwell@gmail.com"
                whileHover={{ scale: 1.05, color: '#6366f1' }}
                className="inline-flex items-center gap-2 transition-all hover:text-brand-600 dark:hover:text-brand-400"
              >
                <div className="rounded-full bg-brand-100/50 p-1 dark:bg-brand-900/30">
                  <Mail size={13} className="text-brand-500" />
                </div>
                dlaminibrightwell@gmail.com
              </motion.a>
              <motion.a
                href="tel:+26876365539"
                whileHover={{ scale: 1.05, color: '#6366f1' }}
                className="inline-flex items-center gap-2 transition-all hover:text-brand-600 dark:hover:text-brand-400"
              >
                <div className="rounded-full bg-brand-100/50 p-1 dark:bg-brand-900/30">
                  <Phone size={13} className="text-brand-500" />
                </div>
                +268 7636 5539
              </motion.a>
              <motion.span
                whileHover={{ scale: 1.05 }}
                className="inline-flex items-center gap-2"
              >
                <div className="rounded-full bg-brand-100/50 p-1 dark:bg-brand-900/30">
                  <MapPin size={13} className="text-brand-500" />
                </div>
                Mankayane, Eswatini
              </motion.span>
            </motion.div>

            {/* Social Links */}
            <motion.div
              variants={itemVariants}
              className="mt-4 flex items-center gap-3"
            >
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.15, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="rounded-full bg-white/60 p-2 text-slate-600 shadow-sm backdrop-blur transition-all hover:bg-brand-50 hover:text-brand-600 dark:bg-slate-900/40 dark:text-slate-300 dark:hover:bg-brand-900/30 dark:hover:text-brand-400"
                    aria-label={social.name}
                  >
                    <Icon className="h-4 w-4" />
                  </motion.a>
                );
              })}
            </motion.div>
          </div>

          {/* Right Column - Visual */}
          <motion.div
            variants={itemVariants}
            className="relative flex items-center justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-sm">
              {/* Floating Elements */}
              <motion.div
                variants={floatVariants}
                initial="initial"
                animate="animate"
                className="absolute -top-6 -left-6 z-10 rounded-xl bg-white/80 p-2.5 shadow-lg backdrop-blur-sm dark:bg-slate-900/80 dark:shadow-xl"
              >
                <div className="flex items-center gap-2">
                  <Sparkles className="h-4 w-4 text-amber-400" />
                  <span className="text-sm font-medium text-slate-900 dark:text-white">
                    8+ Years
                  </span>
                </div>
              </motion.div>

              <motion.div
                variants={floatVariants}
                initial="initial"
                animate="animate"
                transition={{ delay: 0.5 }}
                className="absolute -bottom-4 -right-4 z-10 rounded-xl bg-white/80 p-2.5 shadow-lg backdrop-blur-sm dark:bg-slate-900/80 dark:shadow-xl"
              >
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-emerald-400" />
                  <span className="text-sm font-medium text-slate-900 dark:text-white">
                    5+ Projects
                  </span>
                </div>
              </motion.div>

              {/* Profile Image Container */}
              <div className="relative aspect-square w-full overflow-hidden rounded-2xl bg-gradient-to-br from-brand-100 to-accent-100 shadow-2xl dark:from-brand-950 dark:to-accent-950">
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 via-transparent to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-6xl font-bold text-slate-300 dark:text-slate-700">
                    BD
                  </span>
                </div>

                {/* Decorative rings */}
                <motion.div
                  className="absolute -inset-4 rounded-full border border-brand-300/20 dark:border-brand-700/20"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
                />
                <motion.div
                  className="absolute -inset-8 rounded-full border border-brand-300/10 dark:border-brand-700/10"
                  animate={{ rotate: -360 }}
                  transition={{ duration: 80, repeat: Infinity, ease: 'linear' }}
                />

                {/* Floating Tech Tags */}
                <motion.div
                  className="absolute left-3 top-1/3 rounded-full bg-white/90 px-2.5 py-1 text-[10px] font-medium shadow-lg backdrop-blur-sm dark:bg-slate-900/90"
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.5, ease: 'easeInOut' }}
                >
                  React · Next.js
                </motion.div>
                <motion.div
                  className="absolute right-3 top-1/4 rounded-full bg-white/90 px-2.5 py-1 text-[10px] font-medium shadow-lg backdrop-blur-sm dark:bg-slate-900/90"
                  initial={{ x: 20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.7, duration: 0.5, ease: 'easeInOut' }}
                >
                  TypeScript
                </motion.div>
                <motion.div
                  className="absolute bottom-1/4 left-4 rounded-full bg-white/90 px-2.5 py-1 text-[10px] font-medium shadow-lg backdrop-blur-sm dark:bg-slate-900/90"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.9, duration: 0.5, ease: 'easeInOut' }}
                >
                  UI/UX
                </motion.div>
                <motion.div
                  className="absolute bottom-6 right-6 rounded-full bg-white/90 px-2.5 py-1 text-[10px] font-medium shadow-lg backdrop-blur-sm dark:bg-slate-900/90"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 1.1, duration: 0.5, ease: 'easeInOut' }}
                >
                  Tailwind
                </motion.div>
              </div>

              {/* Bottom decoration line */}
              <motion.div
                className="mt-3 h-1 w-full rounded-full bg-gradient-to-r from-brand-400 via-accent-400 to-brand-400"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.8, duration: 0.8, ease: 'easeInOut' }}
              />
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-4 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <div className="flex flex-col items-center gap-0.5">
            <span className="text-[10px] uppercase tracking-[0.15em] text-slate-400 dark:text-slate-500">
              Scroll
            </span>
            <ArrowDown className="h-3.5 w-3.5 text-slate-400 dark:text-slate-500" />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
