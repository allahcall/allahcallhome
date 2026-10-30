import Link from "next/link";
import type { ComponentProps } from "react";

type Variant = "primary" | "secondary" | "inverse" | "inverse-secondary";

const variants: Record<Variant, string> = {
  primary: "bg-ink text-paper hover:bg-green-ink",
  secondary: "border border-line bg-paper text-ink hover:border-ink-2/40",
  inverse: "bg-paper text-ink hover:bg-green-tint",
  "inverse-secondary": "bg-paper/15 text-paper backdrop-blur-sm hover:bg-paper/25",
};

export function buttonClass(variant: Variant = "primary", className = "") {
  return `inline-flex min-h-12 items-center justify-center gap-2 rounded-[14px] px-5 py-2 text-center text-[15px] font-semibold transition-colors ${variants[variant]} ${className}`;
}

export function ButtonLink({
  variant = "primary",
  arrow = false,
  className,
  children,
  ...props
}: ComponentProps<typeof Link> & { variant?: Variant; arrow?: boolean }) {
  return (
    <Link className={`group ${buttonClass(variant, className)}`} {...props}>
      {children}
      {arrow && <Arrow />}
    </Link>
  );
}

export function Arrow({ className = "" }: { className?: string }) {
  return (
    <span aria-hidden className={`inline-block transition-transform group-hover:translate-x-0.5 ${className}`}>
      →
    </span>
  );
}
