"use client";

import MiniSearch, { type SearchResult } from "minisearch";
import { useRouter } from "next/navigation";
import { useEffect, useMemo, useRef, useState, type ReactNode } from "react";
import type { SearchDoc } from "@/lib/search";

type Hit = SearchDoc & SearchResult;

// Built once per visit, on first open: the index file is cached by the browser after that.
let index: Promise<MiniSearch<SearchDoc>> | undefined;

function loadIndex() {
  index ??= fetch("/search-index.json")
    .then((r) => {
      if (!r.ok) throw new Error(`search index: ${r.status}`);
      return r.json() as Promise<SearchDoc[]>;
    })
    .then((docs) => {
      const ms = new MiniSearch<SearchDoc>({
        fields: ["page", "section", "text"],
        storeFields: ["url", "page", "section", "text"],
        searchOptions: {
          boost: { page: 3, section: 2 },
          prefix: true,
          fuzzy: (term) => (term.length > 4 ? 0.2 : false),
          combineWith: "AND",
        },
      });
      ms.addAll(docs);
      return ms;
    })
    .catch((e) => {
      index = undefined;
      throw e;
    });
  return index;
}

/** Opens a section at its heading: the browser scrolls to and highlights the text fragment. */
function hrefFor(hit: Hit) {
  if (!hit.section) return hit.url;
  const text = encodeURIComponent(hit.section).replaceAll("-", "%2D");
  return `${hit.url}#:~:text=${text}`;
}

const escape = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

/** ~160 characters around the first match, with matched words marked. */
function Snippet({ text, terms }: { text: string; terms: string[] }) {
  if (!terms.length) return <>{text.slice(0, 160)}</>;
  const re = new RegExp(`(${terms.map(escape).join("|")})`, "gi");
  const at = text.search(re);
  const start = at > 60 ? text.lastIndexOf(" ", at - 50) + 1 : 0;
  const end = Math.min(text.length, start + 160);
  const slice = `${start ? "…" : ""}${text.slice(start, end)}${end < text.length ? "…" : ""}`;
  return (
    <>
      {slice.split(re).map((part, i) =>
        i % 2 ? (
          <mark key={i} className="rounded-[3px] bg-green-tint text-green-ink">
            {part}
          </mark>
        ) : (
          part
        ),
      )}
    </>
  );
}

const searchIcon = (
  <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
    <circle cx="11" cy="11" r="6.5" />
    <path d="m16 16 4 4" />
  </svg>
);

/** Header search button and the ⌘K dialog it opens. Searching runs entirely in the browser. */
export function Search() {
  const dialog = useRef<HTMLDialogElement>(null);
  const input = useRef<HTMLInputElement>(null);
  const list = useRef<HTMLUListElement>(null);
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [ms, setMs] = useState<MiniSearch<SearchDoc>>();
  const [failed, setFailed] = useState(false);
  const [active, setActive] = useState(0);

  const q = query.trim();
  const hits = useMemo(() => (ms && q ? (ms.search(q).slice(0, 12) as Hit[]) : []), [ms, q]);

  const open = () => {
    dialog.current?.showModal();
    input.current?.select();
    setFailed(false);
    loadIndex().then(setMs, () => setFailed(true));
  };

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        if (dialog.current?.open) dialog.current.close();
        else open();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  });

  useEffect(() => {
    list.current?.children[active]?.scrollIntoView({ block: "nearest" });
  }, [active]);

  const go = (hit: Hit) => {
    dialog.current?.close();
    // Text fragments only scroll on a real page load; whole-page hits stay client-side.
    if (hit.section) window.location.assign(hrefFor(hit));
    else router.push(hit.url);
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown" || e.key === "ArrowUp") {
      e.preventDefault();
      if (!hits.length) return;
      const step = e.key === "ArrowDown" ? 1 : -1;
      setActive((a) => (a + step + hits.length) % hits.length);
    } else if (e.key === "Enter" && hits[active]) {
      e.preventDefault();
      go(hits[active]);
    }
  };

  let body: ReactNode;
  if (failed) body = <p className="px-5 py-8 text-center text-muted">Search couldn&apos;t load. Check your connection and try again.</p>;
  else if (!q) body = <p className="px-5 py-8 text-center text-muted">Search every page, course and research paper.</p>;
  else if (!ms) body = <p className="px-5 py-8 text-center text-muted">Loading…</p>;
  else if (!hits.length) body = <p className="px-5 py-8 text-center text-muted">No results for &ldquo;{q}&rdquo;.</p>;
  else
    body = (
      <ul ref={list} id="search-results" role="listbox" aria-label="Results" className="p-1.5">
        {hits.map((hit, i) => (
          <li key={hit.id} id={`search-hit-${i}`} role="option" aria-selected={i === active}>
            <a
              href={hrefFor(hit)}
              onClick={(e) => {
                if (e.metaKey || e.ctrlKey || e.shiftKey) return;
                e.preventDefault();
                go(hit);
              }}
              onMouseMove={() => setActive(i)}
              className={`block rounded-[12px] px-3.5 py-3 ${i === active ? "bg-canvas" : ""}`}
            >
              <span className="block text-[12.5px] font-medium text-green">{hit.page}</span>
              <span className="mt-0.5 block text-[15px] leading-snug font-semibold">{hit.section || hit.page}</span>
              <span className="mt-1 line-clamp-2 block text-[13.5px] text-ink-2">
                <Snippet text={hit.text} terms={hit.terms} />
              </span>
            </a>
          </li>
        ))}
      </ul>
    );

  return (
    <>
      <button
        type="button"
        onClick={open}
        aria-label="Search"
        className="flex size-10 items-center justify-center rounded-[10px] text-ink-2 transition-colors hover:bg-paper hover:text-ink xl:w-auto xl:gap-2 xl:border xl:border-line xl:bg-paper/60 xl:pr-2 xl:pl-3"
      >
        {searchIcon}
        <span className="hidden text-[14px] text-muted xl:inline">Search</span>
        <kbd className="hidden rounded-[6px] border border-line px-1.5 font-sans text-[11.5px] text-muted xl:inline">⌘K</kbd>
      </button>

      <dialog
        ref={dialog}
        aria-label="Search the site"
        onClick={(e) => e.target === dialog.current && dialog.current.close()}
        className="m-0 mx-auto mt-[max(1rem,8vh)] max-h-[min(36rem,calc(100svh-2rem))] w-[min(40rem,calc(100%-2rem))] max-w-none flex-col overflow-hidden rounded-[20px] border border-line bg-paper p-0 text-ink shadow-[0_24px_60px_-20px_rgb(15_21_19/0.35)] backdrop:bg-ink/30 backdrop:backdrop-blur-[2px] open:flex"
      >
        <div className="flex items-center gap-2.5 border-b border-line px-4">
          <span className="text-muted">{searchIcon}</span>
          <input
            ref={input}
            type="search"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setActive(0);
            }}
            onKeyDown={onKeyDown}
            placeholder="Search AllahCall"
            aria-label="Search"
            role="combobox"
            aria-expanded={hits.length > 0}
            aria-controls="search-results"
            aria-activedescendant={hits.length ? `search-hit-${active}` : undefined}
            autoComplete="off"
            spellCheck={false}
            className="h-14 min-w-0 flex-1 bg-transparent text-[16px] outline-none placeholder:text-muted [&::-webkit-search-cancel-button]:hidden"
          />
          <button
            type="button"
            onClick={() => dialog.current?.close()}
            className="h-8 rounded-[8px] px-2 text-[13px] font-medium text-muted hover:bg-canvas hover:text-ink"
          >
            Esc
          </button>
        </div>
        <div className="overflow-y-auto overscroll-contain">{body}</div>
      </dialog>
    </>
  );
}
