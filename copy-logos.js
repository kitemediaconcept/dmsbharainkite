const fs = require('fs');
const path = require('path');

const srcDir = 'C:/Users/User/.gemini/antigravity-ide/brain/13b66219-fc69-452d-ac25-94dece50da51/.user_uploaded';
const targetDir = 'g:/DMS WEB/logos';
if (!fs.existsSync(targetDir)) fs.mkdirSync(targetDir, { recursive: true });

const uploaded = [
  { file: 'media_1792577243856.png', name: 'Bahrain Chamber', target: 'logo-1.png' },
  { file: 'media_1792577243884.png', name: 'Ministry of Industry and Commerce', target: 'logo-2.png' },
  { file: 'media_1792577243902.png', name: 'The Embassy of Saudi Arabia', target: 'logo-3.png' },
  { file: 'media_1792577243964.png', name: 'Labour Market Regulatory Authority (LMRA)', target: 'logo-4.png' },
  { file: 'media_1792577243975.png', name: 'NPRA Ministry of Interior', target: 'logo-5.png' }
];

uploaded.forEach((item, idx) => {
  const src = path.join(srcDir, item.file);
  const dest = path.join(targetDir, item.target);
  fs.copyFileSync(src, dest);
  console.log(`Copied ${item.file} to ${item.target} (${item.name})`);
});

// For logos 6, 7, 8, let's copy from 1, 2, 4 to complete the 8-item row cleanly:
fs.copyFileSync(path.join(targetDir, 'logo-1.png'), path.join(targetDir, 'logo-6.png'));
fs.copyFileSync(path.join(targetDir, 'logo-2.png'), path.join(targetDir, 'logo-7.png'));
fs.copyFileSync(path.join(targetDir, 'logo-4.png'), path.join(targetDir, 'logo-8.png'));
console.log('Logos 6, 7, 8 populated.');
