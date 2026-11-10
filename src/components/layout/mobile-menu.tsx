"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState, type ReactNode } from "react";
import { Star } from "@/components/ui/mark";
import { ThemeSwitch } from "./theme-switch";
import { nav, site } from "@/lib/site";

const icon = "size-[22px]";

const tabs: { label: string; href: string; icon: ReactNode; match: string[] }[] = [
  {
    label: "Home",
    href: "/",
    match: ["/"],
    icon: (
      <svg viewBox="0 0 24 24" className={icon} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round">
        <path d="M4 10.5 12 4l8 6.5V20h-5v-6H9v6H4z" />
      </svg>
    ),
  },
  {
    label: "Learn",
    href: "/islam",
    match: ["/islam", "/quran-sunnah", "/dawah", "/marriage", "/courses", "/companionship", "/programs", "/articles-books"],
    icon: (
      <svg viewBox="0 0 24 24" className={icon} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round">
        <path d="M4 5.5C6.5 4 9.5 4 12 6c2.5-2 5.5-2 8-.5V19c-2.5-1.5-5.5-1.5-8 .5-2.5-2-5.5-2-8-.5z" />
        <path d="M12 6v13.5" />
      </svg>
    ),
  },
  { label: "Accept", href: "/accept-islam-now", match: ["/accept-islam-now", "/shahada"], icon: null },
  {
    label: "Events",
    href: "/events",
    match: ["/events"],
    icon: (
      <svg viewBox="0 0 24 24" className={icon} fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="3.5" y="5" width="17" height="15" rx="3" />
        <path d="M3.5 10h17M8 3v4M16 3v4" />
      </svg>
    ),
  },
];

/** Bottom tab bar and full menu sheet for phones and tablets. */
export function MobileNav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Close the moment a link is tapped: a link to the page already showing never
  // changes the path, and on a slow connection the next page takes a while.
  const close = () => setOpen(false);

  // Also close after navigating some other way (back button, search).
  const [lastPath, setLastPath] = useState(pathname);
  if (pathname !== lastPath) {
    setLastPath(pathname);
    setOpen(false);
  }

  // Like a native app, the tab bar slides away while reading down the page and
  // comes back the moment the reader scrolls up (or reaches the top).
  const [tucked, setTucked] = useState(false);
  useEffect(() => {
    let last = window.scrollY;
    let frame = 0;
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const y = window.scrollY;
        const atEnd = y + window.innerHeight >= document.documentElement.scrollHeight - 4;
        if (y < 64 || atEnd) setTucked(false);
        else if (y > last + 6) setTucked(true);
        else if (y < last - 6) setTucked(false);
        else return;
        last = y;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);
  const hidden = tucked && !open;

  // A new page starts with the bar showing.
  const [shownPath, setShownPath] = useState(pathname);
  if (pathname !== shownPath) {
    setShownPath(pathname);
    setTucked(false);
  }

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const tabClass = (on: boolean) =>
    `flex h-full flex-col items-center justify-center gap-0.5 text-[11px] font-medium ${on ? "text-green" : "text-muted"}`;

  return (
    <div className="lg:hidden">
      <div
        id="menu-sheet"
        hidden={!open}
        className="fixed inset-0 z-40 overflow-y-auto overscroll-contain bg-canvas"
      >
        <nav aria-label="Menu" className="wrap pt-5 pb-[calc(6.5rem+env(safe-area-inset-bottom))]">
          <div className="flex items-center justify-between">
            <p className="text-[22px] font-semibold tracking-[-0.02em]">Menu</p>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="h-10 rounded-[12px] bg-paper px-4 text-[14px] font-semibold"
            >
              Close
            </button>
          </div>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {nav.map((group) => (
              <details key={group.label} className="group card overflow-hidden">
                <summary className="flex cursor-pointer list-none items-center justify-between px-5 py-4 text-[17px] font-semibold">
                  {group.label}
                  <span aria-hidden className="text-xl font-light text-muted transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <ul className="border-t border-line px-2 py-2">
                  {group.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        aria-current={pathname === link.href ? "page" : undefined}
                        onClick={close}
                        className="block rounded-[12px] px-3 py-2.5 text-[15px] text-ink-2 aria-[current=page]:bg-green-tint aria-[current=page]:text-green"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </details>
            ))}
          </div>
          <div className="mt-3 grid gap-3 sm:grid-cols-2">
            <Link href="/contact" onClick={close} className="card flex items-center justify-between px-5 py-4 text-[17px] font-semibold">
              Contact us <span aria-hidden>→</span>
            </Link>
            <a href={site.phone.href} className="card flex items-center justify-between px-5 py-4 text-[15px] text-ink-2">
              {site.phone.display} <span className="text-[13px] text-muted">Call or WhatsApp</span>
            </a>
          </div>
          <div className="card mt-3 flex flex-wrap items-center justify-between gap-3 px-5 py-4">
            <p className="text-[15px] font-semibold">Appearance</p>
            <ThemeSwitch />
          </div>
        </nav>
      </div>

      <nav
        aria-label="Quick links"
        onFocus={() => setTucked(false)}
        className={`fixed inset-x-3 bottom-[calc(env(safe-area-inset-bottom)+10px)] z-50 mx-auto max-w-md overflow-hidden rounded-[28px] border [view-transition-name:tab-bar] glass [--glass-tint:var(--color-paper)] shadow-[0_12px_32px_-8px_rgb(15_21_19/0.28)] transition-transform duration-300 ease-[cubic-bezier(0.2,0.8,0.2,1)] motion-reduce:transition-none dark:shadow-[0_12px_32px_-8px_rgb(0_0_0/0.7)] ${hidden ? "translate-y-[calc(100%+env(safe-area-inset-bottom)+24px)]" : ""}`}
      >
        <ul className="grid h-16 grid-cols-5 px-1">
          {tabs.map((t) => {
            const on = !open && t.match.includes(pathname);
            if (!t.icon)
              return (
                <li key={t.label}>
                  <Link href={t.href} onClick={close} className={tabClass(true)} aria-current={on ? "page" : undefined}>
                    <span className="grid h-8.5 w-12 place-items-center rounded-full bg-brand text-white">
                      <Star className="size-5" />
                    </span>
                    {t.label}
                  </Link>
                </li>
              );
            return (
              <li key={t.label}>
                <Link href={t.href} onClick={close} className={tabClass(on)} aria-current={on ? "page" : undefined}>
                  {t.icon}
                  {t.label}
                </Link>
              </li>
            );
          })}
          <li>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="menu-sheet"
              className={`w-full ${tabClass(open)}`}
            >
              <svg viewBox="0 0 24 24" className={icon} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                {open ? <path d="M6 6l12 12M18 6 6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
              </svg>
              {open ? "Close" : "Menu"}
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
}
