export default function Hero() {
  return (
    <div className="py-24 sm:py-32 text-center">
      <p className="text-sm uppercase tracking-widest text-slate-500 dark:text-slate-400">Portfolio</p>
      <h1 className="mt-3 text-4xl sm:text-6xl font-extrabold tracking-tight">Swarnim Khanal</h1>
      <p className="mt-4 text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
        CS @ Texas State • Research Intern • Full-stack & ML
      </p>
      <div className="mt-8 flex items-center justify-center gap-4">
        <a href="#projects" className="px-5 py-2.5 rounded-xl bg-sky-600 text-white hover:bg-sky-700">Explore Projects</a>
        <a href="#contact" className="px-5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800">Contact Me</a>
      </div>
      <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-3 text-sm text-slate-500 dark:text-slate-400">
        {[\"Python\",\"C++\",\"React\",\"Data Analytics\"].map(s=> (
          <div key={s} className="px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-800">{s}</div>
        ))}
      </div>
    </div>
  );
}
