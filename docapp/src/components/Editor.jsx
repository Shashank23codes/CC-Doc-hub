

export default function Editor({ 
  editorRef, 
  onInput, 
  activeStyle,
  zoomLevel,
  canvasTheme,
  showPrintGuides
}) {
  const handleDocumentClick = (e) => {
    const qrContainer = e.target.closest('.qr-container');
    if (qrContainer) {
      e.preventDefault();
      e.stopPropagation();
      
      const upiQrImg = qrContainer.querySelector('.upi-qr');
      if (upiQrImg) {
        const input = document.createElement('input');
        input.type = 'file';
        input.accept = 'image/*';
        input.onchange = (event) => {
          const file = event.target.files[0];
          if (file) {
            const reader = new FileReader();
            reader.onload = (uploadEvent) => {
              upiQrImg.src = uploadEvent.target.result;
              // Trigger input event to update React state & localStorage
              if (onInput) onInput();
            };
            reader.readAsDataURL(file);
          }
        };
        input.click();
      }
    }
  };

  return (
    <div 
      className={`flex-1 overflow-y-auto p-12 relative flex justify-center transition-all-300 canvas-${canvasTheme} ${
        showPrintGuides ? 'show-print-guides' : ''
      }`}
    >
      <style dangerouslySetInnerHTML={{ __html: activeStyle }} />
      
      {/* Zoom Container to scale A4 Page */}
      <div 
        className="zoom-container"
        style={{ 
          transform: `scale(${zoomLevel})`,
          height: 'max-content',
          width: 'max-content',
          paddingBottom: '2rem'
        }}
      >
        {/* Interactive contentEditable Document */}
        <div 
          ref={editorRef}
          id="printable-document" 
          contentEditable 
          suppressContentEditableWarning
          onInput={onInput}
          onClick={handleDocumentClick}
          className="outline-none min-h-[297mm] h-fit select-text cursor-text bg-white shadow-[0_12px_36px_rgba(10,15,15,0.06),0_4px_12px_rgba(10,15,15,0.03)] hover:shadow-[0_20px_48px_rgba(10,15,15,0.09),0_6px_16px_rgba(10,15,15,0.04)] focus:shadow-[0_24px_60px_rgba(10,15,15,0.12),0_8px_24px_rgba(10,15,15,0.06)] transition-all-300 border border-gray-300/40 rounded-sm"
          style={{ width: '210mm' }}
        />
      </div>
    </div>
  );
}
