export const internship = {
  style: `
    @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;700&family=Playfair+Display:ital,wght@0,600;1,600&display=swap');
    
    * {
        box-sizing: border-box;
    }
    @page Section1 {
        size: 210mm 297mm;
        margin: 0in 0in 0in 0in;
    }
    .cert-page {
        font-family: 'Inter', sans-serif;
        color: #2c3539;
        line-height: 1.6;
        width: 210mm;
        height: 297mm;
        background-color: #ffffff;
        margin: 0 auto;
        position: relative;
        padding: 10mm;
        text-align: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .cert-border {
        border: 8px solid #1B4D3E;
        padding: 70px 40px 60px 40px;
        width: 100%;
        height: 100%;
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        background: radial-gradient(circle at 50% 50%, #ffffff 0%, #FAF8F4 100%);
        box-shadow: inset 0 0 40px rgba(27, 77, 62, 0.03);
    }
    .cert-border-inner {
        position: absolute;
        top: 8px;
        left: 8px;
        right: 8px;
        bottom: 8px;
        border: 1px solid #1B4D3E;
        pointer-events: none;
    }
    /* Corner Ornaments */
    .cert-corner-tl, .cert-corner-tr, .cert-corner-bl, .cert-corner-br {
        position: absolute;
        width: 16px;
        height: 16px;
        border: 3px solid #1B4D3E;
        pointer-events: none;
    }
    .cert-corner-tl { top: -4px; left: -4px; border-right: none; border-bottom: none; }
    .cert-corner-tr { top: -4px; right: -4px; border-left: none; border-bottom: none; }
    .cert-corner-bl { bottom: -4px; left: -4px; border-right: none; border-top: none; }
    .cert-corner-br { bottom: -4px; right: -4px; border-left: none; border-top: none; }

    .cert-header {
        margin-top: 15px;
        margin-bottom: 20px;
    }
    .cert-logo {
        height: 48px;
        margin-bottom: 18px;
        display: block;
        margin-left: auto;
        margin-right: auto;
    }
    .cert-title-main {
        font-family: 'Space Grotesk', sans-serif;
        font-size: 26px;
        font-weight: 800;
        color: #0A0F0F;
        letter-spacing: 3px;
        margin: 0 0 6px 0;
        text-transform: uppercase;
    }
    .cert-subtitle {
        font-family: 'Space Grotesk', sans-serif;
        font-size: 12px;
        font-weight: 700;
        color: #1B4D3E;
        letter-spacing: 5px;
        text-transform: uppercase;
        margin: 0;
    }
    .cert-recipient-pre {
        font-family: 'Playfair Display', serif;
        font-style: italic;
        font-size: 15px;
        color: #4A5D54;
        margin-top: 35px;
        margin-bottom: 10px;
    }
    .cert-recipient-name {
        font-family: 'Space Grotesk', sans-serif;
        font-size: 24px;
        font-weight: 700;
        color: #0A0F0F;
        border-bottom: 2px solid #1B4D3E;
        padding-bottom: 4px;
        display: inline-block;
        margin-bottom: 22px;
    }
    .cert-body-text {
        font-size: 13px;
        color: #33423b;
        max-width: 520px;
        margin: 0 auto 30px auto;
        line-height: 1.8;
    }
    .cert-seal-box {
        margin: 15px auto;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .cert-meta-table {
        width: 100%;
        max-width: 560px;
        margin-top: 30px;
        margin-bottom: 15px;
        border-collapse: collapse;
        table-layout: fixed;
    }
    .cert-meta-table td {
        vertical-align: bottom;
        text-align: center;
        border: none;
    }
    .cert-signature-line {
        border-top: 1px solid #a0aab2;
        width: 130px;
        margin: 0 auto 8px auto;
    }
    .cert-meta-title {
        font-family: 'Space Grotesk', sans-serif;
        font-size: 10px;
        font-weight: bold;
        color: #0A0F0F;
        text-transform: uppercase;
        letter-spacing: 1px;
    }
    .cert-meta-sub {
        font-size: 10px;
        color: #55665e;
    }
    .mono-val {
        font-family: 'JetBrains Mono', monospace;
    }
  `,
  html: `
    <div class="cert-page">
        <div class="cert-border">
            <div style="position: absolute; top: 25px; right: 30px; font-family: 'JetBrains Mono', monospace; font-size: 10px; color: #55665e;">
                Cert No: <strong style="color: #1B4D3E;">CCS-CERT-2026-082</strong>
            </div>

            <div class="cert-border-inner">
                <div class="cert-corner-tl"></div>
                <div class="cert-corner-tr"></div>
                <div class="cert-corner-bl"></div>
                <div class="cert-corner-br"></div>
            </div>
            
            <div class="cert-header">
                <img class="cert-logo" src="/Primary Logo Light - A.svg" alt="CodeCloverStudio">
                <h2 class="cert-title-main">Certificate of Internship</h2>
                <h3 class="cert-subtitle">Completion Award</h3>
            </div>
            
            <div class="cert-divider" style="margin: 20px auto 10px auto; display: flex; justify-content: center; align-items: center; gap: 10px;">
                <div style="height: 1px; width: 50px; background-color: rgba(27, 77, 62, 0.3);"></div>
                <svg width="24" height="8" viewBox="0 0 24 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <polygon points="4,4 6,2 8,4 6,6" fill="#1B4D3E"/>
                    <polygon points="10,4 12,1 14,4 12,7" fill="#1B4D3E"/>
                    <polygon points="16,4 18,2 20,4 18,6" fill="#1B4D3E"/>
                </svg>
                <div style="height: 1px; width: 50px; background-color: rgba(27, 77, 62, 0.3);"></div>
            </div>
            
            <div>
                <p class="cert-recipient-pre">This certificate is proudly presented to</p>
                <div class="cert-recipient-name">Aarav Sharma</div>
                <p class="cert-body-text">
                    in recognition of their successful completion of the <strong>3-month</strong> internship program at <strong style="font-family: 'Space Grotesk', sans-serif; font-size: 13px; letter-spacing: 0.5px; color: #0A0F0F;">CODECLOVER<span style="color: #1B4D3E; font-weight: 850;">STUDIO</span></strong>. The internship was held from <strong>March 01, 2026</strong> to <strong>May 31, 2026</strong>, during which they served as a <strong>Frontend Developer Intern</strong>.
                    <br><br>
                    Throughout the duration of this internship, <strong>Aarav Sharma</strong> has displayed a high level of dedication, professionalism, and technical competence, and demonstrated a strong willingness to learn and adapt. We appreciate their hard work and valuable contributions to <strong style="font-family: 'Space Grotesk', sans-serif; font-size: 13px; letter-spacing: 0.5px; color: #0A0F0F;">CODECLOVER<span style="color: #1B4D3E; font-weight: 850;">STUDIO</span></strong> and wish them the absolute best in their future professional endeavors.
                </p>
            </div>
            
            <div class="cert-seal-box">
                <div style="width: 50px; height: 50px; border-radius: 50%; border: 2px double #1B4D3E; display: flex; align-items: center; justify-content: center; background-color: rgba(27, 77, 62, 0.04);">
                    <div style="width: 36px; height: 36px; border-radius: 50%; background-color: #1B4D3E; display: flex; align-items: center; justify-content: center;">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2EFF9C" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                            <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                    </div>
                </div>
            </div>
            
            <table class="cert-meta-table" cellspacing="0" cellpadding="0">
                <tr>
                    <td>
                        <span class="mono-val" style="font-size: 12px; font-weight: 600; display: block; margin-bottom: 5px;">June 01, 2026</span>
                        <div class="cert-signature-line"></div>
                        <span class="cert-meta-title">Date of Issue</span>
                    </td>
                    <td>
                        <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIGhlaWdodD0iNDAiPjx0ZXh0IHg9IjEwIiB5PSIyNSIgZm9udC1mYW1pbHk9IkJydXNoIFNjcmlwdCBNVCwgY3Vyc2l2ZSIgZm9udC1zaXplPSIyMCIgZmlsbD0iIzFCNEQzRSI+U2hhc2hhbms8L3RleHQ+PC9zdmc+" alt="Founder Signature" style="height: 35px; display: block; margin: 0 auto 5px auto;">
                        <div class="cert-signature-line"></div>
                        <span class="cert-meta-title">Shashank Gupta</span><br>
                        <span class="cert-meta-sub">Founder, CodeCloverStudio</span>
                    </td>
                    <td>
                        <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIGhlaWdodD0iNDAiPjx0ZXh0IHg9IjEwIiB5PSIyNSIgZm9udC1mYW1pbHk9IkJydXNoIFNjcmlwdCBNVCwgY3Vyc2l2ZSIgZm9udC1zaXplPSIyMCIgZmlsbD0iIzFCNEQzRSI+RGhhbmVzaDwvdGV4dD48L3N2Zz4=" alt="Co-Founder Signature" style="height: 35px; display: block; margin: 0 auto 5px auto;">
                        <div class="cert-signature-line"></div>
                        <span class="cert-meta-title">Dhanesh Kamble</span><br>
                        <span class="cert-meta-sub">Co-Founder, CodeCloverStudio</span>
                    </td>
                </tr>
            </table>
        </div>
    </div>
  `
};
