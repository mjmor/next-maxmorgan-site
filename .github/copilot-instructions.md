# Copilot Instructions for AI Agents

## Project Overview
- This is a [Next.js](https://nextjs.org/) site, bootstrapped with `create-next-app`.
- The main app code is in `src/app/` (including `layout.tsx`, `page.tsx`, and `globals.css`).
- Tailwind CSS is configured via `tailwind.config.ts` and `postcss.config.js`.
- Static assets (e.g., resume PDF) are in `public/`.

## Key Workflows
- **Development:** Start with `npm run dev` (or `yarn dev`, `pnpm dev`, `bun dev`).
- **Hot reload:** Edit files in `src/app/` to see live updates at [http://localhost:3000](http://localhost:3000).
- **Build:** Use `npm run build` to create a production build.
- **Deployment:** Designed for Vercel, but standard Next.js deployment applies.

## Project Conventions
- **Pages:** Use the App Router (`src/app/`). Main entry is `page.tsx`.
- **Global styles:** Defined in `src/app/globals.css`.
- **TypeScript:** All code is TypeScript-first (`.ts`/`.tsx`).
- **No custom API routes** or serverless functions are present by default.
- **Font optimization:** Uses `next/font` for Google Fonts.
- **No explicit test setup** is present (no test files or configs found).

## Patterns & Structure
- **Component structure:** Flat, with all main logic in `src/app/`.
- **Static files:** Place in `public/` for direct serving.
- **Config files:**
  - `next.config.mjs`: Next.js config
  - `tailwind.config.ts`: Tailwind config
  - `tsconfig.json`: TypeScript config

## External Integrations
- No custom integrations or external APIs are configured by default.
- Deployment is intended for Vercel, but not hardcoded.

## Examples
- To add a new page, create a new folder with a `page.tsx` in `src/app/` (e.g., `src/app/about/page.tsx`).
- To add global CSS, edit `src/app/globals.css`.
- To add static assets, place them in `public/` (e.g., `public/my-image.png`).

## When in Doubt
- Follow standard Next.js and Tailwind CSS conventions.
- Reference the README.md for getting started and deployment.
- Keep all new code TypeScript-first and colocate logic in `src/app/` unless a new pattern is established.
