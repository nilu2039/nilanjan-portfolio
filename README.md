# Nilanjan Mandal — Portfolio

A responsive portfolio built with Next.js App Router, TypeScript, and Tailwind CSS. Includes light, dark, and system themes, professional project summaries, personal projects, experience, and a downloadable résumé.

## Development

```bash
pnpm install
pnpm dev
```

Requires Node.js 24.x and pnpm 10.34.8 (pinned in `package.json`). Open [localhost:3000](http://localhost:3000).

```bash
pnpm typecheck
pnpm lint
pnpm build
pnpm start
```

## Updating the content

- Contact details and profile links: `src/constants.ts`.
- Introduction, projects, experience, and skills: the corresponding files in `src/components/`.
- Résumé: replace `public/docs/resume.pdf` to preserve existing download links.
- Design and responsive layouts: `src/app/globals.css`.
- Page metadata: `src/app/layout.tsx`.

Professional project graphics are labeled illustrations. HushMark, Flixr, and Kaigi use original application screenshots. Content renders on the server; navigation, theme controls, and progressive scroll effects run in the browser. Geist is hosted locally with its license in `src/assets/fonts/`, with no external font requests. Icons use Phosphor. Motion respects reduced motion preferences, and content remains available without JavaScript. Privacy, terms, and a custom 404 complete the supporting routes.

Tailwind CSS 4 uses CSS configuration in `globals.css` and `@tailwindcss/postcss`. ESLint uses `eslint.config.mjs`. Type checking runs the TypeScript 7 native compiler; the official TypeScript 6 API compatibility package remains available to Next.js and ESLint, which require the JavaScript compiler API.
