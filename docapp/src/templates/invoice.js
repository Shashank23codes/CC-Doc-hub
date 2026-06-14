export const invoice = {
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
    .inv-page {
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
    .inv-content {
        padding: 45px 50px;
        flex: 1;
    }
    .inv-table {
        width: 100%;
        border-collapse: collapse;
        margin-bottom: 30px;
        table-layout: fixed;
    }
    .inv-table th, .inv-table td {
        padding: 12px 15px;
        text-align: left;
        border-bottom: 1px solid #e0e0e0;
        word-wrap: break-word;
    }
    .inv-table th {
        background-color: #0A0F0F;
        color: #2EFF9C;
        font-weight: 600;
        text-transform: uppercase;
        font-size: 11px;
        letter-spacing: 0.5px;
        font-family: 'Space Grotesk', sans-serif;
    }
    .inv-table td {
        font-size: 13px;
    }
    .inv-payment-terms {
        background-color: #f8f9fa;
        padding: 20px;
        border-radius: 4px;
        border-left: 4px solid #1B4D3E;
        margin-top: 40px;
    }
    .inv-payment-terms h4 {
        margin: 0 0 10px 0;
        font-size: 12px;
        color: #0A0F0F;
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 0.5px;
        font-family: 'Space Grotesk', sans-serif;
    }
    .inv-payment-terms p {
        margin: 0;
        font-size: 12px;
        color: #555555;
        line-height: 1.6;
    }
    .mono-val {
        font-family: 'JetBrains Mono', monospace;
        font-weight: 500;
    }
    .qr-container {
        display: inline-block;
        text-align: center;
        background: #ffffff;
        padding: 10px;
        border: 1px dashed #1B4D3E;
        border-radius: 6px;
        box-shadow: 0 2px 8px rgba(0,0,0,0.04);
        position: relative;
        cursor: pointer;
        transition: all 0.2s ease;
    }
    .qr-container:hover {
        border-color: #2EFF9C;
        box-shadow: 0 4px 12px rgba(46, 255, 156, 0.15);
        transform: translateY(-2px);
    }
    .upi-qr {
        width: 140px;
        height: 140px;
        display: block;
        margin: 0 auto;
        border: 1px solid #f0f0f0;
        border-radius: 4px;
        transition: transform 0.2s ease;
    }
    .qr-container:hover .upi-qr {
        transform: scale(1.03);
    }
  `,
  html: `
    <div class="inv-page Section1">
        <!-- Header (Table Layout for Word Compatibility) -->
        <table style="width: 100%; background-color: #0A0F0F; border-bottom: 4px solid #1B4D3E; table-layout: fixed;" cellspacing="0" border="0">
            <tr>
                <td style="text-align: left; vertical-align: middle; padding: 25px 30px;">
                    <img src="/Primary Logo Dark - A.svg" alt="CodeCloverStudio" style="height: 45px; display: block; border: 0;">
                </td>
                <td style="text-align: right; vertical-align: middle; padding: 25px 30px;">
                    <h1 style="margin: 0; font-size: 24px; color: #2EFF9C; font-family: 'Space Grotesk', sans-serif; font-weight: 800; letter-spacing: 1px;">INVOICE</h1>
                    <p style="margin: 5px 0 0 0; font-size: 12px; color: #a0aab2; font-family: 'JetBrains Mono', monospace;">Invoice #CCS-2026-001</p>
                </td>
            </tr>
        </table>

        <main class="inv-content">
            <!-- Meta Boxes (Table Layout for Word Compatibility) -->
            <table style="width: 100%; margin-bottom: 40px; border: none; table-layout: fixed;" border="0" cellpadding="0" cellspacing="15">
                <tr>
                    <td style="vertical-align: top;">
                        <h3 style="margin: 0 0 10px 0; font-size: 11px; color: #1B4D3E; text-transform: uppercase; font-weight: 700; border-bottom: 1px solid #e0e0e0; padding-bottom: 5px; font-family: 'Space Grotesk', sans-serif;">Billed By</h3>
                        <p style="margin: 0; font-size: 12px; color: #555;">
                            <strong>CodeCloverStudio</strong><br>
                            Digital Marketing Agency<br>
                            Nagpur, Maharashtra<br>
                            <span class="mono-val">codecloverstudio@gmail.com</span>
                        </p>
                    </td>
                    <td style="vertical-align: top;">
                        <h3 style="margin: 0 0 10px 0; font-size: 11px; color: #1B4D3E; text-transform: uppercase; font-weight: 700; border-bottom: 1px solid #e0e0e0; padding-bottom: 5px; font-family: 'Space Grotesk', sans-serif;">Billed To</h3>
                        <p style="margin: 0; font-size: 12px; color: #555;">
                            <strong>Achievers Study Point</strong><br>
                            Educational Institute<br>
                            Ganesh Kotangle Sir<br>
                            Nagpur, Maharashtra
                        </p>
                    </td>
                    <td style="vertical-align: top;">
                        <h3 style="margin: 0 0 10px 0; font-size: 11px; color: #1B4D3E; text-transform: uppercase; font-weight: 700; border-bottom: 1px solid #e0e0e0; padding-bottom: 5px; font-family: 'Space Grotesk', sans-serif;">Invoice Meta</h3>
                        <p style="margin: 0; font-size: 12px; color: #555; font-family: 'Inter', sans-serif;">
                            <strong>Date:</strong> <span class="mono-val">{{DATE}}</span><br>
                            <strong>Due Date:</strong> <span class="mono-val">{{DUE_DATE}}</span>
                        </p>
                    </td>
                </tr>
            </table>

            <table class="inv-table">
                <thead>
                    <tr>
                        <th style="width: 50%;">Service Description</th>
                        <th style="width: 15%; text-align: center;">Qty</th>
                        <th style="width: 15%; text-align: right;">Rate</th>
                        <th style="width: 20%; text-align: right;">Total</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <strong>Beginner Social Media Plan</strong><br>
                            <span style="font-size: 11.5px; color: #666;">Includes 16 posters/graphics, 4 reels, and 2 daily stories per month.</span>
                        </td>
                        <td class="mono-val" style="text-align: center;">1</td>
                        <td class="mono-val" style="text-align: right;">₹9,000.00</td>
                        <td class="mono-val" style="text-align: right;">₹9,000.00</td>
                    </tr>
                    <tr>
                        <td>
                            <strong>Meta & Google Ads Campaign Setup</strong><br>
                            <span style="font-size: 11.5px; color: #666;">One-time configuration and onboarding support.</span>
                        </td>
                        <td class="mono-val" style="text-align: center;">1</td>
                        <td class="mono-val" style="text-align: right;">₹0.00</td>
                        <td class="mono-val" style="text-align: right;">₹0.00</td>
                    </tr>
                </tbody>
            </table>

            <!-- Summary (Table Layout for Word Compatibility) -->
            <table style="width: 100%; border: none; table-layout: fixed;" border="0" cellpadding="0" cellspacing="0">
                <tr>
                    <td style="border: none;">&nbsp;</td>
                    <td style="border: none; vertical-align: top;">
                        <table style="width: 100%; border-collapse: collapse;">
                            <tr>
                                <td style="padding: 8px 15px; text-align: right; border-bottom: 1px solid #e0e0e0; font-size: 12px;">Subtotal:</td>
                                <td class="mono-val" style="padding: 8px 15px; text-align: right; border-bottom: 1px solid #e0e0e0; font-size: 12px; font-weight: 600;">₹9,000.00</td>
                            </tr>
                            <tr>
                                <td style="padding: 8px 15px; text-align: right; border-bottom: 1px solid #e0e0e0; font-size: 13px; font-weight: 700; font-family: 'Space Grotesk', sans-serif;">Total Outstanding:</td>
                                <td class="mono-val" style="padding: 8px 15px; text-align: right; border-bottom: 1px solid #e0e0e0; font-size: 15px; font-weight: 800; color: #1B4D3E;">₹9,000.00</td>
                            </tr>
                        </table>
                    </td>
                </tr>
            </table>

            <div class="inv-payment-terms">
                <table style="width: 100%; border: none; border-collapse: collapse; margin: 0; padding: 0; table-layout: fixed;" cellpadding="0" cellspacing="0">
                    <tr>
                        <td style="vertical-align: top; width: 60%; padding: 0; border: none;">
                            <h4 style="margin: 0 0 10px 0; font-size: 12px; color: #0A0F0F; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px; font-family: 'Space Grotesk', sans-serif;">How to Pay</h4>
                            <p style="margin: 0; font-size: 12px; color: #555555; line-height: 1.6;">
                                Please transfer the amount to our official agency account:<br>
                                <strong>Account Name:</strong> Shashank Gupta<br>
                                <strong>Bank:</strong> Federal Bank<br>
                                <strong>Account Number:</strong> <span class="mono-val">22440100019043</span><br>
                                <strong>Mobile Number:</strong> <span class="mono-val">8956730349</span><br>
                                <strong>UPI ID:</strong> <span class="mono-val">8956730349@upi</span>
                            </p>
                        </td>
                        <td style="vertical-align: middle; width: 40%; text-align: right; padding: 0 0 0 20px; border: none;">
                            <div class="qr-container" contenteditable="false" style="display: inline-block; text-align: center; background: #ffffff; padding: 12px; border: 1px dashed #1B4D3E; border-radius: 6px; box-shadow: 0 2px 8px rgba(0,0,0,0.04);">
                                <img class="upi-qr" src="https://api.qrserver.com/v1/create-qr-code/?size=140x140&data=upi://pay?pa=8956730349@upi%26pn=Shashank%20Gupta%26am=9000.00%26cu=INR" alt="UPI QR Code" style="width: 140px; height: 140px; display: block; border: 1px solid #f0f0f0; border-radius: 4px;">
                            </div>
                        </td>
                    </tr>
                </table>
            </div>
        </main>

        <!-- Footer (Table Layout for Word Compatibility) -->
        <table style="width: 100%; background-color: #1B4D3E; border-top: 4px solid #1B4D3E; margin-top: auto; table-layout: fixed;" cellspacing="0" border="0">
            <tr>
                <td style="text-align: left; font-family: 'Space Grotesk', sans-serif; font-size: 11px; font-weight: bold; color: #ffffff; padding: 20px 30px;">
                    Thank you for your business!
                </td>
                <td style="text-align: right; font-family: 'JetBrains Mono', monospace; font-size: 11px; color: #2EFF9C; padding: 20px 30px;">
                    www.codecloverstudio.in
                </td>
            </tr>
        </table>
    </div>
  `
};
