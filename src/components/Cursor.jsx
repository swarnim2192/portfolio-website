import { useEffect, useRef, useState } from "react";
import { motion, useSpring } from "framer-motion";

export default function Cursor() {
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);

  const x = useSpring(0, { stiffness: 350, damping: 30 });
  const y = useSpring(0, { stiffness: 350, damping: 30 });

  useEffect(() => {
    const isTouch = "ontouchstart" in window || navigator.maxTouchPoints > 0;
    const prefersReduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (isTouch || prefersReduce) return;

    setEnabled(true);
    document.documentElement.classList.add("custom-cursor");

    const move = (e) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };

    const setHover = () => setHovering(true);
    const unsetHover = () => setHovering(false);

    window.addEventListener("pointermove", move);

    const hoverTargets = () =>
      Array.from(document.querySelectorAll("a, button, [data-cursor='hover']"));

    const attachHover = () => {
      hoverTargets().forEach((el) => {
        el.addEventListener("pointerenter", setHover);
        el.addEventListener("pointerleave", unsetHover);
      });
    };

    const observer = new MutationObserver(() => attachHover());
    observer.observe(document.body, { childList: true, subtree: true });
    attachHover();

    return () => {
      window.removeEventListener("pointermove", move);
      observer.disconnect();
      document.documentElement.classList.remove("custom-cursor");
    };
  }, [x, y]);

  if (!enabled) return null;

  return (
    <>
      <motion.div
        className="pointer-events-none fixed z-[9999] -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-400/90 mix-blend-screen shadow"
        style={{
          left: x,
          top: y,
          width: 6,
          height: 6,
        }}
      />
      <motion.div
        className="pointer-events-none fixed z-[9999] -translate-x-1/2 -translate-y-1/2 rounded-full border border-sky-400/70 shadow-[0_0_20px_rgba(56,189,248,0.35)]"
        animate={{ scale: hovering ? 1.8 : 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 18 }}
        style={{
          left: x,
          top: y,
          width: hovering ? 36 : 24,
          height: hovering ? 36 : 24,
          boxShadow: hovering ? "0 0 30px rgba(56,189,248,0.45)" : "0 0 20px rgba(56,189,248,0.35)"
        }}
      />
    </>
  );
}
