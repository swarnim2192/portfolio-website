export default function Footer() {
  return (
    <footer className="mt-24 border-top">
      <div className="max-w-6xl mx-auto px-4 py-6 text-sm text-slate-500 dark:text-slate-400 flex flex-col sm:flex-row items-center justify-between gap-2 border-t border-slate-200 dark:border-slate-800">
        <span>© 2025 Swarnim Khanal</span>
        <div className="flex gap-4">
          <a href="https://github.com/" className="hover:text-sky-600">GitHub</a>
          <a href="https://www.linkedin.com/" className="hover:text-sky-600">LinkedIn</a>
          <a href="mailto:you@example.com" className="hover:text-sky-600">Email</a>
        </div>
      </div>
    </footer>
  );
}
