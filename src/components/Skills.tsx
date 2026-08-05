// src/components/sections/Skills.tsx
'use client';

import { motion, useInView, Variants } from 'framer-motion';
import { useRef, useState } from 'react';
import {
  Sparkles,
  Code2,
  Layout,
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
  Palette,
  Smartphone,
  Braces,
  Cloud,
  FileText,
} from 'lucide-react';

const groups = [
  {
    title: "UX / UI",
    icon: Palette,
    color: "from-purple-500 to-pink-500",
    bgColor: "bg-purple-50 dark:bg-purple-950/20",
    borderColor: "border-purple-200/50 dark:border-purple-800/30",
    iconBg: "bg-purple-100 dark:bg-purple-900/40",
    items: [
      { name: "React & Next.js UI", icon: Monitor },
      { name: "Tailwind design systems", icon: PenTool },
      { name: "Accessible patterns", icon: Shield },
      { name: "Mobile-first layouts", icon: Smartphone },
      { name: "Admin & dashboard UX", icon: Layout },
    ],
  },
  {
    title: "Full-stack",
    icon: Code2,
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-50 dark:bg-blue-950/20",
    borderColor: "border-blue-200/50 dark:border-blue-800/30",
    iconBg: "bg-blue-100 dark:bg-blue-900/40",
    items: [
      { name: "Next.js App Router", icon: Monitor },
      { name: "TypeScript", icon: Braces },
      { name: "Supabase", icon: Database },
      { name: "Auth & roles", icon: Shield },
      { name: "Vercel production", icon: Cloud },
    ],
  },
  {
    title: "CMS",
    icon: FileText,
    color: "from-emerald-500 to-teal-500",
    bgColor: "bg-emerald-50 dark:bg-emerald-950/20",
    borderColor: "border-emerald-200/50 dark:border-emerald-800/30",
    iconBg: "bg-emerald-100 dark:bg-emerald-900/40",
    items: [
      { name: "Content modelling", icon: Layers },
      { name: "Draft / publish", icon: FileText },
      { name: "Media libraries", icon: Database },
      { name: "Editorial admin", icon: PenTool },
      { name: "Product CMS layers", icon: Layout },
    ],
  },
];

// Proficiency levels for each skill category
const proficiencyLevels = [
  { label: "Expert", color: "from-emerald-500 to-teal-500", value: 90 },
  { label: "Advanced", color: "from-blue-500 to-cyan-500", value: 80 },
  { label: "Proficient", color: "from-purple-500 to-pink-500", value: 70 },
];

export function Skills() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

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

  const progressVariants: Variants = {
    hidden: { width: 0 },
    visible: (value: number) => ({
      width: `${value}%`,
      transition: { duration: 1, ease: 'easeInOut', delay: 0.5 },
    }),
  };

  return (
    <section
      ref={sectionRef}
      id="skills"
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
              <span className="uppercase tracking-[0.15em]">Technical Toolkit</span>
            </div>

            {/* Heading with animated underline */}
            <h2 className="relative text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl dark:text-white">
              Skills & expertise
              <motion.span
                className="absolute -bottom-2 left-0 h-1 w-24 rounded-full bg-gradient-to-r from-brand-500 to-accent-500"
                initial={{ width: 0 }}
                animate={{ width: 96 }}
                transition={{ delay: 0.3, duration: 0.8, ease: 'easeInOut' }}
              />
            </h2>
          </motion.div>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mt-12 grid gap-6 md:grid-cols-3"
        >
          {groups.map((group, index) => {
            const Icon = group.icon;
            const isHovered = hoveredIndex === index;

            return (
              <motion.div
                key={group.title}
                variants={cardVariants}
                whileHover={{ 
                  y: -8,
                  transition: { duration: 0.2, ease: 'easeInOut' }
                }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="group relative"
              >
                <div className={`
                  relative rounded-2xl border ${group.borderColor} ${group.bgColor}
                  p-6 backdrop-blur-sm transition-all duration-300
                  hover:shadow-xl hover:shadow-${group.color.split(' ')[0]}/10
                  dark:hover:shadow-${group.color.split(' ')[0]}/5
                  flex flex-col h-full
                `}>
                  {/* Animated background glow */}
                  <motion.div
                    className="absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    style={{
                      background: `radial-gradient(circle at 50% 0%, ${group.color.split(' ')[0].replace('from-', '')} 0%, transparent 70%)`,
                      opacity: isHovered ? 0.08 : 0,
                    }}
                  />

                  {/* Header with Icon */}
                  <div className="relative flex items-start gap-4">
                    <motion.div
                      variants={floatVariants}
                      initial="initial"
                      animate="animate"
                      className={`
                        rounded-xl p-2.5 bg-gradient-to-br ${group.color}
                        shadow-lg shadow-${group.color.split(' ')[0]}/20
                        flex-shrink-0
                      `}
                    >
                      <Icon className="h-5 w-5 text-white" />
                    </motion.div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                        {group.title}
                      </h3>
                      <motion.div
                        className="mt-1 h-0.5 w-8 rounded-full bg-gradient-to-r from-brand-500 to-accent-500 transition-all duration-300 group-hover:w-12"
                      />
                    </div>
                  </div>

                  {/* Skill Items with Icons */}
                  <ul className="relative mt-5 flex-1 space-y-3">
                    {group.items.map((item, idx) => {
                      const ItemIcon = item.icon;
                      return (
                        <motion.li
                          key={idx}
                          variants={itemVariants}
                          custom={idx}
                          className="flex items-center gap-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400 group/item"
                        >
                          <div className="rounded-md bg-slate-100/50 p-1 dark:bg-slate-800/50 transition-colors group-hover/item:bg-brand-100/50 dark:group-hover/item:bg-brand-900/30">
                            <ItemIcon className="h-3 w-3 text-slate-500 group-hover/item:text-brand-600 dark:text-slate-400 dark:group-hover/item:text-brand-400" />
                          </div>
                          <span>{item.name}</span>
                        </motion.li>
                      );
                    })}
                  </ul>

                  {/* Proficiency Indicator */}
                  <div className="relative mt-4 pt-4 border-t border-slate-200/50 dark:border-slate-700/50">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-slate-500 dark:text-slate-400">Proficiency</span>
                      <span className="font-medium text-slate-700 dark:text-slate-300">
                        {index === 0 ? 'Expert' : index === 1 ? 'Advanced' : 'Proficient'}
                      </span>
                    </div>
                    <div className="mt-1.5 h-1.5 w-full rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden">
                      <motion.div
                        variants={progressVariants}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                        custom={index === 0 ? 90 : index === 1 ? 80 : 70}
                        className={`
                          h-full rounded-full bg-gradient-to-r ${group.color}
                          transition-all duration-300
                        `}
                        style={{
                          width: isHovered ? (index === 0 ? 95 : index === 1 ? 85 : 75) : undefined,
                        }}
                      />
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

        {/* Proficiency Legend */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.6, duration: 0.6, ease: 'easeInOut' }}
          className="mt-10 flex flex-wrap items-center justify-center gap-6"
        >
          {proficiencyLevels.map((level, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2"
            >
              <div className={`h-3 w-3 rounded-full bg-gradient-to-r ${level.color}`} />
              <span className="text-xs font-medium text-slate-600 dark:text-slate-400">
                {level.label}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.8, duration: 0.6, ease: 'easeInOut' }}
          className="mt-10 flex justify-center"
        >
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-slate-900 to-slate-800 px-6 py-3 text-sm font-medium text-white shadow-lg shadow-slate-900/20 transition-all hover:shadow-xl hover:shadow-slate-900/30 dark:from-white dark:to-slate-200 dark:text-slate-900"
          >
            <span>See skills in action</span>
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
