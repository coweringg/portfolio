import { motion } from "motion/react";
import { MagneticButton } from "./MagneticButton";
import { Download, ChevronDown, ArrowRight, Building2, Scale, Code2, ShieldCheck, Zap, Globe } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { t } from "../translations";
import { useSectionNarrator } from "../hooks/useSectionNarrator";

export function Hero({ onOpenLawCaseModal }: { onOpenLawCaseModal?: () => void }) {
  const { language } = useLanguage();
  const th = t[language].hero;
  useSectionNarrator("hero", "home");
  return (
    <section id="home" className="relative h-dvh flex flex-col items-center justify-center pt-14 sm:pt-16 px-4 sm:px-6 overflow-hidden section-divider border-t-0">
      
      <div className="flex flex-col items-center justify-center text-center z-10 max-w-5xl mx-auto h-full w-full py-2 sm:py-4">
        
        <div className="space-y-[-10px] sm:space-y-[-10px]">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-[10px] sm:text-[13px] uppercase tracking-[0.34em] sm:tracking-[0.55em] text-ocean-light/80 mb-1.5 sm:mb-2 font-semibold animate-pulse"
          >
            {th.location}
          </motion.h2>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.05, delayChildren: 0.2 },
              },
            }}
            className="text-[clamp(2.5rem,8vw,6.2rem)] font-black leading-[0.82] sm:leading-[0.85] tracking-normal perspective-[1000px] w-full text-center"
          >
            <div className="flex justify-center overflow-visible bg-clip-text text-transparent bg-linear-to-b from-white via-white to-ocean-light/80 pb-1 sm:pb-2 drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]">
              {"GONZALO".split("").map((char, i) => (
                <motion.span
                  key={`first-${i}`}
                  variants={{
                    hidden: { y: "100%", opacity: 0, rotateX: -90 },
                    visible: { y: "0%", opacity: 1, rotateX: 0 },
                  }}
                  transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
                  className="inline-block origin-bottom"
                >
                  {char}
                </motion.span>
              ))}
            </div>
            <div className="flex justify-center overflow-visible mt-0.5 sm:mt-1 bg-clip-text text-transparent bg-linear-to-b from-ocean-light to-ocean-glow/60 pb-2 sm:pb-3 drop-shadow-[0_0_20px_rgba(56,189,248,0.3)]">
              {"MENDEZ".split("").map((char, i) => (
                <motion.span
                  key={`last-${i}`}
                  variants={{
                    hidden: { y: "100%", opacity: 0, rotateX: -90 },
                    visible: { y: "0%", opacity: 1, rotateX: 0 },
                  }}
                  transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
                  className="inline-block origin-bottom"
                >
                  {char}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
           className="mt-2.5 sm:mt-3 max-w-3xl px-1 sm:px-4"
        >
          <p className="text-xl sm:text-[26px] md:text-3xl font-light tracking-normal text-white drop-shadow-md">
            {th.role} <span className="italic font-serif text-ocean-light text-glow font-normal">{th.developer}</span>
          </p>
          <p className="mt-2 text-white/70 text-[13px] sm:text-[15px] md:text-[16px] leading-relaxed font-light md:px-10">
            {th.intro}
          </p>
        </motion.div>

        <motion.div
           key={language}
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true }}
           variants={{
             hidden: { opacity: 0 },
             visible: {
               opacity: 1,
               transition: { staggerChildren: 0.1, delayChildren: 0.4 }
             }
           }}
           className="mt-3.5 sm:mt-4.5 grid grid-cols-3 gap-2 sm:gap-3.5 w-full max-w-3xl px-1 sm:px-4"
        >
          {th.proof.map((item, idx) => {
            const icons = [ShieldCheck, Zap, Globe];
            const Icon = icons[idx];
            return (
              <motion.div
                key={item.value}
                variants={{
                  hidden: { opacity: 0, y: 15 },
                  visible: { 
                    opacity: 1, 
                    y: 0,
                    transition: { duration: 0.5, ease: "easeOut" }
                  }
                }}
                whileHover={{ 
                  scale: 1.02, 
                  backgroundColor: "rgba(255, 255, 255, 0.08)",
                  borderColor: "rgba(255, 255, 255, 0.2)"
                }}
                className="rounded-lg border border-white/12 bg-slate-100/5.5 px-2.5 py-2.5 sm:px-3.5 sm:py-3 backdrop-blur-md shadow-[0_8px_30px_rgba(0,0,0,0.2)] transition-colors duration-300"
              >
                <div className={`flex items-center justify-center gap-1.5 sm:gap-2 mb-1.5 sm:mb-2 ${idx === 0 ? "text-emerald-300" : idx === 1 ? "text-amber-300" : "text-violet-300"}`}>
                  <Icon className="w-3.5 h-3.5" />
                  <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.2em] font-bold">{item.value}</span>
                </div>
                <div className="text-[8px] sm:text-[10.5px] leading-snug sm:leading-relaxed text-white/60 text-center">
                  {item.label}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
           className="mt-3.5 sm:mt-4.5 hidden min-h-[780px]:sm:flex flex-wrap justify-center gap-2 sm:gap-3 px-2 sm:px-4 max-w-3xl"
        >
          <div className="flex items-center gap-2 px-3.5 py-1.5 bg-slate-100/5.5 border border-white/12 backdrop-blur-xl rounded-full text-white/80">
            <Building2 className="w-3.5 h-3.5 text-sky-400" />
            <span className="text-[9.5px] font-medium tracking-wide">{th.pills.production}</span>
          </div>
          <div className="flex items-center gap-2 px-3.5 py-1.5 bg-slate-100/5.5 border border-white/12 backdrop-blur-xl rounded-full text-white/80">
            <Scale className="w-3.5 h-3.5 text-rose-400" />
            <span className="text-[9.5px] font-medium tracking-wide">{th.pills.legaltech}</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-1.5 bg-slate-100/5.5 border border-white/12 backdrop-blur-xl rounded-full text-white/80">
            <Code2 className="w-3.5 h-3.5 text-white" />
            <div className="flex flex-col leading-[1.15]">
              <span className="text-[9px] font-bold text-white tracking-wide">{th.pills.stkTop}</span>
              <span className="text-[9px] font-medium text-white/70">{th.pills.stkBot}</span>
            </div>
          </div>
          <div className="flex items-center gap-2 px-4 py-1.5 bg-slate-100/5.5 border border-white/12 backdrop-blur-xl rounded-full">
            <div className="w-1.5 h-1.5 rounded-full bg-green-400 shadow-[0_0_8px_#4ade80] animate-pulse"></div>
            <div className="flex flex-col leading-[1.15]">
              <span className="text-[9px] font-medium text-white/60 tracking-wider">{th.pills.openTop}</span>
              <span className="text-[9px] font-bold text-white tracking-wide">{th.pills.openBot}</span>
            </div>
          </div>
        </motion.div>

        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
           className="mt-4 sm:mt-6 flex flex-col sm:flex-row flex-wrap justify-center gap-2.5 sm:gap-4 w-full px-2 sm:px-4"
        >
          <MagneticButton>
            <a 
              href="#projects" 
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="interactive flex w-full sm:w-auto items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-3.5 bg-linear-to-r from-white to-ocean-light/90 backdrop-blur-md border border-white/40 shadow-[0_0_22px_rgba(56,189,248,0.42)] hover:shadow-[0_0_34px_rgba(56,189,248,0.55)] hover:from-white hover:to-ocean-light text-ocean-950 text-[10px] sm:text-[10.5px] font-bold uppercase tracking-widest rounded-lg hover:scale-105 transition-all"
            >
              {th.buttons.viewProjects} <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </MagneticButton>
          
          <MagneticButton>
            <a 
              href="#contact" 
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="interactive flex w-full sm:w-auto items-center justify-center px-6 sm:px-8 py-3 sm:py-3.5 border border-white/10 bg-white/5 backdrop-blur-sm text-white/80 hover:text-white text-[10px] sm:text-[10.5px] font-bold uppercase tracking-widest rounded-sm hover:bg-white/10 transition-all"
            >
              {th.buttons.contactMe}
            </a>
          </MagneticButton>

          <MagneticButton>
            <a 
              href={language === "EN" ? "/Gonzalo_Mendez_FullStack_CV_EN.pdf" : "/Gonzalo_Mendez_FullStack_CV_ES.pdf"} 
              download={language === "EN" ? "Gonzalo_Mendez_FullStack_CV_EN.pdf" : "Gonzalo_Mendez_FullStack_CV_ES.pdf"}
              className="interactive flex w-full sm:w-auto items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-3.5 border border-white/10 bg-white/5 backdrop-blur-sm text-white/80 hover:text-white text-[10px] sm:text-[10.5px] font-bold uppercase tracking-widest rounded-sm hover:bg-white/10 transition-all group"
            >
              {th.buttons.downloadCV} <Download className="w-3.5 h-3.5 group-hover:translate-y-0.5 transition-transform" />
            </a>
          </MagneticButton>
        </motion.div>

      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.5, ease: "easeOut" }}
        onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}
        className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 hidden min-h-[780px]:sm:flex flex-col items-center gap-1.5 text-white/40 z-20 cursor-pointer group hover:text-white/80 transition-colors"
      >
        <span className="text-[8px] uppercase tracking-[0.25em] font-medium">{th.scroll}</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-3.5 h-3.5" />
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 1.2, ease: "easeOut" }}
        className="absolute right-4 lg:right-8 bottom-12 z-20 text-right hidden xl:min-h-[780px]:flex flex-col items-end"
      >
        <div className="p-4.5 bg-white/5 backdrop-blur-md border border-white/10 rounded-lg hover:bg-white/10 transition-colors duration-300 w-56 shadow-[0_8px_32px_rgba(0,0,0,0.3)]">
          <div className="text-left mb-3">
            <p className="text-[8px] text-ocean-light uppercase tracking-[0.3em] mb-1 font-bold">{th.spotlight.title}</p>
            <h3 className="text-2xl text-white font-light italic font-serif">LawCaseAI</h3>
          </div>
          
          <div className="w-full h-[2px] bg-white/10 relative overflow-hidden rounded-full mb-3">
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 2, delay: 1.5, ease: "easeOut" }}
              className="absolute top-0 left-0 h-full bg-ocean-light shadow-[0_0_10px_#38bdf8,0_0_20px_#38bdf8]"
            ></motion.div>
          </div>
          
          <button
            onClick={() => {
              if (onOpenLawCaseModal) {
                onOpenLawCaseModal();
              } else {
                document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="flex items-center justify-between text-[8px] text-white/50 hover:text-white uppercase tracking-[0.2em] font-bold group transition-colors w-full cursor-pointer bg-transparent border-none p-0"
          >
            {th.spotlight.dive}
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform text-ocean-light" />
          </button>
        </div>
      </motion.div>

    </section>
  );
}
