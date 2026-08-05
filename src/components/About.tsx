// src/components/sections/About.tsx
'use client';

import { motion, useInView, Variants } from 'framer-motion';
import { useRef } from 'react';
import {
  Sparkles,
  Code2,
  GraduationCap,
  Briefcase,
  MapPin,
  Heart,
  ArrowRight,
  Zap,
  Star,
  Award,
  BookOpen,
  Rocket,
  Compass,
  Target,
  Clock,
  Globe,
  Users,
} from 'lucide-react';

export function About() {
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

  const textVariants: Variants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeInOut' },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeInOut' },
    },
  };

  const stats = [
    { label: "Coding Experience", value: "5+ Years", icon: Code2 },
    { label: "Education", value: "UNESWA · CS & Math", icon: GraduationCap },
    { label: "Applying For", value: "UX/UI · Full-Stack · CMS", icon: Briefcase },
    { label: "Based In", value: "Mankayane, Eswatini", icon: MapPin },
  ];

  const journeyHighlights = [
    "First encountered CS as a challenge",
    "Never used a computer before",
    "Grades → Problem solving",
    "Building solutions people use",
  ];

  return (
    <section
      ref={sectionRef}
      id="about"
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
              <span className="uppercase tracking-[0.15em]">My Journey</span>
            </div>

            {/* Heading with animated underline */}
            <h2 className="relative text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl dark:text-white">
              From a challenge to an obsession
              <motion.span
                className="absolute -bottom-2 left-0 h-1 w-24 rounded-full bg-gradient-to-r from-brand-500 to-accent-500"
                initial={{ width: 0 }}
                animate={{ width: 96 }}
                transition={{ delay: 0.3, duration: 0.8, ease: 'easeInOut' }}
              />
            </h2>
          </motion.div>
        </motion.div>

        {/* Main Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mt-12 grid gap-8 lg:grid-cols-5"
        >
          {/* Story Column */}
          <div className="lg:col-span-3 space-y-5">
            <motion.p
              variants={textVariants}
              className="text-base leading-relaxed text-slate-600 sm:text-lg dark:text-slate-400"
            >
              I first encountered computer science as the <span className="font-semibold text-slate-900 dark:text-white">&quot;most difficult&quot;</span> combination the University of Eswatini offered. Intrigued by the challenge, I dove in — having never used a computer before.
            </motion.p>

            <motion.p
              variants={textVariants}
              className="text-base leading-relaxed text-slate-600 sm:text-lg dark:text-slate-400"
            >
              Grades turned into problem-solving. The keyboard stopped being an obstacle and became a way to build solutions people could actually use.
            </motion.p>

            <motion.p
              variants={textVariants}
              className="text-base leading-relaxed text-slate-600 sm:text-lg dark:text-slate-400"
            >
              Today I focus on applications that are <span className="font-semibold text-slate-900 dark:text-white">technically sound</span>, scalable and still feel clear for the user. Comfortable with modern stacks and AI-assisted development when it helps ship quality work faster. From Mankayane; based in Eswatini.
            </motion.p>

            {/* Journey Highlights */}
            <motion.div
              variants={textVariants}
              className="mt-4 grid grid-cols-2 gap-2"
            >
              {journeyHighlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                  transition={{ delay: 0.4 + index * 0.08, duration: 0.4 }}
                  className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-500 flex-shrink-0" />
                  <span>{highlight}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA */}
            <motion.div
              variants={textVariants}
              className="mt-4"
            >
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.02, x: 5 }}
                whileTap={{ scale: 0.98 }}
                className="group inline-flex items-center gap-2 text-sm font-medium text-brand-600 transition-colors hover:text-brand-700 dark:text-brand-400 dark:hover:text-brand-300"
              >
                <span>Let&apos;s connect</span>
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <ArrowRight className="h-4 w-4" />
                </motion.span>
              </motion.a>
            </motion.div>
          </div>

          {/* Stats Grid */}
          <div className="lg:col-span-2 grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  variants={cardVariants}
                  whileHover={{ 
                    scale: 1.02,
                    y: -2,
                    transition: { duration: 0.2 }
                  }}
                  className="group relative rounded-2xl border border-slate-200/70 bg-white/60 p-5 backdrop-blur-sm transition-all hover:shadow-lg hover:shadow-brand-500/5 dark:border-slate-700/70 dark:bg-slate-900/40"
                >
                  {/* Decorative glow */}
                  <motion.div
                    className="absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    style={{
                      background: 'radial-gradient(circle at 50% 0%, rgba(99, 102, 241, 0.05) 0%, transparent 70%)',
                    }}
                  />

                  <div className="relative flex items-start gap-3">
                    <div className="rounded-lg bg-brand-100/50 p-2 dark:bg-brand-900/30">
                      <Icon className="h-4 w-4 text-brand-600 dark:text-brand-400" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-slate-500 dark:text-slate-500">
                        {stat.label}
                      </p>
                      <p className="mt-0.5 text-base font-semibold text-slate-900 dark:text-white truncate">
                        {stat.value}
                      </p>
                    </div>
                  </div>

                  {/* Corner accent */}
                  <motion.div
                    className="absolute -right-1 -top-1 h-4 w-4 rounded-tr-2xl border-r-2 border-t-2 border-brand-300/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100 dark:border-brand-500/10"
                  />
                </motion.div>
              );
            })}

            {/* Additional context card */}
            <motion.div
              variants={cardVariants}
              className="mt-1 rounded-2xl border border-slate-200/70 bg-gradient-to-br from-brand-50/80 to-accent-50/80 p-4 backdrop-blur-sm dark:from-brand-950/30 dark:to-accent-950/30"
            >
              <div className="flex items-center gap-3">
                <Heart className="h-4 w-4 text-rose-500" />
                <div>
                  <p className="text-xs font-medium text-slate-700 dark:text-slate-300">
                    Passionate about building things that matter
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    From Mankayane to the world
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
