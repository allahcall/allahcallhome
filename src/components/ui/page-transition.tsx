import { ViewTransition, type ReactNode } from "react";

/**
 * Fades the old page out and the new one in on client navigations. Wraps
 * each page rather than the layout, since layouts persist and never enter or
 * exit. Browsers without view transitions swap pages instantly, as before.
 */
export function PageTransition({ children }: { children: ReactNode }) {
  return (
    <ViewTransition enter="page-enter" exit="page-exit" default="none">
      {/* One element, so the page fades as a single piece rather than section by section. */}
      <div>{children}</div>
    </ViewTransition>
  );
}
