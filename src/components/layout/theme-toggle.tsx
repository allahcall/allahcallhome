"use client";

import { THEME_KEY, type Theme } from "@/lib/theme";

const current = (): Theme => (document.documentElement.dataset.theme === "dark" ? "dark" : "light");

/** Header button that flips between light and dark and remembers the choice. */
export function ThemeToggle() {
  function toggle() {
    const next: Theme = current() === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem(THEME_KEY, next);
    } catch {}
  }

  // Both icons render and CSS shows the right one, so the server markup never depends on the theme.
  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Switch light or dark theme"
      title="Switch theme"
      className="flex size-10 shrink-0 items-center justify-center rounded-[10px] text-ink-2 transition-colors hover:bg-paper hover:text-ink"
    >
      <svg viewBox="0 0 24 24" className="size-[19px] dark:hidden" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" aria-hidden="true">
        <path d="M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5Z" />
      </svg>
      <svg viewBox="0 0 24 24" className="hidden size-[19px] dark:block" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2.5v2M12 19.5v2M2.5 12h2M19.5 12h2M5.3 5.3l1.4 1.4M17.3 17.3l1.4 1.4M5.3 18.7l1.4-1.4M17.3 6.7l1.4-1.4" />
      </svg>
    </button>
  );
}
