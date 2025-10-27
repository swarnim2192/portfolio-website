import { motion } from "framer-motion";

const skills = {
  Languages: ["Python", "C++", "JavaScript (ES6+)", "HTML5", "CSS3", "SQL", "Bash"],
  Frameworks: ["React.js", "Flutter", "Flask", "Streamlit", "Tailwind CSS", "Framer Motion", "Firebase", "Supabase"],
  Data: ["Pandas", "NumPy", "Scikit-learn", "Matplotlib", "Seaborn", "yFinance"],
  Tools: ["Git & GitHub", "GitHub Pages", "Google Analytics 4", "VS Code", "Jupyter Notebook", "Firebase Console", "n8n", "Eleven8Labs"],
  Concepts: ["Full-Stack Development", "REST APIs", "UI/UX Design", "Data Visualization", "Machine Learning", "Agile Workflow"]
};

const container = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.07 } } };
const item = { hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } } };

export default function Skills() {
  return (
    <div>
      <h2 className="text-2xl font-bold">Skills</h2>
      <motion.div
        className="mt-6 space-y-8"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
      >
        {Object.entries(skills).map(([category, list]) => (
          <motion.div key={category} variants={item}>
            <h3 className="text-lg font-semibold text-sky-500 mb-3">{category}</h3>
            <div className="flex flex-wrap gap-2">
              {list.map(skill => (
                <motion.span
                  key={skill}
                  className="text-sm px-3 py-1 rounded-full border border-slate-300 dark:border-slate-700 bg-white/40 dark:bg-slate-950/40 hover:bg-sky-100 dark:hover:bg-sky-900/50 backdrop-blur-sm transition"
                  whileHover={{ scale: 1.05 }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
