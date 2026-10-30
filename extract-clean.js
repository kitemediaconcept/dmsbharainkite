const fs = require('fs');

const dmsNewIndex = fs.readFileSync('g:/DMS WEB NEW/index.html', 'utf8');
const lines = dmsNewIndex.split('\n');

// Extract lines 242 to the end of the footer
const subsequentLines = lines.slice(241); // 0-indexed: line 242 is index 241
const footerEndIdx = subsequentLines.findIndex(l => l.includes('</footer>'));
const extractedHtml = subsequentLines.slice(0, footerEndIdx + 1).join('\n');

fs.writeFileSync('g:/DMS WEB/subsequent-sections.html', extractedHtml);
console.log('Extracted lines:', subsequentLines.slice(0, footerEndIdx + 1).length);

// Also copy the CSS from DMS WEB NEW
const dmsNewStyles = fs.readFileSync('g:/DMS WEB NEW/styles.css', 'utf8');
fs.writeFileSync('g:/DMS WEB/styles-full.css', dmsNewStyles);
console.log('Saved styles-full.css');
