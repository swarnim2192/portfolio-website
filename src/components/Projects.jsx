import { track } from "../analytics";
import { motion } from "framer-motion";
import Particles from "./Particles";
import { useState } from "react";

const projects = [
  {
    title: "T-Flash",
    desc: "Voice-first AI news pipeline converting real-time headlines into audio briefings using Gemini AI and ElevenLabs TTS. Features n8n automation, Supabase storage, and supports both web (Next.js) and mobile (Flutter) platforms.",
    stack: ["Next.js", "Flutter", "Gemini AI", "ElevenLabs", "n8n", "Supabase", "NewsAPI"],
    image: "/projects/tflash.jpeg",
    links: {
      code: "https://github.com/Rizsaurav/T-Flash"
    }
  },
  {
    title: "Booth Buddy",
    desc: "Web-based photo booth application for capturing and customizing digital photo strips with filters, stickers, and social sharing. Features user authentication, photo storage via Firebase, and modern web camera integration.",
    stack: ["React", "TypeScript", "Tailwind CSS", "Flask", "Firebase"],
    image: "/projects/boothbuddy.png",
    links: {
      code: "https://github.com/livlaurel/Booth-Buddy"
    }
  },
  {
    title: "NeuroTrade",
    desc: "Streamlit dashboard with yFinance live data and logistic regression (scikit-learn) for trend prediction; improved decision-making via clear UI/UX.",
    stack: ["Streamlit", "Pandas", "scikit-learn", "yFinance"],
    image: "/projects/stockanalysis.png",
    links: {
      demo: "https://stock-analysis-kfvmhhdfye8zacg8gzwb2z.streamlit.app/",
      code: "https://github.com/swarnim2192/Stock-Analysis"
    }
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12 }
  }
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] }
  }
};

export default function Projects() {
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseMove = (e, index) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePosition({ x, y, index });
  };

  return (
    <div className="relative">
      <Particles count={25} opacity={0.12} />
      <div className="relative z-10">
        <h2 className="text-2xl font-bold">Projects</h2>
        <motion.div
          className="mt-8 grid gap-6 md:grid-cols-3"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          {projects.map((p, i) => (
            <motion.div
              key={i}
              variants={item}
              className="group relative overflow-visible border border-slate-200 dark:border-slate-800 rounded-xl bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm hover:border-sky-400/50 transition-all duration-300"
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              onMouseMove={(e) => handleMouseMove(e, i)}
              whileHover={{ 
                scale: 1.1,
                zIndex: 50,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)"
              }}
              transition={{ duration: 0.3 }}
            >
              {/* Gradient overlay on hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{
                  background: `radial-gradient(600px circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(56, 189, 248, 0.1), transparent 40%)`
                }}
              />

              <div className="relative z-10">
                {/* Project Image */}
                <div className="w-full h-48 overflow-hidden rounded-t-xl bg-slate-100 dark:bg-slate-800">
                  <img
                    src={process.env.PUBLIC_URL + p.image}
                    alt={p.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="text-xl font-semibold">{p.title}</h3>
                  <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{p.desc}</p>

                  {/* Tech Stack */}
                  <div className="mt-4 flex flex-wrap gap-2">
                    {p.stack.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-2 py-1 rounded-md border border-slate-300 dark:border-slate-700 bg-slate-100 dark:bg-slate-800/50"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Button Links */}
                  <div className="mt-4 flex gap-3">
                    {p.links.demo && (
                      <a
                        href={p.links.demo}
                        onClick={() => track("click_project_demo", { project: p.title })}
                        className="px-4 py-2 rounded-lg bg-sky-500 text-white text-sm font-medium hover:bg-sky-600 hover:scale-105 transition-all duration-200 shadow-md hover:shadow-lg"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Demo
                      </a>
                    )}
                    {p.links.code && (
                      <a
                        href={p.links.code}
                        onClick={() => track("click_project_code", { project: p.title })}
                        className="px-4 py-2 rounded-lg border-2 border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 text-sm font-medium hover:border-sky-400 dark:hover:border-sky-400 hover:text-sky-600 dark:hover:text-sky-400 hover:scale-105 transition-all duration-200"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Code
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
