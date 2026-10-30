const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'index.html');
let content = fs.readFileSync(filePath, 'utf8');

// 1. Update slides array:
// Set slide 2 to have:
//   image: "assets/Stamped paper with purple seals.png",
//   color: "#ffffff",
//   theme: "light",
//   badges: [
//     { icon: "✓", text: "Official Ministry & Embassy Attestation" },
//     { icon: "▤", text: "MOFA Legalization & Consular Authentication" },
//     { icon: "↗", text: "Certified Arabic Translation & Expedited Clearance" }
//   ]

const oldSlidesConfigRegex = /const slides = \[\s*\{[\s\S]*?\}\s*\];/;

const newSlidesConfig = `const slides = [
      {
        title: "Bahrain Ministry Services",
        eyebrow: "DMS BAHRAIN",
        label: "MINISTRY SERVICES",
        image: "assets/ministry.svg",
        color: "#1e3f30",
        theme: "dark",
        badges: [
          { icon: "✓", text: "Clear guidance. Every step." },
          { icon: "▤", text: "Document review and application support" },
          { icon: "↗", text: "Solutions for your next chapter" }
        ]
      },
      {
        title: "Document Attestation",
        eyebrow: "DMS BAHRAIN",
        label: "ATTESTATION",
        image: "assets/Stamped paper with purple seals.png",
        color: "#ffffff",
        theme: "light",
        badges: [
          { icon: "✓", text: "Official Ministry & Embassy Attestation" },
          { icon: "▤", text: "MOFA Legalization & Consular Authentication" },
          { icon: "↗", text: "Certified Translation & Expedited Clearance" }
        ]
      },
      {
        title: "Saudi Visa Assistance",
        eyebrow: "DMS BAHRAIN",
        label: "SAUDI VISA",
        image: "assets/saudi-visa.svg",
        color: "#163428",
        theme: "dark",
        badges: [
          { icon: "✓", text: "Direct Embassy Liaison" },
          { icon: "▤", text: "Business, Family & Transit Visas" },
          { icon: "↗", text: "Priority Expedited Processing" }
        ]
      },
      {
        title: "Self-Sponsorship Residency",
        eyebrow: "DMS BAHRAIN",
        label: "SELF SPONSORSHIP",
        image: "assets/residency.svg",
        color: "#1d3a33",
        theme: "dark",
        badges: [
          { icon: "✓", text: "10-Year Golden Residency Pathways" },
          { icon: "▤", text: "Property Owner & Investor Visas" },
          { icon: "↗", text: "Full Family Sponsorship Support" }
        ]
      },
      {
        title: "Global Visa Assistance",
        eyebrow: "DMS BAHRAIN",
        label: "GLOBAL VISA",
        image: "assets/global-visa.svg",
        color: "#253b2e",
        theme: "dark",
        badges: [
          { icon: "✓", text: "Schengen, UK & US Travel Guidance" },
          { icon: "▤", text: "End-to-End File Preparation" },
          { icon: "↗", text: "High Approval Success Rate" }
        ]
      }
    ];`;

if (oldSlidesConfigRegex.test(content)) {
  content = content.replace(oldSlidesConfigRegex, newSlidesConfig);
  console.log('Replaced slides array configuration!');
} else {
  console.log('Could not find oldSlidesConfigRegex');
}

// 2. Add CSS rules for light-theme slide (white background, crisp glassmorphism cards, dark typography & controls)
const lightThemeCss = `
    /* SLIDE-SPECIFIC THEMES (LIGHT / WHITE BACKGROUND FOR ATTESTATION) */
    .banner[data-theme="light"] {
      background: #ffffff;
      color: #111111;
    }

    .banner[data-theme="light"] .banner-overlay {
      background: linear-gradient(
        to top,
        rgba(255, 255, 255, 0.94) 0%,
        rgba(255, 255, 255, 0.45) 45%,
        rgba(255, 255, 255, 0.05) 100%
      );
    }

    .banner[data-theme="light"] .banner-badge {
      border: 1px solid rgba(0, 0, 0, 0.09);
      background: rgba(255, 255, 255, 0.78);
      backdrop-filter: blur(16px);
      -webkit-backdrop-filter: blur(16px);
      color: #1a291f;
      box-shadow: 0 4px 18px rgba(0, 0, 0, 0.06);
    }

    .banner[data-theme="light"] .badge-icon {
      color: #1e6b48;
    }

    .banner[data-theme="light"] .banner-caption .eyebrow {
      color: #5d6d63;
    }

    .banner[data-theme="light"] .banner-caption h2 {
      color: #073f2c;
      font-weight: 600;
      text-shadow: 0 1px 2px rgba(255, 255, 255, 0.8);
    }

    .banner[data-theme="light"] .control-button {
      border-color: rgba(0, 0, 0, 0.14);
      background: rgba(255, 255, 255, 0.8);
      backdrop-filter: blur(12px);
      -webkit-backdrop-filter: blur(12px);
      color: #111111;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
    }

    .banner[data-theme="light"] .control-button:hover {
      background: #ffffff;
      border-color: rgba(0, 0, 0, 0.3);
    }

    .banner[data-theme="light"] .banner-thumbnails {
      display: none !important; /* Hide bottom row on second card as requested */
    }

    /* Light slide styling */
    .banner-slide.is-light {
      background: #ffffff;
    }

    .banner-slide.is-light > img {
      object-fit: cover;
      object-position: center;
      filter: saturate(1.02);
    }
`;

// Insert lightThemeCss right before /* GLASS CARDS
if (!content.includes('.banner[data-theme="light"]')) {
  content = content.replace('/* GLASS CARDS', lightThemeCss + '\n    /* GLASS CARDS');
  console.log('Added lightThemeCss to stylesheet');
}

// 3. Update the JavaScript loop & showSlide function so it dynamically:
// - sets banner dataset.theme ("light" or "dark")
// - renders dynamic glassmorphism badges per slide
// - toggles slide classes

const oldSlideLoopRegex = /slides\.forEach\(\(slide, index\) => \{[\s\S]*?thumbnails\.appendChild\(button\);\s*\}\);/;

const newSlideLoop = `slides.forEach((slide, index) => {
      const article = document.createElement("article");
      article.className = "banner-slide" + (slide.theme === "light" ? " is-light" : "");
      article.style.setProperty("--slide-color", slide.color);
      article.setAttribute("aria-roledescription", "slide");
      article.setAttribute(
        "aria-label",
        \`\${index + 1} of \${slides.length}: \${slide.title}\`
      );

      const placeholder = document.createElement("div");
      placeholder.className = "image-placeholder";
      placeholder.textContent = \`Add your banner image: \${slide.image}\`;

      const image = document.createElement("img");
      image.alt = slide.title;
      image.decoding = "async";

      image.addEventListener("load", () => {
        placeholder.hidden = true;
      });

      image.addEventListener("error", () => {
        image.hidden = true;
      });

      image.src = slide.image;

      article.append(placeholder, image);
      track.appendChild(article);

      const button = document.createElement("button");
      button.type = "button";
      button.className = "thumbnail";
      button.style.setProperty("--slide-color", slide.color);
      button.setAttribute("aria-label", \`Show \${slide.title}\`);

      const label = document.createElement("span");
      label.className = "thumbnail-label";
      label.textContent = slide.label;

      const picture = document.createElement("span");
      picture.className = "thumbnail-picture";

      const thumbnailImage = document.createElement("img");
      thumbnailImage.alt = "";
      thumbnailImage.addEventListener("error", () => {
        thumbnailImage.hidden = true;
      });
      thumbnailImage.src = slide.image;

      const progress = document.createElement("span");
      progress.className = "thumbnail-progress";
      progress.appendChild(document.createElement("span"));

      picture.appendChild(thumbnailImage);
      button.append(label, picture, progress);

      button.addEventListener("click", () => {
        showSlide(index, true);
      });

      thumbnails.appendChild(button);
    });`;

if (oldSlideLoopRegex.test(content)) {
  content = content.replace(oldSlideLoopRegex, newSlideLoop);
  console.log('Updated slide creation loop');
}

// 4. Update showSlide() function
const oldShowSlideRegex = /function showSlide\(index, announce = false\) \{[\s\S]*?thumbnails\.scrollTo\(\{[\s\S]*?\}\);\s*\}\s*\}/;

const newShowSlide = `function showSlide(index, announce = false) {
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
  content = content.replace(oldShowSlideRegex, newShowSlide);
  console.log('Updated showSlide() implementation');
} else {
  console.log('Could not find oldShowSlideRegex');
}

fs.writeFileSync(filePath, content, 'utf8');
console.log('index.html updated successfully with Attestation slide customizations!');
