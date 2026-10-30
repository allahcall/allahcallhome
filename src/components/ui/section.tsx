import type { ReactNode } from "react";

const tones = {
  default: "",
  alt: "bg-alt",
} as const;

export function Section({
  children,
  tone = "default",
  flush = false,
  className = "",
  id,
}: {
  children: ReactNode;
  tone?: keyof typeof tones;
  /** Drop the top padding when following a section of the same tone. */
  flush?: boolean;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={`${tones[tone]} ${flush ? "pb-22 md:pb-32" : "py-22 md:py-32"} ${className}`}>
      <div className="wrap">{children}</div>
    </section>
  );
}

/** Small numbered label, e.g. "01  Begin here". */
export function Label({ index, children, className = "" }: { index?: number; children: ReactNode; className?: string }) {
  return (
    <p className={`text-[13px] text-muted ${className}`}>
      {index !== undefined && (
        <b className="mr-2.5 font-medium text-ink tabular-nums">{String(index).padStart(2, "0")}</b>
      )}
      {children}
    </p>
  );
}

/** Label in the left 3 columns, heading in the next 6 (stacked on mobile). */
export function SectionHead({
  index,
  label,
  title,
  lede,
}: {
  index?: number;
  label?: string;
  title?: string;
  lede?: string;
}) {
  if (!label && !title) return null;
  return (
    <div className="mb-10 grid gap-5 md:mb-16 md:grid-cols-12 md:gap-8">
      {label && <Label index={index} className="md:col-span-3 md:pt-3">{label}</Label>}
      <div className={label ? "md:col-span-8 lg:col-span-7" : "md:col-span-9"}>
        {title && <h2 className="display text-[34px] md:text-[clamp(36px,4vw,56px)]">{title}</h2>}
        {lede && <p className="mt-5 max-w-[36em] text-[17px] text-ink-2">{lede}</p>}
      </div>
    </div>
  );
}
