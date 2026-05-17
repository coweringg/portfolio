import React, { useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  X,
  ArrowRight,
  Route,
  CheckCircle2,
  Layers,
  Cpu,
  ShieldCheck,
  GraduationCap,
  Layout,
  Server,
  Database,
  Cloud,
  Key,
  CreditCard,
  Sparkles
} from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { t } from "../translations";

interface CaseStudyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CaseStudyModal({ isOpen, onClose }: CaseStudyModalProps) {
  const { language } = useLanguage();
  const tm = t[language].caseStudyModal;

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const getArchitectureIcon = (index: number) => {
    const icons = [Layout, Server, Database, Cloud, Cpu, Key, CreditCard];
    const Icon = icons[index % icons.length];
    return <Icon className="w-4 h-4 text-ocean-light shrink-0" />;
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-100 flex items-center justify-center p-4 sm:p-6 md:p-10 backdrop-blur-md bg-ocean-950/80 overflow-hidden"
          onClick={(e) => e.target === e.currentTarget && onClose()}
        >
          <motion.div
            initial={{ scale: 0.95, y: 20, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.95, y: 20, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="w-full max-w-5xl max-h-[90vh] bg-ocean-950/95 border border-white/15 rounded-2xl shadow-[0_0_80px_rgba(0,0,0,0.9)] flex flex-col relative overflow-hidden"
          >
            <div className="h-1.5 w-full bg-linear-to-r from-ocean-light/20 via-ocean-light to-emerald-400/50 shrink-0" />

            <div className="flex items-center justify-between px-6 py-5 border-b border-white/10 bg-white/5 select-none shrink-0">
              <div className="flex items-center gap-3">
                <div>
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-ocean-light animate-pulse" />
                    <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] font-bold text-ocean-light">
                      {tm.subtitle}
                    </span>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-serif italic text-white font-bold mt-0.5">
                    {tm.title}
                  </h2>
                </div>
              </div>
              <button
                onClick={onClose}
                className="p-2 hover:bg-white/10 rounded-full transition-colors text-white/50 hover:text-white"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div 
              className="flex-1 min-h-0 overflow-y-auto p-6 sm:p-8 md:p-10 space-y-8 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent"
              data-lenis-prevent="true"
            >
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-6 rounded-xl border border-white/10 bg-white/5 relative overflow-hidden group hover:border-ocean-light/30 transition-colors">
                  <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                    <Route className="w-24 h-24 text-ocean-light" />
                  </div>
                  <div className="flex items-center gap-2 text-ocean-light text-xs uppercase tracking-[0.2em] font-bold mb-3">
                    <Route className="w-4 h-4" />
                    <span>{tm.problem.title}</span>
                  </div>
                  <p className="text-white/80 text-sm sm:text-base leading-relaxed relative z-10 font-light">
                    {tm.problem.content}
                  </p>
                </div>

                <div className="p-6 rounded-xl border border-emerald-400/20 bg-emerald-400/5 relative overflow-hidden group hover:border-emerald-400/40 transition-colors">
                  <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                    <CheckCircle2 className="w-24 h-24 text-emerald-400" />
                  </div>
                  <div className="flex items-center gap-2 text-emerald-300 text-xs uppercase tracking-[0.2em] font-bold mb-3">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>{tm.solution.title}</span>
                  </div>
                  <p className="text-white text-sm sm:text-base leading-relaxed relative z-10 font-light">
                    {tm.solution.content}
                  </p>
                </div>
              </div>

              <div className="p-6 rounded-xl border border-white/10 bg-white/5">
                <div className="flex items-center gap-2 text-ocean-light text-xs uppercase tracking-[0.2em] font-bold mb-3">
                  <Layers className="w-4 h-4" />
                  <span>{tm.role.title}</span>
                </div>
                <p className="text-white/90 text-sm sm:text-base leading-relaxed font-light">
                  {tm.role.content}
                </p>
              </div>

              <div>
                <div className="flex items-center gap-2 text-ocean-light text-xs uppercase tracking-[0.2em] font-bold mb-4 pl-1">
                  <Cpu className="w-4 h-4" />
                  <span>{tm.architecture.title}</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3.5">
                  {tm.architecture.items.map((item, idx) => (
                    <div
                      key={item.label}
                      className="p-4 rounded-lg border border-white/10 bg-white/5 hover:bg-white/8 hover:border-ocean-light/30 transition-all flex flex-col justify-between"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[10px] uppercase tracking-wider font-bold text-white/40">
                          {item.label}
                        </span>
                        {getArchitectureIcon(idx)}
                      </div>
                      <p className="text-sm font-medium text-white/90">{item.val}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 items-stretch">
                <div className="p-6 rounded-xl border border-white/10 bg-white/5 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 text-ocean-light text-xs uppercase tracking-[0.2em] font-bold mb-4">
                      <Cpu className="w-4 h-4" />
                      <span>{tm.decisions.title}</span>
                    </div>
                    <ul className="space-y-3.5">
                      {tm.decisions.items.map((dec, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-white/80 leading-relaxed font-light">
                          <div className="w-1.5 h-1.5 rounded-full bg-ocean-light mt-2 shrink-0 animate-pulse" />
                          <span>{dec}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="p-6 rounded-xl border border-white/10 bg-white/5 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 text-ocean-light text-xs uppercase tracking-[0.2em] font-bold mb-4">
                      <ShieldCheck className="w-4 h-4" />
                      <span>{tm.security.title}</span>
                    </div>
                    <ul className="space-y-3.5">
                      {tm.security.items.map((sec, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-white/80 leading-relaxed font-light">
                          <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0" />
                          <span>{sec}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="md:col-span-2 p-6 sm:p-8 rounded-xl border border-ocean-light/20 bg-ocean-light/5 relative overflow-hidden group hover:border-ocean-light/40 transition-colors">
                  <div className="absolute -right-4 -bottom-4 opacity-5 group-hover:opacity-10 transition-opacity pointer-events-none">
                    <GraduationCap className="w-48 h-48 text-ocean-light" />
                  </div>
                  <div className="flex items-center gap-2 text-ocean-light text-xs uppercase tracking-[0.2em] font-bold mb-5">
                    <GraduationCap className="w-4 h-4" />
                    <span>{tm.learnings.title}</span>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4 relative z-10">
                    {tm.learnings.items.map((lrn, i) => (
                      <div key={i} className="flex items-start gap-3 p-4 rounded-lg border border-white/5 bg-white/5 hover:bg-white/10 transition-colors">
                        <ArrowRight className="w-4 h-4 text-ocean-light mt-0.5 shrink-0 animate-pulse" />
                        <span className="text-sm text-white font-light leading-relaxed">{lrn}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
