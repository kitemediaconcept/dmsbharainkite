const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'index.html');
let content = fs.readFileSync(filePath, 'utf8');

// 1. Move the period inside or style .fx-typewriter without gap:
// If we include the period inside: <span class="fx-typewriter">Bahrain.</span>
// Characters: "Bahrain." is 8 characters.
// Or if the period is outside: <span class="fx-typewriter">Bahrain</span><span class="hero-dot">.</span>
// With proportional font, "Bahrain" width in Inter is approx 5.4ch to 5.6ch.
// Let's test: if we include "Bahrain." inside:
// The caret is directly on the right of the period, meaning "Bahrain." has ZERO gap before the period!
// And when typing finishes, the period sits right at the end of Bahrain: "Bahrain." with the caret immediately after it.

const oldTypewriterCssRegex = /\/\* Typewriter animation for "Bahrain" \*\/[\s\S]*?@keyframes fx-caret \{[\s\S]*?\}/;

const newTypewriterCss = `/* Typewriter animation for "Bahrain." */
    .fx-typewriter {
      display: inline-block;
      vertical-align: bottom;
      box-sizing: content-box;
      font-weight: 600;
      color: #073f2c;
      white-space: nowrap;
      overflow: hidden;
      width: 5.75ch; /* Exact fit for proportional "Bahrain." in Inter */
      border-right: 3px solid #0d9b49;
      margin-right: 2px;
      animation: fx-type 3.6s steps(14) infinite,
                 fx-caret 0.65s steps(1) infinite;
    }

    @keyframes fx-type {
      0%, 10%   { width: 0; }
      55%, 90%  { width: 5.75ch; }
      100%      { width: 0; }
    }

    @keyframes fx-caret {
      50% { border-color: transparent; }
    }`;

content = content.replace(oldTypewriterCssRegex, newTypewriterCss);

// 2. Put the period inside the typewriter span so there is zero gap between Bahrain and the dot:
content = content.replace(
  '<span class="fx-typewriter">Bahrain</span>.',
  '<span class="fx-typewriter">Bahrain.</span>'
);

fs.writeFileSync(filePath, content, 'utf8');
console.log('Successfully removed space after Bahrain in index.html!');
