// src/components/sections/Contact.tsx
'use client';

import { motion, useInView, Variants } from 'framer-motion';
import { useRef, useState } from 'react';
import {
  Mail,
  Phone,
  Github,
  MapPin,
  Download,
  Sparkles,
  ArrowRight,
  CheckCircle,
  MessageCircle,
  Linkedin,
  Twitter,
  Globe,
  Heart,
  Clock,
  Shield,
} from 'lucide-react';

export function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.2,
        ease: 'easeOut',
      },
    },
  };

  const headerVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, x: -10 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.4, ease: 'easeOut' },
    },
  };

  const contactMethods = [
    {
      label: "Email",
      value: "dlaminibrightwell@gmail.com",
      href: "mailto:dlaminibrightwell@gmail.com?subject=Wiggle%20Digital%20-%20Brightwell%20Dlamini",
      icon: Mail,
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-50 dark:bg-purple-950/20",
      borderColor: "border-purple-200/50 dark:border-purple-800/30",
    },
    {
      label: "Phone (Primary)",
      value: "+268 7636 5430",
      href: "tel:+26876365430",
      icon: Phone,
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50 dark:bg-blue-950/20",
      borderColor: "border-blue-200/50 dark:border-blue-800/30",
    },
    {
      label: "Phone (Secondary)",
      value: "+268 7980 8742",
      href: "tel:+26879808742",
      icon: Phone,
      color: "from-emerald-500 to-teal-500",
      bgColor: "bg-emerald-50 dark:bg-emerald-950/20",
      borderColor: "border-emerald-200/50 dark:border-emerald-800/30",
    },
    {
      label: "GitHub",
      value: "github.com/Brightwell-Dlamini",
      href: "https://github.com/Brightwell-Dlamini",
      icon: Github,
      color: "from-slate-600 to-slate-800",
      bgColor: "bg-slate-50 dark:bg-slate-950/20",
      borderColor: "border-slate-200/50 dark:border-slate-800/30",
    },
  ];

  const quickReplies = [
    { label: "Available for roles", icon: Shield },
    { label: "Open to chat", icon: MessageCircle },
    { label: "Quick response", icon: Clock },
  ];

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative overflow-hidden py-20 sm:py-28 lg:py-32 bg-gradient-to-b from-slate-50/50 via-white to-slate-50/50 dark:from-slate-950/30 dark:via-slate-900 dark:to-slate-950/30"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-brand-400/10 dark:bg-brand-600/10 blur-3xl" />
        <div className="absolute -bottom-40 -right-40 h-[400px] w-[400px] rounded-full bg-accent-500/10 dark:bg-accent-500/10 blur-3xl" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiM5Q0EzQUYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyek0zNiAyNHYySDI0di0yaDEyeiIvPjwvZz48L2c+PC9zdmc+')] bg-[length:60px_60px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="relative"
        >
          <motion.div
            variants={cardVariants}
            className="relative overflow-hidden rounded-3xl border border-slate-200/70 bg-gradient-to-br from-white/90 via-slate-50/90 to-brand-50/60 p-8 shadow-2xl shadow-slate-200/30 backdrop-blur-sm dark:border-slate-700/50 dark:from-slate-900/90 dark:via-slate-950/90 dark:to-brand-950/40 dark:shadow-none sm:p-12"
          >
            <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-brand-400/20 blur-3xl dark:bg-brand-600/20" />
            <div className="pointer-events-none absolute -bottom-20 -left-20 h-40 w-40 rounded-full bg-accent-400/20 blur-3xl dark:bg-accent-600/20" />

            <motion.div variants={headerVariants} className="relative">
              <div className="inline-flex items-center gap-2 rounded-full border border-slate-200/80 bg-white/70 px-3 py-1 text-xs font-medium tracking-wider text-slate-600 backdrop-blur-sm dark:border-slate-700/80 dark:bg-slate-900/60 dark:text-slate-300">
                <Sparkles className="h-3 w-3 text-brand-500" />
                <span className="uppercase tracking-[0.15em]">Get in Touch</span>
              </div>

              <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl dark:text-white">
                Let's talk
                <span className="absolute -bottom-2 left-0 h-1 w-24 rounded-full bg-gradient-to-r from-brand-500 to-accent-500" />
              </h2>

              <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-600 dark:text-slate-400">
                If this is a fit for Wiggle Digital Eswatini, the easiest next step is a call or email.
                Available for UX/UI Designer, Full-Stack Developer or CMS Specialist — or a blend of the
                three.
              </p>
            </motion.div>

            <motion.div
              variants={headerVariants}
              className="relative mt-4 flex flex-wrap items-center gap-4"
            >
              {quickReplies.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={index}
                    className="flex items-center gap-1.5 text-xs font-medium text-slate-500 dark:text-slate-400"
                  >
                    <CheckCircle className="h-3.5 w-3.5 text-emerald-500" />
                    <span>{item.label}</span>
                  </div>
                );
              })}
            </motion.div>

            <motion.div
              variants={containerVariants}
              className="relative mt-8 grid gap-3 sm:grid-cols-2"
            >
              {contactMethods.map((method, index) => {
                const Icon = method.icon;

                return (
                  <motion.a
                    key={index}
                    href={method.href}
                    target={method.label === 'GitHub' ? '_blank' : undefined}
                    rel={method.label === 'GitHub' ? 'noopener noreferrer' : undefined}
                    variants={itemVariants}
                    whileHover={{
                      scale: 1.02,
                      y: -2,
                      transition: { duration: 0.2 }
                    }}
                    whileTap={{ scale: 0.98 }}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    className={`
                      relative flex items-center gap-3 rounded-2xl border ${method.borderColor}
                      ${method.bgColor}
                      px-4 py-3.5 text-sm text-slate-800 shadow-sm backdrop-blur
                      transition-all duration-300 hover:shadow-md
                      dark:text-slate-200
                      group overflow-hidden
                    `}
                  >
                    <div className={`
                      relative rounded-lg p-1.5 bg-gradient-to-br ${method.color}
                      shadow-md transition-transform duration-300 group-hover:scale-110
                    `}>
                      <Icon className="h-4 w-4 text-white" />
                    </div>

                    <div className="relative flex-1 min-w-0">
                      <p className="text-xs font-medium text-slate-500 dark:text-slate-400">
                        {method.label}
                      </p>
                      <p className="text-sm font-medium text-slate-900 dark:text-white truncate">
                        {method.value}
                      </p>
                    </div>

                    <span className="relative opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      <ArrowRight className="h-4 w-4 text-brand-500" />
                    </span>
                  </motion.a>
                );
              })}
            </motion.div>

            <motion.div
              variants={headerVariants}
              className="relative mt-8 flex flex-wrap items-center gap-4"
            >
              <a
                href="/resume"
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-slate-900 to-slate-800 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-900/20 transition-all hover:shadow-xl hover:shadow-slate-900/30 dark:from-white dark:to-slate-200 dark:text-slate-900 hover:-translate-y-0.5"
              >
                <Download size={16} />
                Download / print CV
              </a>

              <div className="inline-flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                <MapPin size={14} className="text-brand-500" />
                Mankayane, Eswatini
              </div>

              <div className="inline-flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                </span>
                Available now
              </div>
            </motion.div>

            <motion.div
              variants={headerVariants}
              className="relative mt-6 pt-6 border-t border-slate-200/50 dark:border-slate-700/50"
            >
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="flex -space-x-2">
                    {[Linkedin, Twitter, Globe].map((Icon, index) => (
                      <div
                        key={index}
                        className="rounded-full bg-white p-1.5 shadow-sm dark:bg-slate-800"
                      >
                        <Icon className="h-4 w-4 text-slate-500 dark:text-slate-400" />
                      </div>
                    ))}
                  </div>
                  <span className="text-xs text-slate-500 dark:text-slate-400">
                    Connect with me
                  </span>
                </div>

                <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                  <Heart className="h-3.5 w-3.5 text-rose-500" />
                  <span>Built with passion</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
