import { createContext, useContext, useState, useRef, useCallback, ReactNode } from "react";

type NarratorState = "idle" | "loading" | "playing" | "paused";

interface NarratorContextType {
  state: NarratorState;
  isMuted: boolean;
  isEnabled: boolean;
  currentSection: string | null;
  toggleMute: () => void;
  toggleEnabled: () => void;
  pause: () => void;
  resume: () => void;
  stop: () => void;
  playSection: (sectionId: string, text: string) => void;
  analyserNode: AnalyserNode | null;
}

const NarratorContext = createContext<NarratorContextType | undefined>(undefined);

const ELEVENLABS_API_KEY = import.meta.env.VITE_ELEVENLABS_API_KEY || "";
const VOICE_ID = import.meta.env.VITE_ELEVENLABS_VOICE_ID || "JBFqnCBsd6RMkjVDRZzb";

export function NarratorProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<NarratorState>("idle");
  const [isMuted, setIsMuted] = useState(false);
  const [isEnabled, setIsEnabled] = useState(false);
  const [currentSection, setCurrentSection] = useState<string | null>(null);
  const [analyserNode, setAnalyserNode] = useState<AnalyserNode | null>(null);

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const audioContextRef = useRef<AudioContext | null>(null);
  const sourceNodeRef = useRef<MediaElementAudioSourceNode | null>(null);
  const playedSectionsRef = useRef<Set<string>>(new Set());
  const abortControllerRef = useRef<AbortController | null>(null);

  const setupAudioContext = useCallback((audio: HTMLAudioElement) => {
    if (audioContextRef.current) return;

    const ctx = new AudioContext();
    const source = ctx.createMediaElementSource(audio);
    const analyser = ctx.createAnalyser();
    analyser.fftSize = 256;
    analyser.smoothingTimeConstant = 0.8;

    source.connect(analyser);
    analyser.connect(ctx.destination);

    audioContextRef.current = ctx;
    sourceNodeRef.current = source;
    setAnalyserNode(analyser);
  }, []);

  const stop = useCallback(() => {
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
      abortControllerRef.current = null;
    }
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.src = "";
    }
    setState("idle");
    setCurrentSection(null);
  }, []);

  const pause = useCallback(() => {
    if (audioRef.current && state === "playing") {
      audioRef.current.pause();
      setState("paused");
    }
  }, [state]);

  const resume = useCallback(() => {
    if (audioRef.current && state === "paused") {
      audioRef.current.play();
      setState("playing");
    }
  }, [state]);

  const toggleMute = useCallback(() => {
    setIsMuted((prev) => {
      if (audioRef.current) {
        audioRef.current.muted = !prev;
      }
      return !prev;
    });
  }, []);

  const toggleEnabled = useCallback(() => {
    setIsEnabled((prev) => {
      if (prev) {
        stop();
      } else {
        playedSectionsRef.current.clear();
      }
      return !prev;
    });
  }, [stop]);

  const playSection = useCallback(
    async (sectionId: string, text: string) => {
      if (!isEnabled || playedSectionsRef.current.has(sectionId)) return;
      if (state === "playing" || state === "loading") return;

      if (!ELEVENLABS_API_KEY) {
        console.warn("[Narrator] No ElevenLabs API key found. Set VITE_ELEVENLABS_API_KEY in .env");
        return;
      }

      playedSectionsRef.current.add(sectionId);
      setCurrentSection(sectionId);
      setState("loading");

      try {
        const controller = new AbortController();
        abortControllerRef.current = controller;

        const response = await fetch(
          `https://api.elevenlabs.io/v1/text-to-speech/${VOICE_ID}`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "xi-api-key": ELEVENLABS_API_KEY,
              "Accept": "audio/mpeg",
            },
            body: JSON.stringify({
              text,
              model_id: "eleven_multilingual_v2",
              voice_settings: {
                stability: 0.5,
                similarity_boost: 0.75,
                style: 0.35,
                use_speaker_boost: true,
              },
            }),
            signal: controller.signal,
          }
        );

        if (!response.ok) {
          const errorBody = await response.text().catch(() => "");
          console.error(`[Narrator] API ${response.status}:`, errorBody);
          throw new Error(`ElevenLabs API error: ${response.status}`);
        }

        const blob = await response.blob();
        const url = URL.createObjectURL(blob);

        if (!audioRef.current) {
          audioRef.current = new Audio();
          audioRef.current.crossOrigin = "anonymous";
        }

        const audio = audioRef.current;
        audio.src = url;
        audio.muted = isMuted;

        setupAudioContext(audio);

        if (audioContextRef.current?.state === "suspended") {
          await audioContextRef.current.resume();
        }

        audio.onended = () => {
          setState("idle");
          setCurrentSection(null);
          URL.revokeObjectURL(url);
        };

        audio.onerror = () => {
          setState("idle");
          setCurrentSection(null);
          URL.revokeObjectURL(url);
        };

        await audio.play();
        setState("playing");
      } catch (err: unknown) {
        if (err instanceof Error && err.name === "AbortError") return;
        console.error("[Narrator] Playback error:", err);
        setState("idle");
        setCurrentSection(null);
      }
    },
    [isEnabled, isMuted, state, setupAudioContext]
  );

  return (
    <NarratorContext.Provider
      value={{
        state,
        isMuted,
        isEnabled,
        currentSection,
        toggleMute,
        toggleEnabled,
        pause,
        resume,
        stop,
        playSection,
        analyserNode,
      }}
    >
      {children}
    </NarratorContext.Provider>
  );
}

export function useNarrator() {
  const context = useContext(NarratorContext);
  if (!context) {
    throw new Error("useNarrator must be used within a NarratorProvider");
  }
  return context;
}
