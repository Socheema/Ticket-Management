# Contributing to TicketFlow

Thank you for wanting to contribute! We welcome issues, ideas, and pull requests. This document explains how to get your change ready and what to expect.

## Table of contents
- How to get started
- Branching & commit message style
- Running the project locally
- Making changes
- Tests & linting
- Submitting a pull request
- Reviewing process
- Adding dependencies
- Reporting security issues

## How to get started

1. Fork the repo and create a branch from `main`.
   - Branch name examples:
     - `feat/short-description`
     - `fix/short-description`
     - `chore/short-description`
2. Keep your branch focused on a single logical change.

## Running the project locally

1. Install dependencies:

```bash
npm install
```

2. Start the dev server:

```bash
npm run dev
```

The Vite dev server will print the URL (for example `http://localhost:3001/`).

## Branching & commit message style

- Use short, descriptive branch names (`feat/`, `fix/`, `chore/`).
- Commits should be atomic and use imperative tense, for example:
  - `feat(auth): add remember-me option`
  - `fix(login): handle invalid email format`

## Making changes

- Keep components small and single-purpose. If a file grows large, split it.
- Add or update TypeScript types for public APIs and context values.
- Use existing UI primitives in `src/components/ui` where appropriate.
- Prefer design tokens (CSS variables) from `src/index.css` rather than hard-coded values.

## Tests & linting

- Add unit tests for important logic and integration tests for flows when possible.
- If a test runner is added, include instructions to run tests in this file.
- Run the project locally and verify the change visually.

## Submitting a pull request

1. Push your branch to your fork.
2. Open a PR against `main` with a clear title and description.
3. Include the following in the PR description:
   - What the change does and why
   - Screenshots or GIFs for UI changes
   - Any migrations, environment variables, or special setup
4. Link any related issues.

## Reviewing process

- PRs should have at least one approval from a maintainer before merging.
- Address review feedback with follow-up commits; prefer small incremental updates.

## Adding dependencies

- Open an issue before adding a new dependency explaining:
  - Why the dependency is needed
  - Alternatives considered
  - Size/impact and maintenance status
- Prefer small, well-maintained packages.

## Reporting security issues

If you discover a security vulnerability, do not open a public issue. Contact the maintainers directly (see the repository owner on GitHub) so it can be handled privately.

Thank you for contributing — every improvement helps!
