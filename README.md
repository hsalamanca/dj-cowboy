# DJ Cowboy

Portfolio site for **DJ Cowboy**: landing page with sets, tour dates, and booking.

## Stack

- Vite + React + TypeScript
- Framer Motion
- Syne + Outfit (Google Fonts)

## Develop

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Customize

- Brand copy and dates: `src/App.tsx`
- Colors / type: CSS variables in `src/index.css`
- Hero image: Unsplash URL in the hero `<img>` in `src/App.tsx`

## Publish to GitHub

This environment has no GitHub credentials. From your machine:

```bash
cd dj-site
gh repo create dj-cowboy --public --source=. --remote=origin --push
```
