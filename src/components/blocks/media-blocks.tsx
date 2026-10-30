import Image from "next/image";
import Link from "next/link";
import type { Block } from "@/content/types";
import { Arrow, ButtonLink } from "@/components/ui/button";
import { Photo } from "@/components/ui/photo";
import { Rosette } from "@/components/ui/rosette";
import { Label, Section, SectionHead } from "@/components/ui/section";
import { imageSrc } from "@/lib/image";

type Of<T extends Block["type"]> = Extract<Block, { type: T }>;
type Common = { index?: number; flush?: boolean };

export function Cards({ block, index, flush }: { block: Of<"cards"> } & Common) {
  const cols = block.cols ?? 3;
  return (
    <Section tone={block.tone} flush={flush}>
      <SectionHead index={index} label={block.label} title={block.title} lede={block.lede} />
      <div className={`grid gap-x-8 gap-y-14 ${cols === 2 ? "md:grid-cols-2" : "md:grid-cols-2 lg:grid-cols-3"}`}>
        {block.items.map((item) => {
          const body = (
            <>
              <Photo
                image={item.image}
                sizes={cols === 2 ? "(min-width: 768px) 50vw, 100vw" : "(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"}
                className="aspect-[4/3] transition-opacity duration-300 group-hover:opacity-90"
              />
              {item.meta && <p className="mt-5 text-[13px] text-muted">{item.meta}</p>}
              <h3 className={`font-serif text-[26px] leading-tight tracking-[-0.02em] ${item.meta ? "mt-1.5" : "mt-5"}`}>
                {item.title}
                {item.href && <Arrow className="ml-2 text-[0.7em]" />}
              </h3>
              {item.body && <p className="mt-2.5 max-w-[32em] text-[15.5px] text-muted">{item.body}</p>}
            </>
          );
          return (
            <article key={item.title}>
              {item.href ? (
                <Link href={item.href} className="group block hover:text-green">
                  {body}
                </Link>
              ) : (
                body
              )}
              {item.list && (
                <div className="mt-5">
                  {item.listLabel && <p className="mb-2 text-[13px] font-medium">{item.listLabel}</p>}
                  <ul className="flex flex-wrap gap-1.5">
                    {item.list.map((li) => (
                      <li key={li} className="border border-line px-2.5 py-1 text-[13.5px] text-ink-2">
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

export function Shahada({ block, flush }: { block: Of<"shahada"> } & Common) {
  return (
    <Section flush={flush} className="text-center">
      <Rosette className="mx-auto mb-10 size-32 text-green md:size-37" />
      {block.label && <p className="mb-3 text-[13px] text-muted">{block.label}</p>}
      {block.title && <h2 className="sr-only">{block.title}</h2>}
      <p dir="rtl" lang="ar" className="mx-auto max-w-[16em] font-arabic text-[30px] leading-[1.8] md:text-[clamp(34px,4.2vw,54px)]">
        {SHAHADA.arabic}
      </p>
      <p className="mt-5 font-serif text-[19px] text-ink-2 italic md:text-[21px]">{SHAHADA.transliteration}</p>
      <p className="mx-auto mt-2.5 max-w-[34em] text-muted">{SHAHADA.translation}</p>
      {block.action && (
        <ButtonLink href={block.action.href} variant="secondary" arrow className="mt-9">
          {block.action.label}
        </ButtonLink>
      )}
    </Section>
  );
}

export function People({ block, index, flush }: { block: Of<"people"> } & Common) {
  const detailed = block.items.some((p) => p.bio);
  if (detailed) {
    return (
      <Section flush={flush}>
        <SectionHead index={index} label={block.label} title={block.title} lede={block.lede} />
        <div className="border-t border-ink">
          {block.items.map((p) => (
            <article key={p.name} className="grid gap-6 border-b border-line py-10 md:grid-cols-12 md:gap-8">
              <Photo
                image={p.image}
                sizes="(min-width: 768px) 25vw, 60vw"
                position="center top"
                className="aspect-[4/5] w-3/5 grayscale md:col-span-3 md:w-full"
              />
              <div className="md:col-span-4">
                <h3 className="font-serif text-[30px] leading-tight tracking-[-0.02em]">{p.name}</h3>
                <p className="mt-1 text-[14px] text-muted">{p.role}</p>
                {p.bio && <p className="mt-5 text-ink-2">{p.bio}</p>}
              </div>
              {p.highlights && (
                <div className="md:col-span-4 md:col-start-9">
                  <p className="mb-2 text-[13px] font-medium">Key achievements</p>
                  <ul className="border-t border-line">
                    {p.highlights.map((h) => (
                      <li key={h} className="border-b border-line py-2.5 text-[15px] text-ink-2">
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </article>
          ))}
        </div>
      </Section>
    );
  }
  return (
    <Section flush={flush}>
      <SectionHead index={index} label={block.label} title={block.title} lede={block.lede} />
      <TeamGrid people={block.items} />
    </Section>
  );
}

export function TeamGrid({ people, more }: { people: Of<"people">["items"]; more?: boolean }) {
  return (
    <div className="grid grid-cols-2 gap-x-5 gap-y-10 md:gap-8 lg:grid-cols-4">
      {people.map((p) => (
        <div key={p.name} className="group">
          <Photo
            image={p.image}
            sizes="(min-width: 1024px) 25vw, 50vw"
            position="center top"
            className="aspect-[4/5] grayscale transition-[filter] duration-500 group-hover:grayscale-0"
          />
          <h3 className="mt-4 text-[15.5px] font-medium">{p.name}</h3>
          <p className="text-[14px] text-muted">{p.role}</p>
        </div>
      ))}
      {more && (
        <Link
          href="/board-of-directors"
          className="group flex aspect-[4/5] flex-col justify-end border border-line p-6 transition-colors hover:border-ink"
        >
          <span className="font-serif text-[26px] leading-tight tracking-[-0.02em]">
            Board of Directors <Arrow />
          </span>
          <span className="mt-2 text-[14px] text-muted">Meet the full leadership team</span>
        </Link>
      )}
    </div>
  );
}

export function Gallery({ block, index, flush }: { block: Of<"gallery"> } & Common) {
  return (
    <Section flush={flush}>
      <SectionHead index={index} label={block.label} title={block.title} lede={block.lede} />
      <div className="space-y-18">
        {block.groups.map((g) => (
          <div key={g.title}>
            <h3 className="mb-6 border-t border-ink pt-5 font-serif text-[26px] tracking-[-0.02em]">{g.title}</h3>
            <ul className="grid grid-cols-2 gap-3 md:gap-4 lg:grid-cols-4">
              {g.items.map((img, i) => (
                <li key={`${img.src}-${i}`}>
                  <figure>
                    <Photo image={img} sizes="(min-width: 1024px) 25vw, 50vw" className="aspect-square" />
                    <figcaption className="mt-2 text-[13px] text-muted">{img.alt}</figcaption>
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

export function Books({ block, index, flush }: { block: Of<"books"> } & Common) {
  return (
    <Section flush={flush}>
      <SectionHead index={index} label={block.label} title={block.title} />
      <div className="grid gap-12 md:grid-cols-3 md:gap-8">
        {block.items.map((b) => (
          <article key={b.title}>
            <div className="relative flex aspect-[4/3] items-center justify-center bg-alt p-8">
              <Image
                src={imageSrc(b.image.src)}
                alt={b.image.alt}
                width={400}
                height={400}
                className="h-full w-auto object-contain drop-shadow-[0_12px_18px_rgb(17_20_19/0.18)]"
              />
            </div>
            <h3 className="mt-5 font-serif text-[26px] leading-tight tracking-[-0.02em]">{b.title}</h3>
            <p className="mt-1 text-[14px] text-muted">by {b.author}</p>
            <p className="mt-3 text-ink-2">{b.body}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}

export function Testimonies({ block, index, flush }: { block: Of<"testimonies"> } & Common) {
  return (
    <Section flush={flush}>
      <SectionHead index={index} label={block.label} title={block.title} lede={block.lede} />
      <div className="border-t border-ink">
        {block.items.map((t) => (
          <figure key={t.name} className="grid gap-6 border-b border-line py-10 md:grid-cols-12 md:gap-8">
            <Photo image={t.image} sizes="(min-width: 768px) 16vw, 40vw" className="aspect-square w-28 md:col-span-2 md:w-full" />
            <blockquote className="display text-[26px] leading-[1.2] md:col-span-6 md:text-[30px]">“{t.quote}”</blockquote>
            <figcaption className="md:col-span-4">
              <p className="font-medium">{t.name}</p>
              <p className="text-[14px] text-muted">{t.place}</p>
              <p className="mt-4 text-[15.5px] text-ink-2">{t.story}</p>
            </figcaption>
          </figure>
        ))}
      </div>
    </Section>
  );
}

export function PageLabel({ children }: { children: string }) {
  return <Label>{children}</Label>;
}
