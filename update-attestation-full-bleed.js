const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'index.html');
let content = fs.readFileSync(filePath, 'utf8');

// 1. Full-bleed banner card styles with smooth left gradient blend:
const fullBleedCardCss = `
    /* Attestation Document Full Bleed Display */
    .dms-gold-stack .dgs-card-attestation {
      position: relative;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      justify-content: center;
      min-height: 440px;
      padding: 0 !important;
    }

    .dms-gold-stack .dgs-attestation-grid {
      display: grid;
      grid-template-columns: minmax(0, 1.15fr) minmax(0, 1.1fr);
      align-items: stretch;
      min-height: 440px;
      width: 100%;
    }

    .dms-gold-stack .dgs-attestation-copy {
      position: relative;
      z-index: 2;
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: clamp(32px, 4.5vw, 56px);
      background: var(--card-bg);
    }

    .dms-gold-stack .dgs-attestation-visual {
      position: relative;
      z-index: 1;
      overflow: hidden;
      height: 100%;
      min-height: 440px;
    }

    /* Full-bleed image occupying entire right half of the card */
    .dms-gold-stack .dgs-attestation-img {
      position: absolute;
      inset: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center right;
      display: block;
      transition: transform 600ms cubic-bezier(0.16, 1, 0.3, 1);
    }

    .dms-gold-stack .dgs-card-attestation:hover .dgs-attestation-img {
      transform: scale(1.03);
    }

    /* Soft, smooth gradient on the left of the image blending into the card */
    .dms-gold-stack .dgs-attestation-scrim {
      position: absolute;
      inset: 0;
      z-index: 1;
      pointer-events: none;
      background: linear-gradient(
        to right,
        var(--card-bg) 0%,
        rgba(248, 246, 242, 0.95) 12%,
        rgba(248, 246, 242, 0.6) 28%,
        rgba(248, 246, 242, 0.15) 45%,
        transparent 65%
      );
    }

    /* Floating caption overlay */
    .dms-gold-stack .dgs-attestation-caption {
      position: absolute;
      right: 24px;
      bottom: 20px;
      z-index: 2;
      padding: 6px 14px;
      border-radius: 9999px;
      background: rgba(255, 255, 255, 0.88);
      backdrop-filter: blur(10px);
      -webkit-backdrop-filter: blur(10px);
      border: 1px solid rgba(0, 0, 0, 0.08);
      color: #555248;
      font-size: 11px;
      font-weight: 500;
      line-height: 1;
      letter-spacing: 0.2px;
      box-shadow: 0 4px 14px rgba(0, 0, 0, 0.06);
    }

    /* Tablet & Mobile responsive */
    @media (max-width: 900px) {
      .dms-gold-stack .dgs-attestation-grid {
        grid-template-columns: 1fr;
      }
      .dms-gold-stack .dgs-attestation-copy {
        padding: 32px 24px 24px;
      }
      .dms-gold-stack .dgs-attestation-visual {
        min-height: 280px;
        position: relative;
      }
      .dms-gold-stack .dgs-attestation-scrim {
        background: linear-gradient(
          to bottom,
          var(--card-bg) 0%,
          rgba(248, 246, 242, 0.7) 20%,
          transparent 50%
        );
      }
    }
`;

// Replace the old .dgs-mockup-wrapper CSS
const oldCssRegex = /\/\* Attestation Document Image Display \*\/[\s\S]*?\.dms-gold-stack \.dgs-mockup-img \{[\s\S]*?\}/;
if (oldCssRegex.test(content)) {
  content = content.replace(oldCssRegex, fullBleedCardCss);
  console.log('Replaced old dgs-mockup-wrapper CSS with fullBleedCardCss');
} else {
  content = content.replace('/* REFLECTIVE GOLD VISUAL */', fullBleedCardCss + '\n    /* REFLECTIVE GOLD VISUAL */');
  console.log('Inserted fullBleedCardCss before REFLECTIVE GOLD VISUAL');
}

// 2. Update the HTML for the second card:
const oldCardHtmlRegex = /<!-- SECOND CARD: DOCUMENT ATTESTATION SERVICES -->[\s\S]*?<\/article>\s*<\/div>\s*(?=\s*<!-- THIRD CARD: COMMERCIAL REGISTRATION & CORPORATE SETUP -->)/;

const newSecondCardHtml = `<!-- SECOND CARD: DOCUMENT ATTESTATION SERVICES (FULL RIGHT IMAGE WITH LEFT GRADIENT) -->
      <div class="dgs-slot" style="--i: 1;">
        <article class="dgs-card dgs-card-attestation">
          <div class="dgs-attestation-grid">
            <div class="dgs-attestation-copy">
              <span class="dgs-eyebrow">LEGALIZATION &amp; AUTHENTICATION</span>
              <h2 class="dgs-heading">
                Document Attestation.<br>
                Certified &amp; Approved.
              </h2>
              <p class="dgs-description">
                Comprehensive document legalization, MOFA certification, embassy attestation, and certified translation services with priority clearance.
              </p>
              <ul class="dgs-benefits">
                <li>MOFA &amp; Ministry legalization</li>
                <li>Embassy &amp; consular attestation</li>
                <li>Certified Arabic &amp; legal translation</li>
              </ul>
              <a class="dgs-link" href="#contact">
                Explore Document Attestation Services
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M5 12h14m-6-6 6 6-6 6"/>
                </svg>
              </a>
            </div>

            <div class="dgs-attestation-visual">
              <div class="dgs-attestation-scrim" aria-hidden="true"></div>
              <img
                class="dgs-attestation-img"
                src="assets/Stamped paper with purple seals.png"
                alt="Official Embassy of Bahrain stamp seal and attestation document"
                loading="lazy"
              >
              <span class="dgs-attestation-caption">Bahrain Ministry &amp; Embassy Attestation</span>
            </div>
          </div>
        </article>
      </div>`;

if (oldCardHtmlRegex.test(content)) {
  content = content.replace(oldCardHtmlRegex, newSecondCardHtml + '\n\n      ');
  console.log('Successfully updated second card HTML to full bleed with left gradient!');
} else {
  console.log('oldCardHtmlRegex did not match directly, trying fallback match');
}

fs.writeFileSync(filePath, content, 'utf8');
console.log('index.html updated successfully!');

// Also sync fix-stack-scroll.js if present
const fixScriptPath = path.join(__dirname, 'fix-stack-scroll.js');
if (fs.existsSync(fixScriptPath)) {
  let fixContent = fs.readFileSync(fixScriptPath, 'utf8');
  if (oldCardHtmlRegex.test(fixContent)) {
    fixContent = fixContent.replace(oldCardHtmlRegex, newSecondCardHtml + '\n\n      ');
    fs.writeFileSync(fixScriptPath, fixContent, 'utf8');
    console.log('Updated fix-stack-scroll.js');
  }
}
