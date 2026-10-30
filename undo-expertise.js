const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'index.html');
let content = fs.readFileSync(filePath, 'utf8');

// The original section HTML:
const originalSectionHtml = `  <section class="dms-expertise-section" id="expertise" aria-labelledby="dms-expertise-title">
    <div class="dms-layout">

      <div class="dms-intro">
        <span class="dms-eyebrow">Our expertise</span>

        <h2 id="dms-expertise-title">
          Excellence Driven<br>
          by Expertise.
        </h2>

        <p class="dms-description">
          Our goal is to be the leading provider of government
          relations and global visa services, leveraging decades
          of expertise to deliver seamless, professional solutions.
        </p>

        <div class="dms-sector-card">
          <span class="dms-card-label">THE SECTORS WE SUPPORT</span>

          <div class="dms-sector-content" aria-live="polite" aria-atomic="true">
            <span class="dms-sector-icon">
              <svg class="dms-icon" aria-hidden="true">
                <use href="#icon-oil"></use>
              </svg>
            </span>

            <h3 class="dms-sector-title">Petroleum Companies</h3>
            <p class="dms-sector-description">
              Professional support for industry-specific
              documentation needs.
            </p>
          </div>

          <div class="dms-card-bottom">
            <span>DMS Bahrain</span>
            <span class="dms-sector-count">01 / 05</span>
          </div>
        </div>

        <div class="dms-card-controls" aria-label="Browse supported sectors">
          <button type="button" class="dms-prev" aria-label="Previous sector">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M19 12H5m6-6-6 6 6 6"/>
            </svg>
          </button>

          <button type="button" class="dms-next" aria-label="Next sector">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M5 12h14m-6-6 6 6-6 6"/>
            </svg>
          </button>
        </div>
      </div>

      <div class="dms-services">
        <article class="dms-service-row" style="--order: 0">
          <span class="dms-service-icon">
            <svg class="dms-icon" aria-hidden="true">
              <use href="#icon-government"></use>
            </svg>
          </span>

          <div class="dms-service-copy">
            <h3>Government relations</h3>
            <p>
              Professional assistance with government processes
              and requirements.
            </p>
          </div>

          <span class="dms-badge">DMS support</span>
        </article>

        <article class="dms-service-row" style="--order: 1">
          <span class="dms-service-icon">
            <svg class="dms-icon" aria-hidden="true">
              <use href="#icon-passport"></use>
            </svg>
          </span>

          <div class="dms-service-copy">
            <h3>Global visa services</h3>
            <p>
              Personalised guidance for your next international
              journey.
            </p>
          </div>

          <span class="dms-badge">DMS support</span>
        </article>

        <article class="dms-service-row" style="--order: 2">
          <span class="dms-service-icon">
            <svg class="dms-icon" aria-hidden="true">
              <use href="#icon-document"></use>
            </svg>
          </span>

          <div class="dms-service-copy">
            <h3>Documentation assistance</h3>
            <p>
              Support with preparation, applications
              and follow-ups.
            </p>
          </div>

          <span class="dms-badge">DMS support</span>
        </article>

        <article class="dms-service-row dms-service-featured" style="--order: 3">
          <span class="dms-service-icon">
            <svg class="dms-icon" aria-hidden="true">
              <use href="#icon-growth"></use>
            </svg>
          </span>

          <div class="dms-service-copy">
            <h3>More focus on what matters</h3>
            <p>
              Your business, your goals, your next chapter.
            </p>
          </div>

          <span class="dms-badge dms-badge-dark">
            Your next step
          </span>
        </article>
      </div>

    </div>
  </section>`;

// Replace current section
const sectionRegex = /<section class="dms-expertise-section" id="expertise" aria-labelledby="dms-expertise-title">[\s\S]*?<\/section>/;

if (sectionRegex.test(content)) {
  content = content.replace(sectionRegex, originalSectionHtml.trim());
  console.log('Restored original expertise section in index.html!');
} else {
  console.log('Could not find expertise section regex.');
}

fs.writeFileSync(filePath, content, 'utf8');

// Also restore Elementor template
const elemPath = path.join(__dirname, 'elementor-templates', '07-expertise-sectors.html');
if (fs.existsSync(elemPath)) {
  let elemHtml = fs.readFileSync(elemPath, 'utf8');
  if (sectionRegex.test(elemHtml)) {
    elemHtml = elemHtml.replace(sectionRegex, originalSectionHtml.trim());
    fs.writeFileSync(elemPath, elemHtml, 'utf8');
    console.log('Restored 07-expertise-sectors.html');
  }
}

const elemJsonPath = path.join(__dirname, 'elementor-templates', '07-expertise-sectors.json');
if (fs.existsSync(elemJsonPath)) {
  let elemJson = fs.readFileSync(elemJsonPath, 'utf8');
  if (sectionRegex.test(elemJson)) {
    elemJson = elemJson.replace(sectionRegex, originalSectionHtml.trim());
    fs.writeFileSync(elemJsonPath, elemJson, 'utf8');
    console.log('Restored 07-expertise-sectors.json');
  }
}
