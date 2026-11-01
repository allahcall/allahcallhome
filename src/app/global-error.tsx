"use client";

import { useEffect } from "react";
import { reportError } from "@/lib/sentry";

// Replaces the root layout when it fails, so it carries its own document and
// plain inline styles in place of the site's stylesheet.
export default function GlobalError({ error, retry }: { error: unknown; retry: () => void }) {
  useEffect(() => reportError(error), [error]);

  return (
    <html lang="en">
      <body style={{ margin: 0, background: "#f3f5f4", color: "#0f1513", fontFamily: "system-ui, sans-serif" }}>
        <title>Something went wrong · AllahCall</title>
        <main style={{ minHeight: "100svh", display: "grid", placeItems: "center", padding: 24, textAlign: "center" }}>
          <div>
            <h1 style={{ fontSize: 36, margin: 0 }}>Something went wrong</h1>
            <p style={{ color: "#3a433f", maxWidth: "30em", margin: "12px auto 24px" }}>
              We have been notified and will look into it. Please try again in a moment.
            </p>
            <button
              type="button"
              onClick={() => retry()}
              style={{ minHeight: 48, padding: "8px 20px", border: 0, borderRadius: 14, background: "#0f1513", color: "#fff", fontSize: 15, fontWeight: 600, cursor: "pointer" }}
            >
              Try again
            </button>
          </div>
        </main>
      </body>
    </html>
  );
}
