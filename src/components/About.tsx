import { motion } from "motion/react";
import { BrainCircuit, Layers3, ShieldCheck, Rocket, Sparkles, Zap, User } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { t } from "../translations";
import { useSectionNarrator } from "../hooks/useSectionNarrator";

export function About() {
  const { language } = useLanguage();
  const ta = t[language].about;
  useSectionNarrator("about");
  const focusIcons = [Layers3, BrainCircuit, Rocket];

  return (
    <section id="about" className="relative py-20 md:py-32 px-4 sm:px-6 flex flex-col items-center justify-center min-h-screen section-surface section-divider">
      <div className="max-w-6xl mx-auto w-full z-10 relative">
        
        <div className="absolute -top-4 -left-6 w-16 h-16 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-ocean-light/40 to-transparent"></div>
          <div className="absolute top-0 left-0 w-px h-full bg-linear-to-b from-ocean-light/40 to-transparent"></div>
          <div className="absolute top-0 left-0 w-1 h-1 bg-ocean-light shadow-[0_0_8px_#38bdf8] rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          <div className="md:col-span-6 relative">
             <motion.div
               initial={{ opacity: 1, x: 0 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true, margin: "-100px" }}
               transition={{ duration: 1, ease: "easeOut" }}
             >
                <h2 className="text-4xl md:text-5xl font-black tracking-normal leading-[1.1] mb-8">
                  <span className="block bg-clip-text text-transparent bg-linear-to-b from-white via-white to-white/70">
                    {ta.title1}
                  </span>
                  <span className="block text-ocean-light text-glow font-serif italic font-normal py-1 drop-shadow-[0_0_15px_rgba(56,189,248,0.4)]">
                    {ta.title2}
                  </span>
                  <span className="block bg-clip-text text-transparent bg-linear-to-b from-white to-ocean-light/80">
                    {ta.title3}
                  </span>
                </h2>
                
                <div className="relative pl-6 border-l border-white/5 space-y-5">
                  <div className="absolute top-0 left-0 w-px h-full bg-linear-to-b from-ocean-light via-transparent to-transparent opacity-30"></div>
                  <p className="text-lg text-white/70 font-light leading-relaxed">
                    {ta.p1}
                  </p>
                  <p className="text-lg text-white/70 font-light leading-relaxed">
                    {ta.p2}
                  </p>
                </div>
             </motion.div>
          </div>

          <div className="md:col-span-6 grid sm:grid-cols-2 gap-4">
            
            {[
              { icon: ShieldCheck, text: ta.items[0].text, title: ta.items[0].title },
              { icon: Zap, text: ta.items[1].text, title: ta.items[1].title },
              { icon: Sparkles, text: ta.items[2].text, title: ta.items[2].title },
              { icon: User, text: ta.items[3].text, title: ta.items[3].title }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 1, y: 0 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: 0.2 + (idx * 0.1), ease: "easeOut" }}
                className="glass-panel glass-panel-hover p-6 rounded-lg flex flex-col items-start gap-4"
              >
                <div className="p-3 bg-slate-100/6 rounded-lg border border-white/10">
                  <item.icon className={`w-5 h-5 ${idx === 2 ? "accent-reef" : idx === 3 ? "accent-violet" : "text-ocean-light"}`} />
                </div>
                <div>
                  <h3 className="text-[10px] font-bold text-white/40 uppercase tracking-widest mb-1">{item.title}</h3>
                  <p className="text-white/80">{item.text}</p>
                </div>
              </motion.div>
            ))}

          </div>
        </div>

        <motion.div
          initial={{ opacity: 1, y: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mt-12 md:mt-16"
        >
          <div className="flex items-center gap-4 mb-5">
            <span className="w-10 h-px bg-ocean-light/60 shadow-[0_0_10px_rgba(56,189,248,0.4)]"></span>
            <h3 className="text-[11px] uppercase tracking-[0.32em] font-bold text-white/50">
              {ta.focusTitle}
            </h3>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {ta.focus.map((item, idx) => {
              const FocusIcon = focusIcons[idx];

              return (
                <div
                  key={item.title}
                  className="glass-panel glass-panel-hover rounded-lg p-5 flex gap-4 items-start"
                >
                  <div className="p-3 bg-ocean-light/10 rounded-lg border border-ocean-light/15 shrink-0">
                    <FocusIcon className="w-5 h-5 text-ocean-light" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white tracking-wide">{item.title}</h4>
                    <p className="mt-2 text-sm leading-relaxed text-white/58 font-light">
                      {item.text}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
