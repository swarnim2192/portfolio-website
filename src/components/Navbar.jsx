export default function Navbar({ theme, setTheme }) {
  const links = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#education", label: "Education" },
    { href: "#experience", label: "Experience" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];
  return (
    <header className="sticky top-0 z-50 backdrop-blur border-b border-slate-200/50 dark:border-slate-800/60">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <a href="#home" className="font-bold tracking-tight text-lg">Swarnim Khanal</a>
        <nav className="hidden sm:flex gap-6">
          {links.map(l => (
            <a key={l.href} href={l.href} className="hover:text-sky-600 dark:hover:text-sky-400">{l.label}</a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="px-3 py-1 rounded-lg border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? "🌙" : "🌞"}
          </button>
          <a href="#projects" className="hidden sm:inline-block px-3 py-1.5 rounded-lg bg-sky-600 text-white hover:bg-sky-700">View Projects</a>
        </div>
      </div>
    </header>
  );
}
