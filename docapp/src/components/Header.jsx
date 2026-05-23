import React from 'react';
import { 
  RotateCcw,
  Download,
  FileSignature,
  FileText,
  Receipt,
  Briefcase,
  Lock,
  ClipboardList,
  FileEdit
} from 'lucide-react';

// Central configuration for document templates to make extending/editing templates easy for anyone
const DOCUMENTS_CONFIG = [
  { id: 'onboarding', label: 'Agreement', icon: FileSignature },
  { id: 'letterhead', label: 'Letterhead', icon: FileText },
  { id: 'invoice', label: 'Invoice', icon: Receipt },
  { id: 'proposal', label: 'Proposal', icon: Briefcase },
  { id: 'nda', label: 'NDA', icon: Lock },
  { id: 'sow', label: 'SOW', icon: ClipboardList },
  { id: 'changeorder', label: 'Change Order', icon: FileEdit },
];

export default function Header({ activeDoc, onDocChange, onReset, onExportPdf, onExportWord }) {
  return (
    <header className="h-16 bg-brand-dark-slate flex items-center justify-between px-6 shrink-0 border-b border-gray-800/80 z-10 print:hidden shadow-md">
      <div className="flex items-center gap-6">
        <div className="font-primary font-bold text-base tracking-widest text-white">
          CODECLOVER<span className="text-brand-light-green font-extrabold text-glow">STUDIO</span>
        </div>
        
        {/* Document Selector Tabs dynamically mapped from config */}
        <div className="flex bg-black/60 p-1.5 rounded-xl border border-gray-800/60 gap-1 overflow-x-auto max-w-[580px] font-accent">
          {DOCUMENTS_CONFIG.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => onDocChange(id)}
              className={`px-3 py-1.5 rounded-lg text-[11px] font-bold transition-all duration-200 shrink-0 flex items-center gap-1.5 border cursor-pointer ${
                activeDoc === id
                  ? 'bg-brand-dark-green text-brand-light-green shadow-[0_0_15px_rgba(46,255,156,0.12)] border-brand-light-green/20'
                  : 'text-gray-400 hover:text-white border-transparent hover:bg-gray-900/40'
              }`}
            >
              <Icon size={13} />
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* Action Controls */}
      <div className="flex items-center gap-3">
        <button 
          onClick={onReset}
          className="p-2 text-gray-400 hover:text-white hover:bg-gray-800/80 rounded-lg transition-all duration-200 hover:rotate-180 cursor-pointer"
          title="Reset to default template"
        >
          <RotateCcw size={16} />
        </button>
        <button 
          onClick={onExportPdf}
          className="px-3.5 py-1.5 bg-black text-brand-light-green border border-brand-dark-green rounded-lg text-xs font-accent font-bold flex items-center gap-1.5 hover:bg-gray-900/80 transition-all duration-200 cursor-pointer shadow-sm hover:border-brand-light-green/40"
        >
          <Download size={13} />
          Export PDF
        </button>
        <button 
          onClick={onExportWord}
          className="px-3.5 py-1.5 bg-brand-dark-green text-white rounded-lg text-xs font-accent font-bold flex items-center gap-1.5 hover:bg-emerald-800 transition-all duration-200 cursor-pointer shadow-sm shadow-brand-dark-green/20"
        >
          <Download size={13} />
          Export Word (.doc)
        </button>
      </div>
    </header>
  );
}
