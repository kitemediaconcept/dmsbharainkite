const fs = require('fs');
const path = require('path');

const goldenCss = `
    /* ==========================================================================
       DMS BAHRAIN GOLDEN VISA SECTION
       ========================================================================== */
    .dms-golden-section,
    .dms-golden-section * {
      box-sizing: border-box;
    }

    .dms-golden-section {
      width: 100%;
      max-width: 1368px;
      margin: 0 auto;
      padding: 20px 24px 40px;
      font-family: Inter, "Inter Placeholder", sans-serif;
      color: #111;
    }

    .dms-golden-panel {
      position: relative;
      overflow: hidden;
      isolation: isolate;
      padding: 44px 24px 36px;
      border: 1px solid #eee9df;
      border-radius: 18px;
      background: #f8f7f4;
      text-align: center;
    }

    .dms-golden-panel::before {
      content: "";
      position: absolute;
      inset: 10% 0;
      z-index: -1;
      pointer-events: none;
      background: radial-gradient(
        ellipse at center,
        rgba(218, 188, 116, 0.16),
        transparent 65%
      );
    }

    .dms-golden-eyebrow {
      margin: 0 0 10px;
      font-size: 11px;
      font-weight: 600;
      line-height: 16px;
      letter-spacing: 2px;
      text-transform: uppercase;
      color: #80735a;
    }

    .dms-golden-heading {
      max-width: 680px;
      margin: 0 auto;
      font-size: clamp(26px, 2.8vw, 36px);
      font-weight: 400;
      line-height: 1.15;
      letter-spacing: -1.2px;
      text-wrap: balance;
    }

    .dms-golden-description {
      max-width: 490px;
      margin: 12px auto 0;
      font-size: 16px;
      font-weight: 400;
      line-height: 22px;
      letter-spacing: -0.48px;
      color: #706d66;
      text-wrap: balance;
    }

    /* Compact metallic artwork */
    .dms-metal-stage {
      --rotate-x: 0deg;
      --rotate-y: 0deg;

      position: relative;
      display: grid;
      place-items: center;
      min-height: 0;
      margin: 24px auto;
      perspective: 1000px;
    }

    .dms-metal-art {
      position: relative;
      width: 100%;
      max-width: 820px;
      padding: 0;
      transform:
        rotateX(var(--rotate-x))
        rotateY(var(--rotate-y));
      transition: transform 500ms ease-out;
      transform-style: preserve-3d;
    }

    .dms-metal-ornament {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 18px;
      margin-bottom: 10px;
      color: #ad8843;
    }

    .dms-metal-ornament::before,
    .dms-metal-ornament::after {
      content: "";
      width: 65px;
      height: 1px;
      background: linear-gradient(
        90deg,
        transparent,
        #c4a66b,
        transparent
      );
    }

    .dms-metal-ornament svg {
      width: 18px;
      height: 18px;
      fill: none;
      stroke: currentColor;
      stroke-width: 1.2;
    }

    .dms-metal-text {
      display: block;
      margin: 0;
      font-size: clamp(42px, 6vw, 76px);
      font-weight: 600;
      line-height: 1.05;
      letter-spacing: -0.065em;
      white-space: nowrap;
      color: #a37a32;
    }

    @supports ((background-clip: text) or (-webkit-background-clip: text)) {
      .dms-metal-text {
        background-image: linear-gradient(
          112deg,
          #594018 0%,
          #a98037 9%,
          #e9cd87 17%,
          #fff8da 22%,
          #b48b40 28%,
          #73501e 34%,
          #e6c779 43%,
          #fffbea 49%,
          #be944a 56%,
          #69491e 64%,
          #d8b66b 73%,
          #fff4ce 80%,
          #ac8037 89%,
          #594018 100%
        );
        background-size: 260% 100%;
        background-position: 45% 50%;
        -webkit-background-clip: text;
        background-clip: text;
        color: transparent;
        -webkit-text-fill-color: transparent;
        animation: dms-metal-flow 9s ease-in-out infinite alternate;
        animation-play-state: paused;
      }
    }

    .dms-golden-panel.is-visible .dms-metal-text {
      animation-play-state: running;
    }

    .dms-metal-country {
      display: block;
      margin-top: 10px;
      padding-left: 0.42em;
      font-size: 12px;
      font-weight: 500;
      line-height: 1.5;
      letter-spacing: 0.42em;
      color: #9a7b42;
    }

    .dms-metal-rule {
      width: 110px;
      height: 1px;
      margin: 12px auto 0;
      background: linear-gradient(
        90deg,
        transparent,
        #b79756,
        transparent
      );
    }

    .dms-golden-services {
      max-width: 490px;
      margin: 0 auto;
      padding: 0;
      list-style: none;
      border-top: 1px solid #ded9ce;
    }

    .dms-golden-services li {
      padding: 10px 10px;
      border-bottom: 1px solid #ded9ce;
      font-size: 14px;
      font-weight: 400;
      line-height: 20px;
      letter-spacing: -0.3px;
      color: #514e47;
    }

    .dms-golden-cta {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 7px;
      min-height: 44px;
      margin-top: 16px;
      padding: 10px 2px;
      color: #256344;
      font-size: 16px;
      font-weight: 500;
      line-height: 19px;
      letter-spacing: -0.48px;
      text-decoration: none;
    }

    .dms-golden-cta span {
      text-decoration: underline;
      text-underline-offset: 5px;
      text-decoration-color: #a5b8a8;
    }

    .dms-golden-cta svg {
      width: 16px;
      height: 16px;
      flex: 0 0 16px;
      fill: none;
      stroke: currentColor;
      stroke-width: 1.6;
      stroke-linecap: round;
      stroke-linejoin: round;
      transition: transform 200ms ease;
    }

    .dms-golden-cta:focus-visible {
      outline: 2px solid #256344;
      outline-offset: 5px;
      border-radius: 3px;
    }

    @media (hover: hover) {
      .dms-golden-cta:hover svg {
        transform: translateX(4px);
      }
    }

    @keyframes dms-metal-flow {
      from {
        background-position: 0% 50%;
      }
      to {
        background-position: 100% 50%;
      }
    }

    /* Compact mobile layout */
    @media (max-width: 700px) {
      .dms-golden-section {
        padding: 16px;
      }

      .dms-golden-panel {
        padding: 28px 16px 20px;
        border-radius: 16px;
      }

      .dms-golden-heading {
        font-size: 26px;
        letter-spacing: -0.8px;
      }

      .dms-golden-heading br {
        display: none;
      }

      .dms-golden-description {
        margin-top: 10px;
        font-size: 14px;
        line-height: 21px;
      }

      .dms-metal-stage {
        margin: 16px auto;
      }

      .dms-metal-text {
        font-size: clamp(30px, 8.5vw, 52px);
      }

      .dms-metal-country {
        margin-top: 8px;
        font-size: 10px;
      }

      .dms-metal-rule {
        margin-top: 10px;
      }

      .dms-golden-services li {
        padding: 8px 0;
        font-size: 12px;
        line-height: 18px;
      }

      .dms-golden-cta {
        margin-top: 12px;
        font-size: 14px;
      }
    }

    @media (prefers-reduced-motion: reduce) {
      .dms-metal-text {
        animation: none;
        background-position: 45% 50%;
      }

      .dms-metal-art {
        transform: none;
        transition: none;
      }

      .dms-golden-cta svg {
        transition: none;
      }
    }
`;

const goldenHtml = `
  <!-- BAHRAIN GOLDEN VISA SECTION -->
  <section
    class="dms-golden-section"
    aria-labelledby="dms-golden-heading"
  >
    <div class="dms-golden-panel">
      <header>
        <p class="dms-golden-eyebrow">Bahrain Golden Visa</p>

        <h2 class="dms-golden-heading" id="dms-golden-heading">
          Your next chapter in Bahrain,<br>
          with expert guidance.
        </h2>

        <p class="dms-golden-description">
          Personalised support for your Golden Visa journey,
          from document preparation to application assistance.
        </p>
      </header>

      <div class="dms-metal-stage" aria-hidden="true">
        <div class="dms-metal-art">
          <div class="dms-metal-ornament">
            <svg viewBox="0 0 32 32">
              <path d="M16 2 20 12 30 16 20 20 16 30 12 20 2 16 12 12Z"/>
              <path d="M16 9v14M9 16h14"/>
            </svg>
          </div>

          <span class="dms-metal-text">GOLDEN VISA</span>
          <span class="dms-metal-country">BAHRAIN</span>
          <div class="dms-metal-rule"></div>
        </div>
      </div>

      <ul class="dms-golden-services">
        <li>Guidance on eligibility and application requirements</li>
        <li>Document preparation and application assistance</li>
        <li>Support with follow-ups throughout the process</li>
      </ul>

      <!-- Enquiry link -->
      <a class="dms-golden-cta" href="#contact">
        <span>Enquire about Bahrain Golden Visa</span>
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="m9 5 7 7-7 7"/>
        </svg>
      </a>
    </div>
  </section>
`;

const goldenScript = `
    /* DMS BAHRAIN GOLDEN VISA INTERACTIVITY */
    (() => {
      const panel = document.querySelector(".dms-golden-panel");
      if (!panel) return;

      const stage = panel.querySelector(".dms-metal-stage");

      const reducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      );

      let inView = true;
      let frame = 0;
      let pointerX = 0;
      let pointerY = 0;

      function updatePlayback() {
        panel.classList.toggle(
          "is-visible",
          inView && !document.hidden && !reducedMotion.matches
        );
      }

      function resetTilt() {
        cancelAnimationFrame(frame);
        frame = 0;

        stage.style.setProperty("--rotate-x", "0deg");
        stage.style.setProperty("--rotate-y", "0deg");
      }

      stage.addEventListener("pointermove", (event) => {
        if (
          event.pointerType !== "mouse" ||
          reducedMotion.matches
        ) return;

        const rect = stage.getBoundingClientRect();

        pointerX = (event.clientX - rect.left) / rect.width - 0.5;
        pointerY = (event.clientY - rect.top) / rect.height - 0.5;

        if (frame) return;

        frame = requestAnimationFrame(() => {
          stage.style.setProperty(
            "--rotate-x",
            \`\${-pointerY * 8}deg\`
          );

          stage.style.setProperty(
            "--rotate-y",
            \`\${pointerX * 10}deg\`
          );

          frame = 0;
        });
      });

      stage.addEventListener("pointerleave", resetTilt);

      if ("IntersectionObserver" in window) {
        const observer = new IntersectionObserver(([entry]) => {
          inView = entry.isIntersecting;
          updatePlayback();
        });

        observer.observe(panel);
      }

      reducedMotion.addEventListener("change", () => {
        resetTilt();
        updatePlayback();
      });

      document.addEventListener("visibilitychange", () => {
        if (document.hidden) resetTilt();
        updatePlayback();
      });

      updatePlayback();
    })();
`;

// Read index.html
let indexContent = fs.readFileSync('g:/DMS WEB/index.html', 'utf8');

// 1. Add CSS to <style>
if (indexContent.includes('</style>')) {
  indexContent = indexContent.replace('</style>', '\n' + goldenCss + '\n</style>');
}

// 2. Insert HTML right after the showcase section (<dialog class="dms-preview">...</dialog>)
const dialogEndIdx = indexContent.indexOf('</dialog>');
if (dialogEndIdx !== -1) {
  const insertPos = dialogEndIdx + '</dialog>'.length;
  const before = indexContent.slice(0, insertPos);
  const after = indexContent.slice(insertPos);
  indexContent = before + '\n\n' + goldenHtml + '\n\n' + after;
  console.log('Inserted Golden Visa section right after showcase section dialog');
} else {
  // fallback after dms-section
  const secIdx = indexContent.indexOf('class="dms-section"');
  if (secIdx !== -1) {
    const endSec = indexContent.indexOf('</section>', secIdx) + 10;
    const before = indexContent.slice(0, endSec);
    const after = indexContent.slice(endSec);
    indexContent = before + '\n\n' + goldenHtml + '\n\n' + after;
    console.log('Inserted Golden Visa section right after dms-section');
  }
}

// 3. Add script before </body>
indexContent = indexContent.replace('</body>', '<script>' + goldenScript + '</script>\n</body>');

fs.writeFileSync('g:/DMS WEB/index.html', indexContent);
console.log('Successfully updated index.html with Golden Visa section');

// 4. Generate Elementor Option B Templates
const elementorDir = 'g:/DMS WEB/elementor-templates';
const standaloneHtml = '<style>' + goldenCss + '</style>\n' + goldenHtml + '\n<script>' + goldenScript + '</script>';

fs.writeFileSync(path.join(elementorDir, '06-golden-visa.html'), standaloneHtml);

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

fs.writeFileSync(path.join(elementorDir, '06-golden-visa.json'), createSectionJson('DMS - Bahrain Golden Visa Section', standaloneHtml));
console.log('Saved 06-golden-visa.json and 06-golden-visa.html');
