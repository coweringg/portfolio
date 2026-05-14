import { useState, useEffect } from "react";
import { Background } from "./components/Background";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Stack } from "./components/Stack";
import { Projects } from "./components/Projects";
import { Experience } from "./components/Experience";
import { Contact } from "./components/Contact";
import { Cursor } from "./components/Cursor";
import { Sidebars } from "./components/Sidebars";
import { NarratorWidget } from "./components/NarratorWidget";
import { Terminal } from "./components/Terminal";
import { LanguageProvider } from "./context/LanguageContext";
import { NarratorProvider } from "./context/NarratorContext";

export default function App() {
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === '`') {
        e.preventDefault();
        setIsTerminalOpen(prev => !prev);
      }
      
      if (e.ctrlKey && e.key === '`') {
        e.preventDefault();
        setIsTerminalOpen(prev => !prev);
      }

      if (e.key === 'Escape' && isTerminalOpen) {
        setIsTerminalOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isTerminalOpen]);

  return (
    <LanguageProvider>
      <NarratorProvider>
        <div className="relative text-white selection:bg-ocean-light/30 selection:text-ocean-light">
          <Cursor />
          <Background />
          <Navbar onTerminalClick={() => setIsTerminalOpen(true)} />
          <Sidebars />
          <NarratorWidget />
          <Terminal isOpen={isTerminalOpen} onClose={() => setIsTerminalOpen(false)} />
          
          <main>
            <Hero />
            <About />
            <Stack />
            <Projects />
            <Experience />
            <Contact />
          </main>
        </div>
      </NarratorProvider>
    </LanguageProvider>
  );
}
