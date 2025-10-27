import { motion } from "framer-motion";

const edu = [
  {
    school: "Texas State University",
    degree: "B.S. Computer Science",
    extras: "Minors: Data Analytics & Applied Mathematics",
    date: "2023 – Present",
    points: [
      "Coursework: Algorithms, Data Structures, Databases, ML, Systems",
      "Research intern experience in FEM + GPU acceleration",
      "Clubs: GDSC, IEEE • NSA Treasurer"
    ]
  }
];

const list = { hidden:{opacity:0}, show:{opacity:1, transition:{staggerChildren:0.08}} };
const item = { hidden:{opacity:0, y:10}, show:{opacity:1, y:0, transition:{duration:0.35}} };

export default function Education() {
  return (
    <div>
      <h2 className="text-2xl font-bold">Education</h2>
      <motion.div className="mt-6 space-y-6" variants={list} initial="hidden" whileInView="show" viewport={{ once:true, amount:0.25 }}>
        {edu.map((e) => (
          <motion.article key={e.school} className="rounded-2xl border border-slate-200 dark:border-slate-800 p-5" variants={item}>
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
              <div>
                <h3 className="text-lg font-semibold">{e.school}</h3>
                <p className="text-slate-600 dark:text-slate-300">{e.degree}</p>
                <p className="text-sm text-slate-500 dark:text-slate-400">{e.extras}</p>
              </div>
              <span className="text-sm text-slate-500 dark:text-slate-400">{e.date}</span>
            </div>
            <ul className="mt-3 list-disc pl-5 space-y-1 text-slate-600 dark:text-slate-300">
              {e.points.map(p => (<li key={p}>{p}</li>))}
            </ul>
          </motion.article>
        ))}
      </motion.div>
    </div>
  );
}
