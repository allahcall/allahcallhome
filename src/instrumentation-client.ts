// Registers the service worker (public/sw.js) that lets the installed app work
// offline. Production only: in development it would cache files that keep changing.
if (process.env.NODE_ENV === "production" && "serviceWorker" in navigator) {
  window.addEventListener("load", () => navigator.serviceWorker.register("/sw.js"));
}
