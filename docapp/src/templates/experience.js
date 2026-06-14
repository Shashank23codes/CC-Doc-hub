export const experience = {
  style: `
    @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;700&display=swap');
    
    * {
        box-sizing: border-box;
    }
    @page Section1 {
        size: 210mm 297mm;
        margin: 0in 0in 0in 0in;
    }
    .el-page {
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
    .el-content {
        padding: 50px 60px;
        flex: 1;
    }
    .mono-val {
        font-family: 'JetBrains Mono', monospace;
    }
  `,
  html: `
    <div class="el-page Section1">
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

        <main class="el-content">
            <div style="font-family: 'JetBrains Mono', monospace; font-size: 13px; color: #555555; margin-bottom: 30px;">
                Ref: CCS/HR/CERT/2026/102<br>
                Date: <strong>May 23, 2026</strong>
            </div>

            <h2 style="font-family: 'Space Grotesk', sans-serif; font-size: 18px; font-weight: 700; color: #1B4D3E; border-bottom: 2px solid #e0e0e0; padding-bottom: 8px; margin-bottom: 30px; text-transform: uppercase; text-align: center; letter-spacing: 1px;">
                TO WHOMSOEVER IT MAY CONCERN
            </h2>

            <p>
                This is to certify that <strong>Mr. Rohan Deshmukh</strong> was employed with <strong>CodeCloverStudio</strong> as a <strong>Senior Backend Developer</strong> in the Design & Engineering Department. 
                His employment was active from <span class="mono-val">January 15, 2024</span> to <span class="mono-val">May 15, 2026</span>.
            </p>

            <p>
                During his tenure of 2 years and 4 months, Rohan was responsible for designing our core API structures, scaling server integrations, and managing database migrations. 
                He is an industrious, highly competent developer who consistently displayed proactive problem-solving abilities and positive collaboration with cross-functional agency teams.
            </p>

            <p>
                Rohan leaves us to pursue further career growth opportunities. We would like to take this opportunity to thank him for his contributions to the success of our studio and wish him the absolute best in his future professional endeavors.
            </p>

            <div style="margin-top: 60px;">
                <strong>Sincerely,</strong><br>
                <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIGhlaWdodD0iNDAiPjx0ZXh0IHg9IjEwIiB5PSIyNSIgZm9udC1mYW1pbHk9IkJydXNoIFNjcmlwdCBNVCwgY3Vyc2l2ZSIgZm9udC1zaXplPSIyMCIgZmlsbD0iIzFCNEQzRSI+UmFqbmlzaDwvdGV4dD48L3N2Zz4=" alt="Signature" style="height: 35px; display: block; margin-bottom: 5px;">
                <div style="border-top: 1px solid #a0aab2; width: 180px; margin-bottom: 5px;"></div>
                <strong>Rajnish Gupta</strong><br>
                <span style="font-size: 11px; color: #777;">Managing Director (MD), CodeCloverStudio</span>
            </div>
        </main>

        <!-- Footer (Table Layout for Word Compatibility) -->
        <table style="width: 100%; background-color: #1B4D3E; border-top: 4px solid #1B4D3E; margin-top: auto; table-layout: fixed;" cellspacing="0" border="0">
            <tr>
                <td style="text-align: left; font-family: 'Space Grotesk', sans-serif; font-size: 11px; font-weight: bold; color: #ffffff; padding: 20px 30px;">
                    CodeCloverStudio
                </td>
                <td style="text-align: right; font-family: 'JetBrains Mono', monospace; font-size: 11px; color: #2EFF9C; padding: 20px 30px;">
                    www.codecloverstudio.in
                </td>
            </tr>
        </table>
    </div>
  `
};
