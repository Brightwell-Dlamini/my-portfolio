// src/components/sections/Roles.tsx
'use client';

import { motion, useInView, Variants } from 'framer-motion';
import { useRef } from 'react';
import {
  Sparkles,
  Palette,
  Code2,
  Database,
  ArrowRight,
  CheckCircle,
  Zap,
  PenTool,
  Monitor,
  Layers,
  Server,
  Globe,
  Users,
  Briefcase,
  Star,
  Shield,
  Rocket,
} from 'lucide-react';

const roles = [
  {
    title: "UX/UI Designer",
    icon: Palette,
    color: "from-purple-500 to-pink-500",
    bgColor: "bg-purple-50 dark:bg-purple-950/20",
    borderColor: "border-purple-200/50 dark:border-purple-800/30",
    iconBg: "bg-purple-100 dark:bg-purple-900/40",
    points: [
      "User-centred interfaces on real products — trading tools, property search, admin dashboards",
      "Mobile-first, accessible patterns and clear visual hierarchy",
      "Problem → flow → polished UI in the same codebase that ships",
    ],
  },
  {
    title: "Full-Stack Developer",
    icon: Code2,
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-50 dark:bg-blue-950/20",
    borderColor: "border-blue-200/50 dark:border-blue-800/30",
    iconBg: "bg-blue-100 dark:bg-blue-900/40",
    points: [
      "Next.js 15, TypeScript, Supabase, auth, roles and Vercel production",
      "End-to-end ownership: SiyaTrades, SwaziRent, LocalMarket",
      "Agency and systems experience (Sm3, McVillan, Luke Commission)",
    ],
  },
  {
    title: "CMS Specialist",
    icon: Database,
    color: "from-emerald-500 to-teal-500",
    bgColor: "bg-emerald-50 dark:bg-emerald-950/20",
    borderColor: "border-emerald-200/50 dark:border-emerald-800/30",
    iconBg: "bg-emerald-100 dark:bg-emerald-900/40",
    points: [
      "Content models, draft/publish flows, media libraries (ForgeCMS)",
      "Admin UX non-developers can use",
      "E-commerce product admin and editorial-style workflows",
    ],
  },
];

// Additional capability tags
const capabilities = [
  { label: "UX/UI Design", icon: PenTool },
  { label: "Full-Stack Dev", icon: Monitor },
  { label: "CMS Architecture", icon: Layers },
  { label: "System Design", icon: Server },
  { label: "Client Delivery", icon: Users },
  { label: "Agile Workflows", icon: Briefcase },
];

export function Roles() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  // Animation variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  const itemVariants: Variants = {
    hidden: { opacity: 0, x: -10 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.4, ease: 'easeInOut' },
    },
  };

  const tagVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4, ease: 'easeInOut' },
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
      id="roles"
      className="relative overflow-hidden py-20 sm:py-28 lg:py-32 bg-gradient-to-b from-slate-50/50 via-white to-slate-50/50 dark:from-slate-950/30 dark:via-slate-900 dark:to-slate-950/30"
    >
      {/* Animated Background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Gradient Orbs */}
        <motion.div
          className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-brand-400/10 dark:bg-brand-600/10 blur-3xl"
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
          className="absolute -bottom-40 -left-40 h-[400px] w-[400px] rounded-full bg-accent-500/10 dark:bg-accent-500/10 blur-3xl"
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
        <motion.div
          className="absolute top-1/2 left-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-400/5 dark:bg-indigo-600/5 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        {/* Subtle Grid Pattern */}
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
              <span className="uppercase tracking-[0.15em]">Role Fit</span>
            </div>

            {/* Heading with animated underline */}
            <h2 className="relative text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl dark:text-white">
              How I map to your three openings
              <motion.span
                className="absolute -bottom-2 left-0 h-1 w-24 rounded-full bg-gradient-to-r from-brand-500 to-accent-500"
                initial={{ width: 0 }}
                animate={{ width: 96 }}
                transition={{ delay: 0.3, duration: 0.8, ease: 'easeInOut' }}
              />
            </h2>
          </motion.div>
        </motion.div>

        {/* Roles Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mt-12 grid gap-6 md:grid-cols-3"
        >
          {roles.map((role, index) => {
            const Icon = role.icon;
            
            return (
              <motion.div
                key={role.title}
                variants={cardVariants}
                whileHover={{ 
                  y: -8,
                  transition: { duration: 0.2, ease: 'easeInOut' }
                }}
                className="group relative"
              >
                <div className={`
                  relative rounded-2xl border ${role.borderColor} ${role.bgColor}
                  p-6 backdrop-blur-sm transition-all duration-300
                  hover:shadow-xl hover:shadow-${role.color.split(' ')[0].replace('from-', '')}/10
                  dark:hover:shadow-${role.color.split(' ')[0].replace('from-', '')}/5
                  flex flex-col h-full
                `}>
                  {/* Animated background glow */}
                  <motion.div
                    className="absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    style={{
                      background: `radial-gradient(circle at 50% 0%, ${role.color.split(' ')[0].replace('from-', '')} 0%, transparent 70%)`,
                      opacity: 0.08,
                    }}
                  />

                  {/* Header with Icon */}
                  <div className="relative flex items-start gap-4">
                    <motion.div
                      variants={floatVariants}
                      initial="initial"
                      animate="animate"
                      className={`
                        rounded-xl p-2.5 bg-gradient-to-br ${role.color}
                        shadow-lg shadow-${role.color.split(' ')[0]}/20
                        flex-shrink-0
                      `}
                    >
                      <Icon className="h-5 w-5 text-white" />
                    </motion.div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                        {role.title}
                      </h3>
                      <motion.div
                        className="mt-1 h-0.5 w-8 rounded-full bg-gradient-to-r from-brand-500 to-accent-500 transition-all duration-300 group-hover:w-12"
                      />
                    </div>
                  </div>

                  {/* Points List */}
                  <ul className="relative mt-5 flex-1 space-y-3.5">
                    {role.points.map((point, idx) => (
                      <motion.li
                        key={idx}
                        variants={itemVariants}
                        custom={idx}
                        className="flex gap-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400"
                      >
                        <motion.span
                          className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r from-brand-500 to-accent-500 flex-shrink-0"
                          whileHover={{ scale: 1.5 }}
                        />
                        <span>{point}</span>
                      </motion.li>
                    ))}
                  </ul>

                  {/* Role Badge */}
                  <div className="relative mt-4 pt-4 border-t border-slate-200/50 dark:border-slate-700/50">
                    <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                      <CheckCircle className="h-3.5 w-3.5 text-brand-500" />
                      <span>Proven expertise in this role</span>
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
              </motion.div>
            );
          })}
        </motion.div>

        {/* Capability Tags */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.6, duration: 0.6, ease: 'easeInOut' }}
          className="mt-16"
        >
          <div className="flex flex-wrap items-center justify-center gap-3">
            <div className="flex items-center gap-2 rounded-full bg-slate-100/80 px-4 py-2 backdrop-blur-sm dark:bg-slate-800/50">
              <Zap className="h-4 w-4 text-amber-500" />
              <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                Core Capabilities:
              </span>
            </div>
            
            {capabilities.map((cap, index) => {
              const Icon = cap.icon;
              return (
                <motion.div
                  key={index}
                  variants={tagVariants}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  transition={{ delay: 0.7 + index * 0.05 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="inline-flex items-center gap-1.5 rounded-full border border-slate-200/70 bg-white/60 px-3 py-1.5 text-xs font-medium text-slate-600 backdrop-blur-sm transition-all hover:border-brand-300/50 hover:bg-brand-50/80 hover:text-brand-700 dark:border-slate-700/70 dark:bg-slate-900/40 dark:text-slate-400 dark:hover:border-brand-500/30 dark:hover:bg-brand-950/30 dark:hover:text-brand-300"
                >
                  <Icon className="h-3 w-3" />
                  {cap.label}
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.8, duration: 0.6, ease: 'easeInOut' }}
          className="mt-12 flex justify-center"
        >
          <motion.a
            href="#experience"
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-slate-900 to-slate-800 px-6 py-3 text-sm font-medium text-white shadow-lg shadow-slate-900/20 transition-all hover:shadow-xl hover:shadow-slate-900/30 dark:from-white dark:to-slate-200 dark:text-slate-900"
          >
            <span>View my experience</span>
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
