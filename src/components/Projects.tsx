"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "SiyaTrades",
    tagline: "Trading journal & discipline system",
    description:
      "Full-stack product: MT5 import, P&L views, playbook analytics and multi-account support. Data-heavy UX with serious delivery depth.",
    stack: ["Next.js", "TypeScript", "Supabase"],
    live: "https://siya-trades.vercel.app",
    repo: "https://github.com/Brightwell-Dlamini/SiyaTrades",
    fit: "Full-Stack · UX",
  },
  {
    title: "SwaziRent (Ekhaya)",
    tagline: "Property marketplace for Eswatini",
    description:
      "Roles, verification, maps and listing flows for the local market — the kind of product work an agency ships for real clients.",
    stack: ["Next.js", "Supabase", "Mapbox"],
    live: "https://ekhayalistings.vercel.app",
    repo: "https://github.com/Brightwell-Dlamini/swazirent-main",
    fit: "Full-Stack · Local product",
  },
  {
    title: "ForgeCMS",
    tagline: "CMS for content teams",
    description:
      "Content models, media library, draft/publish and admin UX — direct proof for the CMS Specialist seat.",
    stack: ["Next.js", "TypeScript", "Tailwind"],
    live: "https://siya-cms.vercel.app",
    repo: "https://github.com/Brightwell-Dlamini/forge-cms",
    fit: "CMS Specialist",
  },
  {
    title: "LocalMarket",
    tagline: "E-commerce + admin",
    description:
      "Storefront and product/order admin for SMEs — catalogue, cart and operational screens non-technical users can run.",
    stack: ["Next.js", "TypeScript"],
    live: "https://siya-market.vercel.app",
    repo: "https://github.com/Brightwell-Dlamini/localmarket",
    fit: "Full-Stack · CMS layer",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-20 sm:py-28 bg-slate-100/70 dark:bg-slate-900/40">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-600 dark:text-brand-400">
            Evidence
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
            Live projects
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-400">
            Open the demos. Source is on GitHub.
          </p>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="card-surface group flex flex-col rounded-2xl p-6 sm:p-8 transition duration-300 hover:-translate-y-0.5"
            >
              <span className="w-fit rounded-full bg-brand-500/10 px-2.5 py-0.5 text-xs font-medium text-brand-700 dark:text-brand-300">
                {p.fit}
              </span>
              <h3 className="mt-3 text-xl font-semibold text-slate-900 transition group-hover:text-brand-600 dark:text-white dark:group-hover:text-brand-300">
                {p.title}
              </h3>
              <p className="text-sm text-slate-500 dark:text-slate-400">{p.tagline}</p>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                {p.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.stack.map((t) => (
                  <span
                    key={t}
                    className="rounded-md bg-slate-100 px-2 py-0.5 text-xs text-slate-600 dark:bg-slate-800 dark:text-slate-300"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="mt-5 flex gap-4 border-t border-slate-200/80 pt-4 dark:border-slate-700/80">
                <a
                  href={p.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-brand-600 hover:text-brand-700 dark:text-brand-400 dark:hover:text-brand-300"
                >
                  <ExternalLink size={14} /> Live demo
                </a>
                <a
                  href={p.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-white"
                >
                  <Github size={14} /> Source
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
