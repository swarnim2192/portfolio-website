import { track } from "../analytics";
import { motion } from "framer-motion";

export default function Hero() {
  const wrap = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { when: "beforeChildren", staggerChildren: 0.08 } }
  };
  const item = {
    hidden: { opacity: 0, y: 12 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22,1,0.36,1] } }
  };
  return (
    <motion.div className="py-24 sm:py-32 text-center" variants={wrap} initial="hidden" animate="show">
      <motion.p className="text-sm uppercase tracking-widest text-slate-500 dark:text-slate-400" variants={item}>Portfolio</motion.p>
      <motion.h1 className="mt-3 text-4xl sm:text-6xl font-extrabold tracking-tight" variants={item}>Swarnim Khanal</motion.h1>
      <motion.p className="mt-4 text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto" variants={item}>
        CS @ Texas State • Research Intern • Full-stack & ML
      </motion.p>
      <motion.div className="mt-8 flex items-center justify-center gap-4" variants={item}>
        <a href="#projects" onClick={() => track("cta_click", {label:"explore_projects", location:"hero"})} className="px-5 py-2.5 rounded-xl bg-sky-600 text-white hover:bg-sky-700">Explore Projects</a>
        <a href="#contact" onClick={() => track("cta_click", {label:"contact_me", location:"hero"})} className="px-5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800">Contact Me</a>
      </motion.div>
      <motion.div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-3 text-sm text-slate-500 dark:text-slate-400" variants={wrap} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }}>
        {["Python","C++","React","Data Analytics"].map(s => (
          <motion.div key={s} className="px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-800" variants={item}>{s}</motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}
