const fs = require('fs');
const path = require('path');

const userSectionHtml = `  <!-- DMS SERVICES & PARTNER LOGOS SECTION -->
  <section class="dms-services-section" id="services" aria-label="DMS services">
    <div class="dms-services-container">

      <!-- Client and Partner Government Logos -->
      <div class="dms-logo-row" aria-label="Client and partner logos">
        <div class="dms-logo-item">
          <img
            src="logos/logo-1.png"
            alt="Bahrain Chamber of Commerce and Industry"
            loading="lazy"
          >
        </div>

        <div class="dms-logo-item">
          <img
            src="logos/logo-2.png"
            alt="Kingdom of Bahrain Ministry of Industry and Commerce"
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
            alt="Kingdom of Bahrain Labour Market Regulatory Authority"
            loading="lazy"
          >
        </div>

        <div class="dms-logo-item">
          <img
            src="logos/logo-5.png"
            alt="Kingdom of Bahrain Ministry of Interior Nationality, Passports & Residence Affairs"
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
      </div>

      <!-- 10-Item Service Grid -->
      <nav class="dms-service-grid" aria-label="Explore our services">

        <a class="dms-service-item" href="services.html#government">
          <svg
            class="dms-service-icon"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M3 9l9-6 9 6H3z"/>
            <path d="M4 21h16M5 18h14"/>
            <path d="M7 10v7M12 10v7M17 10v7"/>
          </svg>
          <span>Government services</span>
        </a>

        <a class="dms-service-item" href="services.html#business-setup">
          <svg
            class="dms-service-icon"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <rect x="3" y="7" width="18" height="14" rx="2"/>
            <path d="M8 7V5a2 2 0 012-2h4a2 2 0 012 2v2"/>
            <path d="M3 12a24 24 0 0018 0M10 13h4"/>
          </svg>
          <span>Business setup</span>
        </a>

        <a class="dms-service-item" href="services.html#attestation">
          <svg
            class="dms-service-icon"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/>
            <path d="M14 2v6h6"/>
            <path d="M8 15l3 3 5-6"/>
          </svg>
          <span>Document attestation</span>
        </a>

        <a class="dms-service-item" href="services.html#saudi-visa">
          <svg
            class="dms-service-icon"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <rect x="5" y="2" width="14" height="20" rx="2"/>
            <circle cx="12" cy="10" r="4"/>
            <path d="M8 10h8"/>
            <path d="M12 6a8 8 0 010 8 8 8 0 010-8"/>
            <path d="M9 18h6"/>
          </svg>
          <span>Saudi visa</span>
        </a>

        <a class="dms-service-item" href="services.html#global-visa">
          <svg
            class="dms-service-icon"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <circle cx="12" cy="12" r="9"/>
            <path d="M3 12h18"/>
            <path d="M12 3a18 18 0 010 18 18 18 0 010-18"/>
          </svg>
          <span>Global visa assistance</span>
        </a>

        <a class="dms-service-item" href="services.html#self-sponsorship">
          <svg
            class="dms-service-icon"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M3 11l9-8 9 8"/>
            <path d="M5 10v10h14V10"/>
            <path d="M9 20v-7h6v7"/>
          </svg>
          <span>Self-sponsorship visa</span>
        </a>

        <a class="dms-service-item" href="services.html#residency">
          <svg
            class="dms-service-icon"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <rect x="3" y="5" width="18" height="14" rx="2"/>
            <circle cx="8" cy="10" r="2"/>
            <path d="M5 16a3 3 0 016 0"/>
            <path d="M14 10h4M14 14h4"/>
          </svg>
          <span>Residency solutions</span>
        </a>

        <a class="dms-service-item" href="services.html#work-permits">
          <svg
            class="dms-service-icon"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <rect x="5" y="4" width="14" height="18" rx="2"/>
            <rect x="9" y="2" width="6" height="4" rx="1"/>
            <path d="M8 11h8M8 15h5M8 18h7"/>
          </svg>
          <span>Work permits</span>
        </a>

        <a
          class="dms-service-item"
          href="services.html#commercial-registration"
        >
          <svg
            class="dms-service-icon"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M4 21V3h11v18"/>
            <path d="M15 9h5v12M2 21h20"/>
            <path d="M8 7h3M8 11h3M8 15h3"/>
            <path d="M8 21v-3h3v3"/>
          </svg>
          <span>Commercial registration</span>
        </a>

        <a class="dms-service-item" href="services.html#renewals">
          <svg
            class="dms-service-icon"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M20 7v5h-5"/>
            <path d="M4 17v-5h5"/>
            <path d="M6 7a7 7 0 0112-1l2 3"/>
            <path d="M4 15l2 3a7 7 0 0012-1"/>
          </svg>
          <span>Visa renewals</span>
        </a>

      </nav>
    </div>
  </section>`;

const userSectionCss = `
    /* ==========================================================================
       DMS SERVICES & LOGO ROW (Requested Component)
       ========================================================================== */
    .dms-services-section,
    .dms-services-section * {
      box-sizing: border-box;
    }

    .dms-services-section {
      padding: 48px 24px 72px;
      background: #ffffff;
      color: #171717;
      font-family:
        "SF Pro Display",
        -apple-system,
        BlinkMacSystemFont,
        "Helvetica Neue",
        Arial,
        sans-serif;
    }

    .dms-services-container {
      max-width: 1320px;
      margin: 0 auto;
    }

    /* LOGO ROW */
    .dms-logo-row {
      display: grid;
      grid-template-columns: repeat(8, minmax(0, 1fr));
      align-items: center;
      gap: 34px;
      padding: 0 48px;
      margin-bottom: 84px;
    }

    .dms-logo-item {
      height: 52px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .dms-logo-item img {
      display: block;
      width: auto;
      max-width: 115px;
      max-height: 42px;
      object-fit: contain;
      filter: grayscale(100%);
      opacity: 0.75;
      transition: opacity 200ms ease, filter 200ms ease;
    }

    .dms-logo-item:hover img {
      filter: grayscale(0%);
      opacity: 1;
    }

    /* SERVICE GRID */
    .dms-service-grid {
      display: grid;
      grid-template-columns: repeat(5, minmax(0, 1fr));
      border: 1px solid #e1ebe4;
      border-radius: 14px;
      overflow: hidden;
    }

    .dms-service-item {
      position: relative;
      isolation: isolate;
      min-width: 0;
      min-height: 68px;
      padding: 20px 24px;
      display: flex;
      align-items: center;
      gap: 14px;
      background: linear-gradient(
        135deg,
        #ffffff 35%,
        #f0f8f3 100%
      );
      color: #171717;
      text-decoration: none;
      font-size: 16px;
      font-weight: 400;
      line-height: 1.35;
      border-right: 1px solid #e1ebe4;
      border-bottom: 1px solid #e1ebe4;
      transition: all 220ms ease;
    }

    /* Smooth green gradient on hover */
    .dms-service-item::before {
      content: "";
      position: absolute;
      inset: 0;
      z-index: -1;
      pointer-events: none;
      background: linear-gradient(
        135deg,
        #f5fbf7 0%,
        #e2f1e8 100%
      );
      opacity: 0;
      transition: opacity 220ms ease;
    }

    .dms-service-item:hover::before,
    .dms-service-item:focus-visible::before {
      opacity: 1;
    }

    .dms-service-item:nth-child(5n) {
      border-right: none;
    }

    .dms-service-item:nth-last-child(-n + 5) {
      border-bottom: none;
    }

    .dms-service-item:focus-visible {
      outline: 2px solid #075632;
      outline-offset: -3px;
    }

    .dms-service-icon {
      width: 18px;
      height: 18px;
      flex: 0 0 18px;
      fill: none;
      stroke: #397455;
      stroke-width: 1.7;
      stroke-linecap: round;
      stroke-linejoin: round;
      transition: stroke 200ms ease;
    }

    .dms-service-item:hover .dms-service-icon {
      stroke: #075632;
    }

    /* TABLET */
    @media (max-width: 1050px) {
      .dms-logo-row {
        gap: 24px;
        padding: 0;
      }
      .dms-logo-item img {
        max-width: 90px;
        max-height: 36px;
      }
      .dms-service-item {
        padding: 18px 16px;
        gap: 10px;
        font-size: 14px;
      }
    }

    @media (max-width: 800px) {
      .dms-logo-row {
        grid-template-columns: repeat(4, minmax(0, 1fr));
        gap: 24px;
        margin-bottom: 48px;
      }
      .dms-service-grid {
        grid-template-columns: repeat(2, minmax(0, 1fr));
      }
      .dms-service-item:nth-child(n) {
        border-right: 1px solid #e1ebe4;
        border-bottom: 1px solid #e1ebe4;
      }
      .dms-service-item:nth-child(2n) {
        border-right: none;
      }
      .dms-service-item:nth-last-child(-n + 2) {
        border-bottom: none;
      }
    }

    /* MOBILE */
    @media (max-width: 480px) {
      .dms-services-section {
        padding: 32px 18px 48px;
      }
      .dms-logo-row {
        gap: 16px;
        margin-bottom: 34px;
      }
      .dms-logo-item {
        height: 40px;
      }
      .dms-logo-item img {
        max-width: 66px;
        max-height: 30px;
      }
      .dms-service-item {
        min-height: 76px;
        padding: 16px 12px;
        gap: 9px;
        font-size: 13px;
      }
      .dms-service-icon {
        width: 16px;
        height: 16px;
        flex-basis: 16px;
      }
    }

    @media (prefers-reduced-motion: reduce) {
      .dms-service-item::before,
      .dms-service-icon,
      .dms-logo-item img {
        transition: none;
      }
    }
`;

// Now let's update index.html
let indexContent = fs.readFileSync('g:/DMS WEB/index.html', 'utf8');

// Insert CSS before </style>
if (!indexContent.includes('.dms-services-section')) {
  indexContent = indexContent.replace('</style>', userSectionCss + '\n  </style>');
}

// Replace the previous services / social proof or insert right after #hero-banner
const bannerEndTag = '</section>\n\n    <!-- SUBSEQUENT SECTIONS AFTER HERO SECTION -->';
const bannerEndTagAlt = '</section>\n    <!-- SUBSEQUENT SECTIONS AFTER HERO SECTION -->';

if (indexContent.includes('id="hero-banner"')) {
  const bannerEndIdx = indexContent.indexOf('</section>', indexContent.indexOf('id="hero-banner"')) + 10;
  // Let's remove any previous social-proof-strip or duplicate services if desired, or place this right after banner
  const beforeBanner = indexContent.slice(0, bannerEndIdx);
  let afterBanner = indexContent.slice(bannerEndIdx);

  // If there's an existing #accreditations or old #services, let's replace or prepend
  // Let's remove the previous .social-proof-strip if present to keep it sleek and clean
  afterBanner = afterBanner.replace(/<section class="social-proof-strip"[\s\S]*?<\/section>/, '');
  afterBanner = afterBanner.replace(/<section class="services-section"[\s\S]*?<\/section>/, '');

  indexContent = beforeBanner + '\n\n' + userSectionHtml + '\n\n' + afterBanner;
  fs.writeFileSync('g:/DMS WEB/index.html', indexContent);
  console.log('Successfully updated index.html with new Services & Logos section');
}

// Generate Elementor Option B Template for this exact section
function createSectionJson(title, html) {
  const sectionId = 'sec_' + Math.random().toString(36).substring(2, 9);
  const columnId = 'col_' + Math.random().toString(36).substring(2, 9);
  const widgetId = 'wid_' + Math.random().toString(36).substring(2, 9);

  return JSON.stringify({
    version: "0.4",
    title: title,
    type: "section",
    content: [
      {
        id: sectionId,
        elType: "section",
        isInner: false,
        settings: {
          layout: "full_width",
          gap: "no",
          structure: "10"
        },
        elements: [
          {
            id: columnId,
            elType: "column",
            isInner: false,
            settings: {
              _column_size: 100
            },
            elements: [
              {
                id: widgetId,
                elType: "widget",
                widgetType: "html",
                settings: {
                  html: '<style>' + userSectionCss + '</style>\n' + userSectionHtml
                }
              }
            ]
          }
        ]
      }
    ]
  }, null, 2);
}

const elementorDir = 'g:/DMS WEB/elementor-templates';
const standaloneHtml = '<style>' + userSectionCss + '</style>\n' + userSectionHtml;
fs.writeFileSync(path.join(elementorDir, '04-services-grid-logos.html'), standaloneHtml);
fs.writeFileSync(path.join(elementorDir, '04-services-grid-logos.json'), createSectionJson('DMS - Services Grid & Partner Logos', standaloneHtml));
console.log('Saved 04-services-grid-logos.html and 04-services-grid-logos.json');
