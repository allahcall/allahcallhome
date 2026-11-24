import Link from "next/link";
import { ButtonLink } from "@/components/ui/button";
import { Mark } from "@/components/ui/mark";
import { site } from "@/lib/site";
import { navigation } from "@/lib/navigation";
import { DesktopNav } from "./desktop-nav";
import { Search } from "./search";

export function Header() {
  return (
    <header className="glass sticky top-0 z-40 [view-transition-name:site-header] border-b">
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

        <DesktopNav groups={navigation} />

        <Link href="/contact" className="ml-auto text-[14.5px] font-semibold text-green lg:hidden">
          Contact
        </Link>
        <Search />
        {/* The wrapper carries the breakpoint: the button's own inline-flex would override `hidden`. */}
        <div className="hidden lg:block">
          <ButtonLink href="/accept-islam-now" className="min-h-10 rounded-[12px] px-4 text-[14px]">
            Accept Islam
          </ButtonLink>
        </div>
      </div>
    </header>
  );
}
