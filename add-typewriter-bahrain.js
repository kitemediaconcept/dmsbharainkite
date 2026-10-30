const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'index.html');
let content = fs.readFileSync(filePath, 'utf8');

// 1. Update the CSS for fx-typewriter adapted cleanly for the word "Bahrain":
// - Font matches the headline (Inter font-display), bold (font-weight: 600 or 700)
// - Word length: "Bahrain" = 7 characters -> width: 7ch; steps(7)
// - Caret color: primary DMS emerald (#0d9b49 or #073f2c) or theme accent
// - Smooth blinking caret and typing loop

const typewriterCss = `
    /* Typewriter animation for "Bahrain" */
    .fx-typewriter {
      display: inline-block;
      vertical-align: bottom;
      box-sizing: content-box;
      font-weight: 600;
      color: #073f2c;
      white-space: nowrap;
      overflow: hidden;
      width: 7ch; /* "Bahrain" is 7 characters */
      border-right: 0.08em solid #0d9b49;
      animation: fx-type 3.6s steps(7) infinite,
                 fx-caret 0.65s steps(1) infinite;
    }

    @keyframes fx-type {
      0%, 12%   { width: 0; }
      55%, 90%  { width: 7ch; }
      100%      { width: 0; }
    }

    @keyframes fx-caret {
      50% { border-color: transparent; }
    }
`;

// Insert typewriter CSS right after .hero-intro h1 { ... }
const h1RuleRegex = /\.hero-intro h1 \{[\s\S]*?\}/;
if (h1RuleRegex.test(content) && !content.includes('.fx-typewriter')) {
  content = content.replace(h1RuleRegex, match => match + '\n' + typewriterCss);
  console.log('Added typewriter CSS to index.html!');
}

// 2. Update the HTML inside #hero-heading:
// From:
// <h1 id="hero-heading">
//   Strategic visas, corporate setup, and residency solutions in Bahrain.
// </h1>
// To:
// <h1 id="hero-heading">
//   Strategic visas, corporate setup, and residency solutions in <span class="fx-typewriter">Bahrain</span>.
// </h1>

const oldHeadingHtml = `<h1 id="hero-heading">
          Strategic visas, corporate setup, and residency solutions in Bahrain.
        </h1>`;

const newHeadingHtml = `<h1 id="hero-heading">
          Strategic visas, corporate setup, and residency solutions in <span class="fx-typewriter">Bahrain</span>.
        </h1>`;

if (content.includes(oldHeadingHtml)) {
  content = content.replace(oldHeadingHtml, newHeadingHtml);
  console.log('Updated hero heading HTML with typewriter span for Bahrain!');
} else {
  // If formatting differs slightly, use regex:
  const headingRegex = /<h1 id="hero-heading">[\s\S]*?Strategic visas, corporate setup, and residency solutions in Bahrain\.[\s\S]*?<\/h1>/;
  if (headingRegex.test(content)) {
    content = content.replace(headingRegex, newHeadingHtml);
    console.log('Updated hero heading HTML using regex!');
  } else {
    console.log('Could not find hero-heading directly');
  }
}

fs.writeFileSync(filePath, content, 'utf8');
console.log('Successfully saved index.html!');
