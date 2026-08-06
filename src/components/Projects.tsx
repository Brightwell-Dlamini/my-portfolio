// src/components/sections/Projects.tsx
'use client';

import { motion, useInView, Variants } from 'framer-motion';
import { useRef } from 'react';
import {
  Sparkles,
  ExternalLink,
  Github,
  ArrowRight,
  Code2,
  Globe,
  Monitor,
  Layers,
  Briefcase,
  TrendingUp,
} from 'lucide-react';

const projects = [
  {
    title: 'SiyaTrades',
    tagline: 'Trading journal & discipline system',
    description:
      'Full-stack product: MT5 import, P&L views, playbook analytics and multi-account support. Data-heavy UX with serious delivery depth.',
    stack: ['Next.js', 'TypeScript', 'Supabase'],
    live: 'https://siya-trades.vercel.app',
    repo: 'https://github.com/Brightwell-Dlamini/SiyaTrades',
    fit: 'Full-Stack · UX',
    color: 'from-blue-500 to-cyan-500',
    bgColor: 'bg-blue-50 dark:bg-blue-950/20',
    borderColor: 'border-blue-200/50 dark:border-blue-800/30',
    icon: TrendingUp,
  },
  {
    title: 'SwaziRent (Ekhaya)',
    tagline: 'Property marketplace for Eswatini',
    description:
      'Roles, verification, maps and listing flows for the local market — the kind of product work an agency ships for real clients.',
    stack: ['Next.js', 'Supabase', 'Mapbox'],
    live: 'https://ekhayalistings.vercel.app',
    repo: 'https://github.com/Brightwell-Dlamini/swazirent-main',
    fit: 'Full-Stack · Local product',
    color: 'from-emerald-500 to-teal-500',
    bgColor: 'bg-emerald-50 dark:bg-emerald-950/20',
    borderColor: 'border-emerald-200/50 dark:border-emerald-800/30',
    icon: Globe,
  },
  {
    title: 'ForgeCMS',
    tagline: 'CMS for content teams',
    description:
      'Content models, media library, draft/publish and admin UX — direct proof for the CMS Specialist seat.',
    stack: ['Next.js', 'TypeScript', 'Tailwind'],
    live: 'https://siya-cms.vercel.app',
    repo: 'https://github.com/Brightwell-Dlamini/forge-cms',
    fit: 'CMS Specialist',
    color: 'from-purple-500 to-pink-500',
    bgColor: 'bg-purple-50 dark:bg-purple-950/20',
    borderColor: 'border-purple-200/50 dark:border-purple-800/30',
    icon: Layers,
  },
  {
    title: 'LocalMarket',
    tagline: 'E-commerce + admin',
    description:
      'Storefront and product/order admin for SMEs — catalogue, cart and operational screens non-technical users can run.',
    stack: ['Next.js', 'TypeScript'],
    live: 'https://siya-market.vercel.app',
    repo: 'https://github.com/Brightwell-Dlamini/localmarket',
    fit: 'Full-Stack · CMS layer',
    color: 'from-amber-500 to-orange-500',
    bgColor: 'bg-amber-50 dark:bg-amber-950/20',
    borderColor: 'border-amber-200/50 dark:border-amber-800/30',
    icon: Briefcase,
  },
];

const stats = [
  { label: 'Total Projects', value: '4+', icon: Code2 },
  { label: 'Technologies', value: '8+', icon: Monitor },
  { label: 'Live Demos', value: '4', icon: Globe },
  { label: 'Open Source', value: '100%', icon: Github },
];

export function Projects() {
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
      id="projects"
      className="relative overflow-hidden py-20 sm:py-28 lg:py-32 bg-gradient-to-b from-slate-100/70 via-white/50 to-slate-100/70 dark:from-slate-900/40 dark:via-slate-950/30 dark:to-slate-900/40"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 h-[400px] w-[400px] rounded-full bg-brand-400/10 dark:bg-brand-600/10 blur-3xl" />
        <div className="absolute -bottom-40 -right-40 h-[320px] w-[320px] rounded-full bg-accent-500/10 dark:bg-accent-500/10 blur-3xl" />
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
              <span className="uppercase tracking-[0.15em]">Evidence</span>
            </div>
            <h2 className="relative text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl dark:text-white">
              Live projects
              <span className="absolute -bottom-2 left-0 h-1 w-24 rounded-full bg-gradient-to-r from-brand-500 to-accent-500" />
            </h2>
            <p className="text-slate-600 dark:text-slate-400">Open the demos. Source is on GitHub.</p>
          </motion.div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4"
        >
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                variants={itemVariants}
                className="rounded-2xl border border-slate-200/70 bg-white/60 p-4 transition-transform hover:-translate-y-0.5 dark:border-slate-700/70 dark:bg-slate-900/40"
              >
                <div className="flex items-center gap-3">
                  <div className="rounded-lg bg-brand-100/50 p-2 dark:bg-brand-900/30">
                    <Icon className="h-4 w-4 text-brand-600 dark:text-brand-400" />
                  </div>
                  <div>
                    <p className="text-xl font-bold text-slate-900 dark:text-white">{stat.value}</p>
                    <p className="text-[10px] font-medium uppercase tracking-wide text-slate-500 dark:text-slate-400">
                      {stat.label}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="mt-8 grid gap-5 lg:grid-cols-2"
        >
          {projects.map((project) => {
            const Icon = project.icon;
            return (
              <motion.article key={project.title} variants={itemVariants} className="group relative">
                <div
                  className={`relative flex h-full flex-col rounded-2xl border ${project.borderColor} ${project.bgColor} p-6 transition-transform duration-200 hover:-translate-y-1 hover:shadow-lg`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className={`rounded-xl p-2.5 bg-gradient-to-br ${project.color} shadow-lg flex-shrink-0`}>
                        <Icon className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-slate-900 transition group-hover:text-brand-600 dark:text-white dark:group-hover:text-brand-300">
                          {project.title}
                        </h3>
                        <p className="text-sm text-slate-500 dark:text-slate-400">{project.tagline}</p>
                      </div>
                    </div>
                    <span className="shrink-0 rounded-full bg-brand-500/10 px-2.5 py-0.5 text-xs font-medium text-brand-700 dark:text-brand-300">
                      {project.fit}
                    </span>
                  </div>

                  <p className="mt-4 flex-1 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                    {project.description}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md bg-slate-100/80 px-2.5 py-1 text-xs font-medium text-slate-600 dark:bg-slate-800/60 dark:text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="mt-5 flex gap-5 border-t border-slate-200/50 pt-4 dark:border-slate-700/50">
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-brand-600 transition-colors hover:text-brand-700 dark:text-brand-400"
                    >
                      <ExternalLink size={14} />
                      Live demo
                      <ArrowRight className="h-3.5 w-3.5" />
                    </a>
                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm text-slate-500 transition-colors hover:text-slate-800 dark:text-slate-400 dark:hover:text-white"
                    >
                      <Github size={14} />
                      Source
                    </a>
                    <div className="ml-auto flex items-center gap-1.5 text-xs text-emerald-600 dark:text-emerald-400">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                      <span>Live</span>
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </motion.div>

        <div className="mt-10 flex justify-center">
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-slate-900 to-slate-800 px-6 py-3 text-sm font-medium text-white shadow-lg transition-transform hover:-translate-y-0.5 hover:shadow-xl dark:from-white dark:to-slate-200 dark:text-slate-900"
          >
            <span>Let{""}s build something together</span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
}
