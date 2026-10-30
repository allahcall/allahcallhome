import Link from "next/link";
import type { ReactNode } from "react";

export function Section({ children, className = "", id }: { children: ReactNode; className?: string; id?: string }) {
  return (
    <section id={id} className={`mt-10 md:mt-16 ${className}`}>
      <div className="wrap">{children}</div>
    </section>
  );
}

/** Small green label above a heading, e.g. "Begin here". */
export function Label({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <p className={`text-[13px] font-semibold text-green ${className}`}>{children}</p>;
}

/** Label, heading and lede above a block, with an optional link on the right. */
export function SectionHead({
  label,
  title,
  lede,
  link,
}: {
  label?: string;
  title?: string;
  lede?: string;
  link?: { label: string; href: string };
}) {
  if (!label && !title) return null;
  return (
    <div className="mb-4 md:mb-6">
      <div className="flex items-end justify-between gap-4">
        <div className="min-w-0">
          {label && <Label>{label}</Label>}
          {title && (
            <h2 className="mt-1 max-w-[28em] text-[22px] leading-tight font-semibold tracking-[-0.02em] text-balance md:text-[30px]">
              {title}
            </h2>
          )}
        </div>
        {link && (
          <Link href={link.href} className="shrink-0 pb-1 text-[14px] font-medium text-green hover:underline">
            {link.label}
          </Link>
        )}
      </div>
      {lede && <p className="mt-2 max-w-[40em] text-ink-2 md:text-[16.5px]">{lede}</p>}
    </div>
  );
}

/** A tick-marked list, used for requirements, highlights and mission points. */
export function Ticks({ items, className = "" }: { items: readonly string[]; className?: string }) {
  return (
    <ul className={`grid gap-2.5 ${className}`}>
      {items.map((t) => (
        <li key={t} className="flex gap-2.5 text-[14.5px] text-ink-2">
          <span aria-hidden className="mt-px grid size-5 shrink-0 place-items-center rounded-[7px] bg-green-tint text-green">
            <svg viewBox="0 0 20 20" className="size-4" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M6 10.5l2.5 2.5L14 7.5" />
            </svg>
          </span>
          {t}
        </li>
      ))}
    </ul>
  );
}
