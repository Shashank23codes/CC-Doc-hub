# 🍀 CodeClover Studio — Document Generator Hub

A premium, interactive document creation and management web application designed for agencies, studios, and freelance professionals. Built with **React**, **Vite**, and **TailwindCSS**, the Document Generator Hub allows team members and clients to seamlessly edit, preview, and export high-fidelity documents (PDFs & DOCX files) with pixel-perfect brand alignment.

---

## 🚀 Key Features

*   **Premium Interactive Workspace**: Real-time editor with structured schema inputs and a live, responsive preview of the document.
*   **Modular Template Engine**: Business-critical document types are cleanly decoupled into individual modules under `src/templates/` for effortless extension and maintenance.
*   **Pixel-Perfect Export Engines**:
    *   **PDF Export**: Custom-engineered margins and page-break rules utilizing `html2pdf.js` ensure headers and footers span the full width of pages edge-to-edge. Headings, list items, and table rows are kept together automatically to prevent awkward page splits.
    *   **DOCX Export**: Standard Word document conversion powered by `html-docx-js` for editable client handoffs.
*   **Pre-cached Custom Typography**: Standardized brand fonts (`Space Grotesk`, `Inter`, `JetBrains Mono`) are cached globally in `index.html` to eliminate font fallbacks during canvas rasterization.
*   **Unified Visual Language**: Styled using CodeClover's dark forest green (`#1B4D3E`) and vibrant mint green (`#2EFF9C`) brand identity.

---

## 📂 Document Templates

The application supports a registry of templates located under [src/templates](file:///e:/web%20document/docapp/src/templates/):

1.  **Onboarding Document (`onboarding.js`)**: Guide new clients and partners through the studio's communication channels, delivery models, and milestones.
2.  **Official Letterhead (`letterhead.js`)**: General-purpose corporate letters and formal communication.
3.  **Client Proposal (`proposal.js`)**: Dynamic project proposal formats showcasing deliverables, pricing grids, and timelines.
4.  **Statement of Work (`sow.js`)**: Detailed scope of work configurations, payment milestones, and technical parameters.
5.  **Non-Disclosure Agreement (`nda.js`)**: Bilateral NDA templates protecting proprietary methodologies.
6.  **Project Change Order (`changeorder.js`)**: Formal amendments to project scopes, budgets, and scheduling.
7.  **Service Invoice (`invoice.js`)**: Professional client billing, tax settings, and payment details.

---

## 🛠️ Tech Stack & Architecture

*   **Core**: React, Vite
*   **Styles**: TailwindCSS (Design tokens mapped in `src/index.css`)
*   **Fonts**: Space Grotesk (Headers), Inter (Body), JetBrains Mono (Codes/Data)
*   **CDNs & Libraries**:
    *   `html2pdf.js` — Client-side HTML-to-canvas rendering
    *   `html-docx-js` — Client-side HTML-to-office-document rendering
*   **Base URL Pathing**: Configured with `base: './'` inside `vite.config.js` to ensure asset URLs resolve correctly on any subpath (e.g., GitHub Pages subfolders or custom root domains).

---

## 💻 Local Development Setup

To spin up the workspace locally:

1.  Ensure you have Node.js installed.
2.  Navigate to the `docapp` folder:
    ```bash
    cd docapp
    ```
3.  Install dependencies:
    ```bash
    npm install
    ```
4.  Launch the local Vite development server:
    ```bash
    npm run dev
    ```
5.  Open `http://localhost:5173` in your web browser.

---

## 📦 Production Builds & Verification

To verify that the application compiles cleanly without warnings or errors:

```bash
cd docapp
npm run build
```

This compiles optimized client assets into `docapp/dist/`.

---

## 🌐 Continuous Integration & Deployment (CI/CD)

The repository features an automated deployment pipeline configured via GitHub Actions at [.github/workflows/deploy.yml](file:///e:/web%20document/.github/workflows/deploy.yml):

*   **Trigger**: Pushes to the `main` branch.
*   **Process**:
    1.  Sets up Node.js.
    2.  Installs project packages and builds production bundles (`docapp/dist/`).
    3.  Deploys the static assets directly to the `gh-pages` branch.
*   **Access**: Once deployed, the live hub is accessible at `https://<github-username>.github.io/<repository-name>/`.

---

## ✉️ Contact & Support

*   **Company**: CodeClover Studio
*   **Founder**: Shashank Gupta
*   **Email**: codecloverstudio@gmail.com
*   **Instagram**: [@codecloverstudio](https://www.instagram.com/codecloverstudio/)
