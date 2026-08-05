// src/components/sections/Experience.tsx
'use client';

import { motion, useInView, Variants } from 'framer-motion';
import { useRef } from 'react';
import {
  Sparkles,
  Briefcase,
  Calendar,
  MapPin,
  Building2,
  Code2,
  Users,
  Heart,
  ArrowRight,
  Clock,
  Award,
  Star,
  Zap,
  ChevronRight,
  Shield,
  TrendingUp,
  Layers,
  Monitor,
  Database,
  Globe,
} from 'lucide-react';

const roles = [
  {
    title: "Junior Systems Developer",
    org: "The Luke Commission",
    period: "2024 · 6 months",
    detail: "Systems development in a healthcare-oriented environment — internal tools and application delivery.",
    icon: Shield,
    color: "from-emerald-500 to-teal-500",
    bgColor: "bg-emerald-50 dark:bg-emerald-950/20",
    borderColor: "border-emerald-200/50 dark:border-emerald-800/30",
  },
  {
    title: "Software Developer",
    org: "McVillan International",
    period: "2023",
    detail: "Software company — application development and networking support for client and internal systems.",
    icon: Code2,
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-50 dark:bg-blue-950/20",
    borderColor: "border-blue-200/50 dark:border-blue-800/30",
  },
  {
    title: "Web Developer",
    org: "Sm3 Creative",
    period: "2023",
    detail: "Digital marketing agency — websites and web experiences for client campaigns.",
    icon: Globe,
    color: "from-purple-500 to-pink-500",
    bgColor: "bg-purple-50 dark:bg-purple-950/20",
    borderColor: "border-purple-200/50 dark:border-purple-800/30",
  },
  {
    title: "Intern",
    org: "RSTP Eswatini",
    period: "2021",
    detail: "Royal Science and Technology Park — technology internship.",
    icon: Building2,
    color: "from-amber-500 to-orange-500",
    bgColor: "bg-amber-50 dark:bg-amber-950/20",
    borderColor: "border-amber-200/50 dark:border-amber-800/30",
  },
  {
    title: "Intern",
    org: "Yeshua Technologies",
    period: "2020 · Sidvwashini",
    detail: "Software company internship; early hands-on development.",
    icon: Users,
    color: "from-rose-500 to-red-500",
    bgColor: "bg-rose-50 dark:bg-rose-950/20",
    borderColor: "border-rose-200/50 dark:border-rose-800/30",
  },
];

// Key achievements summary
const achievements = [
  { label: "Systems Built", value: "5+", icon: Layers },
  { label: "Agencies Worked", value: "3+", icon: Briefcase },
  { label: "Years Active", value: "5+", icon: Clock },
  { label: "Tech Stack", value: "Modern", icon: TrendingUp },
];

export function Experience() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

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

  const itemVariants: Variants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: 'easeInOut' },
    },
  };

  const timelineLineVariants: Variants = {
    hidden: { scaleY: 0 },
    visible: {
      scaleY: 1,
      transition: { duration: 0.8, ease: 'easeInOut', delay: 0.3 },
    },
  };

  const dotVariants: Variants = {
    hidden: { scale: 0 },
    visible: {
      scale: 1,
      transition: { duration: 0.4, ease: 'easeInOut' },
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

  return (
    <section
      ref={sectionRef}
      id="experience"
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
              <span className="uppercase tracking-[0.15em]">Professional Path</span>
            </div>

            {/* Heading with animated underline */}
            <h2 className="relative text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl dark:text-white">
              My experience journey
              <motion.span
                className="absolute -bottom-2 left-0 h-1 w-24 rounded-full bg-gradient-to-r from-brand-500 to-accent-500"
                initial={{ width: 0 }}
                animate={{ width: 96 }}
                transition={{ delay: 0.3, duration: 0.8, ease: 'easeInOut' }}
              />
            </h2>
          </motion.div>
        </motion.div>

        {/* Timeline with Cards */}
        <div className="relative mt-12">
          {/* Timeline Line */}
          <motion.div
            variants={timelineLineVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-brand-500 via-accent-500 to-brand-500/30 rounded-full"
            style={{ transformOrigin: 'top' }}
          />

          {/* Experience Items */}
          <motion.ol
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-6 relative"
          >
            {roles.map((role, index) => {
              const Icon = role.icon;
              const isLast = index === roles.length - 1;

              return (
                <motion.li
                  key={`${role.org}-${role.period}`}
                  variants={itemVariants}
                  whileHover={{ 
                    x: 4,
                    transition: { duration: 0.2 }
                  }}
                  className="relative pl-12"
                >
                  {/* Timeline Dot */}
                  <motion.div
                    variants={dotVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    transition={{ delay: 0.3 + index * 0.08 }}
                    className={`
                      absolute left-0 top-5 w-3 h-3 rounded-full
                      bg-gradient-to-r ${role.color}
                      shadow-lg shadow-${role.color.split(' ')[0]}/30
                      ring-4 ring-white dark:ring-slate-900
                      z-10
                    `}
                  />

                  {/* Card */}
                  <div className={`
                    relative rounded-2xl border ${role.borderColor} ${role.bgColor}
                    p-5 backdrop-blur-sm transition-all duration-300
                    hover:shadow-lg hover:shadow-${role.color.split(' ')[0]}/10
                    dark:hover:shadow-${role.color.split(' ')[0]}/5
                    sm:p-6
                  `}>
                    {/* Decorative glow on hover */}
                    <motion.div
                      className="absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                      style={{
                        background: `radial-gradient(circle at 50% 0%, ${role.color.split(' ')[0].replace('from-', '')} 0%, transparent 70%)`,
                        opacity: 0.06,
                      }}
                    />

                    <div className="relative flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 sm:gap-6">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-3 mb-1">
                          <div className={`
                            rounded-lg p-1.5 bg-gradient-to-br ${role.color}
                            shadow-md
                          `}>
                            <Icon className="h-3.5 w-3.5 text-white" />
                          </div>
                          <h3 className="text-base font-semibold text-slate-900 dark:text-white truncate">
                            {role.title}
                          </h3>
                        </div>
                        
                        <p className="text-sm font-medium text-brand-600 dark:text-brand-400 flex items-center gap-1.5">
                          <Building2 className="h-3.5 w-3.5" />
                          {role.org}
                        </p>
                        
                        <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                          {role.detail}
                        </p>
                      </div>

                      <div className="flex items-center gap-2 shrink-0">
                        <Calendar className="h-3.5 w-3.5 text-slate-400 dark:text-slate-500" />
                        <p className="text-xs font-medium tracking-wide text-slate-500 dark:text-slate-400">
                          {role.period}
                        </p>
                      </div>
                    </div>

                    {/* Corner accent */}
                    <motion.div
                      className="absolute -right-1 -top-1 h-4 w-4 rounded-tr-2xl border-r-2 border-t-2 border-brand-300/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100 dark:border-brand-500/10"
                    />
                  </div>
                </motion.li>
              );
            })}
          </motion.ol>
        </div>

        {/* Stats Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.6, duration: 0.6, ease: 'easeInOut' }}
          className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-3"
        >
          {achievements.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                variants={statVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                transition={{ delay: 0.7 + index * 0.08 }}
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

        {/* Education & CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.8, duration: 0.6, ease: 'easeInOut' }}
          className="mt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-5 rounded-2xl bg-gradient-to-r from-slate-100/80 to-white/80 dark:from-slate-900/50 dark:to-slate-950/50 border border-slate-200/50 dark:border-slate-700/50"
        >
          <div className="flex items-center gap-3">
            <div className="rounded-lg bg-brand-100/50 p-2 dark:bg-brand-900/30">
              <Award className="h-4 w-4 text-brand-600 dark:text-brand-400" />
            </div>
            <div>
              <p className="text-sm font-medium text-slate-700 dark:text-slate-300">
                Education
              </p>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                University of Eswatini — Computer Science and Mathematics
              </p>
            </div>
          </div>

          <motion.a
            href="#projects"
            whileHover={{ scale: 1.02, x: 5 }}
            whileTap={{ scale: 0.98 }}
            className="group inline-flex items-center gap-2 text-sm font-medium text-brand-600 transition-colors hover:text-brand-700 dark:text-brand-400 dark:hover:text-brand-300"
          >
            <span>View my work</span>
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
