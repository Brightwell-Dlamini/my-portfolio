import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "SiyaTrades",
    tagline: "Trading journal & discipline system",
    description:
      "Full-stack product: MT5 import, P&L views, playbook analytics and multi-account support. Shows data-heavy UX and serious full-stack delivery.",
    stack: ["Next.js", "TypeScript", "Supabase"],
    live: "https://siya-trades.vercel.app",
    repo: "https://github.com/Brightwell-Dlamini/SiyaTrades",
    fit: "Full-Stack · UX",
  },
  {
    title: "SwaziRent (Ekhaya)",
    tagline: "Property marketplace for Eswatini",
    description:
      "Roles, verification, maps and listing flows aimed at the local market — the kind of product work a digital agency ships for real clients.",
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
    <section id="projects" className="py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-brand-400">
            Evidence
          </h2>
          <p className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Live projects you can open now
          </p>
          <p className="mt-4 text-slate-400">
            Click through the demos. Source is on GitHub. This is the portfolio behind the
            application.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {projects.map((p) => (
            <article
              key={p.title}
              className="flex flex-col rounded-2xl border border-slate-800 bg-slate-950/70 p-6 sm:p-8"
            >
              <span className="w-fit rounded-full bg-brand-500/10 px-2.5 py-0.5 text-xs font-medium text-brand-300">
                {p.fit}
              </span>
              <h3 className="mt-3 text-xl font-semibold text-white">{p.title}</h3>
              <p className="text-sm text-slate-400">{p.tagline}</p>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-400">{p.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.stack.map((t) => (
                  <span key={t} className="rounded-md bg-slate-800 px-2 py-0.5 text-xs text-slate-300">
                    {t}
                  </span>
                ))}
              </div>
              <div className="mt-5 flex gap-4 border-t border-slate-800 pt-4">
                <a
                  href={p.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-brand-400 hover:text-brand-300"
                >
                  <ExternalLink size={14} /> Live demo
                </a>
                <a
                  href={p.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-slate-400 hover:text-white"
                >
                  <Github size={14} /> Source
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
