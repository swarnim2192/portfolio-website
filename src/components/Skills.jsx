import { motion } from "framer-motion";

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
              <motion.div
                className="h-full bg-sky-600 dark:bg-sky-500 rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: s.level + "%" }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.9, ease: [0.22,1,0.36,1] }}
              />
            </div>
          </div>
        ))}
      </div>
      <motion.div className="mt-8 flex flex-wrap gap-2" initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }}
        variants={{ hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.06 } } }}>
        {["Git","Docker","CI/CD","Linux","Firebase","AWS"].map(b => (
          <motion.span key={b} className="text-xs px-2 py-1 rounded-lg border border-slate-200 dark:border-slate-700"
            initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.3 }}>
            {b}
          </motion.span>
        ))}
      </motion.div>
    </div>
  );
}
