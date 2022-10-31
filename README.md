# BrownStack Slipstream

This is a starter project with NextJS 13 [_App Directory (Beta)_](https://nextjs.org/blog/next-13#app-directory-beta). Bootsraped by `create next-app`.

## Why Next 13 Beta

Because I want to use the new [_Next JS Routing_](https://beta.nextjs.org/docs/routing/fundamentals) feature to create an app with multiple layout without the hassle of using a global state or other solution that might introduce some kind [layout shift](https://web.dev/cls/) on page render. I also believe that [server component](https://nextjs.org/docs/advanced-features/react-18/server-components) is the way to go and this is my attempt to understand it a little better by doing some projects with it.

## Getting Started

First, run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## The Stacks

I prefer to keep the stacks simple while also giving me a lot of flexibility to create a responsive UI design. I think Tailwind is the way to go for most of my frontend development.

-   [Next.JS 13](https://nextjs.org/blog/next-13#app-directory-beta) (with TypeScript)
-   [Tailwind CSS](https://tailwindcss.com/)
