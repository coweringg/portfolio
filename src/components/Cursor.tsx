import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

export function Cursor() {
  const [isHovering, setIsHovering] = useState(false);
  const [isEnabled, setIsEnabled] = useState(false);
  
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  const springConfig = { damping: 25, stiffness: 400, mass: 0.5 };
  const smoothX = useSpring(cursorX, springConfig);
  const smoothY = useSpring(cursorY, springConfig);
  
  const glowSpringConfig = { damping: 40, stiffness: 200, mass: 1 };
  const glowX = useSpring(cursorX, glowSpringConfig);
  const glowY = useSpring(cursorY, glowSpringConfig);

  useEffect(() => {
    const finePointer = window.matchMedia("(pointer: fine)").matches;
    const desktopViewport = window.matchMedia("(min-width: 1024px)").matches;
    setIsEnabled(finePointer && desktopViewport);
  }, []);

  useEffect(() => {
    if (!isEnabled) return;

    const updateMousePosition = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName.toLowerCase() === "a" ||
        target.tagName.toLowerCase() === "button" ||
        target.closest("a") ||
        target.closest("button") ||
        target.classList.contains("interactive") ||
        target.closest(".interactive")
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", updateMousePosition);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [cursorX, cursorY, isEnabled]);

  useEffect(() => {
    if (!isEnabled) return;

    document.body.style.cursor = "none";
    const hideCursorStyles = document.createElement("style");
    hideCursorStyles.innerHTML = `
      * { cursor: none !important; }
    `;
    document.head.appendChild(hideCursorStyles);

    return () => {
      document.body.style.cursor = "auto";
      document.head.removeChild(hideCursorStyles);
    };
  }, [isEnabled]);

  if (!isEnabled) {
    return null;
  }

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-100 mix-blend-screen shadow-[0_0_10px_rgba(56,189,248,0.3)] border border-ocean-light/50 will-change-transform"
        style={{
          x: smoothX,
          y: smoothY,
          translateX: "-50%",
          translateY: "-50%"
        }}
        animate={{
          scale: isHovering ? 1.5 : 1,
          backgroundColor: isHovering ? "rgba(56, 189, 248, 0.1)" : "transparent",
          borderColor: isHovering ? "rgba(56, 189, 248, 1)" : "rgba(56, 189, 248, 0.5)",
        }}
        transition={{ duration: 0.2 }}
      />
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-ocean-glow rounded-full pointer-events-none z-100 mix-blend-screen shadow-[0_0_8px_#0ea5e9] will-change-transform"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%"
        }}
        animate={{
          scale: isHovering ? 0 : 1,
          opacity: isHovering ? 0 : 1,
        }}
        transition={{ duration: 0.15 }}
      />
      <motion.div
        className="fixed top-0 left-0 w-64 h-64 bg-ocean-light/10 rounded-full blur-3xl pointer-events-none z-90 will-change-transform"
        style={{
          x: glowX,
          y: glowY,
          translateX: "-50%",
          translateY: "-50%"
        }}
      />
    </>
  );
}
