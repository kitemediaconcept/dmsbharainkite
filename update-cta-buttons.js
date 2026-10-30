const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'index.html');
let content = fs.readFileSync(filePath, 'utf8');

// 1. Add premium Mollie/Bridge style button styling for .hero-actions .button
const oldHeroActionsCss = `    .hero-actions {
      display: flex;
      gap: 12px;
      flex-wrap: wrap;
    }`;

const newHeroActionsCss = `    .hero-actions {
      display: flex;
      align-items: center;
      gap: 12px;
      flex-wrap: wrap;
    }

    .hero-actions .button {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      height: 48px;
      padding: 0 28px;
      border-radius: 9999px;
      font-family: var(--font-display);
      font-size: 15px;
      font-weight: 600;
      line-height: 1;
      letter-spacing: -0.2px;
      text-decoration: none;
      white-space: nowrap;
      transition: all 180ms cubic-bezier(0.16, 1, 0.3, 1);
      cursor: pointer;
      box-sizing: border-box;
    }

    /* Primary CTA Button: Exact Mollie Dark Espresso Pill */
    .hero-actions .button:not(.light) {
      background: #2b1e16;
      color: #ffffff;
      border: 1px solid #2b1e16;
      box-shadow: 0 2px 8px rgba(43, 30, 22, 0.12);
    }

    .hero-actions .button:not(.light):hover {
      background: #1c130d;
      border-color: #1c130d;
      transform: translateY(-1px);
      box-shadow: 0 4px 14px rgba(43, 30, 22, 0.2);
    }

    .hero-actions .button:not(.light):active {
      transform: translateY(0);
      background: #150e09;
    }

    /* Secondary CTA Button: Exact Mollie Soft Warm Cream Pill */
    .hero-actions .button.light {
      background: #f5f3f0;
      color: #111111;
      border: 1px solid transparent;
    }

    .hero-actions .button.light:hover {
      background: #eae6e1;
      color: #000000;
      transform: translateY(-1px);
    }

    .hero-actions .button.light:active {
      transform: translateY(0);
      background: #e2ded8;
    }

    .hero-actions .button:focus-visible {
      outline: 2px solid #2b1e16;
      outline-offset: 3px;
    }`;

content = content.replace(oldHeroActionsCss, newHeroActionsCss);

// 2. Also check if the second button text should be "Contact sales" or "Contact us"
// The second image shows "Contact sales" (or Contact us). Let's check:
const oldHtmlButtons = `<div class="hero-actions">
          <a class="button" href="#contact">Get started now</a>
          <a class="button light" href="#contact">Contact us</a>
        </div>`;

const newHtmlButtons = `<div class="hero-actions">
          <a class="button" href="#contact">Get started now</a>
          <a class="button light" href="#contact">Contact sales</a>
        </div>`;

if (content.includes(oldHtmlButtons)) {
  content = content.replace(oldHtmlButtons, newHtmlButtons);
  console.log('Updated hero-actions buttons HTML to match second image!');
} else {
  console.log('oldHtmlButtons not found exactly, checking with regex');
}

fs.writeFileSync(filePath, content, 'utf8');
console.log('Updated index.html button styles successfully!');
