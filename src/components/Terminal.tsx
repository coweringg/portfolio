import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Terminal as TerminalIcon } from 'lucide-react';
import confetti from 'canvas-confetti';
import { useLanguage } from '../context/LanguageContext';
import { t } from '../translations';

interface HistoryItem {
  command: string;
  output: React.ReactNode;
}

export function Terminal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const { language } = useLanguage();
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<HistoryItem[]>([]);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const ts = t[language];

  useEffect(() => {
    setHistory([]);
    setInput('');
  }, [language]);

  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus();
      if (history.length === 0) {
        setHistory([{
          command: '',
          output: (
            <div className="text-ocean-light/80 mb-4">
              <p className="font-bold text-xl mb-1">{ts.terminal.welcome}</p>
              <p className="text-sm">{ts.terminal.help_hint}</p>
            </div>
          )
        }]);
      }
    }
  }, [isOpen, ts]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [history]);

  const handleCommand = (fullCmd: string) => {
    const parts = fullCmd.split('&&').map(p => p.trim());
    
    parts.forEach((cmdLine, index) => {
      const args = cmdLine.split(' ');
      const mainCmd = args[0].toLowerCase();
      let output: React.ReactNode = '';

      switch (mainCmd) {
        case 'help':
          output = (
            <div className="grid grid-cols-1 gap-2 mt-2">
              <p><span className="text-ocean-light font-bold w-24 inline-block">help</span> {ts.terminal.help.help}</p>
              <p><span className="text-ocean-light font-bold w-24 inline-block">whoami</span> {ts.terminal.help.whoami}</p>
              <p><span className="text-ocean-light font-bold w-24 inline-block">ls</span> {ts.terminal.help.ls}</p>
              <p><span className="text-ocean-light font-bold w-24 inline-block">cat skills</span> {ts.terminal.help.cat}</p>
              <p><span className="text-ocean-light font-bold w-24 inline-block">clear</span> {ts.terminal.help.clear}</p>
              <p><span className="text-ocean-light font-bold w-24 inline-block">sudo hire</span> {ts.terminal.help.hire}</p>
              <p><span className="text-ocean-light font-bold w-24 inline-block">exit</span> {ts.terminal.help.exit}</p>
            </div>
          );
          break;

        case 'whoami':
          output = (
            <div className="mt-2 space-y-4 max-w-2xl">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-ocean-light/20 flex items-center justify-center border border-ocean-light/30 text-2xl">👨‍💻</div>
                <div>
                  <p className="text-white font-bold text-xl">Gonzalo Mendez</p>
                  <p className="text-ocean-light text-sm uppercase tracking-widest">{ts.hero.role} {ts.hero.role === 'Full Stack' || ts.hero.role === 'Desarrollador' ? 'Developer' : ''}</p>
                </div>
              </div>
              <div className="space-y-2 border-l-2 border-white/10 pl-4 py-1">
                <p className="text-white/80 italic">"{ts.about.p1}"</p>
              </div>
            </div>
          );
          break;

        case 'ls':
          output = (
            <div className="mt-2 space-y-4">
              {ts.projects.list.map((p: any) => (
                <div key={p.title} className="border-l-2 border-ocean-light/30 pl-4 py-1">
                  <div className="flex items-center gap-2">
                    <span className="text-ocean-light font-bold">{p.title}</span>
                    <span className="text-[10px] text-white/40 uppercase tracking-tighter">[{p.status}]</span>
                  </div>
                  <p className="text-white/70 text-sm mt-1">{p.description}</p>
                </div>
              ))}
            </div>
          );
          break;

        case 'cd':
          if (args[1] === 'projects') {
            output = <p className="text-white/50 italic mt-1">{language === 'EN' ? 'Entered directory: /projects' : 'Entrando al directorio: /projects'}</p>;
          } else if (!args[1] || args[1] === '~' || args[1] === '..') {
            output = <p className="text-white/50 italic mt-1">{language === 'EN' ? 'Returned to root: ~' : 'Volviendo al inicio: ~'}</p>;
          } else {
            output = <p className="text-red-400 mt-1">{language === 'EN' ? 'Directory not found: ' : 'Directorio no encontrado: '}{args[1]}</p>;
          }
          break;

        case 'cat':
          const target = args[1]?.toLowerCase();
          if (target === 'skills' || target === 'skills.txt') {
            output = (
              <div className="mt-2 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
                {ts.stack.categories.map((cat: any) => (
                  <div key={cat.title}>
                    <p className="text-ocean-light font-bold mb-2 uppercase tracking-[0.2em] text-[10px] border-b border-ocean-light/20 pb-1">{cat.title}</p>
                    <div className="flex flex-wrap gap-x-4 gap-y-1">
                      {cat.items.map((item: any) => (
                        <div key={item.name} className="text-sm flex items-center gap-2">
                          <span className="text-white/90">{item.name}</span>
                          <span className="text-[9px] text-white/30 uppercase">{item.level}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            );
          } else {
            output = <p className="text-red-400 mt-1">{language === 'EN' ? 'File not found: ' : 'Archivo no encontrado: '}{args[1] || 'undefined'}</p>;
          }
          break;

        case 'clear':
          setHistory([]);
          setInput('');
          return;

        case 'exit':
        case 'close':
          onClose();
          return;

        case 'sudo':
          if (args[1] === 'hire') {
            confetti({
              particleCount: 150,
              spread: 70,
              origin: { y: 0.6 },
              colors: ['#38bdf8', '#0ea5e3', '#ffffff']
            });
            output = (
              <div className="mt-4 p-6 border border-ocean-light/30 bg-ocean-light/5 rounded-xl text-center max-w-lg mx-auto">
                <p className="text-2xl font-black text-white mb-2 uppercase tracking-tighter italic">{ts.terminal.hire.protocol}</p>
                <p className="text-white/70 mb-6 text-sm">{ts.terminal.hire.unlocked}</p>
                <button 
                  onClick={() => {
                    window.location.href = '#contact';
                    onClose();
                  }}
                  className="px-8 py-3 bg-ocean-light text-ocean-950 font-bold rounded-full hover:scale-105 transition-all shadow-[0_0_20px_rgba(56,189,248,0.4)]"
                >
                  {ts.terminal.hire.cta}
                </button>
              </div>
            );
          } else {
            output = <p className="text-red-400 mt-1">{language === 'EN' ? 'Root access required for: ' : 'Acceso root requerido para: '}{args[1]}</p>;
          }
          break;

        case '':
          return;

        default:
          output = (
            <p className="text-red-400 mt-1">
              {language === 'EN' ? 'Command not found: ' : 'Comando no encontrado: '}<span className="font-bold">{mainCmd}</span>. 
              {language === 'EN' ? "Type 'help' for assistance." : "Escribí 'help' para ayuda."}
            </p>
          );
      }

      setHistory(prev => [...prev, { command: index === 0 ? fullCmd : '', output }]);
    });
    
    setInput('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleCommand(input);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-100 flex items-center justify-center p-4 md:p-10 backdrop-blur-md bg-ocean-950/40"
          onClick={(e) => e.target === e.currentTarget && onClose()}
        >
          <motion.div
            initial={{ scale: 0.95, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.95, y: 20 }}
            className="w-full max-w-5xl h-[80vh] bg-ocean-950/90 border border-white/10 rounded-xl overflow-hidden shadow-[0_0_80px_rgba(0,0,0,0.8)] flex flex-col relative"
          >
            <div className="flex items-center justify-between px-4 py-3 bg-white/5 border-b border-white/5 select-none">
              <div className="flex items-center gap-3">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/50" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/50" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/50" />
                </div>
                <div className="flex items-center gap-2 text-white/40 text-[10px] uppercase tracking-[0.2em] font-bold ml-2">
                  <TerminalIcon className="w-3 h-3" />
                  gonzalo_mendez — terminal
                </div>
              </div>
              <button 
                onClick={onClose}
                className="p-1 hover:bg-white/10 rounded-md transition-colors text-white/40 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="absolute inset-0 pointer-events-none z-10 opacity-[0.03] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-size-[100%_2px,3px_100%]" />

            <div 
              ref={scrollRef}
              className="flex-1 overflow-y-auto p-4 md:p-6 font-mono text-sm md:text-base leading-relaxed scrollbar-thin scrollbar-thumb-white/10"
              onClick={() => inputRef.current?.focus()}
            >
              {history.map((item, i) => (
                <div key={i} className="mb-6 last:mb-2">
                  {item.command && (
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-emerald-400 font-bold">➜</span>
                      <span className="text-ocean-light font-bold">~</span>
                      <span className="text-white">{item.command}</span>
                    </div>
                  )}
                  <div className="text-white/90">
                    {item.output}
                  </div>
                </div>
              ))}

              <form onSubmit={handleSubmit} className="flex items-center gap-2 mt-4">
                <span className="text-emerald-400 font-bold shrink-0">➜</span>
                <span className="text-ocean-light font-bold shrink-0">~</span>
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  className="flex-1 bg-transparent border-none outline-none text-white caret-ocean-light selection:bg-ocean-light/30"
                  autoFocus
                  autoComplete="off"
                  autoCorrect="off"
                  spellCheck="false"
                />
              </form>
            </div>

            <div className="px-4 py-2 bg-white/5 border-t border-white/5 text-[9px] text-white/20 uppercase tracking-widest flex justify-between">
              <span>{ts.terminal.ready}</span>
              <span>UTF-8 · {ts.terminal.session}</span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
