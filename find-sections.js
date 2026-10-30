const fs = require('fs');

const dmsNewIndex = fs.readFileSync('g:/DMS WEB NEW/index.html', 'utf8');
const lines = dmsNewIndex.split('\n');
lines.forEach((line, i) => {
  if (line.includes('<section') || line.includes('<main') || line.includes('</main>') || line.includes('<footer')) {
    console.log(`Line ${i + 1}: ${line.trim().slice(0, 100)}`);
  }
});
