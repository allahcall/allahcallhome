"use client";

import { THEME_KEY, type Theme } from "@/lib/theme";

const current = (): Theme => (document.documentElement.dataset.theme === "dark" ? "dark" : "light");

/** Footer button that flips between light and dark and remembers the choice. */
export function ThemeToggle() {
  function toggle() {
    const next: Theme = current() === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem(THEME_KEY, next);
    } catch {}
  }

  // Both labels render and CSS shows the right one, so the server markup never depends on the theme.
  return (
    <button type="button" onClick={toggle} className="inline-flex items-center gap-1.5 hover:text-green">
      <svg viewBox="0 0 24 24" className="size-3.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" aria-hidden="true">
        <path d="M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5Z" />
      </svg>
      <span className="dark:hidden">Dark theme</span>
      <span className="hidden dark:inline">Light theme</span>
    </button>
  );
}
