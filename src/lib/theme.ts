/**
 * Light, dark or system. A choice made with the theme switch is kept in
 * localStorage; "system" (no stored choice) follows the device, live.
 * <html> carries data-theme (what is showing) and data-theme-pref (what was chosen).
 */
export type ThemePref = "system" | "light" | "dark";

export const THEME_KEY = "theme";

/** Runs in <head> before first paint so the page never flashes the wrong theme. */
export const themeScript = `(function(){try{var d=document.documentElement,m=matchMedia("(prefers-color-scheme: dark)"),k="${THEME_KEY}";function set(){var t=localStorage.getItem(k),p=t==="dark"||t==="light"?t:"system";d.setAttribute("data-theme-pref",p);d.setAttribute("data-theme",p==="system"?(m.matches?"dark":"light"):p)}set();m.addEventListener("change",set);addEventListener("storage",set)}catch(e){}})()`;

/** Same rules as themeScript, for the switch to call. */
export function applyTheme(pref: ThemePref) {
  try {
    if (pref === "system") localStorage.removeItem(THEME_KEY);
    else localStorage.setItem(THEME_KEY, pref);
  } catch {}
  const d = document.documentElement;
  d.dataset.themePref = pref;
  d.dataset.theme = pref === "system" ? (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light") : pref;
}
