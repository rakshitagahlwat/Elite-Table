# 🍽️ Élite Table — Restaurant Booking Website

A complete, professional restaurant website with online table reservation and 50% advance payment flow.

## Tech Stack

- **React 18** (Create React App)
- **CSS** (global stylesheet + inline styles, no extra UI library needed)
- **Google Fonts** — Cormorant Garamond + DM Sans

---

## 🚀 Getting Started

### 1. Install dependencies

```bash
cd elite-table
npm install
```

### 2. Start the dev server

```bash
npm start
```

The app opens at **http://localhost:3000**

### 3. Build for production

```bash
npm run build
```

---

## 📁 Project Structure

```
elite-table/
├── public/
│   └── index.html              ← HTML shell + Google Fonts
├── src/
│   ├── index.js                ← React entry point
│   ├── App.jsx                 ← Root: composes all sections
│   │
│   ├── styles/
│   │   ├── global.css          ← Reset, animations, utility classes
│   │   └── theme.js            ← Color tokens & font constants
│   │
│   ├── data/
│   │   └── index.js            ← All static content (tables, menu, testimonials)
│   │
│   ├── components/
│   │   ├── UI.jsx              ← Shared: Divider, Stars, Stepper, SectionHeader
│   │   ├── Navbar.jsx          ← Fixed nav, transparent → frosted on scroll
│   │   ├── Hero.jsx            ← Full-screen hero with animated stats
│   │   ├── Marquee.jsx         ← Scrolling ticker strip
│   │   ├── Experience.jsx      ← Philosophy / About section
│   │   ├── Menu.jsx            ← Filterable menu (Starters/Mains/Desserts)
│   │   ├── TableExperiences.jsx← Six table genre cards (dark section)
│   │   ├── Gallery.jsx         ← Horizontal scroll gallery
│   │   ├── Testimonials.jsx    ← Guest reviews
│   │   └── Footer.jsx          ← CTAStrip + Footer
│   │
│   └── pages/
│       └── booking/
│           ├── BookingModal.jsx ← Modal shell + step orchestration
│           ├── Step1.jsx        ← Choose table + date/time/guests
│           ├── Step2.jsx        ← Guest details form
│           ├── Step3.jsx        ← Payment (Card / UPI)
│           └── Step4.jsx        ← Confirmation screen
│
└── package.json
```

---

## ✨ Features

| Feature | Details |
|---|---|
| 🏠 Landing Page | 8 sections: Hero, Marquee, Experience, Menu, Table Experiences, Gallery, Testimonials, CTA |
| 🪑 6 Table Genres | Romantic Date, Family Feast, Friends Hangout, Business Lunch, Birthday Bash, Solo Retreat |
| 📅 4-Step Booking | Table selection → Guest details → Payment → Confirmation |
| 💳 Payment Options | Credit/Debit Card or UPI with 50% advance calculation |
| 🧾 Booking Reference | Auto-generated unique booking ID on confirmation |
| 🎨 Theme | Ivory & Deep Forest Green — warm, editorial, luxury aesthetic |
| ✨ Animations | fadeUp, marquee, float, spin — CSS-only, no extra library |
| 📱 Responsive | Mobile-friendly grid layouts throughout |

---

## 🎨 Customisation

**Colors** → `src/styles/theme.js`  
**Menu items** → `src/data/index.js` → `MENU_ITEMS`  
**Table types** → `src/data/index.js` → `TABLES`  
**Restaurant info** → `src/components/Footer.jsx`  
**Fonts** → `public/index.html` + `src/styles/global.css`
