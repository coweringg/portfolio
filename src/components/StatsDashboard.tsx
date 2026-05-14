import { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { GitCommit, Cloud, Music, Wind, Droplets, MapPin } from 'lucide-react';

const GithubIcon = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);
import { useLanguage } from '../context/LanguageContext';
import { t } from '../translations';

interface StatsData {
  spotify: {
    active: boolean;
    song?: string;
    artist?: string;
    albumArt?: string;
    start?: number;
    end?: number;
  };
  github: {
    lastCommit: string;
    repo: string;
    message: string;
    branch: string;
  };
  weather: {
    temp: number;
    condition: string;
    feelsLike: number;
    humidity: number;
  };
}

export function StatsDashboard() {
  const { language } = useLanguage();
  const ts = t[language];
  const [stats, setStats] = useState<StatsData>({
    spotify: { active: false },
    github: { lastCommit: '...', repo: '...', message: '...', branch: '...' },
    weather: { temp: 22, condition: '...', feelsLike: 22, humidity: 50 }
  });

  const [progress, setProgress] = useState(0);
  const socketRef = useRef<WebSocket | null>(null);

  useEffect(() => {
    async function fetchStaticData() {
      try {
        const githubResponse = await fetch('https://api.github.com/users/coweringg/events/public').catch(() => null);
        const githubData = githubResponse ? await githubResponse.json() : [];
        
        const lastPush = githubData.find((event: any) => event.type === 'PushEvent');
        
        let commitMessage = 'Working on projects';
        let branchName = 'master';
        let repoName = 'portfolio';
        let commitDate = new Date().toISOString();

        if (lastPush) {
          repoName = lastPush.repo.name.split('/')[1];
          branchName = lastPush.payload.ref?.split('/').pop() || 'master';
          commitDate = lastPush.created_at;

          if (lastPush.payload.commits && lastPush.payload.commits.length > 0) {
            commitMessage = lastPush.payload.commits[lastPush.payload.commits.length - 1].message;
          } else {
            const commitResponse = await fetch(`https://api.github.com/repos/${lastPush.repo.name}/commits/${lastPush.payload.head}`).catch(() => null);
            const commitData = commitResponse ? await commitResponse.json() : null;
            if (commitData) {
              commitMessage = commitData.commit.message;
            }
          }
        }
        
        const weatherLang = language === 'ES' ? 'es' : 'en';
        const weatherResponse = await fetch(`https://wttr.in/Montevideo?format=j1&lang=${weatherLang}`).catch(() => null);
        const weatherData = weatherResponse ? await weatherResponse.json() : null;

        setStats(prev => ({
          ...prev,
          github: {
            lastCommit: new Date(commitDate).toLocaleDateString(language === 'ES' ? 'es-ES' : 'en-US'),
            repo: repoName,
            message: commitMessage,
            branch: branchName
          },
          weather: weatherData ? {
            temp: parseInt(weatherData.current_condition[0].temp_C),
            condition: language === 'ES' 
              ? weatherData.current_condition[0].lang_es?.[0]?.value || weatherData.current_condition[0].weatherDesc[0].value
              : weatherData.current_condition[0].weatherDesc[0].value,
            feelsLike: parseInt(weatherData.current_condition[0].FeelsLikeC),
            humidity: parseInt(weatherData.current_condition[0].humidity)
          } : { temp: 22, condition: language === 'ES' ? 'Despejado' : 'Clear', feelsLike: 22, humidity: 50 }
        }));
      } catch (error) {
        console.error("Static data error:", error);
      }
    }

    fetchStaticData();
    const interval = setInterval(fetchStaticData, 60000); 
    return () => clearInterval(interval);
  }, [language]);

  useEffect(() => {
    const connectWS = () => {
      const ws = new WebSocket('wss://api.lanyard.rest/socket');
      socketRef.current = ws;

      ws.onopen = () => {
        ws.send(JSON.stringify({
          op: 2,
          d: { subscribe_to_id: '535709575911964672' }
        }));
      };

      ws.onmessage = (event) => {
        const data = JSON.parse(event.data);

        if (data.op === 1) {
          setInterval(() => {
            if (ws.readyState === WebSocket.OPEN) {
              ws.send(JSON.stringify({ op: 3 }));
            }
          }, data.d.heartbeat_interval);
        }

        if (data.t === 'INIT_STATE' || data.t === 'PRESENCE_UPDATE') {
          const presence = data.d;
          const spotifyActivity = presence.activities?.find((a: any) => a.type === 2) || presence.spotify;
          const isListening = !!presence.listening_to_spotify;

          let spotify = isListening ? {
            active: true,
            song: spotifyActivity?.details || presence.spotify?.track || "Unknown Track",
            artist: spotifyActivity?.state || presence.spotify?.artist || "Unknown Artist",
            albumArt: presence.spotify?.album_art_url || (spotifyActivity?.assets?.large_image ? `https://i.scdn.co/image/${spotifyActivity.assets.large_image.split(':')[1]}` : ''),
            start: presence.spotify?.timestamps?.start || spotifyActivity?.timestamps?.start,
            end: presence.spotify?.timestamps?.end || spotifyActivity?.timestamps?.end
          } : { active: false };

          if (isListening) {
            localStorage.setItem('last_spotify_ws', JSON.stringify(spotify));
          } else {
            const saved = localStorage.getItem('last_spotify_ws');
            if (saved) {
              spotify = { ...JSON.parse(saved), active: false };
            }
          }

          setStats(prev => ({ ...prev, spotify }));
        }
      };

      ws.onclose = () => {
        setTimeout(connectWS, 5000);
      };
    };

    connectWS();
    return () => {
      if (socketRef.current) socketRef.current.close();
    };
  }, []);

  useEffect(() => {
    if (!stats.spotify.active || !stats.spotify.start || !stats.spotify.end) return;

    const updateProgress = () => {
      const now = Date.now();
      const total = stats.spotify.end! - stats.spotify.start!;
      const current = now - stats.spotify.start!;
      const percent = Math.min(100, Math.max(0, (current / total) * 100));
      setProgress(percent);
    };

    updateProgress();
    const interval = setInterval(updateProgress, 1000);
    return () => clearInterval(interval);
  }, [stats.spotify.start, stats.spotify.end, stats.spotify.active]);

  const formatTime = (ms: number) => {
    const totalSeconds = Math.floor(ms / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="w-full max-w-4xl mx-auto mt-16 mb-4 px-4">
      <div className="flex items-center gap-3 mb-16 justify-center">
        <div className="h-px flex-1 bg-linear-to-r from-transparent via-white/10 to-transparent" />
        <h3 className="text-[10px] uppercase tracking-[0.4em] font-black text-white/30 italic">{ts.contact.statsTitle}</h3>
        <div className="h-px flex-1 bg-linear-to-l from-transparent via-white/10 to-transparent" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
        <motion.div 
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="lg:col-span-6 glass-panel p-4 rounded-xl border-white/5 relative overflow-hidden group flex flex-col"
        >
          <div className="flex items-center justify-between mb-4">
             <div className="flex items-center gap-2">
                <Music className={`w-3.5 h-3.5 ${stats.spotify.active ? 'text-[#1DB954]' : 'text-white/20'}`} />
                <span className="text-[9px] uppercase tracking-[0.2em] font-bold text-white/40">
                  {stats.spotify.active 
                    ? (language === 'ES' ? 'Escuchando Spotify' : 'Listening to Spotify')
                    : (language === 'ES' ? 'Último escuchado' : 'Last played')}
                </span>
             </div>
             <div className="flex gap-1 h-2 items-end">
                {[0.6, 1.2, 0.8].map((delay, i) => (
                  <motion.span 
                    key={i}
                    animate={stats.spotify.active ? { height: [2, 8, 2] } : { height: 2 }}
                    transition={{ duration: delay, repeat: Infinity, ease: "easeInOut" }}
                    className="w-0.5 bg-emerald-400/60"
                  />
                ))}
             </div>
          </div>

          {stats.spotify.song ? (
            <div className="flex gap-4 items-center flex-1">
              <div className="relative shrink-0">
                <img 
                  src={stats.spotify.albumArt} 
                  alt="Album Art" 
                  loading="lazy"
                  className={`w-16 h-16 sm:w-20 sm:h-20 rounded-md shadow-lg border border-white/10 ${!stats.spotify.active ? 'grayscale opacity-50' : ''}`}
                />
                {stats.spotify.active && (
                  <div className="absolute -bottom-1.5 -right-1.5 w-6 h-6 bg-[#1DB954] rounded-full flex items-center justify-center border-2 border-ocean-950 shadow-lg">
                    <Music className="w-3 h-3 text-black" />
                  </div>
                )}
              </div>
              
              <div className="flex-1 min-w-0 flex flex-col justify-center">
                <h4 className={`text-[14px] sm:text-[16px] font-bold text-white leading-tight mb-0.5 drop-shadow-sm truncate ${!stats.spotify.active ? 'text-white/60' : ''}`}>
                  {stats.spotify.song}
                </h4>
                <p className="text-[11px] sm:text-[12px] text-white/60 mb-3 truncate">
                  {language === 'ES' ? 'de' : 'by'} {stats.spotify.artist}
                </p>
                
                {stats.spotify.active ? (
                  <div className="space-y-1.5 mt-2">
                    <div className="flex items-center justify-between text-[9px] font-mono text-white/40">
                      <span>{formatTime(Date.now() - (stats.spotify.start || 0))}</span>
                      <span>{formatTime((stats.spotify.end || 0) - (stats.spotify.start || 0))}</span>
                    </div>
                    <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: `${progress}%` }}
                        transition={{ type: "spring", bounce: 0, duration: 1 }}
                        className="h-full bg-[#1DB954] shadow-[0_0_8px_#1DB954]"
                      />
                    </div>
                  </div>
                ) : (
                  <div className="mt-2">
                    <span className="text-[9px] text-white/20 uppercase tracking-tighter">Disconnected</span>
                  </div>
                )}
              </div>
            </div>
          ) : (
            <div className="py-6 text-center">
               <p className="text-[10px] text-white/30 italic uppercase tracking-widest font-medium">
                 {language === 'ES' ? 'Sesión desconectada' : 'Session disconnected'}
               </p>
            </div>
          )}
        </motion.div>

        <motion.div 
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="lg:col-span-3 glass-panel p-4 rounded-xl border-white/5 flex flex-col group overflow-hidden"
        >
          <div className="flex items-center justify-between mb-4">
            <GithubIcon className="w-4 h-4 text-white/40" />
            <span className="text-[8px] uppercase tracking-widest text-white/30 font-bold">GitHub</span>
          </div>
          <div className="flex-1 flex flex-col justify-center">
            <div className="mb-3">
              <p className="text-[11px] font-bold text-white leading-tight mb-1 truncate">
                {stats.github.repo}
              </p>
              <div className="flex items-center gap-1.5 text-[9px] text-ocean-light/80 font-mono">
                <GitCommit className="w-3 h-3" />
                <span>{stats.github.branch}</span>
              </div>
            </div>
            <div className="p-2 rounded bg-white/5 border border-white/5 group-hover:border-white/10 transition-colors">
              <p className="text-[10px] text-white/80 italic leading-snug wrap-break-word line-clamp-5">
                "{stats.github.message}"
              </p>
            </div>
            <p className="text-[8px] text-white/30 mt-3 text-right uppercase tracking-tighter font-bold">
              {stats.github.lastCommit}
            </p>
          </div>
        </motion.div>

        <motion.div 
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="lg:col-span-3 glass-panel p-4 rounded-xl border-white/5 flex flex-col group overflow-hidden"
        >
          <div className="flex items-center justify-between mb-4">
            <Cloud className="w-4 h-4 text-sky-400" />
            <span className="text-[8px] uppercase tracking-widest text-white/30 font-bold">{language === 'ES' ? 'Clima' : 'Weather'}</span>
          </div>
          <div className="flex-1 flex flex-col justify-center">
            <div className="flex items-baseline gap-2 mb-1">
              <p className="text-2xl font-black text-white leading-none tracking-tighter">
                {stats.weather.temp}°
              </p>
              <div className="flex flex-col">
                <p className="text-[10px] text-white/80 font-bold leading-none capitalize truncate max-w-[80px]">
                  {stats.weather.condition}
                </p>
                <div className="flex items-center gap-1 text-[8px] text-white/40 mt-1">
                  <MapPin className="w-2 h-2" />
                  <span>Montevideo</span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2 mt-4 pt-3 border-t border-white/5">
              <div className="flex items-center gap-1.5">
                <Wind className="w-3 h-3 text-white/20" />
                <div className="flex flex-col">
                  <span className="text-[7px] text-white/30 uppercase leading-none">Feels</span>
                  <span className="text-[9px] text-white/80 font-bold leading-tight">{stats.weather.feelsLike}°C</span>
                </div>
              </div>
              <div className="flex items-center gap-1.5">
                <Droplets className="w-3 h-3 text-white/20" />
                <div className="flex flex-col">
                  <span className="text-[7px] text-white/30 uppercase leading-none">Humid</span>
                  <span className="text-[9px] text-white/80 font-bold leading-tight">{stats.weather.humidity}%</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
