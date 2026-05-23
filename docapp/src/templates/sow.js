export const sow = {
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
    .sow-page {
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
    .sow-content {
        padding: 40px 50px;
        flex: 1;
    }
    .sow-title {
        text-align: center;
        margin-bottom: 30px;
    }
    .sow-title h2 {
        margin: 0;
        font-size: 20px;
        color: #0A0F0F;
        text-transform: uppercase;
        font-weight: 700;
        letter-spacing: 1px;
        font-family: 'Space Grotesk', sans-serif;
    }
    .sow-section-title {
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
    .sow-table {
        width: 100%;
        border-collapse: collapse;
        margin-bottom: 25px;
        table-layout: fixed;
    }
    .sow-table th, .sow-table td {
        border: 1px solid #e0e0e0;
        padding: 10px 15px;
        text-align: left;
        vertical-align: top;
        word-wrap: break-word;
    }
    .sow-table th {
        background-color: #0A0F0F;
        color: #2EFF9C;
        font-weight: 600;
        text-transform: uppercase;
        font-size: 11px;
        letter-spacing: 0.5px;
        font-family: 'Space Grotesk', sans-serif;
    }
    .sow-table td.bg-light {
        background-color: #f8f9fa;
        font-weight: 600;
        width: 30%;
        font-family: 'Space Grotesk', sans-serif;
    }
    .sow-ul {
        margin: 0 0 20px 0;
        padding-left: 20px;
    }
    .sow-li {
        margin-bottom: 8px;
    }
    .mono-val {
        font-family: 'JetBrains Mono', monospace;
        font-weight: 500;
    }
  `,
  html: `
    <div class="sow-page Section1">
        <!-- Header (Table Layout for Word Compatibility) -->
        <table style="width: 100%; background-color: #0A0F0F; border-bottom: 4px solid #1B4D3E; table-layout: fixed;" cellspacing="0" border="0">
            <tr>
                <td style="text-align: left; vertical-align: middle; padding: 25px 30px;">
                    <img src="/Primary Logo Dark - A.svg" alt="CodeCloverStudio" style="height: 45px; display: block; border: 0;">
                </td>
                <td style="text-align: right; vertical-align: middle; padding: 25px 30px;">
                    <h1 style="margin: 0; font-size: 18px; color: #2EFF9C; font-family: 'Space Grotesk', sans-serif; text-transform: uppercase; font-weight: 700; letter-spacing: 1px;">STATEMENT OF WORK</h1>
                    <p style="margin: 5px 0 0 0; font-size: 11px; color: #E8EBEC; letter-spacing: 2px; font-family: 'Space Grotesk', sans-serif;">CODECLOVERSTUDIO</p>
                </td>
            </tr>
        </table>

        <main class="sow-content">
            <div class="sow-title">
                <h2>STATEMENT OF WORK (SOW)</h2>
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
                        <h3 style="margin: 0 0 10px 0; font-size: 11px; color: #1B4D3E; text-transform: uppercase; font-weight: 700; border-bottom: 1px solid #e0e0e0; padding-bottom: 5px; font-family: 'Space Grotesk', sans-serif;">Project Metadata</h3>
                        <p style="margin: 0; font-size: 12px; color: #555; font-family: 'Inter', sans-serif;">
                            <strong>SOW Number:</strong> <span class="mono-val">CCS-SOW-2026-001</span><br>
                            <strong>Date:</strong> <span class="mono-val">May 23, 2026</span><br>
                            <strong>Parent MSA:</strong> Onboarding Agreement (May 23, 2026)
                        </p>
                    </td>
                </tr>
            </table>

            <div class="sow-section-title">1. PROJECT SCOPE & OBJECTIVE</div>
            <p>This Statement of Work (SOW) defines the specific deliverables and timelines for the execution of the Web Development, Search Engine Optimization (SEO), and Local Branding setup for Achievers Study Point. The main objective is to design a high-converting website and establish localized search presence to capture active student inquiries in the Nagpur area.</p>

            <div class="sow-section-title">2. KEY DELIVERABLES</div>
            <table class="sow-table">
                <thead>
                    <tr>
                        <th style="width: 30%;">PHASE</th>
                        <th style="width: 50%;">DELIVERABLES DESCRIPTION</th>
                        <th style="width: 20%;">EST. DELIVERY</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><strong>Phase 1: Web Design & Development</strong></td>
                        <td>Design and build a responsive 5-page educational site (Home, About Us, Courses, Student Results, Contact Us). Fully optimized for mobile platforms and lead capture integrations.</td>
                        <td class="mono-val">Week 3</td>
                    </tr>
                    <tr>
                        <td><strong>Phase 2: SEO Strategy Setup</strong></td>
                        <td>Conduct local keyword targeting. Configure technical SEO schemas for classes, courses, and localized Nagpur landing configurations. Submit indexations to Google Search Console.</td>
                        <td class="mono-val">Week 4</td>
                    </tr>
                    <tr>
                        <td><strong>Phase 3: Google Business Integration</strong></td>
                        <td>Optimize Google Business Profile map listings. Configure reviews campaign structures and set up tracking analytics for maps and phone inquiries.</td>
                        <td class="mono-val">Week 5</td>
                    </tr>
                </tbody>
            </table>

            <div class="sow-section-title">3. OUT OF SCOPE (EXCLUSIONS)</div>
            <p>The following services are excluded from this project scope, and if requested, will require a separate SOW or Change Order:</p>
            <ul class="sow-ul">
                <li class="sow-li">Ongoing content updates after final website approval.</li>
                <li class="sow-li">Costs related to domain purchase, hosting plans, or premium third-party API keys.</li>
                <li class="sow-li">Photography and video production of classroom layouts (content to be supplied by the Client).</li>
            </ul>

            <div class="sow-section-title">4. MILESTONES & PAYMENT SCHEDULE</div>
            <table class="sow-table">
                <thead>
                    <tr>
                        <th style="width: 15%;">MILESTONE</th>
                        <th style="width: 45%;">PROJECT MILESTONE DESCRIPTION</th>
                        <th style="width: 20%;">PAYMENT VALUE</th>
                        <th style="width: 20%;">STATUS</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td class="mono-val">01</td>
                        <td>Project Kickoff & UI Layout Draft</td>
                        <td class="mono-val">30% (₹2,700)</td>
                        <td>Advance / Due</td>
                    </tr>
                    <tr>
                        <td class="mono-val">02</td>
                        <td>Web Development Complete (Staging Approval)</td>
                        <td class="mono-val">40% (₹3,600)</td>
                        <td>Upon Stage End</td>
                    </tr>
                    <tr>
                        <td class="mono-val">03</td>
                        <td>Final Launch, SEO Setup & Handoff Complete</td>
                        <td class="mono-val">30% (₹2,700)</td>
                        <td>Upon Launch</td>
                    </tr>
                </tbody>
            </table>

            <div class="sow-section-title">5. AUTHORIZATION & SIGNATURE</div>
            <p>Both parties agree to execute the project described in this Statement of Work in accordance with the terms of the parent Client Onboarding Agreement.</p>

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
