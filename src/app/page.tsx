import type { Metadata } from "next";
import Link from "next/link";
import { Shahada, TeamGrid } from "@/components/blocks/media-blocks";
import { Reviews } from "@/components/blocks/reviews";
import { Cta, Quote } from "@/components/blocks/text-blocks";
import { Arrow, ButtonLink } from "@/components/ui/button";
import { Star } from "@/components/ui/mark";
import { Photo } from "@/components/ui/photo";
import { Section, SectionHead, Ticks } from "@/components/ui/section";
import type { Person } from "@/content/types";
import { JsonLd, faqLd } from "@/components/seo/json-ld";
import { pageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";
import { PageTransition } from "@/components/ui/page-transition";

const homeTitle = `${site.name} · Learn Islam, Take Your Shahada & Find Support`;
const seo = pageMetadata({
  description:
    "Learn about Islam from qualified scholars, take your Shahada and find support as a new Muslim. Free courses, guidance and a welcoming community.",
  path: "/",
});

export const metadata: Metadata = {
  ...seo,
  title: { absolute: homeTitle },
  openGraph: { ...seo.openGraph, title: homeTitle },
  twitter: { ...seo.twitter, title: homeTitle },
};

const stats = [
  { value: "50,000+", label: "People reached through dawah" },
  { value: "5,000+", label: "New Muslims supported" },
  { value: "10,000+", label: "Students enrolled" },
  { value: "100+", label: "Community events a year" },
];

const topics = [
  { label: "Understanding Islam", href: "/islam" },
  { label: "Quran & Sunnah", href: "/quran-sunnah" },
  { label: "The Shahada", href: "/shahada" },
  { label: "Courses", href: "/courses" },
  { label: "World religions", href: "/religions" },
  { label: "Marriage", href: "/marriage" },
  { label: "Dawah", href: "/dawah" },
];

const paths = [
  {
    title: "New to Islam",
    body: "Understand the faith, take your Shahada, and find support in your first steps.",
    image: { src: "/images/garden-arch.webp", alt: "A garden archway" },
    links: [
      { label: "Accept Islam now", href: "/accept-islam-now" },
      { label: "New Muslim guidelines", href: "/new-muslim-guidelines" },
      { label: "Testimonies of new Muslims", href: "/testimonies-of-new-muslims" },
    ],
  },
  {
    title: "Learn & grow",
    body: "Structured courses on Quran, Sunnah and character, taught by qualified scholars.",
    image: { src: "/images/quran.webp", alt: "A copy of the Quran" },
    links: [
      { label: "Islamic courses", href: "/courses" },
      { label: "Companionship program", href: "/companionship" },
      { label: "Articles & books", href: "/articles-books" },
    ],
  },
  {
    title: "Get involved",
    body: "Serve the community through dawah, events, content and teaching.",
    image: { src: "/images/congregation.webp", alt: "A congregation at an AllahCall event" },
    links: [
      { label: "Volunteer with us", href: "/volunteers" },
      { label: "Events & activities", href: "/events" },
      { label: "Publish your work", href: "/publish-your-work" },
    ],
  },
];

const mission = [
  "Providing authentic Islamic education based on reliable sources",
  "Creating an inclusive and welcoming learning environment for all",
  "Supporting spiritual growth through knowledge and understanding",
];

const team: Person[] = [
  { name: "Hafiz Muhammad Harris Suhaib", role: "Founder & CEO", image: { src: "/images/team/hafiz.jpg", alt: "Hafiz Muhammad Harris Suhaib" } },
  { name: "Muhammad Zeeshan", role: "Marketing Manager", image: { src: "/images/team/zeeshan.jpg", alt: "Muhammad Zeeshan" } },
];

const faq = [
  {
    q: "What is AllahCall’s dawah mission?",
    a: "AllahCall is a platform dedicated to sharing the beautiful message of Islam through authentic knowledge and understanding. We provide resources, guidance, and support for both Muslims and those interested in learning about Islam.",
  },
  {
    q: "How can I learn about Islam?",
    a: "You can start by exploring our free resources, joining our online classes, or scheduling a one-on-one session with our qualified scholars. We offer various learning paths tailored to your level of understanding.",
  },
  {
    q: "Are your teachings authentic?",
    a: "Yes! All our content is based on authentic sources from the Quran and Sunnah, verified by qualified scholars. We ensure that all information provided is accurate and properly referenced.",
  },
  {
    q: "Can I ask questions about Islam?",
    a: "Absolutely! We encourage questions and open dialogue. You can ask questions during live sessions, through our community forum, or schedule a private consultation with our scholars.",
  },
  {
    q: "Do you offer support for new Muslims?",
    a: "Yes! We provide special support and guidance for new Muslims, including beginner courses, mentorship programs, and a welcoming community to help you on your journey.",
  },
  {
    q: "How can I support the dawah work?",
    a: "You can support our dawah work by sharing our content, volunteering, donating to our projects, or participating in our community events. Every contribution helps spread the message of Islam.",
  },
];

export default function Home() {
  return (
    <PageTransition>
      <div className="wrap pt-1.5 md:pt-4">
        <div className="grid gap-3 lg:grid-cols-[minmax(0,1.55fr)_minmax(0,1fr)] lg:gap-4">
          <header className="relative isolate flex min-h-[460px] flex-col justify-end overflow-hidden rounded-[24px] text-white md:min-h-[520px] lg:min-h-[580px]">
            <div className="absolute inset-0 -z-10">
              <Photo
                image={{ src: "/images/mosque-window.webp", alt: "Light falling through a mosque window" }}
                sizes="(min-width: 1024px) 60vw, 100vw"
                priority
                position="center 40%"
                className="h-full"
              />
            </div>
            <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-b from-shade/5 from-20% to-shade/85" />
            <div className="p-5 md:p-10">
              <Link
                href="/events"
                className="inline-flex items-center gap-2 rounded-[10px] bg-white/15 px-2.5 py-1.5 text-[12.5px] font-medium backdrop-blur-sm hover:bg-white/25"
              >
                <span aria-hidden className="size-1.5 rounded-full bg-leaf" />
                New Muslims Support Group · Saturdays
              </Link>
              <h1 className="display mt-3.5 max-w-[11em] text-[38px] leading-[1.04] md:text-[clamp(48px,5.4vw,68px)]">
                Discover the truth of Islam’s <em className="italic">beautiful</em> message
              </h1>
              <p className="mt-3 max-w-[34em] text-[15px] text-white/85 md:text-[17px]">
                Join us on a journey to understand the pure teachings of Islam and find answers to life’s important
                questions, with authentic knowledge from qualified scholars.
              </p>
              <div className="mt-5 grid grid-cols-2 gap-2.5 sm:flex">
                <ButtonLink href="/islam" variant="inverse">
                  Start learning
                </ButtonLink>
                <ButtonLink href="/contact" variant="inverse-secondary">
                  Ask a scholar
                </ButtonLink>
              </div>
            </div>
          </header>

          <div className="grid content-start gap-3 sm:grid-cols-2 lg:grid-cols-1 lg:grid-rows-[1fr_auto] lg:content-stretch lg:gap-4">
            <dl className="grid grid-cols-2 gap-2.5 sm:col-span-2 lg:col-span-1 lg:auto-rows-fr lg:gap-4">
              {stats.map((s) => (
                <div key={s.label} className="card flex flex-col p-4 lg:justify-between lg:p-6">
                  <dd className="font-serif text-[30px] leading-none font-medium tracking-[-0.02em] text-green lg:text-[36px]">{s.value}</dd>
                  <dt className="mt-2 text-[13px] leading-snug text-muted">{s.label}</dt>
                </div>
              ))}
            </dl>
            <Link href="/events" className="card group flex items-center gap-4 p-3.5 sm:col-span-2 lg:col-span-1">
              <span className="grid size-16 shrink-0 place-items-center content-center rounded-[14px] bg-green-tint text-center leading-tight text-green">
                <span className="text-[11px] font-bold tracking-wide">EVERY</span>
                <span className="text-[20px] font-bold">SAT</span>
              </span>
              <span className="min-w-0">
                <span className="block text-[16px] font-semibold">New Muslims Support Group</span>
                <span className="block text-[13.5px] text-muted">3–5 PM · Online · Weekly</span>
              </span>
              <span aria-hidden className="ml-auto grid size-9 shrink-0 place-items-center rounded-[12px] bg-canvas transition-transform group-hover:translate-x-0.5">
                →
              </span>
            </Link>
          </div>
        </div>

        <nav aria-label="Topics" className="rail mt-4 [--rail-col:auto] md:flex md:flex-wrap md:gap-2">
          {topics.map((t, i) => (
            <Link
              key={t.href}
              href={t.href}
              className="inline-flex h-10 items-center gap-2 rounded-[12px] border border-line bg-paper px-3.5 text-[14px] font-medium whitespace-nowrap hover:border-green hover:text-green"
            >
              {i === 0 && <Star className="size-4 text-green" />}
              {t.label}
            </Link>
          ))}
        </nav>
      </div>

      <Section>
        <SectionHead label="Begin here" title="Wherever you are on the path, there is a place to start." />
        <div className="rail [--rail-col:82%] sm:[--rail-col:60%] md:grid-cols-3">
          {paths.map((p) => (
            <article key={p.title} className="card flex flex-col overflow-hidden">
              <Photo image={p.image} sizes="(min-width: 768px) 33vw, 82vw" className="aspect-[16/10]" />
              <div className="flex flex-1 flex-col p-5">
                <h3 className="text-[19px] font-semibold tracking-[-0.01em]">{p.title}</h3>
                <p className="mt-1.5 text-[14.5px] text-muted">{p.body}</p>
                <ul className="mt-auto pt-4">
                  {p.links.map((l) => (
                    <li key={l.href}>
                      <Link
                        href={l.href}
                        className="group flex justify-between border-t border-line py-2.5 text-[14.5px] font-medium hover:text-green"
                      >
                        {l.label} <Arrow />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Shahada block={{ type: "shahada", action: { label: "Understand the Shahada", href: "/shahada" } }} />

      <Section>
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-4">
          <div>
            <SectionHead label="About us" title="Get to know more about Islam" />
            <div className="card p-5 md:p-7">
              <p className="font-serif text-[21px] leading-snug tracking-[-0.01em] md:text-[24px]">
                Our mission is to make Islamic knowledge accessible to everyone, in a comprehensive and authentic manner.
              </p>
              <p className="mt-3 text-[15px] text-ink-2">
                Welcome to our Islamic learning platform. We help people understand the true teachings of Islam through
                reliable sources and scholarly guidance, with resources, educational materials and expert guidance in a
                welcoming and inclusive environment.
              </p>
              <Ticks items={mission} className="mt-5" />
              <ButtonLink href="/about" variant="secondary" arrow className="mt-6 max-sm:w-full">
                Discover more
              </ButtonLink>
            </div>
          </div>
          <div>
            <SectionHead label="Questions" title="Everything you need to know" link={{ label: "Ask us", href: "/contact" }} />
            <div className="card divide-y divide-line">
              {faq.map((item, i) => (
                <details key={item.q} open={i === 0} className="group">
                  <summary className="flex cursor-pointer list-none items-start justify-between gap-4 px-5 py-4 text-[15.5px] font-semibold md:px-7">
                    {item.q}
                    <span aria-hidden className="text-xl leading-none font-light text-muted transition-transform group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <p className="px-5 pb-5 text-[15px] text-ink-2 md:px-7">{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Quote
        block={{
          type: "quote",
          label: "Our method",
          quote: "Invite to the way of your Lord with wisdom and good instruction, and argue with them in a way that is best.",
          cite: "Quran 16:125",
          body: "Every resource we share is grounded in the Quran and Sunnah and reviewed by qualified scholars, so you can learn with confidence.",
          image: { src: "/images/quran.webp", alt: "A copy of the Quran on a dark cloth" },
        }}
      />

      <Section>
        <SectionHead label="Our people" title="Scholars and professionals in service of the message." link={{ label: "Board", href: "/board-of-directors" }} />
        <TeamGrid people={team} more />
      </Section>

      <Section>
        <div className="card grid overflow-hidden md:grid-cols-2">
          <Photo
            image={{ src: "/images/gathering.webp", alt: "A community gathering at an AllahCall event" }}
            sizes="(min-width: 768px) 50vw, 100vw"
            className="aspect-[16/10] md:aspect-auto md:min-h-80"
          />
          <div className="flex flex-col justify-center p-5 md:p-10">
            <p className="text-[13px] font-semibold text-green">Strengthen your faith</p>
            <h2 className="display mt-2 text-[28px] md:text-[clamp(30px,3vw,42px)]">Join our growing community of believers</h2>
            <p className="mt-3 text-[15px] text-ink-2">
              Learn authentic Islamic knowledge, share wisdom with fellow Muslims, and grow spiritually through our online
              Islamic education platform.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-2.5 sm:flex">
              <ButtonLink href="/courses">Browse courses</ButtonLink>
              <ButtonLink href="/companionship" variant="secondary">
                Find a companion
              </ButtonLink>
            </div>
          </div>
        </div>
      </Section>

      <Reviews />

      <Cta
        block={{
          type: "cta",
          title: "Have a question about Islam? Our scholars are here to help.",
          actions: [
            { label: "Contact us", href: "/contact" },
            { label: "Volunteer", href: "/volunteers", variant: "secondary" },
          ],
        }}
      />
      <JsonLd data={faqLd(faq)} />
    </PageTransition>
  );
}
