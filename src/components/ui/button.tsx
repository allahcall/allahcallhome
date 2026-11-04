import Link from "next/link";
import type { ComponentProps } from "react";

type Variant = "primary" | "secondary" | "inverse" | "inverse-secondary";

const variants: Record<Variant, string> = {
  primary: "bg-ink text-paper hover:bg-green-ink hover:text-white",
  secondary: "border border-line bg-paper text-ink hover:border-ink-2/40",
  inverse: "bg-white text-shade hover:bg-white/85",
  "inverse-secondary": "bg-white/15 text-white backdrop-blur-sm hover:bg-white/25",
};

export function buttonClass(variant: Variant = "primary", className = "") {
  return `inline-flex min-h-12 items-center justify-center gap-2 rounded-[14px] px-5 py-2 text-center text-[15px] font-semibold transition-[color,background-color,border-color,scale] active:scale-[0.97] motion-reduce:active:scale-100 ${variants[variant]} ${className}`;
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
