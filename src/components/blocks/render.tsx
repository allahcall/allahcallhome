import type { Block, Page } from "@/content/types";
import { ContactForm, VolunteerForm } from "@/components/forms/forms";
import { Photo } from "@/components/ui/photo";
import { Label, Section } from "@/components/ui/section";
import { site } from "@/lib/site";
import { Events } from "./events";
import { Books, Cards, Gallery, People, Shahada, Testimonies } from "./media-blocks";
import { Columns, Cta, Faq, Points, Prose, Quote, Stats, Steps } from "./text-blocks";

export function PageHero({ hero }: { hero: Page["hero"] }) {
  return (
    <header className="pt-14 md:pt-22">
      <div className="wrap">
        <Label>{hero.label}</Label>
        <div className="mt-6 grid gap-8 md:grid-cols-12 md:items-end">
          <h1 className="display text-[44px] md:col-span-8 md:text-[clamp(52px,6.4vw,92px)] md:leading-[0.98]">
            {hero.title}
          </h1>
          {hero.lede && <p className="text-[17px] text-ink-2 md:col-span-4 md:pb-2">{hero.lede}</p>}
        </div>
        {hero.image && (
          <Photo image={hero.image} sizes="100vw" priority className="mt-12 aspect-[16/10] md:mt-16 md:aspect-[21/8]" />
        )}
      </div>
    </header>
  );
}

function FormBlock({ block, index, flush }: { block: Extract<Block, { type: "form" }>; index?: number; flush?: boolean }) {
  return (
    <Section flush={flush}>
      <div className="grid gap-10 md:grid-cols-12 md:gap-8">
        <div className="md:col-span-4">
          {block.label && <Label index={index}>{block.label}</Label>}
          <h2 className="display mt-4 text-[34px] md:text-[42px]">{block.title}</h2>
          {block.lede && <p className="mt-5 text-ink-2">{block.lede}</p>}
          {block.form === "contact" && (
            <dl className="mt-10 space-y-5 border-t border-line pt-6 text-[15px]">
              <div>
                <dt className="text-[13px] text-muted">Email</dt>
                <dd>
                  <a href={site.email.href} className="hover:text-green">
                    {site.email.display}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-[13px] text-muted">Phone and WhatsApp</dt>
                <dd>
                  <a href={site.phone.href} className="hover:text-green">
                    {site.phone.display}
                  </a>
                </dd>
              </div>
            </dl>
          )}
        </div>
        <div className="md:col-span-7 md:col-start-6">
          {block.form === "contact" ? <ContactForm /> : <VolunteerForm />}
        </div>
      </div>
    </Section>
  );
}

function tone(b: Block): "alt" | "default" | "dark" {
  if (b.type === "cta") return "dark";
  return "tone" in b && b.tone === "alt" ? "alt" : "default";
}

export function Blocks({ blocks }: { blocks: Block[] }) {
  let n = 0;
  return blocks.map((block, i) => {
    // Sections that sit on the same background share the padding between them.
    const flush = i > 0 && tone(blocks[i - 1]) === tone(block) && tone(block) !== "dark";
    const index = "label" in block && block.label && block.type !== "shahada" ? ++n : undefined;
    const props = { index, flush };
    const key = `${block.type}-${i}`;
    switch (block.type) {
      case "prose":
        return <Prose key={key} block={block} {...props} />;
      case "columns":
        return <Columns key={key} block={block} {...props} />;
      case "cards":
        return <Cards key={key} block={block} {...props} />;
      case "steps":
        return <Steps key={key} block={block} {...props} />;
      case "points":
        return <Points key={key} block={block} {...props} />;
      case "quote":
        return <Quote key={key} block={block} {...props} />;
      case "shahada":
        return <Shahada key={key} block={block} {...props} />;
      case "stats":
        return <Stats key={key} block={block} {...props} />;
      case "people":
        return <People key={key} block={block} {...props} />;
      case "events":
        return <Events key={key} block={block} {...props} />;
      case "gallery":
        return <Gallery key={key} block={block} {...props} />;
      case "books":
        return <Books key={key} block={block} {...props} />;
      case "testimonies":
        return <Testimonies key={key} block={block} {...props} />;
      case "form":
        return <FormBlock key={key} block={block} {...props} />;
      case "faq":
        return <Faq key={key} block={block} {...props} />;
      case "cta":
        return <Cta key={key} block={block} />;
    }
  });
}
