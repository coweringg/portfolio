import { useState, useEffect, lazy, Suspense } from "react";
import { Background } from "./components/Background";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Cursor } from "./components/Cursor";
import { Sidebars } from "./components/Sidebars";
import { NarratorWidget } from "./components/NarratorWidget";
import { LanguageProvider } from "./context/LanguageContext";
import { NarratorProvider } from "./context/NarratorContext";

const About = lazy(() => import("./components/About").then(m => ({ default: m.About })));
const Stack = lazy(() => import("./components/Stack").then(m => ({ default: m.Stack })));
const Projects = lazy(() => import("./components/Projects").then(m => ({ default: m.Projects })));
const Experience = lazy(() => import("./components/Experience").then(m => ({ default: m.Experience })));
const Contact = lazy(() => import("./components/Contact").then(m => ({ default: m.Contact })));
const Terminal = lazy(() => import("./components/Terminal").then(m => ({ default: m.Terminal })));

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
          
          <Suspense fallback={null}>
            <Terminal isOpen={isTerminalOpen} onClose={() => setIsTerminalOpen(false)} />
          </Suspense>
          
          <main>
            <Hero />
            <Suspense fallback={<div className="h-screen flex items-center justify-center text-white/20 text-xs tracking-widest uppercase">Cargando...</div>}>
              <About />
              <Stack />
              <Projects />
              <Experience />
              <Contact />
            </Suspense>
          </main>
        </div>
      </NarratorProvider>
    </LanguageProvider>
  );
}
