const fs = require('fs');

let content = fs.readFileSync('g:/DMS WEB/index.html', 'utf8');

// Remove the single static Golden Visa section so the stacked cards section is the hero Golden Visa feature!
const startSec = content.indexOf('<!-- BAHRAIN GOLDEN VISA SECTION -->');
const endSec = content.indexOf('</section>', startSec);

if (startSec !== -1 && endSec !== -1) {
  const before = content.slice(0, startSec);
  const after = content.slice(endSec + '</section>'.length);
  content = before + after;
  fs.writeFileSync('g:/DMS WEB/index.html', content);
  console.log('Successfully replaced static Golden Visa with the interactive 3D Stack Cards section!');
} else {
  console.log('Could not find static Golden Visa section');
}
