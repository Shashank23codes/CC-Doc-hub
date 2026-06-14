export const lor = {
  style: `
    @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;700&display=swap');
    
    * {
        box-sizing: border-box;
    }
    @page Section1 {
        size: 210mm 297mm;
        margin: 0in 0in 0in 0in;
    }
    .lor-page {
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
    .lor-content {
        padding: 50px 60px;
        flex: 1;
    }
    .mono-val {
        font-family: 'JetBrains Mono', monospace;
    }
    .lor-highlight-box {
        background-color: #f8f9fa;
        border-left: 4px solid #1B4D3E;
        padding: 15px 20px;
        margin: 20px 0;
        border-radius: 4px;
    }
  `,
  html: `
    <div class="lor-page Section1">
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

        <main class="lor-content">
            <div style="font-family: 'JetBrains Mono', monospace; font-size: 13px; color: #555555; margin-bottom: 30px;">
                Ref: CCS/HR/LOR/2026/089<br>
                Date: <strong>May 23, 2026</strong>
            </div>

            <h2 style="font-family: 'Space Grotesk', sans-serif; font-size: 18px; font-weight: 700; color: #1B4D3E; border-bottom: 2px solid #e0e0e0; padding-bottom: 8px; margin-bottom: 30px; text-transform: uppercase; text-align: center; letter-spacing: 1px;">
                LETTER OF RECOMMENDATION
            </h2>

            <p><strong>To Whom It May Concern,</strong></p>

            <p>
                It is with great pleasure that I write this letter to recommend <strong>Mr. Rohan Deshmukh</strong> for admission to your prestigious postgraduate program or candidate selection. 
                I have known Rohan closely for over 2 years in my capacity as Founder at <strong>CodeCloverStudio</strong>, where he served as our Senior Backend Developer.
            </p>

            <p>
                During his tenure, Rohan consistently set a benchmark of technical mastery and design precision. He was the chief architect of our backend web framework services, 
                spearheading database scaling from scratch and optimizing our search query latency by 45%. 
            </p>

            <div class="lor-highlight-box">
                <strong style="color: #0A0F0F; font-family: 'Space Grotesk', sans-serif; text-transform: uppercase; font-size: 11px; letter-spacing: 0.5px; display: block; margin-bottom: 5px;">Key Professional Strengths:</strong>
                <p style="margin: 0; font-size: 12.5px; color: #555555; line-height: 1.5;">
                    • Advanced System Architecture & Database Normalization (Node.js, PostgreSQL)<br>
                    • Proactive Technical Leadership & Mentoring Junior Engineers<br>
                    • Fast Adaptability to Digital Transformation Methodologies
                </p>
            </div>

            <p>
                Rohan is a self-motivated team member who has an outstanding ability to translate complex business specs into clean, modular code. His intellectual curiosity, coupled with his strong interpersonal skills, makes him an asset to any advanced technological team or academic environment.
            </p>

            <p>
                I recommend him in the strongest terms and wish him success in all his academic and professional goals. Please feel free to contact me for any further verification.
            </p>

            <div style="margin-top: 50px;">
                <strong>Sincerely,</strong><br>
                <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIGhlaWdodD0iNDAiPjx0ZXh0IHg9IjEwIiB5PSIyNSIgZm9udC1mYW1pbHk9IkJydXNoIFNjcmlwdCBNVCwgY3Vyc2l2ZSIgZm9udC1zaXplPSIyMCIgZmlsbD0iIzFCNEQzRSI+U2hhc2hhbms8L3RleHQ+PC9zdmc+" alt="Signature" style="height: 35px; display: block; margin-bottom: 5px;">
                <div style="border-top: 1px solid #a0aab2; width: 180px; margin-bottom: 5px;"></div>
                <strong>Shashank Gupta</strong><br>
                <span style="font-size: 11px; color: #777;">Founder, CodeCloverStudio</span>
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
