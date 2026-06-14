import { useState, useEffect } from 'react';
import { 
  BarChart3, 
  List, 
  Clock, 
  ChevronRight, 
  BookOpen, 
  FileText, 
  Activity,
  Layers,
  ArrowRight,
  RotateCcw,
  Sparkles,
  DollarSign,
  Plus,
  Loader2,
  TrendingUp,
  Search,
  Trash2
} from 'lucide-react';

export default function DashboardPanel({ 
  editorRef, 
  activeDoc, 
  stats, 
  versionHistory, 
  onRestoreHistory, 
  rightPanelOpen, 
  setRightPanelOpen, 
  activeTab, 
  setActiveTab,
  invoices = [],
  onUpdateInvoiceStatus,
  onUpsertInvoice,
  onDeleteInvoice,
  googleSheetsUrl,
  setGoogleSheetsUrl,
  onFetchInvoicesFromSheets,
  onPushInvoicesToSheets,
  isFetchingSheets,
  isPushingSheets
}) {
  const [headings, setHeadings] = useState([]);
  
  // Invoice form and search state
  const [searchQuery, setSearchQuery] = useState('');
  const [formInvoiceNo, setFormInvoiceNo] = useState('');
  const [formClient, setFormClient] = useState('');
  const [formAmount, setFormAmount] = useState('');
  const [formStatus, setFormStatus] = useState('Pending');
  const [showGuide, setShowGuide] = useState(false);

  // Auto-fill form fields helper
  const handleInvoiceNoChange = (val) => {
    setFormInvoiceNo(val);
    if (val.trim()) {
      const existing = invoices.find(inv => inv.invoiceNo.toLowerCase() === val.trim().toLowerCase());
      if (existing) {
        setFormClient(existing.client);
        setFormAmount(existing.amount.toString());
        setFormStatus(existing.status);
      }
    }
  };

  // Extract document outline from editor HTML
  const generateOutline = () => {
    if (!editorRef.current) return;
    
    const headingElements = editorRef.current.querySelectorAll('h1, h2, h3, h4, .doc-section-title, .sow-section-title, .prop-section-title');
    const outlineItems = [];
    
    headingElements.forEach((el, index) => {
      if (!el.id) {
        el.id = `outline-heading-${index}`;
      }
      
      let level = 2;
      if (el.tagName === 'H1') level = 1;
      if (el.tagName === 'H3') level = 3;
      if (el.tagName === 'H4') level = 4;
      
      outlineItems.push({
        id: el.id,
        text: el.innerText || el.textContent || 'Untitled Section',
        level: level,
        ref: el
      });
    });
    
    setHeadings(outlineItems);
  };

  useEffect(() => {
    generateOutline();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [stats, activeDoc]);

  const scrollToHeading = (element) => {
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
      const originalBg = element.style.backgroundColor;
      element.style.transition = 'background-color 0.4s ease';
      element.style.backgroundColor = 'rgba(46, 255, 156, 0.2)';
      setTimeout(() => {
        element.style.backgroundColor = originalBg;
      }, 1000);
    }
  };

  const getCharDensity = () => {
    if (stats.words === 0) return 0;
    return (stats.chars / stats.words).toFixed(1);
  };

  const getReadabilityGrade = () => {
    const avgWordLength = stats.words === 0 ? 0 : stats.chars / stats.words;
    if (avgWordLength > 6.0) return 'Academic / Detailed';
    if (avgWordLength > 5.2) return 'Executive Standard';
    if (avgWordLength > 4.5) return 'Professional Official';
    return 'Conversational Clear';
  };

  const getTargetCompletion = () => {
    const targets = {
      onboarding: 800,
      letterhead: 200,
      invoice: 150,
      proposal: 500,
      nda: 600,
      sow: 700,
      changeorder: 400
    };
    const target = targets[activeDoc] || 500;
    const percentage = Math.min(100, Math.round((stats.words / target) * 100));
    return { target, percentage };
  };

  const formatTimestamp = (ts) => {
    const date = new Date(ts);
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
  };

  const activeDocHistory = versionHistory.filter(h => h.docId === activeDoc);

  // Invoice calculations
  const totalPaidCount = invoices.filter(i => i.status === 'Paid').length;
  const totalPendingCount = invoices.filter(i => i.status === 'Pending').length;
  const totalPaidVal = invoices.filter(i => i.status === 'Paid').reduce((sum, i) => sum + i.amount, 0);
  const totalPendingVal = invoices.filter(i => i.status === 'Pending').reduce((sum, i) => sum + i.amount, 0);

  const filteredInvoices = invoices.filter(inv => 
    inv.invoiceNo.toLowerCase().includes(searchQuery.toLowerCase()) ||
    inv.client.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!formInvoiceNo.trim()) return;

    onUpsertInvoice({
      invoiceNo: formInvoiceNo.trim(),
      client: formClient.trim() || 'Untitled Client',
      date: new Date().toISOString().split('T')[0],
      amount: Number(formAmount) || 0,
      status: formStatus
    });

    // Reset details to allow next entry, keep status
    setFormInvoiceNo('');
    setFormClient('');
    setFormAmount('');
  };

  if (!rightPanelOpen) {
    return (
      <div className="w-12 h-screen bg-brand-dark-slate border-l border-gray-800/80 flex flex-col items-center py-4 gap-4 z-20 shrink-0 select-none">
        <button 
          onClick={() => setRightPanelOpen(true)}
          className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-gray-800/50 cursor-pointer transition-colors duration-150"
          title="Open Dashboard Panel"
        >
          <ChevronRight size={16} className="rotate-180" />
        </button>
        <div className="w-px h-6 bg-gray-800"></div>
        <button 
          onClick={() => { setRightPanelOpen(true); setActiveTab('metrics'); }} 
          className={`p-2 rounded-lg cursor-pointer ${activeTab === 'metrics' ? 'text-brand-light-green bg-brand-dark-green/20' : 'text-gray-500 hover:text-gray-300'}`}
          title="Metrics"
        >
          <BarChart3 size={16} />
        </button>
        <button 
          onClick={() => { setRightPanelOpen(true); setActiveTab('outline'); }} 
          className={`p-2 rounded-lg cursor-pointer ${activeTab === 'outline' ? 'text-brand-light-green bg-brand-dark-green/20' : 'text-gray-500 hover:text-gray-300'}`}
          title="Outline"
        >
          <List size={16} />
        </button>
        <button 
          onClick={() => { setRightPanelOpen(true); setActiveTab('history'); }} 
          className={`p-2 rounded-lg cursor-pointer ${activeTab === 'history' ? 'text-brand-light-green bg-brand-dark-green/20' : 'text-gray-500 hover:text-gray-300'}`}
          title="History Log"
        >
          <Clock size={16} />
        </button>
        <button 
          onClick={() => { setRightPanelOpen(true); setActiveTab('invoices'); }} 
          className={`p-2 rounded-lg cursor-pointer ${activeTab === 'invoices' ? 'text-brand-light-green bg-brand-dark-green/20' : 'text-gray-500 hover:text-gray-300'}`}
          title="Invoice Tracker"
        >
          <DollarSign size={16} />
        </button>
      </div>
    );
  }

  return (
    <aside className="w-80 h-screen flex flex-col bg-brand-dark-slate border-l border-gray-800/80 z-20 shrink-0 font-sans">
      {/* Panel Toggle & Tab Navigation */}
      <div className="h-16 flex items-center justify-between px-4 shrink-0 border-b border-gray-800/80">
        <div className="flex items-center gap-1">
          <button
            onClick={() => setRightPanelOpen(false)}
            className="p-1.5 rounded-lg text-gray-400 hover:text-white hover:bg-gray-800/50 cursor-pointer transition-colors duration-150 mr-1"
          >
            <ChevronRight size={16} />
          </button>
          <span className="font-primary font-bold text-xs uppercase tracking-wider text-white">Analysis Hub</span>
        </div>
        
        {/* Tab Buttons */}
        <div className="flex bg-black/40 p-0.5 rounded-lg border border-gray-800/80 gap-0.5">
          <button 
            onClick={() => setActiveTab('metrics')} 
            className={`p-1.5 rounded-md text-xs transition-all duration-200 cursor-pointer ${
              activeTab === 'metrics' 
                ? 'bg-brand-dark-green text-brand-light-green font-bold' 
                : 'text-gray-400 hover:text-white'
            }`}
            title="Metrics Panel"
          >
            <BarChart3 size={13} />
          </button>
          <button 
            onClick={() => setActiveTab('outline')} 
            className={`p-1.5 rounded-md text-xs transition-all duration-200 cursor-pointer ${
              activeTab === 'outline' 
                ? 'bg-brand-dark-green text-brand-light-green font-bold' 
                : 'text-gray-400 hover:text-white'
            }`}
            title="Document Outline"
          >
            <List size={13} />
          </button>
          <button 
            onClick={() => setActiveTab('history')} 
            className={`p-1.5 rounded-md text-xs transition-all duration-200 cursor-pointer ${
              activeTab === 'history' 
                ? 'bg-brand-dark-green text-brand-light-green font-bold' 
                : 'text-gray-400 hover:text-white'
            }`}
            title="Version Snapshots"
          >
            <Clock size={13} />
          </button>
          <button 
            onClick={() => setActiveTab('invoices')} 
            className={`p-1.5 rounded-md text-xs transition-all duration-200 cursor-pointer ${
              activeTab === 'invoices' 
                ? 'bg-brand-dark-green text-brand-light-green font-bold' 
                : 'text-gray-400 hover:text-white'
            }`}
            title="Invoice Payment Tracker"
          >
            <DollarSign size={13} />
          </button>
        </div>
      </div>

      {/* Tab Contents Area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-5">
        
        {/* Tab 1: METRICS PANEL */}
        {activeTab === 'metrics' && (
          <div className="space-y-4">
            <div className="bg-black/35 rounded-xl border border-gray-850 p-4 space-y-3">
              <div className="flex justify-between items-center text-xs">
                <span className="text-gray-400 font-accent uppercase font-bold tracking-wider">Word Targets</span>
                <span className="text-brand-light-green font-accent font-semibold">
                  {stats.words} / {getTargetCompletion().target} w
                </span>
              </div>
              <div className="w-full bg-gray-900 rounded-full h-2 overflow-hidden border border-gray-800">
                <div 
                  className="bg-gradient-to-r from-brand-dark-green to-brand-light-green h-full rounded-full transition-all duration-550" 
                  style={{ width: `${getTargetCompletion().percentage}%` }}
                />
              </div>
              <div className="flex justify-between items-center text-[10px] text-gray-500">
                <span>Completion Status</span>
                <span>{getTargetCompletion().percentage}%</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="bg-black/35 rounded-xl border border-gray-850 p-3.5 flex flex-col justify-between">
                <span className="text-[10px] font-accent uppercase text-gray-500 font-bold">Word Count</span>
                <span className="text-xl font-primary font-bold text-white mt-1 text-glow">{stats.words}</span>
              </div>
              
              <div className="bg-black/35 rounded-xl border border-gray-850 p-3.5 flex flex-col justify-between">
                <span className="text-[10px] font-accent uppercase text-gray-500 font-bold">Characters</span>
                <span className="text-xl font-primary font-bold text-white mt-1">{stats.chars}</span>
              </div>

              <div className="bg-black/35 rounded-xl border border-gray-850 p-3.5 flex flex-col justify-between">
                <span className="text-[10px] font-accent uppercase text-gray-500 font-bold">Paragraphs</span>
                <span className="text-xl font-primary font-bold text-white mt-1">{stats.paragraphs || 0}</span>
              </div>

              <div className="bg-black/35 rounded-xl border border-gray-850 p-3.5 flex flex-col justify-between">
                <span className="text-[10px] font-accent uppercase text-gray-500 font-bold">Reading Speed</span>
                <span className="text-xl font-primary font-bold text-white mt-1 text-brand-light-green text-glow">{stats.readTime}m</span>
              </div>
            </div>

            <div className="bg-black/35 rounded-xl border border-gray-850 p-4 space-y-4">
              <h4 className="text-[11px] font-accent uppercase text-gray-400 font-bold tracking-wider border-b border-gray-800 pb-2">Analysis Metrics</h4>
              
              <div className="flex justify-between items-center text-xs">
                <div className="flex items-center gap-2 text-gray-400">
                  <BookOpen size={13} className="text-emerald-500" />
                  <span>Readability Level</span>
                </div>
                <span className="font-semibold text-white bg-emerald-950/40 text-[10px] px-2 py-0.5 border border-emerald-900/35 rounded-md">
                  {getReadabilityGrade()}
                </span>
              </div>

              <div className="flex justify-between items-center text-xs">
                <div className="flex items-center gap-2 text-gray-400">
                  <Activity size={13} className="text-brand-light-green" />
                  <span>Word Density</span>
                </div>
                <span className="font-accent font-semibold text-gray-300">
                  {getCharDensity()} chars/w
                </span>
              </div>

              <div className="flex justify-between items-center text-xs">
                <div className="flex items-center gap-2 text-gray-400">
                  <FileText size={13} className="text-cyan-500" />
                  <span>Est. Printed Pages</span>
                </div>
                <span className="font-accent font-semibold text-cyan-400 text-glow">
                  ~{Math.max(1, Math.ceil(stats.words / 350))} A4 Pages
                </span>
              </div>
            </div>

            <div className="bg-gradient-to-br from-black/45 to-brand-dark-green/10 rounded-xl border border-gray-850 p-4 flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-brand-dark-green/35 border border-brand-light-green/20 flex items-center justify-center shrink-0 text-brand-light-green shadow-inner">
                <Sparkles size={16} />
              </div>
              <div>
                <h5 className="text-[11px] font-bold text-gray-200">Cloudless Auto-Save</h5>
                <p className="text-[10px] text-gray-400 leading-tight mt-0.5">Edits are automatically cached securely in your local browser sandbox.</p>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: DOCUMENT OUTLINE */}
        {activeTab === 'outline' && (
          <div className="space-y-3">
            <h4 className="text-[11px] font-accent uppercase text-gray-400 font-bold tracking-wider border-b border-gray-800 pb-2">Table of Contents</h4>
            
            {headings.length > 0 ? (
              <div className="relative border-l border-gray-800 ml-2 py-1 space-y-1">
                {headings.map((heading) => (
                  <button
                    key={heading.id}
                    onClick={() => scrollToHeading(heading.ref)}
                    className="w-full text-left group flex items-start py-1.5 px-3 -ml-px border-l border-transparent hover:border-brand-light-green text-xs hover:bg-gray-950/20 transition-all duration-150 cursor-pointer"
                    style={{ paddingLeft: `${heading.level * 8 + 4}px` }}
                  >
                    <ArrowRight size={10} className="mt-0.5 mr-1.5 text-gray-600 group-hover:text-brand-light-green transition-colors opacity-0 group-hover:opacity-100 shrink-0" />
                    <span className="text-gray-400 group-hover:text-white truncate font-medium">{heading.text}</span>
                  </button>
                ))}
              </div>
            ) : (
              <div className="text-center py-12 text-xs text-gray-600 font-accent flex flex-col items-center gap-2">
                <Layers size={24} className="text-gray-800" />
                <span>No headings detected. Make sure your document has subtitles (H2, H3).</span>
              </div>
            )}
          </div>
        )}

        {/* Tab 3: VERSION HISTORY */}
        {activeTab === 'history' && (
          <div className="space-y-4">
            <div className="flex justify-between items-center border-b border-gray-800 pb-2">
              <h4 className="text-[11px] font-accent uppercase text-gray-400 font-bold tracking-wider">Saved Snapshots</h4>
              <span className="text-[9px] font-accent text-gray-500">{activeDocHistory.length} drafts</span>
            </div>

            {activeDocHistory.length > 0 ? (
              <div className="space-y-2.5">
                {activeDocHistory.map((item, index) => (
                  <div 
                    key={item.timestamp}
                    className="p-3 bg-black/35 hover:bg-black/50 border border-gray-850 hover:border-brand-dark-green rounded-xl transition-all duration-200 group flex items-center justify-between"
                  >
                    <div className="space-y-0.5 overflow-hidden">
                      <div className="text-[11px] font-bold text-white flex items-center gap-1.5">
                        <Clock size={10} className="text-gray-500" />
                        <span>Version {activeDocHistory.length - index}</span>
                        {index === 0 && (
                          <span className="text-[8px] bg-brand-light-green/15 text-brand-light-green border border-brand-light-green/20 px-1 rounded-sm uppercase tracking-wider font-extrabold scale-90">Current</span>
                        )}
                      </div>
                      <div className="text-[9px] text-gray-500 font-accent">
                        {formatTimestamp(item.timestamp)} • {item.wordCount} words
                      </div>
                    </div>

                    <button
                      onClick={() => onRestoreHistory(item.content)}
                      className="p-1.5 bg-gray-900 border border-gray-800 hover:border-brand-light-green text-gray-400 hover:text-brand-light-green hover:shadow-[0_0_8px_rgba(46,255,156,0.1)] rounded-lg transition-all duration-150 cursor-pointer"
                      title="Restore this version"
                    >
                      <RotateCcw size={12} />
                    </button>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12 text-xs text-gray-600 font-accent flex flex-col items-center gap-2">
                <Clock size={24} className="text-gray-800 animate-spin-slow" />
                <span>Waiting for edits... Snapshots will automatically register here.</span>
              </div>
            )}
          </div>
        )}

        {/* Tab 4: INVOICE TRACKER PANEL */}
        {activeTab === 'invoices' && (
          <div className="space-y-4">
            
            {/* Visual Paid vs Pending Stats */}
            <div className="bg-black/35 rounded-xl border border-gray-850 p-4 space-y-3">
              <div className="flex items-center justify-between text-xs text-gray-400 font-accent uppercase font-bold tracking-wider border-b border-gray-800/80 pb-2">
                <span className="flex items-center gap-1.5">
                  <TrendingUp size={12} className="text-brand-light-green" />
                  <span>Payment Ledger</span>
                </span>
                <span>{invoices.length} invoices</span>
              </div>

              <div className="grid grid-cols-2 gap-2.5">
                <div className="bg-emerald-950/20 border border-emerald-900/35 rounded-lg p-2.5 text-left">
                  <div className="text-[9px] font-accent text-emerald-400 font-bold uppercase tracking-wider flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                    <span>Paid</span>
                  </div>
                  <div className="text-[10px] text-gray-500 font-bold mt-1 font-accent">{totalPaidCount} invoices</div>
                  <div className="text-sm font-primary font-bold text-white mt-0.5">₹{totalPaidVal.toLocaleString('en-IN')}</div>
                </div>

                <div className="bg-amber-950/20 border border-amber-900/35 rounded-lg p-2.5 text-left">
                  <div className="text-[9px] font-accent text-amber-400 font-bold uppercase tracking-wider flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse"></span>
                    <span>Pending</span>
                  </div>
                  <div className="text-[10px] text-gray-500 font-bold mt-1 font-accent">{totalPendingCount} invoices</div>
                  <div className="text-sm font-primary font-bold text-white mt-0.5">₹{totalPendingVal.toLocaleString('en-IN')}</div>
                </div>
              </div>
            </div>

            {/* Quick Status Update Form */}
            <form onSubmit={handleFormSubmit} className="bg-black/35 rounded-xl border border-gray-850 p-4 space-y-3">
              <div className="text-[11px] font-accent uppercase text-gray-400 font-bold tracking-wider flex items-center gap-1.5">
                <Plus size={12} className="text-brand-light-green" />
                <span>Add / Update Invoice Status</span>
              </div>
              
              <div className="space-y-2">
                <input 
                  type="text" 
                  placeholder="Invoice No (e.g. CCS-2026-001)"
                  required
                  value={formInvoiceNo}
                  onChange={(e) => handleInvoiceNoChange(e.target.value)}
                  className="w-full px-2.5 py-1.5 bg-black/60 border border-gray-800 hover:border-gray-750 focus:border-brand-dark-green rounded-lg text-xs text-gray-300 placeholder-gray-600 outline-none transition-all"
                />
                
                <input 
                  type="text" 
                  placeholder="Client Name"
                  value={formClient}
                  onChange={(e) => setFormClient(e.target.value)}
                  className="w-full px-2.5 py-1.5 bg-black/60 border border-gray-800 hover:border-gray-750 focus:border-brand-dark-green rounded-lg text-xs text-gray-300 placeholder-gray-600 outline-none transition-all"
                />
                
                <div className="grid grid-cols-2 gap-2">
                  <input 
                    type="number" 
                    placeholder="Amount (₹)"
                    value={formAmount}
                    onChange={(e) => setFormAmount(e.target.value)}
                    className="w-full px-2.5 py-1.5 bg-black/60 border border-gray-800 hover:border-gray-750 focus:border-brand-dark-green rounded-lg text-xs text-gray-300 placeholder-gray-600 outline-none transition-all"
                  />
                  <select
                    value={formStatus}
                    onChange={(e) => setFormStatus(e.target.value)}
                    className="w-full px-2 py-1.5 bg-black/60 border border-gray-800 focus:border-brand-dark-green rounded-lg text-xs text-gray-300 outline-none cursor-pointer"
                  >
                    <option value="Pending">Pending</option>
                    <option value="Paid">Paid</option>
                  </select>
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-1.5 bg-brand-dark-green hover:bg-emerald-800 text-white font-accent font-bold text-xs rounded-lg transition-colors cursor-pointer flex items-center justify-center gap-1"
              >
                <span>Apply Invoice Status</span>
              </button>
            </form>

            {/* List & Search */}
            <div className="space-y-2">
              <div className="relative shrink-0">
                <span className="absolute inset-y-0 left-0 flex items-center pl-2.5 text-gray-500 pointer-events-none">
                  <Search size={12} />
                </span>
                <input 
                  type="text" 
                  placeholder="Search invoices..." 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-8 pr-3 py-1.5 bg-black/45 border border-gray-800 focus:border-brand-dark-green rounded-lg text-xs text-gray-300 placeholder-gray-600 outline-none transition-all"
                />
              </div>

              <div className="space-y-2 max-h-[300px] overflow-y-auto pr-1">
                {filteredInvoices.map((inv) => (
                  <div 
                    key={inv.invoiceNo} 
                    className="p-3 bg-black/35 border border-gray-850 hover:border-gray-800 rounded-xl space-y-2 flex flex-col transition-all"
                  >
                    <div className="flex justify-between items-center">
                      <span className="text-[11px] font-accent font-bold text-white select-all">{inv.invoiceNo}</span>
                      <div className="flex items-center gap-1.5">
                        <button
                          onClick={() => onUpdateInvoiceStatus(inv.invoiceNo, inv.status === 'Paid' ? 'Pending' : 'Paid')}
                          className={`text-[9px] font-accent font-extrabold px-2 py-0.5 rounded-full border cursor-pointer transition-all ${
                            inv.status === 'Paid'
                              ? 'text-emerald-400 bg-emerald-950/40 border-emerald-500/20 hover:bg-emerald-900/30'
                              : 'text-amber-400 bg-amber-950/40 border-amber-500/20 hover:bg-amber-900/30'
                          }`}
                          title="Click to toggle status"
                        >
                          {inv.status}
                        </button>
                        <button
                          type="button"
                          onClick={() => {
                            if (window.confirm(`Are you sure you want to delete invoice ${inv.invoiceNo}?`)) {
                              onDeleteInvoice(inv.invoiceNo);
                            }
                          }}
                          className="p-1 text-gray-500 hover:text-red-400 rounded transition-colors cursor-pointer"
                          title="Delete Invoice Record"
                        >
                          <Trash2 size={11} />
                        </button>
                      </div>
                    </div>

                    <div className="flex justify-between items-end">
                      <div className="text-left overflow-hidden">
                        <div className="text-xs text-gray-300 font-semibold truncate max-w-[140px]">{inv.client}</div>
                        <div className="text-[9px] text-gray-500 font-accent mt-0.5">{inv.date}</div>
                      </div>
                      <div className="text-right">
                        <div className="text-xs font-accent font-bold text-gray-200">₹{inv.amount.toLocaleString('en-IN')}</div>
                      </div>
                    </div>
                  </div>
                ))}

                {filteredInvoices.length === 0 && (
                  <div className="text-center py-8 text-xs text-gray-600 font-accent">
                    No invoices recorded.
                  </div>
                )}
              </div>
            </div>

            {/* Google Sheets Sync Integration Box */}
            <div className="bg-black/35 rounded-xl border border-gray-850 p-4 space-y-3">
              <div className="flex justify-between items-center text-[11px] font-accent uppercase text-gray-400 font-bold tracking-wider border-b border-gray-800/80 pb-2">
                <span>Google Sheet Sync</span>
                <button
                  type="button"
                  onClick={() => setShowGuide(!showGuide)}
                  className="text-[9px] text-brand-light-green hover:underline cursor-pointer"
                >
                  {showGuide ? 'Hide Setup' : 'Setup Guide'}
                </button>
              </div>

              {/* Guide Content */}
              {showGuide && (
                <div className="text-[10px] text-gray-400 space-y-2 bg-black/60 rounded-lg p-3 border border-gray-800/50 text-left font-sans max-h-[220px] overflow-y-auto">
                  <p className="font-bold text-white border-b border-gray-800 pb-1">2-Minute Setup Steps:</p>
                  <ol className="list-decimal pl-4 space-y-1 text-gray-400">
                    <li>Create a new **Google Sheet**.</li>
                    <li>Add row 1 headers: `invoiceNo`, `client`, `date`, `amount`, `status`.</li>
                    <li>Click **Extensions** &rarr; **Apps Script**.</li>
                    <li>Replace all code with the following scripts:</li>
                  </ol>
                  <pre className="bg-black text-[9px] p-2 rounded border border-gray-800 text-brand-light-green overflow-x-auto select-all font-accent whitespace-pre">
{`function doGet(e) {
  var sheet = SpreadsheetApp.openById("1fDPsCwaxDzwNP9UrWjv1eYLXbRHwydmdoNTIOKRtbCA").getSheets()[0];
  var rows = sheet.getDataRange().getValues();
  var data = [];
  var headers = rows[0];
  for (var i = 1; i < rows.length; i++) {
    var row = rows[i];
    var obj = {};
    for (var j = 0; j < headers.length; j++) {
      obj[headers[j]] = row[j];
    }
    data.push(obj);
  }
  return ContentService.createTextOutput(JSON.stringify(data))
    .setMimeType(ContentService.MimeType.JSON);
}

function doPost(e) {
  var sheet = SpreadsheetApp.openById("1fDPsCwaxDzwNP9UrWjv1eYLXbRHwydmdoNTIOKRtbCA").getSheets()[0];
  var items = JSON.parse(e.postData.contents);
  
  // Clear sheets rows except headers
  var lastRow = sheet.getLastRow();
  if (lastRow > 1) {
    sheet.deleteRows(2, lastRow - 1);
  }
  
  // Append new synced items
  for (var i = 0; i < items.length; i++) {
    var item = items[i];
    sheet.appendRow([
      item.invoiceNo,
      item.client,
      item.date,
      item.amount,
      item.status
    ]);
  }
  
  return ContentService.createTextOutput("Success")
    .setMimeType(ContentService.MimeType.TEXT);
}`}
                  </pre>
                  <ol className="list-decimal pl-4 space-y-1 text-gray-400" start="5">
                    <li>Click **Deploy** &rarr; **New Deployment**.</li>
                    <li>Select **Web App**, Execute as: **Me**, Who has access: **Anyone**.</li>
                    <li>Click **Deploy**, Authorize permissions, copy the **Web App URL**, and paste it below!</li>
                  </ol>
                </div>
              )}

              <input 
                type="text" 
                placeholder="Google Apps Script Web App URL"
                value={googleSheetsUrl}
                onChange={(e) => setGoogleSheetsUrl(e.target.value)}
                className="w-full px-2.5 py-1.5 bg-black/60 border border-gray-800 hover:border-gray-750 focus:border-brand-dark-green rounded-lg text-xs text-gray-300 placeholder-gray-600 outline-none transition-all"
              />

              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={onFetchInvoicesFromSheets}
                  disabled={isFetchingSheets}
                  className="py-1.5 px-2 bg-black border border-gray-800 hover:border-brand-light-green text-gray-300 hover:text-brand-light-green font-accent font-bold text-[10px] rounded-lg transition-colors cursor-pointer flex items-center justify-center gap-1 disabled:opacity-55"
                  title="Sync FROM Google Sheet"
                >
                  {isFetchingSheets ? (
                    <Loader2 size={11} className="animate-spin" />
                  ) : (
                    <span>Fetch Sheet</span>
                  )}
                </button>

                <button
                  type="button"
                  onClick={onPushInvoicesToSheets}
                  disabled={isPushingSheets}
                  className="py-1.5 px-2 bg-brand-dark-green hover:bg-emerald-800 text-white font-accent font-bold text-[10px] rounded-lg transition-colors cursor-pointer flex items-center justify-center gap-1 disabled:opacity-55"
                  title="Push local data TO Google Sheet"
                >
                  {isPushingSheets ? (
                    <Loader2 size={11} className="animate-spin" />
                  ) : (
                    <span>Push Sheet</span>
                  )}
                </button>
              </div>
            </div>

          </div>
        )}

      </div>
    </aside>
  );
}
