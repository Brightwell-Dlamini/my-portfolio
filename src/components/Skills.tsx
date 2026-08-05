"use client";

import { motion } from "framer-motion";

const groups = [
  {
    title: "UX / UI",
    items: ["React & Next.js UI", "Tailwind design systems", "Accessible patterns", "Mobile-first layouts", "Admin & dashboard UX"],
  },
  {
    title: "Full-stack",
    items: ["Next.js App Router", "TypeScript", "Supabase", "Auth & roles", "Vercel production"],
  },
  {
    title: "CMS",
    items: ["Content modelling", "Draft / publish", "Media libraries", "Editorial admin", "Product CMS layers"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-600 dark:text-brand-400">
            Skills
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
            Technical toolkit
          </h2>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {groups.map((g, i) => (
            <motion.div
              key={g.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="card-surface rounded-2xl p-6"
            >
              <h3 className="font-semibold text-slate-900 dark:text-white">{g.title}</h3>
              <ul className="mt-4 space-y-2.5">
                {g.items.map((item) => (
                  <li
                    key={item}
                    className="flex gap-2 text-sm text-slate-600 dark:text-slate-400"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
