import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { MARK_PATH, MARK_VIEWBOX } from "@/components/ui/mark";
import { site } from "./site";

/** Share-card size every social app expects (1.91:1). */
export const ogSize = { width: 1200, height: 630 };

const font = (pkg: string, file: string) => readFile(join(process.cwd(), "node_modules/@fontsource", pkg, "files", file));

// Read once at module load, as the Next.js docs do, so the images can be prerendered.
const [serif, sans] = await Promise.all([
  font("newsreader", "newsreader-latin-400-normal.woff"),
  font("inter", "inter-latin-600-normal.woff"),
]);

function Mark({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox={MARK_VIEWBOX}>
      <path d={MARK_PATH} fill="white" />
    </svg>
  );
}

/** Branded 1200×630 card: green ground, faint rosette, section label and page title. */
export function shareCard({ label, title }: { label: string; title: string }) {
  const size = title.length > 34 ? 76 : 92;
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px 72px",
          background: "#0e3a2b",
          color: "white",
          fontFamily: "Inter",
          position: "relative",
        }}
      >
        <div style={{ position: "absolute", right: -150, top: -150, display: "flex", opacity: 0.12 }}>
          <svg width="640" height="640" viewBox="-100 -100 200 200" fill="none" stroke="white" strokeWidth="0.8">
            <circle r="98" />
            <circle r="90" />
            <circle r="46" />
            <rect x="-64" y="-64" width="128" height="128" />
            <rect x="-64" y="-64" width="128" height="128" transform="rotate(45)" />
            <rect x="-64" y="-64" width="128" height="128" transform="rotate(22.5)" />
            <rect x="-64" y="-64" width="128" height="128" transform="rotate(67.5)" />
            <rect x="-32" y="-32" width="64" height="64" />
            <rect x="-32" y="-32" width="64" height="64" transform="rotate(45)" />
          </svg>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: 18,
              background: "#17533e",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Mark size={42} />
          </div>
          <div style={{ fontSize: 34, fontWeight: 600, letterSpacing: -0.5 }}>{site.name}</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", maxWidth: 940 }}>
          <div style={{ fontSize: 28, fontWeight: 600, color: "#7fd3a8" }}>{label}</div>
          <div style={{ fontFamily: "Newsreader", fontSize: size, lineHeight: 1.04, letterSpacing: -2, marginTop: 14 }}>
            {title}
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 26, color: "rgba(255,255,255,0.7)" }}>
          <div>{site.tagline}</div>
          <div>allahcall.com</div>
        </div>
      </div>
    ),
    {
      ...ogSize,
      fonts: [
        { name: "Newsreader", data: serif, weight: 400, style: "normal" },
        { name: "Inter", data: sans, weight: 600, style: "normal" },
      ],
    },
  );
}
