"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import type { NavGroup } from "@/lib/site";

export function DesktopNav({ groups }: { groups: NavGroup[] }) {
  const [open, setOpen] = useState<string | null>(null);
  const [category, setCategory] = useState<string | null>(null);
  const toggles = useRef<Record<string, HTMLButtonElement | null>>({});
  const close = () => { setOpen(null); setCategory(null); };
  const linkClass = "block rounded-xl px-3.5 py-2.5 text-[14.5px] text-ink-2 hover:bg-canvas hover:text-ink focus-visible:bg-canvas";

  return (
    <nav aria-label="Main" className="ml-auto hidden lg:block" onKeyDown={(event) => {
      if (event.key === "Escape" && open) {
        event.preventDefault();
        toggles.current[open]?.focus();
        close();
      }
    }}>
      <ul className="flex items-center">
        {groups.map((group, index) => (
          <li key={group.href} className="relative" onPointerEnter={(event) => { if (event.pointerType === "mouse") { setOpen(group.href); setCategory(null); } }} onPointerLeave={(event) => { if (event.pointerType === "mouse") close(); }}
            onBlur={(event) => { if (!event.currentTarget.contains(event.relatedTarget)) close(); }}>
            <div className="flex items-center rounded-[10px] hover:bg-paper">
              <Link href={group.href} onClick={close} className="flex h-10 items-center px-2 text-[14.5px] font-medium text-ink-2 hover:text-ink">{group.label}</Link>
              <button type="button" ref={(node) => { toggles.current[group.href] = node; }}
                aria-label={`Show ${group.label} submenu`} aria-expanded={open === group.href} aria-controls={`nav-${index}`}
                className={group.href === "/articles"
                  ? "grid size-6 place-items-center rounded-lg text-muted hover:text-ink"
                  : "sr-only focus:not-sr-only focus:rounded-lg focus:px-2 focus:py-1 focus:text-sm"}
                onClick={() => { setOpen(open === group.href ? null : group.href); setCategory(null); }}>
                {group.href === "/articles" ? <span aria-hidden>⌄</span> : "Open submenu"}
              </button>
            </div>
            <div id={`nav-${index}`} hidden={open !== group.href} className={`absolute top-full w-64 pt-2 ${index >= groups.length - 2 ? "right-0" : "left-0"}`}>
              <ul className="card p-1.5 shadow-xl">
                {group.links.map((link, linkIndex) => (
                  <li key={link.href} className="relative" onMouseEnter={() => setCategory(link.links ? link.href : null)}>
                    {link.links ? (
                      <>
                        <button type="button" aria-expanded={category === link.href} aria-controls={`nav-${index}-${linkIndex}`}
                          className={`flex w-full items-center justify-between text-left ${linkClass}`}
                          onClick={() => setCategory(category === link.href ? null : link.href)}>
                          {link.label}<span aria-hidden>‹</span>
                        </button>
                        <div id={`nav-${index}-${linkIndex}`} hidden={category !== link.href}
                          className="absolute right-full top-0 w-[min(25rem,40vw)] pr-2">
                          <ul className="card max-h-[min(32rem,calc(100dvh-22rem))] overflow-y-auto overscroll-contain p-1.5 shadow-xl">
                            <li><Link href={link.href} onClick={close} className={`${linkClass} font-semibold text-green`}>All {link.label}</Link></li>
                            {link.links.map((article) => (
                              <li key={article.href}><Link href={article.href} dir="auto" onClick={close} className={linkClass}>{article.label}</Link></li>
                            ))}
                          </ul>
                        </div>
                      </>
                    ) : <Link href={link.href} onFocus={() => setCategory(null)} onClick={close} className={linkClass}>{link.label}</Link>}
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
        <li><Link href="/contact" className="flex h-10 items-center rounded-[10px] px-2 text-[14.5px] font-medium text-ink-2 hover:bg-paper">Contact</Link></li>
      </ul>
    </nav>
  );
}
