# AllahCall

The rebuilt website for [allahcall.com](https://allahcall.com), an Islamic dawah and education platform. Next.js 16 (App Router, Cache Components), React 19 and Tailwind CSS 4.

This replaces an older codebase built by the previous developers: [anstariq333/allah-call](https://github.com/anstariq333/allah-call). It is kept for reference only; content and images were carried over from the old live site, not from that repo.

## Run it

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

```bash
npm run build && npm start
```

## Configuration

| Variable | Purpose |
|---|---|
| `NEXT_PUBLIC_FORMSPREE_ID` | Formspree form that receives the contact, volunteer and event-updates forms. Optional: defaults to `mrppaaza`, owned by the allahcall786@gmail.com Formspree account. |

## Where things live

- `src/content/pages/*.ts`: all inner-page content, typed by `src/content/types.ts`. Edit text here.
- `src/app/page.tsx`: the home page.
- `src/app/[slug]/page.tsx`: renders every content page.
- `src/components/blocks`: one component per content block type (columns, cards, quote, events…).
- `src/lib/site.ts`: navigation, contact details, social links.
- `design/`: design rules (`design/README.md`) and the mocks that were explored.

## Content still to confirm

- **Testimonies** (`testimonies-of-new-muslims`, `our-work`) came from the old site and use stock photos; confirm they are real people before launch.
- **Events** with dates in the past move to "Past events" automatically. Add new dated events in `src/content/pages/about.ts`.
- **Statistics** (50,000+ reached, 5,000+ new Muslims, and so on) are carried over from the old site.
