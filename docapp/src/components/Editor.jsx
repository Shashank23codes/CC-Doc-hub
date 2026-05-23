import React from 'react';

export default function Editor({ editorRef, onInput, activeStyle }) {
  return (
    <div className="flex-1 overflow-y-auto p-10 relative flex justify-center bg-[#EAEDEE] focus-within:bg-[#E5E9EA] transition-all duration-300">
      <style dangerouslySetInnerHTML={{ __html: activeStyle }} />
      
      {/* Interactive contentEditable Document */}
      <div 
        ref={editorRef}
        id="printable-document" 
        contentEditable 
        suppressContentEditableWarning
        onInput={onInput}
        className="outline-none min-h-[297mm] h-fit select-text cursor-text bg-white shadow-[0_12px_36px_rgba(10,15,15,0.06),0_4px_12px_rgba(10,15,15,0.03)] hover:shadow-[0_20px_48px_rgba(10,15,15,0.09),0_6px_16px_rgba(10,15,15,0.04)] focus:shadow-[0_24px_60px_rgba(10,15,15,0.12),0_8px_24px_rgba(10,15,15,0.06)] transition-all duration-300 border border-gray-300/40 rounded-sm"
        style={{ width: '210mm' }}
      />
    </div>
  );
}
