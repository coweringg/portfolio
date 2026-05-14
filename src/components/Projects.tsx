import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import {
  ArrowRight,
  BookOpen,
  Bot,
  BrainCircuit,
  CreditCard,
  FileText,
  GraduationCap,
  Layers3,
  Lock,
  MessageSquareText,
  Route,
  ShieldCheck,
  Users,
} from "lucide-react";
import React from "react";
import { useLanguage } from "../context/LanguageContext";
import { t } from "../translations";
import { useSectionNarrator } from "../hooks/useSectionNarrator";

type Project = {
  title: string;
  subtitle: string;
  description: string;
  tech: string[];
  visual: "legal" | "education";
  align: string;
  status: string;
  problem: string;
  role: string;
  decisions: string[];
  outcome: string;
  proof: string[];
  link?: string;
};

type ProjectsDict = typeof t.EN.projects;

function ProjectVisual({ project }: { project: Project }) {
  const isLegal = project.visual === "legal";
  const accent = isLegal ? "text-ocean-light" : "text-emerald-200";
  const border = isLegal ? "border-ocean-light/20" : "border-emerald-200/20";
  const bg = isLegal ? "bg-ocean-light/10" : "bg-emerald-200/10";
  const surface =
    isLegal
      ? "bg-[radial-gradient(circle_at_20%_10%,rgba(56,189,248,0.14),transparent_30%),linear-gradient(135deg,rgba(248,250,252,0.08),rgba(15,23,42,0.05))]"
      : "bg-[radial-gradient(circle_at_20%_10%,rgba(125,211,172,0.14),transparent_30%),radial-gradient(circle_at_92%_8%,rgba(167,139,250,0.09),transparent_28%),linear-gradient(135deg,rgba(248,250,252,0.08),rgba(15,23,42,0.05))]";

  return (
    <div className={`absolute inset-0 p-3.5 sm:p-7 ${surface}`}>
      <div className="flex items-center justify-between mb-3 sm:mb-5">
        <div>
          <p className="text-[8px] sm:text-[9px] uppercase tracking-[0.2em] sm:tracking-[0.28em] text-white/40 font-bold">
            Product walkthrough
          </p>
          <h3 className="mt-1 text-lg sm:text-2xl font-bold text-white">{project.title}</h3>
        </div>
        <div className={`w-9 h-9 sm:w-11 sm:h-11 rounded-lg ${bg} ${border} border flex items-center justify-center`}>
          {isLegal ? <ShieldCheck className={`w-5 h-5 ${accent}`} /> : <GraduationCap className={`w-5 h-5 ${accent}`} />}
        </div>
      </div>

      {isLegal ? (
        <div className="grid grid-cols-12 gap-2 sm:gap-4 h-[calc(100%-54px)] sm:h-[calc(100%-72px)]">
          <div className="col-span-5 rounded-lg border border-white/12 bg-slate-950/62 p-2.5 sm:p-4 flex flex-col">
            <div className="flex items-center gap-1.5 sm:gap-2 text-white/70 text-[10px] sm:text-xs font-bold">
              <FileText className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-ocean-light" />
              Case Documents
            </div>
            <div className="mt-2.5 sm:mt-4 space-y-2 sm:space-y-3">
              {["Complaint.pdf", "Evidence packet", "Attorney notes"].map((item, idx) => (
                <div key={item} className="rounded-md border border-white/8 bg-white/4 p-2 sm:p-3">
                  <div className="h-2 w-3/4 rounded-full bg-white/20" />
                  <div className="mt-2 h-2 w-1/2 rounded-full bg-white/10" />
                  <div className="mt-2 sm:mt-3 flex items-center justify-between text-[8px] sm:text-[9px] text-white/40">
                    <span className="truncate">{item}</span>
                    <span>0{idx + 1}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="col-span-7 grid gap-2 sm:gap-4">
            <div className="rounded-lg border border-white/12 bg-slate-950/54 p-2.5 sm:p-4">
              <div className="flex items-center gap-1.5 sm:gap-2 text-white/75 text-[10px] sm:text-xs font-bold">
                <BrainCircuit className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-ocean-light" />
                AI Summary
              </div>
              <div className="mt-3 sm:mt-4 space-y-2">
                <div className="h-2 rounded-full bg-white/20" />
                <div className="h-2 w-5/6 rounded-full bg-white/12" />
                <div className="h-2 w-2/3 rounded-full bg-white/12" />
              </div>
            </div>
            <div className="rounded-lg border border-white/12 bg-slate-950/54 p-2.5 sm:p-4">
              <div className="flex items-center gap-1.5 sm:gap-2 text-white/75 text-[10px] sm:text-xs font-bold">
                <MessageSquareText className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-ocean-light" />
                Case Assistant
              </div>
              <div className="mt-3 sm:mt-4 grid gap-2">
                <div className="ml-auto w-2/3 rounded-md bg-ocean-light/15 border border-ocean-light/15 p-2" />
                <div className="w-4/5 rounded-md bg-white/6 border border-white/8 p-2" />
                <div className="w-3/5 rounded-md bg-white/4 border border-white/8 p-2" />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-12 gap-2 sm:gap-4 h-[calc(100%-54px)] sm:h-[calc(100%-72px)]">
          <div className="col-span-7 rounded-lg border border-white/12 bg-slate-950/58 p-2.5 sm:p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5 sm:gap-2 text-white/75 text-[10px] sm:text-xs font-bold">
                <BookOpen className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-200" />
                Class Marketplace
              </div>
              <span className="hidden sm:inline text-[9px] text-emerald-200/80 uppercase tracking-widest">Credits</span>
            </div>
            <div className="mt-3 sm:mt-4 grid grid-cols-2 gap-2 sm:gap-3">
              {["Frontend mentoring", "English class", "Math support", "Career coaching"].map((item) => (
                <div key={item} className="rounded-md border border-white/8 bg-white/4 p-2 sm:p-3">
                  <div className="h-9 sm:h-16 rounded-md bg-linear-to-br from-emerald-200/18 to-ocean-light/8 border border-white/5" />
                  <p className="mt-2 sm:mt-3 text-[8px] sm:text-[10px] text-white/70 font-bold leading-tight">{item}</p>
                  <div className="mt-2 h-2 w-2/3 rounded-full bg-white/12" />
                </div>
              ))}
            </div>
          </div>
          <div className="col-span-5 grid gap-2 sm:gap-4">
            <div className="rounded-lg border border-white/12 bg-slate-950/54 p-2.5 sm:p-4">
              <div className="flex items-center gap-1.5 sm:gap-2 text-white/75 text-[10px] sm:text-xs font-bold">
                <Users className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-200" />
                Teacher Flow
              </div>
              <div className="mt-3 sm:mt-4 space-y-2">
                <div className="h-2 rounded-full bg-white/18" />
                <div className="h-2 w-4/5 rounded-full bg-white/10" />
                <div className="h-2 w-2/3 rounded-full bg-white/10" />
              </div>
            </div>
            <div className="rounded-lg border border-white/12 bg-slate-950/54 p-2.5 sm:p-4">
              <div className="flex items-center gap-1.5 sm:gap-2 text-white/75 text-[10px] sm:text-xs font-bold">
                <CreditCard className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-200" />
                Redeem Credits
              </div>
              <div className="mt-3 sm:mt-4 h-9 sm:h-16 rounded-md border border-emerald-200/15 bg-emerald-200/10" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function ProjectCard({ project, index, languageDict }: { project: Project; index: number; key?: string; languageDict: ProjectsDict }) {
  const isLeft = project.align === "left";
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const mouseXSpring = useSpring(mouseX, { stiffness: 150, damping: 20 });
  const mouseYSpring = useSpring(mouseY, { stiffness: 150, damping: 20 });
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["5deg", "-5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-5deg", "5deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <div className={`flex flex-col ${isLeft ? "lg:flex-row" : "lg:flex-row-reverse"} gap-5 sm:gap-8 lg:gap-14 items-center relative z-10 w-full`}>
      <div className={`absolute top-0 ${isLeft ? "-left-10" : "-right-10"} text-[20vw] font-bold tracking-normal text-white/5 -z-10 leading-none select-none pointer-events-none`}>
        0{index + 1}
      </div>

      <motion.div
        className="w-full lg:w-[56%] group relative rounded-lg overflow-hidden glass-panel aspect-16/11 sm:aspect-4/3 lg:aspect-16/10 perspective-[1000px]"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      >
        <ProjectVisual project={project} />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-linear-to-t from-slate-950/76 to-transparent z-10 pointer-events-none transform-[translateZ(30px)]" />
      </motion.div>

      <div className={`w-full lg:w-[44%] flex flex-col ${isLeft ? "items-start text-left" : "lg:items-end lg:text-right text-left"} gap-4 sm:gap-5`}>
        <div>
          <h4 className="text-ocean-light text-[9px] sm:text-[10px] uppercase font-bold tracking-[0.18em] sm:tracking-[0.2em] mb-1.5 sm:mb-2">{project.subtitle}</h4>
          <h3 className="text-3xl md:text-5xl font-bold tracking-normal text-white font-serif italic">
            {project.title}
          </h3>
        </div>

        <div className={`evidence-panel p-4 sm:p-5 relative w-full lg:w-[112%] ${isLeft ? "lg:-ml-8" : "lg:-mr-8"} z-20`}>
          <p className="text-sm sm:text-base text-white/80 leading-relaxed font-light">
            {project.description}
          </p>
        </div>

        {project.link ? (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="interactive inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-lg border border-ocean-light/30 bg-ocean-light/10 text-ocean-light px-5 py-3 text-[10px] font-bold uppercase tracking-widest shadow-[0_10px_30px_rgba(56,189,248,0.15)] transition-all hover:bg-ocean-light hover:text-ocean-950 hover:scale-[1.02]"
          >
            {languageDict.demo}
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        ) : (
          <a
            href={`mailto:gonzalomendezdev@gmail.com?subject=${encodeURIComponent(`${project.title} walkthrough`)}`}
            className="interactive inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-lg border border-white/25 bg-white text-ocean-950 px-5 py-3 text-[10px] font-bold uppercase tracking-widest shadow-[0_10px_30px_rgba(255,255,255,0.12)] transition-transform hover:scale-[1.02]"
          >
            {languageDict.walkthroughCta}
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        )}

        <div className="grid gap-3 w-full">
          <div className="evidence-panel p-3.5 sm:p-4">
            <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.22em] font-bold text-ocean-light mb-2">
              <Route className="w-3.5 h-3.5" />
              {languageDict.problem}
            </div>
            <p className="text-[13px] sm:text-sm leading-relaxed text-white/70">{project.problem}</p>
          </div>

          <div className="grid sm:grid-cols-2 gap-3">
            <div className="evidence-panel p-3.5 sm:p-4">
              <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.22em] font-bold text-ocean-light mb-2">
                <Layers3 className="w-3.5 h-3.5" />
                {languageDict.role}
              </div>
              <p className="text-[13px] sm:text-sm leading-relaxed text-white/70">{project.role}</p>
            </div>
            <div className="evidence-panel p-3.5 sm:p-4">
              <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.22em] font-bold text-ocean-light mb-2">
                <Bot className="w-3.5 h-3.5" />
                {languageDict.outcome}
              </div>
              <p className="text-[13px] sm:text-sm leading-relaxed text-white/70">{project.outcome}</p>
            </div>
          </div>

          <div className="evidence-panel p-3.5 sm:p-4">
            <div className="text-[10px] uppercase tracking-[0.22em] font-bold text-ocean-light mb-3">
              {languageDict.decisions}
            </div>
            <ul className="space-y-2 text-[13px] sm:text-sm leading-relaxed text-white/70">
              {project.decisions.map((decision) => (
                <li key={decision} className="flex gap-2">
                  <ArrowRight className="w-3.5 h-3.5 text-ocean-light mt-1 shrink-0" />
                  <span>{decision}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className={`flex flex-wrap gap-x-4 gap-y-2 ${isLeft ? "justify-start" : "justify-start lg:justify-end"} w-full text-white/50 text-[10px] uppercase font-bold tracking-[0.18em]`}>
          {project.tech.map((tech) => (
            <span key={tech}>{tech}</span>
          ))}
        </div>

        <div className={`flex flex-wrap items-center gap-3 mt-1 ${isLeft ? "justify-start" : "justify-start lg:justify-end"}`}>
          <div className="flex items-center gap-2 px-3 py-2 rounded-full border border-white/10 bg-white/5 text-[10px] uppercase tracking-widest font-bold text-white/58">
            <Lock className="w-3.5 h-3.5 text-ocean-light" />
            <span>{project.status ?? languageDict.private}</span>
          </div>
          {project.proof.map((proof) => (
            <span key={proof} className="px-3 py-2 rounded-full border border-emerald-300/18 bg-emerald-300/8 text-[10px] uppercase tracking-widest font-bold text-emerald-100/85">
              {proof}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export function Projects() {
  const { language } = useLanguage();
  const tp = t[language].projects;
  useSectionNarrator("projects");

  return (
    <section id="projects" className="relative py-16 md:py-28 px-4 sm:px-6 section-surface section-divider">
      <div className="max-w-7xl mx-auto flex flex-col gap-14 sm:gap-24 md:gap-32">
        <div className="w-full max-w-3xl">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-normal mb-3 sm:mb-4 flex items-center gap-4">
            <span className="w-12 h-px bg-sky-500 opacity-50 hidden sm:block shadow-[0_0_10px_rgba(14,165,233,0.5)]" />
            {tp.title1} <span className="font-serif italic text-ocean-light px-1 font-normal">{tp.title2}</span>
          </h2>
          <p className="text-sm sm:text-base text-white/58 font-light leading-relaxed max-w-2xl">
            {tp.subtitle}
          </p>
        </div>

        {tp.list.map((project: Project, idx: number) => (
          <ProjectCard key={project.title} project={project} index={idx} languageDict={tp} />
        ))}
      </div>
    </section>
  );
}
