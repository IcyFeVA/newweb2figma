# Mantine UI Starter

A small, design-focused React and TypeScript project for exploring screens with Mantine components and Lucide icons. The first screen is a responsive sign-in form; it is a UI demo and does not connect to authentication or send entered data anywhere.

## Stack

- Vite, React, and TypeScript
- Mantine Core and Hooks
- Lucide React

## Run Locally

```sh
npm install
npm run dev
```

Useful scripts: `npm run build`, `npm run lint`, and `npm run preview`.

## Figma Workflow

Push this repository to Git and import it through Figma's Git import flow. The project already has Mantine and Lucide installed, a root `MantineProvider`, and a working example screen to use as a starting point.

- Mantine LLM docs: https://mantine.dev/llms.txt
- Mantine full LLM docs: https://mantine.dev/llms-full.txt

Use `@mantine/core` and `lucide-react` for new screens; the demo form in `src/App.tsx` shows the current setup.
