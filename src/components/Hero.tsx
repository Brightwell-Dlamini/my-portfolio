import { ArrowRight, Mail, Phone } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-16 sm:pt-36 sm:pb-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 left-1/2 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-brand-600/25 blur-[110px]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-slate-700/80 bg-slate-900/60 px-3 py-1 text-xs font-medium text-brand-300">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
          Application · Wiggle Digital Eswatini · Deadline 7 August 2026
        </p>

        <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
          Brightwell Dlamini
        </h1>
        <p className="mt-4 text-xl font-medium text-brand-300 sm:text-2xl">
          Applying for UX/UI Designer · Full-Stack Developer · CMS Specialist
        </p>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-400 sm:text-lg">
          This page <span className="text-slate-200">is</span> my application. No separate cover
          letter, CV upload chain, or long email thread required — scroll once and you have the
          story, the fit for each role, the work, and how to reach me.
        </p>

        <div className="mt-10 flex flex-wrap gap-3">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-full bg-brand-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-600/20 hover:bg-brand-500"
          >
            See the work
            <ArrowRight size={16} />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-slate-600 px-6 py-3 text-sm font-semibold text-slate-200 hover:bg-slate-800"
          >
            Contact details
          </a>
        </div>

        <div className="mt-12 flex flex-wrap gap-5 text-sm text-slate-400">
          <a href="mailto:dlaminibrightwell@gmail.com" className="inline-flex items-center gap-2 hover:text-white">
            <Mail size={16} /> dlaminibrightwell@gmail.com
          </a>
          <a href="tel:+26876365539" className="inline-flex items-center gap-2 hover:text-white">
            <Phone size={16} /> +268 7636 5539
          </a>
          <span className="text-slate-500">Mankayane, Eswatini</span>
        </div>
      </div>
    </section>
  );
}
