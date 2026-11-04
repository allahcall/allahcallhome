import Image from "next/image";
import Link from "next/link";
import type { Block } from "@/content/types";
import { Arrow, ButtonLink, buttonClass } from "@/components/ui/button";
import { Photo } from "@/components/ui/photo";
import { Rosette } from "@/components/ui/rosette";
import { Section, SectionHead, Ticks } from "@/components/ui/section";
import { imageSrc } from "@/lib/image";
import { site } from "@/lib/site";

type Of<T extends Block["type"]> = Extract<Block, { type: T }>;

export function Cards({ block }: { block: Of<"cards"> }) {
  const cols = block.cols ?? 3;
  return (
    <Section>
      <SectionHead label={block.label} title={block.title} lede={block.lede} />
      <div className={`grid gap-3 md:gap-4 ${cols === 2 ? "md:grid-cols-2" : "md:grid-cols-2 lg:grid-cols-3"}`}>
        {block.items.map((item) => {
          const body = (
            <>
              <Photo
                image={item.image}
                sizes={cols === 2 ? "(min-width: 768px) 50vw, 100vw" : "(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"}
                className="aspect-[16/10] transition-transform duration-500 group-hover:scale-[1.02]"
              />
              <div className="p-5 md:p-6">
                {item.meta && <p className="mb-1 text-[13px] font-medium text-green">{item.meta}</p>}
                <h3 className="text-[19px] leading-snug font-semibold tracking-[-0.01em]">
                  {item.title}
                  {item.href && <Arrow className="ml-1.5 text-green" />}
                </h3>
                {item.body && <p className="mt-2 text-[14.5px] text-muted">{item.body}</p>}
              </div>
            </>
          );
          return (
            <article key={item.title} className={`card flex flex-col overflow-hidden ${item.href ? "lift" : ""}`}>
              {item.href ? (
                <Link href={item.href} className="group block">
                  {body}
                </Link>
              ) : (
                body
              )}
              {item.list && (
                <div className="mt-auto px-5 pb-5 md:px-6 md:pb-6">
                  {item.listLabel && <p className="mb-2 text-[13px] font-semibold">{item.listLabel}</p>}
                  <ul className="flex flex-wrap gap-1.5">
                    {item.list.map((li) => (
                      <li key={li} className="rounded-[9px] bg-canvas px-2.5 py-1 text-[13px] text-ink-2">
                        {li}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </article>
          );
        })}
      </div>
    </Section>
  );
}

export const SHAHADA = {
  arabic: "أَشْهَدُ أَنْ لَا إِلَٰهَ إِلَّا ٱللَّٰهُ وَأَشْهَدُ أَنَّ مُحَمَّدًا رَسُولُ ٱللَّٰهِ",
  transliteration: "Ash-hadu an laa ilaaha ill-Allah, wa ash-hadu anna Muhammadan rasool-Allah",
  translation:
    "I bear witness that there is no deity worthy of worship except Allah, and I bear witness that Muhammad is His messenger.",
};

export function Shahada({ block }: { block: Of<"shahada"> }) {
  return (
    <Section>
      <div className="relative overflow-hidden rounded-[24px] bg-green-ink px-5 py-8 text-center text-white md:px-12 md:py-14">
        <Rosette className="pointer-events-none absolute -top-28 -right-28 size-[22rem] text-white opacity-[0.12] md:size-[30rem]" />
        <p className="relative text-[12.5px] font-semibold tracking-[0.08em] text-white/65 uppercase">{block.label ?? "The Shahada"}</p>
        {block.title && <h2 className="sr-only">{block.title}</h2>}
        <p dir="rtl" lang="ar" className="relative mx-auto mt-3 max-w-[18em] font-arabic text-[28px] leading-[1.85] md:text-[clamp(34px,3.6vw,50px)]">
          {SHAHADA.arabic}
        </p>
        <p className="relative mt-3 font-serif text-[17px] text-white/85 italic md:text-[20px]">{SHAHADA.transliteration}</p>
        <p className="relative mx-auto mt-2 max-w-[34em] text-[14px] text-white/65 md:text-[15px]">{SHAHADA.translation}</p>
        {block.action && (
          <ButtonLink href={block.action.href} variant="inverse" arrow className="relative mt-6 w-full sm:w-auto">
            {block.action.label}
          </ButtonLink>
        )}
      </div>
    </Section>
  );
}

export function People({ block }: { block: Of<"people"> }) {
  const detailed = block.items.some((p) => p.bio);
  if (detailed) {
    return (
      <Section>
        <SectionHead label={block.label} title={block.title} lede={block.lede} />
        <div className="grid gap-3 md:gap-4">
          {block.items.map((p) => (
            <article key={p.name} className="card grid gap-5 p-4 sm:grid-cols-[180px_1fr] md:gap-8 md:p-6 lg:grid-cols-[220px_1fr_1fr]">
              <Photo
                image={p.image}
                sizes="(min-width: 640px) 220px, 100vw"
                position="center top"
                className="aspect-[4/3] rounded-[16px] sm:aspect-[4/5]"
              />
              <div className="sm:py-1">
                <h3 className="text-[22px] leading-tight font-semibold tracking-[-0.02em]">{p.name}</h3>
                <p className="mt-1 text-[14px] font-medium text-green">{p.role}</p>
                {p.bio && <p className="mt-3 text-[15px] text-ink-2">{p.bio}</p>}
              </div>
              {p.highlights && (
                <div className="self-start rounded-[16px] bg-canvas p-4 sm:col-span-2 md:p-5 lg:col-span-1">
                  <p className="mb-3 text-[13px] font-semibold">Key achievements</p>
                  <Ticks items={p.highlights} />
                </div>
              )}
            </article>
          ))}
        </div>
      </Section>
    );
  }
  return (
    <Section>
      <SectionHead label={block.label} title={block.title} lede={block.lede} />
      <TeamGrid people={block.items} />
    </Section>
  );
}

export function TeamGrid({ people, more }: { people: Of<"people">["items"]; more?: boolean }) {
  return (
    <div className="rail [--rail-col:44%] sm:[--rail-col:30%] md:grid-cols-4">
      {people.map((p) => (
        <div key={p.name}>
          <Photo image={p.image} sizes="(min-width: 768px) 25vw, 44vw" position="center top" className="aspect-[4/5] rounded-[16px]" />
          <h3 className="mt-2.5 text-[14.5px] leading-snug font-semibold">{p.name}</h3>
          <p className="text-[13px] text-muted">{p.role}</p>
        </div>
      ))}
      {more && (
        <Link href="/board-of-directors" className="group flex aspect-[4/5] flex-col justify-end rounded-[16px] bg-brand p-4 text-white md:p-6">
          <span className="text-[18px] leading-tight font-semibold md:text-[22px]">
            Board of Directors <Arrow />
          </span>
          <span className="mt-1 text-[13px] text-white/70">Meet the full leadership team</span>
        </Link>
      )}
    </div>
  );
}

export function Gallery({ block }: { block: Of<"gallery"> }) {
  return (
    <Section>
      <SectionHead label={block.label} title={block.title} lede={block.lede} />
      <div className="space-y-8 md:space-y-12">
        {block.groups.map((g) => (
          <div key={g.title}>
            <h3 className="mb-3 text-[18px] font-semibold tracking-[-0.01em] md:text-[20px]">{g.title}</h3>
            <ul className="grid grid-cols-2 gap-2.5 md:gap-4 lg:grid-cols-4">
              {g.items.map((img, i) => (
                <li key={`${img.src}-${i}`}>
                  <figure>
                    <Photo image={img} sizes="(min-width: 1024px) 25vw, 50vw" className="aspect-square rounded-[16px]" />
                    <figcaption className="mt-1.5 text-[12.5px] leading-snug text-muted">{img.alt}</figcaption>
                  </figure>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}

export function Books({ block }: { block: Of<"books"> }) {
  return (
    <Section>
      <SectionHead label={block.label} title={block.title} lede={block.lede} />
      <div className="grid gap-3 md:grid-cols-3 md:gap-4">
        {block.items.map((b) => (
          <article key={b.title} className="card flex flex-col overflow-hidden">
            {/* min-h-0 keeps the 5:4 frame when a tall portrait cover would stretch it */}
            <div className="flex aspect-[5/4] min-h-0 items-center justify-center bg-green-tint p-6">
              <Image
                src={imageSrc(b.image.src)}
                alt={b.image.alt}
                width={400}
                height={600}
                sizes="(min-width: 768px) 200px, 240px"
                className="h-full w-auto object-contain drop-shadow-[0_12px_18px_rgb(15_21_19/0.22)]"
              />
            </div>
            <div className="flex flex-1 flex-col p-5 md:p-6">
              <h3 className="text-[19px] leading-snug font-semibold tracking-[-0.01em]">{b.title}</h3>
              {b.subtitle && <p className="mt-1 text-[14.5px] leading-snug text-ink-2">{b.subtitle}</p>}
              <p className="mt-1.5 text-[13.5px] font-medium text-green">by {b.author}</p>
              <p className="mt-2 text-[14.5px] text-ink-2">{b.body}</p>
              {(b.amazon || b.pakistan) && (
                <div className="mt-auto grid gap-2 pt-5">
                  {b.pakistan && (
                    <>
                      <p className="text-[13.5px] text-ink-2">
                        <span className="font-semibold text-ink">In Pakistan:</span> {b.pakistan}
                      </p>
                      <a
                        href={site.orderBook(b.title, b.pakistan)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex min-h-12 items-center justify-center rounded-[14px] bg-brand px-5 py-2 text-[15px] font-semibold text-white transition-colors hover:bg-green-ink"
                      >
                        Order on WhatsApp
                      </a>
                    </>
                  )}
                  {b.amazon && (
                    <a href={b.amazon} target="_blank" rel="noopener noreferrer" className={buttonClass("secondary")}>
                      Buy on Amazon
                    </a>
                  )}
                </div>
              )}
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}

export function Testimonies({ block }: { block: Of<"testimonies"> }) {
  return (
    <Section>
      <SectionHead label={block.label} title={block.title} lede={block.lede} />
      <div className="grid gap-3 md:grid-cols-2 md:gap-4">
        {block.items.map((t) => (
          <figure key={t.name} className="card flex flex-col p-5 md:p-7">
            <div className="flex items-center gap-3">
              {t.image ? (
                <Photo image={t.image} sizes="56px" className="size-14 shrink-0 rounded-full" />
              ) : (
                <span
                  aria-hidden
                  className="grid size-14 shrink-0 place-items-center rounded-full bg-green-tint font-serif text-[24px] text-green"
                >
                  {t.name.charAt(0)}
                </span>
              )}
              <div>
                <p className="font-semibold">{t.name}</p>
                <p className="text-[13.5px] text-muted">{t.place}</p>
              </div>
            </div>
            <blockquote className="mt-4 font-serif text-[21px] leading-snug tracking-[-0.01em] md:text-[23px]">“{t.quote}”</blockquote>
            <figcaption className="mt-3 text-[14.5px] text-ink-2">{t.story}</figcaption>
          </figure>
        ))}
      </div>
    </Section>
  );
}
