const fs = require('fs');
const path = require('path');

const expertiseCss = `
    /* ==========================================================================
       DMS EXPERTISE & SECTORS SECTION
       ========================================================================== */
    .dms-symbols {
      position: absolute;
      width: 0;
      height: 0;
      overflow: hidden;
    }

    .dms-expertise-section,
    .dms-expertise-section * {
      box-sizing: border-box;
    }

    .dms-expertise-section {
      --dms-green: #285d43;
      --dms-ink: #111;
      --dms-muted: #858585;
      --dms-border: #ededeb;

      max-width: 1220px;
      margin: 0 auto;
      padding: 64px 32px;

      font-family: Inter, "Inter Placeholder", sans-serif;
      font-size: 16px;
      font-weight: 500;
      line-height: 19px;
      letter-spacing: -0.48px;
      color: var(--dms-ink);
    }

    .dms-layout {
      display: grid;
      grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.25fr);
      gap: clamp(48px, 9vw, 140px);
      align-items: start;
    }

    .dms-intro,
    .dms-services {
      min-width: 0;
    }

    .dms-eyebrow {
      display: block;
      margin-bottom: 16px;
      color: #777;
      font-size: 11px;
      font-weight: 400;
      line-height: 16px;
      letter-spacing: 0;
    }

    .dms-intro h2 {
      margin: 0 0 18px;
      font-size: clamp(27px, 2.6vw, 36px);
      font-weight: 400;
      line-height: 1.22;
      letter-spacing: -1.2px;
    }

    .dms-description {
      max-width: 360px;
      margin: 0;
      color: #818181;
      font-size: 14px;
      font-weight: 400;
      line-height: 23px;
      letter-spacing: -0.2px;
    }

    /* Small card on the left */
    .dms-sector-card {
      width: 100%;
      max-width: 270px;
      margin-top: 27px;
      padding: 20px;
      border: 1px solid var(--dms-border);
      border-radius: 16px;
      background: #fff;
      box-shadow:
        0 2px 5px rgb(0 0 0 / 2%),
        0 6px 22px rgb(0 0 0 / 3%);
    }

    .dms-card-label {
      display: block;
      color: #91958f;
      font-size: 9px;
      font-weight: 500;
      line-height: 15px;
      letter-spacing: 1px;
    }

    .dms-sector-content {
      min-height: 167px;
      padding-top: 18px;
    }

    .dms-sector-icon {
      display: inline-flex;
      color: var(--dms-green);
    }

    .dms-sector-icon .dms-icon {
      width: 35px;
      height: 35px;
    }

    .dms-sector-title {
      margin: 15px 0 8px;
      font-size: 17px;
      font-weight: 500;
      line-height: 22px;
      letter-spacing: -0.5px;
    }

    .dms-sector-description {
      margin: 0;
      color: #858585;
      font-size: 12px;
      font-weight: 400;
      line-height: 19px;
      letter-spacing: -0.1px;
    }

    .dms-card-bottom {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 12px;
      margin-top: 18px;
      padding-top: 12px;
      border-top: 1px solid #f0f1ee;
      color: #7b8179;
      font-size: 10px;
      line-height: 16px;
      letter-spacing: 0;
    }

    .dms-sector-count {
      font-variant-numeric: tabular-nums;
      color: #a0a39e;
    }

    .dms-card-controls {
      display: flex;
      gap: 4px;
      margin-top: 8px;
    }

    .dms-card-controls button {
      display: grid;
      place-items: center;
      width: 40px;
      height: 40px;
      padding: 0;
      border: 0;
      border-radius: 50%;
      background: transparent;
      color: #92968f;
      cursor: pointer;
      transition:
        background 200ms ease,
        color 200ms ease,
        transform 200ms ease;
    }

    .dms-card-controls svg {
      width: 15px;
      height: 15px;
      fill: none;
      stroke: currentColor;
      stroke-width: 1.4;
      stroke-linecap: round;
      stroke-linejoin: round;
    }

    .dms-card-controls button:hover {
      background: #f2f6ef;
      color: var(--dms-green);
    }

    .dms-card-controls button:active {
      transform: scale(0.92);
    }

    .dms-card-controls button:focus-visible {
      outline: 2px solid var(--dms-green);
      outline-offset: 3px;
    }

    /* Right-side rows */
    .dms-services {
      padding-top: 8px;
    }

    .dms-service-row {
      display: grid;
      grid-template-columns: 26px minmax(0, 1fr) auto;
      align-items: start;
      gap: 14px;

      min-height: 111px;
      padding: 25px 0;
      border-bottom: 1px solid var(--dms-border);
    }

    .dms-service-row:nth-child(3) {
      border-bottom: 0;
    }

    .dms-service-icon {
      display: inline-flex;
      justify-content: center;
      padding-top: 1px;
      color: #57705c;
    }

    .dms-icon {
      display: block;
      width: 23px;
      height: 23px;
      fill: none;
      stroke: currentColor;
      stroke-width: 1.45;
      stroke-linecap: round;
      stroke-linejoin: round;
    }

    .dms-service-copy h3 {
      margin: 0 0 7px;
      font-size: 16px;
      font-weight: 500;
      line-height: 19px;
      letter-spacing: -0.48px;
    }

    .dms-service-copy p {
      max-width: 300px;
      margin: 0;
      color: #858585;
      font-size: 12px;
      font-weight: 400;
      line-height: 19px;
      letter-spacing: -0.1px;
    }

    .dms-badge {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      margin-top: 1px;
      padding: 4px 9px;
      border-radius: 30px;
      background: #f6f6f3;
      color: #808178;
      font-size: 9px;
      font-weight: 400;
      line-height: 15px;
      letter-spacing: 0;
      white-space: nowrap;
    }

    .dms-service-featured {
      min-height: 107px;
      margin-top: 14px;
      padding: 26px 18px;
      border: 0;
      border-radius: 17px;
      background: linear-gradient(125deg, #f5f6f1, #edf4eb);
    }

    .dms-badge-dark {
      background: #203e2c;
      color: #fff;
    }

    .dms-service-featured .dms-service-icon {
      color: var(--dms-green);
    }

    /* Small, continuous icon movement */
    .dms-expertise-section.is-visible .dms-service-icon .dms-icon {
      animation: dms-icon-float 5s ease-in-out infinite;
      animation-delay: calc(var(--order) * -1.2s);
    }

    .dms-expertise-section.is-visible .dms-sector-icon .dms-icon {
      animation: dms-icon-float 5.5s ease-in-out infinite;
    }

    .dms-expertise-section.is-paused .dms-icon {
      animation-play-state: paused !important;
    }

    @keyframes dms-icon-float {
      0%, 100% {
        transform: translateY(0) rotate(0);
      }
      50% {
        transform: translateY(-3px) rotate(3deg);
      }
    }

    /* Tablet */
    @media (max-width: 1000px) {
      .dms-layout {
        gap: 48px;
        grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.2fr);
      }

      .dms-service-row {
        grid-template-columns: 25px minmax(0, 1fr);
        column-gap: 12px;
        row-gap: 10px;
      }

      .dms-badge {
        grid-column: 2;
        justify-self: start;
      }
    }

    /* Mobile */
    @media (max-width: 700px) {
      .dms-expertise-section {
        padding: 36px 20px;
      }

      .dms-layout {
        grid-template-columns: 1fr;
        gap: 24px;
      }

      .dms-intro h2 {
        font-size: 30px;
      }

      .dms-description {
        max-width: 480px;
      }

      .dms-sector-card {
        max-width: 100%;
        margin-top: 22px;
        padding: 18px;
      }

      .dms-sector-content {
        display: grid;
        grid-template-columns: 40px minmax(0, 1fr);
        align-items: center;
        gap: 6px 14px;
        min-height: 100px;
        padding-top: 14px;
      }

      .dms-sector-icon {
        grid-row: 1 / 3;
      }

      .dms-sector-title {
        margin: 0;
        font-size: 16px;
      }

      .dms-sector-description {
        grid-column: 2;
        max-width: 320px;
      }

      .dms-card-bottom {
        margin-top: 12px;
      }

      .dms-services {
        padding-top: 0;
      }

      .dms-service-row {
        min-height: 0;
        padding: 22px 0;
      }

      .dms-service-copy p {
        max-width: 100%;
      }

      .dms-service-featured {
        margin-top: 10px;
        padding: 22px 16px;
      }
    }

    @media (prefers-reduced-motion: reduce) {
      .dms-expertise-section *,
      .dms-expertise-section *::before,
      .dms-expertise-section *::after {
        animation: none !important;
        transition: none !important;
      }
    }
`;

const expertiseHtml = `
  <!-- DMS EXPERTISE & SECTORS SECTION -->
  <!-- Reusable content-matched icons -->
  <svg class="dms-symbols" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <defs>
      <symbol id="icon-government" viewBox="0 0 24 24">
        <path d="m3 9 9-6 9 6H3Zm2 12h14M4 18h16 M7 10v8m5-8v8m5-8v8"/>
      </symbol>

      <symbol id="icon-passport" viewBox="0 0 24 24">
        <rect x="5" y="3" width="14" height="18" rx="2"/>
        <circle cx="12" cy="10" r="4"/>
        <path d="M8 10h8m-4-4c-2 2-2 6 0 8 m0-8c2 2 2 6 0 8M9 18h6"/>
      </symbol>

      <symbol id="icon-document" viewBox="0 0 24 24">
        <path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12 a2 2 0 0 0 2-2V9l-6-6Z"/>
        <path d="M14 3v6h6M8 12h4m-4 4 2 2 5-5"/>
      </symbol>

      <symbol id="icon-growth" viewBox="0 0 24 24">
        <path d="M4 4v16h16M7 15l5-5 4 3 5-7 m-5 0h5v5"/>
      </symbol>

      <symbol id="icon-oil" viewBox="0 0 24 24">
        <path d="M3 21h18M7 21l3-15h4l4 15 M8 14h8M7 18h10M3 7l18-4M5 7v6m-2 0h4"/>
      </symbol>

      <symbol id="icon-building" viewBox="0 0 24 24">
        <rect x="5" y="5" width="14" height="16" rx="1.5"/>
        <path d="M9 5V3h6v2M9 9h1m4 0h1 M9 13h1m4 0h1M10 21v-4h4v4"/>
      </symbol>

      <symbol id="icon-school" viewBox="0 0 24 24">
        <path d="m3 10 9-7 9 7M5 9v12h14V9 M10 21v-6h4v6M12 3V1h5"/>
        <circle cx="12" cy="10" r="2"/>
      </symbol>

      <symbol id="icon-investment" viewBox="0 0 24 24">
        <circle cx="15" cy="7" r="4"/>
        <path d="M15 5v4m-1-3h2m-2 2h2 M3 15h4l3-2h5a2 2 0 0 1 0 4h-4 M7 15l5 6 9-6M3 14v7h4v-7"/>
      </symbol>
    </defs>
  </svg>

  <section class="dms-expertise-section" id="expertise" aria-labelledby="dms-expertise-title">
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
  </section>
`;

const expertiseScript = `
    /* DMS EXPERTISE & SECTORS INTERACTIVITY */
    (() => {
      const section = document.querySelector(".dms-expertise-section");
      if (!section) return;

      const content = section.querySelector(".dms-sector-content");
      const title = section.querySelector(".dms-sector-title");
      const description = section.querySelector(".dms-sector-description");
      const icon = section.querySelector(".dms-sector-icon use");
      const count = section.querySelector(".dms-sector-count");

      const previous = section.querySelector(".dms-prev");
      const next = section.querySelector(".dms-next");

      const reducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      );

      const sectors = [
        {
          title: "Petroleum Companies",
          description:
            "Professional support for industry-specific documentation needs.",
          icon: "#icon-oil"
        },
        {
          title: "Corporate",
          description:
            "Government relations and documentation support for businesses.",
          icon: "#icon-building"
        },
        {
          title: "Schools",
          description:
            "Administrative documentation support for educational institutions.",
          icon: "#icon-school"
        },
        {
          title: "Investment Banks",
          description:
            "Professional assistance with business documentation processes.",
          icon: "#icon-investment"
        },
        {
          title: "Commercial Banks",
          description:
            "Coordinated support for government-related documentation needs.",
          icon: "#icon-government"
        }
      ];

      let current = 0;
      let cardAnimation;
      let revealed = false;
      let visible = false;

      const revealAnimations = [];

      function changeSector(direction) {
        current = (current + direction + sectors.length) % sectors.length;

        const sector = sectors[current];

        title.textContent = sector.title;
        description.textContent = sector.description;
        icon.setAttribute("href", sector.icon);

        count.textContent =
          \`\${String(current + 1).padStart(2, "0")} / \` +
          String(sectors.length).padStart(2, "0");

        cardAnimation?.cancel();

        if (!reducedMotion.matches && content.animate) {
          cardAnimation = content.animate(
            [
              {
                opacity: 0,
                transform: \`translateX(\${direction * 8}px)\`
              },
              {
                opacity: 1,
                transform: "translateX(0)"
              }
            ],
            {
              duration: 300,
              easing: "cubic-bezier(.22, 1, .36, 1)"
            }
          );
        }
      }

      if (previous && next) {
        previous.addEventListener("click", () => changeSector(-1));
        next.addEventListener("click", () => changeSector(1));
      }

      function updateMotion() {
        section.classList.toggle(
          "is-visible",
          visible && !reducedMotion.matches
        );

        section.classList.toggle("is-paused", document.hidden);
      }

      function revealRows() {
        if (revealed) return;
        revealed = true;

        if (reducedMotion.matches) return;

        section.querySelectorAll(".dms-service-row").forEach((row, index) => {
          if (!row.animate) return;

          const animation = row.animate(
            [
              { opacity: 0, transform: "translateY(14px)" },
              { opacity: 1, transform: "translateY(0)" }
            ],
            {
              duration: 550,
              delay: index * 90,
              easing: "cubic-bezier(.22, 1, .36, 1)",
              fill: "backwards"
            }
          );

          revealAnimations.push(animation);
        });
      }

      if ("IntersectionObserver" in window) {
        const observer = new IntersectionObserver(
          entries => {
            visible = entries[0].isIntersecting;
            updateMotion();

            if (visible) revealRows();
          },
          { threshold: 0.12 }
        );

        observer.observe(section);
      } else {
        visible = true;
        updateMotion();
        revealRows();
      }

      document.addEventListener("visibilitychange", updateMotion);

      reducedMotion.addEventListener("change", () => {
        if (reducedMotion.matches) {
          cardAnimation?.cancel();
          revealAnimations.forEach(animation => animation.cancel());
        }

        updateMotion();
      });
    })();
`;

// Read index.html
let indexContent = fs.readFileSync('g:/DMS WEB/index.html', 'utf8');

// 1. Add CSS to <style>
if (indexContent.includes('</style>')) {
  indexContent = indexContent.replace('</style>', '\n' + expertiseCss + '\n</style>');
}

// 2. Insert HTML right after the Golden Visa section
const goldenVisaEnd = indexContent.indexOf('</section>', indexContent.indexOf('class="dms-golden-section"'));
if (goldenVisaEnd !== -1) {
  const insertPos = goldenVisaEnd + '</section>'.length;
  const before = indexContent.slice(0, insertPos);
  const after = indexContent.slice(insertPos);
  indexContent = before + '\n\n' + expertiseHtml + '\n\n' + after;
  console.log('Inserted Expertise section right after Bahrain Golden Visa section');
} else {
  console.error('Could not find Golden Visa section end');
}

// 3. Add script before </body>
indexContent = indexContent.replace('</body>', '<script>' + expertiseScript + '</script>\n</body>');

fs.writeFileSync('g:/DMS WEB/index.html', indexContent);
console.log('Successfully updated index.html with Expertise section');

// 4. Generate Elementor Option B Templates
const elementorDir = 'g:/DMS WEB/elementor-templates';
const standaloneHtml = '<style>' + expertiseCss + '</style>\n' + expertiseHtml + '\n<script>' + expertiseScript + '</script>';

fs.writeFileSync(path.join(elementorDir, '07-expertise-sectors.html'), standaloneHtml);

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

fs.writeFileSync(path.join(elementorDir, '07-expertise-sectors.json'), createSectionJson('DMS - Expertise & Sectors Supported', standaloneHtml));
console.log('Saved 07-expertise-sectors.json and 07-expertise-sectors.html');
