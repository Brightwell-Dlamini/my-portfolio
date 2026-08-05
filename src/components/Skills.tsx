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
    <section id="skills" className="py-16 sm:py-24 bg-slate-900/40">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-brand-400">Skills</h2>
          <p className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Technical toolkit
          </p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {groups.map((g) => (
            <div key={g.title} className="rounded-2xl border border-slate-800 bg-slate-950/60 p-6">
              <h3 className="font-semibold text-white">{g.title}</h3>
              <ul className="mt-4 space-y-2">
                {g.items.map((item) => (
                  <li key={item} className="flex gap-2 text-sm text-slate-400">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500" />
                    {item}
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
