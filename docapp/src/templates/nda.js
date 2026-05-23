export const nda = {
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
    .nda-page {
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
    .nda-content {
        padding: 50px 60px;
        flex: 1;
    }
    .nda-title {
        text-align: center;
        margin-bottom: 30px;
    }
    .nda-title h2 {
        margin: 0;
        font-size: 20px;
        color: #0A0F0F;
        text-transform: uppercase;
        font-weight: 700;
        letter-spacing: 1px;
        font-family: 'Space Grotesk', sans-serif;
    }
    .nda-clause {
        margin-bottom: 25px;
    }
    .nda-clause h3 {
        color: #1B4D3E;
        font-size: 14px;
        font-weight: 700;
        margin: 0 0 10px 0;
        text-transform: uppercase;
        border-bottom: 1px solid #e0e0e0;
        padding-bottom: 5px;
        font-family: 'Space Grotesk', sans-serif;
    }
    .nda-clause p {
        margin: 0;
        font-size: 13px;
        color: #444444;
        text-align: justify;
    }
    .mono-val {
        font-family: 'JetBrains Mono', monospace;
    }
  `,
  html: `
    <div class="nda-page Section1">
        <!-- Header (Table Layout for Word Compatibility) -->
        <table style="width: 100%; background-color: #0A0F0F; border-bottom: 4px solid #1B4D3E; table-layout: fixed;" cellspacing="0" border="0">
            <tr>
                <td style="text-align: left; vertical-align: middle; padding: 25px 30px;">
                    <img src="/Primary Logo Dark - A.svg" alt="CodeCloverStudio" style="height: 45px; display: block; border: 0;">
                </td>
                <td style="text-align: right; vertical-align: middle; padding: 25px 30px;">
                    <h1 style="margin: 0; font-size: 18px; color: #2EFF9C; font-family: 'Space Grotesk', sans-serif; text-transform: uppercase; font-weight: 700; letter-spacing: 1px;">NON-DISCLOSURE AGREEMENT</h1>
                    <p style="margin: 5px 0 0 0; font-size: 11px; color: #E8EBEC; letter-spacing: 2px; font-family: 'Space Grotesk', sans-serif;">CODECLOVERSTUDIO</p>
                </td>
            </tr>
        </table>

        <main class="nda-content">
            <div class="nda-title">
                <h2>MUTUAL NON-DISCLOSURE AGREEMENT</h2>
            </div>

            <p style="margin-bottom: 30px;">
                This Mutual Non-Disclosure Agreement ("Agreement") is made and entered into on <strong class="mono-val">May 23, 2026</strong>, by and between <strong>CodeCloverStudio</strong> ("Agency"), and <strong>Achievers Study Point</strong> ("Client").
            </p>

            <div class="nda-clause">
                <h3>1. Definition of Confidential Information</h3>
                <p>
                    "Confidential Information" refers to any proprietary information, technical data, trade secrets, marketing strategies, business plans, financial projections, student databases, or software source code disclosed by one party to the other, whether orally or in writing.
                </p>
            </div>

            <div class="nda-clause">
                <h3>2. Protection of Information</h3>
                <p>
                    Each party agrees to hold the other party's Confidential Information in strict confidence and to take reasonable precautions to protect it (equivalent to the precautions taken for its own confidential details). Neither party will use or disclose such information for any purpose outside the scope of their professional marketing engagement.
                </p>
            </div>

            <div class="nda-clause">
                <h3>3. Permitted Disclosures</h3>
                <p>
                    Receiving party may disclose Confidential Information only to those employees, advisors, or contractors who need to know such information in order to perform their duties, and who have signed confidentiality covenants similar to this Agreement.
                </p>
            </div>

            <div class="nda-clause">
                <h3>4. Term of Agreement</h3>
                <p>
                    The obligations under this Agreement shall survive for a period of <strong class="mono-val">three (3) years</strong> from the date of disclosure, or until the Confidential Information enters the public domain through no fault of the receiving party.
                </p>
            </div>

            <div class="nda-clause">
                <h3>5. Governing Law</h3>
                <p>
                    This Agreement shall be governed by, construed, and enforced in accordance with the laws of India, under the exclusive jurisdiction of the courts of <strong>Nagpur, Maharashtra</strong>.
                </p>
            </div>

            <!-- Signatures via Table -->
            <table style="width: 100%; margin-top: 50px; border: none; table-layout: fixed;" border="0" cellpadding="0" cellspacing="15">
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
                <td style="text-align: left; font-family: 'Space Grotesk', sans-serif; font-size: 11px; font-weight: bold; color: #2EFF9C; padding: 20px 30px;">
                    CodeCloverStudio | NDA
                </td>
                <td style="text-align: right; font-family: 'JetBrains Mono', monospace; font-size: 11px; color: #ffffff; padding: 20px 30px;">
                    codecloverstudio@gmail.com
                </td>
            </tr>
        </table>
    </div>
  `
};
