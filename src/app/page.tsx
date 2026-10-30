import Link from "next/link";
import { Shahada, TeamGrid } from "@/components/blocks/media-blocks";
import { Cta, Faq, Stats } from "@/components/blocks/text-blocks";
import { Arrow, ButtonLink } from "@/components/ui/button";
import { Photo } from "@/components/ui/photo";
import { Label, Section, SectionHead } from "@/components/ui/section";
import type { Person } from "@/content/types";

const paths = [
  {
    title: "New to Islam",
    body: "Understand the faith, take your Shahada, and find support in your first steps.",
    links: [
      { label: "Accept Islam now", href: "/accept-islam-now" },
      { label: "New Muslim guidelines", href: "/new-muslim-guidelines" },
      { label: "Testimonies of new Muslims", href: "/testimonies-of-new-muslims" },
    ],
  },
  {
    title: "Learn & grow",
    body: "Structured courses on Quran, Sunnah and character, taught by qualified scholars.",
    links: [
      { label: "Islamic courses", href: "/courses" },
      { label: "Companionship program", href: "/companionship" },
      { label: "Articles & books", href: "/articles-books" },
    ],
  },
  {
    title: "Get involved",
    body: "Serve the community through dawah, events, content and teaching.",
    links: [
      { label: "Volunteer with us", href: "/volunteers" },
      { label: "Events & activities", href: "/events" },
      { label: "Publish your work", href: "/publish-your-work" },
    ],
  },
];

const team: Person[] = [
  { name: "Hafiz Muhammad Haris", role: "Founder & CEO", image: { src: "/images/team/hafiz.jpg", alt: "Hafiz Muhammad Haris" } },
  { name: "Ya’qub Nuri Amin", role: "Islamic Scholar", image: { src: "/images/team/almubeen.jpg", alt: "Ya’qub Nuri Amin" } },
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
    <>
      <header className="pt-14 md:pt-22">
        <div className="wrap">
          <h1 className="display max-w-[11.5em] text-[46px] leading-[0.98] tracking-[-0.035em] md:text-[clamp(56px,7vw,104px)]">
            Discover the truth of Islam’s <em className="italic">beautiful</em> message
          </h1>
          <div className="mt-10 grid gap-10 md:mt-14 md:grid-cols-12 md:gap-8">
            <div className="md:col-span-4 md:pt-1">
              <p className="text-[17px] text-ink-2">
                Join us on a journey to understand the pure teachings of Islam and find answers to life’s important
                questions, with authentic knowledge from qualified scholars.
              </p>
              <div className="mt-7 flex flex-wrap gap-2.5">
                <ButtonLink href="/islam" arrow>
                  Start learning
                </ButtonLink>
                <ButtonLink href="/contact" variant="secondary">
                  Ask a scholar
                </ButtonLink>
              </div>
            </div>
            <figure className="md:col-span-8">
              <Photo
                image={{ src: "/images/mosque-window.webp", alt: "Light falling through a mosque window" }}
                sizes="(min-width: 768px) 66vw, 100vw"
                priority
                className="aspect-[16/10] md:aspect-[16/9.5]"
                position="center 45%"
              />
              <figcaption className="flex justify-between gap-4 pt-3 text-[13px] text-muted">
                <Link href="/events" className="hover:text-ink">
                  New Muslims Support Group
                </Link>
                <span className="text-right">Every Saturday · 3–5 PM · Online</span>
              </figcaption>
            </figure>
          </div>
        </div>
      </header>

      <div className="pt-16 md:pt-8">
        <Stats
          block={{
            type: "stats",
            items: [
              { value: "50,000+", label: "People reached through dawah" },
              { value: "5,000+", label: "New Muslims supported" },
              { value: "10,000+", label: "Students enrolled" },
              { value: "100+", label: "Community events a year" },
            ],
          }}
        />
      </div>

      <Shahada block={{ type: "shahada", action: { label: "Understand the Shahada", href: "/shahada" } }} flush />

      <Section tone="alt">
        <SectionHead index={1} label="Begin here" title="Wherever you are on the path, there is a place to start." />
        <div className="grid border-t border-ink md:grid-cols-3">
          {paths.map((p, i) => (
            <div
              key={p.title}
              className="border-line py-7 max-md:border-t max-md:first:border-t-0 md:border-l md:px-8 md:first:border-l-0 md:first:pl-0 md:last:pr-0"
            >
              <span className="text-[13px] text-muted">{["i", "ii", "iii"][i]}</span>
              <h3 className="mt-8 font-serif text-[30px] tracking-[-0.02em] md:mt-12">{p.title}</h3>
              <p className="mt-2.5 max-w-[22em] text-muted">{p.body}</p>
              <ul className="mt-8">
                {p.links.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="group flex justify-between border-t border-line py-3 text-[15px] font-medium hover:text-green"
                    >
                      {l.label} <Arrow />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <div className="grid items-center gap-10 md:grid-cols-12 md:gap-8">
          <Photo
            image={{ src: "/images/quran.webp", alt: "A copy of the Quran on a dark cloth" }}
            sizes="(min-width: 768px) 50vw, 100vw"
            position="62% center"
            className="aspect-[4/3] md:col-span-6 md:aspect-[4/5]"
          />
          <div className="md:col-span-5 md:col-start-8">
            <Label index={2} className="mb-7">
              Our method
            </Label>
            <blockquote className="display text-[30px] leading-[1.16] md:text-[clamp(30px,3vw,42px)]">
              “Invite to the way of your Lord with wisdom and good instruction, and argue with them in a way that is
              best.”
            </blockquote>
            <cite className="mt-6 block text-[14px] text-muted not-italic">Quran 16:125</cite>
            <p className="mt-10 max-w-[30em] border-t border-line pt-6 text-ink-2">
              Every resource we share is grounded in the Quran and Sunnah and reviewed by qualified scholars, so you can
              learn with confidence.
            </p>
          </div>
        </div>
      </Section>

      <Section flush>
        <SectionHead index={3} label="Our people" title="Scholars and professionals in service of the message." />
        <TeamGrid people={team} more />
      </Section>

      <Faq block={{ type: "faq", label: "Questions", title: "Everything you need to know", items: faq }} index={4} flush />

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
    </>
  );
}
