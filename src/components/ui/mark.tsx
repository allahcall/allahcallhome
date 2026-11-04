/** Mihrab bubble: a pointed arch with a speech-bubble tail, in a 64×64 box. Matches src/app/icon.svg. */
export const BUBBLE = "M12 30C12 18.5 20.5 10.5 32 4C43.5 10.5 52 18.5 52 30V43Q52 50 45 50H26L15 58.4Q12 60.6 12 57Z";
/** The eight-point star that sits in the arch. */
export const BUBBLE_STAR =
  "M32 20.67L34.73 23.4L38.6 23.4L38.6 27.27L41.33 30L38.6 32.73L38.6 36.6L34.73 36.6L32 39.33L29.27 36.6L25.4 36.6L25.4 32.73L22.67 30L25.4 27.27L25.4 23.4L29.27 23.4Z";

/** Brand mark: the mihrab bubble in green with a white star. */
export function Mark({ className = "size-[34px]" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={`shrink-0 ${className}`} aria-hidden="true">
      <path d={BUBBLE} className="fill-green" />
      <path d={BUBBLE_STAR} className="fill-paper" />
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
