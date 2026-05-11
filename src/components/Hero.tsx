import { motion } from "motion/react";
import { MagneticButton } from "./MagneticButton";
import { Download, ChevronDown, ArrowRight, Building2, Scale, Code2 } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { t } from "../translations";

export function Hero() {
  const { language } = useLanguage();
  const th = t[language].hero;
  return (
    <section id="home" className="relative min-h-[92dvh] sm:min-h-dvh flex flex-col items-center justify-center pt-14 sm:pt-20 px-4 sm:px-6 overflow-hidden">
      
      <div className="flex flex-col items-center text-center z-10 max-w-5xl mx-auto mt-1 sm:mt-10 pb-10 sm:pb-32">
        
        <div className="space-y-[-10px] sm:space-y-[-10px]">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-[9px] sm:text-[14px] uppercase tracking-[0.34em] sm:tracking-[0.6em] text-ocean-light/80 mb-3 sm:mb-6 font-semibold animate-pulse"
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
            className="text-[clamp(3rem,15vw,10rem)] font-black leading-[0.82] sm:leading-[0.85] tracking-normal perspective-[1000px] w-full text-center"
          >
            <div className="flex justify-center overflow-visible bg-clip-text text-transparent bg-linear-to-b from-white via-white to-ocean-light/80 pb-2 drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]">
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
            <div className="flex justify-center overflow-visible mt-1 sm:mt-2 bg-clip-text text-transparent bg-linear-to-b from-ocean-light to-ocean-glow/60 pb-3 sm:pb-4 drop-shadow-[0_0_20px_rgba(56,189,248,0.3)]">
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
           className="mt-4 sm:mt-10 max-w-3xl px-1 sm:px-4"
        >
          <p className="text-xl sm:text-3xl md:text-4xl font-light tracking-normal text-white drop-shadow-md">
            {th.role} <span className="italic font-serif text-ocean-light text-glow font-normal">{th.developer}</span>
          </p>
          <p className="mt-3 sm:mt-6 text-white/68 text-[13px] sm:text-base md:text-lg leading-relaxed font-light md:px-10">
            {th.intro}
          </p>
        </motion.div>

        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8, delay: 0.48, ease: "easeOut" }}
           className="mt-4 sm:mt-6 grid grid-cols-3 gap-1.5 sm:gap-3 w-full max-w-3xl px-0 sm:px-4"
        >
          {th.proof.map((item) => (
            <div
              key={item.value}
              className="rounded-lg border border-white/12 bg-slate-100/5.5 px-1.5 py-2 sm:px-4 sm:py-3 backdrop-blur-md shadow-[0_8px_30px_rgba(0,0,0,0.2)]"
            >
              <div className="text-[8px] sm:text-xs font-bold uppercase tracking-[0.08em] sm:tracking-[0.18em] text-white">
                {item.value}
              </div>
              <div className="mt-1 text-[7px] sm:text-[10px] leading-snug sm:leading-relaxed text-white/55">
                {item.label}
              </div>
            </div>
          ))}
        </motion.div>

        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
           className="mt-5 sm:mt-7 hidden sm:flex flex-wrap justify-center gap-2.5 sm:gap-3 px-2 sm:px-4 max-w-3xl"
        >
          <div className="flex items-center gap-2 px-4 py-2 bg-slate-100/5.5 border border-white/12 backdrop-blur-xl rounded-full text-white/80">
            <Building2 className="w-3.5 h-3.5 text-ocean-light" />
            <span className="text-[10px] font-medium tracking-wide">{th.pills.production}</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-slate-100/5.5 border border-white/12 backdrop-blur-xl rounded-full text-white/80">
            <Scale className="w-3.5 h-3.5 accent-reef" />
            <span className="text-[10px] font-medium tracking-wide">{th.pills.legaltech}</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-1.5 bg-slate-100/5.5 border border-white/12 backdrop-blur-xl rounded-full text-white/80">
            <Code2 className="w-3.5 h-3.5 accent-violet" />
            <div className="flex flex-col leading-[1.2]">
              <span className="text-[9px] font-bold text-ocean-light">{th.pills.stkTop}</span>
              <span className="text-[9px] font-medium">{th.pills.stkBot}</span>
            </div>
          </div>
          <div className="flex items-center gap-2 px-4 py-1.5 bg-slate-100/5.5 border border-white/12 backdrop-blur-xl rounded-full">
            <div className="w-1.5 h-1.5 rounded-full bg-green-400 shadow-[0_0_8px_#4ade80] animate-pulse"></div>
            <div className="flex flex-col leading-[1.2]">
              <span className="text-[9px] font-medium text-white/60 tracking-wider">{th.pills.openTop}</span>
              <span className="text-[9px] font-bold text-white tracking-wide">{th.pills.openBot}</span>
            </div>
          </div>
        </motion.div>

        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
           className="mt-5 sm:mt-10 flex flex-col sm:flex-row flex-wrap justify-center gap-2.5 sm:gap-5 w-full px-2 sm:px-4"
        >
          <MagneticButton>
            <a 
              href="#projects" 
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="interactive flex w-full sm:w-auto items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 bg-linear-to-r from-white to-ocean-light/90 backdrop-blur-md border border-white/40 shadow-[0_0_22px_rgba(56,189,248,0.42)] hover:shadow-[0_0_34px_rgba(56,189,248,0.55)] hover:from-white hover:to-ocean-light text-ocean-950 text-[10px] sm:text-[11px] font-bold uppercase tracking-widest rounded-lg hover:scale-105 transition-all"
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
              className="interactive flex w-full sm:w-auto items-center justify-center px-6 sm:px-8 py-3.5 sm:py-4 border border-white/10 bg-white/5 backdrop-blur-sm text-white/80 hover:text-white text-[10px] sm:text-[11px] font-bold uppercase tracking-widest rounded-sm hover:bg-white/10 transition-all"
            >
              {th.buttons.contactMe}
            </a>
          </MagneticButton>

          <MagneticButton>
            <a 
              href={language === "EN" ? "/Gonzalo_Mendez_FullStack_CV_EN.pdf" : "/Gonzalo_Mendez_FullStack_CV_ES.pdf"} 
              download={language === "EN" ? "Gonzalo_Mendez_FullStack_CV_EN.pdf" : "Gonzalo_Mendez_FullStack_CV_ES.pdf"}
              className="interactive flex w-full sm:w-auto items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 border border-white/10 bg-white/5 backdrop-blur-sm text-white/80 hover:text-white text-[10px] sm:text-[11px] font-bold uppercase tracking-widest rounded-sm hover:bg-white/10 transition-all group"
            >
              {th.buttons.downloadCV} <Download className="w-3.5 h-3.5 group-hover:translate-y-0.5 transition-transform" />
            </a>
          </MagneticButton>
        </motion.div>

      </div>

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.5, ease: "easeOut" }}
        className="absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-2 text-white/40 z-20"
      >
        <span className="text-[9px] uppercase tracking-[0.3em] font-medium">{th.scroll}</span>
        <ChevronDown className="w-4 h-4 animate-bounce" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 1.2, ease: "easeOut" }}
        className="absolute right-4 lg:right-8 bottom-20 z-20 text-right hidden lg:flex flex-col items-end"
      >
        <div className="p-6 bg-white/5 backdrop-blur-md border border-white/10 rounded-lg hover:bg-white/10 transition-colors duration-300 w-64 shadow-[0_8px_32px_rgba(0,0,0,0.3)]">
          <div className="text-left mb-4">
            <p className="text-[9px] text-ocean-light uppercase tracking-[0.3em] mb-1 font-bold">{th.spotlight.title}</p>
            <h3 className="text-3xl text-white font-light italic font-serif">LawCaseAI</h3>
          </div>
          
          <div className="w-full h-[2px] bg-white/10 relative overflow-hidden rounded-full mb-4">
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 2, delay: 1.5, ease: "easeOut" }}
              className="absolute top-0 left-0 h-full bg-ocean-light shadow-[0_0_10px_#38bdf8,0_0_20px_#38bdf8]"
            ></motion.div>
          </div>
          
          <a 
            href="#projects" 
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="flex items-center justify-between text-[9px] text-white/50 hover:text-white uppercase tracking-[0.2em] font-bold group transition-colors w-full"
          >
            {th.spotlight.dive}
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform text-ocean-light" />
          </a>
        </div>
      </motion.div>

    </section>
  );
}
