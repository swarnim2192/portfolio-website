import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "dark");
  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") root.classList.add("dark");
    else root.classList.remove("dark");
    localStorage.setItem("theme", theme);
  }, [theme]);
  return (
    <div className="min-h-screen bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-100">
      <Navbar theme={theme} setTheme={setTheme} />
      <main className="max-w-6xl mx-auto px-4">
        <section id="home"><Hero /></section>
        <section id="about" className="pt-24"><About /></section>
        <section id="projects" className="pt-24"><Projects /></section>
        <section id="contact" className="pt-24"><Contact /></section>
      </main>
      <Footer />
    </div>
  );
}
