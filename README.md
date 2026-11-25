# Damien Braun — Photographer Portfolio Website

A modern, high-performance photography portfolio website built with **React**, **Next.js (App Router)**, **TypeScript**, and **Tailwind CSS**, designed faithfully after the Figma template:  
**[Photographer Portfolio Website UI Template - Dark Theme | Produce UI](https://www.figma.com/design/wSuDWwUIeLaytVaH3vxGVf/Photographer-Portfolio-Website-UI-Template---Dark-Theme-%7C-Produce-UI--Community-?node-id=11-2)**.

---

## 🌓 Dark & Light Theme Switcher

The website features an interactive **Theme Toggle** (Sun ☀️ / Moon 🌙 icon) right in the header:
- **Dark Theme (Default)**: Deep Obsidian `#070708` background, `#0E0E10` cards, `#1C1C21` borders, and high-contrast text.
- **Light Theme**: Clean crisp white/off-white background, soft card surfaces, and dark typography.
- Persistent user selection saved automatically in `localStorage`.

---

## 🖼️ Public Folder For Images (`public/images/`)

All placeholder and photography assets are structured into clear subdirectories so you can replace them with your own photos at any time:

```
public/images/
├── hero/                   # Home page bento grid photos (bento-1 to bento-6)
├── about/                  # About page panoramic hero & Damien portraits
├── portfolio/              # Portraits, Events, and Commercial project photos
├── services/               # Portrait, Events, and Commercial service banners
├── contact/                # Photographer in action banner
├── testimonials/           # Client avatars
└── README.md               # Detailed mapping guide for image replacements
```

To replace any image, drop your file into the respective folder and update its path in [`src/data/portfolio-data.ts`](file:///Users/gabriel/Desktop/oso.photography/src/data/portfolio-data.ts).

---

## 🧭 Dedicated Routing Pages (Matching Figma Screenshots)

Each link in the header navigates to its own dedicated page with layout matching the designs:

1. **Home (`/`)**:
   - Hero header with bento photo grid (6 images) & "LET'S WORK TOGETHER ↗"
   - "I AM DAMIEN" about preview with contact info and CV download
   - "MY PHOTOGRAPHY SERVICES" featured service carousel
   - "EXPLORE MY PHOTOGRAPHY WORK" featured projects
   - 2-column FAQ accordion
   - "WHAT MY CLIENTS SAY" testimonials
   - Giant `DAMIEN` background watermark & infinite marquee ticker

2. **About Me (`/about`)**:
   - "ABOUT DAMIEN BRAUN" banner with atmospheric photo
   - 6 Key Metrics: `15+ Years`, `500+ Projects`, `10+ Awards`, `05+ Workshops`, `10k+ Followers`, `90% Retention`
   - Panoramic hero cutout with star emblem & scroll indicator
   - "MY BIOGRAPHY" detailed personal narrative
   - "DAMIEN'S JOURNEY - A TIMELINE": 6 cards (2005, 2010, 2012, 2015, 2017, 2020)
   - Client testimonials, watermark & marquee

3. **Portfolio (`/portfolio`)**:
   - "VISUAL POETRY IN PIXELS" hero banner
   - **Portraits Photography** (3 cards: Faces of Resilience, Innocence Unveiled, Inner Reflections)
   - **Events Photography** (3 cards: A Wedding Tale, Corporate Gala, Vibrant Celebration)
   - **Commercial Photography** (3 cards: Product Elegance, Culinary Delights, Urban Elegance)
   - Fullscreen Lightbox modal with EXIF details (`ISO`, `shutter`, `aperture`) & keyboard navigation
   - 2-column FAQ & testimonials

4. **Services (`/services`)**:
   - "DIVERSE PHOTOGRAPHY OFFERINGS" hero banner
   - **Portrait Photography** (3 package tiers: Individual Session $250, Family Session $400, Couple Session $300)
   - **Events Photography** (3 package tiers: Wedding Coverage $1,500, Party Coverage $800, Corporate Events Custom)
   - **Commercial Photography** (3 package tiers: Product Photography $500, Real Estate Photography $700, Brand Campaign Custom)
   - 2-column FAQ accordion

5. **Contact (`/contact`)**:
   - "GET IN TOUCH WITH ME" hero banner
   - Contact Information: Direct Phone (`+1-123-456-7890 ↗`) & Email (`info@damienbraunphotography.com ↗`)
   - "SEND ME A MESSAGE" Form: First Name, Last Name, Email, Phone, Message, and large "SEND MESSAGE ↗" action button
   - Client testimonials, watermark & marquee

---

## 🛠️ Getting Started

### Run Development Server:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production:
```bash
npm run build
npm start
```
