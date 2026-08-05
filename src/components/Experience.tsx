"use client";

import { motion } from "framer-motion";

const roles = [
  {
    title: "Junior Systems Developer",
    org: "The Luke Commission",
    period: "2024 · 6 months",
    detail:
      "Systems development in a healthcare-oriented environment — internal tools and application delivery.",
  },
  {
    title: "Software Developer",
    org: "McVillan International",
    period: "2023",
    detail:
      "Software company — application development and networking support for client and internal systems.",
  },
  {
    title: "Web Developer",
    org: "Sm3 Creative",
    period: "2023",
    detail: "Digital marketing agency — websites and web experiences for client campaigns.",
  },
  {
    title: "Intern",
    org: "RSTP Eswatini",
    period: "2021",
    detail: "Royal Science and Technology Park — technology internship.",
  },
  {
    title: "Intern",
    org: "Yeshua Technologies",
    period: "2020 · Sidvwashini",
    detail: "Software company internship; early hands-on development.",
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-20 sm:py-28 bg-slate-100/70 dark:bg-slate-900/40">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-600 dark:text-brand-400">
            Experience
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
            Professional path
          </h2>
        </div>

        <ol className="mt-12 space-y-4">
          {roles.map((role, i) => (
            <motion.li
              key={`${role.org}-${role.period}`}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
              className="card-surface rounded-2xl p-5 sm:flex sm:items-start sm:justify-between sm:gap-8 sm:p-6"
            >
              <div>
                <h3 className="text-base font-semibold text-slate-900 dark:text-white">
                  {role.title}
                </h3>
                <p className="text-sm font-medium text-brand-600 dark:text-brand-400">{role.org}</p>
                <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                  {role.detail}
                </p>
              </div>
              <p className="mt-3 shrink-0 text-xs font-medium tracking-wide text-slate-500 sm:mt-0">
                {role.period}
              </p>
            </motion.li>
          ))}
        </ol>

        <p className="mt-8 text-sm text-slate-500 dark:text-slate-500">
          Education: University of Eswatini — Computer Science and Mathematics.
        </p>
      </div>
    </section>
  );
}
