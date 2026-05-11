import { motion } from "motion/react";
import { CheckCircle2, CircleDot } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { t } from "../translations";

export function Experience() {
  const { language } = useLanguage();
  const te = t[language].experience;
  return (
    <section id="experience" className="relative py-20 md:py-32 px-4 sm:px-6 flex flex-col items-center justify-center min-h-screen">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-normal mb-10 sm:mb-14 md:mb-16 text-center">
          {te.title1} <span className="font-serif text-ocean-light italic font-normal">{te.title2}</span>
        </h2>

        <div className="relative border-l border-white/10 ml-4 md:ml-8 space-y-16 pb-12">
          
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="relative w-full flex flex-row items-start pl-6 md:pl-10"
          >
            <div className="w-10 h-10 shrink-0 bg-ocean-950 rounded-full flex items-center justify-center z-10 shadow-[0_0_20px_rgba(100,255,218,0.2)] mt-6 mr-6 md:mr-8">
               <CircleDot className="w-5 h-5 text-ocean-light animate-pulse" />
            </div>

            <div className="glass-panel glass-panel-hover p-8 rounded-lg relative overflow-hidden group w-full">
               <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-300/7 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-emerald-300/10 transition-colors"></div>
               
               <p className="text-ocean-glow text-[10px] mb-2 uppercase tracking-[0.2em] font-bold">{te.date}</p>
               <h3 className="text-2xl font-bold tracking-tight text-white mb-1">{te.role}</h3>
               <a href="#" className="text-white/60 hover:text-white transition-colors inline-block mb-6 font-medium text-sm">{te.company}</a>
               
               <ul className="space-y-3 text-white/70 font-light list-none relative z-10">
                 {te.bullets.map((bullet: string, idx: number) => (
                   <li key={idx} className="flex items-start gap-3">
                     <CheckCircle2 className="w-4 h-4 text-ocean-light mt-1 shrink-0" />
                     <span>{bullet}</span>
                   </li>
                 ))}
               </ul>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
