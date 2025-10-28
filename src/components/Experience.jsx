import { motion } from "framer-motion";
import Particles from "./Particles";
import { useState } from "react";

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
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e, index) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePosition({ x, y, index });
  };

  return (
    <div className="relative">
      <Particles count={20} opacity={0.15} />
      <div className="relative z-10">
        <h2 className="text-2xl font-bold">Experience</h2>
        <motion.div className="mt-6 space-y-6" variants={list} initial="hidden" whileInView="show" viewport={{ once:true, amount:0.25 }}>
          {exp.map((e, index) => (
            <motion.article 
              key={e.title} 
              className="group relative rounded-2xl border border-white/20 dark:border-white/10 p-6 backdrop-blur-xl bg-white/10 dark:bg-white/5 overflow-hidden cursor-pointer" 
              variants={item}
              whileHover={{ y: -8, scale: 1.01 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
              onMouseMove={(ev) => handleMouseMove(ev, index)}
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
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-3">
                  <div>
                    <h3 className="text-lg font-semibold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">{e.title}</h3>
                    <p className="italic text-slate-600 dark:text-slate-300">{e.role}</p>
                  </div>
                  <div className="text-sm text-slate-500 dark:text-slate-400 whitespace-nowrap">{e.location} • {e.date}</div>
                </div>
                <ul className="list-disc pl-5 space-y-1 text-slate-600 dark:text-slate-300">
                  {e.points.map(p => (<li key={p}>{p}</li>))}
                </ul>
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
