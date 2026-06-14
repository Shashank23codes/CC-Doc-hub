import { 
  RotateCcw,
  Download,
  ZoomIn,
  ZoomOut,
  PanelLeft,
  PanelRight,
  Maximize2,
  Minimize2,
  Grid
} from 'lucide-react';

const DOCUMENTS_LABELS = {
  onboarding: 'Agreement/Onboarding',
  letterhead: 'Letterhead Template',
  invoice: 'Billing Invoice',
  proposal: 'Project Proposal',
  nda: 'Non-Disclosure Agreement',
  sow: 'Statement of Work',
  changeorder: 'Change Order Request',
  internship: 'Internship Certificate',
  offerletter: 'Offer Letter',
  payslip: 'Payment Slip',
  experience: 'Experience Letter',
  lor: 'Letter of Recommendation'
};

export default function Header({ 
  activeDoc, 
  onReset, 
  onExportPdf, 
  onExportWord,
  sidebarCollapsed,
  setSidebarCollapsed,
  rightPanelOpen,
  setRightPanelOpen,
  focusMode,
  setFocusMode,
  zoomLevel,
  setZoomLevel,
  canvasTheme,
  setCanvasTheme,
  showPrintGuides,
  setShowPrintGuides
}) {

  const handleZoom = (direction) => {
    if (direction === 'in') {
      setZoomLevel(prev => Math.min(1.5, +(prev + 0.1).toFixed(1)));
    } else {
      setZoomLevel(prev => Math.max(0.5, +(prev - 0.1).toFixed(1)));
    }
  };

  return (
    <header className="h-16 bg-brand-dark-slate flex items-center justify-between px-6 shrink-0 border-b border-gray-800/80 z-10 print:hidden shadow-md font-sans select-none">
      {/* Left Area: Side Control & Doc Title */}
      <div className="flex items-center gap-4">
        {/* Sidebar Trigger */}
        <button 
          onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
          className={`p-2 rounded-lg cursor-pointer transition-colors duration-150 ${
            !sidebarCollapsed ? 'text-brand-light-green bg-brand-dark-green/20' : 'text-gray-400 hover:text-white hover:bg-gray-800/40'
          }`}
          title={sidebarCollapsed ? "Expand sidebar" : "Collapse sidebar"}
        >
          <PanelLeft size={16} />
        </button>

        <div className="h-5 w-px bg-gray-800"></div>

        {/* Title and Badge */}
        <div className="flex items-center gap-3">
          <h2 className="text-[13px] font-primary font-bold text-white tracking-wide uppercase">
            {DOCUMENTS_LABELS[activeDoc] || 'Active Document'}
          </h2>
          <span className="text-[9px] font-accent font-extrabold text-brand-light-green bg-brand-dark-green/20 border border-brand-light-green/20 px-1.5 py-0.5 rounded-sm uppercase tracking-wider text-glow animate-pulse">
            Draft
          </span>
        </div>
      </div>

      {/* Middle Area: Workspace & Styling Controllers (Hidden in focus mode if desired, or compact) */}
      {!focusMode && (
        <div className="hidden md:flex items-center bg-black/40 px-3.5 py-1.5 rounded-xl border border-gray-800/80 gap-5 font-accent text-xs">
          {/* Zoom controls */}
          <div className="flex items-center gap-2">
            <button 
              onClick={() => handleZoom('out')} 
              className="p-1 text-gray-500 hover:text-white rounded hover:bg-gray-800/60 cursor-pointer transition-colors"
              title="Zoom Out"
            >
              <ZoomOut size={13} />
            </button>
            <span className="text-[10px] text-gray-300 font-bold w-10 text-center select-none">
              {Math.round(zoomLevel * 100)}%
            </span>
            <button 
              onClick={() => handleZoom('in')} 
              className="p-1 text-gray-500 hover:text-white rounded hover:bg-gray-800/60 cursor-pointer transition-colors"
              title="Zoom In"
            >
              <ZoomIn size={13} />
            </button>
          </div>

          <div className="w-px h-4 bg-gray-800"></div>

          {/* Canvas Themes */}
          <div className="flex items-center gap-1.5">
            <span className="text-[9px] text-gray-500 font-bold uppercase tracking-wider">Canvas:</span>
            <div className="flex items-center gap-1">
              {[
                { name: 'neutral', hex: '#EAEDEE', title: 'Light Neutral' },
                { name: 'slate', hex: '#475569', title: 'Muted Slate' },
                { name: 'warm', hex: '#F5F5F4', title: 'Premium Warm' },
                { name: 'dark', hex: '#0F172A', title: 'Stealth Dark' },
              ].map((theme) => (
                <button
                  key={theme.name}
                  onClick={() => setCanvasTheme(theme.name)}
                  className={`w-3.5 h-3.5 rounded-full border cursor-pointer hover:scale-110 transition-all ${
                    canvasTheme === theme.name 
                      ? 'border-brand-light-green scale-110 ring-1 ring-brand-light-green/30' 
                      : 'border-transparent'
                  }`}
                  style={{ backgroundColor: theme.hex }}
                  title={theme.title}
                />
              ))}
            </div>
          </div>

          <div className="w-px h-4 bg-gray-800"></div>

          {/* Print Guides Toggle */}
          <button 
            onClick={() => setShowPrintGuides(!showPrintGuides)}
            className={`flex items-center gap-1 text-[10px] uppercase font-bold tracking-wider cursor-pointer transition-colors ${
              showPrintGuides ? 'text-brand-light-green' : 'text-gray-500 hover:text-gray-300'
            }`}
            title="Toggle print layout guides"
          >
            <Grid size={11} />
            <span>Guides</span>
          </button>
        </div>
      )}

      {/* Right Area: Action Panel */}
      <div className="flex items-center gap-3">
        {/* Reset Document */}
        <button 
          onClick={onReset}
          className="p-2 text-gray-400 hover:text-white hover:bg-gray-800/50 rounded-lg transition-all duration-200 hover:rotate-180 cursor-pointer"
          title="Reset document content"
        >
          <RotateCcw size={15} />
        </button>

        {/* Focus Mode Trigger */}
        <button 
          onClick={() => setFocusMode(!focusMode)}
          className={`p-2 rounded-lg cursor-pointer transition-colors duration-150 ${
            focusMode ? 'text-brand-light-green bg-brand-dark-green/20' : 'text-gray-400 hover:text-white hover:bg-gray-800/50'
          }`}
          title={focusMode ? "Exit Focus Mode" : "Enter Focus Mode"}
        >
          {focusMode ? <Minimize2 size={15} /> : <Maximize2 size={15} />}
        </button>

        <div className="h-5 w-px bg-gray-800"></div>

        {/* Export Buttons */}
        <div className="flex items-center gap-2">
          <button 
            onClick={onExportPdf}
            className="px-3 py-1.5 bg-black hover:bg-gray-950 text-brand-light-green border border-brand-dark-green rounded-lg text-[11px] font-accent font-bold flex items-center gap-1.5 transition-all duration-200 cursor-pointer shadow-sm hover:border-brand-light-green/45 hover:shadow-[0_0_8px_rgba(46,255,156,0.08)]"
          >
            <Download size={12} />
            Export PDF
          </button>
          
          <button 
            onClick={onExportWord}
            className="px-3 py-1.5 bg-brand-dark-green hover:bg-emerald-800 text-white rounded-lg text-[11px] font-accent font-bold flex items-center gap-1.5 transition-all duration-200 cursor-pointer shadow-sm shadow-brand-dark-green/10"
          >
            <Download size={12} />
            Export Word
          </button>
        </div>

        {/* Right Dashboard Toggle */}
        <button 
          onClick={() => setRightPanelOpen(!rightPanelOpen)}
          className={`p-2 rounded-lg cursor-pointer transition-colors duration-150 ${
            rightPanelOpen ? 'text-brand-light-green bg-brand-dark-green/20' : 'text-gray-400 hover:text-white hover:bg-gray-800/50'
          }`}
          title={rightPanelOpen ? "Close panel" : "Open panel"}
        >
          <PanelRight size={16} />
        </button>
      </div>
    </header>
  );
}
