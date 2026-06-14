export const offerletter = {
  style: `
    @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;700&display=swap');
    
    * {
        box-sizing: border-box;
    }
    @page Section1 {
        size: 210mm 297mm;
        margin: 0in 0in 0in 0in;
    }
    .ol-page {
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
    .ol-content {
        padding: 50px 60px;
        flex: 1;
    }
    .ol-table {
        width: 100%;
        border-collapse: collapse;
        margin-top: 15px;
        margin-bottom: 20px;
        table-layout: fixed;
    }
    .ol-table th, .ol-table td {
        padding: 8px 12px;
        text-align: left;
        border: 1px solid #e0e0e0;
        font-size: 12.5px;
    }
    .ol-table th {
        background-color: #0A0F0F;
        color: #2EFF9C;
        font-weight: 600;
        font-family: 'Space Grotesk', sans-serif;
    }
    .ol-sign-table {
        width: 100%;
        margin-top: 50px;
        border-collapse: collapse;
        table-layout: fixed;
    }
    .ol-sign-table td {
        vertical-align: top;
        border: none;
    }
    .mono-val {
        font-family: 'JetBrains Mono', monospace;
    }
  `,
  html: `
    <div class="ol-page Section1">
        <!-- Header (Table Layout for Word Compatibility) -->
        <table style="width: 100%; background-color: #0A0F0F; border-bottom: 4px solid #1B4D3E; table-layout: fixed;" cellspacing="0" border="0">
            <tr>
                <td style="text-align: left; vertical-align: middle; padding: 25px 30px;">
                    <img src="/Primary Logo Dark - A.svg" alt="CodeCloverStudio" style="height: 45px; display: block; border: 0;">
                </td>
                <td style="text-align: right; vertical-align: middle; padding: 25px 30px; color: #E8EBEC; font-size: 11px; font-family: 'JetBrains Mono', monospace; line-height: 1.6;">
                    <span style="color: #2EFF9C; font-weight: 600;">E</span> HR@codecloverstudio.in<br>
                    <span style="color: #2EFF9C; font-weight: 600;">W</span> www.codecloverstudio.in
                </td>
            </tr>
        </table>

        <main class="ol-content">
            <div style="font-family: 'JetBrains Mono', monospace; font-size: 13px; color: #555555; margin-bottom: 25px;">
                Ref: CCS/HR/OFFER/2026/045<br>
                Date: <strong>May 23, 2026</strong>
            </div>

            <div style="margin-bottom: 30px; line-height: 1.5;">
                <strong>To,</strong><br>
                <strong>Aditi Kulkarni</strong><br>
                Pune, Maharashtra, India
            </div>

            <h2 style="font-family: 'Space Grotesk', sans-serif; font-size: 18px; font-weight: 700; color: #1B4D3E; border-bottom: 2px solid #e0e0e0; padding-bottom: 8px; margin-bottom: 20px; text-transform: uppercase;">
                Subject: Offer of Employment - Software Engineer
            </h2>

            <p>Dear Aditi,</p>
            
            <p>
                Following our recent interview discussions, we are delighted to offer you employment at <strong>CodeCloverStudio</strong> in the position of <strong>Software Engineer</strong>. 
                We are confident your knowledge and design abilities will make a significant impact on our agency projects.
            </p>

            <h3 style="font-family: 'Space Grotesk', sans-serif; font-size: 13px; font-weight: 750; color: #0A0F0F; text-transform: uppercase; margin-top: 25px; margin-bottom: 10px;">Employment Details & Benefits:</h3>
            <table class="ol-table">
                <thead>
                    <tr>
                        <th style="width: 40%;">Component / Benefit</th>
                        <th style="width: 60%;">Description / Values</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><strong>Commencement Date</strong></td>
                        <td class="mono-val">July 01, 2026</td>
                    </tr>
                    <tr>
                        <td><strong>Job Title</strong></td>
                        <td>Software Engineer (Full-Time)</td>
                    </tr>
                    <tr>
                        <td><strong>Office Location</strong></td>
                        <td>Nagpur HQ / Remote Hybrid</td>
                    </tr>
                    <tr>
                        <td><strong>Annual CTC</strong></td>
                        <td class="mono-val" style="font-weight: bold; color: #1B4D3E;">₹6,50,000.00 Per Annum</td>
                    </tr>
                </tbody>
            </table>

            <p>
                Your CTC details will be structured as per standard company policy consisting of basic salary, HRA, special allowances, and performance incentives. 
                This offer is subject to standard reference verifications. To accept this offer, please sign and return a copy of this letter by <span class="mono-val">May 30, 2026</span>.
            </p>

            <p>We look forward to working with you and building outstanding products together.</p>

            <table class="ol-sign-table">
                <tr>
                    <td style="text-align: left;">
                        <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIGhlaWdodD0iNDAiPjx0ZXh0IHg9IjEwIiB5PSIyNSIgZm9udC1mYW1pbHk9IkJydXNoIFNjcmlwdCBNVCwgY3Vyc2l2ZSIgZm9udC1zaXplPSIyMCIgZmlsbD0iIzFCNEQzRSI+UmFqbmlzaDwvdGV4dD48L3N2Zz4=" alt="MD Signature" style="height: 35px; display: block; margin-bottom: 5px;">
                        <div style="border-top: 1px solid #a0aab2; width: 180px; margin-bottom: 5px;"></div>
                        <strong>Rajnish Gupta</strong><br>
                        <span style="font-size: 11px; color: #777;">Managing Director (MD), CodeCloverStudio</span>
                    </td>
                    <td style="text-align: right;">
                        <div style="height: 35px; margin-bottom: 5px;"></div>
                        <div style="border-top: 1px solid #a0aab2; width: 180px; margin-left: auto; margin-bottom: 5px;"></div>
                        <strong>Aditi Kulkarni</strong><br>
                        <span style="font-size: 11px; color: #777;">Candidate Signature & Date</span>
                    </td>
                </tr>
            </table>
        </main>

        <!-- Footer (Table Layout for Word Compatibility) -->
        <table style="width: 100%; background-color: #1B4D3E; border-top: 4px solid #1B4D3E; margin-top: auto; table-layout: fixed;" cellspacing="0" border="0">
            <tr>
                <td style="text-align: left; font-family: 'Space Grotesk', sans-serif; font-size: 11px; font-weight: bold; color: #ffffff; padding: 20px 30px;">
                    Confidential | CodeCloverStudio
                </td>
                <td style="text-align: right; font-family: 'JetBrains Mono', monospace; font-size: 11px; color: #2EFF9C; padding: 20px 30px;">
                    www.codecloverstudio.in
                </td>
            </tr>
        </table>
    </div>
  `
};
