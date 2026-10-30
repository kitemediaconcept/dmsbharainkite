const fs = require('fs');

let content = fs.readFileSync('g:/DMS WEB/index.html', 'utf8');

// 1. Remove the standalone inner scroll from .dms-gold-stack so it scrolls with the main page
// Replace .dms-gold-stack CSS to use normal document-flow sticky scrolling
const oldStackCssPattern = /\.dms-gold-stack\s*\{\s*--card-bg:\s*#f8f6f2;[\s\S]*?scrollbar-color:\s*#d9d4ca\s*transparent;\s*\}/;

const newStackCss = `.dms-gold-stack {
      --card-bg: #f8f6f2;
      --radius: 28px;
      --stack-top: 90px;
      --stack-step: 22px;
      --card-gap: 120px;

      position: relative;
      width: 100%;
      margin: 40px auto 100px;
      background: transparent;
      color: #24251f;

      font-family: Inter, "Inter Placeholder", sans-serif;
      font-size: 16px;
      font-weight: 500;
      line-height: 19px;
      letter-spacing: -0.48px;
    }`;

if (oldStackCssPattern.test(content)) {
  content = content.replace(oldStackCssPattern, newStackCss);
  console.log('Replaced .dms-gold-stack CSS definition to page-level sticky');
} else {
  console.log('Pattern not found, will adjust directly');
}

// Also adjust .dgs-slot sticky top and end spacing
content = content.replace(
  'top: calc(var(--stack-top) + var(--i) * var(--stack-step));',
  'top: calc(var(--stack-top) + var(--i) * var(--stack-step));\n      will-change: transform;'
);

content = content.replace(
  '.dms-gold-stack .dgs-end {\n      height: 260px;\n      pointer-events: none;\n    }',
  '.dms-gold-stack .dgs-end {\n      height: 240px;\n      pointer-events: none;\n    }'
);

// 2. Also enhance card 2 and card 3 so they look great and have real DMS service designs!
const oldCardTwoThree = `    <!-- SECOND CARD: ADD YOUR DESIGN HERE -->
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
      </div>`;

const newCardTwoThree = `    <!-- SECOND CARD: DOCUMENT ATTESTATION SERVICES (FULL RIGHT IMAGE WITH LEFT GRADIENT) -->
      <div class="dgs-slot" style="--i: 1;">
        <article class="dgs-card dgs-card-attestation">
          <div class="dgs-attestation-grid">
            <div class="dgs-attestation-copy">
              <span class="dgs-eyebrow">LEGALIZATION &amp; AUTHENTICATION</span>
              <h2 class="dgs-heading">
                Document Attestation.<br>
                Certified &amp; Approved.
              </h2>
              <p class="dgs-description">
                Comprehensive document legalization, MOFA certification, embassy attestation, and certified translation services with priority clearance.
              </p>
              <ul class="dgs-benefits">
                <li>MOFA &amp; Ministry legalization</li>
                <li>Embassy &amp; consular attestation</li>
                <li>Certified Arabic &amp; legal translation</li>
              </ul>
              <a class="dgs-link" href="#contact">
                Explore Document Attestation Services
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M5 12h14m-6-6 6 6-6 6"/>
                </svg>
              </a>
            </div>

            <div class="dgs-attestation-visual">
              <div class="dgs-attestation-scrim" aria-hidden="true"></div>
              <img
                class="dgs-attestation-img"
                src="assets/Stamped paper with purple seals.png"
                alt="Official Embassy of Bahrain stamp seal and attestation document"
                loading="lazy"
              >
              <span class="dgs-attestation-caption">Bahrain Ministry &amp; Embassy Attestation</span>
            </div>
          </div>
        </article>
      </div>

      <!-- THIRD CARD: COMMERCIAL REGISTRATION & CORPORATE SETUP -->
      <div class="dgs-slot" style="--i: 2;">
        <article class="dgs-card">
          <div class="dgs-golden-layout">
            <div class="dgs-copy">
              <span class="dgs-eyebrow">BUSINESS SETUP &amp; LICENSING</span>
              <h2 class="dgs-heading">
                Turnkey Entity Setup.<br>
                100% Foreign Ownership.
              </h2>
              <p class="dgs-description">
                Fast-track commercial registration (CR), ministry approvals, corporate bank accounts, and regulatory compliance since 1984.
              </p>
              <ul class="dgs-benefits">
                <li>MOIC commercial registration</li>
                <li>Corporate structuring (W.L.L. &amp; Branches)</li>
                <li>End-to-end ministry clearing</li>
              </ul>
              <a class="dgs-link" href="#contact">
                Explore Corporate Setup
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M5 12h14m-6-6 6 6-6 6"/>
                </svg>
              </a>
            </div>
            <div class="dgs-visual">
              <div class="dgs-reflective">
                <div class="dgs-metal" style="background: linear-gradient(120deg, #1f2d3d 0%, #2e4359 28%, #4a6785 52%, #2c3e53 78%, #162230 100%); color: #f0f4f8;">
                  <div class="dgs-metal-top">
                    <span class="dgs-brand" style="color: #fff;">DMS.</span>
                    <span class="dgs-country" style="color: #9cb9d8;">CORPORATE SETUP</span>
                  </div>
                  <div class="dgs-emblem" aria-hidden="true">
                    <svg viewBox="0 0 24 24" style="stroke: #bdd3eb;">
                      <rect x="5" y="5" width="14" height="16" rx="1.5"/>
                      <path d="M9 5V3h6v2M9 9h1m4 0h1 M9 13h1m4 0h1M10 21v-4h4v4"/>
                    </svg>
                  </div>
                  <div class="dgs-metal-bottom">
                    <div>
                      <span class="dgs-metal-label" style="color: #a8caee;">COMMERCIAL REGISTRATION</span>
                      <h3 style="color: #fff;">Entity Formation</h3>
                      <p style="color: #d1e2f5;">MOIC Sijilat Advisory</p>
                    </div>
                    <svg class="dgs-sparkle" viewBox="0 0 32 32" aria-hidden="true" style="stroke: #c8e0f8;">
                      <path d="M16 3c0 9-4 13-13 13 9 0 13 4 13 13 0-9 4-13 13-13 -9 0-13-4-13-13Z"/>
                    </svg>
                  </div>
                </div>
              </div>
              <span class="dgs-caption">Bahrain Commercial Registration &amp; Licensing</span>
            </div>
          </div>
        </article>
      </div>`;

if (content.includes('<!-- SECOND CARD: ADD YOUR DESIGN HERE -->')) {
  content = content.replace(oldCardTwoThree, newCardTwoThree);
  console.log('Populated Cards 2 & 3 with detailed DMS services');
}

// 3. Update the JavaScript updateStack function to track window scroll instead of inner container scroll!
const oldScriptFunction = `      function updateStack() {
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
      }`;

const newScriptFunction = `      function updateStack() {
        stackFrame = 0;
        if (motion.matches) {
          cards.forEach(card => { card.style.transform = ""; });
          return;
        }

        const topOffset = 90;
        const step = 20;

        slots.forEach((slot, index) => {
          const rect = slot.getBoundingClientRect();
          const targetTop = topOffset + index * step;
          const nextSlot = slots[index + 1];
          
          let scale = 1;
          let brightness = 1;
          
          if (nextSlot) {
            const nextRect = nextSlot.getBoundingClientRect();
            const overlap = (targetTop + slot.offsetHeight) - nextRect.top;
            if (overlap > 0) {
              const progress = Math.min(1, Math.max(0, overlap / (slot.offsetHeight || 300)));
              scale = Math.max(0.90, 1 - progress * 0.05);
              brightness = Math.max(0.92, 1 - progress * 0.08);
            }
          }
          
          const card = cards[index];
          if (card) {
            card.style.transform = \`scale(\${scale.toFixed(4)})\`;
            card.style.filter = \`brightness(\${brightness.toFixed(3)})\`;
          }
        });
      }`;

content = content.replace(oldScriptFunction, newScriptFunction);

// Ensure window scroll is hooked
content = content.replace('window.addEventListener("resize", scheduleStack, { passive: true });', 'window.addEventListener("resize", scheduleStack, { passive: true });\n      window.addEventListener("scroll", scheduleStack, { passive: true });');

fs.writeFileSync('g:/DMS WEB/index.html', content);
console.log('Successfully updated index.html for page-level scroll stack!');
