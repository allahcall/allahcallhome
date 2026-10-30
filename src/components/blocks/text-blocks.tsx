import Link from "next/link";
import type { Block } from "@/content/types";
import { Arrow, ButtonLink } from "@/components/ui/button";
import { Photo } from "@/components/ui/photo";
import { Label, Section, SectionHead } from "@/components/ui/section";

type Of<T extends Block["type"]> = Extract<Block, { type: T }>;
type Common = { index?: number; flush?: boolean };

const colClass = { 2: "md:grid-cols-2", 3: "md:grid-cols-3", 4: "md:grid-cols-2 lg:grid-cols-4" } as const;

export function Prose({ block, index, flush }: { block: Of<"prose"> } & Common) {
  return (
    <Section flush={flush}>
      <div className="grid gap-5 md:grid-cols-12 md:gap-8">
        {block.label && <Label index={index} className="md:col-span-3 md:pt-3">{block.label}</Label>}
        <div className="md:col-span-9 md:grid md:grid-cols-9 md:gap-8">
          <h2 className="display text-[34px] md:col-span-5 md:text-[clamp(36px,3.6vw,52px)]">{block.title}</h2>
          <div className="mt-6 space-y-4 text-[17px] text-ink-2 md:col-span-4 md:mt-2">
            {block.body.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

export function Columns({ block, index, flush }: { block: Of<"columns"> } & Common) {
  const cols = block.cols ?? 3;
  return (
    <Section tone={block.tone} flush={flush}>
      <SectionHead index={index} label={block.label} title={block.title} lede={block.lede} />
      <div className={`grid border-t border-ink ${colClass[cols]}`}>
        {block.items.map((item, i) => (
          <div
            key={item.title}
            className={`flex flex-col border-line pt-7 pb-8 max-md:border-t max-md:first:border-t-0 md:pb-2 ${
              cols === 4 ? "lg:border-l lg:px-7 lg:first:border-l-0 lg:first:pl-0 md:max-lg:odd:pr-7 md:max-lg:even:border-l md:max-lg:even:pl-7 md:max-lg:[&:nth-child(n+3)]:mt-6 md:max-lg:[&:nth-child(n+3)]:border-t" : "md:border-l md:px-8 md:first:border-l-0 md:first:pl-0 md:last:pr-0"
            }`}
          >
            <span className="text-[13px] text-muted tabular-nums">{String(i + 1).padStart(2, "0")}</span>
            <h3 className={`font-serif tracking-[-0.02em] ${cols === 4 ? "mt-6 text-[24px]" : "mt-8 text-[28px]"} leading-[1.15]`}>
              {item.href ? (
                <Link href={item.href} className="group hover:text-green">
                  {item.title} <Arrow className="text-[0.7em]" />
                </Link>
              ) : (
                item.title
              )}
            </h3>
            {item.meta && <p className="mt-2 text-[13px] text-muted">{item.meta}</p>}
            {item.body && <p className="mt-3 max-w-[30em] text-[15.5px] text-muted">{item.body}</p>}
            {item.list && (
              <div className="mt-6">
                {item.listLabel && <p className="mb-2 text-[13px] font-medium text-ink">{item.listLabel}</p>}
                <ul className="border-t border-line">
                  {item.list.map((li) => (
                    <li key={li} className="border-b border-line py-2.5 text-[15px] text-ink-2">
                      {li}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </Section>
  );
}

export function Points({ block, index, flush }: { block: Of<"points"> } & Common) {
  return (
    <Section tone={block.tone} flush={flush}>
      <SectionHead index={index} label={block.label} title={block.title} lede={block.lede} />
      <ol className="grid border-t border-ink sm:grid-cols-2 lg:grid-cols-3">
        {block.items.map((item, i) => (
          <li key={item} className="flex gap-5 border-b border-line py-6 pr-6 text-[17px]">
            <span className="pt-1 text-[13px] text-muted tabular-nums">{String(i + 1).padStart(2, "0")}</span>
            <span className="font-serif text-[22px] leading-snug tracking-[-0.01em]">{item}</span>
          </li>
        ))}
      </ol>
    </Section>
  );
}

export function Steps({ block, index, flush }: { block: Of<"steps"> } & Common) {
  return (
    <Section flush={flush}>
      <SectionHead index={index} label={block.label} title={block.title} />
      <ol className="grid gap-x-8 md:grid-cols-2 lg:grid-cols-4">
        {block.items.map((step, i) => (
          <li key={step.title} className="border-t border-ink pt-6 pb-10">
            <span className="font-serif text-[56px] leading-none font-light text-green">{i + 1}</span>
            <h3 className="mt-6 font-serif text-[24px] tracking-[-0.02em]">{step.title}</h3>
            <p className="mt-3 text-[15.5px] text-muted">{step.body}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}

export function Quote({ block, index, flush }: { block: Of<"quote"> } & Common) {
  if (block.image) {
    return (
      <Section flush={flush}>
        <div className="grid items-center gap-10 md:grid-cols-12 md:gap-8">
          <Photo image={block.image} sizes="(min-width: 768px) 50vw, 100vw" className="aspect-[4/3] md:col-span-6 md:aspect-[4/5]" />
          <div className="md:col-span-5 md:col-start-8">
            {block.label && <Label index={index} className="mb-7">{block.label}</Label>}
            <blockquote className="display text-[30px] leading-[1.16] md:text-[clamp(30px,3vw,42px)]">
              “{block.quote}”
            </blockquote>
            <cite className="mt-6 block text-[14px] text-muted not-italic">{block.cite}</cite>
            {block.body && <p className="mt-10 max-w-[30em] border-t border-line pt-6 text-ink-2">{block.body}</p>}
          </div>
        </div>
      </Section>
    );
  }
  return (
    <Section flush={flush}>
      <div className="grid gap-6 md:grid-cols-12 md:gap-8">
        {block.label && <Label index={index} className="md:col-span-3 md:pt-4">{block.label}</Label>}
        <div className="md:col-span-8">
          <blockquote className="display text-[30px] leading-[1.14] md:text-[clamp(32px,3.6vw,50px)]">
            “{block.quote}”
          </blockquote>
          <cite className="mt-6 block text-[14px] text-muted not-italic">{block.cite}</cite>
          {block.body && <p className="mt-8 max-w-[36em] text-[17px] text-ink-2">{block.body}</p>}
        </div>
      </div>
    </Section>
  );
}

export function Stats({ block, index, flush }: { block: Of<"stats"> } & Common) {
  return (
    <Section flush={flush}>
      <SectionHead index={index} label={block.label} title={block.title} />
      <dl className="grid grid-cols-2 border-y border-line lg:grid-cols-4">
        {block.items.map((s, i) => (
          <div
            key={s.label}
            className={`py-7 ${i % 2 ? "border-l border-line pl-5" : ""} ${i >= 2 ? "max-lg:border-t max-lg:border-line" : ""} lg:border-l lg:pl-6 lg:first:border-l-0 lg:first:pl-0`}
          >
            <dd className="font-serif text-[32px] leading-none tracking-[-0.02em] md:text-[44px]">{s.value}</dd>
            <dt className="mt-2.5 text-[14px] text-muted">{s.label}</dt>
            {s.body && <p className="mt-2 max-w-[22em] text-[14px] text-muted">{s.body}</p>}
          </div>
        ))}
      </dl>
    </Section>
  );
}

export function Faq({ block, index, flush }: { block: Of<"faq"> } & Common) {
  return (
    <Section flush={flush}>
      <div className="grid gap-6 md:grid-cols-12 md:gap-8">
        <div className="md:col-span-3 md:pt-6">
          {block.label && <Label index={index}>{block.label}</Label>}
          {block.title && <h2 className="display mt-4 text-[30px] md:text-[34px]">{block.title}</h2>}
        </div>
        <div className="md:col-span-8 md:col-start-5">
          {block.items.map((item, i) => (
            <details key={item.q} open={i === 0} className="group border-t border-line last:border-b">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-5.5 font-serif text-[21px] tracking-[-0.01em] md:text-[23px]">
                {item.q}
                <span aria-hidden className="pt-0.5 font-sans text-xl font-light text-muted transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="max-w-[40em] pb-6.5 text-ink-2">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </Section>
  );
}

export function Cta({ block }: { block: Of<"cta"> }) {
  return (
    <section className="bg-green-ink py-22 text-paper md:py-28">
      <div className="wrap grid items-end gap-8 md:grid-cols-12">
        <div className="md:col-span-8 lg:col-span-7">
          <h2 className="display text-[34px] md:text-[clamp(36px,4vw,54px)]">{block.title}</h2>
          {block.body && <p className="mt-5 max-w-[34em] text-[17px] text-paper/75">{block.body}</p>}
        </div>
        <div className="flex flex-wrap gap-2.5 md:col-span-4 md:col-start-9 md:justify-end lg:col-span-4 lg:col-start-9">
          {block.actions.map((a) => (
            <ButtonLink
              key={a.label}
              href={a.href}
              variant={a.variant === "secondary" ? "inverse-secondary" : "inverse"}
            >
              {a.label}
            </ButtonLink>
          ))}
        </div>
      </div>
    </section>
  );
}
