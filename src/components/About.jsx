import { motion } from "framer-motion";

export default function About() {
  const list = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.08 } } };
  const item = { hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0, transition: { duration: 0.4 } } };
  return (
    <div className="grid md:grid-cols-3 gap-8">
      <motion.div className="md:col-span-2" initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.5 }}>
        <h2 className="text-2xl font-bold">About</h2>
        <p className="mt-4 text-slate-600 dark:text-slate-300">
          I am a Computer Science student at Texas State University (minors in Data Analytics and Mathematics), focused on software engineering, data analytics, and machine learning. I build end-to-end apps with React, Python/C++, and cloud tools, and I enjoy turning ideas into polished, user-friendly products.
        </p>
        <motion.ul className="mt-4 list-disc pl-5 space-y-1 text-slate-600 dark:text-slate-300" variants={list} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
          <motion.li variants={item}>Research Intern — optimized solid mechanics simulations with FEM & ML; cut material usage 15% and runtime 25%.</motion.li>
          <motion.li variants={item}>GPU acceleration on MI250/MI100 (CUDA/C++); improved compute throughput ~30%.</motion.li>
          <motion.li variants={item}>Built interactive dashboards with REST APIs; better cross-browser compatibility and accuracy (+18%).</motion.li>
          <motion.li variants={item}>Student leader: NSA Treasurer; GDSC/IEEE workshop lead.</motion.li>
        </motion.ul>
      </motion.div>
      <motion.aside className="border border-slate-200 dark:border-slate-800 rounded-xl p-4" initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.5, delay: 0.1 }}>
        <h3 className="font-semibold">Quick Links</h3>
        <div className="mt-3 flex flex-col gap-2">
          <a className="hover:text-sky-600" href="https://github.com/swarnim2192">GitHub</a>
          <a className="hover:text-sky-600" href="https://www.linkedin.com/in/swarnim-khanal/">LinkedIn</a>
          <a className="hover:text-sky-600" href="mailto:swarnimkhanal7@gmail.com">swarnimkhanal7@gmail.com</a>
        </div>
      </motion.aside>
    </div>
  );
}
