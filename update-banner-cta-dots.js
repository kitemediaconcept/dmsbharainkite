const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'index.html');
let content = fs.readFileSync(filePath, 'utf8');

// 1. Update .banner HTML structure:
// A) In .banner-caption, add the CTA button:
//    <div class="banner-caption">
//      <p class="eyebrow">DMS Bahrain</p>
//      <h2>Bahrain Ministry Services</h2>
//      <a class="banner-cta-button" href="#contact">Get started now</a>
//    </div>
//
// B) Add the 5 pagination dots container:
//    <div class="banner-dots" aria-label="Slide navigation"></div>

const oldBannerCaptionHtml = `      <div class="banner-caption">
        <p class="eyebrow">DMS Bahrain</p>
        <h2>Bahrain Ministry Services</h2>
      </div>`;

const newBannerCaptionHtml = `      <div class="banner-caption">
        <p class="eyebrow">DMS Bahrain</p>
        <h2>Bahrain Ministry Services</h2>
        <a class="banner-cta-button" href="#contact">
          <span>Get started now</span>
          <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
            <path d="M5 12h14m-6-6 6 6-6 6"/>
          </svg>
        </a>
      </div>`;

if (content.includes(oldBannerCaptionHtml)) {
  content = content.replace(oldBannerCaptionHtml, newBannerCaptionHtml);
  console.log('Updated banner-caption HTML with CTA button!');
} else {
  console.log('oldBannerCaptionHtml not found directly');
}

const oldBannerThumbnailsHtml = `      <div class="banner-thumbnails" aria-label="Choose a service"></div>`;
const newBannerThumbnailsHtml = `      <div class="banner-thumbnails" aria-label="Choose a service"></div>
      <div class="banner-dots" aria-label="Slide pagination" role="tablist"></div>`;

if (content.includes(oldBannerThumbnailsHtml) && !content.includes('banner-dots')) {
  content = content.replace(oldBannerThumbnailsHtml, newBannerThumbnailsHtml);
  console.log('Added banner-dots container to HTML!');
}

// 2. Add CSS rules:
// - CTA button styling in banner (both dark and light themes)
// - Hide the previous/next arrow circular buttons on slide 2 (.banner[data-theme="light"] .control-button.previous, .banner[data-theme="light"] .control-button.next { display: none !important; })
// - 5 very small gradient gray dots (.banner-dots, .banner-dot)
// - Custom light slide image positioning so text is clean on left and stamp is on right

const newBannerStyles = `
    /* BANNER CTA BUTTON */
    .banner-cta-button {
      display: inline-flex;
      align-items: center;
      gap: 10px;
      margin-top: 20px;
      padding: 12px 24px;
      border-radius: 9999px;
      font-family: var(--font-display);
      font-size: 14px;
      font-weight: 600;
      line-height: 1;
      letter-spacing: -0.2px;
      text-decoration: none;
      white-space: nowrap;
      cursor: pointer;
      box-sizing: border-box;
      background: #ffffff;
      color: #073f2c;
      border: 1px solid rgba(255, 255, 255, 0.4);
      box-shadow: 0 4px 14px rgba(0, 0, 0, 0.22);
      transition: all 180ms cubic-bezier(0.16, 1, 0.3, 1);
    }

    .banner-cta-button svg {
      width: 15px;
      height: 15px;
      fill: none;
      stroke: currentColor;
      stroke-width: 2;
      stroke-linecap: round;
      stroke-linejoin: round;
      transition: transform 180ms ease;
    }

    .banner-cta-button:hover {
      transform: translateY(-1px);
      box-shadow: 0 6px 18px rgba(0, 0, 0, 0.3);
      background: #f7faf8;
    }

    .banner-cta-button:hover svg {
      transform: translateX(3px);
    }

    /* Light Theme (Slide 2) CTA button: DMS Deep Emerald Pill */
    .banner[data-theme="light"] .banner-cta-button {
      background: #073f2c;
      color: #ffffff;
      border: 1px solid #073f2c;
      box-shadow: 0 4px 14px rgba(7, 63, 44, 0.25);
    }

    .banner[data-theme="light"] .banner-cta-button:hover {
      background: #0c573d;
      border-color: #0c573d;
      box-shadow: 0 6px 18px rgba(7, 63, 44, 0.35);
    }

    /* REMOVE ARROWS ON SLIDE 2 AS REQUESTED (Hide previous and next arrows on light slide) */
    .banner[data-theme="light"] .control-button.previous,
    .banner[data-theme="light"] .control-button.next {
      display: none !important;
    }

    /* 5 VERY SMALL GRADIENT GRAY DOTS */
    .banner-dots {
      position: absolute;
      bottom: 22px;
      left: 50%;
      transform: translateX(-50%);
      display: flex;
      align-items: center;
      gap: 7px;
      z-index: 3;
      padding: 6px 12px;
      border-radius: 9999px;
      background: rgba(255, 255, 255, 0.65);
      backdrop-filter: blur(8px);
      -webkit-backdrop-filter: blur(8px);
      border: 1px solid rgba(0, 0, 0, 0.06);
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
    }

    /* On dark theme, slightly tinted background */
    .banner[data-theme="dark"] .banner-dots {
      background: rgba(10, 20, 14, 0.55);
      border-color: rgba(255, 255, 255, 0.12);
    }

    .banner-dot {
      width: 6px;
      height: 6px;
      padding: 0;
      border: 0;
      border-radius: 50%;
      background: linear-gradient(135deg, #d1d5db 0%, #9ca3af 100%); /* gradient gray */
      opacity: 0.55;
      cursor: pointer;
      transition: all 250ms cubic-bezier(0.16, 1, 0.3, 1);
    }

    .banner[data-theme="dark"] .banner-dot {
      background: linear-gradient(135deg, #6b7280 0%, #4b5563 100%);
      opacity: 0.6;
    }

    .banner-dot:hover {
      opacity: 0.85;
      transform: scale(1.2);
    }

    .banner-dot.is-active {
      width: 18px;
      border-radius: 9999px;
      opacity: 1;
      background: linear-gradient(135deg, #4b5563 0%, #1f2937 100%); /* active gradient dark gray */
      box-shadow: 0 1px 4px rgba(0, 0, 0, 0.18);
    }

    .banner[data-theme="light"] .banner-dot.is-active {
      background: linear-gradient(135deg, #374151 0%, #111827 100%);
    }

    .banner[data-theme="dark"] .banner-dot.is-active {
      background: linear-gradient(135deg, #ffffff 0%, #d1d5db 100%);
    }
`;

// Insert newBannerStyles into stylesheet:
if (!content.includes('.banner-cta-button')) {
  content = content.replace('/* GLASS CARDS', newBannerStyles + '\n    /* GLASS CARDS');
  console.log('Added newBannerStyles to CSS');
}

// 3. Update the JavaScript:
// A) In showSlide():
//    - Update CTA button text and link dynamically if desired
//    - Update the 5 dots active state
// B) Generate the 5 dots on initialization and attach click handlers

const oldShowSlideRegex = /function showSlide\(index, announce = false\) \{[\s\S]*?thumbnails\.scrollTo\(\{[\s\S]*?\}\);\s*\}\s*\}/;

const updatedShowSlide = `function showSlide(index, announce = false) {
      currentSlide = (index + slides.length) % slides.length;
      elapsed = 0;

      const currentSlideData = slides[currentSlide];

      // Update banner theme attribute (light for white background on card 2, dark for green)
      banner.setAttribute("data-theme", currentSlideData.theme || "dark");

      track.style.transform = \`translateX(-\${currentSlide * 100}%)\`;
      caption.textContent = currentSlideData.title;

      const captionEyebrow = document.querySelector(".banner-caption .eyebrow");
      if (captionEyebrow && currentSlideData.eyebrow) {
        captionEyebrow.textContent = currentSlideData.eyebrow;
      }

      // Update glassmorphism badges per slide
      const badgesContainer = document.querySelector(".banner-badges");
      if (badgesContainer && currentSlideData.badges) {
        badgesContainer.innerHTML = currentSlideData.badges.map(b => \`
          <div class="banner-badge">
            <span class="badge-icon" aria-hidden="true">\${b.icon}</span>
            <span>\${b.text}</span>
          </div>
        \`).join("");
      }

      // Update 5 dots active state
      const dots = document.querySelectorAll(".banner-dot");
      dots.forEach((dot, idx) => {
        const isActive = idx === currentSlide;
        dot.classList.toggle("is-active", isActive);
        dot.setAttribute("aria-selected", String(isActive));
      });

      [...thumbnails.children].forEach((button, index) => {
        const active = index === currentSlide;

        button.setAttribute("aria-current", String(active));

        button.querySelector(".thumbnail-progress span").style.width = "0%";

        if (track.children[index]) {
          track.children[index].setAttribute(
            "aria-hidden",
            String(!active)
          );
        }
      });

      if (announce) {
        status.textContent = currentSlideData.title;
      }

      // Keep the active thumbnail visible on mobile.
      const activeButton = thumbnails.children[currentSlide];
      if (activeButton) {
        const scrollPosition =
          activeButton.offsetLeft -
          (thumbnails.clientWidth - activeButton.clientWidth) / 2;

        thumbnails.scrollTo({
          left: Math.max(0, scrollPosition),
          behavior: reducedMotion.matches ? "auto" : "smooth"
        });
      }
    }`;

if (oldShowSlideRegex.test(content)) {
  content = content.replace(oldShowSlideRegex, updatedShowSlide);
  console.log('Updated showSlide() with dots support!');
}

// Also generate dots dynamically on script init right after thumbnails.appendChild(button)
const oldInitLoopEnd = `thumbnails.appendChild(button);
    });`;

const newInitLoopEnd = `thumbnails.appendChild(button);
    });

    // Generate 5 small gradient gray pagination dots
    const dotsContainer = document.querySelector(".banner-dots");
    if (dotsContainer) {
      dotsContainer.innerHTML = "";
      slides.forEach((slide, idx) => {
        const dot = document.createElement("button");
        dot.type = "button";
        dot.className = "banner-dot" + (idx === 0 ? " is-active" : "");
        dot.setAttribute("role", "tab");
        dot.setAttribute("aria-label", \`Go to slide \${idx + 1}: \${slide.title}\`);
        dot.setAttribute("aria-selected", String(idx === 0));
        dot.addEventListener("click", () => {
          showSlide(idx, true);
        });
        dotsContainer.appendChild(dot);
      });
    }`;

if (content.includes(oldInitLoopEnd) && !content.includes('dotsContainer.appendChild(dot)')) {
  content = content.replace(oldInitLoopEnd, newInitLoopEnd);
  console.log('Added dots generation to slider initialization!');
}

fs.writeFileSync(filePath, content, 'utf8');
console.log('Successfully saved changes to index.html!');
