# ntmedina.com

Portfolio of Natália Medina — Senior Product Designer & Design Engineer.

## Stack

- **React 18** + **Vite** + **TypeScript**
- **Tailwind CSS v4** — color & typography tokens defined in `src/index.css` (`@theme`)
- **Neue Montreal** custom font (`src/fonts/`, declared via `@font-face`)

## Scripts

```bash
npm install
npm run dev      # dev server (http://localhost:5173)
npm run build    # typecheck + production build → dist/
npm run preview  # preview the production build
```

## Layout & navigation

The home reflows across the four design breakpoints:

| Breakpoint | Width | Navigation |
| ---------- | ----- | ---------- |
| XL         | ≥1280 | Sticky left **sidebar** |
| L          | 1024–1279 | Sticky left **sidebar** |
| M          | 768–1023 | **Top bar** + burger menu |
| S          | <768  | **Top bar** + burger menu |

On **XL / L** the sidebar holds three scroll indicators (`SectionNav`). A
scroll-spy (`useActiveSection`) tracks which section crosses the viewport
reference line and animates the active dash from `12px` faint white to `24px`
accent — e.g. the middle dash grows as you reach *Selected work*. On **M / S**
the same two-dash motif becomes the burger icon and the sections collapse into
a single column.

## Structure

```
src/
  index.css                 # tailwind import, @font-face, @theme color tokens
  data/content.ts           # all page copy + nav config
  hooks/useActiveSection.ts # scroll-spy driving the indicator animation
  components/
    Sidebar.tsx  TopBar.tsx  SectionNav.tsx  Identity.tsx  SocialLinks.tsx
    sections/    Hero  SelectedWork  About  ListSection  Footer  SectionHeading
```
