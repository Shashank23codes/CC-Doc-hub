import { useState, useRef, useEffect } from 'react';
import { templates } from './initialTemplates';
import Header from './components/Header';
import Toolbar from './components/Toolbar';
import Editor from './components/Editor';
import StatusBar from './components/StatusBar';

function App() {
  const [activeDoc, setActiveDoc] = useState('onboarding');
  const [documents, setDocuments] = useState({
    onboarding: templates.onboarding.html,
    letterhead: templates.letterhead.html,
    invoice: templates.invoice.html,
    proposal: templates.proposal.html,
    nda: templates.nda.html,
    sow: templates.sow.html,
    changeorder: templates.changeorder.html,
  });

  const [stats, setStats] = useState({ words: 0, chars: 0, readTime: 0 });

  const [logos, setLogos] = useState({
    dark: '',
    light: ''
  });

  useEffect(() => {
    const loadLogo = async (path, key) => {
      try {
        const response = await fetch(path);
        const svgText = await response.text();
        const base64 = btoa(unescape(encodeURIComponent(svgText)));
        setLogos(prev => ({
          ...prev,
          [key]: `data:image/svg+xml;base64,${base64}`
        }));
      } catch (err) {
        console.error(`Failed to load logo: ${path}`, err);
      }
    };

    loadLogo('/Primary Logo Dark - A.svg', 'dark');
    loadLogo('/Primary Logo Light - A.svg', 'light');
  }, []);

  const editorRef = useRef(null);

  const calculateStats = (html) => {
    if (!html) {
      setStats({ words: 0, chars: 0, readTime: 0 });
      return;
    }
    const cleanHtml = html
      .replace(/<style([\s\S]*?)<\/style>/gi, '') // Strip inline styles
      .replace(/<script([\s\S]*?)<\/script>/gi, ''); // Strip script tags
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = cleanHtml;
    const text = tempDiv.innerText || tempDiv.textContent || '';
    const cleanText = text.trim().replace(/\s+/g, ' ');
    const words = cleanText ? cleanText.split(/\s+/).filter(w => w.length > 0).length : 0;
    const chars = text.length;
    const readTime = Math.max(1, Math.ceil(words / 200));
    setStats({ words, chars, readTime });
  };

  // Sync ref with content and calculate stats whenever activeDoc changes
  useEffect(() => {
    if (editorRef.current) {
      editorRef.current.innerHTML = documents[activeDoc];
      calculateStats(documents[activeDoc]);
    }
  }, [activeDoc]);

  const handleDocChange = (newDocId) => {
    if (activeDoc === newDocId) return;
    
    // Save current HTML from DOM to state before switching
    if (editorRef.current) {
      setDocuments(prev => ({
        ...prev,
        [activeDoc]: editorRef.current.innerHTML
      }));
    }
    setActiveDoc(newDocId);
  };

  const handleInput = () => {
    if (editorRef.current) {
      calculateStats(editorRef.current.innerHTML);
    }
  };

  const executeCommand = (command, value = null) => {
    document.execCommand(command, false, value);
  };

  const handleDownloadDoc = () => {
    if (!editorRef.current) return;

    const header = "<html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'><head><meta charset='utf-8'><title>Export HTML To Doc</title><style>" + templates[activeDoc].style + "</style></head><body>";
    const footer = "</body></html>";
    
    // Get editor content and replace relative image URLs with base64 data URIs
    let content = editorRef.current.innerHTML;
    if (logos.dark) {
      content = content.replace(/\/Primary Logo Dark - A.svg/g, logos.dark);
    }
    if (logos.light) {
      content = content.replace(/\/Primary Logo Light - A.svg/g, logos.light);
    }

    const sourceHTML = header + content + footer;
    
    try {
      if (window.htmlDocx) {
        const converted = window.htmlDocx.asBlob(sourceHTML);
        const url = URL.createObjectURL(converted);
        
        const fileDownload = document.createElement("a");
        document.body.appendChild(fileDownload);
        fileDownload.href = url;
        fileDownload.download = `${activeDoc}_document.docx`;
        fileDownload.click();
        document.body.removeChild(fileDownload);
        URL.revokeObjectURL(url);
      } else {
        // Fallback
        const source = 'data:application/vnd.ms-word;charset=utf-8,' + encodeURIComponent(sourceHTML);
        const fileDownload = document.createElement("a");
        document.body.appendChild(fileDownload);
        fileDownload.href = source;
        fileDownload.download = `${activeDoc}_document.doc`;
        fileDownload.click();
        document.body.removeChild(fileDownload);
      }
    } catch (err) {
      console.error("htmlDocx conversion failed, falling back to standard data URL download", err);
      const source = 'data:application/vnd.ms-word;charset=utf-8,' + encodeURIComponent(sourceHTML);
      const fileDownload = document.createElement("a");
      document.body.appendChild(fileDownload);
      fileDownload.href = source;
      fileDownload.download = `${activeDoc}_document.doc`;
      fileDownload.click();
      document.body.removeChild(fileDownload);
    }
  };

  const handlePrintPdf = () => {
    // Save state before printing
    if (editorRef.current) {
      setDocuments(prev => ({
        ...prev,
        [activeDoc]: editorRef.current.innerHTML
      }));
    }

    try {
      if (window.html2pdf) {
        // Set export options with scrollY: 0 to prevent top-offset white spaces
        // and explicit pagebreak rules matching our break markers
        const opt = {
          margin: [12, 0, 12, 0], // 12mm top/bottom margin, 0mm left/right margin for full-bleed header/footer
          filename: `${activeDoc}_document.pdf`,
          image: { type: 'jpeg', quality: 0.98 },
          html2canvas: { scale: 2, useCORS: true, logging: false, scrollY: 0 },
          jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
          pagebreak: { 
            mode: ['css', 'legacy'], 
            before: ['.doc-page-break', '.prop-page-break', '.page-break'] 
          }
        };

        // Get editor content and replace relative image URLs with base64 data URIs
        let content = editorRef.current.innerHTML;
        if (logos.dark) {
          content = content.replace(/\/Primary Logo Dark - A.svg/g, logos.dark);
        }
        if (logos.light) {
          content = content.replace(/\/Primary Logo Light - A.svg/g, logos.light);
        }

        const container = document.createElement('div');
        // A4 width is 210mm. By using 210mm width and 0mm side margins, headers/footers take full bleed.
        container.style.width = '210mm';
        container.style.backgroundColor = '#ffffff';
        
        const styleTag = document.createElement('style');
        styleTag.innerHTML = templates[activeDoc].style + `
          /* Override Flexbox layouts to standard block layout for clean PDF canvas rendering */
          .doc-page, .lh-page, .inv-page, .prop-page, .nda-page {
            display: block !important;
            min-height: auto !important;
            height: auto !important;
            width: 100% !important;
            margin: 0 !important;
            padding: 0 !important;
          }
          .doc-content, .lh-content, .inv-content, .prop-body, .nda-content {
            display: block !important;
            flex: none !important;
            padding: 40px 50px !important; /* Original template padding to serve as left/right print margins */
          }
          /* Ensure header tables start at the very top of the printable area */
          .doc-page > table:first-of-type, .lh-page > table:first-of-type, .inv-page > table:first-of-type, .prop-page > table:first-of-type, .nda-page > table:first-of-type {
            margin-top: 0 !important;
          }
          /* Ensure footer tables are placed normally as block elements with custom spacing */
          .doc-page > table:last-of-type:not(:first-of-type), 
          .lh-page > table:last-of-type:not(:first-of-type), 
          .inv-page > table:last-of-type:not(:first-of-type), 
          .prop-page > table:last-of-type:not(:first-of-type), 
          .nda-page > table:last-of-type:not(:first-of-type) {
            margin-top: 40px !important;
            page-break-inside: avoid !important;
            break-inside: avoid !important;
          }
          /* Clean and explicit page break elements */
          .doc-page-break, .prop-page-break, .page-break {
            page-break-before: always !important;
            break-before: page !important;
            height: 0 !important;
            margin: 0 !important;
            padding: 0 !important;
            display: block !important;
            clear: both !important;
          }
          /* Avoid splitting table rows, paragraph blocks, headings, list items, and container components */
          tr, td, th, table, p, li, .doc-service-item, .doc-section-title, h2, h3, h4, h5, h6, .doc-inclusions, .lh-signature, .lh-recipient {
            page-break-inside: avoid !important;
            break-inside: avoid !important;
          }
        `;
        container.appendChild(styleTag);

        const contentDiv = document.createElement('div');
        contentDiv.innerHTML = content;
        container.appendChild(contentDiv);
        
        window.html2pdf().set(opt).from(container).save();
      } else {
        window.print();
      }
    } catch (err) {
      console.error("html2pdf failed, falling back to window.print()", err);
      window.print();
    }
  };

  const resetToDefault = () => {
    if (window.confirm("Are you sure you want to reset this document to the default template? All current edits will be lost.")) {
      if (editorRef.current) {
        editorRef.current.innerHTML = templates[activeDoc].html;
        calculateStats(templates[activeDoc].html);
      }
    }
  };

  return (
    <div className="flex flex-col h-screen w-full bg-[#EAEDEE] overflow-hidden font-sans text-gray-800">
      <Header 
        activeDoc={activeDoc}
        onDocChange={handleDocChange}
        onReset={resetToDefault}
        onExportPdf={handlePrintPdf}
        onExportWord={handleDownloadDoc}
      />
      
      <Toolbar onExecuteCommand={executeCommand} />
      
      <Editor 
        editorRef={editorRef}
        onInput={handleInput}
        activeStyle={templates[activeDoc].style}
      />
      
      <StatusBar stats={stats} />
    </div>
  );
}

export default App;
