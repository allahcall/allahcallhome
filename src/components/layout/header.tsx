import Link from "next/link";
import { ButtonLink } from "@/components/ui/button";
import { nav, site } from "@/lib/site";
import { MobileMenu } from "./mobile-menu";

export function Header() {
  // Solid background on purpose: backdrop-filter would trap the fixed mobile menu inside the header.
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-paper">
      <div className="wrap flex h-17 items-center gap-10">
        <Link href="/" className="flex items-center gap-3.5" aria-label={`${site.name} home`}>
          <span className="font-serif text-[22px] font-medium tracking-[-0.01em]">{site.name}</span>
          <span className="hidden border-l border-line pl-3.5 text-[13px] leading-tight text-muted sm:block">
            Islamic Dawah
            <br />
            &amp; Education
          </span>
        </Link>

        <nav aria-label="Main" className="ml-auto hidden lg:block">
          <ul className="flex items-center gap-1">
            {nav.map((group) => (
              <li key={group.label} className="group relative">
                <Link
                  href={group.href}
                  className="flex h-17 items-center px-3 text-[14.5px] text-ink-2 transition-colors hover:text-ink"
                >
                  {group.label}
                </Link>
                {/* Keyboard focus only: a clicked link keeps focus after client navigation and would hold its menu open. */}
                <div className="invisible absolute top-full left-0 -mt-px w-60 translate-y-1 opacity-0 transition duration-150 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-has-[:focus-visible]:visible group-has-[:focus-visible]:translate-y-0 group-has-[:focus-visible]:opacity-100">
                  <ul className="border border-line bg-paper py-2 shadow-[0_12px_32px_-12px_rgb(17_20_19/0.18)]">
                    {group.links.map((link) => (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          className="block px-4 py-2 text-[14.5px] text-ink-2 transition-colors hover:bg-alt hover:text-ink"
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
              <Link href="/contact" className="flex h-17 items-center px-3 text-[14.5px] text-ink-2 hover:text-ink">
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        <div className="hidden lg:block">
          <ButtonLink href="/accept-islam-now">Accept Islam</ButtonLink>
        </div>
        <MobileMenu />
      </div>
    </header>
  );
}
