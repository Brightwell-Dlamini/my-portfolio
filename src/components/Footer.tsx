export function Footer() {
  return (
    <footer className="border-t border-slate-200/80 py-10 dark:border-slate-800/80">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 text-sm text-slate-500 sm:flex-row sm:px-6 lg:px-8">
        <p>© {new Date().getFullYear()} Brightwell Dlamini</p>
        <p className="text-xs text-slate-400 dark:text-slate-600">Mankayane, Eswatini</p>
      </div>
    </footer>
  );
}
