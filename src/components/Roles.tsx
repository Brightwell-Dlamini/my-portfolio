// src/components/sections/Roles.tsx
'use client';

import {
  Sparkles,
  Palette,
  Code2,
  Database,
  ArrowRight,
  CheckCircle,
  Zap,
  PenTool,
  Monitor,
  Layers,
  Server,
  Users,
  Briefcase,
} from 'lucide-react';

const roles = [
  {
    title: 'UX/UI Designer',
    icon: Palette,
    color: 'from-purple-500 to-pink-500',
    bgColor: 'bg-purple-50 dark:bg-purple-950/20',
    borderColor: 'border-purple-200/50 dark:border-purple-800/30',
    points: [
      'User-centred interfaces on real products — trading tools, property search, admin dashboards',
      'Mobile-first, accessible patterns and clear visual hierarchy',
      'Problem → flow → polished UI in the same codebase that ships',
    ],
  },
  {
    title: 'Full-Stack Developer',
    icon: Code2,
    color: 'from-blue-500 to-cyan-500',
    bgColor: 'bg-blue-50 dark:bg-blue-950/20',
    borderColor: 'border-blue-200/50 dark:border-blue-800/30',
    points: [
      'Next.js 15, TypeScript, Supabase, auth, roles and Vercel production',
      'End-to-end ownership: SiyaTrades, SwaziRent, LocalMarket',
      'Agency and systems experience (Sm3, McVillan, Luke Commission)',
    ],
  },
  {
    title: 'CMS Specialist',
    icon: Database,
    color: 'from-emerald-500 to-teal-500',
    bgColor: 'bg-emerald-50 dark:bg-emerald-950/20',
    borderColor: 'border-emerald-200/50 dark:border-emerald-800/30',
    points: [
      'Content models, draft/publish flows, media libraries (ForgeCMS)',
      'Admin UX non-developers can use',
      'E-commerce product admin and editorial-style workflows',
    ],
  },
];

const capabilities = [
  { label: 'UX/UI Design', icon: PenTool },
  { label: 'Full-Stack Dev', icon: Monitor },
  { label: 'CMS Architecture', icon: Layers },
  { label: 'System Design', icon: Server },
  { label: 'Client Delivery', icon: Users },
  { label: 'Agile Workflows', icon: Briefcase },
];

export function Roles() {
  return (
    <section
      id="roles"
      className="relative overflow-hidden py-20 sm:py-28 lg:py-32 bg-gradient-to-b from-slate-50/50 via-white to-slate-50/50 dark:from-slate-950/30 dark:via-slate-900 dark:to-slate-950/30"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-[280px] w-[280px] rounded-full bg-brand-400/10 dark:bg-brand-600/10 blur-xl" />
        <div className="absolute -bottom-40 -left-40 h-[240px] w-[240px] rounded-full bg-accent-500/10 dark:bg-accent-500/10 blur-xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-200/80 bg-white/70 px-3 py-1 text-xs font-medium tracking-wider text-slate-600 dark:border-slate-700/80 dark:bg-slate-900/60 dark:text-slate-300">
            <Sparkles className="h-3 w-3 text-brand-500" />
            <span className="uppercase tracking-[0.15em]">Role Fit</span>
          </div>
          <h2 className="relative text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl dark:text-white">
            How I map to your three openings
            <span className="absolute -bottom-2 left-0 h-1 w-24 rounded-full bg-gradient-to-r from-brand-500 to-accent-500" />
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {roles.map((role) => {
            const Icon = role.icon;
            return (
              <div key={role.title} className="group relative">
                <div
                  className={`relative flex h-full flex-col rounded-2xl border ${role.borderColor} ${role.bgColor} p-6 transition-transform hover:-translate-y-1 hover:shadow-lg`}
                >
                  <div className="flex items-start gap-4">
                    <div className={`flex-shrink-0 rounded-xl bg-gradient-to-br p-2.5 shadow-lg ${role.color}`}>
                      <Icon className="h-5 w-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{role.title}</h3>
                      <div className="mt-1 h-0.5 w-8 rounded-full bg-gradient-to-r from-brand-500 to-accent-500 transition-all group-hover:w-12" />
                    </div>
                  </div>

                  <ul className="mt-5 flex-1 space-y-3.5">
                    {role.points.map((point) => (
                      <li key={point} className="flex gap-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                        <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gradient-to-r from-brand-500 to-accent-500" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-4 border-t border-slate-200/50 pt-4 dark:border-slate-700/50">
                    <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                      <CheckCircle className="h-3.5 w-3.5 text-brand-500" />
                      <span>Proven expertise in this role</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 flex flex-wrap items-center justify-center gap-3">
          <div className="flex items-center gap-2 rounded-full bg-slate-100/80 px-4 py-2 dark:bg-slate-800/50">
            <Zap className="h-4 w-4 text-amber-500" />
            <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Core Capabilities:</span>
          </div>
          {capabilities.map((cap) => {
            const Icon = cap.icon;
            return (
              <div
                key={cap.label}
                className="inline-flex items-center gap-1.5 rounded-full border border-slate-200/70 bg-white/60 px-3 py-1.5 text-xs font-medium text-slate-600 transition-colors hover:border-brand-300/50 hover:text-brand-700 dark:border-slate-700/70 dark:bg-slate-900/40 dark:text-slate-400 dark:hover:text-brand-300"
              >
                <Icon className="h-3 w-3" />
                {cap.label}
              </div>
            );
          })}
        </div>

        <div className="mt-12 flex justify-center">
          <a
            href="#experience"
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-slate-900 to-slate-800 px-6 py-3 text-sm font-medium text-white shadow-lg transition-transform hover:-translate-y-0.5 hover:shadow-xl dark:from-white dark:to-slate-200 dark:text-slate-900"
          >
            <span>View my experience</span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
}
