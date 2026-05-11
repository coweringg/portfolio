import { useScroll, useTransform, motion } from "motion/react";
import { useEffect, useMemo, useRef, useState } from "react";

export function Background() {
  const { scrollY, scrollYProgress } = useScroll();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [stackOffset, setStackOffset] = useState(1500);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.6;
    }
    
    const el = document.getElementById("stack");
    if (el) setStackOffset(el.offsetTop);
  }, []);

  const surfaceOpacity = useTransform(scrollY, [0, 400], [1, 0]);
  const underwaterOpacity = useTransform(scrollY, [0, 400], [0, 1]);
  
  const overlayOpacity = useTransform(
    scrollYProgress, 
    [0.15, 0.4, 1.0], 
    [0, 0.45, 0.92]
  );

  const videoObjectPosition = useTransform(
    scrollY,
    [stackOffset - 600, stackOffset - 50], 
    ["50% 0%", "50% 98%"]
  );

  const topShadowOpacity = useTransform(
    scrollY,
    [stackOffset - 500, stackOffset - 100],
    [0, 1]
  );

  const lightRaysOpacity = useTransform(scrollY, [0, 500], [0.35, 0]);

  const particles = useMemo(() => {
    return Array.from({ length: 18 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 1,
      blur: Math.random() * 2 + 1,
      duration: Math.random() * 20 + 10,
      delay: Math.random() * 5,
    }));
  }, []);

  return (
    <div className="fixed inset-0 w-full h-full -z-10 bg-ocean-950 pointer-events-none overflow-hidden">
      
      <motion.div className="absolute inset-0 z-0" style={{ opacity: lightRaysOpacity }}>
        <div className="absolute inset-0 opacity-40 mix-blend-screen" style={{ background: "radial-gradient(circle at 50% -20%, #00D4FF 0%, transparent 56%), radial-gradient(circle at 20% 80%, #005577 0%, transparent 38%)" }}></div>
        <div className="absolute inset-0 opacity-30" style={{ background: "linear-gradient(135deg, rgba(248,250,252,0.08), transparent 34%, rgba(125,211,172,0.055) 70%, rgba(167,139,250,0.05))" }}></div>
      </motion.div>

      <motion.div
        className="absolute inset-0 w-full h-full hidden md:block"
        style={{ opacity: underwaterOpacity }}
      >
        <div className="relative w-full h-full">
          <motion.video
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 min-w-full min-h-full w-auto h-auto object-cover pointer-events-none opacity-60 transition-all duration-700 ease-out"
            style={{ objectPosition: videoObjectPosition }}
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
          >
            <source src="/underwater.mp4" type="video/mp4" />
          </motion.video>
        </div>
      </motion.div>

      <motion.div 
        className="absolute inset-0 w-full h-full"
        style={{ opacity: surfaceOpacity }}
      >
        <div className="relative w-full h-full opacity-85">
          <video
            ref={videoRef}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 min-w-full min-h-full w-auto h-auto object-cover pointer-events-none saturate-110 contrast-110"
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
          >
            <source src="/surface.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-linear-to-b from-ocean-950/28 via-ocean-950/20 to-ocean-950/76 backdrop-blur-[1px]"></div>
        </div>
      </motion.div>

      <motion.div style={{ opacity: surfaceOpacity }} className="absolute inset-0 pointer-events-none z-30 overflow-hidden hidden md:block">
        {particles.map((p) => (
          <motion.div
            key={p.id}
            className="absolute rounded-full bg-white/22"
            style={{
              width: p.size,
              height: p.size,
              left: `${p.x}%`,
              top: `${p.y}%`,
              filter: `blur(${p.blur}px)`,
            }}
            animate={{
              y: ["0%", "-50%", "0%"],
              x: ["0%", "20%", "0%"],
              opacity: [0.1, 0.6, 0.1],
            }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              ease: "linear",
              delay: p.delay,
            }}
          />
        ))}
      </motion.div>

      <motion.div 
        className="absolute inset-0 bg-ocean-950 pointer-events-none"
        style={{ opacity: overlayOpacity }}
      />

      <motion.div 
        className="absolute inset-0 bg-linear-to-b from-ocean-950 via-ocean-950/40 to-transparent pointer-events-none"
        style={{ opacity: topShadowOpacity }}
      />
      
      <div className="absolute inset-0 block bg-[radial-gradient(circle_at_center,transparent_0%,rgba(2,12,27,0.68)_100%)] pointer-events-none mix-blend-multiply" />
    </div>
  );
}
