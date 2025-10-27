import { motion } from "framer-motion";

const projects = [
  {
    title: "AI Code Inspector",
    desc: "AI-assisted code review using Python, Flask, OpenAI API, GitHub API; Dockerized with CI/CD. Cut review time 60%, improved standards compliance 40%, and caught 30% more bugs pre-merge.",
    stack: ["Python","Flask","OpenAI API","GitHub API","Docker","CI/CD"],
    links: { demo: "#", code: "#" }
  },
  {
    title: "Real-Time Stock Market Analysis with AI Prediction",
    desc: "Streamlit dashboard with yFinance live data and logistic regression (scikit-learn) for trend prediction; improved decision-making via clear UI/UX.",
    stack: ["Streamlit","Pandas","scikit-learn","yFinance"],
    links: { demo: "#", code: "#" }
  },
  {
    title: "SmartTask Manager",
    desc: "C++ app with SQLite and OAuth2 for secure cross-platform task management: categorization, prioritization, progress tracking.",
    stack: ["C++","SQLite","OAuth2"],
    links: { demo: "#", code: "#" }
  }
];

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.12 } }
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } }
};

export default function Projects() {
  return (
    <div>
      <h2 className="text-2xl font-bold">Projects</h2>
      <motion.div
        className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        {projects.map((p) => (
          <motion.article
            key={p.title}
            className="rounded-2xl border border-slate-200 dark:border-slate-800 p-5 hover:shadow bg-white/60 dark:bg-slate-950/60 backdrop-blur"
            variants={item}
            whileHover={{ y: -4, scale: 1.01 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
          >
            <h3 className="font-semibold text-lg">{p.title}</h3>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{p.desc}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {p.stack.map(s => (
                <span key={s} className="text-xs px-2 py-1 rounded-lg border border-slate-200 dark:border-slate-700">{s}</span>
              ))}
            </div>
            <div className="mt-4 flex gap-3">
              <a className="text-sm px-3 py-1.5 rounded-lg bg-sky-600 text-white hover:bg-sky-700" href={p.links.demo}>Demo</a>
              <a className="text-sm px-3 py-1.5 rounded-lg border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800" href={p.links.code}>Code</a>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </div>
  );
}
