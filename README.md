# Surjamukhi Tex Concern — Website

Modern website for **Surjamukhi Tex Concern (STC)**, a garment manufacturer, exporter and buying & sourcing agent in Dhaka, Bangladesh, since 1997.

Built with React (JSX), Vite, Tailwind CSS v4, React Router and Motion.

## Getting started

```bash
npm install
npm run dev      # start dev server
npm run build    # production build into dist/
npm run preview  # preview the production build
npm run lint     # lint with oxlint
```

## Pages

| Route       | Status      |
| ----------- | ----------- |
| `/`         | Done        |
| `/about`    | Done        |
| `/services` | Done        |
| `/products` | Coming soon |
| `/contact`  | Coming soon |

## Folder structure

```
src/
├── assets/images/   brand/ buyers/ products/ home/ about/
├── components/
│   ├── layout/      Navbar, Footer, Layout, ScrollToTop
│   └── ui/          Button, Container, PageHeader, SectionHeading, Reveal, Counter, Logo
├── sections/        one folder per page (home/, about/, services/) + shared/
├── pages/           one file per route
├── data/            all site text and content (edit here)
├── hooks/           custom React hooks
├── lib/             shared helpers (animation settings)
├── styles/          index.css (brand colours and fonts)
└── App.jsx          routes
```

## Editing content

All text, contact details, products, services and testimonials live in `src/data/`. Change the wording there; components don't need to be touched. Search the code for `TODO` to find details that still need confirming.
