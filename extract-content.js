const fs = require('fs');

const indexHtml = fs.readFileSync('g:/DMS WEB NEW/index.html', 'utf8');
const stylesCss = fs.existsSync('g:/DMS WEB NEW/styles.css') ? fs.readFileSync('g:/DMS WEB NEW/styles.css', 'utf8') : '';

console.log('indexHtml length:', indexHtml.length);
console.log('stylesCss length:', stylesCss.length);

// extract main element contents from indexHtml
const mainMatch = indexHtml.match(/<main[\s\S]*?<\/main>/);
if (mainMatch) {
  console.log('Main found, length:', mainMatch[0].length);
}
const footerMatch = indexHtml.match(/<footer[\s\S]*?<\/footer>/);
if (footerMatch) {
  console.log('Footer found, length:', footerMatch[0].length);
}
