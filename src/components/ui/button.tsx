import Link from "next/link";
import type { ComponentProps } from "react";

type Variant = "primary" | "secondary" | "inverse" | "inverse-secondary";

const variants: Record<Variant, string> = {
  primary: "bg-ink text-paper hover:bg-green-ink",
  secondary: "border border-line text-ink hover:border-ink",
  inverse: "bg-paper text-ink hover:bg-alt",
  "inverse-secondary": "border border-paper/25 text-paper hover:border-paper",
};

export function buttonClass(variant: Variant = "primary", className = "") {
  return `inline-flex h-11 items-center gap-2.5 rounded-md px-[18px] text-[14.5px] font-medium whitespace-nowrap transition-colors ${variants[variant]} ${className}`;
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
