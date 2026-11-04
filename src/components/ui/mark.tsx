/**
 * The crescent mark: "Allah" in rising strokes inside a crescent. Rebuilt from
 * the original logo as true circles and straight lines (design/mocks/crescent.html).
 * Square viewBox so it centres in square slots.
 */
export const MARK_VIEWBOX = "8 12 192 192";
export const MARK_PATH =
  "M85.13 14.85A93.85 93.85 0 1 1 91.39 201.62A93.96 93.96 0 0 0 85.13 14.85ZM16.95 201.05A93.75 93.75 0 0 1 98.79 112.96L79.42 120.50A94.10 94.10 0 0 0 34.62 201.05ZM78.00 159.01L79.53 117.58L98.79 113.01L97.42 150.30L102.04 149.20L103.75 102.77L122.97 98.21L121.25 144.65L127.23 143.24L129.27 87.82L148.53 83.26L146.33 142.82ZM100.12 92.92L100.59 80.05L106.61 78.40L106.14 91.27ZM108.97 91.12L109.56 75.26L115.56 73.62L114.98 89.48ZM117.78 89.18L118.46 70.65L124.42 69.02L123.74 87.55Z";

/** Brand mark in green: deep green on light, light green in dark mode. */
export function Mark({ className = "size-[34px]" }: { className?: string }) {
  return (
    <svg viewBox={MARK_VIEWBOX} className={`shrink-0 fill-green ${className}`} aria-hidden="true">
      <path d={MARK_PATH} />
    </svg>
  );
}

export function Star({ className }: { className?: string }) {
  return (
    <svg viewBox="-50 -50 100 100" fill="none" stroke="currentColor" strokeWidth="5" className={className} aria-hidden="true">
      <rect x="-30" y="-30" width="60" height="60" />
      <rect x="-30" y="-30" width="60" height="60" transform="rotate(45)" />
      <circle r="11" />
    </svg>
  );
}
