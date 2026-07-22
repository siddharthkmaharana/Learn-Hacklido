import { useEffect, useState } from 'react';

const lines = [
  { text: '$ nmap -sV target.local', color: 'text-hacklido-cyan' },
  { text: 'Scanning 192.168.1.0/24...', color: 'text-slate-400' },
  { text: 'PORT     STATE SERVICE  VERSION', color: 'text-slate-500' },
  { text: '22/tcp   open  ssh      OpenSSH 8.9', color: 'text-emerald' },
  { text: '80/tcp   open  http    nginx 1.24', color: 'text-emerald' },
  { text: '443/tcp  open  https   nginx 1.24', color: 'text-emerald' },
  { text: '$ echo "Flag captured: HTB{h4ckl1d0_r0ck5}"', color: 'text-hacklido-cyan' },
];

export default function AnimatedTerminal() {
  const [visibleLines, setVisibleLines] = useState([]);

  useEffect(() => {
    let timeouts = [];
    lines.forEach((_, i) => {
      timeouts.push(
        setTimeout(() => {
          setVisibleLines((prev) => [...prev, i]);
        }, 600 * (i + 1))
      );
    });
    const reset = setTimeout(() => setVisibleLines([]), 600 * (lines.length + 2));
    timeouts.push(reset);
    return () => timeouts.forEach(clearTimeout);
  }, []);

  return (
    <div className="glass-strong rounded-xl overflow-hidden shadow-2xl">
      {/* Header */}
      <div className="flex items-center gap-2 px-4 py-2.5 border-b border-white/5 bg-black/20">
        <div className="w-3 h-3 rounded-full bg-red-500/80" />
        <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
        <div className="w-3 h-3 rounded-full bg-green-500/80" />
        <span className="ml-2 text-xs font-mono text-slate-500">hacklido@playground:~</span>
      </div>
      {/* Body */}
      <div className="p-4 h-44 font-mono text-xs space-y-1.5 overflow-hidden">
        {visibleLines.map((idx) => (
          <div key={idx} className={lines[idx].color}>
            {lines[idx].text}
            {idx === visibleLines[visibleLines.length - 1] && (
              <span className="terminal-cursor inline-block w-2 h-3.5 bg-hacklido-cyan ml-1 align-middle" />
            )}
          </div>
        ))}
        {visibleLines.length === 0 && (
          <div className="text-slate-500">
            $ <span className="terminal-cursor inline-block w-2 h-3.5 bg-hacklido-cyan ml-1 align-middle" />
          </div>
        )}
      </div>
    </div>
  );
}