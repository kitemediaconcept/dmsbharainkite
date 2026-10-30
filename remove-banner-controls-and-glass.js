const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'index.html');
let content = fs.readFileSync(filePath, 'utf8');

// 1. Hide the entire top-right controls (arrows + pause/play button) on the second slide (light theme):
// Replace:
// .banner[data-theme="light"] .control-button.previous,
// .banner[data-theme="light"] .control-button.next {
//   display: none !important;
// }
// with:
// .banner[data-theme="light"] .banner-controls {
//   display: none !important;
// }

content = content.replace(
  /\.banner\[data-theme="light"\]\s*\.control-button\.previous,\s*\.banner\[data-theme="light"\]\s*\.control-button\.next\s*\{\s*display:\s*none\s*!important;\s*\}/g,
  `.banner[data-theme="light"] .banner-controls {
      display: none !important; /* Remove top controls (arrows & pause button) on slide 2 */
    }`
);

// 2. Remove the glassmorphism badges on the second slide (light theme):
// Either hide the entire .banner-badges or remove its glassmorphism/border/background.
// "second screent short glassmorisam effect remove" means the glassmorphism badges on the second slide!
// Let's add:
const hideBadgesOnLightSlide = `
    .banner[data-theme="light"] .banner-badges {
      display: none !important; /* Remove glassmorphism effect/badges on second slide */
    }
`;

if (!content.includes('.banner[data-theme="light"] .banner-badges')) {
  content = content.replace(
    '.banner[data-theme="light"] .banner-overlay {',
    hideBadgesOnLightSlide + '\n    .banner[data-theme="light"] .banner-overlay {'
  );
  console.log('Added rule to remove glassmorphism badges on slide 2');
}

fs.writeFileSync(filePath, content, 'utf8');
console.log('Successfully updated index.html!');
