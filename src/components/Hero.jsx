import { motion } from "framer-motion";

export default function Hero() {
  const wrap = { hidden:{opacity:0}, show:{opacity:1, transition:{when:"beforeChildren", staggerChildren:0.08}} };
  const item = { hidden:{opacity:0, y:12}, show:{opacity:1, y:0, transition:{duration:0.5, ease:[0.22,1,0.36,1]}} };
  return (
    <motion.div className="py-24 sm:py-32 text-center" variants={wrap} initial="hidden" animate="show">
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
      <motion.p className="mt-4 text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto" variants={item}>
        Senior CS Student, Sloan Researcher & Physics TA — TXST
      </motion.p>

      <motion.div className="mt-8 flex items-center justify-center gap-4" variants={item}>
        <a href="#projects" className="px-5 py-2.5 rounded-xl bg-sky-600 text-white hover:bg-sky-700">Explore Projects</a>
        <a href="#contact" className="px-5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800">Contact Me</a>
      </motion.div>

      <motion.div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-3 text-sm text-slate-500 dark:text-slate-400" variants={wrap} initial="hidden" whileInView="show" viewport={{ once:true, amount:0.3 }}>
        {["AI & Machine Learning", "Full-Stack Development", "Data Analytics", "Creative Technology"].map(s => (
          <motion.div key={s} className="px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-800" variants={item}>{s}</motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}
