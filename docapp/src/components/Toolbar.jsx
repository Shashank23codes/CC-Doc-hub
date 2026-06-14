import { 
  Undo, 
  Redo, 
  Bold, 
  Italic, 
  Underline, 
  AlignLeft, 
  AlignCenter, 
  AlignRight, 
  List, 
  ListOrdered, 
  Type
} from 'lucide-react';

export default function Toolbar({ onExecuteCommand }) {
  return (
    <div className="h-12 bg-white border-b border-gray-200/85 flex items-center px-6 gap-3 shrink-0 overflow-x-auto print:hidden z-10 shadow-xs">
      {/* History controls */}
      <div className="flex items-center bg-gray-50/70 border border-gray-200/80 rounded-lg p-0.5 shadow-2xs">
        <button 
          onMouseDown={(e) => { e.preventDefault(); onExecuteCommand('undo'); }} 
          className="p-1 text-gray-500 hover:bg-white hover:text-brand-dark-green hover:shadow-3xs rounded-md transition-all duration-150 cursor-pointer" 
          title="Undo (Ctrl+Z)"
        >
          <Undo size={14} />
        </button>
        <button 
          onMouseDown={(e) => { e.preventDefault(); onExecuteCommand('redo'); }} 
          className="p-1 text-gray-500 hover:bg-white hover:text-brand-dark-green hover:shadow-3xs rounded-md transition-all duration-150 cursor-pointer" 
          title="Redo (Ctrl+Y)"
        >
          <Redo size={14} />
        </button>
      </div>
      
      <div className="w-px h-5 bg-gray-200"></div>

      {/* Font styles */}
      <div className="flex items-center bg-gray-50/70 border border-gray-200/80 rounded-lg p-0.5 shadow-2xs">
        <button 
          onMouseDown={(e) => { e.preventDefault(); onExecuteCommand('bold'); }} 
          className="p-1 text-gray-700 hover:bg-white hover:text-brand-dark-green hover:shadow-3xs rounded-md transition-all duration-150 font-bold cursor-pointer" 
          title="Bold"
        >
          <Bold size={14} />
        </button>
        <button 
          onMouseDown={(e) => { e.preventDefault(); onExecuteCommand('italic'); }} 
          className="p-1 text-gray-700 hover:bg-white hover:text-brand-dark-green hover:shadow-3xs rounded-md transition-all duration-150 italic cursor-pointer" 
          title="Italic"
        >
          <Italic size={14} />
        </button>
        <button 
          onMouseDown={(e) => { e.preventDefault(); onExecuteCommand('underline'); }} 
          className="p-1 text-gray-700 hover:bg-white hover:text-brand-dark-green hover:shadow-3xs rounded-md transition-all duration-150 underline cursor-pointer" 
          title="Underline"
        >
          <Underline size={14} />
        </button>
      </div>

      <div className="w-px h-5 bg-gray-200"></div>

      {/* Heading types */}
      <div className="flex items-center bg-gray-50/70 border border-gray-200/80 rounded-lg p-0.5 shadow-2xs gap-0.5">
        <button 
          onMouseDown={(e) => { e.preventDefault(); onExecuteCommand('formatBlock', 'H2'); }} 
          className="px-2 py-0.5 text-[10px] font-accent font-bold text-gray-700 hover:bg-white hover:text-brand-dark-green hover:shadow-3xs rounded-md transition-all duration-150 cursor-pointer" 
          title="Heading 2"
        >
          H2
        </button>
        <button 
          onMouseDown={(e) => { e.preventDefault(); onExecuteCommand('formatBlock', 'H3'); }} 
          className="px-2 py-0.5 text-[10px] font-accent font-bold text-gray-700 hover:bg-white hover:text-brand-dark-green hover:shadow-3xs rounded-md transition-all duration-150 cursor-pointer" 
          title="Heading 3"
        >
          H3
        </button>
        <button 
          onMouseDown={(e) => { e.preventDefault(); onExecuteCommand('formatBlock', 'P'); }} 
          className="px-2 py-0.5 text-[10px] font-accent text-gray-700 hover:bg-white hover:text-brand-dark-green hover:shadow-3xs rounded-md transition-all duration-150 cursor-pointer" 
          title="Normal Text"
        >
          Normal
        </button>
      </div>

      <div className="w-px h-5 bg-gray-200"></div>

      {/* Alignment */}
      <div className="flex items-center bg-gray-50/70 border border-gray-200/80 rounded-lg p-0.5 shadow-2xs">
        <button 
          onMouseDown={(e) => { e.preventDefault(); onExecuteCommand('justifyLeft'); }} 
          className="p-1 text-gray-650 hover:bg-white hover:text-brand-dark-green hover:shadow-3xs rounded-md transition-all duration-150 cursor-pointer" 
          title="Align Left"
        >
          <AlignLeft size={14} />
        </button>
        <button 
          onMouseDown={(e) => { e.preventDefault(); onExecuteCommand('justifyCenter'); }} 
          className="p-1 text-gray-650 hover:bg-white hover:text-brand-dark-green hover:shadow-3xs rounded-md transition-all duration-150 cursor-pointer" 
          title="Align Center"
        >
          <AlignCenter size={14} />
        </button>
        <button 
          onMouseDown={(e) => { e.preventDefault(); onExecuteCommand('justifyRight'); }} 
          className="p-1 text-gray-650 hover:bg-white hover:text-brand-dark-green hover:shadow-3xs rounded-md transition-all duration-150 cursor-pointer" 
          title="Align Right"
        >
          <AlignRight size={14} />
        </button>
      </div>

      <div className="w-px h-5 bg-gray-200"></div>

      {/* Bullet / Numbers */}
      <div className="flex items-center bg-gray-50/70 border border-gray-200/80 rounded-lg p-0.5 shadow-2xs">
        <button 
          onMouseDown={(e) => { e.preventDefault(); onExecuteCommand('insertUnorderedList'); }} 
          className="p-1 text-gray-650 hover:bg-white hover:text-brand-dark-green hover:shadow-3xs rounded-md transition-all duration-150 cursor-pointer" 
          title="Bullet List"
        >
          <List size={14} />
        </button>
        <button 
          onMouseDown={(e) => { e.preventDefault(); onExecuteCommand('insertOrderedList'); }} 
          className="p-1 text-gray-650 hover:bg-white hover:text-brand-dark-green hover:shadow-3xs rounded-md transition-all duration-150 cursor-pointer" 
          title="Numbered List"
        >
          <ListOrdered size={14} />
        </button>
      </div>

      <div className="w-px h-5 bg-gray-200"></div>

      {/* Colors */}
      <div className="flex items-center bg-gray-50/70 border border-gray-200/80 rounded-lg py-0.5 px-2.5 shadow-2xs gap-2">
        <span className="text-[9px] text-gray-400 font-bold tracking-wider uppercase font-accent select-none">Color:</span>
        <div className="flex items-center gap-1.5">
          <button 
            onMouseDown={(e) => { e.preventDefault(); onExecuteCommand('foreColor', '#0A0F0F'); }} 
            className="w-3.5 h-3.5 rounded-full bg-brand-dark-slate border border-gray-300/40 hover:scale-125 transition-transform cursor-pointer" 
            title="Dark Slate (#0A0F0F)"
          />
          <button 
            onMouseDown={(e) => { e.preventDefault(); onExecuteCommand('foreColor', '#1B4D3E'); }} 
            className="w-3.5 h-3.5 rounded-full bg-brand-dark-green border border-gray-300/40 hover:scale-125 transition-transform cursor-pointer" 
            title="Dark Green (#1B4D3E)"
          />
          <button 
            onMouseDown={(e) => { e.preventDefault(); onExecuteCommand('foreColor', '#2EFF9C'); }} 
            className="w-3.5 h-3.5 rounded-full bg-brand-light-green border border-gray-300/40 hover:scale-125 transition-transform cursor-pointer shadow-xs" 
            title="Neon Green (#2EFF9C)"
          />
          <button 
            onMouseDown={(e) => { e.preventDefault(); onExecuteCommand('foreColor', '#ef4444'); }} 
            className="w-3.5 h-3.5 rounded-full bg-red-500 border border-gray-300/40 hover:scale-125 transition-transform cursor-pointer" 
            title="Red (#ef4444)"
          />
          <button 
            onMouseDown={(e) => { e.preventDefault(); onExecuteCommand('foreColor', '#3b82f6'); }} 
            className="w-3.5 h-3.5 rounded-full bg-blue-500 border border-gray-300/40 hover:scale-125 transition-transform cursor-pointer" 
            title="Blue (#3b82f6)"
          />
        </div>
      </div>
      
      <div className="w-px h-5 bg-gray-200"></div>

      {/* Clear formats */}
      <button 
        onMouseDown={(e) => { e.preventDefault(); onExecuteCommand('removeFormat'); }} 
        className="p-1.5 text-gray-500 hover:bg-gray-100 hover:text-red-500 rounded-lg transition-colors cursor-pointer" 
        title="Clear Selection Formatting"
      >
        <Type size={14} />
      </button>
    </div>
  );
}
