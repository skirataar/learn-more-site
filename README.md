# THEVANI Learn More Site

A clean, standalone website for THEVANI's Learn More page. Designed to be deployed independently on Vercel.

## Features

- **Zero dependencies on main frontend** — no Auth, no ThemeProvider, no complex context
- **Minimal and fast** — only Next.js, React, Tailwind, and lucide-react
- **Fully responsive** — mobile-first design
- **Scroll animations** — smooth fade-in and slide-up effects
- **No sign-in options** — only "Book a Demo" and contact CTAs
- **Vercel-ready** — includes vercel.json for seamless deployment

## Sections

1. **Hero** — Logo, headline, subheadline, Learn More and Book Demo buttons
2. **What is THEVANI?** — Simple explanation
3. **Three Layers** — T-IIL, DRCE, TCE cards
4. **Who We Serve** — MSMEs and NBFCs/Lenders panels
5. **How THEVANI Works** — Animated flow diagram
6. **Value Proposition** — Key benefits
7. **CTA Section** — Book Demo and Contact
8. **Footer** — Minimal branding and contact info

## Getting Started

### Local Development

```bash
npm install
npm run dev
```

Then open `http://localhost:3000` in your browser.

### Building for Vercel

```bash
npm run build
npm start
```

## Deployment to Vercel

1. Push this folder to a Git repository (or link it to an existing one)
2. Go to [Vercel Dashboard](https://vercel.com)
3. Click **Import Project**
4. Select the Git repo and point to the `learn-more-site` folder as the root
5. Click **Deploy**

Vercel will automatically run `npm install && npm run build` and serve the site.

## File Structure

```
learn-more-site/
├── src/
│   └── app/
│       ├── layout.tsx        # Root layout
│       ├── page.tsx          # Learn More page (all sections)
│       └── globals.css       # Tailwind styles
├── package.json              # Dependencies
├── next.config.js            # Next.js config
├── tailwind.config.js        # Tailwind config
├── tsconfig.json             # TypeScript config
├── vercel.json               # Vercel deployment config
└── README.md                 # This file
```

## Technologies

- **Next.js 14** — React framework
- **React 18** — UI library
- **Tailwind CSS** — Styling
- **TypeScript** — Type safety
- **Lucide React** — Icons
- **IntersectionObserver** — Scroll animations

## Notes

- No external fonts (avoiding network calls)
- No theme switching or auth context
- All styling via Tailwind utility classes
- Fully self-contained and deployable independently
