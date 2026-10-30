/** Brand mark: an eight-point star on a green tile. Matches src/app/icon.svg. */
export function Mark({ className = "size-[34px]" }: { className?: string }) {
  return (
    <span aria-hidden className={`grid shrink-0 place-items-center rounded-[10px] bg-green text-paper ${className}`}>
      <Star className="size-[58%]" />
    </span>
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
