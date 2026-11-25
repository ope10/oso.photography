# Photography Portfolio — Images Directory Guide

All website imagery is organized into dedicated subfolders under `public/images/` so you can replace them with your own photos at any time.

## Folder Organization & Image Reference

### 1. `public/images/hero/` (Home Page Bento Grid)
- `bento-1.svg` (or `.jpg` / `.png`): Top left portrait
- `bento-2.svg`: Bottom left street / documentary shot
- `bento-3.svg`: Center large featured portrait
- `bento-4.svg`: Center bottom golden hour shot
- `bento-5.svg`: Right top chiaroscuro portrait
- `bento-6.svg`: Right bottom urban / architecture shot

### 2. `public/images/about/` (About Me Page & Home Intro)
- `damien-portrait.svg`: High-resolution photographer portrait on Home & About
- `damien-hero.svg`: Wide panoramic banner on the About page (`/about`)
- `damien-studio.svg`: Studio & behind-the-scenes shot

### 3. `public/images/portfolio/` (Portfolio Page & Gallery)
- `portfolio-hero.svg`: Hero banner on `/portfolio`
- `portraits-1.svg`: Faces of Resilience
- `portraits-2.svg`: Innocence Unveiled
- `portraits-3.svg`: Inner Reflections
- `events-1.svg`: A Wedding Tale
- `events-2.svg`: Corporate Gala
- `events-3.svg`: Vibrant Celebration
- `commercial-1.svg`: Product Elegance
- `commercial-2.svg`: Culinary Delights
- `commercial-3.svg`: Urban Elegance

### 4. `public/images/services/` (Services Page & Pricing Packages)
- `services-hero.svg`: Hero banner on `/services`
- `service-portraits.svg`: Portrait Photography package card
- `service-events.svg`: Events Photography package card
- `service-commercial.svg`: Commercial Photography package card

### 5. `public/images/contact/` (Contact Page)
- `contact-hero.svg`: Banner photo of photographer in action

### 6. `public/images/testimonials/`
- `avatar-1.svg`: Emily Johnson avatar
- `avatar-2.svg`: John Smith avatar
- `avatar-3.svg`: Samantha Davis avatar

---

### How to Replace Images:
1. Simply drop your image file (e.g. `my-photo.jpg`) into the corresponding folder.
2. Update the filename in [`src/data/portfolio-data.ts`](file:///Users/gabriel/Desktop/oso.photography/src/data/portfolio-data.ts) (e.g. change `/images/portfolio/portraits-1.svg` to `/images/portfolio/my-photo.jpg`).
