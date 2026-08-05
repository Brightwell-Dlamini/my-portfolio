import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Brightwell Dlamini → Wiggle Digital Eswatini",
  description:
    "Application from Brightwell Dlamini for UX/UI Designer, Full-Stack Developer and CMS Specialist roles at Wiggle Digital Eswatini. Everything you need to evaluate the application is on this page.",
  authors: [{ name: "Brightwell Dlamini" }],
  openGraph: {
    title: "Brightwell Dlamini → Wiggle Digital",
    description:
      "Full application for UX/UI, Full-Stack and CMS roles — story, experience, projects and contact.",
    type: "website",
    locale: "en_SZ",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans bg-slate-950 text-slate-100 antialiased`}>
        {children}
      </body>
    </html>
  );
}
