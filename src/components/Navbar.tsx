import { motion, useScroll, useTransform } from "motion/react";
import { useState, useEffect } from "react";
import { BriefcaseBusiness, Menu, X } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { t } from "../translations";

export function Navbar() {
  const { scrollY, scrollYProgress } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, setLanguage } = useLanguage();

  const links = [
    { id: "home", name: t[language].nav.home, href: "#home" },
    { id: "about", name: t[language].nav.about, href: "#about" },
    { id: "stack", name: t[language].nav.stack, href: "#stack" },
    { id: "projects", name: t[language].nav.projects, href: "#projects" },
    { id: "experience", name: t[language].nav.experience, href: "#experience" },
    { id: "contact", name: t[language].nav.contact, href: "#contact" },
  ];

  useEffect(() => {
    const updateActiveSection = (currentScroll: number) => {
      const sectionIds = ["home", "about", "stack", "projects", "experience", "contact"];
      const scrollPosition = currentScroll + window.innerHeight * 0.3;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const id = sectionIds[i];
        const element = document.getElementById(id);
        if (element && scrollPosition >= element.offsetTop) {
          setActiveSection(id);
          break;
        }
      }
    };

    updateActiveSection(scrollY.get());

    return scrollY.on("change", (latest) => {
      setIsScrolled(latest > 50);
      updateActiveSection(latest);
    });
  }, [scrollY]);

  const navOpacity = useTransform(scrollY, [0, 50], [1, 0.8]);
  const navBackdrop = useTransform(scrollY, [0, 50], ["blur(0px)", "blur(12px)"]);
  const navBg = useTransform(scrollY, [0, 50], ["rgba(1, 8, 14, 0)", "rgba(1, 8, 14, 0.4)"]);

  const goToSection = (href: string, id: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    setActiveSection(id);
    setIsMenuOpen(false);
  };

  return (
    <motion.nav
      style={{
        opacity: navOpacity,
        backdropFilter: navBackdrop,
        backgroundColor: navBg,
      }}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-10 xl:px-12 h-20 flex items-center justify-between relative">
        
        <div className="flex-1 flex items-center">
          <a 
            href="/" 
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="interactive flex items-center group relative translate-x-2"
            aria-label="Go to home"
          >
            <div className="absolute inset-0 bg-ocean-light/20 blur-lg rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <img 
              src="/logo.png" 
              alt="Gonzalo Mendez" 
              className="w-24 h-24 sm:w-28 sm:h-28 object-contain transition-all duration-300 group-hover:scale-110 drop-shadow-[0_0_12px_rgba(56,189,248,0.5)]" 
            />
          </a>
        </div>
        
        <div className="hidden xl:flex items-center gap-x-6 2xl:gap-x-10 mx-6">
          {links.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  goToSection(link.href, link.id);
                }}
                className={`relative text-[11px] uppercase tracking-[0.2em] font-bold transition-colors pb-1 whitespace-nowrap
                  ${isActive ? "text-white" : "text-white/60 hover:text-white"}`}
              >
                {link.name}
                {isActive && (
                  <motion.div
                    layoutId="navbar-active"
                    className="absolute -bottom-1.5 left-0 right-0 h-[2px] bg-ocean-light shadow-[0_0_10px_#38bdf8]"
                  />
                )}
              </a>
            );
          })}
        </div>

        <div className="hidden xl:flex flex-1 justify-end items-center gap-6">
          
          <button 
            onClick={() => setLanguage(language === "EN" ? "ES" : "EN")}
            className="flex items-center gap-2 px-3 py-1.5 border border-white/10 rounded-full text-[9px] font-bold tracking-widest bg-white/5 backdrop-blur-md hover:bg-white/10 hover:border-ocean-light/30 transition-all group"
            title="Toggle Language"
            aria-label="Toggle language"
          >
            <span className={`transition-colors ${language === "EN" ? "text-ocean-light" : "text-white/40 group-hover:text-white/70"}`}>EN</span>
            <span className="w-px h-3 bg-white/20"></span>
            <span className={`transition-colors ${language === "ES" ? "text-ocean-light" : "text-white/40 group-hover:text-white/70"}`}>ES</span>
          </button>
          
          <button
            onClick={() => goToSection("#projects", "projects")}
            className="interactive flex items-center gap-2 px-5 py-2 border border-white/20 rounded-full text-[10px] font-bold tracking-widest bg-white/5 backdrop-blur-md text-white hover:bg-white/10 hover:border-ocean-light/50 hover:shadow-[0_0_18px_rgba(56,189,248,0.18)] transition-all group whitespace-nowrap"
          >
            {t[language].nav.dive}
            <BriefcaseBusiness className="w-3.5 h-3.5 text-ocean-light group-hover:text-white transition-colors" />
          </button>
        </div>

        <button
          onClick={() => setIsMenuOpen((value) => !value)}
          className="xl:hidden interactive flex items-center justify-center w-11 h-11 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-white z-50"
          aria-label={isMenuOpen ? t[language].nav.close : t[language].nav.menu}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          className="xl:hidden mx-4 mb-4 rounded-lg border border-white/10 bg-ocean-950/95 backdrop-blur-xl shadow-[0_20px_80px_rgba(0,0,0,0.45)] overflow-hidden"
        >
          <div className="flex items-center justify-between px-4 py-3 border-b border-white/10">
            <button
              onClick={() => setLanguage(language === "EN" ? "ES" : "EN")}
              className="interactive flex items-center gap-2 px-3 py-1.5 border border-white/10 rounded-full text-[9px] font-bold tracking-widest bg-white/5"
              aria-label="Toggle language"
            >
              <span className={language === "EN" ? "text-ocean-light" : "text-white/40"}>EN</span>
              <span className="w-px h-3 bg-white/20" />
              <span className={language === "ES" ? "text-ocean-light" : "text-white/40"}>ES</span>
            </button>
            <button
              onClick={() => goToSection("#projects", "projects")}
              className="interactive flex items-center gap-2 px-4 py-2 rounded-full bg-white text-ocean-950 text-[10px] font-bold tracking-widest"
            >
              {t[language].nav.dive}
              <BriefcaseBusiness className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid">
            {links.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  goToSection(link.href, link.id);
                }}
                className={`interactive px-5 py-4 border-b border-white/5 text-sm uppercase tracking-[0.2em] font-bold ${
                  activeSection === link.id ? "text-ocean-light" : "text-white/70"
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>
        </motion.div>
      )}

      <motion.div
        className="absolute bottom-0 left-0 right-0 h-[2px] bg-ocean-glow shadow-[0_0_8px_#0ea5e9,0_0_12px_#38bdf8]"
        style={{ scaleX: scrollYProgress, transformOrigin: "0% 50%" }}
      />
    </motion.nav>
  );
}
