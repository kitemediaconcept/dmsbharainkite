const fs = require('fs');

if (fs.existsSync('g:/DMS WEB NEW/index.html')) {
  const content = fs.readFileSync('g:/DMS WEB NEW/index.html', 'utf8');
  console.log('File size:', content.length);
  const regex = /<section[^>]*id=["']([^"']+)["'][^>]*>/g;
  let match;
  while ((match = regex.exec(content)) !== null) {
    console.log('Section id:', match[1]);
  }
}
