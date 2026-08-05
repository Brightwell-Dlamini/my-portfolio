"use client";

import { motion } from "framer-motion";
import { Mail, Phone, Github, MapPin, Download } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-3xl border border-slate-200/90 bg-gradient-to-br from-white via-slate-50 to-brand-50/40 p-8 shadow-xl shadow-slate-200/50 sm:p-12 dark:border-slate-800 dark:from-slate-900 dark:via-slate-950 dark:to-brand-950/30 dark:shadow-none"
        >
          <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-brand-400/20 blur-3xl dark:bg-brand-600/20" />

          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-600 dark:text-brand-400">
            Contact
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
            Let&apos;s talk
          </h2>
          <p className="mt-4 max-w-xl text-slate-600 leading-relaxed dark:text-slate-400">
            If this is a fit for Wiggle Digital Eswatini, the easiest next step is a call or email.
            Available for UX/UI Designer, Full-Stack Developer or CMS Specialist — or a blend of the
            three.
          </p>

          <div className="relative mt-10 grid max-w-2xl gap-3 sm:grid-cols-2">
            <a
              href="mailto:dlaminibrightwell@gmail.com?subject=Wiggle%20Digital%20-%20Brightwell%20Dlamini"
              className="flex items-center gap-3 rounded-2xl border border-slate-200/90 bg-white/80 px-4 py-3.5 text-sm text-slate-800 shadow-sm backdrop-blur transition hover:border-brand-300 hover:shadow-md dark:border-slate-700 dark:bg-slate-950/60 dark:text-slate-200 dark:hover:border-brand-500/40"
            >
              <Mail size={18} className="shrink-0 text-brand-600 dark:text-brand-400" />
              dlaminibrightwell@gmail.com
            </a>
            <a
              href="tel:+26876365539"
              className="flex items-center gap-3 rounded-2xl border border-slate-200/90 bg-white/80 px-4 py-3.5 text-sm text-slate-800 shadow-sm backdrop-blur transition hover:border-brand-300 dark:border-slate-700 dark:bg-slate-950/60 dark:text-slate-200 dark:hover:border-brand-500/40"
            >
              <Phone size={18} className="shrink-0 text-brand-600 dark:text-brand-400" />
              +268 7636 5539
            </a>
            <a
              href="tel:+26879808742"
              className="flex items-center gap-3 rounded-2xl border border-slate-200/90 bg-white/80 px-4 py-3.5 text-sm text-slate-800 shadow-sm backdrop-blur transition hover:border-brand-300 dark:border-slate-700 dark:bg-slate-950/60 dark:text-slate-200 dark:hover:border-brand-500/40"
            >
              <Phone size={18} className="shrink-0 text-brand-600 dark:text-brand-400" />
              +268 7980 8742
            </a>
            <a
              href="https://github.com/Brightwell-Dlamini"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-2xl border border-slate-200/90 bg-white/80 px-4 py-3.5 text-sm text-slate-800 shadow-sm backdrop-blur transition hover:border-brand-300 dark:border-slate-700 dark:bg-slate-950/60 dark:text-slate-200 dark:hover:border-brand-500/40"
            >
              <Github size={18} className="shrink-0 text-brand-600 dark:text-brand-400" />
              GitHub profile
            </a>
          </div>

          <div className="relative mt-8 flex flex-wrap items-center gap-4">
            <a
              href="/resume"
              className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-600 dark:bg-white dark:text-slate-900 dark:hover:bg-brand-400"
            >
              <Download size={16} />
              Download / print CV
            </a>
            <span className="inline-flex items-center gap-2 text-sm text-slate-500">
              <MapPin size={14} />
              Mankayane, Eswatini
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
