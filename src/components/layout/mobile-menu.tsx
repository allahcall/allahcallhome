"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav } from "@/lib/site";

export function MobileMenu() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Close after navigating.
  const [lastPath, setLastPath] = useState(pathname);
  if (pathname !== lastPath) {
    setLastPath(pathname);
    setOpen(false);
  }

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <div className="ml-auto lg:hidden">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls="mobile-nav"
        className="h-10 px-1 text-[14.5px] font-medium"
      >
        {open ? "Close" : "Menu"}
      </button>

      <div
        id="mobile-nav"
        hidden={!open}
        className="fixed inset-x-0 top-17 bottom-0 overflow-y-auto border-t border-line bg-paper"
      >
        <nav aria-label="Mobile" className="wrap pt-6 pb-16">
          {nav.map((group) => (
            <details key={group.label} className="group border-b border-line">
              <summary className="flex cursor-pointer list-none items-center justify-between py-4 font-serif text-2xl tracking-[-0.02em]">
                {group.label}
                <span aria-hidden className="text-xl font-light text-muted transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <ul className="pb-4">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="block py-2 text-[15px] text-ink-2">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </details>
          ))}
          <Link href="/contact" className="block border-b border-line py-4 font-serif text-2xl tracking-[-0.02em]">
            Contact
          </Link>
          <Link
            href="/accept-islam-now"
            className="mt-8 flex h-12 items-center justify-center rounded-md bg-ink text-[15px] font-medium text-paper"
          >
            Accept Islam
          </Link>
        </nav>
      </div>
    </div>
  );
}
