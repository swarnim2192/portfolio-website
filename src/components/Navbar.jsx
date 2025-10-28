import { useState, useEffect } from 'react';

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'education', 'experience', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 200;
      
      // Check if we're at the bottom of the page
      const isAtBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 10;
      
      // If at bottom, set contact as active
      if (isAtBottom) {
        setActiveSection('contact');
        return;
      }

      for (const sectionId of sections) {
        const section = document.getElementById(sectionId);
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.clientHeight;

          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      const navbarHeight = 100;
      const targetPosition = section.offsetTop - navbarHeight;
      window.scrollTo({ top: targetPosition, behavior: 'smooth' });
    }
  };

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'education', label: 'Education' },
    { id: 'experience', label: 'Experience' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <nav className="fixed top-5 left-1/2 -translate-x-1/2 w-[90%] max-w-6xl z-50 px-6 py-4 bg-white/[0.03] backdrop-blur-[20px] border border-white/20 rounded-full shadow-[0_8px_32px_rgba(0,0,0,0.4)] hover:shadow-[0_8px_40px_rgba(59,130,246,0.3)] transition-all duration-500 hover:-translate-y-1 hover:border-sky-400/40">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <a 
          href="#home" 
          onClick={(e) => handleNavClick(e, 'home')}
          className="text-xl font-bold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent hover:from-blue-100 hover:to-sky-300 transition-all duration-300"
        >
          Swarnim Khanal
        </a>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                onClick={(e) => handleNavClick(e, link.id)}
                className={`relative px-4 py-2 rounded-full font-medium text-sm transition-all duration-300 hover:text-white ${
                  activeSection === link.id
                    ? 'bg-gradient-to-r from-sky-500/30 to-blue-600/30 text-white shadow-lg shadow-sky-500/20 border border-sky-400/30'
                    : 'text-slate-300 hover:bg-white/10 hover:shadow-[0_0_15px_rgba(56,189,248,0.3)] hover:border hover:border-sky-400/30'
                } before:absolute before:inset-0 before:rounded-full before:bg-white/10 before:opacity-0 hover:before:opacity-100 before:transition-opacity`}
              >
                <span className="relative z-10">{link.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden mt-4 pt-4 border-t border-white/10">
        <ul className="flex flex-wrap gap-2 justify-center">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                onClick={(e) => handleNavClick(e, link.id)}
                className={`inline-block px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-300 ${
                  activeSection === link.id
                    ? 'bg-gradient-to-r from-sky-500/30 to-blue-600/30 text-white shadow-md border border-sky-400/30'
                    : 'text-slate-300 bg-white/10 hover:bg-white/20 hover:shadow-[0_0_10px_rgba(56,189,248,0.3)] hover:border hover:border-sky-400/30'
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
