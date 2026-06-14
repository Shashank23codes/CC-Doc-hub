export const payslip = {
  style: `
    @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;700&display=swap');
    
    * {
        box-sizing: border-box;
    }
    @page Section1 {
        size: 210mm 297mm;
        margin: 0in 0in 0in 0in;
    }
    .ps-page {
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
    .ps-content {
        padding: 50px 60px;
        flex: 1;
    }
    .ps-meta-table {
        width: 100%;
        border-collapse: collapse;
        margin-bottom: 30px;
        table-layout: fixed;
    }
    .ps-meta-table td {
        padding: 6px 10px;
        font-size: 12.5px;
        border-bottom: 1px solid #f0f0f0;
    }
    .ps-breakdown-table {
        width: 100%;
        border-collapse: collapse;
        margin-bottom: 30px;
        table-layout: fixed;
    }
    .ps-breakdown-table th, .ps-breakdown-table td {
        padding: 10px 12px;
        border: 1px solid #e0e0e0;
        font-size: 12.5px;
    }
    .ps-breakdown-table th {
        background-color: #0A0F0F;
        color: #2EFF9C;
        font-weight: 600;
        font-family: 'Space Grotesk', sans-serif;
    }
    .ps-summary-table {
        width: 100%;
        border-collapse: collapse;
        margin-bottom: 40px;
        table-layout: fixed;
    }
    .ps-summary-table td {
        padding: 10px 15px;
        font-size: 13px;
    }
    .mono-val {
        font-family: 'JetBrains Mono', monospace;
    }
  `,
  html: `
    <div class="ps-page Section1">
        <!-- Header (Table Layout for Word Compatibility) -->
        <table style="width: 100%; background-color: #0A0F0F; border-bottom: 4px solid #1B4D3E; table-layout: fixed;" cellspacing="0" border="0">
            <tr>
                <td style="text-align: left; vertical-align: middle; padding: 25px 30px;">
                    <img src="/Primary Logo Dark - A.svg" alt="CodeCloverStudio" style="height: 45px; display: block; border: 0;">
                </td>
                <td style="text-align: right; vertical-align: middle; padding: 25px 30px;">
                    <h1 style="margin: 0; font-size: 20px; color: #2EFF9C; font-family: 'Space Grotesk', sans-serif; font-weight: 850; letter-spacing: 1px;">SALARY SLIP</h1>
                    <p style="margin: 5px 0 0 0; font-size: 12px; color: #a0aab2; font-family: 'JetBrains Mono', monospace;">Cycle: May 2026</p>
                </td>
            </tr>
        </table>

        <main class="ps-content">
            <!-- Employee Meta (Table Layout for Word Compatibility) -->
            <h3 style="margin: 0 0 12px 0; font-size: 12px; color: #1B4D3E; text-transform: uppercase; font-weight: 700; border-bottom: 2px solid #0A0F0F; padding-bottom: 5px; font-family: 'Space Grotesk', sans-serif;">Employee & Payroll Details</h3>
            <table class="ps-meta-table">
                <tr>
                    <td style="width: 25%;"><strong>Employee Name:</strong></td>
                    <td style="width: 25%;">Rajesh Kumar</td>
                    <td style="width: 25%;"><strong>Employee ID:</strong></td>
                    <td class="mono-val" style="width: 25%;">CCS-EMP-082</td>
                </tr>
                <tr>
                    <td><strong>Designation:</strong></td>
                    <td>Senior UX Designer</td>
                    <td><strong>Bank Account:</strong></td>
                    <td class="mono-val">*****45312</td>
                </tr>
                <tr>
                    <td><strong>Department:</strong></td>
                    <td>Design & Creative</td>
                    <td><strong>UAN Number:</strong></td>
                    <td class="mono-val">10098436578</td>
                </tr>
                <tr>
                    <td><strong>Paid Days:</strong></td>
                    <td class="mono-val">31</td>
                    <td><strong>LOP Days:</strong></td>
                    <td class="mono-val">0</td>
                </tr>
            </table>

            <!-- Salary Earnings & Deductions Breakdown -->
            <h3 style="margin: 25px 0 12px 0; font-size: 12px; color: #1B4D3E; text-transform: uppercase; font-weight: 700; border-bottom: 2px solid #0A0F0F; padding-bottom: 5px; font-family: 'Space Grotesk', sans-serif;">Salary Structure Breakdown</h3>
            <table class="ps-breakdown-table">
                <thead>
                    <tr>
                        <th style="width: 35%;">Earnings Component</th>
                        <th style="width: 15%; text-align: right;">Amount (₹)</th>
                        <th style="width: 35%;">Deductions Component</th>
                        <th style="width: 15%; text-align: right;">Amount (₹)</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><strong>Basic Salary</strong></td>
                        <td class="mono-val" style="text-align: right;">₹45,000.00</td>
                        <td><strong>Provident Fund (PF)</strong></td>
                        <td class="mono-val" style="text-align: right;">₹1,800.00</td>
                    </tr>
                    <tr>
                        <td><strong>House Rent Allowance (HRA)</strong></td>
                        <td class="mono-val" style="text-align: right;">₹18,000.00</td>
                        <td><strong>Professional Tax (PT)</strong></td>
                        <td class="mono-val" style="text-align: right;">₹200.00</td>
                    </tr>
                    <tr>
                        <td><strong>Special Allowance</strong></td>
                        <td class="mono-val" style="text-align: right;">₹11,300.00</td>
                        <td><strong>Income Tax (TDS)</strong></td>
                        <td class="mono-val" style="text-align: right;">₹2,500.00</td>
                    </tr>
                    <tr>
                        <td><strong>Medical Re-imbursement</strong></td>
                        <td class="mono-val" style="text-align: right;">₹1,250.00</td>
                        <td><strong>Other Deductions</strong></td>
                        <td class="mono-val" style="text-align: right;">₹0.00</td>
                    </tr>
                    <tr style="background-color: #fcfdfe; font-weight: bold;">
                        <td><strong>Gross Earnings</strong></td>
                        <td class="mono-val" style="text-align: right; color: #1B4D3E;">₹75,550.00</td>
                        <td><strong>Total Deductions</strong></td>
                        <td class="mono-val" style="text-align: right; color: #ef4444;">₹4,500.00</td>
                    </tr>
                </tbody>
            </table>

            <!-- Salary Summary & Net Salary Outstanding -->
            <table class="ps-summary-table" style="background-color: #f8f9fa; border-left: 4px solid #1B4D3E;">
                <tr>
                    <td style="text-align: left; vertical-align: middle;">
                        <span style="font-size: 11px; text-transform: uppercase; color: #555; font-family: 'Space Grotesk', sans-serif; font-weight: 700; tracking-wide: 0.5px;">Net Pay in Words:</span><br>
                        <strong style="font-size: 12.5px; color: #0A0F0F;">Rupees Seventy-One Thousand Fifty Only</strong>
                    </td>
                    <td style="text-align: right; vertical-align: middle; width: 45%;">
                        <span style="font-size: 11px; text-transform: uppercase; color: #555; font-family: 'Space Grotesk', sans-serif; font-weight: 700; tracking-wide: 0.5px;">Net Monthly Pay Out:</span><br>
                        <strong class="mono-val" style="font-size: 20px; color: #1B4D3E;">₹71,050.00</strong>
                    </td>
                </tr>
            </table>

            <div style="margin-top: 60px; font-size: 11.5px; color: #666; line-height: 1.5; text-align: center;">
                <p>This is a computer generated salary document and does not require a physical signature/seal under HR corporate audits.</p>
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
