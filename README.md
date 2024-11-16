# Portfolio 2.0

A personal portfolio project with integrated headless CMS.

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app). It integrates with [Sanity.io](https://www.sanity.io/) for content management and uses Tailwind CSS for styling.

## Getting Started

First, install the dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open http://localhost:3000 with your browser to see the result.

You can start editing the page by modifying src/app/page.tsx. The page auto-updates as you edit the file.

Project Structure
The project has the following structure:

```
src/
  app/
    (personal)/
    api/
    studio/
  components/
    views/
    previews/
    ui/
  sanity/
tailwind.config.ts
tsconfig.json
sanity.config.ts
next.config.mjs
```

Key Files and Directories
- sanity.config.ts: Configuration for Sanity Studio.
- src/app: NextJs app with all the pages
- src/components: React components used throughout the application.
- src/sanity: Sanity-related configurations and schemas.


## Sanity Integration

Sanity Studio is set up and mounted on the `app/studio/[[...index]]/Studio.tsx`.


## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

To learn more about Sanity.io, visit the [Sanity Documentation](https://www.sanity.io/docs).

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
- To learn more about Sanity.io, visit the [Sanity Documentation](https://www.sanity.io/docs).

