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
import { LanguageProvider } from "./context/LanguageContext";

export default function App() {
  return (
    <LanguageProvider>
      <div className="relative text-white selection:bg-ocean-light/30 selection:text-ocean-light">
        <Cursor />
        <Background />
        <Navbar />
        <Sidebars />
        
        <main>
          <Hero />
          <About />
          <Stack />
          <Projects />
          <Experience />
          <Contact />
        </main>
      </div>
    </LanguageProvider>
  );
}
