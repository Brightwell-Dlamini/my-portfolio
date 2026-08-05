"use client";

import { motion } from "framer-motion";
import { ArrowDown, Download, Mail, Phone } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-20 sm:pt-36 sm:pb-28">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="glow-orb absolute -top-24 left-1/4 h-72 w-72 rounded-full bg-brand-400/40 dark:bg-brand-600/30" />
        <div className="glow-orb absolute top-40 right-0 h-80 w-80 rounded-full bg-accent-500/25 dark:bg-accent-500/20" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_transparent_40%,_rgb(248_250_252)_80%)] dark:bg-[radial-gradient(ellipse_at_top,_transparent_30%,_rgb(2_6_23)_85%)]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-slate-200/90 bg-white/70 px-3 py-1 text-xs font-medium tracking-wide text-slate-600 shadow-sm backdrop-blur dark:border-slate-700/80 dark:bg-slate-900/60 dark:text-slate-300">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgb(16_185_129)]" />
            Application · Wiggle Digital Eswatini
          </p>

          <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-[3.25rem] lg:leading-[1.15] dark:text-white">
            Hi, Brightwell Dlamini here.
          </h1>

          <p className="mt-6 text-lg leading-relaxed text-slate-600 sm:text-xl dark:text-slate-300">
            I think I&apos;m the best fit for{" "}
            <span className="font-semibold text-slate-900 dark:text-white">Wiggle Digital</span>.
            Wiggle&apos;s brief asks for people who can design interfaces, ship full-stack products
            and own content systems. That is exactly the mix I practise — and the reason this
            application is structured the way a digital product would be: clear hierarchy, honest
            proof and a direct path to conversation.
          </p>

          <p className="mt-4 text-base text-slate-500 dark:text-slate-400">
            Scroll down and see more about me.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-900/15 transition hover:bg-brand-600 dark:bg-white dark:text-slate-900 dark:shadow-none dark:hover:bg-brand-400"
            >
              See the work
            </a>
            <a
              href="/resume"
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-6 py-3 text-sm font-semibold text-slate-800 shadow-sm backdrop-blur transition hover:border-brand-300 hover:text-brand-700 dark:border-slate-700 dark:bg-slate-900/50 dark:text-slate-100 dark:hover:border-brand-500/50 dark:hover:text-brand-300"
            >
              <Download size={16} />
              Download CV
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full px-4 py-3 text-sm font-medium text-slate-600 transition hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
            >
              Contact
              <ArrowDown size={14} />
            </a>
          </div>

          <div className="mt-12 flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-500 dark:text-slate-400">
            <a
              href="mailto:dlaminibrightwell@gmail.com"
              className="inline-flex items-center gap-2 transition hover:text-brand-600 dark:hover:text-brand-400"
            >
              <Mail size={15} />
              dlaminibrightwell@gmail.com
            </a>
            <a
              href="tel:+26876365539"
              className="inline-flex items-center gap-2 transition hover:text-brand-600 dark:hover:text-brand-400"
            >
              <Phone size={15} />
              +268 7636 5539
            </a>
            <span>Mankayane, Eswatini</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
