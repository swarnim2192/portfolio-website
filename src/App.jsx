import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Splash from "./components/Splash";

export default function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "dark");
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") root.classList.add("dark");
    else root.classList.remove("dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <>
      <Splash show={showSplash} onDone={() => setShowSplash(false)} />
      
      {!showSplash && (
        <div className="min-h-screen bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-100">
          <Navbar theme={theme} setTheme={setTheme} />
          
          {/* Hero section - full width for aurora effect */}
          <section id="home"><Hero /></section>
          
          {/* Rest of the sections - constrained width */}
          <main className="max-w-6xl mx-auto px-4">
            <section id="about" className="pt-24"><About /></section>
            <section id="education" className="pt-24"><Education /></section>
            <section id="experience" className="pt-24"><Experience /></section>
            <section id="skills" className="pt-24"><Skills /></section>
            <section id="projects" className="pt-24"><Projects /></section>
            <section id="contact" className="pt-24"><Contact /></section>
          </main>
          <Footer />
        </div>
      )}
    </>
  );
}
