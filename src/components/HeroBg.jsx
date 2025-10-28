import { motion } from "framer-motion";

export default function HeroBg({ variant = "aurora" }) {
  return (
    <div className="pointer-events-none absolute left-1/2 -translate-x-1/2 top-0 w-screen h-full -z-10 overflow-visible">
      {variant === "aurora" && (
        <>
          <motion.div
            className="absolute -top-24 left-1/2 h-[42rem] w-[42rem] -translate-x-1/2 rounded-full bg-gradient-to-tr from-sky-500/25 via-fuchsia-500/20 to-purple-500/25 blur-3xl"
            animate={{ scale: [1, 1.08, 1], rotate: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-0 right-[-10%] h-[26rem] w-[26rem] rounded-full bg-gradient-to-tr from-blue-400/20 to-emerald-400/25 blur-2xl"
            animate={{ y: [0, -20, 0], scale: [1, 1.05, 1] }}
            transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
          />
        </>
      )}

      {variant === "mesh" && (
        <>
          <motion.div
            className="absolute top-[10%] left-[8%] h-72 w-72 rounded-full bg-fuchsia-500/15 blur-2xl"
            animate={{ x: [0, 20, -10, 0], y: [0, -10, 15, 0] }}
            transition={{ repeat: Infinity, duration: 14 }}
          />
          <motion.div
            className="absolute top-[35%] right-[10%] h-80 w-80 rounded-full bg-sky-500/20 blur-2xl"
            animate={{ x: [0, -15, 10, 0], y: [0, 15, -12, 0] }}
            transition={{ repeat: Infinity, duration: 16 }}
          />
          <motion.div
            className="absolute bottom-[5%] left-[25%] h-64 w-64 rounded-full bg-emerald-500/20 blur-2xl"
            animate={{ scale: [1, 1.08, 1], rotate: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 12 }}
          />
        </>
      )}

      {variant === "grid" && (
        <div className="absolute inset-0 bg-[radial-gradient(theme(colors.slate.200/20)_1px,transparent_1px)] dark:bg-[radial-gradient(theme(colors.slate.800/40)_1px,transparent_1px)] [background-size:18px_18px]" />
      )}
    </div>
  );
}
