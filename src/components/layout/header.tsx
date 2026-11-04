import Link from "next/link";
import { ButtonLink } from "@/components/ui/button";
import { Mark } from "@/components/ui/mark";
import { nav, site } from "@/lib/site";
import { Search } from "./search";
import { ThemeToggle } from "./theme-toggle";

export function Header() {
  return (
    <header className="sticky top-0 z-40 [view-transition-name:site-header] bg-canvas/90 backdrop-blur-md backdrop-saturate-150">
      <div className="wrap flex h-15 items-center gap-3 lg:h-18 lg:gap-6">
        <Link href="/" className="flex min-w-0 items-center gap-2.5" aria-label={`${site.name} home`}>
          <Mark />
          <span className="text-[17px] font-semibold tracking-[-0.01em]">{site.name}</span>
          <span className="hidden border-l border-line pl-2.5 text-[12.5px] leading-tight text-muted xl:block">
            Islamic Dawah
            <br />
            &amp; Education
          </span>
        </Link>

        <nav aria-label="Main" className="ml-auto hidden lg:block">
          <ul className="flex items-center">
            {nav.map((group, i) => (
              <li key={group.label} className="group relative">
                <Link
                  href={group.href}
                  className="flex h-10 items-center rounded-[10px] px-2.5 text-[14.5px] font-medium whitespace-nowrap xl:px-3 text-ink-2 transition-colors group-hover:bg-paper hover:text-ink"
                >
                  {group.label}
                </Link>
                {/* Keyboard focus only: a clicked link keeps focus after client navigation and would hold its menu open. */}
                <div
                  className={`invisible absolute top-full w-64 translate-y-1 pt-2 opacity-0 transition duration-150 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-has-[:focus-visible]:visible group-has-[:focus-visible]:translate-y-0 group-has-[:focus-visible]:opacity-100 ${
                    i >= nav.length - 2 ? "right-0" : "left-0"
                  }`}
                >
                  <ul className="card p-1.5 shadow-[0_16px_40px_-16px_rgb(15_21_19/0.25)]">
                    {group.links.map((link) => (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          className="block rounded-[12px] px-3.5 py-2.5 text-[14.5px] text-ink-2 transition-colors hover:bg-canvas hover:text-ink"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
            <li>
              <Link
                href="/contact"
                className="flex h-10 items-center rounded-[10px] px-2.5 text-[14.5px] font-medium whitespace-nowrap xl:px-3 text-ink-2 transition-colors hover:bg-paper hover:text-ink"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        <Link href="/contact" className="ml-auto text-[14.5px] font-semibold text-green lg:hidden">
          Contact
        </Link>
        <Search />
        <ThemeToggle />
        {/* The wrapper carries the breakpoint: the button's own inline-flex would override `hidden`. */}
        <div className="hidden lg:block">
          <ButtonLink href="/accept-islam-now" className="min-h-10 rounded-[12px] px-4 text-[14px] whitespace-nowrap">
            Accept Islam
          </ButtonLink>
        </div>
      </div>
    </header>
  );
}
