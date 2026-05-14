import { useRef, useEffect, useCallback, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Volume2, VolumeX, Pause, Play, Power, PowerOff, Mic } from "lucide-react";
import { useNarrator } from "../context/NarratorContext";
import { useLanguage } from "../context/LanguageContext";

export function NarratorWidget() {
  const {
    state,
    isMuted,
    isEnabled,
    currentSection,
    toggleMute,
    toggleEnabled,
    pause,
    resume,
    analyserNode,
  } = useNarrator();
  const { language } = useLanguage();

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>(0);
  const [isExpanded, setIsExpanded] = useState(false);

  const drawWaveform = useCallback(() => {
    const canvas = canvasRef.current;
    const analyser = analyserNode;
    if (!canvas || !analyser) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const bufferLength = analyser.frequencyBinCount;
    const dataArray = new Uint8Array(bufferLength);

    const draw = () => {
      animationRef.current = requestAnimationFrame(draw);
      analyser.getByteFrequencyData(dataArray);

      const { width, height } = canvas;
      ctx.clearRect(0, 0, width, height);

      const barCount = 24;
      const barWidth = width / barCount - 1.5;
      const step = Math.floor(bufferLength / barCount);

      for (let i = 0; i < barCount; i++) {
        const value = dataArray[i * step];
        const barHeight = (value / 255) * height * 0.85;
        const x = i * (barWidth + 1.5);
        const y = height - barHeight;

        const gradient = ctx.createLinearGradient(x, y, x, height);
        gradient.addColorStop(0, "rgba(56, 189, 248, 0.9)");
        gradient.addColorStop(1, "rgba(14, 165, 233, 0.3)");

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.roundRect(x, y, barWidth, barHeight, 1.5);
        ctx.fill();
      }
    };

    draw();
  }, [analyserNode]);

  useEffect(() => {
    if (state === "playing" && analyserNode) {
      drawWaveform();
    } else {
      cancelAnimationFrame(animationRef.current);
    }

    return () => cancelAnimationFrame(animationRef.current);
  }, [state, analyserNode, drawWaveform]);

  const isActive = state === "playing" || state === "loading" || state === "paused";

  const sectionLabels: Record<string, { EN: string; ES: string }> = {
    hero: { EN: "Intro", ES: "Intro" },
    about: { EN: "About Me", ES: "Sobre Mí" },
    stack: { EN: "Tech Stack", ES: "Stack" },
    projects: { EN: "Projects", ES: "Proyectos" },
    experience: { EN: "Experience", ES: "Experiencia" },
    contact: { EN: "Contact", ES: "Contacto" },
  };

  const handleMainClick = () => {
    if (isExpanded) {
      setIsExpanded(false);
    } else {
      if (!isEnabled) {
        toggleEnabled();
      }
      setIsExpanded(true);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.6, delay: 2, ease: "easeOut" }}
      className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2"
    >
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="flex flex-col gap-2 p-3 rounded-xl border border-white/12 bg-ocean-950/90 backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.5)]"
          >
            {isActive && (
              <div className="w-48 h-10 rounded-lg overflow-hidden bg-white/5 border border-white/8">
                <canvas
                  ref={canvasRef}
                  width={192}
                  height={40}
                  className="w-full h-full"
                />
              </div>
            )}

            {currentSection && (
              <div className="flex items-center gap-2 px-2">
                <div className="w-1.5 h-1.5 rounded-full bg-ocean-light shadow-[0_0_6px_#38bdf8] animate-pulse" />
                <span className="text-[9px] uppercase tracking-[0.2em] font-bold text-white/60">
                  {sectionLabels[currentSection]?.[language] ?? currentSection}
                </span>
              </div>
            )}

            <div className="flex items-center gap-1.5">
              {isActive && (
                <button
                  onClick={state === "playing" ? pause : resume}
                  className="interactive w-8 h-8 flex items-center justify-center rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 transition-colors"
                  aria-label={state === "playing" ? "Pause narration" : "Resume narration"}
                >
                  {state === "playing" ? (
                    <Pause className="w-3.5 h-3.5 text-ocean-light" />
                  ) : (
                    <Play className="w-3.5 h-3.5 text-ocean-light" />
                  )}
                </button>
              )}

              <button
                onClick={toggleMute}
                className="interactive w-8 h-8 flex items-center justify-center rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 transition-colors"
                aria-label={isMuted ? "Unmute" : "Mute"}
              >
                {isMuted ? (
                  <VolumeX className="w-3.5 h-3.5 text-white/40" />
                ) : (
                  <Volume2 className="w-3.5 h-3.5 text-white/70" />
                )}
              </button>

              <button
                onClick={toggleEnabled}
                className={`interactive w-8 h-8 flex items-center justify-center rounded-lg border transition-colors ${
                  isEnabled
                    ? "border-ocean-light/30 bg-ocean-light/10 hover:bg-ocean-light/20"
                    : "border-white/10 bg-white/5 hover:bg-white/10"
                }`}
                aria-label={isEnabled ? "Disable narrator" : "Enable narrator"}
              >
                {isEnabled ? (
                  <Power className="w-3.5 h-3.5 text-ocean-light" />
                ) : (
                  <PowerOff className="w-3.5 h-3.5 text-white/30" />
                )}
              </button>
            </div>

            <div className="text-[8px] uppercase tracking-[0.15em] font-bold text-center px-2">
              {!isEnabled && (
                <span className="text-white/30">
                  {language === "ES" ? "Narrador desactivado" : "Narrator disabled"}
                </span>
              )}
              {isEnabled && state === "idle" && (
                <span className="text-white/30">
                  {language === "ES" ? "Scrolleá para escuchar" : "Scroll to hear narration"}
                </span>
              )}
              {state === "loading" && (
                <span className="text-ocean-light animate-pulse">
                  {language === "ES" ? "Cargando audio..." : "Loading audio..."}
                </span>
              )}
              {state === "playing" && (
                <span className="text-ocean-light">
                  {language === "ES" ? "Narrando..." : "Narrating..."}
                </span>
              )}
              {state === "paused" && (
                <span className="text-amber-300">
                  {language === "ES" ? "Pausado" : "Paused"}
                </span>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={handleMainClick}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={`interactive relative w-12 h-12 rounded-full flex items-center justify-center shadow-[0_8px_30px_rgba(0,0,0,0.4)] transition-all duration-300 ${
          isActive
            ? "bg-ocean-light/20 border-2 border-ocean-light/50 shadow-[0_0_20px_rgba(56,189,248,0.3)]"
            : isEnabled
            ? "bg-ocean-950/90 border border-white/15 backdrop-blur-xl hover:border-ocean-light/30"
            : "bg-ocean-950/70 border border-white/8 backdrop-blur-xl hover:border-ocean-light/20"
        }`}
        aria-label={isEnabled ? "Toggle narrator controls" : "Enable AI narrator"}
        aria-expanded={isExpanded}
      >
        {state === "playing" && (
          <>
            <motion.div
              className="absolute inset-0 rounded-full border border-ocean-light/40"
              animate={{ scale: [1, 1.5], opacity: [0.5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeOut" }}
            />
            <motion.div
              className="absolute inset-0 rounded-full border border-ocean-light/20"
              animate={{ scale: [1, 1.8], opacity: [0.3, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeOut", delay: 0.3 }}
            />
          </>
        )}

        {state === "loading" && (
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-ocean-light/30 border-t-ocean-light"
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          />
        )}

        {!isEnabled && !isExpanded && (
          <motion.div
            className="absolute inset-0 rounded-full border border-white/15"
            animate={{ scale: [1, 1.2], opacity: [0.3, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeOut", repeatDelay: 3 }}
          />
        )}

        <Mic
          className={`w-5 h-5 transition-colors ${
            isActive
              ? "text-ocean-light"
              : isEnabled
              ? "text-white/60"
              : "text-white/35"
          }`}
        />
      </motion.button>
    </motion.div>
  );
}
