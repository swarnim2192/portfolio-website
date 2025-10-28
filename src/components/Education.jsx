import { motion } from "framer-motion";
import Particles from "./Particles";

const edu = [
  {
    school: "Texas State University",
    degree: "B.S. in Computer Science",
    extras: "Minors: Data Analytics & Applied Mathematics",
    date: "May 2026 • San Marcos, TX",
    logo: process.env.PUBLIC_URL + "/txstlogo.jpg",
    points: [
      "Relevant coursework: C++, Discrete Mathematics, Calculus, Object-Oriented Programming, Data Structures & Algorithms, Assembly Language, Computer Architecture, Computer Ethics, Internet Software Development, Software Engineering, Data Analytics, Machine Learning, Probability & Statistics."
    ]
  }
];

const list = { hidden:{opacity:0}, show:{opacity:1, transition:{staggerChildren:0.08}} };
const item = { hidden:{opacity:0, y:10}, show:{opacity:1, y:0, transition:{duration:0.35}} };

export default function Education() {
  return (
    <div className="relative">
      <Particles count={20} opacity={0.15} />
      <div className="relative z-10">
        <h2 className="text-2xl font-bold">Education</h2>
        <motion.div className="mt-6 space-y-6" variants={list} initial="hidden" whileInView="show" viewport={{ once:true, amount:0.25 }}>
          {edu.map((e) => (
            <motion.article key={e.school} className="rounded-2xl border border-slate-200 dark:border-slate-800 p-5 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm" variants={item}>
              <div className="flex items-start gap-4">
                <img
                  src={e.logo}
                  alt={e.school + " logo"}
                  className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover ring-2 ring-sky-500/30 shadow"
                  loading="eager"
                  decoding="async"
                />
                <div className="flex-1">
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
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
