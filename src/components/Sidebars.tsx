import { useScroll } from "motion/react";
import { useEffect, useState } from "react";
import { Github, Linkedin } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { t } from "../translations";

export function Sidebars() {
  const { scrollY } = useScroll();
  const [activeIndex, setActiveIndex] = useState(0);
  const { language } = useLanguage();

  useEffect(() => {
    const updateActiveIndex = (currentScroll: number) => {
      const sectionIds = ["home", "about", "stack", "projects", "experience", "contact"];
      const scrollPosition = currentScroll + window.innerHeight * 0.4;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const id = sectionIds[i];
        const element = document.getElementById(id);
        if (element && scrollPosition >= element.offsetTop) {
          setActiveIndex(i);
          break;
        }
      }
    };

    updateActiveIndex(scrollY.get());

    return scrollY.on("change", (latest) => {
      updateActiveIndex(latest);
    });
  }, [scrollY]);

  return (
    <>
      <div className="fixed left-6 lg:left-10 bottom-0 z-40 hidden xl:flex flex-col items-center gap-6 after:content-[''] after:w-px after:h-24 after:bg-white/10">
        <a 
          href="https://github.com/coweringg" 
          target="_blank" 
          rel="noreferrer" 
          className="w-10 h-10 rounded-full bg-white/5 border border-white/10 backdrop-blur-md flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 hover:border-ocean-light/50 hover:shadow-[0_0_15px_rgba(56,189,248,0.3)] transition-all hover:-translate-y-1"
        >
          <Github className="w-4 h-4" />
        </a>
        <a 
          href="https://www.linkedin.com/in/gonzalomendezdev/" 
          target="_blank" 
          rel="noreferrer" 
          className="w-10 h-10 rounded-full bg-white/5 border border-white/10 backdrop-blur-md flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 hover:border-ocean-light/50 hover:shadow-[0_0_15px_rgba(56,189,248,0.3)] transition-all hover:-translate-y-1"
        >
          <Linkedin className="w-4 h-4" />
        </a>

      </div>

      <div className="fixed right-6 lg:right-10 top-1/2 -translate-y-1/2 z-40 hidden xl:flex flex-col items-center gap-6">
        <div className="text-[10px] [writing-mode:vertical-lr] rotate-180 tracking-[0.5em] text-white/30 font-bold">
          {t[language].sidebars.surface}
        </div>
        
        <div className="flex flex-col gap-4 my-2 relative py-2">
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2"></div>
          
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <div 
              key={i} 
              className={`w-1.5 h-1.5 rounded-full relative z-10 transition-all duration-500 ${
                activeIndex >= i ? "bg-ocean-glow shadow-[0_0_10px_#38bdf8] scale-125" : "bg-white/20"
              }`} 
            />
          ))}
        </div>

        <div className="text-[10px] [writing-mode:vertical-lr] rotate-180 tracking-[0.5em] text-white/30 font-bold">
          {t[language].sidebars.depths}
        </div>
      </div>
    </>
  );
}
