import { motion } from "framer-motion";
import Particles from "./Particles";

const exp = [
  {
    title: "Texas State—Colorado University Sloan Undergraduate Research",
    role: "Research Intern",
    location: "San Marcos, TX",
    date: "Oct 2023 – May 2025",
    points: [
      "Optimized solid mechanics simulations using finite element methods and machine learning (Python, C++), reducing material usage by 15% and simulation time by 25%.",
      "Enhanced GPU performance using MI250/MI100 GPUs (CUDA, C++), boosting computation speed by 30%.",
      "Developed responsive dashboards using Dashing (JavaScript) with RESTful API integration, improving cross-browser compatibility and simulation accuracy by 18%."
    ]
  },
  {
    title: "Texas State University",
    role: "Physics Instructional Assistant",
    location: "San Marcos, TX",
    date: "Aug 2022 – Present",
    points: [
      "Facilitated student learning in physics laboratories, leveraging Logger Pro for data acquisition, visualization, and analysis to enhance experimental accuracy."
    ]
  }
];

const list = { hidden:{opacity:0}, show:{opacity:1, transition:{staggerChildren:0.08}} };
const item = { hidden:{opacity:0, y:10}, show:{opacity:1, y:0, transition:{duration:0.35}} };

export default function Experience() {
  return (
    <div className="relative">
      <Particles count={20} opacity={0.15} />
      <div className="relative z-10">
        <h2 className="text-2xl font-bold">Experience</h2>
        <motion.div className="mt-6 space-y-6" variants={list} initial="hidden" whileInView="show" viewport={{ once:true, amount:0.25 }}>
          {exp.map((e) => (
            <motion.article key={e.title} className="rounded-2xl border border-slate-200 dark:border-slate-800 p-5 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm" variants={item}>
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                <div>
                  <h3 className="text-lg font-semibold">{e.title}</h3>
                  <p className="italic text-slate-600 dark:text-slate-300">{e.role}</p>
                </div>
                <div className="text-sm text-slate-500 dark:text-slate-400">{e.location} • {e.date}</div>
              </div>
              <ul className="mt-3 list-disc pl-5 space-y-1 text-slate-600 dark:text-slate-300">
                {e.points.map(p => (<li key={p}>{p}</li>))}
              </ul>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
