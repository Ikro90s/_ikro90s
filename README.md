# 🦝 Ikro90s Portfolio

> **Design with purpose. Engineer with passion.**

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![React](https://img.shields.io/badge/react-18.x-61dafb.svg)
![TypeScript](https://img.shields.io/badge/typescript-5.x-blue.svg)
![Tailwind](https://img.shields.io/badge/tailwind-3.4-38bdf8.svg)
![Vite](https://img.shields.io/badge/vite-5.x-646cff.svg)

Welcome to **\_ikro90s**, a high-performance, immersive portfolio experience designed to showcase the intersection of logic, design, and impact. Built with a focus on **maximalist aesthetics ("Exuberant")** and **minimalist architecture**.

---

## ✨ Features

### 🎨 Visual Excellence

- **Neon-Infused Design**: A custom "Analog Noir" theme with vibrant RGB interactions and deep, rich dark modes.
- **Glassmorphism**: Premium frosted glass effects on cards, panels, and overlays using `backdrop-blur`.
- **Typographic Hierarchy**: Curated use of `Instrument Serif` and `Satoshi` for an editorial, high-end feel.
- **Bento Grid Layout**: A responsive, Apple-inspired masonry grid for the About section that adapts elegantly from desktop to mobile.

### ⚡ Performance First

- **95+ Lighthouse Score**: Optimized critical rendering path, asset loading, and bundle size.
- **GPU Acceleration**: Animations offloaded to the GPU using `transform: translateZ(0)` to ensure butter-smooth 60fps motion.
- **Smart Loading**: `loading="eager"` for LCP candidates and `loading="lazy"` for off-screen assets.
- **Vite Compression**: Gzip and Brotli compression enabled for production builds.

### 🧩 Interactive Architecture

- **Magnetic Buttons**: Physics-based button interactions using `framer-motion` springs.
- **3D Card Effects**: Projects and tech stack items feature subtle 3D tilts and shimmers on hover.
- **Seamless Navigation**: Smooth scrolling with `Lenis` (ready) and snap-scroll sections.
- **Internationalization (i18n)**: Instant language switching between English and Portuguese.

---

## 🛠️ Tech Stack

### Core

- **Framework**: [React](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) + [shadcn/ui](https://ui.shadcn.com/)

### Animation & UI

- **Motion**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Carousel**: [Embla Carousel](https://www.embla-carousel.com/)
- **Themes**: [next-themes](https://github.com/pacocoursey/next-themes)

---

## 🚀 Getting Started

Clone the repository and install dependencies to start your journey.

```bash
# 1. Clone the project
git clone https://github.com/Ikro90s/_ikro90s.git

# 2. Enter the directory
cd _ikro90s

# 3. Install dependencies
npm install

# 4. Start the dev server
npm run dev
```

### Build for Production

```bash
npm run build
# The optimized output will be in the /dist folder
```

### Deploy to GitHub Pages

```bash
npm run deploy
```

---

## 📂 Project Structure

```
src/
├── components/        # UI Components & Sections
│   ├── ui/            # Reusable primitives (Buttons, Cards)
│   ├── HeroSection    # The main landing experience
│   ├── AboutSection   # Bento grid layout
│   ├── Projects       # Carousel & Case Studies
│   └── TechStack      # Interactive skill cards
├── contexts/          # React Contexts (Language, Theme)
├── i18n/              # Translation files
├── lib/               # Utilities & Helpers
└── pages/             # Route views
```

---

## 🌍 Internationalization

All content is managed via `src/i18n/translations.ts`. To add a new language or update text:

1. Open `translations.ts`.
2. Add your keys to the `en` and `pt` objects.
3. Use the `useLanguage` hook to access them in components:
   ```tsx
   const { t } = useLanguage();
   <h1>{t.hero.title}</h1>;
   ```

---

## 📄 License

This project is open source and available under the **MIT License**.

---

<div align="center">
  <p>Made with 💜 and 🦝 by <a href="https://github.com/Ikro90s">Ikro90s</a></p>
</div>
