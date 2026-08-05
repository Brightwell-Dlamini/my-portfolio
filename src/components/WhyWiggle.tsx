"use client";

import { motion } from "framer-motion";

const cards = [
  {
    title: "Agency-ready delivery",
    body: "I have shipped in digital marketing and software company environments — client sites, internal tools and systems work under real deadlines.",
  },
  {
    title: "Design + engineering",
    body: "Interfaces are not an afterthought. Product surfaces, admin tools and storefronts are designed in the same stack they ship in.",
  },
  {
    title: "Content systems matter",
    body: "CMS and product admin are first-class: models, media, draft/publish and screens non-technical teams can actually run.",
  },
];

export function WhyWiggle() {
  return (
    <section id="why" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-600 dark:text-brand-400">
            Why this application
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
            Built around how Wiggle works
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600 dark:text-slate-400">
            Digital agencies need people who can move between craft and code. My recent work —
            local products, CMS demos and full-stack apps — is chosen to show that range, not a
            single narrow specialty.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.08, duration: 0.45 }}
              className="card-surface group rounded-2xl p-6 transition duration-300 hover:-translate-y-0.5"
            >
              <div className="mb-4 h-1 w-10 rounded-full bg-gradient-to-r from-brand-500 to-accent-500 opacity-80 transition group-hover:w-14" />
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{card.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                {card.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
