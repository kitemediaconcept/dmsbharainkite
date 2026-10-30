const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'index.html');
let content = fs.readFileSync(filePath, 'utf8');

// 1. Swap grid columns in CSS
// Replace:
// .dms-layout {
//   display: grid;
//   grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.25fr);
//   gap: clamp(48px, 9vw, 140px);
//   align-items: start;
// }
// with:
// .dms-layout {
//   display: grid;
//   grid-template-columns: minmax(0, 1.25fr) minmax(0, 0.9fr);
//   gap: clamp(48px, 9vw, 140px);
//   align-items: start;
// }

content = content.replace(
  'grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.25fr);',
  'grid-template-columns: minmax(0, 1.25fr) minmax(0, 0.9fr);'
);

content = content.replace(
  'grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.2fr);',
  'grid-template-columns: minmax(0, 1.2fr) minmax(0, 0.9fr);'
);

// 2. Also swap the DOM order inside .dms-layout so on mobile and keyboard navigation the services appear first, or intro appears on the right
const targetLayoutRegex = /<div class="dms-layout">\s*<div class="dms-intro">([\s\S]*?)<\/div>\s*<div class="dms-services">([\s\S]*?)<\/div>\s*<\/div>/;

const match = content.match(targetLayoutRegex);
if (match) {
  const introHtml = match[1];
  const servicesHtml = match[2];
  
  const swappedHtml = `<div class="dms-layout">

      <div class="dms-services">${servicesHtml}</div>

      <div class="dms-intro">${introHtml}</div>

    </div>`;

  content = content.replace(match[0], swappedHtml);
  console.log('Successfully swapped dms-intro and dms-services in DOM!');
} else {
  console.log('Regex match failed for dms-layout DOM swapping.');
}

fs.writeFileSync(filePath, content, 'utf8');
console.log('Updated index.html successfully!');

// Also update Elementor template if present
const elementorHtmlPath = path.join(__dirname, 'elementor-templates', '07-expertise-sectors.html');
if (fs.existsSync(elementorHtmlPath)) {
  let elemHtml = fs.readFileSync(elementorHtmlPath, 'utf8');
  elemHtml = elemHtml.replace(
    'grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.25fr);',
    'grid-template-columns: minmax(0, 1.25fr) minmax(0, 0.9fr);'
  );
  elemHtml = elemHtml.replace(
    'grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.2fr);',
    'grid-template-columns: minmax(0, 1.2fr) minmax(0, 0.9fr);'
  );
  const elemMatch = elemHtml.match(targetLayoutRegex);
  if (elemMatch) {
    elemHtml = elemHtml.replace(elemMatch[0], `<div class="dms-layout">\n\n      <div class="dms-services">${elemMatch[2]}</div>\n\n      <div class="dms-intro">${elemMatch[1]}</div>\n\n    </div>`);
  }
  fs.writeFileSync(elementorHtmlPath, elemHtml, 'utf8');
  console.log('Updated 07-expertise-sectors.html');
}

const elementorJsonPath = path.join(__dirname, 'elementor-templates', '07-expertise-sectors.json');
if (fs.existsSync(elementorJsonPath)) {
  let elemJson = fs.readFileSync(elementorJsonPath, 'utf8');
  elemJson = elemJson.replace(
    'grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.25fr);',
    'grid-template-columns: minmax(0, 1.25fr) minmax(0, 0.9fr);'
  );
  elemJson = elemJson.replace(
    'grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.2fr);',
    'grid-template-columns: minmax(0, 1.2fr) minmax(0, 0.9fr);'
  );
  fs.writeFileSync(elementorJsonPath, elemJson, 'utf8');
  console.log('Updated 07-expertise-sectors.json');
}
