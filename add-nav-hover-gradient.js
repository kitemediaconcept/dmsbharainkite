const fs = require('fs');

let content = fs.readFileSync('g:/DMS WEB/index.html', 'utf8');

// 1. Add delicate emerald green gradient animation to .dg-bar-glass
const oldBarGlassCss = `    /* Floating pill glass layer with full rounded borders */
    .dms-glass-nav .dg-bar-glass {
      position: absolute;
      inset: 0;
      z-index: -1;
      border-radius: 9999px;
      background: rgba(255, 255, 255, 0.84);
      -webkit-backdrop-filter: blur(24px) saturate(160%);
      backdrop-filter: blur(24px) saturate(160%);
      border: 1px solid rgba(0, 0, 0, 0.08);
      box-shadow:
        0 4px 16px -4px rgba(29, 48, 34, 0.06),
        0 14px 34px -8px rgba(29, 48, 34, 0.08);
      pointer-events: none;
      transition: all 350ms cubic-bezier(0.16, 1, 0.3, 1);
    }`;

const newBarGlassCss = `    /* Floating pill glass layer with delicate green gradient animation */
    .dms-glass-nav .dg-bar-glass {
      position: absolute;
      inset: 0;
      z-index: -1;
      border-radius: 9999px;
      background: linear-gradient(
        115deg,
        rgba(255, 255, 255, 0.92) 0%,
        rgba(235, 247, 239, 0.82) 25%,
        rgba(255, 255, 255, 0.90) 50%,
        rgba(230, 245, 236, 0.78) 75%,
        rgba(255, 255, 255, 0.92) 100%
      );
      background-size: 250% 250%;
      animation: dms-nav-gradient-glow 14s ease-in-out infinite alternate;
      -webkit-backdrop-filter: blur(24px) saturate(160%);
      backdrop-filter: blur(24px) saturate(160%);
      border: 1px solid rgba(13, 155, 73, 0.16);
      box-shadow:
        0 4px 16px -4px rgba(13, 155, 73, 0.08),
        0 14px 34px -8px rgba(29, 48, 34, 0.07);
      pointer-events: none;
      transition: all 350ms cubic-bezier(0.16, 1, 0.3, 1);
    }

    @keyframes dms-nav-gradient-glow {
      0% {
        background-position: 0% 50%;
      }
      50% {
        background-position: 100% 50%;
      }
      100% {
        background-position: 0% 50%;
      }
    }`;

content = content.replace(oldBarGlassCss, newBarGlassCss);

// 2. Add hover handling to dropdown in javascript (mouse enter and leave)
const oldDropdownListeners = `        button.addEventListener("click", () => {
          setDropdown(active === dropdown ? null : dropdown);
        });

        button.addEventListener("keydown", event => {
          if (event.key !== "ArrowDown") return;
          event.preventDefault();
          setDropdown(dropdown);
          panel.querySelector("a")?.focus();
        });
      });`;

const newDropdownListeners = `        let hoverTimeout;

        // Hover handling for desktop
        dropdown.addEventListener("mouseenter", () => {
          if (mobile.matches) return;
          clearTimeout(hoverTimeout);
          setDropdown(dropdown);
        });

        dropdown.addEventListener("mouseleave", () => {
          if (mobile.matches) return;
          hoverTimeout = setTimeout(() => {
            if (active === dropdown) {
              setDropdown(null);
            }
          }, 180);
        });

        button.addEventListener("click", (e) => {
          if (mobile.matches) {
            setDropdown(active === dropdown ? null : dropdown);
          } else {
            setDropdown(active === dropdown ? null : dropdown);
          }
        });

        button.addEventListener("keydown", event => {
          if (event.key !== "ArrowDown") return;
          event.preventDefault();
          setDropdown(dropdown);
          panel.querySelector("a")?.focus();
        });
      });`;

content = content.replace(oldDropdownListeners, newDropdownListeners);

fs.writeFileSync('g:/DMS WEB/index.html', content);
console.log('Successfully added subtle green gradient animation and mouse hover submenu trigger!');
