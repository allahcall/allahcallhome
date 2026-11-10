/**
 * Light, dark or system. A choice made with the theme switch is kept in
 * localStorage; "system" (no stored choice) follows the device, live.
 * <html> carries data-theme (what is showing) and data-theme-pref (what was chosen).
 */
export type ThemePref = "system" | "light" | "dark";

export const THEME_KEY = "theme";

/** The canvas colour of each theme, which the phone's status and navigation bars take on. */
export const BAR_COLORS = { light: "#f3f5f4", dark: "#0c1110" } as const;

/**
 * Point every theme-color tag at the theme that is showing. The tags carry
 * prefers-color-scheme media queries, so without this a light choice on a
 * dark phone (or the reverse) left the bars in the other theme's colour.
 * The script also re-points tags that Next adds to <head> after first paint.
 */
const syncBarsSource = `function(t){var c=t==="dark"?"${BAR_COLORS.dark}":"${BAR_COLORS.light}";document.querySelectorAll('meta[name="theme-color"]').forEach(function(x){x.setAttribute("content",c)})}`;

/** Runs in <head> before first paint so the page never flashes the wrong theme. */
export const themeScript = `(function(){try{var d=document.documentElement,m=matchMedia("(prefers-color-scheme: dark)"),k="${THEME_KEY}",b=${syncBarsSource};function set(){var t=localStorage.getItem(k),p=t==="dark"||t==="light"?t:"system",v=p==="system"?(m.matches?"dark":"light"):p;d.setAttribute("data-theme-pref",p);d.setAttribute("data-theme",v);b(v)}set();m.addEventListener("change",set);addEventListener("storage",set);new MutationObserver(function(){b(d.getAttribute("data-theme"))}).observe(document.head,{childList:true})}catch(e){}})()`;

export function syncBars(theme: "light" | "dark") {
  const color = BAR_COLORS[theme];
  document.querySelectorAll('meta[name="theme-color"]').forEach((m) => m.setAttribute("content", color));
}

/** Same rules as themeScript, for the switch to call. */
export function applyTheme(pref: ThemePref) {
  try {
    if (pref === "system") localStorage.removeItem(THEME_KEY);
    else localStorage.setItem(THEME_KEY, pref);
  } catch {}
  const d = document.documentElement;
  d.dataset.themePref = pref;
  const theme = pref === "system" ? (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light") : pref;
  d.dataset.theme = theme;
  syncBars(theme);
}
