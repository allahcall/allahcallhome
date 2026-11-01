import { cacheLife } from "next/cache";
import Link from "next/link";
import { Mark } from "@/components/ui/mark";
import { site } from "@/lib/site";

// Reading the clock makes a component dynamic; caching it per day keeps pages static.
async function CurrentYear() {
  "use cache";
  cacheLife("days");
  return new Date().getFullYear();
}

const columns = [
  {
    title: "Explore",
    links: [
      { label: "About", href: "/about" },
      { label: "Islam", href: "/islam" },
      { label: "New Muslims", href: "/new-muslims" },
      { label: "Religions", href: "/religions" },
      { label: "Research", href: "/research" },
      { label: "Our work", href: "/our-work" },
    ],
  },
  {
    title: "Get involved",
    links: [
      { label: "Courses", href: "/courses" },
      { label: "Companionship", href: "/companionship" },
      { label: "Volunteer", href: "/volunteers" },
      { label: "Events", href: "/events" },
      { label: "Publish your work", href: "/publish-your-work" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="mt-12 md:mt-20">
      <div className="wrap">
        <div className="card grid gap-8 p-6 text-[14.5px] sm:grid-cols-2 md:p-10 lg:grid-cols-12 lg:gap-8">
          <div className="sm:col-span-2 lg:col-span-4">
            <Link href="/" className="inline-flex items-center gap-2.5 text-[17px] font-semibold">
              <Mark />
              {site.name}
            </Link>
            <p className="mt-3 max-w-[24em] text-muted">For Islamic thought and education. Powered by {site.poweredBy}.</p>
          </div>
          {columns.map((col) => (
            <div key={col.title} className="lg:col-span-2">
              <h2 className="mb-3 text-[13px] font-semibold text-green">{col.title}</h2>
              <ul className="space-y-2">
                {col.links.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="hover:text-green">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className="lg:col-span-2">
            <h2 className="mb-3 text-[13px] font-semibold text-green">Contact</h2>
            <ul className="space-y-2">
              <li>
                <a href={site.phone.href} className="hover:text-green">
                  {site.phone.display}
                </a>
              </li>
              <li>
                <a href={site.email.href} className="break-all hover:text-green">
                  {site.email.display}
                </a>
              </li>
              <li>
                <Link href="/contact" className="hover:text-green">
                  Contact form
                </Link>
              </li>
            </ul>
          </div>
          <div className="lg:col-span-2">
            <h2 className="mb-3 text-[13px] font-semibold text-green">Follow</h2>
            <ul className="space-y-2">
              {site.socials.map((s) => (
                <li key={s.href}>
                  <a href={s.href} target="_blank" rel="noopener noreferrer" className="hover:text-green">
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex flex-wrap justify-between gap-3 px-1 py-6 text-[13px] text-muted">
          <span>
            © <CurrentYear /> {site.legalName}
          </span>
          <span className="flex flex-wrap gap-x-4">
            <Link href="/privacy" className="hover:text-green">
              Privacy policy
            </Link>
            {site.ein}
          </span>
        </div>
      </div>
    </footer>
  );
}
