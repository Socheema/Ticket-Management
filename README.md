# TicketFlow — Ticket Management Web App

A minimal, modern ticket management web application built with React, Vite, Tailwind CSS and TypeScript. This repo contains the UI, context providers (Auth, Tickets), and reusable UI primitives.

This project was scaffolded from a Figma design (design reference was used for visual layout and assets).

## Features

- Landing, Authentication (Login / Signup)
- Dashboard and Ticket Management pages
- Theming (light/dark) with `next-themes`
- Reusable UI primitives under `src/components/ui`
- Tailwind + CSS variables for design tokens

## Getting started

Prerequisites

- Node.js 18+ (or latest LTS)
- npm (or use pnpm/yarn as preferred; commands below assume npm)

Install

```bash
npm install
```

Run dev server

```bash
npm run dev
```

The Vite dev server will print the local URL (for example `http://localhost:3001/`). Open it in your browser.

Build for production

```bash
npm run build
```

Preview the production build locally

```bash
npm run preview
```

## Scripts

- `npm run dev` — start Vite dev server
- `npm run build` — build production assets
- `npm run preview` — preview built assets locally

## Important files & structure

- `src/main.tsx` — app entry, theme provider is configured here
- `src/App.tsx` — routes and top-level providers
- `src/components` — UI components and primitives
- `src/contexts` — React context providers (Auth, Tickets)
- `src/pages` — page-level components (Landing, Login, Signup, Dashboard)
- `src/index.css` — generated Tailwind CSS and design tokens
- `src/styles/globals.css` — small global utilities and animation keyframes

## Theming and fonts

- Dark mode is implemented using `next-themes` and the `.dark` class. The provider is in `src/main.tsx` and the Header contains a toggle.
- Space Grotesk font is imported at the top of `src/index.css` and applied globally via the `--font-sans` token.

## Styling and design tokens

- Tailwind utilities are used throughout the codebase. Global tokens (colors, font sizes, spacing) are defined as CSS variables in `src/index.css`.
- Prefer tokens (variables) rather than hard-coded px/rem values to keep consistent spacing and typography.

## Accessibility

- The app follows basic accessibility guidelines: focus states, keyboard navigation, and alt text for images where appropriate. Follow `src/guidelines/Guidelines.md` for more rules.

## Contributing

- Open an issue for major changes or propose a PR for small fixes and features.
- Keep PRs focused and small. Include screenshots for UI changes and explanation of the change.
- Follow the coding conventions in `src/guidelines/Guidelines.md`.

## Troubleshooting

- If TypeScript reports missing React types, install them locally:

```bash
npm install --save-dev typescript @types/react @types/react-dom
```

- If the dev server port is in use, Vite will try another port — check the terminal output for the URL.


