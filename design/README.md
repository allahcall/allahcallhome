# AllahCall design system

Direction **D · Masjid**: a calm, editorial site in the style of a museum or foundation. White ground, near-black ink, one deep green, light serif headings, hairline rules instead of boxes.

`mocks/` holds the six homepage directions that were explored (A–C, then D–F); `shots/` holds their screenshots. D was chosen.

## Tokens (`src/app/globals.css`)

| Token | Value | Use |
|---|---|---|
| `paper` | `#ffffff` | Page background |
| `alt` | `#f3f4f3` | Alternate section band, image placeholders |
| `ink` | `#111413` | Text, primary buttons, section rules |
| `ink-2` | `#3b413e` | Body copy |
| `muted` | `#6a716d` | Secondary text, labels |
| `line` | `#e2e5e3` | Hairlines |
| `green` / `green-ink` | `#1d5843` / `#123a2c` | Link hover, rosette, closing CTA band only |

Fonts: **Newsreader** (light 300 for headings, italic for emphasis), **Inter** (UI and body), **Amiri** (Arabic).

## Rules

- No cream or beige grounds, no gradients, no glows, no emoji, no pill buttons. Radius is 6px on buttons and inputs and 0 on images.
- Colour is rare: green appears on hover, in the rosette and on the closing CTA band. Everything else is ink on white.
- Structure comes from type and hairlines. A section is a numbered label (`01 Begin here`) in the left three columns and a light serif heading beside it on a 12-column grid.
- Photos are square-cornered and cover-cropped. Team portraits are greyscale and turn to colour on hover.
- The geometric motif is a generated 16-fold rosette (`src/components/ui/rosette.tsx`, from `tools/geo.py`). Use it sparingly: once on the Shahada, once on the 404 page.

## Content

Every inner page is data in `src/content/pages/*.ts`, typed by `src/content/types.ts` and rendered by `src/components/blocks`. To add a page, add an entry to one of those files; the `[slug]` route picks it up. Images are local paths under `/public/images` or Unsplash ids (`photo-…`).
