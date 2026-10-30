const fs = require('fs');

const dmsNewIndex = fs.readFileSync('g:/DMS WEB NEW/index.html', 'utf8');
const dmsNewStyles = fs.readFileSync('g:/DMS WEB NEW/styles.css', 'utf8');

// Find where sections start after hero banner in dmsNewIndex
// Let's find section id="accreditations"
const accreditationsIdx = dmsNewIndex.indexOf('<section id="accreditations"');
const footerEndIdx = dmsNewIndex.indexOf('</main>');
const footerFullMatch = dmsNewIndex.match(/<footer[\s\S]*?<\/footer>/);

console.log('Accreditations index:', accreditationsIdx);
console.log('Main end index:', footerEndIdx);
console.log('Footer match found:', !!footerFullMatch);

if (accreditationsIdx !== -1 && footerEndIdx !== -1) {
  const subsequentSections = dmsNewIndex.substring(accreditationsIdx, footerEndIdx);
  const footerHtml = footerFullMatch ? footerFullMatch[0] : '';
  fs.writeFileSync('g:/DMS WEB/subsequent-sections.html', subsequentSections + '\n' + footerHtml);
  fs.writeFileSync('g:/DMS WEB/styles-extra.css', dmsNewStyles);
  console.log('Successfully extracted subsequent sections and styles');
}
