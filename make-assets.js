const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'assets');
if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

const files = [
  { name: 'ministry.svg', icon: 'M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5' },
  { name: 'attestation.svg', icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z' },
  { name: 'saudi-visa.svg', icon: 'M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z' },
  { name: 'residency.svg', icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z' },
  { name: 'global-visa.svg', icon: 'M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z' }
];

for (const f of files) {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1280" height="640" viewBox="0 0 1280 640">
  <defs>
    <linearGradient id="bg_${f.name}" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0e3a27"/>
      <stop offset="60%" stop-color="#072418"/>
      <stop offset="100%" stop-color="#03120c"/>
    </linearGradient>
    <radialGradient id="radial_${f.name}" cx="80%" cy="30%" r="65%">
      <stop offset="0%" stop-color="#0d9b49" stop-opacity="0.38"/>
      <stop offset="100%" stop-color="#0d9b49" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="ambient_${f.name}" cx="20%" cy="80%" r="50%">
      <stop offset="0%" stop-color="#145338" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#145338" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="1280" height="640" fill="url(#bg_${f.name})"/>
  <rect width="1280" height="640" fill="url(#radial_${f.name})"/>
  <rect width="1280" height="640" fill="url(#ambient_${f.name})"/>
  
  <!-- Subtle geometric background grid & radar circles -->
  <g opacity="0.16" stroke="#0d9b49" fill="none">
    <circle cx="980" cy="320" r="140" stroke-width="1.5"/>
    <circle cx="980" cy="320" r="240" stroke-width="1"/>
    <circle cx="980" cy="320" r="360" stroke-dasharray="8,8" stroke-width="1"/>
  </g>

  <!-- Watermark Icon Graphic on Right -->
  <g transform="translate(980, 320) scale(4.5)" opacity="0.22">
    <path d="${f.icon}" stroke="#46ad82" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  </g>
</svg>`;

  fs.writeFileSync(path.join(dir, f.name), svg);
}

console.log('Saved clean SVG backdrop assets.');
