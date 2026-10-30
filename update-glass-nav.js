const fs = require('fs');
const path = require('path');

let content = fs.readFileSync('g:/DMS WEB/index.html', 'utf8');

// 1. Replace the CSS for navbar:
// In <style>, find from /* ========================================================================== NAVBAR CONTAINER & STICKY GLASSMORPHISM
// down to .hero-intro
const navCssStart = content.indexOf('/* ==========================================================================\n       NAVBAR CONTAINER & STICKY GLASSMORPHISM');
const heroIntroStart = content.indexOf('/* ==========================================================================\n       HERO HEADING SECTION');

const newNavCss = `/* ==========================================================================
       DMS MODERN GLASSMORPHISM MEGA-NAVBAR WITH DROPDOWNS
       ========================================================================== */
    .dms-glass-nav,
    .dms-glass-nav * {
      box-sizing: border-box;
    }

    .dms-nav-outer-container {
      position: sticky;
      top: 0;
      z-index: 1000;
      width: 100%;
    }

    .dms-glass-nav {
      position: relative;
      z-index: 1000;
      width: 100%;
      color: #222;
      font-family: Inter, "Inter Placeholder", sans-serif;
      font-size: 13px;
      font-weight: 500;
      line-height: 19px;
      letter-spacing: -0.35px;
      transition: all 300ms ease;
    }

    /* Separate glass layer lets the dropdown blur its own background. */
    .dms-glass-nav .dg-bar-glass {
      position: absolute;
      inset: 0;
      z-index: -1;
      background: rgba(255, 255, 255, 0.88);
      -webkit-backdrop-filter: blur(22px) saturate(150%);
      backdrop-filter: blur(22px) saturate(150%);
      border-bottom: 1px solid rgba(0, 0, 0, 0.06);
      box-shadow:
        0 2px 7px rgba(29, 48, 34, 0.035),
        0 8px 25px rgba(29, 48, 34, 0.04);
      pointer-events: none;
      transition: all 300ms ease;
    }

    .dms-glass-nav.is-scrolled .dg-bar-glass {
      background: rgba(255, 255, 255, 0.94);
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
    }

    .dms-glass-nav [hidden] {
      display: none !important;
    }

    .dms-glass-nav .dg-inner {
      position: relative;
      max-width: 1368px;
      margin: 0 auto;
      padding: 0 24px;
    }

    .dms-glass-nav .dg-bar {
      display: flex;
      align-items: center;
      gap: 34px;
      min-height: 64px;
    }

    .dms-glass-nav a {
      color: inherit;
      text-decoration: none;
    }

    /* Override Elementor/theme button colours */
    .dms-glass-nav button,
    .dms-glass-nav button:hover,
    .dms-glass-nav button:focus,
    .dms-glass-nav button:active {
      appearance: none;
      margin: 0;
      border: 0 !important;
      background: transparent !important;
      background-image: none !important;
      box-shadow: none !important;
      color: #626b61 !important;
      font-family: inherit;
      font-weight: 500;
      text-transform: none;
      cursor: pointer;
    }

    .dms-glass-nav a:focus-visible,
    .dms-glass-nav button:focus-visible {
      outline: 2px solid #315e43 !important;
      outline-offset: 4px;
    }

    /* Logo */
    .dms-glass-nav .dg-logo {
      display: inline-flex;
      align-items: center;
      flex-shrink: 0;
    }

    .dms-glass-nav .dg-logo img {
      display: block;
      width: 135px;
      height: 38px;
      object-fit: contain;
      object-position: left center;
      transition: transform 200ms ease;
    }

    .dms-glass-nav .dg-logo:hover img {
      transform: scale(1.02);
    }

    .dms-glass-nav .dg-wordmark {
      color: #254b36;
      font-size: 26px;
      font-weight: 600;
      line-height: 36px;
      letter-spacing: -1.2px;
    }

    /* Main navigation */
    .dms-glass-nav .dg-navigation {
      display: flex;
      align-items: center;
      flex: 1;
      gap: 20px;
      min-width: 0;
    }

    .dms-glass-nav .dg-links {
      display: flex;
      align-items: center;
      gap: 7px;
    }

    .dms-glass-nav .dg-link,
    .dms-glass-nav .dg-trigger {
      display: inline-flex;
      align-items: center;
      gap: 7px;
      min-height: 42px;
      padding: 10px 11px;
      border-radius: 11px;
      color: #626b61;
      font-size: 13px;
      line-height: 19px;
      letter-spacing: -0.35px;
      white-space: nowrap;
      transition:
        color 180ms ease,
        background-color 180ms ease;
    }

    .dms-glass-nav .dg-link:hover,
    .dms-glass-nav .dg-trigger:hover,
    .dms-glass-nav .dg-trigger[aria-expanded="true"] {
      background: rgba(228, 237, 224, 0.55) !important;
      color: #254b36 !important;
    }

    .dms-glass-nav .dg-chevron {
      width: 12px;
      height: 12px;
      fill: none;
      stroke: currentColor;
      stroke-width: 1.5;
      transition: transform 200ms ease;
    }

    .dms-glass-nav .dg-trigger[aria-expanded="true"] .dg-chevron {
      transform: rotate(180deg);
    }

    .dms-glass-nav .dg-actions {
      display: flex;
      align-items: center;
      gap: 18px;
      margin-left: auto;
    }

    .dms-glass-nav .dg-contact {
      display: inline-flex;
      align-items: center;
      min-height: 44px;
      color: #30372e;
      white-space: nowrap;
      transition: color 180ms ease;
    }

    .dms-glass-nav .dg-contact:hover {
      color: #254b36;
    }

    .dms-glass-nav .dg-cta {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      min-height: 38px;
      padding: 9px 20px;
      border-radius: 9999px;
      background: #073f2c;
      color: #fff !important;
      font-size: 13px;
      font-weight: 500;
      line-height: 18px;
      white-space: nowrap;
      box-shadow: 0 3px 9px rgba(7, 63, 44, 0.18);
      transition: background-color 180ms ease, transform 180ms ease;
    }

    .dms-glass-nav .dg-cta:hover {
      background: #0b4e37 !important;
      color: #fff !important;
      transform: translateY(-1px);
    }

    /* Glass mega menu */
    .dms-glass-nav .dg-panel {
      position: absolute;
      top: 100%;
      left: 0;
      right: 0;
      z-index: 2;
      max-height: calc(100dvh - 100px);
      overflow-y: auto;
      padding: 30px 26px 24px;

      background: rgba(250, 252, 248, 0.95);
      -webkit-backdrop-filter: blur(28px) saturate(155%);
      backdrop-filter: blur(28px) saturate(155%);

      border: 1px solid rgba(255, 255, 255, 0.75);
      border-top: 0;
      border-radius: 0 0 20px 20px;

      box-shadow:
        0 12px 24px rgba(32, 50, 35, 0.045),
        0 28px 60px -28px rgba(32, 50, 35, 0.18);
    }

    .dms-glass-nav .dg-grid {
      display: grid;
      grid-template-columns: repeat(3, minmax(0, 1fr));
      gap: 42px;
    }

    .dms-glass-nav .dg-column {
      min-width: 0;
    }

    .dms-glass-nav .dg-heading {
      margin: 0 0 15px;
      color: #7b8474;
      font-family: inherit;
      font-size: 9px;
      font-weight: 500;
      line-height: 16px;
      letter-spacing: 1px;
      text-transform: uppercase;
    }

    .dms-glass-nav .dg-item {
      display: flex;
      align-items: flex-start;
      gap: 12px;
      margin: 0 -8px 5px;
      padding: 10px 8px;
      border-radius: 12px;
      transition:
        background-color 180ms ease,
        box-shadow 180ms ease;
    }

    .dms-glass-nav .dg-item:hover {
      background: rgba(255, 255, 255, 0.85);
      box-shadow: 0 4px 14px rgba(32, 50, 35, 0.035);
    }

    .dms-glass-nav .dg-icon {
      display: grid;
      place-items: center;
      width: 37px;
      height: 37px;
      flex: 0 0 37px;
      border-radius: 10px;
      background: rgba(229, 236, 224, 0.65);
      color: #29533a;
      box-shadow:
        inset 0 1px 0 rgba(255, 255, 255, 0.85),
        0 2px 6px rgba(35, 60, 40, 0.035);
    }

    .dms-glass-nav .dg-icon svg {
      display: block;
      width: 19px;
      height: 19px;
      fill: none;
      stroke: currentColor;
      stroke-width: 1.45;
      stroke-linecap: round;
      stroke-linejoin: round;
    }

    .dms-glass-nav .dg-item-copy {
      min-width: 0;
    }

    .dms-glass-nav .dg-item-title {
      display: block;
      color: #22291f;
      font-size: 13px;
      font-weight: 500;
      line-height: 19px;
      letter-spacing: -0.3px;
    }

    .dms-glass-nav .dg-item-description {
      display: block;
      margin-top: 3px;
      color: #7a8273;
      font-size: 11px;
      font-weight: 400;
      line-height: 17px;
      letter-spacing: -0.1px;
    }

    .dms-glass-nav .dg-panel-bottom {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 15px;
      margin-top: 22px;
      padding-top: 14px;
      border-top: 1px solid rgba(97, 120, 86, 0.12);
      color: #7e8875;
      font-size: 11px;
      font-weight: 400;
      line-height: 18px;
    }

    .dms-glass-nav .dg-panel-bottom a {
      display: inline-flex;
      align-items: center;
      min-height: 32px;
      color: #28543c;
      font-size: 12px;
      font-weight: 500;
    }

    .dms-glass-nav .dg-panel-bottom a:hover {
      text-decoration: underline;
      text-underline-offset: 4px;
    }

    /* Mobile toggle */
    .dms-glass-nav .dg-mobile-toggle {
      display: none;
      align-items: center;
      justify-content: center;
      width: 44px;
      height: 44px;
      padding: 10px;
      margin-left: auto;
    }

    .dms-glass-nav .dg-mobile-toggle svg {
      width: 22px;
      height: 22px;
      fill: none;
      stroke: currentColor;
      stroke-width: 1.5;
      stroke-linecap: round;
    }

    @media (max-width: 1150px) {
      .dms-glass-nav .dg-bar {
        gap: 22px;
      }

      .dms-glass-nav .dg-links {
        gap: 2px;
      }

      .dms-glass-nav .dg-link,
      .dms-glass-nav .dg-trigger {
        padding-inline: 8px;
      }

      .dms-glass-nav .dg-actions {
        gap: 12px;
      }
    }

    @media (max-width: 1000px) {
      .dms-glass-nav .dg-inner {
        padding-inline: 18px;
      }

      .dms-glass-nav .dg-bar {
        min-height: 62px;
        flex-wrap: wrap;
        gap: 0;
      }

      .dms-glass-nav .dg-mobile-toggle {
        display: inline-flex;
      }

      .dms-glass-nav .dg-navigation {
        display: none;
        flex: 0 0 100%;
        flex-direction: column;
        align-items: stretch;
        gap: 0;
        padding: 8px 2px 20px;
        max-height: calc(100dvh - 90px);
        overflow-y: auto;
      }

      .dms-glass-nav.dg-mobile-open .dg-navigation {
        display: flex;
      }

      .dms-glass-nav .dg-links {
        flex-direction: column;
        align-items: stretch;
        gap: 3px;
      }

      .dms-glass-nav .dg-link,
      .dms-glass-nav .dg-trigger {
        justify-content: space-between;
        width: 100%;
        min-height: 46px;
        padding: 12px 10px;
        font-size: 14px;
      }

      .dms-glass-nav .dg-panel {
        position: static;
        max-height: none;
        overflow: visible;
        margin: 6px 0 12px;
        padding: 20px 15px;
        border: 1px solid rgba(255, 255, 255, 0.8);
        border-radius: 16px;
        background: rgba(247, 250, 243, 0.94);
        box-shadow: 0 5px 18px rgba(32, 50, 35, 0.04);
      }

      .dms-glass-nav .dg-grid {
        grid-template-columns: 1fr;
        gap: 24px;
      }

      .dms-glass-nav .dg-heading {
        margin-bottom: 9px;
      }

      .dms-glass-nav .dg-panel-bottom {
        flex-direction: column;
        align-items: flex-start;
        gap: 4px;
        margin-top: 18px;
      }

      .dms-glass-nav .dg-actions {
        margin: 14px 0 0;
        padding: 14px 10px 0;
        border-top: 1px solid rgba(97, 120, 86, 0.12);
      }

      .dms-glass-nav .dg-cta {
        min-height: 44px;
        margin-left: auto;
      }
    }

    @supports not (backdrop-filter: blur(1px)) {
      .dms-glass-nav .dg-bar-glass,
      .dms-glass-nav .dg-panel {
        background: #fafcf8;
      }
    }

    @media (prefers-reduced-motion: reduce) {
      .dms-glass-nav * {
        transition: none !important;
        animation: none !important;
      }
    }

    `;

if (navCssStart !== -1 && heroIntroStart !== -1) {
  content = content.slice(0, navCssStart) + newNavCss + content.slice(heroIntroStart);
  console.log('Replaced Navbar CSS successfully!');
}

// 2. Replace the HTML for navbar:
const oldNavHtmlStart = content.indexOf('<!-- NAVBAR CONTAINER -->');
const mainStart = content.indexOf('<main>');

const newNavHtml = `<!-- MODERN GLASS NAVBAR WITH DROPDOWNS -->
  <div class="dms-nav-outer-container">
    <header class="dms-glass-nav" id="dms-header">
      <div class="dg-bar-glass" aria-hidden="true"></div>

      <div class="dg-inner">
        <div class="dg-bar">

          <a class="dg-logo" href="/" aria-label="DMS home">
            <img class="dg-logo-image" src="DMSLOGO.png" alt="Diplomat Management Services" width="135" height="38" onerror="this.hidden=true;this.nextElementSibling.hidden=false">
            <span class="dg-wordmark" hidden>DMS.</span>
          </a>

          <button class="dg-mobile-toggle"
            type="button"
            aria-label="Open navigation"
            aria-expanded="false">
            <svg class="dg-open-icon" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M4 6h16M4 12h16M4 18h16"/>
            </svg>
            <svg class="dg-close-icon" viewBox="0 0 24 24" aria-hidden="true" hidden>
              <path d="m6 6 12 12M6 18 18 6"/>
            </svg>
          </button>

          <nav class="dg-navigation" aria-label="Main navigation">
            <div class="dg-links">

              <a class="dg-link" href="#hero-section">Home</a>

              <div class="dg-dropdown">
                <button class="dg-trigger" type="button"
                  data-menu="services" aria-expanded="false">
                  Our services
                  <svg class="dg-chevron" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="m6 9 6 6 6-6"/>
                  </svg>
                </button>
                <div class="dg-panel" hidden></div>
              </div>

              <div class="dg-dropdown">
                <button class="dg-trigger" type="button"
                  data-menu="visa" aria-expanded="false">
                  Visa &amp; residency
                  <svg class="dg-chevron" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="m6 9 6 6 6-6"/>
                  </svg>
                </button>
                <div class="dg-panel" hidden></div>
              </div>

              <div class="dg-dropdown">
                <button class="dg-trigger" type="button"
                  data-menu="business" aria-expanded="false">
                  Business support
                  <svg class="dg-chevron" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="m6 9 6 6 6-6"/>
                  </svg>
                </button>
                <div class="dg-panel" hidden></div>
              </div>

              <a class="dg-link" href="#contact-overview">Support</a>
            </div>

            <div class="dg-actions">
              <a class="dg-contact" href="#contact-overview">Contact</a>
              <a class="dg-cta" href="#contact-overview">Talk to DMS</a>
            </div>
          </nav>

        </div>
      </div>
    </header>
  </div>
\n  `;

if (oldNavHtmlStart !== -1 && mainStart !== -1) {
  content = content.slice(0, oldNavHtmlStart) + newNavHtml + content.slice(mainStart);
  console.log('Replaced Navbar HTML successfully!');
}

// 3. Replace the old sticky scroll script with the new interactive dropdown & sticky script:
const oldScriptStart = content.indexOf('// ==========================================\n    // STICKY GLASSMORPHISM NAVBAR SCRIPT');
const bannerScriptStart = content.indexOf('// ==========================================\n    // BANNER CAROUSEL SCRIPT');

const newNavScript = `// ==========================================
    // MODERN GLASS DROPDOWN NAVBAR INTERACTION
    // ==========================================
    (() => {
      const root = document.querySelector(".dms-glass-nav");
      if (!root || root.dataset.ready) return;
      root.dataset.ready = "true";

      const icons = {
        government: '<path d="m3 9 9-6 9 6H3ZM4 21h16M5 18h14M7 10v8m5-8v8m5-8v8"/>',
        document: '<path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9ZM14 3v6h6M8 14h8m-8 4h5"/>',
        check: '<rect x="4" y="3" width="16" height="18" rx="2"/><path d="m8 12 3 3 5-6"/>',
        passport: '<rect x="5" y="3" width="14" height="18" rx="2"/><circle cx="12" cy="10" r="4"/><path d="M8 10h8m-4-4c-2 2-2 6 0 8m0-8c2 2 2 6 0 8M9 18h6"/>',
        globe: '<circle cx="12" cy="12" r="9"/><ellipse cx="12" cy="12" rx="4" ry="9"/><path d="M3 12h18"/>',
        home: '<path d="m3 10 9-7 9 7M5 9v12h14V9M10 21v-7h4v7"/>',
        star: '<path d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2-5.6-3-5.6 3 1.1-6.2L3 9.6l6.2-.9Z"/>',
        person: '<circle cx="12" cy="7" r="4"/><path d="M4 21v-2a8 8 0 0 1 16 0v2"/>',
        building: '<rect x="5" y="5" width="14" height="16" rx="1"/><path d="M9 5V3h6v2M9 9h1m4 0h1M9 13h1m4 0h1M10 21v-4h4v4"/>',
        briefcase: '<rect x="3" y="7" width="18" height="14" rx="2"/><path d="M8 7V3h8v4M3 12a24 24 0 0 0 18 0M10 13h4"/>',
        chat: '<path d="M21 11a8 8 0 0 1-8 8H7l-4 3V7a4 4 0 0 1 4-4h6a8 8 0 0 1 8 8ZM7 9h10M7 13h7"/>'
      };

      const menus = {
        services: [
          {
            title: "Government services",
            items: [
              ["Bahrain Ministry Services", "Guidance through government processes", "#services", "government"],
              ["Government Relations", "Support for your administrative needs", "#services", "briefcase"]
            ]
          },
          {
            title: "Documentation",
            items: [
              ["Document Attestation", "Assistance with document formalities", "#services", "check"],
              ["Documentation Assistance", "Preparation, applications and follow-ups", "#services", "document"]
            ]
          },
          {
            title: "Explore more",
            items: [
              ["Visa & Residency Services", "Guidance for your next chapter in Bahrain", "#services", "passport"],
              ["Corporate Setup", "Support for starting your business", "#services", "building"]
            ]
          }
        ],

        visa: [
          {
            title: "Bahrain visa & residence",
            items: [
              ["Bahrain Visa Services", "Personalised application assistance", "#services", "passport"],
              ["Residence Permit Services", "Guidance for your residency needs", "#services", "home"]
            ]
          },
          {
            title: "Residency solutions",
            items: [
              ["Bahrain Golden Visa", "Explore your Golden Visa journey", "#services", "star"],
              ["Self-Sponsorship Visa", "Support with requirements and documents", "#services", "person"]
            ]
          },
          {
            title: "International travel",
            items: [
              ["Saudi Visa Services", "Guidance for your visit to Saudi Arabia", "#services", "passport"],
              ["Global Visa Services", "Support for international visa applications", "#services", "globe"]
            ]
          }
        ],

        business: [
          {
            title: "Start your business",
            items: [
              ["Corporate Setup", "Support for setting up in Bahrain", "#services", "building"],
              ["Discuss Your Requirements", "Find support suited to your plans", "#contact-overview", "chat"]
            ]
          },
          {
            title: "Government support",
            items: [
              ["Government Relations", "Assistance with business-related processes", "#services", "government"],
              ["Bahrain Ministry Services", "Guidance through administrative requirements", "#services", "briefcase"]
            ]
          },
          {
            title: "Business documentation",
            items: [
              ["Document Preparation", "Help organising your application documents", "#services", "document"],
              ["Document Attestation", "Support with document formalities", "#services", "check"]
            ]
          }
        ]
      };

      const navigation = root.querySelector(".dg-navigation");
      const mobileButton = root.querySelector(".dg-mobile-toggle");
      const openIcon = root.querySelector(".dg-open-icon");
      const closeIcon = root.querySelector(".dg-close-icon");
      const dropdowns = [...root.querySelectorAll(".dg-dropdown")];

      const mobile = window.matchMedia("(max-width: 1000px)");
      const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
      const uid = "dms-glass-" + Math.random().toString(36).slice(2, 10);

      let active = null;
      let animation = null;

      navigation.id = uid + "-navigation";
      mobileButton.setAttribute("aria-controls", navigation.id);

      dropdowns.forEach((dropdown, index) => {
        const button = dropdown.querySelector(".dg-trigger");
        const panel = dropdown.querySelector(".dg-panel");

        button.id = uid + "-trigger-" + index;
        panel.id = uid + "-panel-" + index;

        button.setAttribute("aria-controls", panel.id);
        panel.setAttribute("aria-labelledby", button.id);

        const grid = document.createElement("div");
        grid.className = "dg-grid";

        menus[button.dataset.menu].forEach(group => {
          const column = document.createElement("div");
          column.className = "dg-column";

          const heading = document.createElement("h2");
          heading.className = "dg-heading";
          heading.textContent = group.title;
          column.append(heading);

          group.items.forEach(([title, description, url, icon]) => {
            const link = document.createElement("a");
            link.className = "dg-item";
            link.href = url;

            const symbol = document.createElement("span");
            symbol.className = "dg-icon";
            symbol.innerHTML =
              '<svg viewBox="0 0 24 24" aria-hidden="true">' +
              icons[icon] +
              "</svg>";

            const copy = document.createElement("span");
            copy.className = "dg-item-copy";

            const name = document.createElement("span");
            name.className = "dg-item-title";
            name.textContent = title;

            const detail = document.createElement("span");
            detail.className = "dg-item-description";
            detail.textContent = description;

            copy.append(name, detail);
            link.append(symbol, copy);
            column.append(link);
          });

          grid.append(column);
        });

        const bottom = document.createElement("div");
        bottom.className = "dg-panel-bottom";

        const note = document.createElement("span");
        note.textContent = "Clear guidance for your next step in Bahrain.";

        const all = document.createElement("a");
        all.href = "#services";
        all.textContent = "View all services ↗";

        bottom.append(note, all);
        panel.append(grid, bottom);

        button.addEventListener("click", () => {
          setDropdown(active === dropdown ? null : dropdown);
        });

        button.addEventListener("keydown", event => {
          if (event.key !== "ArrowDown") return;
          event.preventDefault();
          setDropdown(dropdown);
          panel.querySelector("a")?.focus();
        });
      });

      function setDropdown(dropdown, returnFocus = false) {
        const previous = active;
        animation?.cancel();

        dropdowns.forEach(item => {
          const opened = item === dropdown;
          item.querySelector(".dg-trigger")
            .setAttribute("aria-expanded", String(opened));
          item.querySelector(".dg-panel").hidden = !opened;
        });

        active = dropdown;

        if (dropdown && !reduced.matches) {
          const panel = dropdown.querySelector(".dg-panel");

          if (typeof panel.animate === "function") {
            animation = panel.animate(
              [
                { opacity: 0, transform: "translateY(-5px)" },
                { opacity: 1, transform: "translateY(0)" }
              ],
              { duration: 200, easing: "ease-out" }
            );
          }
        }

        if (returnFocus && previous) {
          previous.querySelector(".dg-trigger").focus();
        }
      }

      function setMobile(open, returnFocus = false) {
        root.classList.toggle("dg-mobile-open", open);
        mobileButton.setAttribute("aria-expanded", String(open));
        mobileButton.setAttribute(
          "aria-label",
          open ? "Close navigation" : "Open navigation"
        );

        openIcon.hidden = open;
        closeIcon.hidden = !open;

        if (!open) setDropdown(null);
        if (returnFocus) mobileButton.focus();
      }

      mobileButton.addEventListener("click", () => {
        setMobile(!root.classList.contains("dg-mobile-open"));
      });

      root.addEventListener("keydown", event => {
        if (event.key !== "Escape") return;

        if (active) {
          event.preventDefault();
          setDropdown(null, true);
        } else if (root.classList.contains("dg-mobile-open")) {
          event.preventDefault();
          setMobile(false, true);
        }
      });

      document.addEventListener("click", event => {
        if (!root.contains(event.target)) setMobile(false);
      });

      root.addEventListener("focusout", () => {
        requestAnimationFrame(() => {
          if (!root.contains(document.activeElement)) {
            setMobile(false);
          }
        });
      });

      root.addEventListener("click", event => {
        if (event.target.closest("a")) {
          setMobile(false);
          setDropdown(null);
        }
      });

      // Sticky shadow on scroll
      window.addEventListener("scroll", () => {
        root.classList.toggle("is-scrolled", window.scrollY > 30);
      }, { passive: true });

      mobile.addEventListener("change", () => {
        const focused = document.activeElement;
        const focusInPanel = !!focused?.closest(".dg-panel");
        const focusInNav = navigation.contains(focused);
        const previousTrigger = active?.querySelector(".dg-trigger");

        setMobile(false);

        if (mobile.matches && focusInNav) {
          mobileButton.focus();
        } else if (!mobile.matches && focused === mobileButton) {
          navigation.querySelector("a")?.focus();
        } else if (focusInPanel) {
          previousTrigger?.focus();
        }
      });

      reduced.addEventListener("change", () => {
        if (reduced.matches) animation?.cancel();
      });
    })();\n\n    `;

if (oldScriptStart !== -1 && bannerScriptStart !== -1) {
  content = content.slice(0, oldScriptStart) + newNavScript + content.slice(bannerScriptStart);
  console.log('Replaced Navbar script successfully!');
}

fs.writeFileSync('g:/DMS WEB/index.html', content);
console.log('Updated index.html with new glass dropdown navbar & DMS logo!');
