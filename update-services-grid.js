const fs = require('fs');
const path = require('path');

const newGridCss = `
    /* ==========================================================================
       DMS REFINED SERVICES GRID (Exact User Spec)
       ========================================================================== */
    .dms-services-section,
    .dms-services-section * {
      box-sizing: border-box;
    }

    .dms-services-section {
      width: 100%;
      max-width: 1368px;
      margin: 0 auto;
      padding: 32px 24px 64px;
    }

    /* LOGO ROW */
    .dms-logo-row {
      display: grid;
      grid-template-columns: repeat(8, minmax(0, 1fr));
      align-items: center;
      gap: 34px;
      padding: 0 48px;
      margin-bottom: 56px;
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

    /* REFINED GRID */
    .dms-services-grid {
      display: grid;
      grid-template-columns: repeat(5, minmax(0, 1fr));
      gap: 1px;
      overflow: hidden;
      border: 1px solid #eeeae6;
      border-radius: 14px;
      background: #eeeae6;
    }

    .dms-services-section .dms-service-item {
      position: relative;
      display: flex;
      align-items: center;
      gap: 14px;
      min-width: 0;
      min-height: 67px;
      padding: 20px 24px;

      font-family: Inter, "Inter Placeholder", -apple-system, sans-serif;
      font-size: 16px;
      font-weight: 500;
      line-height: 19px;
      letter-spacing: -0.48px;
      color: #111;

      background: #fff;
      text-decoration: none;
      isolation: isolate;
      transform-origin: center;
      touch-action: manipulation;
      -webkit-tap-highlight-color: transparent;
      transition: background 180ms ease;
    }

    .dms-service-item::before {
      content: "";
      position: absolute;
      inset: 0;
      z-index: -1;
      pointer-events: none;
      background: linear-gradient(120deg, #fff 5%, #edf7f0 100%);
      opacity: 0;
      transition: opacity 180ms ease;
    }

    .dms-service-item svg {
      display: block;
      flex: 0 0 18px;
      width: 18px;
      height: 18px;
      fill: none;
      stroke: #7b7b7b;
      stroke-width: 1.7;
      stroke-linecap: round;
      stroke-linejoin: round;
      transition: stroke 180ms ease;
    }

    .dms-service-item span {
      min-width: 0;
      overflow-wrap: anywhere;
    }

    .dms-service-item:focus-visible {
      outline: 2px solid #397455;
      outline-offset: -3px;
    }

    .dms-service-item:focus-visible::before,
    .dms-service-item:active::before,
    .dms-service-item.is-pressed::before {
      opacity: 1;
    }

    .dms-service-item:focus-visible svg,
    .dms-service-item:active svg,
    .dms-service-item.is-pressed svg {
      stroke: #397455;
    }

    @media (hover: hover) {
      .dms-service-item:hover::before {
        opacity: 1;
      }

      .dms-service-item:hover svg {
        stroke: #397455;
      }
    }

    @media (max-width: 1100px) {
      .dms-logo-row {
        gap: 24px;
        padding: 0;
      }
      .dms-services-grid {
        grid-template-columns: repeat(2, minmax(0, 1fr));
      }
      .dms-services-section .dms-service-item {
        padding: 20px;
      }
    }

    @media (max-width: 800px) {
      .dms-logo-row {
        grid-template-columns: repeat(4, minmax(0, 1fr));
        gap: 20px;
        margin-bottom: 36px;
      }
    }

    @media (max-width: 640px) {
      .dms-services-section {
        padding: 24px 16px 40px;
      }

      .dms-services-grid {
        grid-template-columns: 1fr;
        border-radius: 12px;
      }

      .dms-services-section .dms-service-item {
        min-height: 64px;
        padding: 20px;
      }
    }

    @media (prefers-reduced-motion: reduce) {
      .dms-service-item::before,
      .dms-service-item svg,
      .dms-logo-item img {
        transition: none;
      }
    }
`;

const newGridHtml = `  <!-- REFINED DMS SERVICES SECTION (User Specification) -->
  <section class="dms-services-section" id="services" aria-label="DMS services">
    <!-- Partner Government Logos Row -->
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
    </div>

    <!-- 10-Item Capability Grid -->
    <nav class="dms-services-grid" aria-label="Explore our services">

      <!-- Replace these links with your actual service page URLs. -->

      <a class="dms-service-item" href="services.html#government">
        <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
          <path d="M3 9l9-5 9 5M4 10h16M5 20h14M3 21h18"/>
          <path d="M6 10v10m4-10v10m4-10v10m4-10v10"/>
        </svg>
        <span>Government services</span>
      </a>

      <a class="dms-service-item" href="services.html#business-setup">
        <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
          <rect x="3" y="7" width="18" height="14" rx="2"/>
          <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>
          <path d="M3 12a24 24 0 0 0 18 0M10 12v3h4v-3"/>
        </svg>
        <span>Business setup</span>
      </a>

      <a class="dms-service-item" href="services.html#attestation">
        <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
          <path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/>
          <path d="M14 3v6h6M8 15l2 2 5-5"/>
        </svg>
        <span>Document attestation</span>
      </a>

      <a class="dms-service-item" href="services.html#saudi-visa">
        <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
          <rect x="5" y="3" width="14" height="18" rx="2"/>
          <circle cx="12" cy="10" r="4"/>
          <path d="M8 10h8M12 6c2 2 2 6 0 8-2-2-2-6 0-8M9 18h6"/>
        </svg>
        <span>Saudi visa</span>
      </a>

      <a class="dms-service-item" href="services.html#global-visa">
        <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
          <circle cx="12" cy="12" r="9"/>
          <path d="M3 12h18M12 3c5 5 5 13 0 18-5-5-5-13 0-18"/>
        </svg>
        <span>Global visa assistance</span>
      </a>

      <a class="dms-service-item" href="services.html#self-sponsorship">
        <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
          <circle cx="10" cy="7" r="4"/>
          <path d="M3 21v-2a7 7 0 0 1 11-5M16 18l2 2 4-5"/>
        </svg>
        <span>Self-sponsorship visa</span>
      </a>

      <a class="dms-service-item" href="services.html#residency">
        <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
          <path d="M3 10l9-7 9 7M5 9v12h14V9"/>
          <path d="M9 21v-8h6v8"/>
        </svg>
        <span>Residency solutions</span>
      </a>

      <a class="dms-service-item" href="services.html#work-permits">
        <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
          <rect x="3" y="5" width="18" height="14" rx="2"/>
          <circle cx="8" cy="10" r="2"/>
          <path d="M5 16a3 3 0 0 1 6 0M14 9h4M14 13h4"/>
        </svg>
        <span>Work permits</span>
      </a>

      <a class="dms-service-item" href="services.html#commercial-registration">
        <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
          <path d="M4 10v11h16V10M3 10l2-7h14l2 7"/>
          <path d="M3 10a3 3 0 0 0 6 0 3 3 0 0 0 6 0 3 3 0 0 0 6 0"/>
          <path d="M9 3v7m6-7v7M9 21v-7h6v7"/>
        </svg>
        <span>Commercial registration</span>
      </a>

      <a class="dms-service-item" href="services.html#renewals">
        <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
          <path d="M20 7v5h-5M4 17v-5h5"/>
          <path d="M6 7a7 7 0 0 1 12-2l2 3M4 16l2 3a7 7 0 0 0 12-2"/>
        </svg>
        <span>Visa renewals</span>
      </a>

    </nav>
  </section>`;

const newGridScript = `
    // ==========================================
    // DMS REFINED SERVICES GRID ANIMATION SCRIPT
    // ==========================================
    (() => {
      const items = Array.from(
        document.querySelectorAll(
          ".dms-services-section .dms-service-item"
        )
      );

      const reducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      );

      const animations = new Map();
      const visibleItems = new Set();
      let observer = null;

      function stopAnimation(item) {
        const animation = animations.get(item);

        if (animation) {
          animation.cancel();
          animations.delete(item);
        }
      }

      function clearPressedStates() {
        items.forEach((item) => {
          item.classList.remove("is-pressed");
        });
      }

      items.forEach((item) => {
        item.addEventListener("focus", () => {
          stopAnimation(item);
        });

        item.addEventListener("pointerdown", (event) => {
          stopAnimation(item);

          if (event.pointerType !== "mouse") {
            clearPressedStates();
            item.classList.add("is-pressed");
          }
        });

        item.addEventListener("pointerleave", () => {
          item.classList.remove("is-pressed");
        });
      });

      window.addEventListener("pointerup", clearPressedStates);
      window.addEventListener("pointercancel", clearPressedStates);
      window.addEventListener("blur", clearPressedStates);
      window.addEventListener("pageshow", clearPressedStates);
      window.addEventListener("scroll", clearPressedStates, {
        passive: true
      });

      function setupAnimation() {
        observer?.disconnect();
        observer = null;

        items.forEach(stopAnimation);
        visibleItems.clear();

        if (
          reducedMotion.matches ||
          !("IntersectionObserver" in window) ||
          !("animate" in Element.prototype)
        ) {
          return;
        }

        // Runs on desktop, tablet and mobile.
        observer = new IntersectionObserver((entries) => {
          let order = 0;

          entries
            .sort((a, b) => {
              return (
                a.boundingClientRect.top - b.boundingClientRect.top ||
                a.boundingClientRect.left - b.boundingClientRect.left
              );
            })
            .forEach((entry) => {
              const item = entry.target;

              // Replay after the item leaves and re-enters the screen.
              if (!entry.isIntersecting) {
                visibleItems.delete(item);
                stopAnimation(item);
                return;
              }

              if (
                entry.intersectionRatio < 0.5 ||
                visibleItems.has(item)
              ) {
                return;
              }

              visibleItems.add(item);

              if (item.contains(document.activeElement)) return;

              stopAnimation(item);

              const itemMiddle =
                entry.boundingClientRect.top +
                entry.boundingClientRect.height / 2;

              const offset =
                itemMiddle < window.innerHeight / 2 ? -12 : 12;

              const animation = item.animate(
                [
                  {
                    opacity: 0,
                    transform: \`translateY(\${offset}px) scale(0.8)\`,
                    offset: 0
                  },
                  {
                    opacity: 1,
                    transform: "translateY(0) scale(1.025)",
                    offset: 0.65
                  },
                  {
                    opacity: 1,
                    transform: "translateY(0) scale(1)",
                    offset: 1
                  }
                ],
                {
                  duration: 620,
                  delay: order++ * 50,
                  easing: "cubic-bezier(0.22, 1, 0.36, 1)",
                  fill: "backwards"
                }
              );

              animations.set(item, animation);

              animation.onfinish = () => {
                if (animations.get(item) === animation) {
                  animations.delete(item);
                }
              };
            });
        }, {
          threshold: [0, 0.5]
        });

        items.forEach((item) => observer.observe(item));
      }

      reducedMotion.addEventListener("change", setupAnimation);
      setupAnimation();
    })();
`;

// Read index.html
let indexContent = fs.readFileSync('g:/DMS WEB/index.html', 'utf8');

// 1. Replace the existing .dms-services-section in HTML with newGridHtml
const oldSectionRegex = /<!-- DMS SERVICES & PARTNER LOGOS SECTION -->[\s\S]*?<\/section>/;
const altSectionRegex = /<section class="dms-services-section"[\s\S]*?<\/section>/;

if (oldSectionRegex.test(indexContent)) {
  indexContent = indexContent.replace(oldSectionRegex, newGridHtml);
  console.log('Replaced section using oldSectionRegex');
} else if (altSectionRegex.test(indexContent)) {
  indexContent = indexContent.replace(altSectionRegex, newGridHtml);
  console.log('Replaced section using altSectionRegex');
}

// 2. Update CSS in index.html
const oldCssRegex = /\/\* =+ *\r?\n *DMS SERVICES & LOGO ROW[\s\S]*?@media \(prefers-reduced-motion: reduce\) \{[\s\S]*?\}\r?\n *\}/;
if (oldCssRegex.test(indexContent)) {
  indexContent = indexContent.replace(oldCssRegex, newGridCss);
  console.log('Replaced old CSS with new refined grid CSS');
} else {
  // If not matched, replace before </style>
  indexContent = indexContent.replace('</style>', newGridCss + '\n  </style>');
  console.log('Appended new refined grid CSS before </style>');
}

// 3. Add animation script before </body>
if (!indexContent.includes('DMS REFINED SERVICES GRID ANIMATION SCRIPT')) {
  indexContent = indexContent.replace('</body>', '<script>' + newGridScript + '</script>\n</body>');
  console.log('Added animation script before </body>');
}

fs.writeFileSync('g:/DMS WEB/index.html', indexContent);
console.log('Updated index.html successfully.');

// 4. Update Elementor Template 04-services-grid-logos
const elementorDir = 'g:/DMS WEB/elementor-templates';
const standaloneHtml = '<style>' + newGridCss + '</style>\n' + newGridHtml + '\n<script>' + newGridScript + '</script>';
fs.writeFileSync(path.join(elementorDir, '04-services-grid-logos.html'), standaloneHtml);

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
                  html: html
                }
              }
            ]
          }
        ]
      }
    ]
  }, null, 2);
}

fs.writeFileSync(path.join(elementorDir, '04-services-grid-logos.json'), createSectionJson('DMS - Refined Services Grid & Partner Logos', standaloneHtml));
console.log('Saved updated 04-services-grid-logos.json and .html');
