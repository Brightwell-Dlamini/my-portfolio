import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Brightwell Dlamini → Wiggle Digital Eswatini",
  description:
    "Brightwell Dlamini — application for UX/UI Designer, Full-Stack Developer and CMS Specialist at Wiggle Digital Eswatini.",
  authors: [{ name: "Brightwell Dlamini" }],
  openGraph: {
    title: "Brightwell Dlamini → Wiggle Digital",
    description:
      "Story, role fit, experience, live projects and contact for Wiggle Digital Eswatini.",
    type: "website",
    locale: "en_SZ",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} font-sans bg-slate-50 text-slate-900 antialiased transition-colors dark:bg-slate-950 dark:text-slate-100`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
