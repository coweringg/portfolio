import { motion } from "motion/react";
import { BadgeCheck, Code2, Compass } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { t } from "../translations";

type Level = "production" | "project" | "upcoming";

const levelStyles: Record<Level, string> = {
  production: "border-emerald-300/20 bg-emerald-300/8 text-emerald-200",
  project: "border-ocean-light/20 bg-ocean-light/8 text-ocean-light",
  upcoming: "border-white/12 bg-white/5 text-white/55",
};

const levelIcons: Record<Level, typeof BadgeCheck> = {
  production: BadgeCheck,
  project: Code2,
  upcoming: Compass,
};

export function Stack() {
  const { language } = useLanguage();
  const ts = t[language].stack;

  return (
    <section id="stack" className="relative py-20 md:py-32 px-4 sm:px-6 flex flex-col items-center justify-center min-h-screen">
      <div className="max-w-6xl mx-auto z-10 relative">
        <div className="text-center mb-10 sm:mb-16 md:mb-20">
          <motion.h2
            initial={{ opacity: 1, y: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl font-black tracking-normal mb-4"
          >
            <span className="bg-clip-text text-transparent bg-linear-to-b from-white to-white/70">
              {ts.title1}
            </span>{" "}
            <span className="text-ocean-light text-glow font-serif italic font-normal py-1">
              {ts.title2}
            </span>
          </motion.h2>
          <p className="text-white/52 text-[11px] sm:text-sm md:text-base font-light tracking-[0.14em] sm:tracking-[0.18em] max-w-3xl mx-auto uppercase leading-relaxed">
            {ts.subtitle}
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-5 lg:gap-6">
          {ts.categories.map((category, categoryIndex) => (
            <div
              key={category.title}
              className="glass-panel glass-panel-hover rounded-lg p-6 flex flex-col min-h-[360px]"
            >
              <div className="pb-5 border-b border-white/8 relative overflow-hidden">
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-xl font-bold text-white">{category.title}</h3>
                  <span className={`text-[10px] font-bold tracking-[0.25em] ${categoryIndex === 0 ? "text-ocean-light/70" : categoryIndex === 1 ? "accent-reef" : "accent-violet"}`}>
                    0{categoryIndex + 1}
                  </span>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-white/55 font-light">
                  {category.description}
                </p>
                <motion.div
                  initial={{ left: "-33.3%" }}
                  animate={{ left: ["-33.3%", "100%"] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "linear",
                    delay: categoryIndex * 2,
                    repeatDelay: 4,
                  }}
                  className={`absolute bottom-0 w-1/3 h-px bg-linear-to-r from-transparent ${categoryIndex === 0 ? "via-ocean-light" : categoryIndex === 1 ? "via-emerald-300" : "via-violet-300"} to-transparent`}
                />
              </div>

              <div className="mt-5 grid gap-3">
                {category.items.map((tech) => {
                  const level = tech.level as Level;
                  const LevelIcon = levelIcons[level];

                  return (
                    <div
                      key={tech.name}
                      className="flex items-center justify-between gap-3 rounded-lg border border-white/8 bg-white/[0.035] px-4 py-3 hover:bg-white/6 transition-colors"
                    >
                      <span className="text-sm font-medium text-white/82">{tech.name}</span>
                      <span
                        className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.14em] ${levelStyles[level]}`}
                      >
                        <LevelIcon className="w-3 h-3" />
                        {ts.levels[level]}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
