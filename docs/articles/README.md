# Articles

Each `.md` file in `src/content/articles/` is one article on the site. The
file name is its address: `why-we-believe.md` is published at
`/research/why-we-believe` and listed on `/research` under its topic.

There are two ways to add one.

## In the editor at /admin (no Git needed)

Open `https://allahcall.com/admin` and choose **Sign In with Token**.

The token is a GitHub fine-grained personal access token, made once at
github.com → Settings → Developer settings → Fine-grained tokens:

- Repository access: only `allahcall/allahcallhome`
- Permissions: **Contents** and **Pull requests**, both read and write
- An expiry date (90 days is sensible), then make a new one

The token stays in that browser. Anyone holding it can edit the repository,
so don't share it, and revoke it on GitHub if a device is lost.

In the editor, **New Article** opens a form. Every save becomes a pull request
on GitHub, not a change to the live site. Vercel builds a preview of it, which
the editor links to. **Publish** merges the pull request, and the site updates a
minute or two later, once the build's checks pass.

## As a file

Copy `docs/articles/template.md` into `src/content/articles/`, rename it, and
fill it in. The top block (between the two
`---` lines) is the header. Everything under it is the article, written in
Markdown.

```md
---
title: Why the universe needs a cause
topic: god
date: 2026-11-06
summary: One or two sentences that appear under the title and on the research page.
authors:
  - Muhammad Harris Suhaib
  - Muhammad Afzal
pdf: https://doi.org/10.5281/zenodo.12345678
---

The article starts here. Leave a blank line between paragraphs.

## A section heading

More text, with **bold**, *italics* and [a link](https://example.com).
```

| Field     | Needed | What it takes |
| --------- | ------ | ------------- |
| `title`   | yes    | Up to 120 characters. |
| `topic`   | yes    | `god`, `modern`, `quran` or `society`. Picks the section on /research. |
| `date`    | yes    | `YYYY-MM-DD`. Newest articles are listed first. |
| `summary` | yes    | Up to 320 characters. |
| `authors` | no     | One name or a list. Defaults to Muhammad Harris Suhaib. |
| `pdf`     | no     | The full paper: an `https://` link (Zenodo, journal) or `/papers/file-name.pdf` for a PDF placed in `public/papers/`. Adds a "Read the full paper" button. |
| `draft`   | no     | `true` keeps the article off the site while you work on it. |

## Markdown you can use

- `## Heading` and `### Smaller heading` (not `#`: the title is the page's only top heading)
- Paragraphs, **bold**, *italics*, > quotes, lists, tables, and footnotes[^1]
- Links that start with `https://`, `mailto:`, or `/` for pages on this site
- Images: put the file in `public/articles/` and write `![What the image shows](/articles/file.webp)`
  (the editor's image button does this for you)

[^1]: Footnotes look like this.

HTML, scripts, embeds and images from other websites are not allowed.

## If something is wrong

Every article is checked when the site builds. If one has a problem (a missing
field, a misspelt topic, a bad link, HTML), the build stops and the error names
the file and the line. The live site keeps showing the last good version until
the file is fixed, so a mistake never reaches visitors.

Open a pull request rather than committing straight to `main`: Vercel builds a
preview of the PR, so you can read the article as it will look before it goes
live.
