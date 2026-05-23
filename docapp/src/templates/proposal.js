export const proposal = {
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
    .prop-page {
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
    .prop-body {
        padding: 50px 60px;
        flex: 1;
    }
    .prop-heading {
        font-size: 18px;
        font-weight: 700;
        color: #1B4D3E;
        margin-top: 30px;
        margin-bottom: 15px;
        border-bottom: 2px solid #e0e0e0;
        padding-bottom: 8px;
        text-transform: uppercase;
        letter-spacing: 0.5px;
        font-family: 'Space Grotesk', sans-serif;
    }
    .prop-page-break {
        page-break-before: always;
        clear: both;
        height: 0;
        margin: 0;
        padding: 0;
    }
    .mono-val {
        font-family: 'JetBrains Mono', monospace;
    }
  `,
  html: `
    <div class="prop-page Section1">
        <!-- Cover Page (Table Layout for Word Compatibility) -->
        <table style="width: 100%; background-color: #0A0F0F; border-bottom: 10px solid #1B4D3E; height: 250mm; table-layout: fixed;" cellpadding="50" cellspacing="0" border="0">
            <tr>
                <td style="vertical-align: middle; text-align: left; padding: 50px 60px;">
                    <img src="/Primary Logo Dark - A.svg" alt="CodeCloverStudio" style="height: 60px; display: block; margin-bottom: 50px; border: 0;">
                    
                    <div style="color: #2EFF9C; text-transform: uppercase; font-size: 14px; font-weight: 700; letter-spacing: 2px; margin-bottom: 15px; font-family: 'Space Grotesk', sans-serif;">Growth Proposal</div>
                    <h1 style="font-size: 34px; font-weight: 800; line-height: 1.2; margin: 0 0 30px 0; color: #ffffff; font-family: 'Space Grotesk', sans-serif;">Digital Marketing &<br>Social Media Strategy Proposal</h1>
                    
                    <div style="border-top: 1px solid #333; padding-top: 20px; margin-top: 80px;">
                        <table style="width: 100%; border: none; table-layout: fixed;" border="0" cellpadding="0" cellspacing="0">
                            <tr>
                                <td style="color: #a0aab2; font-size: 13px; font-family: 'Inter', sans-serif;">
                                    <strong>Prepared For:</strong> Achievers Study Point<br>
                                    <strong>Attention:</strong> Ganesh Kotangle Sir
                                </td>
                                <td style="color: #a0aab2; font-size: 13px; font-family: 'Inter', sans-serif; text-align: right;">
                                    <strong>Date:</strong> <span class="mono-val">May 23, 2026</span><br>
                                    <strong>Prepared By:</strong> CodeCloverStudio
                                </td>
                            </tr>
                        </table>
                    </div>
                </td>
            </tr>
        </table>

        <div class="prop-page-break"></div>

        <!-- Main Body Proposal Content -->
        <div class="prop-body">
            <h2 class="prop-heading">Executive Summary</h2>
            <p>
                At <strong>CodeCloverStudio</strong>, we understand that growing an educational institute like <strong>Achievers Study Point</strong> requires reaching the right students and parents with high-quality, trustworthy content. 
                This proposal details our strategic plan to optimize your online presence, build trust through professional content branding, and run highly targeted social advertising to generate active admissions inquiries.
            </p>

            <h2 class="prop-heading">Core Objectives</h2>
            <!-- Objectives Grid via Table -->
            <table style="width: 100%; border: none; table-layout: fixed;" border="0" cellpadding="0" cellspacing="15">
                <tr>
                    <td style="border: 1px solid #e0e0e0; padding: 20px; background-color: #f8f9fa; border-radius: 6px; vertical-align: top;">
                        <h3 style="margin: 0 0 10px 0; color: #0A0F0F; font-size: 14px; font-weight: 700; font-family: 'Space Grotesk', sans-serif;">1. Brand Authority</h3>
                        <p style="margin: 0; font-size: 12.5px; color: #555555; line-height: 1.5; font-family: 'Inter', sans-serif;">Design premium educational content, revision tips, student testimonials, and agency announcements that portray Achievers Study Point as the premier choice in Nagpur.</p>
                    </td>
                    <td style="border: 1px solid #e0e0e0; padding: 20px; background-color: #f8f9fa; border-radius: 6px; vertical-align: top;">
                        <h3 style="margin: 0 0 10px 0; color: #0A0F0F; font-size: 14px; font-weight: 700; font-family: 'Space Grotesk', sans-serif;">2. Lead Generation</h3>
                        <p style="margin: 0; font-size: 12.5px; color: #555555; line-height: 1.5; font-family: 'Inter', sans-serif;">Run highly targeted Meta and Google ads tailored to high school and college student cohorts to acquire qualified consultation and admission inquiries.</p>
                    </td>
                </tr>
            </table>

            <h2 class="prop-heading">Deliverables Checklist</h2>
            <p>Under our Standard Beginner Plan, we will execute the following items on a monthly basis:</p>
            <ul style="padding-left: 20px; margin-bottom: 30px;">
                <li style="margin-bottom: 8px;"><strong>16 Premium Designed Posts:</strong> High-impact graphics containing informational graphics, achievements, syllabus guidance, and updates.</li>
                <li style="margin-bottom: 8px;"><strong>4 Produced Reels/Short Videos:</strong> Student/faculty highlights, class experience clips, or study hacks.</li>
                <li style="margin-bottom: 8px;"><strong>2 Daily Stories:</strong> To maintain consistent engagement and stay on top of your audience's feed.</li>
                <li style="margin-bottom: 8px;"><strong>Ad Campaign Setup & Scaling:</strong> Managing localized target ads targeting parents & students in Nagpur.</li>
            </ul>

            <h2 class="prop-heading">Investment Summary</h2>
            <table style="width: 100%; border-collapse: collapse; margin-bottom: 25px; table-layout: fixed;">
                <thead>
                    <tr style="background-color: #0A0F0F; color: #2EFF9C;">
                        <th style="padding: 10px 15px; border: 1px solid #e0e0e0; text-align: left; font-size: 11px; text-transform: uppercase; font-family: 'Space Grotesk', sans-serif;">Plan Level</th>
                        <th style="padding: 10px 15px; border: 1px solid #e0e0e0; text-align: left; font-size: 11px; text-transform: uppercase; font-family: 'Space Grotesk', sans-serif;">Deliverables</th>
                        <th style="padding: 10px 15px; border: 1px solid #e0e0e0; text-align: right; font-size: 11px; text-transform: uppercase; font-family: 'Space Grotesk', sans-serif;">Monthly Retainer</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style="padding: 10px 15px; border: 1px solid #e0e0e0; font-weight: bold; font-family: 'Inter', sans-serif;">Beginner Social Media Plan</td>
                        <td style="padding: 10px 15px; border: 1px solid #e0e0e0; font-size: 12.5px; font-family: 'Inter', sans-serif;">16 Graphics, 4 Reels, Daily Stories, Ad Management</td>
                        <td class="mono-val" style="padding: 10px 15px; border: 1px solid #e0e0e0; text-align: right; font-weight: bold; color: #1B4D3E;">₹9,000 / mo</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <!-- Footer (Table Layout for Word Compatibility) -->
        <table style="width: 100%; background-color: #1B4D3E; border-top: 4px solid #1B4D3E; margin-top: auto; table-layout: fixed;" cellspacing="0" border="0">
            <tr>
                <td style="text-align: left; font-family: 'Space Grotesk', sans-serif; font-size: 11px; font-weight: bold; color: #2EFF9C; padding: 20px 30px;">
                    CodeCloverStudio | Proposal
                </td>
                <td style="text-align: right; font-family: 'JetBrains Mono', monospace; font-size: 11px; color: #ffffff; padding: 20px 30px;">
                    www.codecloverstudio.com
                </td>
            </tr>
        </table>
    </div>
  `
};
