import { Mail, Phone, Github, MapPin } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-16 sm:py-24 bg-slate-900/40">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900 to-slate-950 p-8 sm:p-12">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-brand-400">
            Next step
          </h2>
          <p className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Happy to talk
          </p>
          <p className="mt-4 max-w-2xl text-slate-400 leading-relaxed">
            If this application is a fit for Wiggle Digital Eswatini, the easiest next step is a
            call or email. I am available for UX/UI Designer, Full-Stack Developer or CMS Specialist
            — or a blend of the three.
          </p>

          <div className="mt-10 grid gap-3 sm:grid-cols-2 max-w-2xl">
            <a
              href="mailto:dlaminibrightwell@gmail.com?subject=Wiggle%20Digital%20-%20Brightwell%20Dlamini"
              className="flex items-center gap-3 rounded-xl border border-slate-700 bg-slate-950/50 px-4 py-3.5 text-sm text-slate-200 hover:border-brand-500/50"
            >
              <Mail size={18} className="text-brand-400 shrink-0" />
              dlaminibrightwell@gmail.com
            </a>
            <a
              href="tel:+26876365539"
              className="flex items-center gap-3 rounded-xl border border-slate-700 bg-slate-950/50 px-4 py-3.5 text-sm text-slate-200 hover:border-brand-500/50"
            >
              <Phone size={18} className="text-brand-400 shrink-0" />
              +268 7636 5539
            </a>
            <a
              href="tel:+26879808742"
              className="flex items-center gap-3 rounded-xl border border-slate-700 bg-slate-950/50 px-4 py-3.5 text-sm text-slate-200 hover:border-brand-500/50"
            >
              <Phone size={18} className="text-brand-400 shrink-0" />
              +268 7980 8742
            </a>
            <a
              href="https://github.com/Brightwell-Dlamini"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-xl border border-slate-700 bg-slate-950/50 px-4 py-3.5 text-sm text-slate-200 hover:border-brand-500/50"
            >
              <Github size={18} className="text-brand-400 shrink-0" />
              GitHub profile
            </a>
          </div>

          <p className="mt-8 inline-flex items-center gap-2 text-sm text-slate-500">
            <MapPin size={14} /> Mankayane, Eswatini · Applications close 7 August 2026
          </p>

          <p className="mt-6 text-sm text-slate-500">
            You can also reach the hiring contact at{" "}
            <a href="mailto:admin@wiggledigital.co.sz" className="text-brand-400 hover:underline">
              admin@wiggledigital.co.sz
            </a>{" "}
            — this page is what I would attach as the full application package.
          </p>
        </div>
      </div>
    </section>
  );
}
