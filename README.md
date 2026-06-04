# VELMONT — Luxury Hotel Booking Platform

A premium frontend portfolio showcasing modern UI engineering for a fictional five-star hospitality brand.

**Tagline:** *Extraordinary Stays. Timeless Elegance.*

**Live demo:** Deploy to [Vercel](https://vercel.com) or run locally (see below).

**Repository:** [github.com/febrianrachmat/hotel](https://github.com/febrianrachmat/hotel)

---

## Overview

VELMONT is a **frontend-only** luxury hotel experience built to demonstrate:

- Premium UI & editorial design
- Responsive layouts (1920 → 375px)
- Component-driven architecture
- Framer Motion interactions
- Mock booking & availability flows

No backend, database, or payment integration — all data is simulated.

---

## Tech Stack

| Technology | Purpose |
|------------|---------|
| [Next.js 15](https://nextjs.org) | App Router, SSR/SSG |
| [React 19](https://react.dev) | UI library |
| [TypeScript](https://www.typescriptlang.org) | Type safety |
| [Tailwind CSS v4](https://tailwindcss.com) | Styling |
| [Framer Motion](https://www.framer.com/motion) | Animations |
| [shadcn/ui](https://ui.shadcn.com) | Accessible UI primitives |
| [Lucide Icons](https://lucide.dev) | Iconography |
| [date-fns](https://date-fns.org) | Date utilities |
| [Embla Carousel](https://www.embla-carousel.com) | Testimonial slider |

---

## Features

### Landing Page

- **Hero** — Full-screen imagery, staggered fade animations, CTAs
- **Featured Suites** — Room cards with glassmorphism hover & pricing
- **Availability Calendar** — Range picker with mock availability states
- **Gallery** — Masonry grid, filters, lightbox with keyboard navigation
- **Guest Reviews** — Editorial testimonial carousel
- **Luxury Amenities** — Icon grid with hover elevation
- **Dining, Experiences, About, FAQ, Contact** — Full hospitality sections
- **Footer** — Navigation, newsletter, social links

### Booking Demo (`/book`)

1. Select room & guests  
2. Guest information form  
3. Booking summary with fees  
4. Success confirmation screen  

### Premium UX

- Custom cursor (desktop)
- Floating “Book Stay” CTA
- Loading splash screen
- Scroll progress indicator
- Page transitions
- `prefers-reduced-motion` support

---

## Project Structure

```
src/
├── app/                 # Next.js routes
├── components/
│   ├── booking/         # Multi-step booking flow
│   ├── layout/          # Navbar, footer, shell
│   ├── sections/        # Page sections
│   ├── shared/          # Reusable UI blocks
│   └── ui/              # shadcn components
├── data/                # Mock content
├── hooks/               # Custom hooks
├── lib/                 # Utilities & tokens
└── types/               # TypeScript interfaces
```

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Install & run

```bash
git clone https://github.com/febrianrachmat/hotel.git
cd hotel
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Build

```bash
npm run build
npm start
```

### Lint

```bash
npm run lint
```

---

## Design System

| Token | Value |
|-------|-------|
| Luxury Black | `#111111` |
| Warm Ivory | `#F8F5F0` |
| Champagne Gold | `#C6A972` |
| Background | `#0A0A0A` / `#121212` |
| Heading font | Playfair Display |
| Body font | Inter |

---

## Deployment

Recommended: [Vercel](https://vercel.com/new) — import the GitHub repo and deploy with default Next.js settings.

Environment variables are **not required** for this project.

---

## Portfolio Notes

This project is intentionally scoped as a **visual & interaction showcase** for recruiters and hiring managers evaluating frontend/UI engineering skills.

---

## License

MIT — free to use for portfolio and learning purposes.
