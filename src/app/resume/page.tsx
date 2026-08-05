import type { Metadata } from "next";
import Link from "next/link";
import { ResumePrintButton } from "./PrintButton";

export const metadata: Metadata = {
  title: "CV — Brightwell Dlamini",
  description: "Curriculum vitae of Brightwell Dlamini.",
};

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-slate-100 text-slate-900">
      <div className="no-print sticky top-0 z-10 flex flex-wrap items-center justify-between gap-3 border-b border-slate-200 bg-white/95 px-4 py-3 backdrop-blur">
        <Link href="/" className="text-sm font-medium text-slate-600 hover:text-slate-900">
          ← Back to application
        </Link>
        <ResumePrintButton />
      </div>

      <article className="mx-auto my-6 max-w-[210mm] bg-white px-8 py-10 shadow-lg sm:my-10 sm:px-12 sm:py-12 print:my-0 print:max-w-none print:shadow-none">
        <header className="border-b-2 border-blue-600 pb-4">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">Brightwell Dlamini</h1>
          <p className="mt-1 text-base font-medium text-blue-600">
            Full-Stack Developer · UX/UI Designer · CMS Specialist
          </p>
          <p className="mt-2 text-sm text-slate-600">
            Mankayane, Eswatini · +268 7636 5539 / +268 7980 8742 ·{" "}
            <a href="mailto:dlaminibrightwell@gmail.com" className="text-blue-700 underline">
              dlaminibrightwell@gmail.com
            </a>{" "}
            ·{" "}
            <a
              href="https://github.com/Brightwell-Dlamini"
              className="text-blue-700 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              github.com/Brightwell-Dlamini
            </a>
          </p>
        </header>

        <Section title="Profile">
          <p>
            Full-stack developer and UX/UI designer with 5+ years of coding experience. Studied
            Computer Science and Mathematics at the University of Eswatini. Builds production web
            applications with Next.js, TypeScript and modern CMS patterns.
          </p>
        </Section>

        <Section title="Experience">
          <Job title="Junior Systems Developer" org="The Luke Commission" meta="2024 · 6 months" detail="Systems development in a healthcare-oriented environment; internal tools and application delivery." />
          <Job title="Software Developer" org="McVillan International" meta="2023" detail="Software development company — application development and networking support." />
          <Job title="Web Developer" org="Sm3 Creative" meta="2023" detail="Digital marketing agency — websites and web experiences for client campaigns." />
          <Job title="Intern" org="RSTP Eswatini" meta="2021" detail="Royal Science and Technology Park — technology internship." />
          <Job title="Intern" org="Yeshua Technologies" meta="2020 · Sidvwashini" detail="Software company internship; early hands-on development experience." />
        </Section>

        <Section title="Selected projects">
          <ul className="list-disc space-y-2 pl-5 text-sm text-slate-700">
            <li><strong>SiyaTrades</strong> — Trading journal with MT5 import, analytics and discipline systems.</li>
            <li><strong>SwaziRent (Ekhaya)</strong> — Property marketplace for Eswatini.</li>
            <li><strong>ForgeCMS</strong> — CMS with content models, media library and draft/publish.</li>
            <li><strong>LocalMarket</strong> — E-commerce storefront and admin for SMEs.</li>
          </ul>
        </Section>

        <Section title="Education">
          <p className="font-semibold text-slate-900">University of Eswatini</p>
          <p className="text-sm text-slate-600">Computer Science and Mathematics</p>
        </Section>

        <Section title="Technical expertise">
          <ul className="list-disc space-y-1.5 pl-5 text-sm text-slate-700">
            <li><strong>Frontend & UX:</strong> React, Next.js 15, TypeScript, Tailwind, accessible UI</li>
            <li><strong>Full-stack:</strong> App Router, Supabase, PostgreSQL, auth/RBAC, PWA, Vercel</li>
            <li><strong>CMS:</strong> Content modelling, admin dashboards, media libraries, editorial workflows</li>
          </ul>
        </Section>

        <Section title="Personal">
          <p className="text-sm text-slate-700">
            From Mankayane, Eswatini. Journey: challenge → obsession — building bridges with code.
          </p>
        </Section>
      </article>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-6">
      <h2 className="mb-3 border-b border-slate-200 pb-1 text-xs font-bold uppercase tracking-wider text-blue-600">
        {title}
      </h2>
      <div className="space-y-3 text-sm leading-relaxed text-slate-700">{children}</div>
    </section>
  );
}

function Job({
  title,
  org,
  meta,
  detail,
}: {
  title: string;
  org: string;
  meta: string;
  detail: string;
}) {
  return (
    <div>
      <p className="font-semibold text-slate-900">
        {title} — {org}
      </p>
      <p className="text-xs text-slate-500">{meta}</p>
      <p className="mt-0.5 text-sm text-slate-700">{detail}</p>
    </div>
  );
}
