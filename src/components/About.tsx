// src/components/sections/About.tsx
'use client';

import {
  Sparkles,
  Code2,
  GraduationCap,
  Briefcase,
  MapPin,
  Heart,
  ArrowRight,
} from 'lucide-react';

export function About() {
  const stats = [
    { label: 'Coding Experience', value: '5+ Years', icon: Code2 },
    { label: 'Education', value: 'UNESWA · CS & Math', icon: GraduationCap },
    { label: 'Applying For', value: 'UX/UI · Full-Stack · CMS', icon: Briefcase },
    { label: 'Based In', value: 'Mankayane, Eswatini', icon: MapPin },
  ];

  const journeyHighlights = [
    'First encountered CS as a challenge',
    'Never used a computer before',
    'Grades → Problem solving',
    'Building solutions people use',
  ];

  return (
    <section
      id="about"
      className="relative overflow-hidden py-20 sm:py-28 lg:py-32 bg-gradient-to-b from-slate-100/70 via-white/50 to-slate-100/70 dark:from-slate-900/40 dark:via-slate-950/30 dark:to-slate-900/40"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 h-[280px] w-[280px] rounded-full bg-brand-400/10 dark:bg-brand-600/10 blur-xl" />
        <div className="absolute -bottom-40 -right-40 h-[240px] w-[240px] rounded-full bg-accent-500/10 dark:bg-accent-500/10 blur-xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-200/80 bg-white/70 px-3 py-1 text-xs font-medium tracking-wider text-slate-600 dark:border-slate-700/80 dark:bg-slate-900/60 dark:text-slate-300">
            <Sparkles className="h-3 w-3 text-brand-500" />
            <span className="uppercase tracking-[0.15em]">My Journey</span>
          </div>

          <h2 className="relative text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl dark:text-white">
            From a challenge to an obsession
            <span className="absolute -bottom-2 left-0 h-1 w-24 rounded-full bg-gradient-to-r from-brand-500 to-accent-500" />
          </h2>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-5">
          <div className="lg:col-span-3 space-y-5">
            <p className="text-base leading-relaxed text-slate-600 sm:text-lg dark:text-slate-400">
              I first encountered computer science as the{' '}
              <span className="font-semibold text-slate-900 dark:text-white">"most difficult"</span>{' '}
              combination the University of Eswatini offered. Intrigued by the challenge, I dove in — having never used a computer before.
            </p>

            <p className="text-base leading-relaxed text-slate-600 sm:text-lg dark:text-slate-400">
              Grades turned into problem-solving. The keyboard stopped being an obstacle and became a way to build solutions people could actually use.
            </p>

            <p className="text-base leading-relaxed text-slate-600 sm:text-lg dark:text-slate-400">
              Today I focus on applications that are{' '}
              <span className="font-semibold text-slate-900 dark:text-white">technically sound</span>, scalable and still feel clear for the user. Comfortable with modern stacks and AI-assisted development when it helps ship quality work faster. From Mankayane; based in Eswatini.
            </p>

            <div className="mt-4 grid grid-cols-2 gap-2">
              {journeyHighlights.map((highlight) => (
                <div key={highlight} className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-500 flex-shrink-0" />
                  <span>{highlight}</span>
                </div>
              ))}
            </div>

            <div className="mt-4">
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 text-sm font-medium text-brand-600 transition-colors hover:text-brand-700 dark:text-brand-400 dark:hover:text-brand-300"
              >
                <span>Let's connect</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-2 grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-slate-200/70 bg-white/60 p-5 transition-transform hover:-translate-y-0.5 dark:border-slate-700/70 dark:bg-slate-900/40"
                >
                  <div className="flex items-start gap-3">
                    <div className="rounded-lg bg-brand-100/50 p-2 dark:bg-brand-900/30">
                      <Icon className="h-4 w-4 text-brand-600 dark:text-brand-400" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-slate-500">
                        {stat.label}
                      </p>
                      <p className="mt-0.5 truncate text-base font-semibold text-slate-900 dark:text-white">
                        {stat.value}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}

            <div className="rounded-2xl border border-slate-200/70 bg-gradient-to-br from-brand-50/80 to-accent-50/80 p-4 dark:from-brand-950/30 dark:to-accent-950/30">
              <div className="flex items-center gap-3">
                <Heart className="h-4 w-4 text-rose-500" />
                <div>
                  <p className="text-xs font-medium text-slate-700 dark:text-slate-300">
                    Passionate about building things that matter
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">From Mankayane to the world</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
