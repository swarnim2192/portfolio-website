import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Splash({ show, onDone }) {
  useEffect(() => {
    const prefersReduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    // 1.2 seconds for normal, shorter if reduced motion
    const t = setTimeout(onDone, prefersReduce ? 150 : 1200);
    return () => clearTimeout(t);
  }, [onDone]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[9998] flex items-center justify-center bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35 }}
          aria-label="Loading"
          role="status"
        >
          <motion.div
            className="flex flex-col items-center gap-4"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative">
              {/* Glowing rotating orbital rings */}
              <motion.div
                className="absolute inset-0 w-32 h-32 rounded-full"
                style={{
                  border: '2px solid transparent',
                  borderTopColor: '#38bdf8',
                  borderRightColor: '#0ea5e9',
                  boxShadow: '0 0 20px rgba(56, 189, 248, 0.5), inset 0 0 20px rgba(56, 189, 248, 0.3)',
                }}
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
              />
              
              {/* Second orbital ring - opposite direction */}
              <motion.div
                className="absolute inset-0 w-32 h-32 rounded-full"
                style={{
                  border: '2px solid transparent',
                  borderBottomColor: '#0ea5e9',
                  borderLeftColor: '#38bdf8',
                  boxShadow: '0 0 15px rgba(14, 165, 233, 0.4)',
                }}
                animate={{ rotate: -360 }}
                transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
              />

              {/* Pulsing outer glow ring */}
              <motion.div
                className="absolute inset-0 w-32 h-32 rounded-full border-2 border-sky-400/30"
                animate={{ 
                  scale: [1, 1.15, 1],
                  opacity: [0.3, 0.6, 0.3]
                }}
                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              />

              {/* Profile picture - increased size */}
              <motion.div
                className="relative w-32 h-32 rounded-full ring-2 ring-sky-500/40 shadow-lg overflow-hidden bg-slate-800"
                initial={{ rotate: 0 }}
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 2.4, ease: "linear" }}
                style={{ willChange: "transform" }}
              >
                <img
                  src={process.env.PUBLIC_URL + "/profile.jpg"}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>

            <div className="text-center mt-4">
              <div className="text-xl font-bold tracking-tight">Swarnim Khanal</div>
              <div className="text-sm text-slate-400">Senior CS Student • Full-Stack Developer • Physics TA</div>
            </div>

            <motion.div
              className="h-1 w-40 rounded-full bg-slate-800 overflow-hidden"
              aria-hidden="true"
            >
              <motion.div
                className="h-full w-1/3 bg-gradient-to-r from-sky-400 to-blue-500 shadow-[0_0_10px_rgba(56,189,248,0.6)]"
                initial={{ x: "-100%" }}
                animate={{ x: ["-100%", "200%"] }}
                transition={{ repeat: Infinity, duration: 1.2, ease: "easeInOut" }}
              />
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
