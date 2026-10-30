import { cacheLife } from "next/cache";
import Link from "next/link";
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
    <footer className="border-t border-line pt-18 pb-8 text-[14.5px]">
      <div className="wrap">
        <div className="grid gap-10 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-4">
            <Link href="/" className="font-serif text-[22px] font-medium tracking-[-0.01em]">
              {site.name}
            </Link>
            <p className="mt-3 max-w-[24em] text-muted">
              For Islamic thought and education. Powered by {site.poweredBy}.
            </p>
          </div>
          {columns.map((col) => (
            <div key={col.title} className="md:col-span-2">
              <h2 className="mb-3.5 text-[13px] font-medium text-muted">{col.title}</h2>
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
          <div className="md:col-span-2">
            <h2 className="mb-3.5 text-[13px] font-medium text-muted">Contact</h2>
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
          <div className="md:col-span-2">
            <h2 className="mb-3.5 text-[13px] font-medium text-muted">Follow</h2>
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
        <div className="mt-18 flex flex-wrap justify-between gap-3 border-t border-line pt-5 text-[13px] text-muted">
          <span>
            © <CurrentYear /> {site.legalName}
          </span>
          <span>{site.ein}</span>
        </div>
      </div>
    </footer>
  );
}
