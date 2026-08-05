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
    detail:
      "Digital marketing agency — websites and web experiences for client campaigns.",
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
    <section id="experience" className="py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-brand-400">
            Experience
          </h2>
          <p className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Professional path
          </p>
        </div>

        <ol className="mt-12 space-y-6">
          {roles.map((role) => (
            <li
              key={`${role.org}-${role.period}`}
              className="rounded-xl border border-slate-800 bg-slate-950/60 p-5 sm:p-6 sm:flex sm:items-start sm:justify-between gap-6"
            >
              <div>
                <h3 className="text-base font-semibold text-white">{role.title}</h3>
                <p className="text-sm text-brand-300">{role.org}</p>
                <p className="mt-2 text-sm text-slate-400">{role.detail}</p>
              </div>
              <p className="mt-3 sm:mt-0 shrink-0 text-xs font-medium text-slate-500 whitespace-nowrap">
                {role.period}
              </p>
            </li>
          ))}
        </ol>

        <p className="mt-8 text-sm text-slate-500">
          Education: University of Eswatini — Computer Science and Mathematics.
        </p>
      </div>
    </section>
  );
}
