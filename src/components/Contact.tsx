import { motion } from "motion/react";
import { Mail, MapPin, Radio, Target } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { t } from "../translations";
import { useSectionNarrator } from "../hooks/useSectionNarrator";
import { StatsDashboard } from "./StatsDashboard";

export function Contact() {
  const { language } = useLanguage();
  const tc = t[language].contact;
  useSectionNarrator("contact");
  const availabilityIcons = [Radio, MapPin, Target];

  return (
    <section id="contact" className="relative py-20 md:py-32 px-4 sm:px-6 min-h-screen flex flex-col justify-center section-surface section-divider">
      <div className="max-w-5xl mx-auto w-full text-center">
        
        <motion.div
           initial={{ opacity: 1, scale: 1 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm glass-panel border-ocean-light/30 text-ocean-light/80 text-[10px] tracking-[0.2em] font-bold uppercase mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-ocean-light animate-pulse shadow-[0_0_8px_#38bdf8]"></span>
            {tc.pill}
          </div>
          
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-normal mb-6 sm:mb-8 max-w-3xl mx-auto">
            {tc.title1} <br className="md:hidden" />
            <span className="text-transparent bg-clip-text bg-linear-to-b from-white via-white to-ocean-glow/60 text-glow font-serif italic font-normal pr-4">{tc.title2}</span>
          </h2>
          
          <p className="text-base sm:text-lg text-white/62 max-w-2xl mx-auto mb-7 sm:mb-8 font-light leading-relaxed">
            {tc.p}
          </p>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.15, delayChildren: 0.3 }
              }
            }}
            className="grid md:grid-cols-3 gap-3 max-w-3xl mx-auto mb-8 sm:mb-10"
          >
            {tc.availability.map((item, idx) => {
              const Icon = availabilityIcons[idx];

              return (
                <motion.div 
                  key={idx} 
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 }
                  }}
                  whileHover={{ 
                    y: -5,
                    backgroundColor: "rgba(255, 255, 255, 0.05)",
                    borderColor: "rgba(255, 255, 255, 0.15)"
                  }}
                  className="glass-panel rounded-lg p-4 text-left transition-colors duration-300"
                >
                  <div className={`flex items-center gap-2 mb-2 ${idx === 0 ? "text-emerald-300" : idx === 1 ? "text-amber-300" : "text-violet-300"}`}>
                    <Icon className="w-4 h-4" />
                    <span className="text-[10px] uppercase tracking-[0.2em] font-bold">{item.title}</span>
                  </div>
                  <p className="text-sm text-white/75 leading-relaxed">{item.text}</p>
                </motion.div>
              );
            })}
          </motion.div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a 
              href="mailto:gonzalomendezdev@gmail.com" 
              className="interactive inline-flex w-full sm:w-auto items-center justify-center gap-3 px-8 py-4 rounded-sm bg-white text-black text-xs font-bold uppercase tracking-widest hover:scale-105 transition-transform duration-300 shadow-[0_0_40px_rgba(255,255,255,0.1)] hover:shadow-[0_0_60px_rgba(255,255,255,0.2)]"
            >
              <Mail className="w-4 h-4" />
              {tc.sayHello}
            </a>
          </div>

          <div className="mt-8 text-sm text-white/45">
            <span className="text-white/30">{tc.emailLabel}: </span>
            <a href="mailto:gonzalomendezdev@gmail.com" className="interactive text-white/70 hover:text-ocean-light transition-colors">
              gonzalomendezdev@gmail.com
            </a>
          </div>
        </motion.div>

        <StatsDashboard />

        <motion.div 
           initial={{ opacity: 1 }}
           whileInView={{ opacity: 1 }}
           viewport={{ once: true }}
           transition={{ delay: 0.4, duration: 1 }}
           className="mt-12 md:mt-16 flex flex-col items-center justify-center pt-8 border-t border-white/10"
        >
           <div className="text-white/40 text-sm font-light text-center">
             &copy; {new Date().getFullYear()} {tc.copyright}
           </div>
        </motion.div>

      </div>
    </section>
  );
}
