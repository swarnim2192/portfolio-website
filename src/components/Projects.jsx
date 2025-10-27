const projects = [
  { title: "Booth Buddy / PhotoBooth", desc: "React + Flask + Firebase app for instant photo capture and sharing.", stack: ["React","Flask","Firebase"], links: { demo: "#", code: "#" } },
  { title: "AI Code Inspector", desc: "Automated code review using Python and GitHub API.", stack: ["Python","Flask","GitHub API"], links: { demo: "#", code: "#" } },
  { title: "Stock Market Analysis", desc: "Real-time analysis and logistic regression predictions with Streamlit.", stack: ["Streamlit","Pandas","Sklearn"], links: { demo: "#", code: "#" } }
];

export default function Projects() {
  return (
    <div>
      <h2 className="text-2xl font-bold">Projects</h2>
      <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p) => (
          <article key={p.title} className="rounded-2xl border border-slate-200 dark:border-slate-800 p-5 hover:shadow">
            <h3 className="font-semibold text-lg">{p.title}</h3>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{p.desc}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {p.stack.map(s => (
                <span key={s} className="text-xs px-2 py-1 rounded-lg border border-slate-200 dark:border-slate-700">{s}</span>
              ))}
            </div>
            <div className="mt-4 flex gap-3">
              <a className="text-sm px-3 py-1.5 rounded-lg bg-sky-600 text-white hover:bg-sky-700" href={p.links.demo}>Demo</a>
              <a className="text-sm px-3 py-1.5 rounded-lg border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800" href={p.links.code}>Code</a>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
