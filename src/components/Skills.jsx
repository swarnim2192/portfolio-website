export default function Skills() {
  const skills = [
    { name: "Python", level: 90 },
    { name: "C++", level: 80 },
    { name: "React", level: 85 },
    { name: "Django", level: 70 },
    { name: "SQL", level: 75 },
    { name: "Data Analytics", level: 85 }
  ];
  return (
    <div>
      <h2 className="text-2xl font-bold">Skills</h2>
      <div className="mt-6 grid md:grid-cols-2 gap-6">
        {skills.map(s => (
          <div key={s.name}>
            <div className="flex items-center justify-between mb-1">
              <span className="font-medium">{s.name}</span>
              <span className="text-xs text-slate-500">{s.level}%</span>
            </div>
            <div className="h-2.5 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
              <div className="h-full bg-sky-600 dark:bg-sky-500 rounded-full" style={{ width: `${s.level}%` }} />
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8 flex flex-wrap gap-2">
        {["Git","Docker","CI/CD","Linux","Firebase","AWS"].map(b => (
          <span key={b} className="text-xs px-2 py-1 rounded-lg border border-slate-200 dark:border-slate-700">{b}</span>
        ))}
      </div>
    </div>
  );
}
