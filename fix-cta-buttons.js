const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'index.html');
let content = fs.readFileSync(filePath, 'utf8');

// 1. Expand .hero-intro right column width so both buttons comfortably fit on the same line:
// From:
// .hero-intro {
//   max-width: 1280px;
//   margin: 72px auto 48px;
//   padding: 0 32px;
//   display: grid;
//   grid-template-columns: minmax(0, 1fr) 320px;
//   align-items: end;
//   gap: 64px;
// }
// To:
// grid-template-columns: minmax(0, 1fr) 390px;
content = content.replace(
  'grid-template-columns: minmax(0, 1fr) 320px;',
  'grid-template-columns: minmax(0, 1fr) 390px;'
);

content = content.replace(
  'grid-template-columns: minmax(0, 1fr) 280px;',
  'grid-template-columns: minmax(0, 1fr) 360px;'
);

// 2. Update .hero-actions CSS so buttons NEVER wrap onto two lines on desktop, and color matches DMS brand theme:
const oldActionsCssRegex = /\.hero-actions \{[\s\S]*?\.hero-actions \.button:focus-visible \{[\s\S]*?\}/;

const newActionsCss = `.hero-actions {
      display: flex;
      align-items: center;
      gap: 12px;
      flex-wrap: nowrap; /* Keep on the same line */
    }

    .hero-actions .button {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      height: 46px;
      padding: 0 22px;
      border-radius: 9999px;
      font-family: var(--font-display);
      font-size: 14.5px;
      font-weight: 600;
      line-height: 1;
      letter-spacing: -0.2px;
      text-decoration: none;
      white-space: nowrap;
      transition: all 180ms cubic-bezier(0.16, 1, 0.3, 1);
      cursor: pointer;
      box-sizing: border-box;
      flex-shrink: 0;
    }

    /* Primary CTA Button: Deep DMS Emerald/Forest Theme (#073f2c / #163f30) */
    .hero-actions .button:not(.light) {
      background: #073f2c;
      color: #ffffff;
      border: 1px solid #073f2c;
      box-shadow: 0 2px 8px rgba(7, 63, 44, 0.2);
    }

    .hero-actions .button:not(.light):hover {
      background: #0c573d;
      border-color: #0c573d;
      transform: translateY(-1px);
      box-shadow: 0 4px 14px rgba(7, 63, 44, 0.28);
    }

    .hero-actions .button:not(.light):active {
      transform: translateY(0);
      background: #052f21;
    }

    /* Secondary CTA Button: Clean DMS Soft Mint Tint (#edf7f1 / #e6f4ed) */
    .hero-actions .button.light {
      background: #edf7f1;
      color: #073f2c;
      border: 1px solid #d2eade;
    }

    .hero-actions .button.light:hover {
      background: #e1f2e8;
      border-color: #bfe1ce;
      color: #04291d;
      transform: translateY(-1px);
    }

    .hero-actions .button.light:active {
      transform: translateY(0);
      background: #d4ebd9;
    }

    .hero-actions .button:focus-visible {
      outline: 2px solid #073f2c;
      outline-offset: 3px;
    }`;

content = content.replace(oldActionsCssRegex, newActionsCss);

fs.writeFileSync(filePath, content, 'utf8');
console.log('Successfully updated CTA buttons to single line and theme colors!');
