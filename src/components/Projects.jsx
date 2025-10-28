import { track } from "../analytics";
import { motion } from "framer-motion";
import Particles from "./Particles";
import { useState } from "react";

const projects = [
  {
    title: "AI Code Inspector",
    icon: "🤖",
    desc: "AI-assisted code review using Python, Flask, OpenAI API, GitHub API; Dockerized with CI/CD. Cut review time 60%, improved standards compliance 40%, and caught 30% more bugs pre-merge.",
    stack: ["Python","Flask","OpenAI API","GitHub API","Docker","CI/CD"],
    links: { demo: "#", code: "#" }
  },
  {
    title: "Real-Time Stock Market Analysis with AI Prediction",
    icon: "📈",
    desc: "Streamlit dashboard with yFinance live data and logistic regression (scikit-learn) for trend prediction; improved decision-making via clear UI/UX.",
    stack: ["Streamlit","Pandas","scikit-learn","yFinance"],
    links: { demo: "#", code: "https://github.com/swarnim2192/Stock-Analysis" }
  },
  {
    title: "SmartTask Manager",
    icon: "✅",
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
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e, index) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePosition({ x, y, index });
  };

  return (
    <div className="relative">
      <Particles count={25} opacity={0.15} />
      <div className="relative z-10">
        <h2 className="text-2xl font-bold">Projects</h2>
        <motion.div
          className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {projects.map((p, index) => (
            <motion.article
              key={p.title}
              className="glass-card group relative rounded-2xl border border-white/20 dark:border-white/10 p-6 backdrop-blur-xl bg-white/10 dark:bg-white/5 overflow-hidden cursor-pointer"
              variants={item}
              whileHover={{ y: -12, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
              onMouseMove={(e) => handleMouseMove(e, index)}
              style={{
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
              }}
            >
              {/* Hover glow effect */}
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{
                  background: mousePosition.index === index 
                    ? `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(255, 255, 255, 0.15) 0%, transparent 50%)`
                    : 'none'
                }}
              />
              
              {/* Animated border glow */}
              <div className="absolute inset-[-2px] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-400 animate-border-rotate pointer-events-none" 
                style={{
                  background: 'linear-gradient(45deg, transparent, rgba(59, 130, 246, 0.6), transparent, rgba(168, 85, 247, 0.6), transparent)',
                  backgroundSize: '200% 200%',
                  padding: '2px',
                  WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                  WebkitMaskComposite: 'xor',
                  maskComposite: 'exclude',
                }}
              />

              <div className="relative z-10">
                {/* Project Icon */}
                <div className="text-5xl mb-4 filter drop-shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                  {p.icon}
                </div>

                {/* Project Title with Gradient */}
                <h3 className="font-bold text-xl mb-3 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                  {p.title}
                </h3>

                <p className="text-sm text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
                  {p.desc}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {p.stack.map(s => (
                    <span 
                      key={s} 
                      className="text-xs px-2.5 py-1.5 rounded-lg border border-white/20 dark:border-white/10 bg-white/10 dark:bg-white/5 backdrop-blur-sm transition-all duration-300 group-hover:bg-white/20 dark:group-hover:bg-white/10 group-hover:-translate-y-1"
                    >
                      {s}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-3">
                  <a 
                    className="flex-1 text-sm px-4 py-2.5 rounded-lg bg-gradient-to-r from-sky-500 to-blue-600 text-white font-semibold text-center hover:shadow-lg hover:shadow-sky-500/50 transition-all duration-300 hover:-translate-y-1" 
                    href={p.links.demo} 
                    onClick={() => track("project_demo_click", {project:p.title})}
                  >
                    Demo
                  </a>
                  <a 
                    className="flex-1 text-sm px-4 py-2.5 rounded-lg border border-white/30 dark:border-white/20 bg-white/10 dark:bg-white/5 backdrop-blur-sm text-white font-semibold text-center hover:bg-white/20 dark:hover:bg-white/10 transition-all duration-300 hover:-translate-y-1" 
                    href={p.links.code} 
                    onClick={() => track("project_code_click", {project:p.title})}
                  >
                    Code
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes border-rotate {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-border-rotate {
          animation: border-rotate 3s linear infinite;
        }
      `}</style>
    </div>
  );
}
