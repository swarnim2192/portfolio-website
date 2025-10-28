import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Hero() {
  const wrap = { hidden:{opacity:0}, show:{opacity:1, transition:{staggerChildren:0.08}} };
  const item = { hidden:{opacity:0, y:12}, show:{opacity:1, y:0, transition:{duration:0.5, ease:[0.22,1,0.36,1]}} };

  const focus = ["AI & Machine Learning","Full-Stack Development","Data Analytics","Creative Technology"];
  const interests = ["Music","Sketching","Football"];

  // Typewriter effect state
  const [displayedText, setDisplayedText] = useState("");
  const fullText = "Swarnim Khanal";
  const [showCursor, setShowCursor] = useState(true);

  // Typewriter effect
  useEffect(() => {
    let charIndex = 0;
    const typingSpeed = 120; // milliseconds per character

    const typeInterval = setInterval(() => {
      if (charIndex < fullText.length) {
        setDisplayedText(fullText.substring(0, charIndex + 1));
        charIndex++;
      } else {
        clearInterval(typeInterval);
        // Stop cursor blinking after typing is done
        setTimeout(() => setShowCursor(false), 500);
      }
    }, typingSpeed);

    return () => clearInterval(typeInterval);
  }, []);

  // Generate random particles
  const [particles, setParticles] = useState([]);
  
  useEffect(() => {
    const newParticles = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 2,
      duration: Math.random() * 20 + 10,
      delay: Math.random() * 5,
      opacity: Math.random() * 0.5 + 0.3
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="relative min-h-screen flex items-center overflow-hidden">
      {/* Aurora Background */}
      <div className="absolute inset-0" style={{ zIndex: 0 }}>
        {/* Dark base with gradient */}
        <div 
          className="absolute inset-0" 
          style={{ 
            background: 'radial-gradient(ellipse 80% 80% at 50% -20%, rgba(120, 119, 198, 0.3), transparent), linear-gradient(to bottom, #000428, #004e92)'
          }} 
        />
        
        {/* Aurora orb 1 - Blue */}
        <div 
          className="absolute animate-pulse"
          style={{
            top: '-10%',
            left: '10%',
            width: '800px',
            height: '800px',
            background: 'radial-gradient(circle, rgba(59,130,246,0.5) 0%, rgba(59,130,246,0.2) 30%, transparent 70%)',
            filter: 'blur(100px)',
            animation: 'pulse 4s ease-in-out infinite',
          }}
        />
        
        {/* Aurora orb 2 - Purple */}
        <div 
          className="absolute"
          style={{
            top: '10%',
            right: '10%',
            width: '700px',
            height: '700px',
            background: 'radial-gradient(circle, rgba(168,85,247,0.5) 0%, rgba(168,85,247,0.2) 30%, transparent 70%)',
            filter: 'blur(100px)',
            animation: 'pulse 5s ease-in-out infinite',
            animationDelay: '1s',
          }}
        />
        
        {/* Aurora orb 3 - Cyan */}
        <div 
          className="absolute"
          style={{
            bottom: '10%',
            left: '30%',
            width: '750px',
            height: '750px',
            background: 'radial-gradient(circle, rgba(34,211,238,0.4) 0%, rgba(34,211,238,0.15) 30%, transparent 70%)',
            filter: 'blur(100px)',
            animation: 'pulse 6s ease-in-out infinite',
            animationDelay: '2s',
          }}
        />
        
        {/* Aurora orb 4 - Pink accent */}
        <div 
          className="absolute"
          style={{
            top: '50%',
            right: '30%',
            width: '600px',
            height: '600px',
            background: 'radial-gradient(circle, rgba(236,72,153,0.3) 0%, rgba(236,72,153,0.1) 30%, transparent 70%)',
            filter: 'blur(100px)',
            animation: 'pulse 7s ease-in-out infinite',
            animationDelay: '3s',
          }}
        />
        
        {/* Floating Particles */}
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full bg-white"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              opacity: particle.opacity,
            }}
            animate={{
              y: [0, -100, 0],
              x: [0, Math.sin(particle.id) * 50, 0],
              opacity: [particle.opacity, particle.opacity * 0.3, particle.opacity],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
              ease: "easeInOut",
            }}
          />
        ))}
        
        {/* Overlay for depth */}
        <div 
          className="absolute inset-0" 
          style={{ 
            background: 'linear-gradient(to bottom, transparent 0%, rgba(0,4,40,0.3) 100%)'
          }} 
        />
      </div>

      <motion.div 
        className="relative w-full py-24 sm:py-32 text-center px-4" 
        style={{ zIndex: 10 }}
        variants={wrap} 
        initial="hidden" 
        animate="show"
      >
        <motion.div className="flex justify-center" variants={item}>
          <motion.img
            src={process.env.PUBLIC_URL + "/profile.jpg"}
            alt="Swarnim Khanal"
            className="w-48 h-48 sm:w-56 sm:h-56 rounded-full object-cover ring-4 ring-sky-400/30 shadow-2xl shadow-sky-500/20"
            loading="eager"
            decoding="async"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
          />
        </motion.div>

        <motion.p className="mt-6 text-sm uppercase tracking-widest text-sky-300/80" variants={item}>Portfolio</motion.p>
        
        {/* Typewriter Name */}
        <motion.h1 
          className="mt-3 text-4xl sm:text-6xl font-extrabold tracking-tight text-white drop-shadow-lg min-h-[4rem]" 
          variants={item}
        >
          {displayedText}
          {showCursor && <span className="inline-block w-1 h-12 sm:h-16 bg-sky-400 ml-1 animate-pulse" style={{ verticalAlign: 'middle' }}></span>}
        </motion.h1>
        
        <motion.p className="mt-4 text-lg text-slate-200 max-w-2xl mx-auto" variants={item}>
          Senior CS Student, Sloan Researcher & Physics TA — TXST
        </motion.p>

        <motion.div className="mt-8 flex items-center justify-center gap-4" variants={item}>
          <a href="#projects" className="px-5 py-2.5 rounded-xl bg-sky-500 text-white hover:bg-sky-600 shadow-lg shadow-sky-500/30 transition-all hover:shadow-sky-500/50 hover:scale-105">Explore Projects</a>
          <a href="#contact" className="px-5 py-2.5 rounded-xl border-2 border-sky-400/50 text-white hover:bg-sky-400/10 backdrop-blur-sm transition-all hover:border-sky-400">Contact Me</a>
        </motion.div>

        <motion.div className="mt-12 space-y-4" variants={wrap} initial="hidden" whileInView="show" viewport={{ once:true, amount:0.25 }}>
          <motion.div className="flex flex-wrap justify-center gap-2" variants={wrap}>
            {focus.map(t => (
              <motion.span key={t} variants={item} whileHover={{ scale: 1.06 }} className="text-sm px-3 py-1.5 rounded-full border border-sky-400/40 bg-slate-900/60 backdrop-blur-md text-white shadow-lg">
                {t}
              </motion.span>
            ))}
          </motion.div>
          <motion.div className="flex flex-wrap justify-center gap-2" variants={wrap}>
            {interests.map(t => (
              <motion.span key={t} variants={item} whileHover={{ scale: 1.06 }} className="text-xs px-2.5 py-1 rounded-full border border-slate-600/50 text-slate-300 backdrop-blur-sm bg-slate-900/30">
                {t}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}
