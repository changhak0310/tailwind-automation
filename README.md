This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, install dependencies and run the development server:

```bash
npm install
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses system fonts by default and can be customized with [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) if needed.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Design System

A basic design system is configured with Tailwind CSS. Key colors, spacing, border radius and fonts are exposed as CSS variables in `src/app/globals.css` and mapped in `tailwind.config.ts`.

Reusable components are placed under `src/components`. Visit `/design-system` while running the dev server to preview the available components.

## Streaming Demo

A simple streaming layout is available on the home page. It shows 17 featured streamers using `Header`, `Sidebar` and `StreamCard` components. Dummy pages exist under `/stream/[id]` and `/clips`.