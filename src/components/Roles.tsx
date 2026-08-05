const roles = [
  {
    title: "UX/UI Designer",
    points: [
      "User-centred interfaces on real products (trading tools, property search, admin dashboards)",
      "Mobile-first, accessible patterns and clear visual hierarchy",
      "Comfortable moving from problem → wireflow → polished UI in code",
    ],
  },
  {
    title: "Full-Stack Developer",
    points: [
      "Next.js 15, TypeScript, Supabase, auth, roles and production deploys on Vercel",
      "End-to-end ownership: SiyaTrades, SwaziRent, LocalMarket",
      "Agency and systems experience (Sm3, McVillan, Luke Commission)",
    ],
  },
  {
    title: "CMS Specialist",
    points: [
      "Content models, draft/publish flows, media libraries (ForgeCMS)",
      "Admin UX that non-developers can actually use",
      "E-commerce product admin and editorial-style workflows",
    ],
  },
];

export function Roles() {
  return (
    <section id="roles" className="py-16 sm:py-24 bg-slate-900/40">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-brand-400">
            Role fit
          </h2>
          <p className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            How I map to your three openings
          </p>
          <p className="mt-4 text-slate-400">
            One candidate, three listed roles — because the work already spans design, engineering
            and content systems.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {roles.map((role) => (
            <div
              key={role.title}
              className="rounded-2xl border border-slate-800 bg-slate-950/70 p-6 flex flex-col"
            >
              <h3 className="text-lg font-semibold text-white">{role.title}</h3>
              <ul className="mt-4 space-y-3 flex-1">
                {role.points.map((p) => (
                  <li key={p} className="flex gap-2.5 text-sm text-slate-400">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
