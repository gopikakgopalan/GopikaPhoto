# Gops Photography

A single-page portfolio site for a wedding and event photographer, rebuilt from plain HTML/CSS with **React**, **Vite** and **Tailwind CSS**. It keeps the original content and look, and adds a filterable gallery and a like button on each photo.

This is a solo project for Assignment 2, an evolution of the Assignment 1 plain HTML/CSS site.

## Features

- **Filterable gallery:** filter photos by category (All, Traditional, Portraits, Receptions) using React `useState`
- **Like button on every photo:** a small controlled component reused per gallery item
- **Data-driven gallery:** all 12 photos live in one data file, not copy-pasted JSX
- **Booking enquiry form:** name, email, event details, venue and phone fields, generated from an array
- **Mobile-first responsive layout:** unprefixed classes for phones, then `sm:`, `md:` and `lg:` for larger screens
- **Accessible markup:** semantic landmarks, one `h1`, labelled form fields, `aria-pressed` on toggle buttons, and alt text on every image
- **No horizontal scroll** at phone, tablet or desktop widths

## Tech stack

- [React](https://react.dev/) (JavaScript, no TypeScript)
- [Vite](https://vite.dev/) for scaffolding and the dev server
- [Tailwind CSS](https://tailwindcss.com/) via the `@tailwindcss/vite` plugin
- Google Fonts: Montserrat and Playfair Display

No other libraries are used. All data is hardcoded.

## Project structure

```
GopsPhoto/
├── public/
│   └── images/           # gallery, hero and about photos
├── src/
│   ├── components/
│   │   ├── Header.jsx    # site name + navigation
│   │   ├── Hero.jsx      # h1, tagline, booking button
│   │   ├── Gallery.jsx   # category filter + photo grid (holds the state)
│   │   ├── PhotoCard.jsx # one gallery item
│   │   ├── LikeButton.jsx# controlled like toggle
│   │   ├── About.jsx
│   │   ├── Inquiry.jsx   # booking enquiry form
│   │   └── Footer.jsx
│   ├── data/
│   │   └── gallery_data.jsx  # array of photo objects
│   ├── App.jsx
│   ├── index.css         # Tailwind import + theme colours and fonts
│   └── main.jsx
├── index.html
├── package.json
└── vite.config.js
```

## How it works

**Data file:** `gallery_data.jsx` exports `galleryData`, an array of objects with `id`, `image`, `title`, `category` and `alt`. `Gallery` maps over it to render the cards.

**Filter:** `Gallery` keeps the active category in one `useState` string. The visible photos are computed from that string on every render.

**Controlled component:** `LikeButton` has no state of its own. It receives `liked` and `onToggle` as props, and `Gallery` stores the liked photo ids in state.

**Theme:** colours and fonts are defined once in the `@theme` block in `index.css`, so they are available as Tailwind classes such as `text-accent` and `font-serif`.

## Getting started

```bash
# install dependencies
npm install

# start the dev server
npm run dev

# build for production
npm run build

# preview the production build
npm run preview
```

## Responsive breakpoints

Styles are written mobile-first. Unprefixed classes apply to phones, and prefixed classes add changes at larger widths.

| Prefix | Min width | Example use |
|--------|-----------|-------------|
| (none) | 0 | single-column gallery, stacked header and footer |
| `sm:`  | 640px | two-column gallery |
| `md:`  | 768px | row header, side-by-side About, footer columns |
| `lg:`  | 1024px | three-column gallery, larger hero text |

## Notes

- The contact form does not send anything yet. Submitting is prevented, and a backend is planned for Week 3.
- Gallery captions are always visible on phones and appear on hover from `md:` upwards, because touch screens have no hover.

## Author

Gopika Korambil Gopalan
