const fs = require('fs');

let content = fs.readFileSync('g:/DMS WEB/index.html', 'utf8');

// Target the navbar container and glass nav styling to make it a floating pill navbar with rounded border radius
const targetOld = `    .dms-nav-outer-container {
      position: sticky;
      top: 0;
      z-index: 1000;
      width: 100%;
    }

    .dms-glass-nav {
      position: relative;
      z-index: 1000;
      width: 100%;
      color: #222;
      font-family: Inter, "Inter Placeholder", sans-serif;
      font-size: 13px;
      font-weight: 500;
      line-height: 19px;
      letter-spacing: -0.35px;
      transition: all 300ms ease;
    }

    /* Separate glass layer lets the dropdown blur its own background. */
    .dms-glass-nav .dg-bar-glass {
      position: absolute;
      inset: 0;
      z-index: -1;
      background: rgba(255, 255, 255, 0.88);
      -webkit-backdrop-filter: blur(22px) saturate(150%);
      backdrop-filter: blur(22px) saturate(150%);
      border-bottom: 1px solid rgba(0, 0, 0, 0.06);
      box-shadow:
        0 2px 7px rgba(29, 48, 34, 0.035),
        0 8px 25px rgba(29, 48, 34, 0.04);
      pointer-events: none;
      transition: all 300ms ease;
    }

    .dms-glass-nav.is-scrolled .dg-bar-glass {
      background: rgba(255, 255, 255, 0.94);
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
    }

    .dms-glass-nav [hidden] {
      display: none !important;
    }

    .dms-glass-nav .dg-inner {
      position: relative;
      max-width: 1368px;
      margin: 0 auto;
      padding: 0 24px;
    }

    .dms-glass-nav .dg-bar {
      display: flex;
      align-items: center;
      gap: 34px;
      min-height: 64px;
    }`;

const targetNew = `    .dms-nav-outer-container {
      position: sticky;
      top: 14px;
      z-index: 1000;
      width: 100%;
      padding: 0 20px;
      pointer-events: none;
    }

    .dms-glass-nav {
      position: relative;
      z-index: 1000;
      max-width: 1240px;
      margin: 0 auto;
      color: #222;
      font-family: Inter, "Inter Placeholder", sans-serif;
      font-size: 13px;
      font-weight: 500;
      line-height: 19px;
      letter-spacing: -0.35px;
      border-radius: 9999px;
      pointer-events: auto;
      transition: all 350ms cubic-bezier(0.16, 1, 0.3, 1);
    }

    /* Floating pill glass layer with full rounded borders */
    .dms-glass-nav .dg-bar-glass {
      position: absolute;
      inset: 0;
      z-index: -1;
      border-radius: 9999px;
      background: rgba(255, 255, 255, 0.84);
      -webkit-backdrop-filter: blur(24px) saturate(160%);
      backdrop-filter: blur(24px) saturate(160%);
      border: 1px solid rgba(0, 0, 0, 0.08);
      box-shadow:
        0 4px 16px -4px rgba(29, 48, 34, 0.06),
        0 14px 34px -8px rgba(29, 48, 34, 0.08);
      pointer-events: none;
      transition: all 350ms cubic-bezier(0.16, 1, 0.3, 1);
    }

    .dms-glass-nav.is-scrolled .dg-bar-glass {
      background: rgba(255, 255, 255, 0.94);
      box-shadow: 
        0 8px 24px -4px rgba(0, 0, 0, 0.1),
        0 20px 40px -10px rgba(0, 0, 0, 0.12);
      border-color: rgba(0, 0, 0, 0.1);
    }

    .dms-glass-nav [hidden] {
      display: none !important;
    }

    .dms-glass-nav .dg-inner {
      position: relative;
      width: 100%;
      padding: 0 18px 0 24px;
    }

    .dms-glass-nav .dg-bar {
      display: flex;
      align-items: center;
      gap: 30px;
      min-height: 60px;
    }`;

if (content.includes(targetOld)) {
  content = content.replace(targetOld, targetNew);
  console.log('Successfully replaced old navbar styling with floating pill rounded navbar!');
} else {
  console.log('Could not find exact block, checking partial match...');
  // regex fallback
  content = content.replace(/\.dms-nav-outer-container\s*\{[\s\S]*?min-height:\s*64px;\s*\}/, targetNew);
}

// Also adjust the mega menu dropdown border radius so it nests cleanly underneath the rounded pill
content = content.replace(
  'border-radius: 0 0 20px 20px;',
  'border-radius: 24px;\n      margin-top: 10px;\n      border-top: 1px solid rgba(255, 255, 255, 0.9);'
);

fs.writeFileSync('g:/DMS WEB/index.html', content);
console.log('Saved index.html with rounded navbar!');
