"use client";

import { useSyncExternalStore, type ReactNode } from "react";
import { applyTheme, type ThemePref } from "@/lib/theme";

const icon = "size-4";
const options: { pref: ThemePref; label: string; on: string; icon: ReactNode }[] = [
  {
    pref: "system",
    label: "System",
    on: "in-data-[theme-pref=system]:bg-paper in-data-[theme-pref=system]:text-ink in-data-[theme-pref=system]:shadow-sm",
    icon: (
      <svg viewBox="0 0 24 24" className={icon} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" strokeLinecap="round">
        <rect x="3" y="4" width="18" height="12" rx="2" />
        <path d="M8 20h8M12 16v4" />
      </svg>
    ),
  },
  {
    pref: "light",
    label: "Light",
    on: "in-data-[theme-pref=light]:bg-paper in-data-[theme-pref=light]:text-ink in-data-[theme-pref=light]:shadow-sm",
    icon: (
      <svg viewBox="0 0 24 24" className={icon} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2.5v2M12 19.5v2M2.5 12h2M19.5 12h2M5.3 5.3l1.4 1.4M17.3 17.3l1.4 1.4M5.3 18.7l1.4-1.4M17.3 6.7l1.4-1.4" />
      </svg>
    ),
  },
  {
    pref: "dark",
    label: "Dark",
    on: "in-data-[theme-pref=dark]:bg-paper in-data-[theme-pref=dark]:text-ink in-data-[theme-pref=dark]:shadow-sm",
    icon: (
      <svg viewBox="0 0 24 24" className={icon} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round">
        <path d="M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5Z" />
      </svg>
    ),
  },
];

function subscribe(onChange: () => void) {
  const observer = new MutationObserver(onChange);
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme-pref"] });
  return () => observer.disconnect();
}
const getPref = () => (document.documentElement.dataset.themePref as ThemePref | undefined) ?? "system";

/**
 * System / Light / Dark switch. The highlight comes from data-theme-pref on <html>
 * through CSS, so it is right before hydration; aria-checked follows once React runs.
 */
export function ThemeSwitch({ className = "" }: { className?: string }) {
  const pref = useSyncExternalStore(subscribe, getPref, () => "system" as ThemePref);
  return (
    <div role="radiogroup" aria-label="Theme" className={`inline-flex rounded-[12px] bg-canvas p-1 ${className}`}>
      {options.map((o) => (
        <button
          key={o.pref}
          type="button"
          role="radio"
          aria-checked={pref === o.pref}
          onClick={() => applyTheme(o.pref)}
          className={`flex h-8 items-center gap-1.5 rounded-[9px] px-3 text-[13px] font-medium text-muted transition-colors hover:text-ink ${o.on}`}
        >
          <span aria-hidden>{o.icon}</span>
          {o.label}
        </button>
      ))}
    </div>
  );
}
