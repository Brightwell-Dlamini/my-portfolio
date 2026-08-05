export function About() {
  return (
    <section id="about" className="py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-brand-400">About</h2>
          <p className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            From a challenge to an obsession
          </p>
          <p className="mt-3 text-slate-400">
            How code went from “the hardest combination” to the work I care about most.
          </p>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-5">
          <div className="lg:col-span-3 space-y-5 text-slate-400 leading-relaxed">
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
              Today I focus on applications that are technically sound, scalable and still feel
              clear for the user. I am comfortable with modern stacks and AI-assisted development
              when it helps ship quality work faster. From Mankayane; based in Eswatini.
            </p>
          </div>
          <div className="lg:col-span-2 grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
            {[
              { label: "Coding experience", value: "5+ years" },
              { label: "Education", value: "UNESWA · CS & Mathematics" },
              { label: "Applying for", value: "UX/UI · Full-Stack · CMS" },
              { label: "Based in", value: "Mankayane, Eswatini" },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-xl border border-slate-800 bg-slate-950/60 px-5 py-4"
              >
                <p className="text-xs uppercase tracking-wider text-slate-500">{item.label}</p>
                <p className="mt-1 font-semibold text-white">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
