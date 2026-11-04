/**
 * Light or dark. A choice made with the footer toggle is kept in localStorage;
 * without one the site follows the device, live.
 */
export type Theme = "light" | "dark";

export const THEME_KEY = "theme";

/** Runs in <head> before first paint so the page never flashes the wrong theme. */
export const themeScript = `(function(){try{var d=document.documentElement,m=matchMedia("(prefers-color-scheme: dark)"),k="${THEME_KEY}";function set(){var t=localStorage.getItem(k);d.setAttribute("data-theme",t==="dark"||t==="light"?t:m.matches?"dark":"light")}set();m.addEventListener("change",set)}catch(e){}})()`;
