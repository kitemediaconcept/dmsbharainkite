const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'index.html');
let content = fs.readFileSync(filePath, 'utf8');

// 1. Add CSS for .dgs-image-wrapper if not present
const cssToAdd = `
    /* Attestation Document Image Display */
    .dms-gold-stack .dgs-mockup-wrapper {
      position: relative;
      width: 100%;
      max-width: 440px;
      margin: 0 auto;
      border-radius: 20px;
      overflow: hidden;
      box-shadow:
        0 14px 34px -10px rgba(0, 0, 0, 0.16),
        0 4px 12px rgba(0, 0, 0, 0.06);
      background: #fdfdfd;
      border: 1px solid rgba(0, 0, 0, 0.06);
      transition: transform 300ms ease, box-shadow 300ms ease;
    }

    .dms-gold-stack .dgs-mockup-wrapper:hover {
      transform: translateY(-2px) scale(1.01);
      box-shadow:
        0 20px 40px -12px rgba(0, 0, 0, 0.2),
        0 6px 16px rgba(0, 0, 0, 0.08);
    }

    .dms-gold-stack .dgs-mockup-img {
      display: block;
      width: 100%;
      height: 245px;
      object-fit: cover;
      object-position: center;
    }
`;

if (!content.includes('dgs-mockup-wrapper')) {
  content = content.replace(
    '/* REFLECTIVE GOLD VISUAL */',
    cssToAdd + '\n    /* REFLECTIVE GOLD VISUAL */'
  );
  console.log('Added dgs-mockup-wrapper CSS');
}

// 2. Target the second card in the stack
// Find the exact second card block:
const targetCardRegex = /<!-- SECOND CARD: CORPORATE MOBILITY & RESIDENCE PERMITS -->[\s\S]*?<!-- THIRD CARD: COMMERCIAL REGISTRATION & CORPORATE SETUP -->/;

const newSecondCardHtml = `<!-- SECOND CARD: DOCUMENT ATTESTATION SERVICES -->
      <div class="dgs-slot" style="--i: 1;">
        <article class="dgs-card">
          <div class="dgs-golden-layout">
            <div class="dgs-copy">
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
            <div class="dgs-visual">
              <div class="dgs-mockup-wrapper">
                <img
                  class="dgs-mockup-img"
                  src="assets/Stamped paper with purple seals.png"
                  alt="Official Bahrain document attestation seal and stationery mockup"
                  loading="lazy"
                >
              </div>
              <span class="dgs-caption">Bahrain Ministry &amp; Embassy Attestation</span>
            </div>
          </div>
        </article>
      </div>

      <!-- THIRD CARD: COMMERCIAL REGISTRATION & CORPORATE SETUP -->`;

if (targetCardRegex.test(content)) {
  content = content.replace(targetCardRegex, newSecondCardHtml);
  console.log('Successfully replaced second card with Document Attestation & Seal mockup PNG in index.html!');
} else {
  console.log('Could not match targetCardRegex in index.html');
}

fs.writeFileSync(filePath, content, 'utf8');
console.log('index.html saved successfully!');

// Also update Elementor template if exists
const elemFiles = [
  path.join(__dirname, 'elementor-templates', '06-golden-visa-stack.html'),
  path.join(__dirname, 'fix-stack-scroll.js')
];

elemFiles.forEach(file => {
  if (fs.existsSync(file)) {
    let fContent = fs.readFileSync(file, 'utf8');
    if (targetCardRegex.test(fContent)) {
      if (!fContent.includes('dgs-mockup-wrapper')) {
        fContent = fContent.replace('/* REFLECTIVE GOLD VISUAL */', cssToAdd + '\n    /* REFLECTIVE GOLD VISUAL */');
      }
      fContent = fContent.replace(targetCardRegex, newSecondCardHtml);
      fs.writeFileSync(file, fContent, 'utf8');
      console.log('Updated ' + path.basename(file));
    }
  }
});
