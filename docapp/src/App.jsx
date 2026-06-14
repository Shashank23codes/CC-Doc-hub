import { useState, useRef, useEffect } from 'react';
import { templates } from './initialTemplates';
import Header from './components/Header';
import Toolbar from './components/Toolbar';
import Editor from './components/Editor';
import Sidebar from './components/Sidebar';
import DashboardPanel from './components/DashboardPanel';

function App() {
  const getAssetPath = (filename) => {
    const base = import.meta.env.BASE_URL;
    if (base === './' || base === '.') {
      return `./${filename}`;
    }
    return `${base || '/'}${filename}`.replace(/\/+/g, '/');
  };

  const resolveTemplateHtml = (html) => {
    let resolved = html
      .replace(/\/Primary Logo Dark - A.svg/g, getAssetPath('Primary Logo Dark - A.svg'))
      .replace(/\/Primary Logo Light - A.svg/g, getAssetPath('Primary Logo Light - A.svg'));

    if (resolved.includes('{{DATE}}') || resolved.includes('{{DUE_DATE}}')) {
      const now = new Date();
      const dueDate = new Date();
      dueDate.setDate(now.getDate() + 9);
      const options = { year: 'numeric', month: 'long', day: 'numeric' };
      const dateStr = now.toLocaleDateString('en-US', options);
      const dueDateStr = dueDate.toLocaleDateString('en-US', options);

      resolved = resolved
        .replace(/{{DATE}}/g, dateStr)
        .replace(/{{DUE_DATE}}/g, dueDateStr);
    }
    return resolved;
  };

  const upgradeInvoiceHtml = (html) => {
    if (!html) return html;

    // Strip Discount row
    let cleanedHtml = html.replace(/<tr>\s*<td[^>]*?>\s*Discount:[\s\S]*?<\/tr>/gi, '');

    const cleanUpWatermarks = (inputHtml) => {
      let cleaned = inputHtml;
      if (cleaned.includes('qr-container')) {
        cleaned = cleaned
          .replace(/width:\s*65%/g, 'width: 60%')
          .replace(/width:\s*35%/g, 'width: 40%');

        const qrImageMatch = cleaned.match(/<img class="upi-qr"[^>]*?src="([^"]*?)"/);
        let qrSrc = '';
        if (qrImageMatch) {
          qrSrc = qrImageMatch[1];
          if (qrSrc.includes('size=100x100')) {
            qrSrc = qrSrc.replace('size=100x100', 'size=140x140');
          }
        }
        if (!qrSrc) {
          qrSrc = 'https://api.qrserver.com/v1/create-qr-code/?size=140x140&data=upi://pay?pa=8956730349@upi%26pn=Shashank%20Gupta%26am=9000.00%26cu=INR';
        }

        const cleanContainer = `<div class="qr-container" contenteditable="false" style="display: inline-block; text-align: center; background: #ffffff; padding: 12px; border: 1px dashed #1B4D3E; border-radius: 6px; box-shadow: 0 2px 8px rgba(0,0,0,0.04);">\n                                <img class="upi-qr" src="${qrSrc}" alt="UPI QR Code" style="width: 140px; height: 140px; display: block; border: 1px solid #f0f0f0; border-radius: 4px;">\n                            </div>`;
        cleaned = cleaned.replace(/<div class="qr-container"[\s\S]*?<\/div>/, cleanContainer);
      }
      return cleaned;
    };

    // 1. If it doesn't have qr-container, upgrade from scratch
    if (!cleanedHtml.includes('qr-container') && cleanedHtml.includes('inv-payment-terms')) {
      const paymentTermsMatch = cleanedHtml.match(/<div class="inv-payment-terms">([\s\S]*?)<\/div>/);
      if (paymentTermsMatch) {
        const innerContent = paymentTermsMatch[1];
        const upiMatch = innerContent.match(/<strong>UPI ID:<\/strong>\s*<span class="mono-val">([\s\S]*?)<\/span>/i);
        const upiId = upiMatch ? upiMatch[1].trim() : '8956730349@upi';
        
        const upgradedInnerContent = `
                <table style="width: 100%; border: none; border-collapse: collapse; margin: 0; padding: 0; table-layout: fixed;" cellpadding="0" cellspacing="0">
                    <tr>
                        <td style="vertical-align: top; width: 60%; padding: 0; border: none;">
                            ${innerContent}
                        </td>
                        <td style="vertical-align: middle; width: 40%; text-align: right; padding: 0 0 0 20px; border: none;">
                            <div class="qr-container" contenteditable="false" style="display: inline-block; text-align: center; background: #ffffff; padding: 12px; border: 1px dashed #1B4D3E; border-radius: 6px; box-shadow: 0 2px 8px rgba(0,0,0,0.04);">
                                <img class="upi-qr" src="https://api.qrserver.com/v1/create-qr-code/?size=140x140&data=upi://pay?pa=${encodeURIComponent(upiId)}%26pn=Shashank%20Gupta%26am=9000.00%26cu=INR" alt="UPI QR Code" style="width: 140px; height: 140px; display: block; border: 1px solid #f0f0f0; border-radius: 4px;">
                            </div>
                        </td>
                    </tr>
                </table>
        `;
        return cleanedHtml.replace(paymentTermsMatch[0], `<div class="inv-payment-terms">${upgradedInnerContent}</div>`);
      }
    }

    // 2. Otherwise, make sure to clean any watermarks from it
    return cleanUpWatermarks(cleanedHtml);
  };

  // State management
  const [activeDoc, setActiveDoc] = useState('onboarding');
  
  // Load initial documents from localStorage if available
  const [documents, setDocuments] = useState(() => {
    const saved = localStorage.getItem('cc_doc_hub_drafts');
    const defaults = {
      onboarding: resolveTemplateHtml(templates.onboarding.html),
      letterhead: resolveTemplateHtml(templates.letterhead.html),
      invoice: resolveTemplateHtml(templates.invoice.html),
      proposal: resolveTemplateHtml(templates.proposal.html),
      nda: resolveTemplateHtml(templates.nda.html),
      sow: resolveTemplateHtml(templates.sow.html),
      changeorder: resolveTemplateHtml(templates.changeorder.html),
      internship: resolveTemplateHtml(templates.internship.html),
      offerletter: resolveTemplateHtml(templates.offerletter.html),
      payslip: resolveTemplateHtml(templates.payslip.html),
      experience: resolveTemplateHtml(templates.experience.html),
      lor: resolveTemplateHtml(templates.lor.html),
    };
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        let updated = false;
        if (parsed.invoice) {
          parsed.invoice = upgradeInvoiceHtml(parsed.invoice);
          if (parsed.invoice.includes('HDFC Bank') || parsed.invoice.includes('Status:</strong> Pending') || parsed.invoice.includes('Status: Pending')) {
            parsed.invoice = parsed.invoice
              .replace(/<strong>Status:<\/strong>\s*Pending/gi, '')
              .replace(/Status:\s*Pending/gi, '')
              .replace(/<strong>Due Date:<\/strong>\s*<span class="mono-val">June 01, 2026<\/span><br>\s*<\/p>/gi, '<strong>Due Date:</strong> <span class="mono-val">June 01, 2026</span></p>')
              .replace(/<strong>Due Date:<\/strong>\s*<span class="mono-val">June 01, 2026<\/span><br>/gi, '<strong>Due Date:</strong> <span class="mono-val">June 01, 2026</span>')
              .replace(/<strong>Account Name:<\/strong>\s*CodeCloverStudio<br>/gi, '<strong>Account Name:</strong> Shashank Gupta<br>')
              .replace(/<strong>Bank:<\/strong>\s*HDFC Bank Ltd<br>/gi, '<strong>Bank:</strong> Federal Bank<br>')
              .replace(/<strong>Account Number:<\/strong>\s*<span class="mono-val">50200087452361<\/span><br>/gi, '<strong>Account Number:</strong> <span class="mono-val">22440100019043</span><br>')
              .replace(/<strong>IFSC Code:<\/strong>\s*<span class="mono-val">HDFC0000124<\/span><br>/gi, '<strong>Mobile Number:</strong> <span class="mono-val">8956730349</span><br>')
              .replace(/<strong>UPI ID:<\/strong>\s*<span class="mono-val">codeclover@upi<\/span>/gi, '<strong>UPI ID:</strong> <span class="mono-val">8956730349@upi</span>')
              .replace(/codeclover@upi%26pn=CodeCloverStudio/gi, '8956730349@upi%26pn=Shashank%20Gupta')
              .replace(/codeclover@upi&pn=CodeCloverStudio/gi, '8956730349@upi&pn=Shashank%20Gupta');
            updated = true;
          }
          if (parsed.invoice.includes('May 23, 2026') || parsed.invoice.includes('June 01, 2026')) {
            const now = new Date();
            const dueDate = new Date();
            dueDate.setDate(now.getDate() + 9);
            const options = { year: 'numeric', month: 'long', day: 'numeric' };
            const dateStr = now.toLocaleDateString('en-US', options);
            const dueDateStr = dueDate.toLocaleDateString('en-US', options);

            parsed.invoice = parsed.invoice
              .replace(/May 23, 2026/g, dateStr)
              .replace(/June 01, 2026/g, dueDateStr);
            updated = true;
          }
        }
        if (parsed.internship && (parsed.internship.includes('width: 297mm') || parsed.internship.includes('297mm 210mm') || !parsed.internship.includes('cert-seal-box') || !parsed.internship.includes('cert-divider') || !parsed.internship.includes('CCS-CERT-') || !parsed.internship.includes('competence, and demonstrated'))) {
          parsed.internship = defaults.internship;
          updated = true;
        }
        if (updated) {
          localStorage.setItem('cc_doc_hub_drafts', JSON.stringify(parsed));
        }
        return { ...defaults, ...parsed };
      } catch (e) {
        console.error('Failed to parse saved drafts', e);
      }
    }
    return defaults;
  });

  // Load version history from localStorage
  const [versionHistory, setVersionHistory] = useState(() => {
    const saved = localStorage.getItem('cc_doc_hub_history');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.error('Failed to parse saved history', e);
      }
    }
    return [];
  });

  // Load invoices state from localStorage
  const [invoices, setInvoices] = useState(() => {
    const saved = localStorage.getItem('cc_doc_hub_invoices');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.error('Failed to parse invoices', e);
      }
    }
    return [];
  });

  // Google Sheets integration state
  const [googleSheetsUrl, setGoogleSheetsUrl] = useState(() => {
    return localStorage.getItem('cc_doc_hub_sheets_url') || '';
  });

  const [isFetchingSheets, setIsFetchingSheets] = useState(false);
  const [isPushingSheets, setIsPushingSheets] = useState(false);

  // Persist invoices & sheet url changes to localStorage
  useEffect(() => {
    localStorage.setItem('cc_doc_hub_invoices', JSON.stringify(invoices));
  }, [invoices]);

  useEffect(() => {
    localStorage.setItem('cc_doc_hub_sheets_url', googleSheetsUrl);
  }, [googleSheetsUrl]);

  // UI state
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [rightPanelOpen, setRightPanelOpen] = useState(true);
  const [rightPanelTab, setRightPanelTab] = useState('metrics');
  const [focusMode, setFocusMode] = useState(false);
  const [zoomLevel, setZoomLevel] = useState(1.0);
  const [canvasTheme, setCanvasTheme] = useState('neutral');
  const [searchTerm, setSearchTerm] = useState('');
  const [showPrintGuides, setShowPrintGuides] = useState(false);

  const [stats, setStats] = useState({ words: 0, chars: 0, readTime: 0 });
  const [logos, setLogos] = useState({ dark: '', light: '' });

  const editorRef = useRef(null);
  const debounceHistoryRef = useRef(null);

  // Load brand logos on startup
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

    loadLogo(getAssetPath('Primary Logo Dark - A.svg'), 'dark');
    loadLogo(getAssetPath('Primary Logo Light - A.svg'), 'light');
  }, []);

  const calculateStats = (html) => {
    if (!html) {
      setStats({ words: 0, chars: 0, readTime: 0, paragraphs: 0 });
      return;
    }
    const cleanHtml = html
      .replace(/<style([\s\S]*?)<\/style>/gi, '')
      .replace(/<script([\s\S]*?)<\/script>/gi, '');
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = cleanHtml;
    const text = tempDiv.innerText || tempDiv.textContent || '';
    const cleanText = text.trim().replace(/\s+/g, ' ');
    const words = cleanText ? cleanText.split(/\s+/).filter(w => w.length > 0).length : 0;
    const chars = text.length;
    const readTime = Math.max(1, Math.ceil(words / 200));
    
    // Calculate paragraph approximations safely
    const paragraphs = (cleanHtml.match(/<p[ >]/g) || []).length;
    const divs = (cleanHtml.match(/<div[ >]/g) || []).length;
    const tableRows = (cleanHtml.match(/<tr[ >]/g) || []).length;
    const paragraphCount = Math.max(1, paragraphs + Math.floor(divs / 3) + tableRows);

    setStats({ words, chars, readTime, paragraphs: paragraphCount });
  };

  // Sync ref with content and calculate stats whenever activeDoc changes or document content is updated
  useEffect(() => {
    if (editorRef.current && editorRef.current.innerHTML !== documents[activeDoc]) {
      editorRef.current.innerHTML = documents[activeDoc];
      calculateStats(documents[activeDoc]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeDoc, documents]);

  // Debounced snapshot logger for version history timeline
  const saveHistorySnapshot = (docId, html) => {
    if (!html) return;
    
    setVersionHistory(prev => {
      const docHistory = prev.filter(h => h.docId === docId);
      const lastSnapshot = docHistory[0]; // chronological, newest first
      
      if (lastSnapshot && lastSnapshot.content === html) {
        return prev;
      }
      
      const cleanHtml = html
        .replace(/<style([\s\S]*?)<\/style>/gi, '')
        .replace(/<script([\s\S]*?)<\/script>/gi, '');
      const tempDiv = document.createElement('div');
      tempDiv.innerHTML = cleanHtml;
      const text = tempDiv.innerText || tempDiv.textContent || '';
      const cleanText = text.trim().replace(/\s+/g, ' ');
      const words = cleanText ? cleanText.split(/\s+/).filter(w => w.length > 0).length : 0;
      
      const newSnapshot = {
        docId,
        timestamp: Date.now(),
        content: html,
        wordCount: words
      };
      
      const updated = [newSnapshot, ...prev].slice(0, 30); // cache top 30 snapshots
      localStorage.setItem('cc_doc_hub_history', JSON.stringify(updated));
      return updated;
    });
  };

  const handleDocChange = (newDocId) => {
    if (activeDoc === newDocId) return;
    
    // Save current HTML from DOM to state before switching
    if (editorRef.current) {
      const html = editorRef.current.innerHTML;
      
      if (debounceHistoryRef.current) {
        clearTimeout(debounceHistoryRef.current);
      }
      saveHistorySnapshot(activeDoc, html);

      setDocuments(prev => {
        const updated = { ...prev, [activeDoc]: html };
        localStorage.setItem('cc_doc_hub_drafts', JSON.stringify(updated));
        return updated;
      });
    }
    setActiveDoc(newDocId);
  };

  const runInvoiceCalculations = () => {
    if (!editorRef.current) return;
    
    const rows = editorRef.current.querySelectorAll('.inv-table tbody tr');
    let calculatedSubtotal = 0;
    
    rows.forEach(row => {
      const tds = row.querySelectorAll('td');
      if (tds.length === 4) {
        const qtyText = tds[1].innerText.replace(/[^0-9.-]/g, '');
        const qty = parseFloat(qtyText) || 0;
        
        const rateText = tds[2].innerText.replace(/[^0-9.-]/g, '');
        const rate = parseFloat(rateText) || 0;
        
        const rowTotal = qty * rate;
        calculatedSubtotal += rowTotal;
        
        const formattedTotal = '₹' + rowTotal.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
        if (tds[3].innerText.trim() !== formattedTotal) {
          tds[3].innerText = formattedTotal;
        }
      }
    });

    const subtotalLabelCell = Array.from(editorRef.current.querySelectorAll('td')).find(el => el.innerText.trim() === 'Subtotal:');
    if (subtotalLabelCell) {
      const subtotalValueCell = subtotalLabelCell.nextElementSibling;
      if (subtotalValueCell) {
        const formattedSubtotal = '₹' + calculatedSubtotal.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
        if (subtotalValueCell.innerText.trim() !== formattedSubtotal) {
          subtotalValueCell.innerText = formattedSubtotal;
        }
      }
    }

    const totalLabelCell = Array.from(editorRef.current.querySelectorAll('td')).find(el => el.innerText.trim() === 'Total Outstanding:');
    if (totalLabelCell) {
      const totalValueCell = totalLabelCell.nextElementSibling;
      if (totalValueCell) {
        const formattedTotal = '₹' + calculatedSubtotal.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
        if (totalValueCell.innerText.trim() !== formattedTotal) {
          totalValueCell.innerText = formattedTotal;
        }
      }
    }

    // Update dynamic UPI QR Code url with new total amount if present and using api.qrserver.com
    const upiQrImg = editorRef.current.querySelector('.upi-qr');
    if (upiQrImg && upiQrImg.src.includes('api.qrserver.com')) {
      const currentSrc = upiQrImg.src;
      let newSrc = currentSrc;
      const amMatch = currentSrc.match(/(%26am%3D|%26am=|&am%3D|&am=)([0-9.]+)/i);
      if (amMatch) {
        newSrc = currentSrc.replace(/(%26am%3D|%26am=|&am%3D|&am=)[0-9.]+/i, amMatch[1] + calculatedSubtotal.toFixed(2));
      }
      if (upiQrImg.src !== newSrc) {
        upiQrImg.src = newSrc;
      }
    }
  };

  const handleInput = () => {
    if (editorRef.current) {
      if (activeDoc === 'invoice') {
        runInvoiceCalculations();
      }
      const html = editorRef.current.innerHTML;
      calculateStats(html);
      
      // Live state update for word counts in sidebar
      setDocuments(prev => {
        const updated = { ...prev, [activeDoc]: html };
        localStorage.setItem('cc_doc_hub_drafts', JSON.stringify(updated));
        return updated;
      });

      // Clear previous snapshot timer
      if (debounceHistoryRef.current) {
        clearTimeout(debounceHistoryRef.current);
      }

      // Schedule history snapshot after 4 seconds of typing idle
      debounceHistoryRef.current = setTimeout(() => {
        saveHistorySnapshot(activeDoc, html);
      }, 4000);
    }
  };

  const executeCommand = (command, value = null) => {
    document.execCommand(command, false, value);
  };

  // Auto-sync helper to silently post changes to Google Sheets
  const syncInvoicesToSheets = async (list) => {
    if (!googleSheetsUrl) return;
    try {
      await fetch(googleSheetsUrl, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(list)
      });
      console.log('Auto-synced update to Google Sheets');
    } catch (err) {
      console.error('Auto-sync to sheets failed', err);
    }
  };

  // Invoice management handlers
  const handleUpdateInvoiceStatus = (invoiceNo, newStatus) => {
    setInvoices(prev => {
      const updated = prev.map(inv => 
        inv.invoiceNo === invoiceNo ? { ...inv, status: newStatus } : inv
      );
      syncInvoicesToSheets(updated);
      return updated;
    });
  };

  const handleUpsertInvoice = (invoice) => {
    setInvoices(prev => {
      const exists = prev.some(inv => inv.invoiceNo === invoice.invoiceNo);
      let updated;
      if (exists) {
        updated = prev.map(inv => inv.invoiceNo === invoice.invoiceNo ? { ...inv, ...invoice } : inv);
      } else {
        updated = [invoice, ...prev];
      }
      syncInvoicesToSheets(updated);
      return updated;
    });
  };

  const handleDeleteInvoice = (invoiceNo) => {
    setInvoices(prev => {
      const updated = prev.filter(inv => inv.invoiceNo !== invoiceNo);
      syncInvoicesToSheets(updated);
      return updated;
    });
  };

  const handleFetchInvoicesFromSheets = async (silent = false) => {
    if (!googleSheetsUrl) {
      if (!silent) alert('Please enter a Google Apps Script Web App URL first.');
      return;
    }
    setIsFetchingSheets(true);
    try {
      const response = await fetch(googleSheetsUrl);
      if (!response.ok) throw new Error('Network response was not ok');
      const data = await response.json();
      if (Array.isArray(data)) {
        const formatted = data.map(item => ({
          invoiceNo: String(item.invoiceNo || item.invoice_number || item.Number || ''),
          client: String(item.client || item.client_name || item.Client || 'Unknown Client'),
          date: String(item.date || item.Date || ''),
          amount: Number(item.amount || item.Amount || 0),
          status: String(item.status || item.Status || 'Pending')
        })).filter(item => item.invoiceNo);

        setInvoices(formatted);
        if (!silent) alert('Successfully synchronized data FROM Google Sheets!');
      } else {
        throw new Error('Data format returned is not a JSON array.');
      }
    } catch (err) {
      console.error('Failed to fetch from sheets', err);
      if (!silent) {
        alert(`Connection Failed: Make sure your Apps Script Web App is deployed with "Anyone" access.\nDetails: ${err.message}`);
      }
    } finally {
      setIsFetchingSheets(false);
    }
  };

  const handlePushInvoicesToSheets = async () => {
    if (!googleSheetsUrl) {
      alert('Please enter a Google Apps Script Web App URL first.');
      return;
    }
    setIsPushingSheets(true);
    try {
      await fetch(googleSheetsUrl, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(invoices)
      });
      alert('Sent synchronization request to Google Sheets! Check your sheet in a few seconds.');
    } catch (err) {
      console.error('Failed to push to sheets', err);
      alert(`Push Failed: Make sure your Apps Script Web App is deployed with "Anyone" access.\nDetails: ${err.message}`);
    } finally {
      setIsPushingSheets(false);
    }
  };

  // Silent auto-fetch from Google Sheets on mount if URL configured
  useEffect(() => {
    if (googleSheetsUrl) {
      const timer = setTimeout(() => {
        handleFetchInvoicesFromSheets(true);
      }, 0);
      return () => clearTimeout(timer);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleDownloadDoc = () => {
    if (!editorRef.current) return;

    const header = "<html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'><head><meta charset='utf-8'><title>Export HTML To Doc</title><style>" + templates[activeDoc].style + "</style></head><body>";
    const footer = "</body></html>";
    
    let content = editorRef.current.innerHTML;
    if (logos.dark) {
      const resolvedPath = getAssetPath('Primary Logo Dark - A.svg');
      const escapedPath = resolvedPath.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&');
      content = content.replace(new RegExp(escapedPath, 'g'), logos.dark);
    }
    if (logos.light) {
      const resolvedPath = getAssetPath('Primary Logo Light - A.svg');
      const escapedPath = resolvedPath.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&');
      content = content.replace(new RegExp(escapedPath, 'g'), logos.light);
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
    if (editorRef.current) {
      setDocuments(prev => {
        const updated = { ...prev, [activeDoc]: editorRef.current.innerHTML };
        localStorage.setItem('cc_doc_hub_drafts', JSON.stringify(updated));
        return updated;
      });
    }

    try {
      if (window.html2pdf) {
        const opt = {
          margin: activeDoc === 'internship' ? 0 : [12, 0, 12, 0],
          filename: `${activeDoc}_document.pdf`,
          image: { type: 'jpeg', quality: 0.98 },
          html2canvas: { scale: 2, useCORS: true, logging: false, scrollY: 0 },
          jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
          pagebreak: { 
            mode: ['css', 'legacy'], 
            before: ['.doc-page-break', '.prop-page-break', '.page-break'] 
          }
        };

        let content = editorRef.current.innerHTML;
        if (logos.dark) {
          const resolvedPath = getAssetPath('Primary Logo Dark - A.svg');
          const escapedPath = resolvedPath.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&');
          content = content.replace(new RegExp(escapedPath, 'g'), logos.dark);
        }
        if (logos.light) {
          const resolvedPath = getAssetPath('Primary Logo Light - A.svg');
          const escapedPath = resolvedPath.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&');
          content = content.replace(new RegExp(escapedPath, 'g'), logos.light);
        }

        const container = document.createElement('div');
        container.style.width = '210mm';
        container.style.backgroundColor = '#ffffff';
        
        const styleTag = document.createElement('style');
        styleTag.innerHTML = templates[activeDoc].style + `
          .doc-page, .lh-page, .inv-page, .prop-page, .nda-page {
            display: block !important;
            min-height: auto !important;
            height: auto !important;
            width: 100% !important;
            margin: 0 !important;
            padding: 0 !important;
          }
          .cert-page {
            display: block !important;
            height: 296mm !important;
            min-height: 296mm !important;
            max-height: 296mm !important;
            width: 210mm !important;
            margin: 0 !important;
            padding: 10mm !important;
            box-sizing: border-box !important;
            overflow: hidden !important;
            page-break-after: avoid !important;
            break-after: avoid !important;
          }
          .doc-content, .lh-content, .inv-content, .prop-body, .nda-content {
            display: block !important;
            flex: none !important;
            padding: 40px 50px !important;
          }
          .doc-page > table:first-of-type, .lh-page > table:first-of-type, .inv-page > table:first-of-type, .prop-page > table:first-of-type, .nda-page > table:first-of-type {
            margin-top: 0 !important;
          }
          .doc-page > table:last-of-type:not(:first-of-type), 
          .lh-page > table:last-of-type:not(:first-of-type), 
          .inv-page > table:last-of-type:not(:first-of-type), 
          .prop-page > table:last-of-type:not(:first-of-type), 
          .nda-page > table:last-of-type:not(:first-of-type) {
            margin-top: 40px !important;
            page-break-inside: avoid !important;
            break-inside: avoid !important;
          }
          .doc-page-break, .prop-page-break, .page-break {
            page-break-before: always !important;
            break-before: page !important;
            height: 0 !important;
            margin: 0 !important;
            padding: 0 !important;
            display: block !important;
            clear: both !important;
          }
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
      const defaultHtml = resolveTemplateHtml(templates[activeDoc].html);
      if (editorRef.current) {
        editorRef.current.innerHTML = defaultHtml;
        calculateStats(defaultHtml);
        
        setDocuments(prev => {
          const updated = { ...prev, [activeDoc]: defaultHtml };
          localStorage.setItem('cc_doc_hub_drafts', JSON.stringify(updated));
          return updated;
        });

        saveHistorySnapshot(activeDoc, defaultHtml);
      }
    }
  };

  const handleRestoreHistory = (content) => {
    if (window.confirm("Are you sure you want to restore this draft version? Your current changes will be overwritten.")) {
      if (editorRef.current) {
        editorRef.current.innerHTML = content;
        calculateStats(content);
        
        setDocuments(prev => {
          const updated = { ...prev, [activeDoc]: content };
          localStorage.setItem('cc_doc_hub_drafts', JSON.stringify(updated));
          return updated;
        });

        // Trigger immediate history log entry
        saveHistorySnapshot(activeDoc, content);
      }
    }
  };

  const handleResetAll = () => {
    if (window.confirm("WARNING: Are you sure you want to reset ALL documents in this workspace to their factory defaults? All customized draft copies will be permanently deleted.")) {
      localStorage.removeItem('cc_doc_hub_drafts');
      localStorage.removeItem('cc_doc_hub_history');
      
      const defaults = {
        onboarding: resolveTemplateHtml(templates.onboarding.html),
        letterhead: resolveTemplateHtml(templates.letterhead.html),
        invoice: resolveTemplateHtml(templates.invoice.html),
        proposal: resolveTemplateHtml(templates.proposal.html),
        nda: resolveTemplateHtml(templates.nda.html),
        sow: resolveTemplateHtml(templates.sow.html),
        changeorder: resolveTemplateHtml(templates.changeorder.html),
        internship: resolveTemplateHtml(templates.internship.html),
        offerletter: resolveTemplateHtml(templates.offerletter.html),
        payslip: resolveTemplateHtml(templates.payslip.html),
        experience: resolveTemplateHtml(templates.experience.html),
        lor: resolveTemplateHtml(templates.lor.html),
      };
      
      setDocuments(defaults);
      setVersionHistory([]);
      
      if (editorRef.current) {
        editorRef.current.innerHTML = defaults[activeDoc];
        calculateStats(defaults[activeDoc]);
      }
    }
  };

  return (
    <div className="flex h-screen w-full bg-brand-dark-slate overflow-hidden font-sans text-gray-800">
      
      {/* Sidebar (Left Navigation) */}
      {!focusMode && (
        <Sidebar 
          activeDoc={activeDoc}
          onDocChange={handleDocChange}
          documents={documents}
          sidebarCollapsed={sidebarCollapsed}
          setSidebarCollapsed={setSidebarCollapsed}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          onResetAll={handleResetAll}
        />
      )}

      {/* Main Workspace Frame */}
      <div className="flex-1 flex flex-col h-full overflow-hidden">
        
        {/* Workspace Topbar */}
        <Header 
          activeDoc={activeDoc}
          onReset={resetToDefault}
          onExportPdf={handlePrintPdf}
          onExportWord={handleDownloadDoc}
          sidebarCollapsed={sidebarCollapsed}
          setSidebarCollapsed={setSidebarCollapsed}
          rightPanelOpen={rightPanelOpen}
          setRightPanelOpen={setRightPanelOpen}
          focusMode={focusMode}
          setFocusMode={setFocusMode}
          zoomLevel={zoomLevel}
          setZoomLevel={setZoomLevel}
          canvasTheme={canvasTheme}
          setCanvasTheme={setCanvasTheme}
          showPrintGuides={showPrintGuides}
          setShowPrintGuides={setShowPrintGuides}
        />
        
        {/* Sticky formatting tool belt */}
        {!focusMode && <Toolbar onExecuteCommand={executeCommand} />}
        
        {/* Document Canvas Workspace */}
        <Editor 
          editorRef={editorRef}
          onInput={handleInput}
          activeStyle={templates[activeDoc].style}
          zoomLevel={zoomLevel}
          canvasTheme={canvasTheme}
          showPrintGuides={showPrintGuides}
        />
      </div>

      {/* Dashboard Analytics & Version Drawer (Right Panel) */}
      {!focusMode && (
        <DashboardPanel 
          editorRef={editorRef}
          activeDoc={activeDoc}
          stats={stats}
          documents={documents}
          versionHistory={versionHistory}
          onRestoreHistory={handleRestoreHistory}
          rightPanelOpen={rightPanelOpen}
          setRightPanelOpen={setRightPanelOpen}
          activeTab={rightPanelTab}
          setActiveTab={setRightPanelTab}
          invoices={invoices}
          onUpdateInvoiceStatus={handleUpdateInvoiceStatus}
          onUpsertInvoice={handleUpsertInvoice}
          onDeleteInvoice={handleDeleteInvoice}
          googleSheetsUrl={googleSheetsUrl}
          setGoogleSheetsUrl={setGoogleSheetsUrl}
          onFetchInvoicesFromSheets={handleFetchInvoicesFromSheets}
          onPushInvoicesToSheets={handlePushInvoicesToSheets}
          isFetchingSheets={isFetchingSheets}
          isPushingSheets={isPushingSheets}
        />
      )}
    </div>
  );
}

export default App;
