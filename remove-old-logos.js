const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'index.html');
let content = fs.readFileSync(filePath, 'utf8');

const targetStr = `  <!-- REFINED DMS SERVICES SECTION (User Specification) -->
  <section class="dms-services-section" id="services" aria-label="DMS services">
    <div class="dms-logo-row" aria-label="Client and partner logos">
      <div class="dms-logo-item">
        <img
          src="logos/logo-1.png"
          alt="Bahrain Chamber"
          loading="lazy"
        >
      </div>

      <div class="dms-logo-item">
        <img
          src="logos/logo-2.png"
          alt="Ministry of Industry and Commerce"
          loading="lazy"
        >
      </div>

      <div class="dms-logo-item">
        <img
          src="logos/logo-3.png"
          alt="The Embassy of the Kingdom of Saudi Arabia"
          loading="lazy"
        >
      </div>

      <div class="dms-logo-item">
        <img
          src="logos/logo-4.png"
          alt="Labour Market Regulatory Authority"
          loading="lazy"
        >
      </div>

      <div class="dms-logo-item">
        <img
          src="logos/logo-5.png"
          alt="Nationality, Passports & Residence Affairs"
          loading="lazy"
        >
      </div>

      <div class="dms-logo-item">
        <img
          src="logos/logo-6.png"
          alt="Bahrain Chamber"
          loading="lazy"
        >
      </div>

      <div class="dms-logo-item">
        <img
          src="logos/logo-7.png"
          alt="Ministry of Industry and Commerce"
          loading="lazy"
        >
      </div>

      <div class="dms-logo-item">
        <img
          src="logos/logo-8.png"
          alt="Labour Market Regulatory Authority"
          loading="lazy"
        >
      </div>
    </div>`;

const replacementStr = `  <!-- REFINED DMS SERVICES SECTION (User Specification) -->
  <section class="dms-services-section" id="services" aria-label="DMS services">`;

if (content.includes(targetStr)) {
  content = content.replace(targetStr, replacementStr);
  fs.writeFileSync(filePath, content, 'utf8');
  console.log('Successfully removed old logo row from index.html!');
} else {
  console.log('Exact targetStr not found, searching with regex...');
  const reg = /<div class="dms-logo-row" aria-label="Client and partner logos">[\s\S]*?<\/div>\s*(?=\s*<!-- 10-Item Capability Grid -->)/;
  if (reg.test(content)) {
    content = content.replace(reg, '');
    fs.writeFileSync(filePath, content, 'utf8');
    console.log('Successfully removed old logo row using regex!');
  } else {
    console.log('Failed to find target logo row.');
  }
}
