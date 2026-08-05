"use client";

import { motion } from "framer-motion";

export function About() {
  return (
    <section id="about" className="py-20 sm:py-28 bg-slate-100/70 dark:bg-slate-900/40">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-600 dark:text-brand-400">
            About
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
            From a challenge to an obsession
          </h2>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-5">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3 space-y-5 text-base leading-relaxed text-slate-600 dark:text-slate-400"
          >
            <p>
              I first encountered computer science as the “most difficult” combination the University
              of Eswatini offered. Intrigued by the challenge, I dove in — having never used a
              computer before.
            </p>
            <p>
              Grades turned into problem-solving. The keyboard stopped being an obstacle and became
              a way to build solutions people could actually use.
            </p>
            <p>
              Today I focus on applications that are technically sound, scalable and still feel clear
              for the user. Comfortable with modern stacks and AI-assisted development when it helps
              ship quality work faster. From Mankayane; based in Eswatini.
            </p>
          </motion.div>

          <div className="lg:col-span-2 grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
            {[
              { label: "Coding experience", value: "5+ years" },
              { label: "Education", value: "UNESWA · CS & Mathematics" },
              { label: "Applying for", value: "UX/UI · Full-Stack · CMS" },
              { label: "Based in", value: "Mankayane, Eswatini" },
            ].map((item) => (
              <div key={item.label} className="card-surface rounded-2xl px-5 py-4">
                <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-slate-500 dark:text-slate-500">
                  {item.label}
                </p>
                <p className="mt-1.5 text-base font-semibold text-slate-900 dark:text-white">
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
