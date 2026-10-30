const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'index.html');
let content = fs.readFileSync(filePath, 'utf8');

// 1. Reset grid columns back to original: Intro on left (minmax(0, 0.9fr)), Sectors list on right (minmax(0, 1.25fr))
content = content.replace(
  'grid-template-columns: minmax(0, 1.25fr) minmax(0, 0.9fr);',
  'grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.25fr);'
);

content = content.replace(
  'grid-template-columns: minmax(0, 1.2fr) minmax(0, 0.9fr);',
  'grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.25fr);'
);

// 2. Define the new 5 sectors list for the right-hand column:
const newSectorsListHtml = `      <div class="dms-services" aria-label="Sectors we support">
        <article class="dms-service-row" style="--order: 0">
          <span class="dms-service-icon">
            <svg class="dms-icon" aria-hidden="true">
              <use href="#icon-oil"></use>
            </svg>
          </span>

          <div class="dms-service-copy">
            <h3>Petroleum Companies</h3>
            <p>
              Professional support for industry-specific documentation needs.
            </p>
          </div>

          <span class="dms-badge">Supported sector</span>
        </article>

        <article class="dms-service-row" style="--order: 1">
          <span class="dms-service-icon">
            <svg class="dms-icon" aria-hidden="true">
              <use href="#icon-building"></use>
            </svg>
          </span>

          <div class="dms-service-copy">
            <h3>Corporate</h3>
            <p>
              Government relations and documentation support for businesses.
            </p>
          </div>

          <span class="dms-badge">Supported sector</span>
        </article>

        <article class="dms-service-row" style="--order: 2">
          <span class="dms-service-icon">
            <svg class="dms-icon" aria-hidden="true">
              <use href="#icon-school"></use>
            </svg>
          </span>

          <div class="dms-service-copy">
            <h3>Schools</h3>
            <p>
              Administrative documentation support for educational institutions.
            </p>
          </div>

          <span class="dms-badge">Supported sector</span>
        </article>

        <article class="dms-service-row" style="--order: 3">
          <span class="dms-service-icon">
            <svg class="dms-icon" aria-hidden="true">
              <use href="#icon-investment"></use>
            </svg>
          </span>

          <div class="dms-service-copy">
            <h3>Investment Banks</h3>
            <p>
              Professional assistance with business documentation processes.
            </p>
          </div>

          <span class="dms-badge">Supported sector</span>
        </article>

        <article class="dms-service-row dms-service-featured" style="--order: 4">
          <span class="dms-service-icon">
            <svg class="dms-icon" aria-hidden="true">
              <use href="#icon-government"></use>
            </svg>
          </span>

          <div class="dms-service-copy">
            <h3>Commercial Banks</h3>
            <p>
              Coordinated support for government-related documentation needs.
            </p>
          </div>

          <span class="dms-badge dms-badge-dark">
            Supported sector
          </span>
        </article>
      </div>`;

// 3. Extract the dms-intro content
const currentLayoutRegex = /<div class="dms-layout">\s*(?:<div class="dms-services">[\s\S]*?<\/div>\s*<div class="dms-intro">([\s\S]*?)<\/div>|<div class="dms-intro">([\s\S]*?)<\/div>\s*<div class="dms-services">[\s\S]*?<\/div>)\s*<\/div>/;

const match = content.match(currentLayoutRegex);
if (match) {
  const introHtml = match[1] || match[2];
  
  const updatedLayoutHtml = `<div class="dms-layout">

      <div class="dms-intro">${introHtml}</div>

${newSectorsListHtml}

    </div>`;

  content = content.replace(match[0], updatedLayoutHtml);
  console.log('Successfully updated dms-layout with 5 sectors in right column!');
} else {
  console.log('Regex match failed for currentLayoutRegex.');
}

fs.writeFileSync(filePath, content, 'utf8');
console.log('Updated index.html successfully!');

// Also update Elementor template
const elemPath = path.join(__dirname, 'elementor-templates', '07-expertise-sectors.html');
if (fs.existsSync(elemPath)) {
  let elemHtml = fs.readFileSync(elemPath, 'utf8');
  elemHtml = elemHtml.replace(
    'grid-template-columns: minmax(0, 1.25fr) minmax(0, 0.9fr);',
    'grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.25fr);'
  );
  const elemMatch = elemHtml.match(currentLayoutRegex);
  if (elemMatch) {
    const introHtml = elemMatch[1] || elemMatch[2];
    elemHtml = elemHtml.replace(elemMatch[0], `<div class="dms-layout">\n\n      <div class="dms-intro">${introHtml}</div>\n\n${newSectorsListHtml}\n\n    </div>`);
    fs.writeFileSync(elemPath, elemHtml, 'utf8');
    console.log('Updated 07-expertise-sectors.html');
  }
}

const elemJsonPath = path.join(__dirname, 'elementor-templates', '07-expertise-sectors.json');
if (fs.existsSync(elemJsonPath)) {
  let elemJson = fs.readFileSync(elemJsonPath, 'utf8');
  elemJson = elemJson.replace(
    'grid-template-columns: minmax(0, 1.25fr) minmax(0, 0.9fr);',
    'grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.25fr);'
  );
  fs.writeFileSync(elemJsonPath, elemJson, 'utf8');
  console.log('Updated 07-expertise-sectors.json');
}
