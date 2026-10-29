# Copilot Instructions

## Project Intent
- This is a design-focused React project intended for iteration in Figma.
- Build screens from Mantine components and use Lucide React for icons.
- The sign-in form is a UI demo only. Do not add authentication requests, credential storage, or claims that sign-in works without an explicit request.

## UI Conventions
- Keep Mantine's core stylesheet imported in `src/main.tsx` and the app wrapped in `MantineProvider`.
- Prefer Mantine components and theme tokens over hand-built equivalents.
- Preserve responsive layouts, semantic labels, keyboard access, and visible focus states.

## Commands
- `npm run dev` starts the local app.
- `npm run build` type-checks and builds for production.
- `npm run lint` checks the source with ESLint.
