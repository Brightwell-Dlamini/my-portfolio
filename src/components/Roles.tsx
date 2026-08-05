"use client";

import { motion } from "framer-motion";

const roles = [
  {
    title: "UX/UI Designer",
    points: [
      "User-centred interfaces on real products — trading tools, property search, admin dashboards",
      "Mobile-first, accessible patterns and clear visual hierarchy",
      "Problem → flow → polished UI in the same codebase that ships",
    ],
  },
  {
    title: "Full-Stack Developer",
    points: [
      "Next.js 15, TypeScript, Supabase, auth, roles and Vercel production",
      "End-to-end ownership: SiyaTrades, SwaziRent, LocalMarket",
      "Agency and systems experience (Sm3, McVillan, Luke Commission)",
    ],
  },
  {
    title: "CMS Specialist",
    points: [
      "Content models, draft/publish flows, media libraries (ForgeCMS)",
      "Admin UX non-developers can use",
      "E-commerce product admin and editorial-style workflows",
    ],
  },
];

export function Roles() {
  return (
    <section id="roles" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-600 dark:text-brand-400">
            Role fit
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
            How I map to your three openings
          </h2>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {roles.map((role, i) => (
            <motion.div
              key={role.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              className="card-surface flex flex-col rounded-2xl p-6 sm:p-7"
            >
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{role.title}</h3>
              <ul className="mt-5 flex-1 space-y-3">
                {role.points.map((p) => (
                  <li
                    key={p}
                    className="flex gap-2.5 text-sm leading-relaxed text-slate-600 dark:text-slate-400"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500" />
                    {p}
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
