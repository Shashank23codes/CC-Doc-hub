
import { 
  FileSignature,
  FileText,
  Receipt,
  Briefcase,
  Lock,
  ClipboardList,
  FileEdit,
  ChevronLeft,
  ChevronRight,
  Search,
  RefreshCw,
  FolderOpen,
  Award
} from 'lucide-react';

const DOCUMENTS_CONFIG = [
  // Client Documents Group
  { id: 'onboarding', label: 'Agreement', icon: FileSignature, category: 'Contracts', group: 'Client Documents' },
  { id: 'letterhead', label: 'Letterhead', icon: FileText, category: 'Branding', group: 'Client Documents' },
  { id: 'invoice', label: 'Invoice', icon: Receipt, category: 'Billing', group: 'Client Documents' },
  { id: 'proposal', label: 'Proposal', icon: Briefcase, category: 'Sales', group: 'Client Documents' },
  { id: 'nda', label: 'NDA', icon: Lock, category: 'Contracts', group: 'Client Documents' },
  { id: 'sow', label: 'SOW', icon: ClipboardList, category: 'Sales', group: 'Client Documents' },
  { id: 'changeorder', label: 'Change Order', icon: FileEdit, category: 'Sales', group: 'Client Documents' },
  
  // Employee Documents Group
  { id: 'internship', label: 'Internship Cert.', icon: Award, category: 'Internships', group: 'Employee Documents' },
  { id: 'offerletter', label: 'Offer Letter', icon: FileSignature, category: 'Recruitment', group: 'Employee Documents' },
  { id: 'payslip', label: 'Payment Slip', icon: Receipt, category: 'Payroll', group: 'Employee Documents' },
  { id: 'experience', label: 'Experience Letter', icon: Briefcase, category: 'Termination', group: 'Employee Documents' },
  { id: 'lor', label: 'Recommendation', icon: FileText, category: 'Reference', group: 'Employee Documents' },
];

export default function Sidebar({ 
  activeDoc, 
  onDocChange, 
  documents, 
  sidebarCollapsed, 
  setSidebarCollapsed,
  searchTerm,
  setSearchTerm,
  onResetAll 
}) {

  // Extract word count from HTML content helper
  const getWordCount = (html) => {
    if (!html) return 0;
    const cleanHtml = html
      .replace(/<style([\s\S]*?)<\/style>/gi, '')
      .replace(/<script([\s\S]*?)<\/script>/gi, '');
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = cleanHtml;
    const text = tempDiv.innerText || tempDiv.textContent || '';
    const cleanText = text.trim().replace(/\s+/g, ' ');
    return cleanText ? cleanText.split(/\s+/).filter(w => w.length > 0).length : 0;
  };

  const filteredDocs = DOCUMENTS_CONFIG.filter(doc => 
    doc.label.toLowerCase().includes(searchTerm.toLowerCase()) ||
    doc.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <aside 
      className={`h-screen flex flex-col bg-brand-dark-slate border-r border-gray-800/80 transition-all duration-300 z-20 shrink-0 ${
        sidebarCollapsed ? 'w-16' : 'w-64'
      }`}
    >
      {/* Branding Header */}
      <div className="h-16 flex items-center justify-between px-4 shrink-0 border-b border-gray-800/80">
        {!sidebarCollapsed ? (
          <div className="font-primary font-bold text-sm tracking-wider text-white select-none">
            CODECLOVER<span className="text-brand-light-green font-extrabold text-glow">STUDIO</span>
          </div>
        ) : (
          <div className="mx-auto font-primary font-black text-lg text-brand-light-green text-glow select-none">
            CC
          </div>
        )}
        <button 
          onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
          className="p-1.5 rounded-lg text-gray-400 hover:text-white hover:bg-gray-800/50 cursor-pointer transition-colors duration-200"
        >
          {sidebarCollapsed ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
        </button>
      </div>

      {/* Search Bar */}
      {!sidebarCollapsed && (
        <div className="px-4 py-3 shrink-0">
          <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-2.5 text-gray-500 pointer-events-none">
              <Search size={14} />
            </span>
            <input 
              type="text" 
              placeholder="Search templates..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-8 pr-3 py-1.5 bg-black/45 border border-gray-800 hover:border-gray-750 focus:border-brand-dark-green rounded-lg text-xs text-gray-300 placeholder-gray-500 outline-none transition-all duration-200"
            />
          </div>
        </div>
      )}

      {/* Workspace Label */}
      {!sidebarCollapsed && (
        <div className="px-4 pt-2 pb-1 shrink-0 flex items-center gap-1.5 text-[10px] text-gray-500 font-accent uppercase tracking-widest font-semibold">
          <FolderOpen size={10} />
          <span>Documents Hub</span>
        </div>
      )}

      {/* Document Selection List grouped by Client / Employee */}
      <div className="flex-1 overflow-y-auto px-2 py-2 space-y-4">
        {['Client Documents', 'Employee Documents'].map(groupName => {
          const groupDocs = filteredDocs.filter(d => d.group === groupName);
          if (groupDocs.length === 0) return null;
          
          return (
            <div key={groupName} className="space-y-1">
              {!sidebarCollapsed ? (
                <div className="px-2.5 py-1 text-[10px] text-gray-500 font-accent uppercase tracking-wider font-bold border-b border-gray-800/40 mb-1 select-none">
                  {groupName}
                </div>
              ) : (
                <div className="h-px bg-gray-800/40 my-2" />
              )}
              
              {groupDocs.map((doc) => {
                const Icon = doc.icon;
                const isActive = activeDoc === doc.id;
                const wordCount = documents[doc.id] ? getWordCount(documents[doc.id]) : 0;

                return (
                  <button
                    key={doc.id}
                    onClick={() => onDocChange(doc.id)}
                    className={`w-full group flex items-center rounded-xl p-2.5 transition-all duration-200 cursor-pointer border text-left ${
                      isActive
                        ? 'bg-brand-dark-green/35 text-brand-light-green border-brand-light-green/20 shadow-[0_0_15px_rgba(46,255,156,0.06)]'
                        : 'text-gray-400 hover:text-white border-transparent hover:bg-gray-950/40'
                    }`}
                  >
                    <div className={`shrink-0 ${isActive ? 'text-brand-light-green' : 'text-gray-500 group-hover:text-gray-300'}`}>
                      <Icon size={18} />
                    </div>
                    
                    {!sidebarCollapsed && (
                      <div className="ml-3 flex-1 flex items-center justify-between overflow-hidden">
                        <div className="truncate">
                          <div className="text-[12px] font-semibold leading-none">{doc.label}</div>
                          <div className="text-[9px] text-gray-500 group-hover:text-gray-400 mt-0.5 leading-none">{doc.category}</div>
                        </div>
                        <span className={`text-[10px] font-accent px-1.5 py-0.5 rounded-md ${
                          isActive ? 'bg-brand-light-green/10 text-brand-light-green' : 'bg-black/30 text-gray-500'
                        }`}>
                          {wordCount}w
                        </span>
                      </div>
                    )}
                  </button>
                );
              })}
            </div>
          );
        })}

        {filteredDocs.length === 0 && !sidebarCollapsed && (
          <div className="text-center py-8 text-xs text-gray-600 font-accent">
            No templates match query.
          </div>
        )}
      </div>

      {/* Sidebar Footer with system status */}
      <div className="p-3 shrink-0 border-t border-gray-800/80 bg-black/20">
        {!sidebarCollapsed ? (
          <div className="space-y-2.5">
            <div className="flex items-center justify-between text-[10px] text-gray-500 font-accent">
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-light-green animate-pulse"></span>
                <span>Auto-save active</span>
              </span>
              <span className="text-gray-600">v1.2.0</span>
            </div>

            <button
              onClick={onResetAll}
              className="w-full flex items-center justify-center gap-2 py-1.5 px-3 border border-gray-800 hover:border-red-500/35 text-[10px] font-bold text-gray-400 hover:text-red-400 hover:bg-red-950/10 rounded-lg transition-all duration-200 cursor-pointer font-accent"
              title="Reset all documents in this workspace"
            >
              <RefreshCw size={11} className="transition-transform group-hover:rotate-180" />
              Reset All Drafts
            </button>
          </div>
        ) : (
          <div className="flex justify-center">
            <span className="w-2 h-2 rounded-full bg-brand-light-green animate-pulse" title="Auto-save Active"></span>
          </div>
        )}
      </div>
    </aside>
  );
}
