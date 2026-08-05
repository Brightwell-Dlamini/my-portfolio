// src/components/sections/Projects.tsx
'use client';

import { motion, useInView, Variants } from 'framer-motion';
import { useRef, useState } from 'react';
import {
  Sparkles,
  ExternalLink,
  Github,
  ArrowRight,
  Star,
  Code2,
  Layout,
  Database,
  Globe,
  Monitor,
  Shield,
  Rocket,
  Zap,
  CheckCircle,
  Eye,
  TrendingUp,
  Layers,
  Briefcase,
} from 'lucide-react';

const projects = [
  {
    title: "SiyaTrades",
    tagline: "Trading journal & discipline system",
    description:
      "Full-stack product: MT5 import, P&L views, playbook analytics and multi-account support. Data-heavy UX with serious delivery depth.",
    stack: ["Next.js", "TypeScript", "Supabase"],
    live: "https://siya-trades.vercel.app",
    repo: "https://github.com/Brightwell-Dlamini/SiyaTrades",
    fit: "Full-Stack · UX",
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-50 dark:bg-blue-950/20",
    borderColor: "border-blue-200/50 dark:border-blue-800/30",
    icon: TrendingUp,
  },
  {
    title: "SwaziRent (Ekhaya)",
    tagline: "Property marketplace for Eswatini",
    description:
      "Roles, verification, maps and listing flows for the local market — the kind of product work an agency ships for real clients.",
    stack: ["Next.js", "Supabase", "Mapbox"],
    live: "https://ekhayalistings.vercel.app",
    repo: "https://github.com/Brightwell-Dlamini/swazirent-main",
    fit: "Full-Stack · Local product",
    color: "from-emerald-500 to-teal-500",
    bgColor: "bg-emerald-50 dark:bg-emerald-950/20",
    borderColor: "border-emerald-200/50 dark:border-emerald-800/30",
    icon: Globe,
  },
  {
    title: "ForgeCMS",
    tagline: "CMS for content teams",
    description:
      "Content models, media library, draft/publish and admin UX — direct proof for the CMS Specialist seat.",
    stack: ["Next.js", "TypeScript", "Tailwind"],
    live: "https://siya-cms.vercel.app",
    repo: "https://github.com/Brightwell-Dlamini/forge-cms",
    fit: "CMS Specialist",
    color: "from-purple-500 to-pink-500",
    bgColor: "bg-purple-50 dark:bg-purple-950/20",
    borderColor: "border-purple-200/50 dark:border-purple-800/30",
    icon: Layers,
  },
  {
    title: "LocalMarket",
    tagline: "E-commerce + admin",
    description:
      "Storefront and product/order admin for SMEs — catalogue, cart and operational screens non-technical users can run.",
    stack: ["Next.js", "TypeScript"],
    live: "https://siya-market.vercel.app",
    repo: "https://github.com/Brightwell-Dlamini/localmarket",
    fit: "Full-Stack · CMS layer",
    color: "from-amber-500 to-orange-500",
    bgColor: "bg-amber-50 dark:bg-amber-950/20",
    borderColor: "border-amber-200/50 dark:border-amber-800/30",
    icon: Briefcase,
  },
];

// Project stats
const stats = [
  { label: "Total Projects", value: "4+", icon: Code2 },
  { label: "Technologies", value: "8+", icon: Monitor },
  { label: "Live Demos", value: "4", icon: Globe },
  { label: "Open Source", value: "100%", icon: Github },
];

export function Projects() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Animation variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.2,
        ease: 'easeInOut',
      },
    },
  };

  const headerVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeInOut' },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: 'easeInOut' },
    },
  };

  const statVariants: Variants = {
    hidden: { opacity: 0, y: 10, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5, ease: 'easeInOut' },
    },
  };

  const floatVariants: Variants = {
    initial: { y: 0 },
    animate: {
      y: [0, -6, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  };

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="relative overflow-hidden py-20 sm:py-28 lg:py-32 bg-gradient-to-b from-slate-100/70 via-white/50 to-slate-100/70 dark:from-slate-900/40 dark:via-slate-950/30 dark:to-slate-900/40"
    >
      {/* Animated Background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Gradient Orbs */}
        <motion.div
          className="absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-brand-400/10 dark:bg-brand-600/10 blur-3xl"
          animate={{
            x: [0, 30, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute -bottom-40 -right-40 h-[400px] w-[400px] rounded-full bg-accent-500/10 dark:bg-accent-500/10 blur-3xl"
          animate={{
            x: [0, -30, 0],
            y: [0, 20, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        {/* Subtle Pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiM5Q0EzQUYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyek0zNiAyNHYySDI0di0yaDEyeiIvPjwvZz48L2c+PC9zdmc+')] bg-[length:60px_60px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-3xl"
        >
          <motion.div variants={headerVariants} className="space-y-4">
            {/* Section Label */}
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200/80 bg-white/70 px-3 py-1 text-xs font-medium tracking-wider text-slate-600 backdrop-blur-sm dark:border-slate-700/80 dark:bg-slate-900/60 dark:text-slate-300">
              <Sparkles className="h-3 w-3 text-brand-500" />
              <span className="uppercase tracking-[0.15em]">Evidence</span>
            </div>

            {/* Heading with animated underline */}
            <h2 className="relative text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl dark:text-white">
              Live projects
              <motion.span
                className="absolute -bottom-2 left-0 h-1 w-24 rounded-full bg-gradient-to-r from-brand-500 to-accent-500"
                initial={{ width: 0 }}
                animate={{ width: 96 }}
                transition={{ delay: 0.3, duration: 0.8, ease: 'easeInOut' }}
              />
            </h2>
            <p className="text-slate-600 dark:text-slate-400">
              Open the demos. Source is on GitHub.
            </p>
          </motion.div>
        </motion.div>

        {/* Stats Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.4, duration: 0.6, ease: 'easeInOut' }}
          className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3"
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                variants={statVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                transition={{ delay: 0.5 + index * 0.08 }}
                whileHover={{ scale: 1.03, y: -2 }}
                className="rounded-2xl border border-slate-200/70 bg-white/60 p-4 backdrop-blur-sm transition-all hover:shadow-md dark:border-slate-700/70 dark:bg-slate-900/40"
              >
                <div className="flex items-center gap-3">
                  <div className="rounded-lg bg-brand-100/50 p-2 dark:bg-brand-900/30">
                    <Icon className="h-4 w-4 text-brand-600 dark:text-brand-400" />
                  </div>
                  <div>
                    <p className="text-xl font-bold text-slate-900 dark:text-white">
                      {stat.value}
                    </p>
                    <p className="text-[10px] font-medium uppercase tracking-wide text-slate-500 dark:text-slate-400">
                      {stat.label}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mt-8 grid gap-5 lg:grid-cols-2"
        >
          {projects.map((project, index) => {
            const Icon = project.icon;
            const isHovered = hoveredIndex === index;

            return (
              <motion.article
                key={project.title}
                variants={cardVariants}
                whileHover={{ 
                  y: -6,
                  transition: { duration: 0.2, ease: 'easeInOut' }
                }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="group relative"
              >
                <div className={`
                  relative rounded-2xl border ${project.borderColor} ${project.bgColor}
                  p-6 backdrop-blur-sm transition-all duration-300
                  hover:shadow-xl hover:shadow-${project.color.split(' ')[0]}/10
                  dark:hover:shadow-${project.color.split(' ')[0]}/5
                  flex flex-col h-full
                `}>
                  {/* Animated background glow */}
                  <motion.div
                    className="absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    style={{
                      background: `radial-gradient(circle at 50% 0%, ${project.color.split(' ')[0].replace('from-', '')} 0%, transparent 70%)`,
                      opacity: isHovered ? 0.06 : 0,
                    }}
                  />

                  {/* Header with Icon and Fit Badge */}
                  <div className="relative flex items-start justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <motion.div
                        variants={floatVariants}
                        initial="initial"
                        animate="animate"
                        className={`
                          rounded-xl p-2.5 bg-gradient-to-br ${project.color}
                          shadow-lg shadow-${project.color.split(' ')[0]}/20
                          flex-shrink-0
                        `}
                      >
                        <Icon className="h-5 w-5 text-white" />
                      </motion.div>
                      <div>
                        <h3 className="text-lg font-semibold text-slate-900 transition group-hover:text-brand-600 dark:text-white dark:group-hover:text-brand-300">
                          {project.title}
                        </h3>
                        <p className="text-sm text-slate-500 dark:text-slate-400">
                          {project.tagline}
                        </p>
                      </div>
                    </div>
                    <span className="shrink-0 rounded-full bg-brand-500/10 px-2.5 py-0.5 text-xs font-medium text-brand-700 dark:text-brand-300">
                      {project.fit}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="relative mt-4 flex-1 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="relative mt-4 flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md bg-slate-100/80 px-2.5 py-1 text-xs font-medium text-slate-600 backdrop-blur-sm transition-colors group-hover:bg-brand-100/60 dark:bg-slate-800/60 dark:text-slate-300 dark:group-hover:bg-brand-900/40"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Links */}
                  <div className="relative mt-5 flex gap-5 border-t border-slate-200/50 pt-4 dark:border-slate-700/50">
                    <motion.a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-brand-600 transition-colors hover:text-brand-700 dark:text-brand-400 dark:hover:text-brand-300"
                    >
                      <ExternalLink size={14} />
                      Live demo
                      <motion.span
                        animate={{ x: [0, 3, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                      >
                        <ArrowRight className="h-3.5 w-3.5" />
                      </motion.span>
                    </motion.a>
                    <motion.a
                      href={project.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      className="inline-flex items-center gap-1.5 text-sm text-slate-500 transition-colors hover:text-slate-800 dark:text-slate-400 dark:hover:text-white"
                    >
                      <Github size={14} />
                      Source
                    </motion.a>

                    {/* Status indicator */}
                    <div className="ml-auto flex items-center gap-1.5 text-xs text-emerald-600 dark:text-emerald-400">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      <span>Live</span>
                    </div>
                  </div>

                  {/* Decorative corner accents */}
                  <motion.div
                    className="absolute -right-1 -top-1 h-6 w-6 rounded-tr-2xl border-r-2 border-t-2 border-brand-300/30 opacity-0 transition-opacity duration-300 group-hover:opacity-100 dark:border-brand-500/20"
                  />
                  <motion.div
                    className="absolute -bottom-1 -left-1 h-6 w-6 rounded-bl-2xl border-b-2 border-l-2 border-accent-300/30 opacity-0 transition-opacity duration-300 group-hover:opacity-100 dark:border-accent-500/20"
                  />
                </div>
              </motion.article>
            );
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.6, duration: 0.6, ease: 'easeInOut' }}
          className="mt-10 flex justify-center"
        >
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-slate-900 to-slate-800 px-6 py-3 text-sm font-medium text-white shadow-lg shadow-slate-900/20 transition-all hover:shadow-xl hover:shadow-slate-900/30 dark:from-white dark:to-slate-200 dark:text-slate-900"
          >
            <span>Let's build something together</span>
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            >
              <ArrowRight className="h-4 w-4" />
            </motion.span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
