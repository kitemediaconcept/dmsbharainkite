const fs = require('fs');

let indexContent = fs.readFileSync('g:/DMS WEB/index.html', 'utf8');

// Target the end of the modern footer
const footerTag = '</footer>';
const footerIndex = indexContent.indexOf(footerTag, indexContent.indexOf('class="dms-footer"'));

if (footerIndex === -1) {
  console.error('Could not find modern footer end');
  process.exit(1);
}

const afterFooterPos = footerIndex + footerTag.length;

// Find where the scripts or </main> are
// We want to delete everything after </footer class="dms-footer"> up to </main>
const mainClosePos = indexContent.indexOf('</main>', afterFooterPos);

if (mainClosePos === -1) {
  console.error('Could not find </main>');
  process.exit(1);
}

const before = indexContent.slice(0, afterFooterPos);
const after = indexContent.slice(mainClosePos);

indexContent = before + '\n  ' + after;

fs.writeFileSync('g:/DMS WEB/index.html', indexContent);
console.log('Successfully removed all content after the modern footer!');
