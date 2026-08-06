// src/components/sections/WhyWiggle.tsx
'use client';

import { motion, useInView, Variants } from 'framer-motion';
import { useRef } from 'react';
import {
  Sparkles,
  Code2,
  Layout,
  Layers,
  ArrowRight,
  Zap,
  Rocket,
  Palette,
  Database,
  Briefcase,
  Users,
  Server,
} from 'lucide-react';

const cards = [
  {
    title: 'Agency-ready delivery',
    body: 'I have shipped in digital marketing and software company environments — client sites, internal tools and systems work under real deadlines.',
    icon: Rocket,
    color: 'from-amber-500 to-orange-500',
    bgColor: 'bg-amber-50 dark:bg-amber-950/20',
    borderColor: 'border-amber-200/50 dark:border-amber-800/30',
  },
  {
    title: 'Design + engineering',
    body: 'Interfaces are not an afterthought. Product surfaces, admin tools and storefronts are designed in the same stack they ship in.',
    icon: Palette,
    color: 'from-purple-500 to-pink-500',
    bgColor: 'bg-purple-50 dark:bg-purple-950/20',
    borderColor: 'border-purple-200/50 dark:border-purple-800/30',
  },
  {
    title: 'Content systems matter',
    body: 'CMS and product admin are first-class: models, media, draft/publish and screens non-technical teams can actually run.',
    icon: Database,
    color: 'from-emerald-500 to-teal-500',
    bgColor: 'bg-emerald-50 dark:bg-emerald-950/20',
    borderColor: 'border-emerald-200/50 dark:border-emerald-800/30',
  },
];

const capabilities = [
  { label: 'Full-Stack Development', icon: Code2 },
  { label: 'UI/UX Design', icon: Layout },
  { label: 'Content Strategy', icon: Layers },
  { label: 'Agency Workflows', icon: Briefcase },
  { label: 'Client Delivery', icon: Users },
  { label: 'Systems Thinking', icon: Server },
];

export function WhyWiggle() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' });

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.1 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.45, ease: 'easeOut' },
    },
  };

  return (
    <section
      ref={sectionRef}
      id="why"
      className="relative overflow-hidden py-20 sm:py-28 lg:py-32 bg-gradient-to-b from-slate-50/50 via-white/50 to-slate-50/50 dark:from-slate-950/30 dark:via-slate-900/50 dark:to-slate-950/30"
    >
      {/* Static background — no continuous animation */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-[400px] w-[400px] rounded-full bg-brand-400/10 dark:bg-brand-600/10 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-[320px] w-[320px] rounded-full bg-accent-500/10 dark:bg-accent-500/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="max-w-3xl"
        >
          <motion.div variants={itemVariants} className="space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200/80 dark:border-slate-700/80 bg-white/70 dark:bg-slate-900/60 px-3 py-1 text-xs font-medium tracking-wider text-slate-700 dark:text-slate-300">
              <Sparkles className="h-3 w-3 text-brand-600 dark:text-brand-400" />
              <span className="uppercase tracking-[0.15em]">Why This Application</span>
            </div>

            <h2 className="relative text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl lg:text-5xl">
              Built around how Wiggle works
              <span className="absolute -bottom-2 left-0 h-1 w-24 rounded-full bg-gradient-to-r from-brand-500 to-accent-500" />
            </h2>

            <p className="max-w-2xl text-base leading-relaxed text-slate-700 dark:text-slate-300 sm:text-lg">
              Digital agencies need people who can move between craft and code. My recent work —
              local products, CMS demos and full-stack apps — is chosen to show that range, not a
              single narrow specialty.
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="mt-12 grid gap-6 md:grid-cols-3"
        >
          {cards.map((card) => {
            const Icon = card.icon;
            return (
              <motion.div key={card.title} variants={itemVariants} className="group relative">
                <div
                  className={`relative rounded-2xl border ${card.borderColor} ${card.bgColor} p-6 transition-transform duration-200 hover:-translate-y-1 hover:shadow-lg`}
                >
                  <div className={`mb-4 inline-flex rounded-xl p-2.5 bg-gradient-to-br ${card.color} shadow-lg`}>
                    <Icon className="h-5 w-5 text-white" />
                  </div>
                  <div className="mb-4 h-1 w-10 rounded-full bg-gradient-to-r from-brand-500 to-accent-500 transition-all duration-300 group-hover:w-14" />
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{card.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-700 dark:text-slate-300">{card.body}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="mt-16"
        >
          <div className="flex flex-wrap items-center justify-center gap-3">
            <div className="flex items-center gap-2 rounded-full bg-slate-100/80 dark:bg-slate-800/50 px-4 py-2">
              <Zap className="h-4 w-4 text-amber-500" />
              <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Capabilities:</span>
            </div>
            {capabilities.map((cap) => {
              const Icon = cap.icon;
              return (
                <div
                  key={cap.label}
                  className="inline-flex items-center gap-1.5 rounded-full border border-slate-200/70 dark:border-slate-700/70 bg-white/60 dark:bg-slate-900/40 px-3 py-1.5 text-xs font-medium text-slate-700 dark:text-slate-300 transition-colors hover:border-brand-300/50 hover:text-brand-700 dark:hover:text-brand-300"
                >
                  <Icon className="h-3 w-3 text-slate-500 dark:text-slate-400" />
                  {cap.label}
                </div>
              );
            })}
          </div>
        </motion.div>

        <div className="mt-12 flex justify-center">
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-slate-900 to-slate-800 dark:from-white dark:to-slate-200 px-6 py-3 text-sm font-medium text-white dark:text-slate-900 shadow-lg transition-transform hover:-translate-y-0.5 hover:shadow-xl"
          >
            <span>Explore my work</span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
}
