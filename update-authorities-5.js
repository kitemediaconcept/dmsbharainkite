const fs = require('fs');
const path = require('path');

const authoritiesCss = `
    /* ==========================================================================
       DMS AUTHORITIES & REGULATORY ENTITIES (5 ICONS - User Spec)
       ========================================================================== */
    .dms-authorities {
      padding: 56px 24px 64px;
      background:
        radial-gradient(
          ellipse at 50% 100%,
          rgba(221, 242, 228, 0.32),
          transparent 65%
        ),
        #fff;
    }

    .dms-authorities__container {
      width: 100%;
      max-width: 1320px;
      margin: 0 auto;
    }

    /* Small, centred heading */
    .dms-authorities__header {
      max-width: 560px;
      margin: 0 auto 36px;
      text-align: center;
    }

    .dms-authorities__tag {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 14px;
      padding: 6px 13px;

      border: 1px solid #dcebe1;
      border-radius: 100px;
      background: linear-gradient(135deg, #fff, #edf7f0);

      font-size: 10px;
      font-weight: 600;
      line-height: 16px;
      letter-spacing: 1.4px;
      color: #256344;
    }

    .dms-authorities .dms-authorities__heading {
      margin: 0;
      font-family: Inter, "Inter Placeholder", sans-serif;
      font-size: 16px;
      font-weight: 400;
      line-height: 23px;
      letter-spacing: -0.48px;
      color: #6b6b6b;
      text-align: center;
      text-wrap: balance;
    }

    /* Five large logos */
    .dms-authorities__logos {
      display: grid;
      grid-template-columns: repeat(5, minmax(0, 1fr));
      align-items: center;
      gap: 30px;

      margin: 0;
      padding: 12px 0;
      list-style: none;
    }

    .dms-authorities__logo {
      display: flex;
      align-items: center;
      justify-content: center;

      min-width: 0;
      height: 150px;
      padding: 8px;
    }

    .dms-authorities__logo img {
      display: block;
      width: 100%;
      height: auto;
      max-width: 240px;
      max-height: 125px;
      object-fit: contain;
      transition: transform 200ms ease, opacity 200ms ease;
    }

    .dms-authorities__logo:hover img {
      transform: scale(1.03);
    }

    /* Portrait emblem needs a different size */
    .dms-authorities__logo--embassy img {
      width: auto;
      max-width: 100%;
      height: 130px;
      max-height: 130px;
    }

    /* Tablet */
    @media (max-width: 1000px) {
      .dms-authorities {
        padding: 44px 20px 48px;
      }

      .dms-authorities__logos {
        gap: 16px;
      }

      .dms-authorities__logo {
        height: 125px;
        padding: 4px;
      }

      .dms-authorities__logo img {
        max-height: 105px;
      }

      .dms-authorities__logo--embassy img {
        height: 110px;
        max-height: 110px;
      }
    }

    /* Mobile: three logos, then two centred logos */
    @media (max-width: 640px) {
      .dms-authorities {
        padding: 36px 16px 40px;
      }

      .dms-authorities__header {
        margin-bottom: 24px;
      }

      .desktop-break {
        display: none;
      }

      .dms-authorities__logos {
        grid-template-columns: repeat(6, minmax(0, 1fr));
        gap: 16px 12px;
        padding: 0;
      }

      .dms-authorities__logo {
        grid-column: span 2;
        height: 100px;
        padding: 0;
      }

      .dms-authorities__logo:nth-child(4) {
        grid-column: 2 / span 2;
      }

      .dms-authorities__logo:nth-child(5) {
        grid-column: 4 / span 2;
      }

      .dms-authorities__logo img {
        max-height: 88px;
      }

      .dms-authorities__logo--embassy img {
        height: 96px;
        max-height: 96px;
      }
    }
`;

const authoritiesHtml = `  <!-- DMS AUTHORITIES & REGULATORY ENTITIES (5 ICONS) -->
  <section class="dms-authorities" aria-labelledby="authorities-heading">
    <div class="dms-authorities__container">

      <header class="dms-authorities__header">
        <span class="dms-authorities__tag">AUTHORIZED</span>

        <h2 id="authorities-heading" class="dms-authorities__heading">
          Integrated Across Key Bahrain Government<br class="desktop-break" />
          Entities &amp; Regulatory Authorities
        </h2>
      </header>

      <ul class="dms-authorities__logos" aria-label="Entities and authorities">
        <li class="dms-authorities__logo dms-authorities__logo--wps">
          <img
            src="https://dmsbharain.wasmer.app/wp-content/uploads/2026/10/wps-b.png"
            alt="WPS"
            loading="lazy"
            decoding="async"
          />
        </li>

        <li class="dms-authorities__logo dms-authorities__logo--moic">
          <img
            src="https://dmsbharain.wasmer.app/wp-content/uploads/2026/10/moic-svg-5-512x77-1.png"
            alt="Ministry of Industry and Commerce"
            loading="lazy"
            decoding="async"
          />
        </li>

        <li class="dms-authorities__logo dms-authorities__logo--lmra">
          <img
            src="https://dmsbharain.wasmer.app/wp-content/uploads/2026/10/labour-market-regulatory-authority-secondary-variation-512x75-1.png"
            alt="Labour Market Regulatory Authority"
            loading="lazy"
            decoding="async"
          />
        </li>

        <li class="dms-authorities__logo dms-authorities__logo--embassy">
          <img
            src="https://dmsbharain.wasmer.app/wp-content/uploads/2026/10/EMBASSY_KSA-removebg-preview.png"
            alt="Embassy of Saudi Arabia"
            loading="lazy"
            decoding="async"
          />
        </li>

        <li class="dms-authorities__logo dms-authorities__logo--chamber">
          <img
            src="https://dmsbharain.wasmer.app/wp-content/uploads/2026/10/bahrain-chamber-preview-512x107-1.png"
            alt="Bahrain Chamber"
            loading="lazy"
            decoding="async"
          />
        </li>
      </ul>

    </div>
  </section>`;

let indexHtml = fs.readFileSync(path.join(__dirname, 'index.html'), 'utf8');

// 1. Remove the old .dms-logo-row CSS if present, or add authoritiesCss
// Let's check where the old logo row CSS is
const oldLogoCssRegex = /\/\* LOGO ROW \*\/[\s\S]*?\.dms-logo-item:hover img \{[\s\S]*?\}/;
if (oldLogoCssRegex.test(indexHtml)) {
  indexHtml = indexHtml.replace(oldLogoCssRegex, authoritiesCss);
  console.log('Replaced old LOGO ROW CSS with authoritiesCss');
} else {
  // If not found, insert before /* REFINED GRID */
  indexHtml = indexHtml.replace('/* REFINED GRID */', authoritiesCss + '\n\n    /* REFINED GRID */');
  console.log('Inserted authoritiesCss before REFINED GRID');
}

// 2. Replace the old logo row in the HTML
// Either it's inside dms-services-section or replaced with the dedicated section right above services
const oldLogoRowHtmlRegex = /<!-- Partner Government Logos Row -->[\s\S]*?<\/div>\s*(?=\s*<!-- 10-Item Capability Grid -->)/;
if (oldLogoRowHtmlRegex.test(indexHtml)) {
  indexHtml = indexHtml.replace(
    '<!-- REFINED DMS SERVICES SECTION (User Specification) -->\n  <section class="dms-services-section" id="services" aria-label="DMS services">\n    <!-- Partner Government Logos Row -->',
    authoritiesHtml + '\n\n  <!-- REFINED DMS SERVICES SECTION (User Specification) -->\n  <section class="dms-services-section" id="services" aria-label="DMS services">'
  );
  // remove the old dms-logo-row completely from inside services section
  indexHtml = indexHtml.replace(/    <!-- Partner Government Logos Row -->[\s\S]*?    <\/div>\s*\n\s*/, '');
  console.log('Replaced old HTML logo row with standalone dms-authorities section');
} else {
  console.log('oldLogoRowHtmlRegex not found in expected form, attempting fallback');
}

fs.writeFileSync(path.join(__dirname, 'index.html'), indexHtml, 'utf8');
console.log('Successfully updated index.html with 5 icons authorities section!');

// Also create/update Elementor template
const elementorDir = path.join(__dirname, 'elementor-templates');
if (!fs.existsSync(elementorDir)) fs.mkdirSync(elementorDir, { recursive: true });

const standaloneAuthoritiesHtml = `<style>${authoritiesCss}</style>\n${authoritiesHtml}`;
fs.writeFileSync(path.join(elementorDir, '04-government-authorities.html'), standaloneAuthoritiesHtml, 'utf8');

const createSectionJson = (title, htmlContent) => {
  return JSON.stringify({
    title: title,
    type: "section",
    version: "0.4",
    elements: [
      {
        id: "dms_auth_sec_" + Math.random().toString(36).substring(2, 9),
        elType: "section",
        settings: {
          layout: "full_width",
          gap: "no"
        },
        elements: [
          {
            id: "dms_auth_col_" + Math.random().toString(36).substring(2, 9),
            elType: "column",
            settings: {
              _column_size: 100
            },
            elements: [
              {
                id: "dms_auth_wid_" + Math.random().toString(36).substring(2, 9),
                elType: "widget",
                widgetType: "html",
                settings: {
                  html: htmlContent
                }
              }
            ]
          }
        ]
      }
    ]
  }, null, 2);
};

fs.writeFileSync(path.join(elementorDir, '04-government-authorities.json'), createSectionJson('DMS - Government Entities & Authorities', standaloneAuthoritiesHtml), 'utf8');
console.log('Elementor template 04-government-authorities created.');
