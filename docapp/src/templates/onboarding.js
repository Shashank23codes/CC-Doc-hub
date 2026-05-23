export const onboarding = {
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
    .doc-page {
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
    .doc-content {
        padding: 40px 50px;
        flex: 1;
    }
    .doc-title {
        text-align: center;
        margin-bottom: 30px;
    }
    .doc-title h2 {
        margin: 0;
        font-size: 20px;
        color: #0A0F0F;
        text-transform: uppercase;
        font-weight: 700;
        letter-spacing: 1px;
        font-family: 'Space Grotesk', sans-serif;
    }
    .doc-intro-text {
        background-color: #f8f9fa;
        padding: 15px 20px;
        border-left: 4px solid #1B4D3E;
        margin-bottom: 30px;
        font-size: 13.5px;
        border-radius: 0 4px 4px 0;
    }
    .doc-section-title {
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
    .doc-table {
        width: 100%;
        border-collapse: collapse;
        margin-bottom: 25px;
        table-layout: fixed;
    }
    .doc-table th, .doc-table td {
        border: 1px solid #e0e0e0;
        padding: 10px 15px;
        text-align: left;
        vertical-align: top;
        word-wrap: break-word;
    }
    .doc-table th {
        background-color: #0A0F0F;
        color: #2EFF9C;
        font-weight: 600;
        text-transform: uppercase;
        font-size: 11px;
        letter-spacing: 0.5px;
        font-family: 'Space Grotesk', sans-serif;
    }
    .doc-table td.bg-light {
        background-color: #f8f9fa;
        font-weight: 600;
        width: 30%;
        font-family: 'Space Grotesk', sans-serif;
    }
    .doc-ul {
        margin: 0 0 20px 0;
        padding-left: 20px;
    }
    .doc-li {
        margin-bottom: 8px;
    }
    .doc-service-item {
        margin-bottom: 15px;
    }
    .doc-service-item h4 {
        margin: 0 0 5px 0;
        font-size: 13px;
        color: #0A0F0F;
        font-weight: 600;
        font-family: 'Space Grotesk', sans-serif;
    }
    .doc-service-item p {
        margin: 0;
        color: #555555;
    }
    .doc-inclusions {
        background-color: #f8f9fa;
        padding: 20px;
        border: 1px solid #e0e0e0;
        margin-bottom: 30px;
        border-radius: 4px;
    }
    .doc-inclusions-title {
        margin-top: 0;
        color: #0A0F0F;
        font-size: 12px;
        font-weight: 700;
        text-transform: uppercase;
        margin-bottom: 15px;
        letter-spacing: 0.5px;
        font-family: 'Space Grotesk', sans-serif;
    }
    .doc-page-break {
        page-break-before: always;
        clear: both;
        height: 0;
        margin: 0;
        padding: 0;
    }
    .mono-val {
        font-family: 'JetBrains Mono', monospace;
        font-weight: 500;
    }
  `,
  html: `
    <div class="doc-page Section1">
        <!-- Header (Table Layout for Word Compatibility) -->
        <table style="width: 100%; background-color: #0A0F0F; border-bottom: 4px solid #1B4D3E; table-layout: fixed;" cellspacing="0" border="0">
            <tr>
                <td style="text-align: left; vertical-align: middle; padding: 25px 30px;">
                    <img src="/Primary Logo Dark - A.svg" alt="CodeCloverStudio" style="height: 45px; display: block; border: 0;">
                </td>
                <td style="text-align: right; vertical-align: middle; padding: 25px 30px;">
                    <h1 style="margin: 0; font-size: 18px; color: #2EFF9C; font-family: 'Space Grotesk', sans-serif; text-transform: uppercase; font-weight: 700; letter-spacing: 1px;">CLIENT ONBOARDING AGREEMENT</h1>
                    <p style="margin: 5px 0 0 0; font-size: 11px; color: #E8EBEC; letter-spacing: 2px; font-family: 'Space Grotesk', sans-serif;">CODECLOVERSTUDIO</p>
                </td>
            </tr>
        </table>

        <main class="doc-content">
            <div class="doc-title">
                <h2>OFFICIAL SERVICE AGREEMENT</h2>
            </div>

            <div class="doc-intro-text">
                This Agreement officially confirms the professional partnership between <strong>CodeCloverStudio</strong> and <strong>Achievers Study Point</strong>, represented by Ganesh Kotangle Sir.<br><br>
                <strong>Monthly Service Charges:</strong> The Client agrees to pay a professional digital marketing retainer fee of <strong class="mono-val">₹9,000/- (Rupees Nine Thousand Only)</strong> per month for the services provided under this agreement.
            </div>

            <div class="doc-section-title">AGREEMENT DETAILS</div>
            <table class="doc-table">
                <tr>
                    <th style="width: 50%;">AGENCY INFORMATION</th>
                    <th style="width: 50%;">CLIENT INFORMATION</th>
                </tr>
                <tr>
                    <td>
                        <strong>CodeCloverStudio</strong><br>
                        Digital Marketing & Branding Agency<br>
                        Nagpur, Maharashtra<br>
                        Social Media & Performance Marketing Experts
                    </td>
                    <td>
                        <strong>Achievers Study Point</strong><br>
                        Educational Institute<br>
                        Represented by Ganesh Kotangle Sir<br>
                        Official Client Partner
                    </td>
                </tr>
            </table>

            <div class="doc-section-title">1. SERVICES PROVIDED</div>
            <p>CodeCloverStudio will professionally manage and execute digital marketing activities for Achievers Study Point.</p>
            
            <div class="doc-service-item">
                <h4>Social Media Management</h4>
                <p>The Agency will manage social media activities including content posting, audience engagement, page management, and online brand awareness campaigns.</p>
            </div>
            <div class="doc-service-item">
                <h4>Paid Advertising</h4>
                <p>The Agency will manage advertising campaigns through platforms such as Meta Ads and Google Ads. Services include campaign setup, audience targeting, optimization, lead generation, and performance monitoring.</p>
            </div>
            <div class="doc-service-item">
                <h4>Content Creation</h4>
                <p>CodeCloverStudio will create professional marketing creatives including <strong class="mono-val">16 posters/graphics</strong> and <strong class="mono-val">4 reels/short-form videos</strong> per month. Additionally, we will provide <strong class="mono-val">2 daily story updates</strong> across your social media profiles.</p>
            </div>
            <div class="doc-service-item">
                <h4>Performance Marketing</h4>
                <p>The Agency will continuously monitor campaign performance, optimize conversions, improve audience targeting, and work toward achieving better marketing results.</p>
            </div>
            <div class="doc-service-item">
                <h4>Analytics & Reporting</h4>
                <p>Monthly performance reports including engagement, reach, leads, conversions, and advertising performance metrics will be shared with the Client.</p>
            </div>

            <div class="doc-section-title">2. PAYMENT TERMS</div>
            <table class="doc-table">
                <tr>
                    <td class="bg-light">Currency</td>
                    <td>Indian Rupees (INR)</td>
                </tr>
                <tr>
                    <td class="bg-light">Invoice Generation Date</td>
                    <td class="mono-val">1st Day of Every Month</td>
                </tr>
                <tr>
                    <td class="bg-light">Payment Deadline</td>
                    <td class="mono-val">Within 7 Business Days</td>
                </tr>
                <tr>
                    <td class="bg-light">Payment Methods</td>
                    <td>Bank Transfer / UPI / Online Payment</td>
                </tr>
                <tr>
                    <td class="bg-light">Advertising Charges</td>
                    <td>Paid Directly by Client</td>
                </tr>
                <tr>
                    <td class="bg-light">Important Note</td>
                    <td>Advertising platform charges such as Meta Ads, Google Ads, or any third-party advertising spend will be paid directly by the Client.</td>
                </tr>
            </table>

            <div class="doc-section-title">3. COMMERCIAL SUMMARY</div>
            <table class="doc-table">
                <tr>
                    <th style="width: 10%;">NO.</th>
                    <th style="width: 35%;">SERVICE DESCRIPTION</th>
                    <th style="width: 30%;">BILLING TYPE</th>
                    <th style="width: 30%;">AMOUNT (INR)</th>
                </tr>
                <tr>
                    <td class="mono-val">1</td>
                    <td>Technical Setup & Onboarding</td>
                    <td>One-Time</td>
                    <td>Included</td>
                </tr>
                <tr>
                    <td class="mono-val">2</td>
                    <td>Monthly Marketing Retainer</td>
                    <td>Monthly</td>
                    <td>Included</td>
                </tr>
                <tr>
                    <td class="mono-val">3</td>
                    <td>Content Creation & Reels</td>
                    <td>Monthly</td>
                    <td>Included</td>
                </tr>
                <tr>
                    <td class="mono-val">4</td>
                    <td>Paid Ads Management</td>
                    <td>Monthly</td>
                    <td>Client Advertising Budget (Client Paid)</td>
                </tr>
                <tr>
                    <td class="mono-val">5</td>
                    <td>Performance Reporting & Analytics</td>
                    <td>Monthly</td>
                    <td>Included</td>
                </tr>
                <tr>
                    <td colspan="3" style="text-align: right; font-weight: bold; background-color: #f8f9fa;">Total First Month Amount / Final Total</td>
                    <td class="mono-val" style="font-weight: bold; font-size: 14px; color: #1B4D3E; background-color: #f8f9fa;">₹ 9,000</td>
                </tr>
            </table>

            <div class="doc-inclusions">
                <h4 class="doc-inclusions-title">INCLUDED SERVICES UNDER MONTHLY RETAINER</h4>
                <!-- Grid Layout via Tables for Word -->
                <table style="width: 100%; border: none;" border="0" cellpadding="5" cellspacing="0">
                    <tr>
                        <td style="width: 50%; vertical-align: top; border: none; padding: 5px 0;">✔ Social Media Management (2 Daily Stories)</td>
                        <td style="width: 50%; vertical-align: top; border: none; padding: 5px 0;">✔ Campaign Monitoring & Optimization</td>
                    </tr>
                    <tr>
                        <td style="width: 50%; vertical-align: top; border: none; padding: 5px 0;">✔ Creative Design & Branding (16 Posters/Month)</td>
                        <td style="width: 50%; vertical-align: top; border: none; padding: 5px 0;">✔ Monthly Performance Reports</td>
                    </tr>
                    <tr>
                        <td style="width: 50%; vertical-align: top; border: none; padding: 5px 0;">✔ Video Reels & Content Creation (4 Reels/Month)</td>
                        <td style="width: 50%; vertical-align: top; border: none; padding: 5px 0;">✔ Lead Generation Campaigns</td>
                    </tr>
                    <tr>
                        <td style="width: 50%; vertical-align: top; border: none; padding: 5px 0;">✔ Paid Advertising Management</td>
                        <td style="width: 50%; vertical-align: top; border: none; padding: 5px 0;">✔ Marketing Strategy Support</td>
                    </tr>
                </table>
            </div>

            <div class="doc-section-title">4. OWNERSHIP & INTELLECTUAL PROPERTY</div>
            <p>After successful completion of all payments, all final approved creatives, videos, advertisements, and marketing assets developed by CodeCloverStudio will become the property of Achievers Study Point.</p>
            <p>However, the Agency reserves the right to showcase non-confidential work samples in its portfolio, presentations, website, and marketing materials.</p>

            <div class="doc-section-title">5. CONFIDENTIALITY</div>
            <p>Both parties agree to maintain complete confidentiality regarding all business information, marketing strategies, reports, operational data, and internal discussions shared during the working relationship.</p>
            <p>Neither party shall disclose confidential information to any third party without prior written approval from the other party.</p>

            <div class="doc-section-title">6. AGREEMENT TERMINATION</div>
            <p>Either party may terminate this agreement by providing a written notice at least 30 days in advance.</p>
            <p>The Client agrees to clear all pending invoices and outstanding dues for services completed before termination.</p>

            <div class="doc-section-title">7. CLIENT RESPONSIBILITIES</div>
            <p>The Client agrees to:</p>
            <ul class="doc-ul">
                <li class="doc-li">Provide required business information on time</li>
                <li class="doc-li">Share branding materials and approvals promptly</li>
                <li class="doc-li">Maintain professional communication with the Agency</li>
                <li class="doc-li">Support marketing execution when required</li>
                <li class="doc-li">Provide access to required social media or advertising accounts</li>
            </ul>

            <div class="doc-section-title">8. AGENCY RESPONSIBILITIES</div>
            <p>CodeCloverStudio agrees to:</p>
            <ul class="doc-ul">
                <li class="doc-li">Deliver services professionally and on time</li>
                <li class="doc-li">Maintain transparent communication</li>
                <li class="doc-li">Provide campaign performance updates</li>
                <li class="doc-li">Work toward improving brand visibility and marketing performance</li>
                <li class="doc-li">Support business growth through strategic marketing efforts</li>
            </ul>

            <div class="doc-section-title">9. REFERRAL ACKNOWLEDGEMENT</div>
            <p>This section officially acknowledges the referral source for this business engagement.</p>
            <ul class="doc-ul" style="margin-bottom: 20px;">
                <li class="doc-li"><strong>Referral Source:</strong> Shivanya Jobs Providing and Solutions (Nagpur, Maharashtra and Bhilai, Chhattisgarh)</li>
                <li class="doc-li"><strong>Representative:</strong> Ms. Lipi Shakrawar Gour (HR)</li>
                <li class="doc-li"><strong>Contact Number:</strong> <span class="mono-val">8084165031</span></li>
            </ul>

            <div class="doc-section-title" style="text-align: center; border: none; margin-top: 40px;">SIGNATURE & AUTHORIZATION</div>
            <p style="text-align: center;">By signing below, both parties confirm that they have read, understood, and agreed to all terms and conditions mentioned in this agreement. This agreement becomes officially active once signed by both parties.</p>

            <!-- Signature Boxes (Table Layout for Word Compatibility) -->
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
                        <div style="border-bottom: 1px dashed #555555; margin: 20px 0 10px 0; height: 1px;"></div>
                        <div style="font-size: 11px; color: #555555;">Contact Number</div>
                        <div style="border-bottom: 1px dashed #555555; margin: 20px 0 10px 0; height: 1px;"></div>
                        <div style="font-size: 11px; color: #555555;">Email Address</div>
                    </td>
                    <td style="border: 1px solid #e0e0e0; padding: 20px; background-color: #fafafa; vertical-align: top; border-radius: 4px;">
                        <h4 style="margin: 0 0 20px 0; color: #0A0F0F; text-transform: uppercase; text-align: center; border-bottom: 1px solid #e0e0e0; padding-bottom: 10px; font-size: 12px; font-weight: 700; font-family: 'Space Grotesk', sans-serif;">CLIENT SIDE</h4>
                        <strong style="font-family: 'Space Grotesk', sans-serif;">Achievers Study Point</strong><br>
                        <span style="font-size: 13px;">Ganesh Kotangle Sir</span>
                        <div style="border-bottom: 1px dashed #555555; margin: 30px 0 10px 0; height: 1px;"></div>
                        <div style="font-size: 11px; color: #555555;">Signature</div>
                        <div style="border-bottom: 1px dashed #555555; margin: 20px 0 10px 0; height: 1px;"></div>
                        <div style="font-size: 11px; color: #555555;">Date</div>
                        <div style="border-bottom: 1px dashed #555555; margin: 20px 0 10px 0; height: 1px;"></div>
                        <div style="font-size: 11px; color: #555555;">Contact Number</div>
                        <div style="border-bottom: 1px dashed #555555; margin: 20px 0 10px 0; height: 1px;"></div>
                        <div style="font-size: 11px; color: #555555;">Email Address</div>
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
