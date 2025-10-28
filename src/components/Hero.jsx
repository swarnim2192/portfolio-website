import { motion } from "framer-motion";

import HeroBg from "./HeroBg";

export default function Hero() {
  const wrap = { hidden:{opacity:0}, show:{opacity:1, transition:{staggerChildren:0.08}} };
  const item = { hidden:{opacity:0, y:12}, show:{opacity:1, y:0, transition:{duration:0.5, ease:[0.22,1,0.36,1]}} };

  const focus = ["AI & Machine Learning","Full-Stack Development","Data Analytics","Creative Technology"];
  const interests = ["Music","Sketching","Football"];

  return (
    <motion.div className="relative py-24 sm:py-32 text-center" variants={wrap} initial="hidden" animate="show">
      <HeroBg variant="aurora" />
      <motion.div className="flex justify-center" variants={item}>
        <motion.img
          src={process.env.PUBLIC_URL + "/profile.jpg"}
          alt="Swarnim Khanal"
          className="w-32 h-32 sm:w-40 sm:h-40 rounded-full object-cover ring-2 ring-sky-500/30 shadow-lg"
          loading="eager"
          decoding="async"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        />
      </motion.div>

      <motion.p className="mt-6 text-sm uppercase tracking-widest text-slate-500 dark:text-slate-400" variants={item}>Portfolio</motion.p>
      <motion.h1 className="mt-3 text-4xl sm:text-6xl font-extrabold tracking-tight" variants={item}>Swarnim Khanal</motion.h1>
      <motion.p className="mt-4 text-lg text-slate-300 dark:text-slate-200 max-w-2xl mx-auto" variants={item}>
        Senior CS Student, Full-Stack Developer & Physics TA — TXST
      </motion.p>

      <motion.div className="mt-8 flex items-center justify-center gap-4" variants={item}>
        <a href="#projects" className="px-5 py-2.5 rounded-xl bg-sky-600 text-white hover:bg-sky-700">Explore Projects</a>
        <a href="#contact" className="px-5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800">Contact Me</a>
      </motion.div>

      <motion.div className="mt-12 space-y-4" variants={wrap} initial="hidden" whileInView="show" viewport={{ once:true, amount:0.25 }}>
        <motion.div className="flex flex-wrap justify-center gap-2" variants={wrap}>
          {focus.map(t => (
            <motion.span key={t} variants={item} whileHover={{ scale: 1.06 }} className="text-sm px-3 py-1.5 rounded-full border border-slate-300 dark:border-slate-700 bg-white/40 dark:bg-slate-950/40 backdrop-blur-sm">
              {t}
            </motion.span>
          ))}
        </motion.div>
        <motion.div className="flex flex-wrap justify-center gap-2" variants={wrap}>
          {interests.map(t => (
            <motion.span key={t} variants={item} whileHover={{ scale: 1.06 }} className="text-xs px-2.5 py-1 rounded-full border border-slate-200 dark:border-slate-800 text-slate-500 dark:text-slate-400">
              {t}
            </motion.span>
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
