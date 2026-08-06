// src/components/sections/Skills.tsx
'use client';

import { motion, useInView, Variants } from 'framer-motion';
import { useRef } from 'react';
import {
  Sparkles,
  Code2,
  Layout,
  Database,
  ArrowRight,
  PenTool,
  Monitor,
  Layers,
  Shield,
  Palette,
  Smartphone,
  Braces,
  Cloud,
  FileText,
} from 'lucide-react';

const groups = [
  {
    title: 'UX / UI',
    icon: Palette,
    color: 'from-purple-500 to-pink-500',
    bgColor: 'bg-purple-50 dark:bg-purple-950/20',
    borderColor: 'border-purple-200/50 dark:border-purple-800/30',
    items: [
      { name: 'React & Next.js UI', icon: Monitor },
      { name: 'Tailwind design systems', icon: PenTool },
      { name: 'Accessible patterns', icon: Shield },
      { name: 'Mobile-first layouts', icon: Smartphone },
      { name: 'Admin & dashboard UX', icon: Layout },
    ],
    level: 'Expert',
    value: 90,
  },
  {
    title: 'Full-stack',
    icon: Code2,
    color: 'from-blue-500 to-cyan-500',
    bgColor: 'bg-blue-50 dark:bg-blue-950/20',
    borderColor: 'border-blue-200/50 dark:border-blue-800/30',
    items: [
      { name: 'Next.js App Router', icon: Monitor },
      { name: 'TypeScript', icon: Braces },
      { name: 'Supabase', icon: Database },
      { name: 'Auth & roles', icon: Shield },
      { name: 'Vercel production', icon: Cloud },
    ],
    level: 'Advanced',
    value: 80,
  },
  {
    title: 'CMS',
    icon: FileText,
    color: 'from-emerald-500 to-teal-500',
    bgColor: 'bg-emerald-50 dark:bg-emerald-950/20',
    borderColor: 'border-emerald-200/50 dark:border-emerald-800/30',
    items: [
      { name: 'Content modelling', icon: Layers },
      { name: 'Draft / publish', icon: FileText },
      { name: 'Media libraries', icon: Database },
      { name: 'Editorial admin', icon: PenTool },
      { name: 'Product CMS layers', icon: Layout },
    ],
    level: 'Proficient',
    value: 70,
  },
];

export function Skills() {
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
      id="skills"
      className="relative overflow-hidden py-20 sm:py-28 lg:py-32 bg-gradient-to-b from-slate-50/50 via-white to-slate-50/50 dark:from-slate-950/30 dark:via-slate-900 dark:to-slate-950/30"
    >
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
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200/80 bg-white/70 px-3 py-1 text-xs font-medium tracking-wider text-slate-600 dark:border-slate-700/80 dark:bg-slate-900/60 dark:text-slate-300">
              <Sparkles className="h-3 w-3 text-brand-500" />
              <span className="uppercase tracking-[0.15em]">Technical Toolkit</span>
            </div>
            <h2 className="relative text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl dark:text-white">
              Skills & expertise
              <span className="absolute -bottom-2 left-0 h-1 w-24 rounded-full bg-gradient-to-r from-brand-500 to-accent-500" />
            </h2>
          </motion.div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="mt-12 grid gap-6 md:grid-cols-3"
        >
          {groups.map((group) => {
            const Icon = group.icon;
            return (
              <motion.div key={group.title} variants={itemVariants} className="group relative">
                <div
                  className={`relative flex h-full flex-col rounded-2xl border ${group.borderColor} ${group.bgColor} p-6 transition-transform duration-200 hover:-translate-y-1 hover:shadow-lg`}
                >
                  <div className="flex items-start gap-4">
                    <div className={`rounded-xl p-2.5 bg-gradient-to-br ${group.color} shadow-lg flex-shrink-0`}>
                      <Icon className="h-5 w-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{group.title}</h3>
                      <div className="mt-1 h-0.5 w-8 rounded-full bg-gradient-to-r from-brand-500 to-accent-500 transition-all duration-300 group-hover:w-12" />
                    </div>
                  </div>

                  <ul className="mt-5 flex-1 space-y-3">
                    {group.items.map((item) => {
                      const ItemIcon = item.icon;
                      return (
                        <li
                          key={item.name}
                          className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-400"
                        >
                          <div className="rounded-md bg-slate-100/50 p-1 dark:bg-slate-800/50">
                            <ItemIcon className="h-3 w-3 text-slate-500 dark:text-slate-400" />
                          </div>
                          <span>{item.name}</span>
                        </li>
                      );
                    })}
                  </ul>

                  <div className="mt-4 border-t border-slate-200/50 pt-4 dark:border-slate-700/50">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-slate-500 dark:text-slate-400">Proficiency</span>
                      <span className="font-medium text-slate-700 dark:text-slate-300">{group.level}</span>
                    </div>
                    <div className="mt-1.5 h-1.5 w-full overflow-hidden rounded-full bg-slate-200 dark:bg-slate-700">
                      <div
                        className={`h-full rounded-full bg-gradient-to-r ${group.color}`}
                        style={{ width: `${group.value}%` }}
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        <div className="mt-10 flex justify-center">
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-slate-900 to-slate-800 px-6 py-3 text-sm font-medium text-white shadow-lg transition-transform hover:-translate-y-0.5 hover:shadow-xl dark:from-white dark:to-slate-200 dark:text-slate-900"
          >
            <span>See skills in action</span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
}
