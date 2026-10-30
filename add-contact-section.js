const fs = require('fs');
const path = require('path');

const contactCss = `
    /* ==========================================================================
       DMS CONTACT & SUPPORT HIGHLIGHTS SECTION
       ========================================================================== */
    .dms-contact-section,
    .dms-contact-section * {
      box-sizing: border-box;
    }

    .dms-contact-section {
      --dms-green: #234d38;
      --dms-beige: #f7f5f1;
      --dms-text: #111;
      --dms-muted: #757575;

      width: 100%;
      max-width: 1368px;
      margin: 0 auto;
      padding: 44px 24px 24px;

      color: var(--dms-text);
      background: #fff;

      font-family: Inter, "Inter Placeholder", sans-serif;
      font-size: 16px;
      font-weight: 500;
      line-height: 19px;
      letter-spacing: -0.48px;
    }

    .dms-contact-section a {
      font-family: inherit;
    }

    .dms-contact-section .dc-intro {
      text-align: center;
    }

    /* Service icons */
    .dms-contact-section .dc-icons {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 20px;
      padding: 4px 0;
    }

    .dms-contact-section .dc-icon-circle {
      display: grid;
      place-items: center;
      width: 46px;
      height: 46px;
      flex: 0 0 46px;

      margin-left: -7px;
      border: 3px solid #fff;
      border-radius: 50%;
      background: #edf2e9;
      color: #365741;
    }

    .dms-contact-section .dc-icon-circle:first-child {
      margin-left: 0;
    }

    .dms-contact-section .dc-icon-circle:nth-child(2) {
      background: #eee9df;
      color: #766449;
    }

    .dms-contact-section .dc-icon-circle:nth-child(3) {
      background: #e4eee5;
      color: #3c6248;
    }

    .dms-contact-section .dc-icon-circle:nth-child(4) {
      background: #f0ece4;
      color: #766e5b;
    }

    .dms-contact-section .dc-icon-circle:nth-child(5) {
      background: #e3eae1;
      color: #3c5844;
    }

    .dms-contact-section svg {
      display: block;
      width: 21px;
      height: 21px;
      fill: none;
      stroke: currentColor;
      stroke-width: 1.5;
      stroke-linecap: round;
      stroke-linejoin: round;
    }

    /* Main heading */
    .dms-contact-section .dc-heading {
      max-width: 900px;
      margin: 0 auto 15px;

      color: #111;
      font-family: inherit;
      font-size: clamp(30px, 3.8vw, 50px);
      font-weight: 400;
      line-height: 1.12;
      letter-spacing: -1.9px;
    }

    .dms-contact-section .dc-description {
      max-width: 570px;
      margin: 0 auto;

      color: var(--dms-muted);
      font-size: 16px;
      font-weight: 400;
      line-height: 25px;
      letter-spacing: -0.3px;
    }

    /* Three support highlights */
    .dms-contact-section .dc-highlights {
      display: grid;
      grid-template-columns: repeat(3, minmax(0, 1fr));
      gap: 26px;

      width: 100%;
      max-width: 990px;
      margin: 48px auto 58px;
    }

    .dms-contact-section .dc-highlight {
      min-width: 0;
      padding: 3px 0 3px 18px;
      border-left: 1px solid #deded9;
    }

    .dms-contact-section .dc-highlight h3 {
      margin: 0 0 8px;
      color: #181818;

      font-family: inherit;
      font-size: 18px;
      font-weight: 500;
      line-height: 24px;
      letter-spacing: -0.55px;
    }

    .dms-contact-section .dc-highlight p {
      margin: 0;
      color: #797979;
      font-size: 12px;
      font-weight: 400;
      line-height: 19px;
      letter-spacing: -0.1px;
    }

    /* Beige call-to-action card */
    .dms-contact-section .dc-cta {
      display: grid;
      grid-template-columns: minmax(0, 1fr) minmax(220px, 0.34fr);
      align-items: center;
      gap: clamp(28px, 4vw, 65px);

      padding: clamp(30px, 4vw, 52px);
      border: 0;
      border-radius: 22px;
      background: var(--dms-beige);

      box-shadow:
        0 3px 10px rgb(53 44 27 / 2%),
        0 12px 30px rgb(53 44 27 / 3%);
    }

    .dms-contact-section .dc-cta-main {
      min-width: 0;
    }

    .dms-contact-section .dc-cta-heading {
      max-width: 800px;
      margin: 0;

      color: #111;
      font-family: inherit;
      font-size: clamp(29px, 3.4vw, 46px);
      font-weight: 400;
      line-height: 1.16;
      letter-spacing: -1.65px;
    }

    .dms-contact-section .dc-actions {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      gap: 16px 24px;
      margin-top: 28px;
    }

    .dms-contact-section .dc-button {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 12px;

      min-height: 48px;
      padding: 13px 21px;

      border: 0;
      border-radius: 15px;
      background: var(--dms-green);
      color: #fff;

      font-size: 14px;
      font-weight: 500;
      line-height: 20px;
      letter-spacing: -0.3px;
      text-decoration: none;

      transition:
        background 220ms ease,
        transform 220ms ease,
        box-shadow 220ms ease;
    }

    .dms-contact-section .dc-button svg {
      width: 16px;
      height: 16px;
    }

    .dms-contact-section .dc-text-link {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      min-height: 44px;

      color: var(--dms-green);
      font-size: 14px;
      font-weight: 500;
      line-height: 20px;
      letter-spacing: -0.3px;

      text-decoration: underline;
      text-decoration-color: #b9c5b5;
      text-underline-offset: 5px;
    }

    .dms-contact-section .dc-text-link svg {
      width: 14px;
      height: 14px;
      transition: transform 220ms ease;
    }

    /* Right-side CTA note */
    .dms-contact-section .dc-cta-note {
      min-width: 0;
      padding-left: 20px;
      border-left: 1px solid #dcd9d2;
    }

    .dms-contact-section .dc-cta-note h3 {
      margin: 0 0 9px;
      color: #20201c;

      font-family: inherit;
      font-size: 18px;
      font-weight: 500;
      line-height: 25px;
      letter-spacing: -0.55px;
    }

    .dms-contact-section .dc-cta-note p {
      margin: 0 0 13px;
      color: #78766f;

      font-size: 12px;
      font-weight: 400;
      line-height: 20px;
      letter-spacing: -0.1px;
    }

    .dms-contact-section .dc-cta-note .dc-text-link {
      color: #30352d;
      font-size: 13px;
    }

    .dms-contact-section a:focus-visible {
      outline: 2px solid var(--dms-green);
      outline-offset: 5px;
    }

    /* Gentle icon motion */
    .dms-contact-section .dc-icon-circle svg {
      animation: dc-icon-float 5s ease-in-out infinite;
      animation-play-state: paused;
    }

    .dms-contact-section.dc-visible:not(.dc-paused) .dc-icon-circle svg {
      animation-play-state: running;
    }

    .dms-contact-section .dc-icon-circle:nth-child(2) svg {
      animation-delay: -1s;
    }

    .dms-contact-section .dc-icon-circle:nth-child(3) svg {
      animation-delay: -2s;
    }

    .dms-contact-section .dc-icon-circle:nth-child(4) svg {
      animation-delay: -3s;
    }

    .dms-contact-section .dc-icon-circle:nth-child(5) svg {
      animation-delay: -4s;
    }

    @keyframes dc-icon-float {
      0%, 100% {
        transform: translateY(0) rotate(0);
      }
      50% {
        transform: translateY(-2px) rotate(3deg);
      }
    }

    @media (hover: hover) {
      .dms-contact-section .dc-button:hover {
        color: #fff;
        background: #173c2a;
        transform: translateY(-2px);
        box-shadow: 0 6px 14px rgb(35 77 56 / 12%);
      }

      .dms-contact-section .dc-text-link:hover svg {
        transform: translateX(3px);
      }
    }

    /* Tablet */
    @media (max-width: 950px) {
      .dms-contact-section .dc-cta {
        grid-template-columns: minmax(0, 1fr) 220px;
        gap: 30px;
        padding: 34px;
      }

      .dms-contact-section .dc-cta-heading {
        font-size: 35px;
        letter-spacing: -1.2px;
      }

      .dms-contact-section .dc-highlights {
        gap: 20px;
      }

      .dms-contact-section .dc-highlight h3 {
        font-size: 16px;
        line-height: 22px;
      }
    }

    /* Mobile */
    @media (max-width: 700px) {
      .dms-contact-section {
        padding: 30px 16px 20px;
      }

      .dms-contact-section .dc-icons {
        margin-bottom: 17px;
      }

      .dms-contact-section .dc-icon-circle {
        width: 42px;
        height: 42px;
        flex-basis: 42px;
      }

      .dms-contact-section .dc-heading {
        max-width: 420px;
        font-size: 32px;
        line-height: 1.16;
        letter-spacing: -1.2px;
      }

      .dms-contact-section .dc-description {
        max-width: 440px;
        font-size: 14px;
        line-height: 23px;
      }

      .dms-contact-section .dc-highlights {
        grid-template-columns: 1fr;
        gap: 20px;
        margin: 30px auto 32px;
        max-width: 440px;
      }

      .dms-contact-section .dc-highlight {
        padding-left: 15px;
      }

      .dms-contact-section .dc-highlight h3 {
        margin-bottom: 5px;
        font-size: 16px;
        line-height: 21px;
      }

      .dms-contact-section .dc-cta {
        grid-template-columns: 1fr;
        gap: 26px;
        padding: 28px 22px;
        border-radius: 20px;
      }

      .dms-contact-section .dc-cta-heading {
        font-size: 30px;
        line-height: 1.18;
        letter-spacing: -1px;
      }

      .dms-contact-section .dc-actions {
        gap: 10px 18px;
        margin-top: 22px;
      }

      .dms-contact-section .dc-button {
        min-height: 46px;
        padding: 12px 17px;
        font-size: 13px;
        border-radius: 13px;
      }

      .dms-contact-section .dc-text-link {
        font-size: 13px;
      }

      .dms-contact-section .dc-cta-note {
        padding: 21px 0 0;
        border-left: 0;
        border-top: 1px solid #dedbd4;
      }

      .dms-contact-section .dc-cta-note h3 {
        font-size: 17px;
        line-height: 23px;
      }

      .dms-contact-section .dc-cta-note p {
        margin-bottom: 5px;
      }
    }

    @media (prefers-reduced-motion: reduce) {
      .dms-contact-section *,
      .dms-contact-section *::before,
      .dms-contact-section *::after {
        animation: none !important;
        transition: none !important;
      }
    }
`;

const contactHtml = `
  <!-- DMS CONTACT & SUPPORT HIGHLIGHTS SECTION -->
  <section class="dms-contact-section" id="contact-overview" aria-label="DMS support and enquiries">

    <div class="dc-intro">

      <div class="dc-icons" aria-hidden="true">

        <!-- Government relations -->
        <span class="dc-icon-circle">
          <svg viewBox="0 0 24 24">
            <path d="m3 9 9-6 9 6H3ZM5 21h14M4 18h16 M7 10v8m5-8v8m5-8v8"/>
          </svg>
        </span>

        <!-- Visa services -->
        <span class="dc-icon-circle">
          <svg viewBox="0 0 24 24">
            <rect x="5" y="3" width="14" height="18" rx="2"/>
            <circle cx="12" cy="10" r="4"/>
            <path d="M8 10h8m-4-4c-2 2-2 6 0 8 m0-8c2 2 2 6 0 8M9 18h6"/>
          </svg>
        </span>

        <!-- Document assistance -->
        <span class="dc-icon-circle">
          <svg viewBox="0 0 24 24">
            <path d="M14 3H6a2 2 0 0 0-2 2v14 a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9l-6-6Z"/>
            <path d="M14 3v6h6M8 13h5m-5 4 2 2 5-5"/>
          </svg>
        </span>

        <!-- Corporate setup -->
        <span class="dc-icon-circle">
          <svg viewBox="0 0 24 24">
            <rect x="5" y="5" width="14" height="16" rx="1.5"/>
            <path d="M9 5V3h6v2M9 9h1m4 0h1 M9 13h1m4 0h1M10 21v-4h4v4"/>
          </svg>
        </span>

        <!-- Personal support -->
        <span class="dc-icon-circle">
          <svg viewBox="0 0 24 24">
            <path d="M4 13v-1a8 8 0 0 1 16 0v1"/>
            <rect x="3" y="12" width="4" height="7" rx="2"/>
            <rect x="17" y="12" width="4" height="7" rx="2"/>
            <path d="M19 19a3 3 0 0 1-3 3h-3"/>
          </svg>
        </span>

      </div>

      <h2 class="dc-heading">
        Your questions. Our expertise.
      </h2>

      <p class="dc-description">
        From visas and residency to corporate setup and documentation,
        DMS helps you move forward with clear, personalised guidance.
      </p>

    </div>

    <div class="dc-highlights">

      <article class="dc-highlight">
        <h3>Guidance that fits your needs</h3>
        <p>
          Practical support for individuals, families and businesses.
        </p>
      </article>

      <article class="dc-highlight">
        <h3>A team you can talk to</h3>
        <p>
          Discuss your requirements and understand your next steps.
        </p>
      </article>

      <article class="dc-highlight">
        <h3>Support through the process</h3>
        <p>
          Assistance with documents, applications and follow-ups.
        </p>
      </article>

    </div>

    <div class="dc-cta">

      <div class="dc-cta-main">
        <h2 class="dc-cta-heading">
          Your next chapter in Bahrain<br>
          starts with the right support.
        </h2>

        <div class="dc-actions">

          <a class="dc-button" href="#contact">
            Talk to DMS
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M5 12h14m-6-6 6 6-6 6"/>
            </svg>
          </a>

          <a class="dc-text-link" href="#services">
            Explore our services
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="m9 5 7 7-7 7"/>
            </svg>
          </a>

        </div>
      </div>

      <aside class="dc-cta-note">
        <h3>Support shaped around you</h3>

        <p>
          Tell us what you need. We’ll help you understand
          the process and the support available.
        </p>

        <a class="dc-text-link" href="#contact">
          Discuss your requirements
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="m9 5 7 7-7 7"/>
          </svg>
        </a>
      </aside>

    </div>

  </section>
`;

const contactScript = `
    /* DMS CONTACT & SUPPORT HIGHLIGHTS INTERACTIVITY */
    (() => {
      const section = document.querySelector(".dms-contact-section");
      if (!section) return;
      if (section.dataset.dcInitialized === "true") return;

      section.dataset.dcInitialized = "true";

      const reducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      );

      const animations = new Set();
      const revealed = new WeakSet();

      let sectionVisible = false;

      function updateIconMotion() {
        section.classList.toggle(
          "dc-visible",
          sectionVisible && !reducedMotion.matches
        );

        section.classList.toggle("dc-paused", document.hidden);
      }

      function reveal(element, delay = 0) {
        if (revealed.has(element)) return;
        revealed.add(element);

        if (
          reducedMotion.matches ||
          typeof element.animate !== "function"
        ) {
          return;
        }

        const animation = element.animate(
          [
            {
              opacity: 0,
              transform: "translateY(14px)"
            },
            {
              opacity: 1,
              transform: "translateY(0)"
            }
          ],
          {
            duration: 650,
            delay,
            easing: "cubic-bezier(.22, 1, .36, 1)",
            fill: "backwards"
          }
        );

        animations.add(animation);

        animation.onfinish = () => animations.delete(animation);
        animation.oncancel = () => animations.delete(animation);
      }

      if ("IntersectionObserver" in window) {
        const motionObserver = new IntersectionObserver(
          entries => {
            sectionVisible = entries[0].isIntersecting;
            updateIconMotion();
          },
          { threshold: 0 }
        );

        motionObserver.observe(section);

        const revealObserver = new IntersectionObserver(
          entries => {
            entries.forEach(entry => {
              if (!entry.isIntersecting) return;

              const element = entry.target;
              const delay = Number(element.dataset.dcDelay || 0);

              reveal(element, delay);
              revealObserver.unobserve(element);
            });
          },
          { threshold: 0.12 }
        );

        const intro = section.querySelector(".dc-intro");
        if (intro) revealObserver.observe(intro);

        section.querySelectorAll(".dc-highlight").forEach((item, index) => {
          item.dataset.dcDelay = String(index * 80);
          revealObserver.observe(item);
        });

        const cta = section.querySelector(".dc-cta");
        if (cta) revealObserver.observe(cta);
      } else {
        sectionVisible = true;
        updateIconMotion();
      }

      document.addEventListener("visibilitychange", updateIconMotion);

      reducedMotion.addEventListener("change", () => {
        if (reducedMotion.matches) {
          [...animations].forEach(animation => animation.cancel());
        }

        updateIconMotion();
      });
    })();
`;

// Read index.html
let indexContent = fs.readFileSync('g:/DMS WEB/index.html', 'utf8');

// 1. Add CSS to <style>
if (indexContent.includes('</style>')) {
  indexContent = indexContent.replace('</style>', '\n' + contactCss + '\n</style>');
}

// 2. Insert HTML right after the Expertise section (<section class="dms-expertise-section" ...)
const expertiseEnd = indexContent.indexOf('</section>', indexContent.indexOf('class="dms-expertise-section"'));
if (expertiseEnd !== -1) {
  const insertPos = expertiseEnd + '</section>'.length;
  const before = indexContent.slice(0, insertPos);
  const after = indexContent.slice(insertPos);
  indexContent = before + '\n\n' + contactHtml + '\n\n' + after;
  console.log('Inserted Contact section right after Expertise section');
} else {
  console.error('Could not find Expertise section end');
}

// 3. Add script before </body>
indexContent = indexContent.replace('</body>', '<script>' + contactScript + '</script>\n</body>');

fs.writeFileSync('g:/DMS WEB/index.html', indexContent);
console.log('Successfully updated index.html with Contact section');

// 4. Generate Elementor Option B Templates
const elementorDir = 'g:/DMS WEB/elementor-templates';
const standaloneHtml = '<style>' + contactCss + '</style>\n' + contactHtml + '\n<script>' + contactScript + '</script>';

fs.writeFileSync(path.join(elementorDir, '08-contact-overview.html'), standaloneHtml);

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

fs.writeFileSync(path.join(elementorDir, '08-contact-overview.json'), createSectionJson('DMS - Contact & Support Overview', standaloneHtml));
console.log('Saved 08-contact-overview.json and 08-contact-overview.html');
