import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Splash({ show, onDone }) {
  useEffect(() => {
    const prefersReduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    // shorter splash if reduced motion
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
              <motion.div
                className="w-20 h-20 rounded-full ring-2 ring-sky-500/40 shadow-lg overflow-hidden bg-slate-800"
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
              <motion.div
                className="absolute inset-0 rounded-full border border-sky-400/50"
                initial={{ scale: 1 }}
                animate={{ scale: [1, 1.12, 1] }}
                transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
              />
            </div>

            <div className="text-center">
              <div className="text-xl font-bold tracking-tight">Swarnim Khanal</div>
              <div className="text-sm text-slate-400">Senior CS Student • Sloan Researcher • Physics TA</div>
            </div>

            <motion.div
              className="h-1 w-40 rounded-full bg-slate-800 overflow-hidden"
              aria-hidden="true"
            >
              <motion.div
                className="h-full w-1/3 bg-sky-500"
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
