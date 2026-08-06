// src/components/Hero.tsx
'use client';

import { motion, Variants } from 'framer-motion';
import Image from 'next/image';
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
} from 'lucide-react';

export function Hero() {
  const stats = [
    { label: 'Years Experience', value: '8+', icon: Award },
    { label: 'Projects Delivered', value: '5+', icon: Code2 },
    { label: 'Tech Stack Mastery', value: '5+', icon: Layers },
    { label: 'Happy Clients', value: '3+', icon: Star },
  ];

  const socialLinks = [
    { name: 'GitHub', icon: Github, href: 'https://github.com/brightwell-dlamini' },
    { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com/in/brightwell-dlamini' },
    { name: 'Twitter', icon: Twitter, href: 'https://twitter.com/brightwell_d' },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
        ease: 'easeOut',
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  return (
    <section className="relative min-h-[calc(100vh-3.5rem)] lg:min-h-[calc(100vh-4rem)] overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-100/50 dark:from-slate-950 dark:via-slate-900 dark:to-black flex items-center">
      {/* Static / lightweight background — no continuous Framer Motion loops */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="glow-orb absolute -top-32 -left-32 h-[500px] w-[500px] rounded-full bg-brand-400/25 dark:bg-brand-600/15" />
        <div className="glow-orb absolute -bottom-32 -right-32 h-[420px] w-[420px] rounded-full bg-accent-500/20 dark:bg-accent-500/15" />
        <div className="absolute top-1/2 left-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-400/8 dark:bg-indigo-600/8 blur-3xl" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiM5Q0EzQUYiIGZpbGwtb3BhY2l0eT0iMC4wNCI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyek0zNiAyNHYySDI0di0yaDEyeiIvPjwvZz48L2c+PC9zdmc+')] bg-[length:60px_60px] opacity-40 dark:opacity-25" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full py-8 sm:py-12 lg:py-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12 items-center"
        >
          {/* Left Column */}
          <div className="flex flex-col justify-center">
            <motion.div variants={itemVariants} className="mb-4">
              <div className="inline-flex items-center gap-3 rounded-full border border-slate-200/80 dark:border-slate-700/80 bg-white/70 dark:bg-slate-900/60 px-4 py-1.5 text-xs font-medium tracking-wider text-slate-700 dark:text-slate-300 shadow-sm backdrop-blur-sm">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500 shadow-[0_0_12px_rgba(16,185,129,0.6)]" />
                </span>
                <span className="uppercase tracking-[0.15em]">Application · Open to Work</span>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-3">
              <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl lg:text-5xl">
                Hi,{' '}
                <span className="relative inline-block">
                  Brightwell
                  <span className="absolute -bottom-1 left-0 h-1 w-full rounded-full bg-gradient-to-r from-brand-500 to-accent-500" />
                </span>{' '}
                Dlamini here.
              </h1>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="mt-4 max-w-xl text-sm leading-relaxed text-slate-700 dark:text-slate-300 sm:text-base"
            >
              I think I&apos;m the best fit for{' '}
              <span className="relative inline-block font-semibold text-slate-900 dark:text-white">
                Wiggle Digital
                <span className="absolute -bottom-0.5 left-0 h-0.5 w-full bg-brand-400/60 dark:bg-brand-500/40" />
              </span>
              . Wiggle&apos;s brief asks for people who can design interfaces, ship full‑stack
              products and own content systems. That is exactly the mix I practise — and the reason
              this application is structured the way a digital product would be: clear hierarchy,
              honest proof and a direct path to conversation.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="mt-5 grid grid-cols-2 gap-2 sm:grid-cols-4 sm:gap-3"
            >
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={index}
                    className="rounded-xl border border-slate-200/70 dark:border-slate-700/70 bg-white/60 dark:bg-slate-900/40 p-2.5 backdrop-blur-sm transition-transform hover:scale-[1.03] hover:shadow-md dark:hover:shadow-slate-800/50"
                  >
                    <div className="flex items-center gap-2">
                      <Icon className="h-4 w-4 text-brand-600 dark:text-brand-400" />
                      <div>
                        <div className="text-lg font-bold text-slate-900 dark:text-white">
                          {stat.value}
                        </div>
                        <div className="text-[9px] font-medium uppercase tracking-wide text-slate-600 dark:text-slate-400">
                          {stat.label}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="mt-6 flex flex-wrap items-center gap-2"
            >
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-600 to-brand-500 dark:from-brand-500 dark:to-brand-400 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-brand-500/25 dark:shadow-brand-500/20 transition-all hover:shadow-xl hover:shadow-brand-500/35 dark:hover:shadow-brand-500/30 hover:-translate-y-0.5"
              >
                <span>See the work</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href="/resume"
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 dark:border-slate-700 bg-white/80 dark:bg-slate-900/50 px-5 py-2.5 text-sm font-semibold text-slate-800 dark:text-slate-100 shadow-sm backdrop-blur transition-all hover:border-brand-300 dark:hover:border-brand-500/50 hover:bg-white dark:hover:bg-slate-800/50 hover:text-brand-700 dark:hover:text-brand-300 hover:shadow-md hover:-translate-y-0.5"
              >
                <Download size={16} />
                Download CV
              </a>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-slate-600 dark:text-slate-400"
            >
              <a
                href="mailto:dlaminibrightwell@gmail.com"
                className="inline-flex items-center gap-2 transition-colors hover:text-brand-600 dark:hover:text-brand-400"
              >
                <div className="rounded-full bg-brand-100/50 dark:bg-brand-900/30 p-1">
                  <Mail size={13} className="text-brand-600 dark:text-brand-400" />
                </div>
                dlaminibrightwell@gmail.com
              </a>
              <a
                href="tel:+26876365430"
                className="inline-flex items-center gap-2 transition-colors hover:text-brand-600 dark:hover:text-brand-400"
              >
                <div className="rounded-full bg-brand-100/50 dark:bg-brand-900/30 p-1">
                  <Phone size={13} className="text-brand-600 dark:text-brand-400" />
                </div>
                +268 7636 5430
              </a>
              <span className="inline-flex items-center gap-2">
                <div className="rounded-full bg-brand-100/50 dark:bg-brand-900/30 p-1">
                  <MapPin size={13} className="text-brand-600 dark:text-brand-400" />
                </div>
                Mankayane, Eswatini
              </span>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="mt-4 flex items-center gap-3"
            >
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full bg-white/60 dark:bg-slate-900/40 p-2 text-slate-600 dark:text-slate-300 shadow-sm backdrop-blur transition-all hover:bg-brand-50 dark:hover:bg-brand-900/30 hover:text-brand-600 dark:hover:text-brand-400 hover:-translate-y-0.5"
                    aria-label={social.name}
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
            </motion.div>
          </div>

          {/* Right Column — Profile image */}
          <motion.div
            variants={itemVariants}
            className="relative flex items-center justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-sm">
              <div className="absolute -top-6 -left-6 z-10 rounded-xl bg-white/80 dark:bg-slate-900/80 p-2.5 shadow-lg dark:shadow-xl backdrop-blur-sm">
                <div className="flex items-center gap-2">
                  <Sparkles className="h-4 w-4 text-amber-400" />
                  <span className="text-sm font-medium text-slate-900 dark:text-white">
                    8+ Years
                  </span>
                </div>
              </div>

              <div className="absolute -bottom-4 -right-4 z-10 rounded-xl bg-white/80 dark:bg-slate-900/80 p-2.5 shadow-lg dark:shadow-xl backdrop-blur-sm">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-emerald-400" />
                  <span className="text-sm font-medium text-slate-900 dark:text-white">
                    5+ Projects
                  </span>
                </div>
              </div>

              <div className="relative aspect-square w-full overflow-hidden rounded-2xl bg-gradient-to-br from-brand-100 to-accent-100 dark:from-brand-950 dark:to-accent-950 shadow-2xl">
                <Image
                  src="/download.jpeg"
                  alt="Brightwell Dlamini - Full-Stack Developer & UI/UX Designer"
                  fill
                  className="object-cover object-center"
                  priority
                  sizes="(max-width: 768px) 80vw, 400px"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/25 via-transparent to-transparent pointer-events-none" />

                <div className="absolute left-3 top-1/3 rounded-full bg-white/90 dark:bg-slate-900/90 px-2.5 py-1 text-[10px] font-medium text-slate-700 dark:text-slate-300 shadow-lg backdrop-blur-sm">
                  React · Next.js
                </div>
                <div className="absolute right-3 top-1/4 rounded-full bg-white/90 dark:bg-slate-900/90 px-2.5 py-1 text-[10px] font-medium text-slate-700 dark:text-slate-300 shadow-lg backdrop-blur-sm">
                  TypeScript
                </div>
                <div className="absolute bottom-1/4 left-4 rounded-full bg-white/90 dark:bg-slate-900/90 px-2.5 py-1 text-[10px] font-medium text-slate-700 dark:text-slate-300 shadow-lg backdrop-blur-sm">
                  UI/UX
                </div>
                <div className="absolute bottom-6 right-6 rounded-full bg-white/90 dark:bg-slate-900/90 px-2.5 py-1 text-[10px] font-medium text-slate-700 dark:text-slate-300 shadow-lg backdrop-blur-sm">
                  Tailwind
                </div>
              </div>

              <div className="mt-3 h-1 w-full rounded-full bg-gradient-to-r from-brand-400 via-accent-400 to-brand-400" />
            </div>
          </motion.div>
        </motion.div>

        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-0.5 opacity-60">
          <span className="text-[10px] uppercase tracking-[0.15em] text-slate-400 dark:text-slate-500">
            Scroll
          </span>
          <ArrowDown className="h-3.5 w-3.5 text-slate-400 dark:text-slate-500" />
        </div>
      </div>
    </section>
  );
}
