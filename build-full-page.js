const fs = require('fs');
const path = require('path');

// 1. Read existing parts
const extraHtml = fs.readFileSync('g:/DMS WEB/subsequent-sections.html', 'utf8');
const extraCss = fs.readFileSync('g:/DMS WEB/styles-full.css', 'utf8');

// 2. Prepare the complete index.html
const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Diplomat Management Services (DMS) | Strategic Corporate Setup & Visas in Bahrain</title>
  <meta name="description" content="Strategic visas, corporate setup, residency solutions, and government relations in Bahrain since 1984.">

  <!-- Google Fonts: Inter Variable, IBM Plex Mono, Adamina -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Adamina&family=IBM+Plex+Mono:wght@400;500;600&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap" rel="stylesheet">

  <style>
    * {
      box-sizing: border-box;
    }

    :root {
      /* Mollie Exact Color & Elevation Tokens */
      --color-paper: #ffffff;
      --color-ink: #000000;
      --color-near-black: #111111;
      --color-quiet-graphite: #595959;
      --color-soft-gray: #919191;
      --color-oat-surface: #f7f4f1;
      --color-ledger-brown: #3b281d;
      --color-espresso-panel: #211006;
      --color-copper-link: #e07122;

      /* DMS Brand Identity (Emerald Primary & Accents) */
      --green: #073f2c;
      --green-accent: #0d9b49;
      --green-light: #e6f4ed;
      --green-border: rgba(13, 155, 73, 0.2);

      --text: #000000;
      --muted: #595959;

      /* Mollie Typography Scale */
      --font-display: "Inter", "Inter Variable", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
      --font-mono: "IBM Plex Mono", SFMono-Regular, Consolas, monospace;
      --font-serif: "Adamina", Georgia, serif;
    }

    html {
      scroll-behavior: smooth;
    }

    body {
      margin: 0;
      background: var(--color-paper);
      color: var(--color-ink);
      font-family: var(--font-display);
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }

    a {
      color: inherit;
      text-decoration: none;
    }

    button {
      font: inherit;
      cursor: pointer;
    }

    a:focus-visible,
    button:focus-visible {
      outline: 3px solid var(--green-accent);
      outline-offset: 4px;
    }

    [hidden] {
      display: none !important;
    }

    /* ==========================================================================
       NAVBAR CONTAINER & STICKY GLASSMORPHISM AFTER HERO SECTION
       ========================================================================== */
    .nav-outer-container {
      position: relative;
      width: 100%;
      height: 64px;
      z-index: 1000;
    }

    .navbar {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      max-width: 1280px;
      min-height: 64px;
      margin: 0 auto;
      padding: 12px 32px;
      display: flex;
      align-items: center;
      gap: 48px;
      background: var(--color-paper);
      border-radius: 0;
      border: 1px solid transparent;
      box-shadow: none;
      transition: all 400ms cubic-bezier(0.16, 1, 0.3, 1);
      z-index: 1000;
      box-sizing: border-box;
    }

    /* WHEN SCROLLED PAST HERO SECTION: FLOATING PILL + GLASSMORPHISM */
    .navbar.is-scrolled {
      top: 14px;
      max-width: 1120px;
      min-height: 56px;
      padding: 8px 24px;
      border-radius: 9999px;
      background: rgba(255, 255, 255, 0.82);
      backdrop-filter: blur(20px);
      -webkit-backdrop-filter: blur(20px);
      border: 1px solid rgba(0, 0, 0, 0.08);
      box-shadow: 
        0 16px 36px -8px rgba(0, 0, 0, 0.08),
        0 2px 6px rgba(0, 0, 0, 0.02);
    }

    .logo {
      display: inline-flex;
      align-items: center;
      flex-shrink: 0;
    }

    .logo img {
      width: 140px;
      height: 38px;
      object-fit: contain;
      object-position: left;
      transition: all 300ms ease;
    }

    .navbar.is-scrolled .logo img {
      width: 125px;
      height: 32px;
    }

    .logo-fallback {
      font-size: 26px;
      font-weight: 700;
      color: var(--green);
      letter-spacing: -1px;
    }

    .nav-links {
      display: flex;
      align-items: center;
      gap: 32px;
    }

    .nav-links a {
      font-size: 14px;
      font-weight: 500;
      line-height: 18.2px;
      letter-spacing: -0.32px;
      color: var(--color-ink);
      transition: color 150ms ease;
    }

    .nav-links a:hover {
      color: var(--green-accent);
    }

    .nav-actions {
      margin-left: auto;
      display: flex;
      align-items: center;
      gap: 20px;
    }

    .nav-contact {
      font-size: 14px;
      font-weight: 500;
      letter-spacing: -0.32px;
      color: var(--color-ink);
      transition: color 150ms ease;
    }

    .nav-contact:hover {
      color: var(--green-accent);
    }

    /* Pill Buttons — Exact Mollie 9999px Radius */
    .button {
      min-height: 44px;
      padding: 0 24px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      background: var(--green);
      color: #ffffff;
      border: none;
      border-radius: 9999px;
      font-size: 14px;
      font-weight: 500;
      letter-spacing: -0.2px;
      white-space: nowrap;
      box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.12);
      transition: transform 150ms ease, opacity 150ms ease, background 150ms ease;
    }

    .button:hover {
      background: #0b4e37;
      transform: translateY(-1px);
    }

    .button.small {
      min-height: 38px;
      padding: 0 20px;
      font-size: 13px;
    }

    .navbar.is-scrolled .button.small {
      min-height: 36px;
      padding: 0 18px;
    }

    .button.light {
      background: var(--color-oat-surface);
      color: var(--color-ink);
      font-weight: 500;
      box-shadow: none;
    }

    .button.light:hover {
      background: #eeeae4;
      transform: translateY(-1px);
    }

    .menu-toggle {
      display: none;
      background: none;
      border: none;
      padding: 8px;
      font-size: 18px;
    }

    /* ==========================================================================
       HERO HEADING SECTION — Exact Mollie 82px / -2.4px Typography
       ========================================================================== */
    .hero-intro {
      max-width: 1280px;
      margin: 72px auto 48px;
      padding: 0 32px;
      display: grid;
      grid-template-columns: minmax(0, 1fr) 320px;
      align-items: end;
      gap: 64px;
    }

    .eyebrow {
      margin: 0 0 14px;
      font-family: var(--font-mono);
      font-size: 13px;
      font-weight: 500;
      line-height: 16.9px;
      letter-spacing: 0.04em;
      text-transform: uppercase;
      color: var(--color-quiet-graphite);
    }

    .hero-intro h1 {
      margin: 0;
      max-width: 820px;
      font-family: var(--font-display);
      font-size: clamp(44px, 5.2vw, 82px);
      line-height: 1;
      font-weight: 400;
      letter-spacing: -2.4px;
      color: var(--color-ink);
    }

    .hero-description p {
      margin: 0 0 24px;
      font-family: var(--font-display);
      color: var(--color-quiet-graphite);
      font-size: 16px;
      line-height: 1.35;
      letter-spacing: -0.4px;
    }

    .hero-actions {
      display: flex;
      gap: 12px;
      flex-wrap: wrap;
    }

    /* ==========================================================================
       HERO BANNER SLIDER — Contained 16px Radius
       ========================================================================== */
    .banner {
      position: relative;
      width: calc(100% - 64px);
      max-width: 1280px;
      aspect-ratio: 2 / 1;
      margin: 0 auto 56px;
      overflow: hidden;
      border-radius: 16px;
      background: #163f30;
      color: #ffffff;
      touch-action: pan-y;
    }

    .banner-track {
      display: flex;
      height: 100%;
      transition: transform 850ms cubic-bezier(0.22, 0.61, 0.36, 1);
    }

    .banner-slide {
      position: relative;
      flex: 0 0 100%;
      height: 100%;
      overflow: hidden;
      background: var(--slide-color, #234e3c);
    }

    .banner-slide > img {
      position: absolute;
      inset: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .image-placeholder {
      position: absolute;
      inset: 0;
      display: grid;
      place-items: center;
      padding: 25px;
      text-align: center;
      background:
        radial-gradient(
          ellipse at 70% 25%,
          rgba(255, 255, 255, 0.15),
          transparent 65%
        );
      font-size: 13px;
      color: #ffffffaa;
    }

    .banner-overlay {
      position: absolute;
      inset: 0;
      pointer-events: none;
      background: linear-gradient(
        to top,
        rgba(0, 0, 0, 0.88) 0%,
        rgba(0, 0, 0, 0.18) 43%,
        rgba(0, 0, 0, 0.08) 100%
      );
    }

    /* GLASS CARDS — Mollie In-Media Transaction Badges */
    .banner-badges {
      position: absolute;
      top: 32px;
      left: 32px;
      display: grid;
      justify-items: start;
      gap: 8px;
      z-index: 2;
    }

    .banner-badge {
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 14px 18px;
      border: 1px solid rgba(255, 255, 255, 0.18);
      border-radius: 9999px;
      background: rgba(15, 24, 18, 0.68);
      backdrop-filter: blur(12px);
      -webkit-backdrop-filter: blur(12px);
      font-size: 13px;
      font-weight: 500;
      line-height: 1.3;
      letter-spacing: -0.2px;
    }

    .badge-icon {
      width: 16px;
      height: 16px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      color: #46ad82;
      font-size: 13px;
    }

    /* CURRENT SLIDE TITLE */
    .banner-caption {
      position: absolute;
      left: 34px;
      bottom: 135px;
      z-index: 2;
    }

    .banner-caption .eyebrow {
      margin-bottom: 8px;
      color: rgba(255, 255, 255, 0.8);
      font-size: 11px;
      letter-spacing: 0.11px;
    }

    .banner-caption h2 {
      margin: 0;
      font-family: var(--font-display);
      font-size: clamp(26px, 3.4vw, 44px);
      line-height: 1.1;
      font-weight: 400;
      letter-spacing: -1.2px;
    }

    /* CONTROLS — Circular Buttons */
    .banner-controls {
      position: absolute;
      top: 30px;
      right: 32px;
      display: flex;
      gap: 8px;
      z-index: 2;
    }

    .control-button {
      width: 36px;
      height: 36px;
      display: grid;
      place-items: center;
      border: 1px solid rgba(255, 255, 255, 0.35);
      border-radius: 50%;
      background: rgba(0, 0, 0, 0.45);
      color: #ffffff;
      font-size: 14px;
      transition: background 150ms ease;
    }

    .control-button:hover {
      background: rgba(0, 0, 0, 0.8);
    }

    /* THUMBNAILS */
    .banner-thumbnails {
      position: absolute;
      bottom: 20px;
      left: 50%;
      transform: translateX(-50%);
      display: flex;
      gap: 10px;
      width: 680px;
      max-width: calc(100% - 48px);
      overflow-x: auto;
      scrollbar-width: none;
      z-index: 2;
    }

    .banner-thumbnails::-webkit-scrollbar {
      display: none;
    }

    .thumbnail {
      flex: 1;
      min-width: 0;
      padding: 0;
      border: 0;
      background: none;
      color: rgba(255, 255, 255, 0.7);
      text-align: left;
    }

    .thumbnail-label {
      display: block;
      margin-bottom: 6px;
      font-family: var(--font-mono);
      font-size: 9px;
      font-weight: 500;
      line-height: 1.3;
      white-space: nowrap;
      letter-spacing: 0.05em;
    }

    .thumbnail-picture {
      display: block;
      height: 56px;
      overflow: hidden;
      border: 1px solid rgba(255, 255, 255, 0.3);
      border-radius: 6px;
      background: var(--slide-color, #315640);
      opacity: 0.55;
      transition: opacity 200ms ease, border-color 200ms ease;
    }

    .thumbnail-picture img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
    }

    .thumbnail[aria-current="true"] {
      color: #ffffff;
    }

    .thumbnail[aria-current="true"] .thumbnail-picture {
      opacity: 1;
      border-color: #ffffff;
    }

    .thumbnail-progress {
      display: block;
      height: 3px;
      margin-top: 6px;
      overflow: hidden;
      background: rgba(255, 255, 255, 0.25);
      border-radius: 2px;
    }

    .thumbnail-progress span {
      display: block;
      width: 0%;
      height: 100%;
      background: #ffffff;
    }

    .sr-only {
      position: absolute;
      width: 1px;
      height: 1px;
      padding: 0;
      margin: -1px;
      overflow: hidden;
      clip: rect(0, 0, 0, 0);
      white-space: nowrap;
      border: 0;
    }

    /* RESPONSIVE DESIGN */
    @media (max-width: 980px) {
      .navbar {
        gap: 28px;
      }

      .nav-links {
        gap: 20px;
      }

      .hero-intro {
        gap: 36px;
        grid-template-columns: minmax(0, 1fr) 280px;
        margin: 54px auto 36px;
      }

      .banner {
        aspect-ratio: 1.65 / 1;
      }

      .banner-badge {
        padding: 12px 14px;
        font-size: 12px;
      }

      .thumbnail-label {
        font-size: 8px;
      }
    }

    @media (max-width: 768px) {
      .navbar {
        min-height: 64px;
        padding: 14px 20px;
        gap: 14px;
        flex-wrap: wrap;
      }

      .navbar.is-scrolled {
        top: 10px;
        max-width: calc(100% - 24px);
        border-radius: 20px;
        padding: 10px 16px;
      }

      .logo img {
        width: 110px;
        height: 32px;
      }

      .menu-toggle {
        display: block;
        margin-left: auto;
      }

      .nav-links {
        display: none;
        order: 4;
        width: 100%;
        padding: 16px 0;
        flex-direction: column;
        align-items: flex-start;
        gap: 16px;
        border-top: 1px solid var(--color-oat-surface);
      }

      .nav-links.open {
        display: flex;
      }

      .nav-actions {
        margin-left: 0;
      }

      .nav-contact {
        display: none;
      }

      .hero-intro {
        display: block;
        margin: 40px auto 28px;
        padding: 0 20px;
      }

      .hero-intro h1 {
        font-size: clamp(38px, 9vw, 54px);
        line-height: 1.05;
        letter-spacing: -1.4px;
      }

      .hero-description {
        max-width: 100%;
        margin-top: 24px;
      }

      .banner {
        width: calc(100% - 32px);
        height: 520px;
        aspect-ratio: auto;
      }

      .banner-badges {
        top: 20px;
        left: 18px;
        right: 18px;
        gap: 6px;
      }

      .banner-badge {
        max-width: 100%;
        padding: 10px 14px;
        font-size: 11px;
        gap: 8px;
      }

      .banner-caption {
        left: 20px;
        right: 20px;
        bottom: 190px;
      }

      .banner-caption h2 {
        max-width: 320px;
        font-size: 28px;
      }

      .banner-controls {
        top: auto;
        right: 20px;
        bottom: 140px;
      }

      .banner-thumbnails {
        gap: 8px;
        padding-bottom: 4px;
        width: 100%;
      }

      .thumbnail {
        flex: 0 0 100px;
      }

      .thumbnail-label {
        min-height: 20px;
        white-space: normal;
        font-size: 8px;
      }

      .thumbnail-picture {
        height: 50px;
      }
    }

    @media (prefers-reduced-motion: reduce) {
      .banner-track,
      .thumbnail-picture {
        transition: none;
      }
    }

    /* ==========================================================================
       SUBSEQUENT SECTIONS STYLES
       ========================================================================== */
${extraCss}
  </style>
</head>

<body>

  <!-- NAVBAR CONTAINER -->
  <div class="nav-outer-container">
    <header class="navbar" id="dms-header">
      <a class="logo" href="index.html" aria-label="DMS home">
        <img
          src="DMSLOGO.png"
          alt="Diplomat Management Services"
          onerror="this.hidden=true;this.nextElementSibling.hidden=false"
        >
        <span class="logo-fallback" hidden>DMS</span>
      </a>

      <button
        class="menu-toggle"
        type="button"
        aria-controls="main-navigation"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        ☰
      </button>

      <nav class="nav-links" id="main-navigation" aria-label="Main navigation">
        <a href="#hero-section">Home</a>
        <a href="#story">About us</a>
        <a href="#services">Our services</a>
        <a href="#blog">Insights</a>
      </nav>

      <div class="nav-actions">
        <a class="nav-contact" href="#contact">Contact</a>
        <a class="button small" href="#contact">Get started</a>
      </div>
    </header>
  </div>

  <main>
    <!-- HEADING SECTION (Exact Mollie 82px / -2.4px Typography) -->
    <section class="hero-intro" id="hero-section" aria-labelledby="hero-heading">
      <div>
        <p class="eyebrow">Your next chapter in Bahrain</p>

        <h1 id="hero-heading">
          Strategic visas, corporate setup, and residency solutions in Bahrain.
        </h1>
      </div>

      <div class="hero-description">
        <p>
          Expert guidance for your visa, business setup, and residency
          journey — with clear support at every step.
        </p>

        <div class="hero-actions">
          <a class="button" href="#contact">Get started now</a>
          <a class="button light" href="#contact">Contact us</a>
        </div>
      </div>
    </section>

    <!-- AUTOMATIC BANNER (Exact Mollie In-Media Proof & Controls) -->
    <section
      class="banner"
      id="hero-banner"
      aria-label="DMS services"
      aria-roledescription="carousel"
    >
      <div class="banner-track"></div>
      <div class="banner-overlay"></div>

      <div class="banner-badges">
        <div class="banner-badge">
          <span class="badge-icon" aria-hidden="true">✓</span>
          <span>Clear guidance. Every step.</span>
        </div>

        <div class="banner-badge">
          <span class="badge-icon" aria-hidden="true">▤</span>
          <span>Document review and application support</span>
        </div>

        <div class="banner-badge">
          <span class="badge-icon" aria-hidden="true">↗</span>
          <span>Solutions for your next chapter</span>
        </div>
      </div>

      <div class="banner-caption">
        <p class="eyebrow">DMS Bahrain</p>
        <h2>Bahrain Ministry Services</h2>
      </div>

      <div class="banner-controls">
        <button
          class="control-button previous"
          type="button"
          aria-label="Previous slide"
        >←</button>

        <button
          class="control-button pause"
          type="button"
          aria-label="Pause automatic slides"
        >Ⅱ</button>

        <button
          class="control-button next"
          type="button"
          aria-label="Next slide"
        >→</button>
      </div>

      <div class="banner-thumbnails" aria-label="Choose a service"></div>
      <p class="sr-only slide-status" aria-live="polite"></p>
    </section>

    <!-- SUBSEQUENT SECTIONS AFTER HERO SECTION -->
${extraHtml}
  </main>

  <script>
    // ==========================================
    // STICKY GLASSMORPHISM NAVBAR SCRIPT
    // ==========================================
    const navbar = document.getElementById("dms-header");
    const heroBanner = document.getElementById("hero-banner");

    function handleNavbarScroll() {
      if (!navbar) return;
      // When scrolled past hero section (banner bottom threshold)
      const threshold = heroBanner ? (heroBanner.offsetTop + heroBanner.offsetHeight - 60) : 400;
      if (window.scrollY > threshold) {
        navbar.classList.add("is-scrolled");
      } else {
        navbar.classList.remove("is-scrolled");
      }
    }

    window.addEventListener("scroll", handleNavbarScroll, { passive: true });
    window.addEventListener("resize", handleNavbarScroll, { passive: true });
    handleNavbarScroll();

    // ==========================================
    // BANNER CAROUSEL SCRIPT
    // ==========================================
    const slides = [
      {
        title: "Bahrain Ministry Services",
        label: "MINISTRY SERVICES",
        image: "assets/ministry.svg",
        color: "#1e3f30"
      },
      {
        title: "Document Attestation",
        label: "ATTESTATION",
        image: "assets/attestation.svg",
        color: "#283b32"
      },
      {
        title: "Saudi Visa Assistance",
        label: "SAUDI VISA",
        image: "assets/saudi-visa.svg",
        color: "#163428"
      },
      {
        title: "Self-Sponsorship Residency",
        label: "SELF SPONSORSHIP",
        image: "assets/residency.svg",
        color: "#1d3a33"
      },
      {
        title: "Global Visa Assistance",
        label: "GLOBAL VISA",
        image: "assets/global-visa.svg",
        color: "#253b2e"
      }
    ];

    const banner = document.querySelector(".banner");
    const track = document.querySelector(".banner-track");
    const thumbnails = document.querySelector(".banner-thumbnails");
    const caption = document.querySelector(".banner-caption h2");
    const pauseButton = document.querySelector(".pause");
    const status = document.querySelector(".slide-status");

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );

    const slideDuration = 5000;

    let currentSlide = 0;
    let elapsed = 0;
    let previousTime = 0;
    let paused = reducedMotion.matches;
    let hovering = false;
    let focused = false;
    let visible = true;

    // Create slides and matching thumbnail buttons.
    slides.forEach((slide, index) => {
      const article = document.createElement("article");
      article.className = "banner-slide";
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
    });

    function showSlide(index, announce = false) {
      currentSlide = (index + slides.length) % slides.length;
      elapsed = 0;

      track.style.transform = \`translateX(-\${currentSlide * 100}%)\`;
      caption.textContent = slides[currentSlide].title;

      [...thumbnails.children].forEach((button, index) => {
        const active = index === currentSlide;

        button.setAttribute("aria-current", String(active));

        button.querySelector(".thumbnail-progress span").style.width = "0%";

        track.children[index].setAttribute(
          "aria-hidden",
          String(!active)
        );
      });

      if (announce) {
        status.textContent = slides[currentSlide].title;
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
    }

    function updatePauseButton() {
      pauseButton.textContent = paused ? "▶" : "Ⅱ";
      pauseButton.setAttribute(
        "aria-label",
        paused ? "Play automatic slides" : "Pause automatic slides"
      );
    }

    document.querySelector(".next").addEventListener("click", () => {
      showSlide(currentSlide + 1, true);
    });

    document.querySelector(".previous").addEventListener("click", () => {
      showSlide(currentSlide - 1, true);
    });

    pauseButton.addEventListener("click", () => {
      paused = !paused;
      updatePauseButton();
    });

    banner.addEventListener("mouseenter", () => {
      hovering = true;
    });

    banner.addEventListener("mouseleave", () => {
      hovering = false;
    });

    banner.addEventListener("focusin", () => {
      focused = true;
    });

    banner.addEventListener("focusout", event => {
      focused = banner.contains(event.relatedTarget);
    });

    banner.addEventListener("keydown", event => {
      if (event.key === "ArrowRight") {
        event.preventDefault();
        showSlide(currentSlide + 1, true);
      }

      if (event.key === "ArrowLeft") {
        event.preventDefault();
        showSlide(currentSlide - 1, true);
      }
    });

    // Mobile swipe
    let touchStartX = 0;
    let touchStartY = 0;

    banner.addEventListener("touchstart", event => {
      touchStartX = event.changedTouches[0].clientX;
      touchStartY = event.changedTouches[0].clientY;
    }, { passive: true });

    banner.addEventListener("touchend", event => {
      if (event.target.closest("button")) return;

      const differenceX =
        event.changedTouches[0].clientX - touchStartX;

      const differenceY =
        event.changedTouches[0].clientY - touchStartY;

      if (
        Math.abs(differenceX) > 55 &&
        Math.abs(differenceX) > Math.abs(differenceY)
      ) {
        showSlide(
          currentSlide + (differenceX < 0 ? 1 : -1),
          true
        );
      }
    }, { passive: true });

    if ("IntersectionObserver" in window) {
      new IntersectionObserver(entries => {
        visible = entries[0].isIntersecting;
      }).observe(banner);
    }

    reducedMotion.addEventListener("change", () => {
      paused = reducedMotion.matches;
      updatePauseButton();
    });

    function animate(time) {
      const delta = previousTime
        ? Math.min(time - previousTime, 100)
        : 0;

      previousTime = time;

      if (
        !paused &&
        !hovering &&
        !focused &&
        visible &&
        !document.hidden
      ) {
        elapsed += delta;

        if (elapsed >= slideDuration) {
          showSlide(currentSlide + 1);
        }

        const progress = thumbnails.children[currentSlide]?.querySelector(".thumbnail-progress span");
        if (progress) {
          progress.style.width = \`\${(elapsed / slideDuration) * 100}%\`;
        }
      }

      requestAnimationFrame(animate);
    }

    showSlide(0);
    updatePauseButton();
    requestAnimationFrame(animate);

    // Mobile navbar
    const menuButton = document.querySelector(".menu-toggle");
    const navigation = document.querySelector(".nav-links");

    menuButton.addEventListener("click", () => {
      const open = navigation.classList.toggle("open");
      menuButton.setAttribute("aria-expanded", String(open));
    });

    document.addEventListener("keydown", event => {
      if (event.key === "Escape") {
        navigation.classList.remove("open");
        menuButton.setAttribute("aria-expanded", "false");
      }
    });
  </script>
</body>
</html>`;

fs.writeFileSync('g:/DMS WEB/index.html', htmlContent);
console.log('Successfully wrote unified index.html with sticky glassmorphism navbar and full sections');
