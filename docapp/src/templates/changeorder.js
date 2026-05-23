export const changeorder = {
  style: `
    @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;700&display=swap');
    
    * {
        box-sizing: border-box;
    }
    @page Section1 {
        size: 210mm 297mm;
        margin: 0in 0in 0in 0in;
        mso-header-margin: 0in;
        mso-footer-margin: 0in;
    }
    .Section1 {
        page: Section1;
    }
    .co-page {
        font-family: 'Inter', sans-serif;
        color: #333333;
        line-height: 1.6;
        font-size: 13px;
        width: 210mm;
        min-height: 297mm;
        background-color: #ffffff;
        margin: 0 auto;
        position: relative;
        display: flex;
        flex-direction: column;
        text-align: left;
    }
    .co-content {
        padding: 40px 50px;
        flex: 1;
    }
    .co-title {
        text-align: center;
        margin-bottom: 30px;
    }
    .co-title h2 {
        margin: 0;
        font-size: 20px;
        color: #0A0F0F;
        text-transform: uppercase;
        font-weight: 700;
        letter-spacing: 1px;
        font-family: 'Space Grotesk', sans-serif;
    }
    .co-section-title {
        color: #1B4D3E;
        font-size: 14px;
        margin-top: 30px;
        margin-bottom: 15px;
        text-transform: uppercase;
        border-bottom: 1px solid #e0e0e0;
        padding-bottom: 5px;
        font-weight: 700;
        letter-spacing: 0.5px;
        font-family: 'Space Grotesk', sans-serif;
    }
    .co-table {
        width: 100%;
        border-collapse: collapse;
        margin-bottom: 25px;
        table-layout: fixed;
    }
    .co-table th, .co-table td {
        border: 1px solid #e0e0e0;
        padding: 10px 15px;
        text-align: left;
        vertical-align: top;
        word-wrap: break-word;
    }
    .co-table th {
        background-color: #0A0F0F;
        color: #2EFF9C;
        font-weight: 600;
        text-transform: uppercase;
        font-size: 11px;
        letter-spacing: 0.5px;
        font-family: 'Space Grotesk', sans-serif;
    }
    .co-table td.bg-light {
        background-color: #f8f9fa;
        font-weight: 600;
        width: 35%;
        font-family: 'Space Grotesk', sans-serif;
    }
    .mono-val {
        font-family: 'JetBrains Mono', monospace;
        font-weight: 500;
    }
  `,
  html: `
    <div class="co-page Section1">
        <!-- Header (Table Layout for Word Compatibility) -->
        <table style="width: 100%; background-color: #0A0F0F; border-bottom: 4px solid #1B4D3E; table-layout: fixed;" cellspacing="0" border="0">
            <tr>
                <td style="text-align: left; vertical-align: middle; padding: 25px 30px;">
                    <img src="/Primary Logo Dark - A.svg" alt="CodeCloverStudio" style="height: 45px; display: block; border: 0;">
                </td>
                <td style="text-align: right; vertical-align: middle; padding: 25px 30px;">
                    <h1 style="margin: 0; font-size: 18px; color: #2EFF9C; font-family: 'Space Grotesk', sans-serif; text-transform: uppercase; font-weight: 700; letter-spacing: 1px;">CHANGE ORDER FORM</h1>
                    <p style="margin: 5px 0 0 0; font-size: 11px; color: #E8EBEC; letter-spacing: 2px; font-family: 'Space Grotesk', sans-serif;">CODECLOVERSTUDIO</p>
                </td>
            </tr>
        </table>

        <main class="co-content">
            <div class="co-title">
                <h2>PROJECT SCOPE CHANGE ORDER</h2>
            </div>

            <!-- Meta Box (Table Layout for Word Compatibility) -->
            <table style="width: 100%; margin-bottom: 30px; border: none; table-layout: fixed;" border="0" cellpadding="0" cellspacing="15">
                <tr>
                    <td style="vertical-align: top;">
                        <h3 style="margin: 0 0 10px 0; font-size: 11px; color: #1B4D3E; text-transform: uppercase; font-weight: 700; border-bottom: 1px solid #e0e0e0; padding-bottom: 5px; font-family: 'Space Grotesk', sans-serif;">Client Partner</h3>
                        <p style="margin: 0; font-size: 12px; color: #555;">
                            <strong>Achievers Study Point</strong><br>
                            Ganesh Kotangle Sir<br>
                            Nagpur, Maharashtra
                        </p>
                    </td>
                    <td style="vertical-align: top;">
                        <h3 style="margin: 0 0 10px 0; font-size: 11px; color: #1B4D3E; text-transform: uppercase; font-weight: 700; border-bottom: 1px solid #e0e0e0; padding-bottom: 5px; font-family: 'Space Grotesk', sans-serif;">Change Order Metadata</h3>
                        <p style="margin: 0; font-size: 12px; color: #555; font-family: 'Inter', sans-serif;">
                            <strong>Change Order #:</strong> <span class="mono-val">CCS-CO-2026-001</span><br>
                            <strong>Date:</strong> <span class="mono-val">May 24, 2026</span><br>
                            <strong>Reference SOW:</strong> CCS-SOW-2026-001 (Web Development & SEO)
                        </p>
                    </td>
                </tr>
            </table>

            <div class="co-section-title">1. REQUESTED CHANGES & MODIFICATIONS</div>
            <p>This Change Order confirms additional scope requests made by the Client regarding the ongoing website and branding configuration. The following amendments are hereby added to the project deliverables:</p>
            
            <table class="co-table">
                <thead>
                    <tr>
                        <th style="width: 30%;">SCOPE AMENDMENT</th>
                        <th style="width: 50%;">REVISION DETAILS & DESCRIPTION</th>
                        <th style="width: 20%;">EST. TIMELINE</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><strong>Logo Branding Package</strong></td>
                        <td>Create 3 professional logo design concepts with full corporate brand style guide (color palettes, typographic pairings, and guidelines).</td>
                        <td class="mono-val">+3 Days</td>
                    </tr>
                    <tr>
                        <td><strong>Payment Gateway Setup</strong></td>
                        <td>Integrate Razorpay / Instamojo API configurations on the website to allow direct online course registrations and payment collections.</td>
                        <td class="mono-val">+2 Days</td>
                    </tr>
                </tbody>
            </table>

            <div class="co-section-title">2. FINANCIAL IMPACT SUMMARY</div>
            <p>The scope amendments detailed above result in an adjustment to the original project budget as summarized below:</p>
            
            <table class="co-table">
                <tbody>
                    <tr>
                        <td class="bg-light">Original Project Budget (SOW-001)</td>
                        <td class="mono-val">₹9,000.00</td>
                    </tr>
                    <tr>
                        <td class="bg-light">Change Order Fee (Logo & Payments Package)</td>
                        <td class="mono-val">₹4,500.00</td>
                    </tr>
                    <tr>
                        <td class="bg-light" style="color: #1B4D3E; font-weight: bold;">New Total Project Budget</td>
                        <td class="mono-val" style="font-weight: bold; color: #1B4D3E;">₹13,500.00</td>
                    </tr>
                    <tr>
                        <td class="bg-light">Billing Schedule for Change Order</td>
                        <td>50% advance (₹2,250) upon signing this Change Order; 50% upon final website deployment.</td>
                    </tr>
                </tbody>
            </table>

            <div class="co-section-title">3. SCHEDULING IMPACT</div>
            <p>The execution of these revisions adds a total of <strong class="mono-val">5 business days</strong> to the original launch date. The estimated launching deadline is hereby revised from June 20, 2026, to <strong>June 25, 2026</strong>.</p>

            <div class="co-section-title">4. AUTHORIZATION SIGN-OFF</div>
            <p>By signing below, both CodeCloverStudio and the Client authorize the scope amendments, budget adjustments, and timeline updates detailed in this Change Order.</p>

            <!-- Signatures via Table -->
            <table style="width: 100%; margin-top: 40px; border: none; table-layout: fixed;" border="0" cellpadding="0" cellspacing="15">
                <tr>
                    <td style="border: 1px solid #e0e0e0; padding: 20px; background-color: #fafafa; vertical-align: top; border-radius: 4px;">
                        <h4 style="margin: 0 0 20px 0; color: #0A0F0F; text-transform: uppercase; text-align: center; border-bottom: 1px solid #e0e0e0; padding-bottom: 10px; font-size: 12px; font-weight: 700; font-family: 'Space Grotesk', sans-serif;">AGENCY SIDE</h4>
                        <strong style="font-family: 'Space Grotesk', sans-serif;">CodeCloverStudio</strong><br>
                        <span style="font-size: 13px;">Shashank Gupta (Founder)</span>
                        <div style="border-bottom: 1px dashed #555555; margin: 30px 0 10px 0; height: 1px;"></div>
                        <div style="font-size: 11px; color: #555555;">Signature</div>
                        <div style="border-bottom: 1px dashed #555555; margin: 20px 0 10px 0; height: 1px;"></div>
                        <div style="font-size: 11px; color: #555555;">Date</div>
                    </td>
                    <td style="border: 1px solid #e0e0e0; padding: 20px; background-color: #fafafa; vertical-align: top; border-radius: 4px;">
                        <h4 style="margin: 0 0 20px 0; color: #0A0F0F; text-transform: uppercase; text-align: center; border-bottom: 1px solid #e0e0e0; padding-bottom: 10px; font-size: 12px; font-weight: 700; font-family: 'Space Grotesk', sans-serif;">CLIENT SIDE</h4>
                        <strong style="font-family: 'Space Grotesk', sans-serif;">Achievers Study Point</strong><br>
                        <span style="font-size: 13px;">Ganesh Kotangle Sir</span>
                        <div style="border-bottom: 1px dashed #555555; margin: 30px 0 10px 0; height: 1px;"></div>
                        <div style="font-size: 11px; color: #555555;">Signature</div>
                        <div style="border-bottom: 1px dashed #555555; margin: 20px 0 10px 0; height: 1px;"></div>
                        <div style="font-size: 11px; color: #555555;">Date</div>
                    </td>
                </tr>
            </table>
        </main>

        <!-- Footer (Table Layout for Word Compatibility) -->
        <table style="width: 100%; background-color: #1B4D3E; border-top: 4px solid #1B4D3E; margin-top: auto; table-layout: fixed;" cellspacing="0" border="0">
            <tr>
                <td style="width: 35%; vertical-align: top; text-align: left; padding: 20px 30px;">
                    <strong style="color: #ffffff; font-size: 14px; letter-spacing: 1px; font-family: 'Space Grotesk', sans-serif;">CODECLOVER<span style="color: #2EFF9C;">STUDIO</span></strong>
                    <p style="font-size: 10px; color: #a0aab2; max-width: 250px; margin: 8px 0 0 0; line-height: 1.6;">
                        A premier digital marketing & branding agency dedicated to accelerating business growth through creative strategies.
                    </p>
                </td>
                <td style="width: 35%; vertical-align: top; text-align: left; padding: 20px 10px;">
                    <strong style="color: #2EFF9C; text-transform: uppercase; font-size: 10px; letter-spacing: 1px; display: block; margin-bottom: 8px; font-family: 'Space Grotesk', sans-serif;">Get In Touch</strong>
                    <span style="color: #E8EBEC; font-size: 11px; line-height: 1.8; font-family: 'JetBrains Mono', monospace;">
                        T: +91 8956730349<br>
                        E: codecloverstudio@gmail.com
                    </span>
                </td>
                <td style="width: 30%; vertical-align: top; text-align: right; padding: 20px 20px;">
                    <strong style="color: #2EFF9C; text-transform: uppercase; font-size: 10px; letter-spacing: 1px; display: block; margin-bottom: 8px; font-family: 'Space Grotesk', sans-serif;">Connect</strong>
                    <span style="color: #E8EBEC; font-size: 11px; line-height: 1.8;">
                        Nagpur, Maharashtra<br>
                        <a href="https://www.instagram.com/codecloverstudio/" style="color: #E8EBEC; text-decoration: none; font-family: 'JetBrains Mono', monospace;">IG: @codecloverstudio</a>
                    </span>
                </td>
            </tr>
        </table>
    </div>
  `
};
