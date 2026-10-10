# Gops Photography 

An editorial wedding and portrait photography portfolio website crafted with modern semantic HTML5 and CSS3. Designed with a luxury magazine aesthetic, responsive typography, and strict adherence to modern web accessibility standards.

---

## Live Demo & Repository

- **Live Site:** https://gopikakgopalan.github.io/GopikaPhoto/
- **Repository:** https://github.com/gopikakgopalan/GopikaPhoto

---

## Key Features & Highlights

- **Luxury Editorial Aesthetic:** Balanced typography pairing classic serifs (*Playfair Display*) with clean modernist sans-serifs (*Montserrat*) over warm, muted palettes (`#fdfbf7`, `#ede9e3`, `#f6f1ea`).
- **Interactive CSS Hover Slideshow:** A pure CSS image showcase in the *About* section using `@keyframes` opacity transitions, requiring zero external dependencies or JavaScript runtime overhead.
- **Dynamic CSS Grid Gallery:** Fluid image showcase with responsive columns (`auto-fit`, `minmax`), hover micro-interactions, and dark gradient caption overlays.
- **Accessible Contact/Inquiry Section:** Dedicated booking intake form designed with visually hidden but screen-reader-accessible field labels and high-contrast styling.
- **Three-Column Symmetrical Footer:** Structured editorial footer with balanced column baselines, tracked micro-labels, direct contact info, and styled social links.
- **Fully Responsive Architecture:** Optimized for desktops, tablets, and smartphones using fluid `clamp()` sizing, flexible aspect ratios, and media query breakpoints at `900px`, `820px`, `768px`, and `480px`.

---

## Accessibility & Web Standards (WAVE Evaluation)

This site has been audited and optimized using the **WebAIM WAVE (Web Accessibility Evaluation Tool)**:


- Standard body text and micro-labels maintain a contrast ratio exceeding **4.5:1** against cream and biscuit-toned backgrounds.
- Large headings and high-impact editorial titles exceed the **3:1** minimum contrast requirement.
- **0 Contrast Errors:** Resolved contrast flags by shifting gold accents (`--color-accent: #7d5e08`) and signature text elements (`#4a4039`) into higher-density tones.
- **0 Alerts (No Micro-Text):** All labels, timestamps, captions, and legal copy are kept strictly above the 10px minimum alert threshold.
- **Semantic Structure:** Explicit heading hierarchies (`h1` through `h2`), descriptive alternative text on visual assets, and full screen-reader support on form inputs.

---

## Technology Stack

- **Markup:** HTML5 (Semantic elements: `<header>`, `<nav>`, `<section>`, `<figure>`, `<figcaption>`, `<address>`, `<footer>`)
- **Styling:** CSS3 (CSS Custom Properties, Flexbox, CSS Grid, Transitions, Keyframe Animations)
- **Typography:** Google Fonts (*Playfair Display*, *Montserrat*)
- **Tooling & Auditing:** WebAIM WAVE Evaluation Suite

---

## File Structure

```text
├── index.html          # Main portfolio layout and semantic structure
├── styles.css          # Unified, deduplicated design system & media queries
├── README.md           # Project documentation and specifications
└── images/             # Optimized portfolio photography assets
    ├── backgroundpic.PNG
    ├── aboutpic.PNG
    ├── About1.PNG
    ├── About2.PNG
    ├── About3.PNG
    └── ...
```

---

## License & Credits

- **Photographs:** All imagery © Gops Photography. All rights reserved.