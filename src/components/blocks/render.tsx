import type { Block, Page } from "@/content/types";
import { ContactForm, UpdatesForm, VolunteerForm } from "@/components/forms/forms";
import { buttonClass } from "@/components/ui/button";
import { Photo } from "@/components/ui/photo";
import { Rosette } from "@/components/ui/rosette";
import { Label, Section } from "@/components/ui/section";
import { site } from "@/lib/site";
import { Events } from "./events";
import { Books, Cards, Gallery, People, Shahada, Testimonies } from "./media-blocks";
import { Columns, Cta, Faq, Points, Prose, Quote, Stats, Steps } from "./text-blocks";

export function PageHero({ hero }: { hero: Page["hero"] }) {
  if (!hero.image) {
    return (
      <header className="wrap pt-3 md:pt-6">
        <div className="card p-6 md:p-12">
          <Label>{hero.label}</Label>
          <h1 className="display mt-2 text-[38px] md:text-[clamp(48px,5.6vw,80px)]">{hero.title}</h1>
          {hero.lede && <p className="mt-4 max-w-[38em] text-[16px] text-ink-2 md:text-[18px]">{hero.lede}</p>}
        </div>
      </header>
    );
  }
  return (
    <header className="wrap pt-1.5 md:pt-4">
      <div className="relative isolate flex min-h-[340px] flex-col justify-end overflow-hidden rounded-[24px] text-paper md:min-h-[460px]">
        <div className="absolute inset-0 -z-10">
          <Photo image={hero.image} sizes="(min-width: 1180px) 1180px, 100vw" priority className="h-full" />
        </div>
        <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-b from-ink/5 from-25% to-ink/80" />
        <div className="p-5 md:p-10">
          <span className="inline-flex rounded-[10px] bg-paper/15 px-2.5 py-1.5 text-[12.5px] font-medium backdrop-blur-sm">{hero.label}</span>
          <h1 className="display mt-3 max-w-[14em] text-[38px] md:text-[clamp(48px,5.6vw,80px)]">{hero.title}</h1>
          {hero.lede && <p className="mt-3 hidden max-w-[40em] text-[17px] text-paper/85 md:block">{hero.lede}</p>}
        </div>
      </div>
      {hero.lede && <p className="mt-4 px-1 text-[16px] text-ink-2 md:hidden">{hero.lede}</p>}
    </header>
  );
}

function FormBlock({ block }: { block: Extract<Block, { type: "form" }> }) {
  return (
    <Section>
      <div className="card grid gap-8 p-5 md:grid-cols-12 md:gap-10 md:p-10">
        <div className="md:col-span-5">
          {block.label && <Label>{block.label}</Label>}
          <h2 className="display mt-2 text-[30px] md:text-[clamp(32px,3.2vw,44px)]">{block.title}</h2>
          {block.lede && <p className="mt-3 text-ink-2">{block.lede}</p>}
          {block.form === "contact" && (
            <div className="mt-6 grid gap-2.5 sm:grid-cols-2">
              <a
                href={site.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 items-center justify-center rounded-[14px] bg-green px-5 py-2 text-[15px] font-semibold text-paper transition-colors hover:bg-green-ink sm:col-span-2"
              >
                Chat on WhatsApp
              </a>
              <a href={site.emailDraft} className={buttonClass("secondary")}>
                Email us
              </a>
              <a href={site.phone.href} className={buttonClass("secondary")}>
                Call us
              </a>
            </div>
          )}
          {block.form === "contact" && (
            <dl className="mt-2.5 grid gap-2.5">
              <div className="rounded-[14px] bg-canvas px-4 py-3">
                <dt className="text-[12.5px] font-semibold text-green">Email</dt>
                <dd className="text-[15px] break-all">
                  <a href={site.email.href} className="hover:text-green hover:underline">
                    {site.email.display}
                  </a>
                </dd>
              </div>
              <div className="rounded-[14px] bg-canvas px-4 py-3">
                <dt className="text-[12.5px] font-semibold text-green">Phone and WhatsApp</dt>
                <dd className="text-[15px]">
                  <a href={site.phone.href} className="hover:text-green hover:underline">
                    {site.phone.display}
                  </a>
                </dd>
              </div>
            </dl>
          )}
        </div>
        <div className="md:col-span-7">
          {block.form === "contact" ? <ContactForm /> : block.form === "updates" ? <UpdatesForm /> : <VolunteerForm />}
        </div>
      </div>
    </Section>
  );
}

function Talk({ block }: { block: Extract<Block, { type: "talk" }> }) {
  return (
    <Section>
      <div className="relative overflow-hidden rounded-[24px] bg-green p-6 text-paper md:flex md:items-center md:justify-between md:gap-10 md:p-12">
        <Rosette className="pointer-events-none absolute -bottom-28 -left-20 size-72 text-paper opacity-[0.07]" />
        <div className="relative max-w-2xl">
          <h2 className="display text-[28px] md:text-[clamp(30px,3.2vw,44px)]">{block.title}</h2>
          {block.body && <p className="mt-3 text-[15px] text-paper/75 md:text-[16.5px]">{block.body}</p>}
        </div>
        <div className="relative mt-6 grid grid-cols-2 gap-2.5 md:mt-0 md:flex md:shrink-0">
          <a href={site.talk.whatsapp} target="_blank" rel="noopener noreferrer" className={buttonClass("inverse")}>
            WhatsApp us
          </a>
          <a href={site.talk.email} className={buttonClass("inverse-secondary")}>
            Email us
          </a>
        </div>
      </div>
    </Section>
  );
}

export function Blocks({ blocks }: { blocks: Block[] }) {
  return blocks.map((block, i) => {
    const key = `${block.type}-${i}`;
    switch (block.type) {
      case "prose":
        return <Prose key={key} block={block} />;
      case "columns":
        return <Columns key={key} block={block} />;
      case "cards":
        return <Cards key={key} block={block} />;
      case "steps":
        return <Steps key={key} block={block} />;
      case "points":
        return <Points key={key} block={block} />;
      case "quote":
        return <Quote key={key} block={block} />;
      case "shahada":
        return <Shahada key={key} block={block} />;
      case "stats":
        return <Stats key={key} block={block} />;
      case "people":
        return <People key={key} block={block} />;
      case "events":
        return <Events key={key} block={block} />;
      case "gallery":
        return <Gallery key={key} block={block} />;
      case "books":
        return <Books key={key} block={block} />;
      case "testimonies":
        return <Testimonies key={key} block={block} />;
      case "form":
        return <FormBlock key={key} block={block} />;
      case "faq":
        return <Faq key={key} block={block} />;
      case "talk":
        return <Talk key={key} block={block} />;
      case "cta":
        return <Cta key={key} block={block} />;
    }
  });
}
