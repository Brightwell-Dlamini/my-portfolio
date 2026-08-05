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
  CheckCircle,
  Zap,
  Shield,
  Rocket,
  Star,
  Gem,
  Heart,
  Briefcase,
  Monitor,
  Database,
  Users,
  Palette,
  Server,
  Globe,
} from 'lucide-react';

const cards = [
  {
    title: "Agency-ready delivery",
    body: "I have shipped in digital marketing and software company environments — client sites, internal tools and systems work under real deadlines.",
    icon: Rocket,
    color: "from-amber-500 to-orange-500",
    bgColor: "bg-amber-50 dark:bg-amber-950/20",
    borderColor: "border-amber-200/50 dark:border-amber-800/30",
  },
  {
    title: "Design + engineering",
    body: "Interfaces are not an afterthought. Product surfaces, admin tools and storefronts are designed in the same stack they ship in.",
    icon: Palette,
    color: "from-purple-500 to-pink-500",
    bgColor: "bg-purple-50 dark:bg-purple-950/20",
    borderColor: "border-purple-200/50 dark:border-purple-800/30",
  },
  {
    title: "Content systems matter",
    body: "CMS and product admin are first-class: models, media, draft/publish and screens non-technical teams can actually run.",
    icon: Database,
    color: "from-emerald-500 to-teal-500",
    bgColor: "bg-emerald-50 dark:bg-emerald-950/20",
    borderColor: "border-emerald-200/50 dark:border-emerald-800/30",
  },
];

// Additional capability tags
const capabilities = [
  { label: "Full-Stack Development", icon: Code2 },
  { label: "UI/UX Design", icon: Layout },
  { label: "Content Strategy", icon: Layers },
  { label: "Agency Workflows", icon: Briefcase },
  { label: "Client Delivery", icon: Users },
  { label: "Systems Thinking", icon: Server },
];

export function WhyWiggle() {
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
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const headerVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const tagVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const floatVariants = {
    initial: { y: 0 },
    animate: {
      y: [0, -8, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  };

  return (
    <section
      ref={sectionRef}
      id="why"
      className="relative overflow-hidden py-20 sm:py-28 lg:py-32"
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
              <span className="uppercase tracking-[0.15em]">Why This Application</span>
            </div>

            {/* Heading with animated underline */}
            <h2 className="relative text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl dark:text-white">
              Built around how Wiggle works
              <motion.span
                className="absolute -bottom-2 left-0 h-1 w-24 rounded-full bg-gradient-to-r from-brand-500 to-accent-500"
                initial={{ width: 0 }}
                animate={{ width: 96 }}
                transition={{ delay: 0.3, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              />
            </h2>

            <p className="max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg dark:text-slate-400">
              Digital agencies need people who can move between craft and code. My recent work —
              local products, CMS demos and full-stack apps — is chosen to show that range, not a
              single narrow specialty.
            </p>
          </motion.div>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mt-12 grid gap-6 md:grid-cols-3"
        >
          {cards.map((card, index) => {
            const Icon = card.icon;
            
            return (
              <motion.div
                key={card.title}
                variants={cardVariants}
                whileHover={{ 
                  y: -8,
                  transition: { duration: 0.2, ease: [0.22, 1, 0.36, 1] }
                }}
                className="group relative"
              >
                <div className={`
                  relative rounded-2xl border ${card.borderColor} ${card.bgColor}
                  p-6 backdrop-blur-sm transition-all duration-300
                  hover:shadow-xl hover:shadow-${card.color.split(' ')[0]}/10
                  dark:hover:shadow-${card.color.split(' ')[0]}/5
                `}>
                  {/* Animated background glow */}
                  <motion.div
                    className="absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    style={{
                      background: `radial-gradient(circle at 50% 0%, ${card.color.split(' ')[0].replace('from-', '')} 0%, transparent 70%)`,
                      opacity: 0.1,
                    }}
                  />

                  {/* Icon with floating animation */}
                  <motion.div
                    variants={floatVariants}
                    initial="initial"
                    animate="animate"
                    className="relative mb-4 inline-flex"
                  >
                    <div className={`
                      rounded-xl p-2.5 bg-gradient-to-br ${card.color}
                      shadow-lg shadow-${card.color.split(' ')[0]}/20
                    `}>
                      <Icon className="h-5 w-5 text-white" />
                    </div>
                  </motion.div>

                  {/* Progress bar - animated on hover */}
                  <motion.div
                    className="mb-4 h-1 w-10 rounded-full bg-gradient-to-r from-brand-500 to-accent-500 transition-all duration-300 group-hover:w-14"
                  />

                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                    {card.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                    {card.body}
                  </p>

                  {/* Decorative corner accent */}
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
          transition={{ delay: 0.6, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mt-16"
        >
          <div className="flex flex-wrap items-center justify-center gap-3">
            <div className="flex items-center gap-2 rounded-full bg-slate-100/80 px-4 py-2 backdrop-blur-sm dark:bg-slate-800/50">
              <Zap className="h-4 w-4 text-amber-500" />
              <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                Capabilities:
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
          transition={{ delay: 0.8, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mt-12 flex justify-center"
        >
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-slate-900 to-slate-800 px-6 py-3 text-sm font-medium text-white shadow-lg shadow-slate-900/20 transition-all hover:shadow-xl hover:shadow-slate-900/30 dark:from-white dark:to-slate-200 dark:text-slate-900"
          >
            <span>Explore my work</span>
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
