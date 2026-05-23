import React from 'react';

export default function StatusBar({ stats }) {
  return (
    <footer className="h-8 bg-brand-dark-slate border-t border-gray-800 flex items-center justify-between px-6 text-[10px] text-gray-400 font-accent shrink-0 print:hidden z-10">
      <div className="flex items-center gap-5">
        <span>Words: <strong className="text-brand-light-green mono-accent">{stats.words}</strong></span>
        <span>Characters: <strong className="text-brand-light-green mono-accent">{stats.chars}</strong></span>
        <span>Est. Read Time: <strong className="text-brand-light-green mono-accent">{stats.readTime} min</strong></span>
      </div>
      <div className="flex items-center gap-1.5">
        <span className="w-1.5 h-1.5 rounded-full bg-brand-light-green animate-pulse"></span>
        <span>Workspace: <strong className="text-gray-300 uppercase tracking-wider">CodeCloverStudio Document Hub</strong></span>
      </div>
    </footer>
  );
}
