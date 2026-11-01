# AllahCall design system

Direction **G · App**: the site behaves like a polished mobile app. White cards on a soft grey-green canvas, one deep green used with confidence, photo-led cards, swipeable rows on phones and a bottom tab bar.

`mocks/` holds every direction that was explored: A–C, then D–F (D shipped first), then G–I. G was chosen and replaced D. `shots/` holds their screenshots; `shots/g/` shows the built site.

## Tokens (`src/app/globals.css`)

| Token | Value | Use |
|---|---|---|
| `canvas` | `#f3f5f4` | Page background |
| `paper` | `#ffffff` | Cards, inputs on focus |
| `alt` | `#eaefec` | Image placeholders |
| `ink` / `ink-2` | `#0f1513` / `#3a433f` | Text, primary buttons / body copy |
| `muted` | `#646d68` | Secondary text |
| `line` | `#e3e8e5` | Card borders, dividers |
| `green` / `green-ink` | `#17533e` / `#0e3a2b` | Labels, links, CTA band / Shahada and quote cards |
| `green-tint` | `#e6efea` | Number chips, date tiles, ticks |
| `leaf` | `#7fd3a8` | Accent on dark green |

Fonts: **Inter** for UI and body (semibold section titles), **Newsreader** for hero and feature headings, **Amiri** for Arabic.

## Building blocks

- `card` utility: white, 1px `line` border, 20px radius. Every block sits on one.
- `rail` utility: a swipeable row on phones that becomes a grid from 768px. Set the phone card width with `[--rail-col:80%]` and the desktop columns with `md:grid-cols-*`.
- `wrap`: 16px gutters on phones, 32px from 1024px, 1180px max (1440px from 1760px).
- Heroes are rounded photo cards with a dark fade and white serif title.
- Dark green cards (Shahada, quotes, closing CTA) carry the generated rosette (`src/components/ui/rosette.tsx`, from `tools/geo.py`) at low opacity.

## Rules

- No cream or yellow grounds, no purple or decorative gradients (the only gradient is the dark fade that keeps text readable on photos), no emoji.
- Radii: 20px cards, 24px feature cards, 14px buttons and inputs, 16px photos inside cards.
- Phones get the bottom tab bar (Home, Learn, Accept, Events, Menu); from 1024px the top navigation with dropdowns takes over.
- Inputs use 16px text so iOS does not zoom on focus.
- Every layout must hold from 320px to 2560px with no sideways scroll; that covers phone, tablet, desktop and browser zoom up to about 400%.

## Content

Every inner page is data in `src/content/pages/*.ts`, typed by `src/content/types.ts` and rendered by `src/components/blocks`. To add a page, add an entry to one of those files; the `[slug]` route picks it up. Images are local paths under `/public/images` or Unsplash ids (`photo-…`).
