# Project Guidelines — Ticket Management Web App

This document captures coding, design and accessibility conventions for the project. Follow these rules to keep the
codebase consistent, maintainable, and accessible.

If you propose a change that conflicts with these rules, explain the reason in the PR and get an approval from a
project maintainer.

## Table of contents
- Purpose
- Coding conventions
- File and component structure
- Styling / Tailwind usage
- Design tokens and theming
- Accessibility
- Performance and animations
- State and context
- Testing and QA
- Pull requests and commits

## Purpose

These guidelines ensure predictable development and a consistent user experience across the app.

## Coding conventions

- Use TypeScript for all new files. Keep types explicit for public components and context values.
- Prefer small, single-responsibility components. If a component grows beyond ~200 LOC, split it.
- Name React components using PascalCase. Name files matching the exported component (e.g. `Header.tsx`).
- Keep helper functions in separate files under `src/utils` or a feature folder.
- Avoid inline anonymous functions in render where they create a new reference each render (use `useCallback` when needed).

## File and component structure

- Organize by feature: `src/pages`, `src/components`, `src/contexts`, `src/styles`, `src/components/ui` (shared primitives).
- UI primitives (Button, Input, Card, etc.) live under `src/components/ui` and should be minimal wrappers over primitives + Tailwind classes.
- Context providers live in `src/contexts` and should expose a typed hook (e.g. `useAuth`).

## Styling / Tailwind usage

- We use Tailwind + design tokens (CSS variables). Prefer utility classes for layout and simple styling.
- For reusable styles, create small utility components in `src/components/ui` rather than copying long class lists.
- Use arbitrary values sparingly (e.g. `text-[4rem]`) only for exceptional headings — prefer token variables where possible.
- Keep global rules in `src/styles/globals.css` and Tailwind output in `src/index.css`.

## Design tokens and theming

- Colors, font sizes and spacing are defined as CSS variables in `src/index.css` (generated Tailwind). Prefer these tokens over hard-coded values.
- The project supports light/dark themes via the `.dark` class on the root. Theme is controlled by the `next-themes` provider.

## Accessibility

- All interactive elements must be reachable by keyboard and have visible focus styles.
- Provide descriptive `aria-*` attributes where semantics are not obvious.
- Images must have meaningful `alt` text; decorative images may use empty `alt=""`.
- Maintain contrast ratios that meet WCAG AA for normal text (4.5:1) and large text (3:1).

## Performance and animations

- Prefer CSS transforms and opacity for animations to keep them GPU-accelerated.
- Keep complex animations limited and provide a `prefers-reduced-motion` fallback.
- Lazy-load large assets (images, charts) and use placeholders for better perceived performance.

## State and context

- Keep global state minimal. Use React Context for auth, tickets and theme. For complex local state prefer React Query / SWR or a lightweight state library.
- Context providers should be simple and return stable references (`useCallback`/`useMemo` where appropriate).

## Testing and QA

- Add unit tests for critical logic (utils, data transforms) and a few integration tests for forms and flows.
- Manual QA: verify keyboard navigation, form validation, and mobile/desktop layouts on Chrome/Edge/Firefox/Safari.

## Pull requests and commits

- Keep PRs focused and small. Each PR should have a clear description, link to any related issue and screen captures if UI changed.
- Write meaningful commit messages (imperative tense): `feat(auth): add remember-me flag`.
- Tag reviewers and explain any migration or build steps required.

## Helpful tips

- When updating design tokens, run a visual pass across major pages (Landing, Login, Dashboard).
- If you need to add a third-party dependency, note why and prefer small, well-maintained packages.

---

If anything here needs clarification or you want to add project-specific rules, open a PR against this file.
