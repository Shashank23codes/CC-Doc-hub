export const letterhead = {
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
    .lh-page {
        font-family: 'Inter', sans-serif;
        color: #333333;
        line-height: 1.6;
        width: 210mm;
        min-height: 297mm;
        background-color: #ffffff;
        margin: 0 auto;
        position: relative;
        display: flex;
        flex-direction: column;
        text-align: left;
        overflow: hidden;
    }
    .lh-content {
        flex: 1;
        padding: 60px 50px;
        position: relative;
    }
    .lh-date {
        margin-bottom: 40px;
        font-size: 14px;
        color: #555555;
        font-family: 'JetBrains Mono', monospace;
    }
    .lh-recipient {
        margin-bottom: 40px;
        font-size: 14px;
    }
    .lh-recipient strong {
        display: block;
        margin-bottom: 5px;
        font-size: 16px;
        color: #0A0F0F;
        font-family: 'Space Grotesk', sans-serif;
    }
    .lh-letter-title {
        font-size: 16px;
        font-weight: 700;
        margin-bottom: 25px;
        color: #1B4D3E;
        border-bottom: 2px solid #E8EBEC;
        padding-bottom: 10px;
        display: inline-block;
        font-family: 'Space Grotesk', sans-serif;
    }
    .lh-letter-body p {
        margin-bottom: 20px;
        text-align: justify;
        font-size: 14px;
        line-height: 1.8;
    }
    .lh-signature {
        margin-top: 60px;
    }
    .lh-signature-name {
        font-weight: 700;
        color: #0A0F0F;
        font-size: 14px;
        font-family: 'Space Grotesk', sans-serif;
    }
    .lh-signature-title {
        font-size: 13px;
        color: #555555;
    }
  `,
  html: `
    <div class="lh-page Section1">
        <!-- Header (Table Layout for Word Compatibility) -->
        <table style="width: 100%; background-color: #0A0F0F; border-bottom: 4px solid #1B4D3E; table-layout: fixed;" cellspacing="0" border="0">
            <tr>
                <td style="text-align: left; vertical-align: middle; padding: 25px 30px;">
                    <img src="/Primary Logo Dark - A.svg" alt="CodeCloverStudio" style="height: 45px; display: block; border: 0;">
                </td>
                <td style="text-align: right; vertical-align: middle; padding: 25px 30px; color: #E8EBEC; font-size: 11px; font-family: 'JetBrains Mono', monospace; line-height: 1.6;">
                    <span style="color: #2EFF9C; font-weight: 600;">T</span> +91 8956730349<br>
                    <span style="color: #2EFF9C; font-weight: 600;">E</span> codecloverstudio@gmail.com<br>
                    <span style="color: #2EFF9C; font-weight: 600;">W</span> www.codecloverstudio.in
                </td>
            </tr>
        </table>

        <main class="lh-content">
            <div class="lh-date">
                Date: <strong>May 23, 2026</strong>
            </div>

            <div class="lh-recipient">
                <strong>Mr. John Doe</strong><br>
                Director of Operations<br>
                XYZ Corporation<br>
                123 Business Avenue, Suite 100<br>
                New York, NY 10001
            </div>

            <div class="lh-letter-title">
                Subject: Proposal for Strategic Partnership
            </div>

            <div class="lh-letter-body">
                <p>Dear Mr. Doe,</p>
                
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in nulla enim. Phasellus molestie magna non est bibendum non venenatis nisl tempor. Suspendisse dictum feugiat nisl ut dapibus.</p>
                
                <p>Mauris iaculis porttitor posuere. Praesent id metus massa, ut blandit odio. Proin quis tortor orci. Etiam at risus et justo dignissim congue. Donec congue lacinia dui, a porttitor lectus condimentum laoreet. Nunc eu ullamcorper orci. Quisque eget odio ac lectus vestibulum faucibus eget in metus.</p>
                
                <p>We look forward to discussing this further with you. Please feel free to reach out to our team if you have any immediate questions.</p>
            </div>

            <div class="lh-signature">
                <div style="font-family: 'Brush Script MT', cursive; font-size: 24px; color: #1B4D3E; margin-bottom: 5px;">Shashank Gupta</div>
                <div class="lh-signature-name">Shashank Gupta</div>
                <div class="lh-signature-title">Founder, CodeCloverStudio</div>
            </div>
        </main>

        <!-- Footer (Table Layout for Word Compatibility) -->
        <table style="width: 100%; background-color: #E8EBEC; border-top: 1px solid #d1d6d8; table-layout: fixed;" cellspacing="0" border="0">
            <tr>
                <td style="text-align: left; font-family: 'Space Grotesk', sans-serif; font-size: 11px; font-weight: bold; color: #0A0F0F; padding: 20px 30px;">
                    CODECLOVERSTUDIO
                </td>
                <td style="text-align: center; font-family: 'Inter', sans-serif; font-size: 11px; color: #555555; padding: 20px 10px;">
                    Nagpur, Maharashtra, India
                </td>
                <td style="text-align: right; font-family: 'JetBrains Mono', monospace; font-size: 11px; padding: 20px 30px;">
                    <a href="https://www.instagram.com/codecloverstudio/" style="color: #1B4D3E; text-decoration: none; font-weight: 600;">@codecloverstudio</a>
                </td>
            </tr>
        </table>
    </div>
  `
};
