const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'assets');
if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

const files = [
  { name: 'ministry.jpg', title: 'Bahrain Ministry Services', label: 'MINISTRY SERVICES' },
  { name: 'attestation.jpg', title: 'Document Attestation', label: 'ATTESTATION' },
  { name: 'saudi-visa.jpg', title: 'Saudi Visa Assistance', label: 'SAUDI VISA' },
  { name: 'residency.jpg', title: 'Self-Sponsorship Residency', label: 'SELF SPONSORSHIP' },
  { name: 'global-visa.jpg', title: 'Global Visa Assistance', label: 'GLOBAL VISA' }
];

for (const f of files) {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="600" viewBox="0 0 1200 600">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0b3826"/>
      <stop offset="60%" stop-color="#07281c"/>
      <stop offset="100%" stop-color="#051c14"/>
    </linearGradient>
    <radialGradient id="glow" cx="80%" cy="30%" r="50%">
      <stop offset="0%" stop-color="#0d9b49" stop-opacity="0.35"/>
      <stop offset="100%" stop-color="#0d9b49" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="1200" height="600" fill="url(#bg)"/>
  <rect width="1200" height="600" fill="url(#glow)"/>
  <g transform="translate(80, 240)">
    <text font-family="'IBM Plex Mono', monospace" font-size="14" fill="#a3cfbb" letter-spacing="3" text-transform="uppercase">${f.label}</text>
    <text y="50" font-family="'Inter Variable', Inter, sans-serif" font-size="44" font-weight="400" fill="#ffffff" letter-spacing="-1">${f.title}</text>
    <text y="90" font-family="'Inter', sans-serif" font-size="16" fill="#8cb3a0">Diplomat Management Services Co. W.L.L. — Bahrain</text>
  </g>
</svg>`;
  fs.writeFileSync(path.join(dir, f.name), svg);
}

console.log('Created banner images successfully.');
