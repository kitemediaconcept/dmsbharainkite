const fs = require('fs');
const path = require('path');

const stackCss = `
    /* ==========================================================================
       DMS GOLDEN STACK CARDS COMPONENT
       ========================================================================== */
    .dms-gold-stack,
    .dms-gold-stack * {
      box-sizing: border-box;
    }

    .dms-gold-stack {
      --card-bg: #f8f6f2;
      --radius: 28px;
      --stack-top: 28px;
      --stack-step: 18px;
      --card-gap: 85px;

      position: relative;
      width: 100%;
      height: 600px;
      max-height: 88svh;
      overflow-x: hidden;
      overflow-y: auto;
      background: transparent;
      color: #24251f;

      font-family: Inter, "Inter Placeholder", sans-serif;
      font-size: 16px;
      font-weight: 500;
      line-height: 19px;
      letter-spacing: -0.48px;

      scrollbar-width: thin;
      scrollbar-color: #d9d4ca transparent;
    }

    .dms-gold-stack:focus-visible {
      outline: 2px solid #a69b83;
      outline-offset: 4px;
    }

    .dms-gold-stack::-webkit-scrollbar {
      width: 5px;
    }

    .dms-gold-stack::-webkit-scrollbar-thumb {
      border-radius: 10px;
      background: #d9d4ca;
    }

    .dms-gold-stack .dgs-inner {
      position: relative;
      max-width: 1200px;
      margin: 0 auto;
      padding: var(--stack-top) 24px 0;
    }

    .dms-gold-stack .dgs-slot {
      position: sticky;
      top: calc(var(--stack-top) + var(--i) * var(--stack-step));
      z-index: calc(var(--i) + 1);
    }

    .dms-gold-stack .dgs-slot + .dgs-slot {
      margin-top: var(--card-gap);
    }

    .dms-gold-stack .dgs-card {
      position: relative;
      width: 100%;
      min-height: 390px;
      padding: clamp(28px, 4vw, 44px);
      border: 0;
      border-radius: var(--radius);
      background: var(--card-bg);
      box-shadow:
        0 3px 10px rgb(65 53 32 / 3%),
        0 12px 30px rgb(65 53 32 / 5%);
      transform-origin: center top;
    }

    .dms-gold-stack .dgs-end {
      height: 260px;
      pointer-events: none;
    }

    /* FIRST CARD CONTENT */
    .dms-gold-stack .dgs-golden-layout {
      display: grid;
      grid-template-columns: minmax(0, 1.1fr) minmax(0, 1fr);
      align-items: center;
      gap: clamp(24px, 4vw, 55px);
    }

    .dms-gold-stack .dgs-copy,
    .dms-gold-stack .dgs-visual {
      min-width: 0;
    }

    .dms-gold-stack .dgs-eyebrow {
      display: block;
      margin-bottom: 14px;
      color: #8a7955;
      font-size: 10px;
      font-weight: 500;
      line-height: 16px;
      letter-spacing: 1.6px;
    }

    .dms-gold-stack .dgs-heading {
      margin: 0 0 15px;
      color: #24251f;
      font-family: inherit;
      font-size: clamp(28px, 3vw, 40px);
      font-weight: 400;
      line-height: 1.15;
      letter-spacing: -1.3px;
    }

    .dms-gold-stack .dgs-description {
      max-width: 430px;
      margin: 0;
      color: #77796e;
      font-size: 14px;
      font-weight: 400;
      line-height: 23px;
      letter-spacing: -0.2px;
    }

    .dms-gold-stack .dgs-benefits {
      display: flex;
      flex-wrap: wrap;
      gap: 8px 15px;
      margin: 20px 0 0;
      padding: 0;
      list-style: none;
    }

    .dms-gold-stack .dgs-benefits li {
      display: inline-flex;
      align-items: center;
      gap: 7px;
      margin: 0;
      padding: 0;
      color: #777969;
      font-size: 10px;
      font-weight: 400;
      line-height: 17px;
      letter-spacing: 0;
    }

    .dms-gold-stack .dgs-benefits li::before {
      content: "";
      width: 4px;
      height: 4px;
      flex: 0 0 4px;
      border-radius: 50%;
      background: #a38b56;
    }

    .dms-gold-stack .dgs-link {
      display: inline-flex;
      align-items: center;
      gap: 10px;
      min-height: 44px;
      margin-top: 16px;
      color: #28543c;
      font-family: inherit;
      font-size: 13px;
      font-weight: 500;
      line-height: 20px;
      letter-spacing: -0.3px;
      text-decoration: underline;
      text-decoration-color: #b8c2b3;
      text-underline-offset: 5px;
    }

    .dms-gold-stack .dgs-link svg {
      width: 16px;
      height: 16px;
      flex: 0 0 16px;
      fill: none;
      stroke: currentColor;
      stroke-width: 1.5;
      stroke-linecap: round;
      stroke-linejoin: round;
      transition: transform 200ms ease;
    }

    .dms-gold-stack .dgs-link:hover svg {
      transform: translateX(3px);
    }

    .dms-gold-stack .dgs-link:focus-visible {
      outline: 2px solid #28543c;
      outline-offset: 5px;
    }

    /* REFLECTIVE GOLD VISUAL */
    .dms-gold-stack .dgs-visual {
      text-align: center;
    }

    .dms-gold-stack .dgs-reflective {
      width: 100%;
      max-width: 365px;
      margin: 0 auto;
      perspective: 900px;
    }

    .dms-gold-stack .dgs-metal {
      --rx: 0deg;
      --ry: 0deg;
      --gx: 50%;
      --gy: 30%;

      position: relative;
      display: flex;
      flex-direction: column;
      min-height: 245px;
      padding: 24px;
      overflow: hidden;
      isolation: isolate;

      border: 0;
      border-radius: 24px;
      color: #4b391b;

      background: linear-gradient(
        120deg,
        #ae8746 0%,
        #e6ce91 18%,
        #fbefc9 33%,
        #cfad67 47%,
        #f6e8bb 62%,
        #b48c48 79%,
        #e6ce95 100%
      );
      background-size: 240% 240%;

      box-shadow: 0 15px 30px -16px rgb(97 70 20 / 30%);
      transform: rotateX(var(--rx)) rotateY(var(--ry));
      transition: transform 350ms cubic-bezier(.2,.7,.3,1);

      animation: dgs-metal-flow 10s ease-in-out infinite alternate;
      animation-play-state: paused;
    }

    .dms-gold-stack .dgs-metal::before {
      content: "";
      position: absolute;
      inset: 0;
      z-index: 0;
      pointer-events: none;
      background: radial-gradient(
        circle at var(--gx) var(--gy),
        rgb(255 255 245 / 65%),
        rgb(255 255 245 / 12%) 30%,
        transparent 65%
      );
    }

    .dms-gold-stack .dgs-metal::after {
      content: "";
      position: absolute;
      inset: -70%;
      z-index: 0;
      pointer-events: none;

      background: linear-gradient(
        110deg,
        transparent 36%,
        rgb(255 255 255 / 6%) 43%,
        rgb(255 255 245 / 50%) 50%,
        rgb(255 255 255 / 6%) 57%,
        transparent 64%
      );

      animation: dgs-shine 8s ease-in-out infinite;
      animation-play-state: paused;
    }

    .dms-gold-stack.dgs-motion .dgs-metal,
    .dms-gold-stack.dgs-motion .dgs-metal::after {
      animation-play-state: running;
    }

    .dms-gold-stack .dgs-metal-top,
    .dms-gold-stack .dgs-emblem,
    .dms-gold-stack .dgs-metal-bottom {
      position: relative;
      z-index: 1;
    }

    .dms-gold-stack .dgs-metal-top {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 15px;
    }

    .dms-gold-stack .dgs-brand {
      font-size: 22px;
      font-weight: 600;
      line-height: 26px;
      letter-spacing: -1px;
    }

    .dms-gold-stack .dgs-country {
      font-size: 9px;
      font-weight: 500;
      line-height: 16px;
      letter-spacing: 2px;
    }

    .dms-gold-stack .dgs-emblem {
      display: grid;
      place-items: center;
      margin: 19px 0;
    }

    .dms-gold-stack .dgs-emblem svg {
      width: 54px;
      height: 54px;
      fill: none;
      stroke: currentColor;
      stroke-width: 1.2;
      stroke-linecap: round;
      stroke-linejoin: round;
      opacity: 0.65;
    }

    .dms-gold-stack .dgs-metal-bottom {
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      gap: 15px;
      margin-top: auto;
      text-align: left;
    }

    .dms-gold-stack .dgs-metal-label {
      display: block;
      margin-bottom: 5px;
      font-size: 7px;
      line-height: 12px;
      letter-spacing: 1.6px;
    }

    .dms-gold-stack .dgs-metal-bottom h3 {
      margin: 0;
      color: #4b391b;
      font-family: inherit;
      font-size: 26px;
      font-weight: 500;
      line-height: 30px;
      letter-spacing: -0.8px;
    }

    .dms-gold-stack .dgs-metal-bottom p {
      margin: 5px 0 0;
      color: #65502c;
      font-size: 10px;
      font-weight: 400;
      line-height: 16px;
      letter-spacing: 0;
    }

    .dms-gold-stack .dgs-sparkle {
      width: 27px;
      height: 27px;
      flex: 0 0 27px;
      fill: none;
      stroke: currentColor;
      stroke-width: 1;
    }

    .dms-gold-stack .dgs-caption {
      display: block;
      margin-top: 14px;
      color: #8a826e;
      font-size: 10px;
      font-weight: 400;
      line-height: 16px;
      letter-spacing: 0.1px;
    }

    /* PLACEHOLDER CARDS */
    .dms-gold-stack .dgs-placeholder {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    .dms-gold-stack .dgs-number {
      display: block;
      margin-bottom: 22px;
      color: #938c80;
      font-size: 11px;
      line-height: 16px;
      letter-spacing: 1.5px;
    }

    @keyframes dgs-metal-flow {
      from { background-position: 0% 30%; }
      to { background-position: 100% 70%; }
    }

    @keyframes dgs-shine {
      0%, 15% {
        transform: translateX(-25%) rotate(-10deg);
        opacity: 0;
      }
      45% {
        opacity: 0.65;
      }
      85%, 100% {
        transform: translateX(25%) rotate(-10deg);
        opacity: 0;
      }
    }

    /* MOBILE */
    @media (max-width: 700px) {
      .dms-gold-stack {
        --radius: 22px;
        --stack-top: 20px;
        --stack-step: 14px;
        --card-gap: 60px;
        height: 620px;
      }

      .dms-gold-stack .dgs-inner {
        padding-inline: 12px;
      }

      .dms-gold-stack .dgs-card {
        min-height: 340px;
        padding: 26px 22px;
      }

      .dms-gold-stack .dgs-golden-layout {
        grid-template-columns: 1fr;
        gap: 22px;
      }

      .dms-gold-stack .dgs-heading {
        font-size: 28px;
        letter-spacing: -0.9px;
      }

      .dms-gold-stack .dgs-description {
        font-size: 13px;
        line-height: 21px;
      }

      .dms-gold-stack .dgs-benefits {
        margin-top: 14px;
        gap: 6px 12px;
      }

      .dms-gold-stack .dgs-link {
        margin-top: 10px;
      }

      .dms-gold-stack .dgs-reflective {
        max-width: 320px;
      }

      .dms-gold-stack .dgs-metal {
        min-height: 210px;
        padding: 20px;
        border-radius: 20px;
      }

      .dms-gold-stack .dgs-emblem {
        margin: 12px 0;
      }

      .dms-gold-stack .dgs-emblem svg {
        width: 42px;
        height: 42px;
      }

      .dms-gold-stack .dgs-caption {
        margin-top: 10px;
      }
    }

    /* Tall content uses normal scrolling to remain fully readable. */
    .dms-gold-stack.dgs-flat .dgs-slot {
      position: relative;
      top: auto;
    }

    .dms-gold-stack.dgs-flat .dgs-card {
      transform: none !important;
    }

    .dms-gold-stack.dgs-flat .dgs-end {
      height: 28px !important;
    }

    @media (prefers-reduced-motion: reduce) {
      .dms-gold-stack *,
      .dms-gold-stack *::before,
      .dms-gold-stack *::after {
        animation: none !important;
        transition: none !important;
      }

      .dms-gold-stack .dgs-slot {
        position: relative;
        top: auto;
      }

      .dms-gold-stack .dgs-card,
      .dms-gold-stack .dgs-metal {
        transform: none !important;
      }

      .dms-gold-stack .dgs-end {
        height: 28px !important;
      }
    }
`;

const stackHtml = `
  <!-- DMS GOLDEN STACK CARDS COMPONENT -->
  <div
    class="dms-gold-stack"
    tabindex="0"
    role="region"
    aria-label="DMS service cards"
  >
    <div class="dgs-inner">

      <!-- FIRST CARD: GOLDEN VISA -->
      <div class="dgs-slot" style="--i: 0;">
        <article class="dgs-card">
          <div class="dgs-golden-layout">

            <div class="dgs-copy">
              <span class="dgs-eyebrow">BAHRAIN GOLDEN VISA</span>

              <h2 class="dgs-heading">
                Your next chapter.<br>
                A place to call home.
              </h2>

              <p class="dgs-description">
                Explore your Bahrain Golden Visa journey with
                personalised guidance, document preparation and
                application assistance from DMS.
              </p>

              <ul class="dgs-benefits">
                <li>Requirements guidance</li>
                <li>Document preparation</li>
                <li>Application assistance</li>
              </ul>

              <a class="dgs-link" href="#contact">
                Explore Golden Visa services
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M5 12h14m-6-6 6 6-6 6"/>
                </svg>
              </a>
            </div>

            <div class="dgs-visual">
              <div class="dgs-reflective">
                <div class="dgs-metal">

                  <div class="dgs-metal-top">
                    <span class="dgs-brand">DMS.</span>
                    <span class="dgs-country">BAHRAIN</span>
                  </div>

                  <div class="dgs-emblem" aria-hidden="true">
                    <svg viewBox="0 0 64 64">
                      <path d="M32 5 54 18v28L32 59 10 46V18Z"/>
                      <path d="M32 13 47 22v20L32 51 17 42V22Z"/>
                      <path d="M24 39V25h7c10 0 10 14 0 14Z"/>
                    </svg>
                  </div>

                  <div class="dgs-metal-bottom">
                    <div>
                      <span class="dgs-metal-label">
                        YOUR NEXT CHAPTER
                      </span>
                      <h3>Golden Visa</h3>
                      <p>Guidance by DMS</p>
                    </div>

                    <svg class="dgs-sparkle"
                      viewBox="0 0 32 32" aria-hidden="true">
                      <path d="M16 3c0 9-4 13-13 13
                        9 0 13 4 13 13 0-9 4-13 13-13
                        -9 0-13-4-13-13Z"/>
                    </svg>
                  </div>

                </div>
              </div>

              <span class="dgs-caption">
                Bahrain Golden Visa services
              </span>
            </div>

          </div>
        </article>
      </div>

      <!-- SECOND CARD: ADD YOUR DESIGN HERE -->
      <div class="dgs-slot" style="--i: 1;">
        <article class="dgs-card dgs-placeholder">
          <div class="dgs-content">
            <span class="dgs-number">02</span>
            <h2 class="dgs-heading">Card Two</h2>
          </div>
        </article>
      </div>

      <!-- THIRD CARD: ADD YOUR DESIGN HERE -->
      <div class="dgs-slot" style="--i: 2;">
        <article class="dgs-card dgs-placeholder">
          <div class="dgs-content">
            <span class="dgs-number">03</span>
            <h2 class="dgs-heading">Card Three</h2>
          </div>
        </article>
      </div>

      <div class="dgs-end" aria-hidden="true"></div>

    </div>
  </div>
`;

const stackScript = `
    /* DMS GOLDEN STACK CARDS INTERACTIVITY */
    (() => {
      const root = document.querySelector(".dms-gold-stack");
      if (!root) return;
      if (root.dataset.initialized === "true") return;

      root.dataset.initialized = "true";

      const slots = [...root.querySelectorAll(".dgs-slot")];
      const cards = slots.map(slot => slot.querySelector(".dgs-card"));
      const end = root.querySelector(".dgs-end");
      const visual = root.querySelector(".dgs-reflective");
      const metal = root.querySelector(".dgs-metal");

      const motion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      );

      let stackFrame = 0;
      let tiltFrame = 0;
      let pointerX = 0.5;
      let pointerY = 0.3;
      let visible = false;

      function updateMotion() {
        root.classList.toggle(
          "dgs-motion",
          visible && !document.hidden && !motion.matches
        );
      }

      function updateStack() {
        stackFrame = 0;

        const styles = getComputedStyle(root);
        const top = parseFloat(
          styles.getPropertyValue("--stack-top")
        ) || 0;
        const step = parseFloat(
          styles.getPropertyValue("--stack-step")
        ) || 0;

        const heights = slots.map(slot => slot.offsetHeight);

        const tooTall = heights.some((height, index) =>
          height + top + index * step > root.clientHeight - 16
        );

        root.classList.toggle("dgs-flat", tooTall);

        if (tooTall || motion.matches) {
          cards.forEach(card => {
            card.style.transform = "";
          });
          return;
        }

        const viewportTop =
          root.getBoundingClientRect().top + root.clientTop;

        const tops = slots.map(slot =>
          slot.getBoundingClientRect().top
        );

        const depths = slots.map(() => 0);

        for (let next = 1; next < slots.length; next++) {
          const previousPin =
            viewportTop + top + (next - 1) * step;

          const start = previousPin + heights[next - 1];
          const distance = Math.max(
            1,
            heights[next - 1] - step
          );

          const progress = Math.min(
            1,
            Math.max(0, (start - tops[next]) / distance)
          );

          for (let previous = 0; previous < next; previous++) {
            depths[previous] += progress;
          }
        }

        cards.forEach((card, index) => {
          const scale = Math.max(
            0.88,
            1 - depths[index] * 0.04
          );

          card.style.transform = \`scale(\${scale.toFixed(4)})\`;
        });

        const last = slots.length - 1;
        const lastPin = top + last * step;

        const tallestStack = Math.max(
          ...heights.map((height, index) => height + index * step)
        );

        const tail = Math.max(
          180,
          root.clientHeight - lastPin - heights[last] + 150,
          tallestStack - last * step - heights[last] + 150
        );

        const tailValue = Math.ceil(tail) + "px";

        if (end && end.style.height !== tailValue) {
          end.style.height = tailValue;
        }
      }

      function scheduleStack() {
        if (!stackFrame) {
          stackFrame = requestAnimationFrame(updateStack);
        }
      }

      function resetTilt() {
        cancelAnimationFrame(tiltFrame);
        tiltFrame = 0;

        if (metal) {
          metal.style.setProperty("--rx", "0deg");
          metal.style.setProperty("--ry", "0deg");
          metal.style.setProperty("--gx", "50%");
          metal.style.setProperty("--gy", "30%");
        }
      }

      if (visual && metal) {
        visual.addEventListener("pointermove", event => {
          if (event.pointerType !== "mouse" || motion.matches) return;

          const rect = visual.getBoundingClientRect();

          pointerX = Math.min(
            1, Math.max(0, (event.clientX - rect.left) / rect.width)
          );
          pointerY = Math.min(
            1, Math.max(0, (event.clientY - rect.top) / rect.height)
          );

          if (tiltFrame) return;

          tiltFrame = requestAnimationFrame(() => {
            tiltFrame = 0;

            metal.style.setProperty(
              "--rx", \`\${(0.5 - pointerY) * 10}deg\`
            );
            metal.style.setProperty(
              "--ry", \`\${(pointerX - 0.5) * 12}deg\`
            );
            metal.style.setProperty("--gx", \`\${pointerX * 100}%\`);
            metal.style.setProperty("--gy", \`\${pointerY * 100}%\`);
          });
        });

        visual.addEventListener("pointerleave", resetTilt);
        visual.addEventListener("pointercancel", resetTilt);
      }

      root.addEventListener("scroll", scheduleStack, { passive: true });
      window.addEventListener("resize", scheduleStack, { passive: true });

      if ("ResizeObserver" in window) {
        const resizeObserver = new ResizeObserver(scheduleStack);
        resizeObserver.observe(root);
        cards.forEach(card => resizeObserver.observe(card));
      }

      if ("IntersectionObserver" in window && visual) {
        const observer = new IntersectionObserver(entries => {
          visible = entries[0].isIntersecting;
          updateMotion();
        }, { threshold: 0.1 });

        observer.observe(visual);
      } else {
        visible = true;
        updateMotion();
      }

      document.addEventListener("visibilitychange", updateMotion);

      motion.addEventListener("change", () => {
        resetTilt();
        updateMotion();
        scheduleStack();
      });

      updateStack();
    })();
`;

// Read index.html
let indexContent = fs.readFileSync('g:/DMS WEB/index.html', 'utf8');

// 1. Add CSS to <style>
if (indexContent.includes('</style>')) {
  indexContent = indexContent.replace('</style>', '\n' + stackCss + '\n</style>');
}

// 2. Insert HTML right after the Golden Visa section
const goldenVisaSecTag = 'class="dms-golden-section"';
const goldenVisaIdx = indexContent.indexOf(goldenVisaSecTag);

if (goldenVisaIdx !== -1) {
  const goldenVisaEnd = indexContent.indexOf('</section>', goldenVisaIdx);
  const insertPos = goldenVisaEnd + '</section>'.length;
  const before = indexContent.slice(0, insertPos);
  const after = indexContent.slice(insertPos);
  indexContent = before + '\n\n' + stackHtml + '\n\n' + after;
  console.log('Inserted Golden Stack section right after Bahrain Golden Visa section');
} else {
  console.error('Could not find Golden Visa section');
  process.exit(1);
}

// 3. Add script before </body>
indexContent = indexContent.replace('</body>', '<script>' + stackScript + '</script>\n</body>');

fs.writeFileSync('g:/DMS WEB/index.html', indexContent);
console.log('Successfully updated index.html with Golden Stack section');

// 4. Generate Elementor Option B Templates
const elementorDir = 'g:/DMS WEB/elementor-templates';
const standaloneHtml = '<style>' + stackCss + '</style>\n' + stackHtml + '\n<script>' + stackScript + '</script>';

fs.writeFileSync(path.join(elementorDir, '06b-golden-stack-cards.html'), standaloneHtml);

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

fs.writeFileSync(path.join(elementorDir, '06b-golden-stack-cards.json'), createSectionJson('DMS - Golden Visa Stack Cards', standaloneHtml));
console.log('Saved 06b-golden-stack-cards.json and 06b-golden-stack-cards.html');
