const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'index.html');
let content = fs.readFileSync(filePath, 'utf8');

// 1. Update slides array:
// Slide 1 (Ministry Services):
// - image: "assets/Hand Supporting a Green Folder.png"
// - theme: "light" (pure white background, full white card design)
// - title: "Bahrain Ministry Services"
// - badges:
//   "Clear guidance. Every step."
//   "Document review and application support"
//   "Solutions for your next chapter"
//
// Slide 2 (Document Attestation):
// - image: "assets/Stamped paper with purple seals.png"
// - theme: "light" (pure white background)
// - title: "Document Attestation"
// - badges:
//   "Official Ministry & Embassy Attestation"
//   "MOFA Legalization & Consular Authentication"
//   "Certified Translation & Expedited Clearance"

const oldSlidesRegex = /const slides = \[\s*\{[\s\S]*?\}\s*\];/;

const newSlidesConfig = `const slides = [
      {
        title: "Bahrain Ministry Services",
        eyebrow: "DMS BAHRAIN",
        label: "MINISTRY SERVICES",
        image: "assets/Hand Supporting a Green Folder.png",
        color: "#ffffff",
        theme: "light",
        badges: [
          { icon: "✓", text: "Clear guidance. Every step." },
          { icon: "▤", text: "Document review and application support" },
          { icon: "↗", text: "Solutions for your next chapter" }
        ]
      },
      {
        title: "Document Attestation",
        eyebrow: "DMS BAHRAIN",
        label: "ATTESTATION",
        image: "assets/Stamped paper with purple seals.png",
        color: "#ffffff",
        theme: "light",
        badges: [
          { icon: "✓", text: "Official Ministry & Embassy Attestation" },
          { icon: "▤", text: "MOFA Legalization & Consular Authentication" },
          { icon: "↗", text: "Certified Translation & Expedited Clearance" }
        ]
      },
      {
        title: "Saudi Visa Assistance",
        eyebrow: "DMS BAHRAIN",
        label: "SAUDI VISA",
        image: "assets/saudi-visa.svg",
        color: "#163428",
        theme: "dark",
        badges: [
          { icon: "✓", text: "Direct Embassy Liaison" },
          { icon: "▤", text: "Business, Family & Transit Visas" },
          { icon: "↗", text: "Priority Expedited Processing" }
        ]
      },
      {
        title: "Self-Sponsorship Residency",
        eyebrow: "DMS BAHRAIN",
        label: "SELF SPONSORSHIP",
        image: "assets/residency.svg",
        color: "#1d3a33",
        theme: "dark",
        badges: [
          { icon: "✓", text: "10-Year Golden Residency Pathways" },
          { icon: "▤", text: "Property Owner & Investor Visas" },
          { icon: "↗", text: "Full Family Sponsorship Support" }
        ]
      },
      {
        title: "Global Visa Assistance",
        eyebrow: "DMS BAHRAIN",
        label: "GLOBAL VISA",
        image: "assets/global-visa.svg",
        color: "#253b2e",
        theme: "dark",
        badges: [
          { icon: "✓", text: "Schengen, UK & US Travel Guidance" },
          { icon: "▤", text: "End-to-End File Preparation" },
          { icon: "↗", text: "High Approval Success Rate" }
        ]
      }
    ];`;

if (oldSlidesRegex.test(content)) {
  content = content.replace(oldSlidesRegex, newSlidesConfig);
  console.log('Replaced slides configuration successfully!');
} else {
  console.log('Could not match oldSlidesRegex');
}

// 2. CSS adjustments:
// - Always hide the bottom thumbnails row on both light cards or entirely if bottom thumbnails are unwanted
// - In light theme (.banner[data-theme="light"]), display the .banner-badges with a beautiful, readable glassmorphism effect (backdrop-filter: blur(16px), crisp semi-transparent white, subtle shadow, dark forest text)
// - Ensure the green folder image on slide 1 is positioned on the right half with object-fit: contain/cover, clean white background

const oldLightBannerCssRegex = /\/\* SLIDE-SPECIFIC THEMES \(LIGHT \/ WHITE BACKGROUND FOR ATTESTATION\) \*\/[\s\S]*?\/\* BANNER CTA BUTTON \*\//;

const newLightBannerCss = `/* SLIDE-SPECIFIC THEMES (LIGHT / WHITE BACKGROUND FOR MINISTRY SERVICES & ATTESTATION) */
    .banner[data-theme="light"] {
      background: #ffffff;
      color: #111111;
    }

    /* Keep the glassmorphism badges visible and beautifully styled with blur effect */
    .banner[data-theme="light"] .banner-badges {
      display: grid !important;
      position: absolute;
      top: 32px;
      left: 32px;
      z-index: 2;
      gap: 8px;
    }

    .banner[data-theme="light"] .banner-badge {
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 13px 20px;
      border: 1px solid rgba(0, 0, 0, 0.08);
      border-radius: 9999px;
      background: rgba(255, 255, 255, 0.72);
      backdrop-filter: blur(16px);
      -webkit-backdrop-filter: blur(16px);
      color: #163625;
      font-size: 13px;
      font-weight: 500;
      line-height: 1.3;
      letter-spacing: -0.2px;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
    }

    .banner[data-theme="light"] .badge-icon {
      color: #1a7447;
      font-weight: 700;
    }

    /* Soft overlay on white background */
    .banner[data-theme="light"] .banner-overlay {
      background: linear-gradient(
        to right,
        rgba(255, 255, 255, 0.96) 0%,
        rgba(255, 255, 255, 0.82) 32%,
        rgba(255, 255, 255, 0.25) 58%,
        transparent 80%
      );
    }

    .banner[data-theme="light"] .banner-caption .eyebrow {
      color: #5d6d63;
      font-weight: 600;
      letter-spacing: 0.1em;
    }

    .banner[data-theme="light"] .banner-caption h2 {
      color: #073f2c;
      font-weight: 600;
      text-shadow: 0 1px 2px rgba(255, 255, 255, 0.9);
    }

    /* Hide the bottom thumbnail strip on light slides as requested */
    .banner[data-theme="light"] .banner-thumbnails {
      display: none !important;
    }

    /* Hide top circular controls on light slides */
    .banner[data-theme="light"] .banner-controls {
      display: none !important;
    }

    /* Light slide image positioning */
    .banner-slide.is-light {
      background: #ffffff;
    }

    .banner-slide.is-light > img {
      object-fit: contain;
      object-position: right center;
      width: 100%;
      height: 100%;
    }

    /* BANNER CTA BUTTON */`;

if (oldLightBannerCssRegex.test(content)) {
  content = content.replace(oldLightBannerCssRegex, newLightBannerCss);
  console.log('Updated light theme CSS successfully!');
} else {
  console.log('Could not match oldLightBannerCssRegex');
}

fs.writeFileSync(filePath, content, 'utf8');
console.log('Successfully saved all updates to index.html!');
