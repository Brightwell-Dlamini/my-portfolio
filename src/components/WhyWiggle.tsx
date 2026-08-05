export function WhyWiggle() {
  return (
    <section id="why" className="py-16 sm:py-24 bg-slate-900/50">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-brand-400">
            Why this application
          </h2>
          <p className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Built for Wiggle Digital Eswatini
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {[
            {
              title: "One link, full picture",
              body: "Instead of a long email and scattered attachments, this site holds the application: motivation, role fit, experience, live projects and contact. You can share it with the team in one click.",
            },
            {
              title: "Three roles, one profile",
              body: "I am applying for UX/UI Designer, Full-Stack Developer and CMS Specialist because my work already sits at that intersection — design, engineering and content systems.",
            },
            {
              title: "Local, production-minded",
              body: "Based in Eswatini. 5+ years coding. Agency, startup and systems experience. Recent work includes local-market products and CMS-style admin tools you can open and click through today.",
            },
          ].map((card) => (
            <div
              key={card.title}
              className="rounded-2xl border border-slate-800 bg-slate-950/60 p-6"
            >
              <h3 className="text-lg font-semibold text-white">{card.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-400">{card.body}</p>
            </div>
          ))}
        </div>

        <p className="mt-10 max-w-3xl text-slate-400 leading-relaxed">
          Wiggle’s brief asks for people who can design interfaces, ship full-stack products and
          own content systems. That is exactly the mix I practise — and the reason this application
          is structured the way a digital product would be: clear hierarchy, honest proof, and a
          direct path to conversation.
        </p>
      </div>
    </section>
  );
}
