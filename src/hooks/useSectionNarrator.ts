import { useEffect, useRef } from "react";
import { useNarrator } from "../context/NarratorContext";
import { useLanguage } from "../context/LanguageContext";
import { narratorScripts } from "../narratorScripts";

export function useSectionNarrator(sectionId: string, elementId?: string) {
  const { playSection, isEnabled } = useNarrator();
  const { language } = useLanguage();
  const hasTriggered = useRef(false);

  useEffect(() => {
    if (!isEnabled) {
      hasTriggered.current = false;
    }
  }, [isEnabled]);

  useEffect(() => {
    if (!isEnabled) return;

    const script = narratorScripts[sectionId];
    if (!script) return;

    const domId = elementId ?? sectionId;
    const element = document.getElementById(domId);
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting && !hasTriggered.current) {
          hasTriggered.current = true;
          const text = script[language];
          playSection(sectionId, text);
        }
      },
      {
        threshold: 0.4,
        rootMargin: "0px",
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [sectionId, elementId, language, playSection, isEnabled]);
}
