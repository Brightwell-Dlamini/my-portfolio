// src/components/sections/Experience.tsx
'use client';

import {
  Sparkles,
  Briefcase,
  Calendar,
  Building2,
  Code2,
  Users,
  ArrowRight,
  Clock,
  Award,
  TrendingUp,
  Layers,
  Shield,
  Globe,
} from 'lucide-react';

const roles = [
  {
    title: 'Junior Systems Developer',
    org: 'The Luke Commission',
    period: '2024 · 6 months',
    detail: 'Systems development in a healthcare-oriented environment — internal tools and application delivery.',
    icon: Shield,
    color: 'from-emerald-500 to-teal-500',
    bgColor: 'bg-emerald-50 dark:bg-emerald-950/20',
    borderColor: 'border-emerald-200/50 dark:border-emerald-800/30',
  },
  {
    title: 'Software Developer',
    org: 'McVillan International',
    period: '2023',
    detail: 'Software company — application development and networking support for client and internal systems.',
    icon: Code2,
    color: 'from-blue-500 to-cyan-500',
    bgColor: 'bg-blue-50 dark:bg-blue-950/20',
    borderColor: 'border-blue-200/50 dark:border-blue-800/30',
  },
  {
    title: 'Web Developer',
    org: 'Sm3 Creative',
    period: '2023',
    detail: 'Digital marketing agency — websites and web experiences for client campaigns.',
    icon: Globe,
    color: 'from-purple-500 to-pink-500',
    bgColor: 'bg-purple-50 dark:bg-purple-950/20',
    borderColor: 'border-purple-200/50 dark:border-purple-800/30',
  },
  {
    title: 'Intern',
    org: 'RSTP Eswatini',
    period: '2021',
    detail: 'Royal Science and Technology Park — technology internship.',
    icon: Building2,
    color: 'from-amber-500 to-orange-500',
    bgColor: 'bg-amber-50 dark:bg-amber-950/20',
    borderColor: 'border-amber-200/50 dark:border-amber-800/30',
  },
  {
    title: 'Intern',
    org: 'Yeshua Technologies',
    period: '2020 · Sidvwashini',
    detail: 'Software company internship; early hands-on development.',
    icon: Users,
    color: 'from-rose-500 to-red-500',
    bgColor: 'bg-rose-50 dark:bg-rose-950/20',
    borderColor: 'border-rose-200/50 dark:border-rose-800/30',
  },
];

const achievements = [
  { label: 'Systems Built', value: '5+', icon: Layers },
  { label: 'Agencies Worked', value: '3+', icon: Briefcase },
  { label: 'Years Active', value: '5+', icon: Clock },
  { label: 'Tech Stack', value: 'Modern', icon: TrendingUp },
];

export function Experience() {
  return (
    <section
      id="experience"
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
            <span className="uppercase tracking-[0.15em]">Professional Path</span>
          </div>
          <h2 className="relative text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl dark:text-white">
            My experience journey
            <span className="absolute -bottom-2 left-0 h-1 w-24 rounded-full bg-gradient-to-r from-brand-500 to-accent-500" />
          </h2>
        </div>

        <div className="relative mt-12">
          <div className="absolute left-4 top-0 bottom-0 w-0.5 rounded-full bg-gradient-to-b from-brand-500 via-accent-500 to-brand-500/30" />

          <ol className="relative space-y-6">
            {roles.map((role) => {
              const Icon = role.icon;
              return (
                <li key={`${role.org}-${role.period}`} className="relative pl-12">
                  <div
                    className={`absolute left-0 top-5 z-10 h-3 w-3 rounded-full bg-gradient-to-r ${role.color} ring-4 ring-white dark:ring-slate-900`}
                  />
                  <div
                    className={`rounded-2xl border ${role.borderColor} ${role.bgColor} p-5 transition-transform hover:-translate-y-0.5 sm:p-6`}
                  >
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
                      <div className="min-w-0 flex-1">
                        <div className="mb-1 flex items-center gap-3">
                          <div className={`rounded-lg bg-gradient-to-br p-1.5 shadow-md ${role.color}`}>
                            <Icon className="h-3.5 w-3.5 text-white" />
                          </div>
                          <h3 className="truncate text-base font-semibold text-slate-900 dark:text-white">
                            {role.title}
                          </h3>
                        </div>
                        <p className="flex items-center gap-1.5 text-sm font-medium text-brand-600 dark:text-brand-400">
                          <Building2 className="h-3.5 w-3.5" />
                          {role.org}
                        </p>
                        <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                          {role.detail}
                        </p>
                      </div>
                      <div className="flex shrink-0 items-center gap-2">
                        <Calendar className="h-3.5 w-3.5 text-slate-400" />
                        <p className="text-xs font-medium tracking-wide text-slate-500 dark:text-slate-400">
                          {role.period}
                        </p>
                      </div>
                    </div>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {achievements.map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className="rounded-2xl border border-slate-200/70 bg-white/60 p-4 transition-transform hover:-translate-y-0.5 dark:border-slate-700/70 dark:bg-slate-900/40"
              >
                <div className="flex items-center gap-3">
                  <div className="rounded-lg bg-brand-100/50 p-2 dark:bg-brand-900/30">
                    <Icon className="h-4 w-4 text-brand-600 dark:text-brand-400" />
                  </div>
                  <div>
                    <p className="text-xl font-bold text-slate-900 dark:text-white">{stat.value}</p>
                    <p className="text-[10px] font-medium uppercase tracking-wide text-slate-500 dark:text-slate-400">
                      {stat.label}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-8 flex flex-col items-start justify-between gap-4 rounded-2xl border border-slate-200/50 bg-gradient-to-r from-slate-100/80 to-white/80 p-5 dark:border-slate-700/50 dark:from-slate-900/50 dark:to-slate-950/50 sm:flex-row sm:items-center">
          <div className="flex items-center gap-3">
            <div className="rounded-lg bg-brand-100/50 p-2 dark:bg-brand-900/30">
              <Award className="h-4 w-4 text-brand-600 dark:text-brand-400" />
            </div>
            <div>
              <p className="text-sm font-medium text-slate-700 dark:text-slate-300">Education</p>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                University of Eswatini — Computer Science and Mathematics
              </p>
            </div>
          </div>
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 text-sm font-medium text-brand-600 transition-colors hover:text-brand-700 dark:text-brand-400"
          >
            <span>View my work</span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
}
