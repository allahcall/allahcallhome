import Link from "next/link";
import type { Block } from "@/content/types";
import { Arrow, ButtonLink } from "@/components/ui/button";
import { Photo } from "@/components/ui/photo";
import { Rosette } from "@/components/ui/rosette";
import { Label, Section, SectionHead, Ticks } from "@/components/ui/section";

type Of<T extends Block["type"]> = Extract<Block, { type: T }>;

const colClass = { 2: "md:grid-cols-2", 3: "md:grid-cols-2 lg:grid-cols-3", 4: "sm:grid-cols-2 lg:grid-cols-4" } as const;

export function Prose({ block }: { block: Of<"prose"> }) {
  return (
    <Section>
      <div className="card grid gap-5 p-6 md:grid-cols-12 md:gap-10 md:p-10">
        <div className="md:col-span-5">
          {block.label && <Label>{block.label}</Label>}
          <h2 className="display mt-2 text-[30px] md:text-[clamp(32px,3.2vw,44px)]">{block.title}</h2>
        </div>
        <div className="space-y-4 text-[16px] text-ink-2 md:col-span-7 md:pt-2 md:text-[17px]">
          {block.body.map((p) => (
            <p key={p.slice(0, 24)}>{p}</p>
          ))}
        </div>
      </div>
    </Section>
  );
}

export function Columns({ block }: { block: Of<"columns"> }) {
  const cols = block.cols ?? 3;
  return (
    <Section>
      <SectionHead label={block.label} title={block.title} lede={block.lede} />
      <div className={`grid gap-3 md:gap-4 ${colClass[cols]}`}>
        {block.items.map((item, i) => {
          const inner = (
            <>
              <span className="grid size-9 place-items-center rounded-[11px] bg-green-tint text-[13px] font-semibold text-green tabular-nums">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-4 text-[18px] leading-snug font-semibold tracking-[-0.01em]">
                {item.title}
                {item.href && <Arrow className="ml-1.5 text-green" />}
              </h3>
              {item.meta && <p className="mt-1 text-[13px] font-medium text-green">{item.meta}</p>}
              {item.body && <p className="mt-2 text-[14.5px] text-muted">{item.body}</p>}
            </>
          );
          return (
            <div key={item.title} className="card flex flex-col p-5 md:p-6">
              {item.href ? (
                <Link href={item.href} className="group block hover:text-green">
                  {inner}
                </Link>
              ) : (
                inner
              )}
              {item.list && (
                <div className="mt-4 border-t border-line pt-4">
                  {item.listLabel && <p className="mb-2.5 text-[13px] font-semibold">{item.listLabel}</p>}
                  <Ticks items={item.list} />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </Section>
  );
}

export function Points({ block }: { block: Of<"points"> }) {
  return (
    <Section>
      <SectionHead label={block.label} title={block.title} lede={block.lede} />
      <ol className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {block.items.map((item, i) => (
          <li key={item} className="card flex items-start gap-4 p-5">
            <span className="grid size-9 shrink-0 place-items-center rounded-[11px] bg-green-tint text-[13px] font-semibold text-green tabular-nums">
              {String(i + 1).padStart(2, "0")}
            </span>
            <span className="pt-1.5 text-[16px] leading-snug font-medium">{item}</span>
          </li>
        ))}
      </ol>
    </Section>
  );
}

export function Steps({ block }: { block: Of<"steps"> }) {
  return (
    <Section>
      <SectionHead label={block.label} title={block.title} />
      <ol className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4 md:gap-4">
        {block.items.map((step, i) => (
          <li key={step.title} className="card p-5 md:p-6">
            <span className="grid size-11 place-items-center rounded-[13px] bg-brand font-serif text-[22px] text-white">{i + 1}</span>
            <h3 className="mt-4 text-[18px] font-semibold tracking-[-0.01em]">{step.title}</h3>
            <p className="mt-2 text-[14.5px] text-muted">{step.body}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}

export function Quote({ block }: { block: Of<"quote"> }) {
  return (
    <Section>
      <figure className="relative grid overflow-hidden rounded-[24px] bg-green-ink text-white md:grid-cols-2">
        <Rosette className="pointer-events-none absolute -top-24 -right-24 size-80 text-white opacity-[0.08]" />
        {block.image && (
          <Photo image={block.image} sizes="(min-width: 768px) 50vw, 100vw" className="aspect-[16/10] md:aspect-auto md:min-h-[420px]" />
        )}
        <div className={`relative p-6 md:p-12 ${block.image ? "" : "md:col-span-2 md:max-w-4xl"}`}>
          {block.label && <p className="text-[13px] font-semibold text-leaf">{block.label}</p>}
          <blockquote className="display mt-3 text-[26px] leading-[1.18] md:text-[clamp(28px,2.8vw,40px)]">“{block.quote}”</blockquote>
          <figcaption className="mt-4 text-[14px] text-white/65">{block.cite}</figcaption>
          {block.body && <p className="mt-6 border-t border-white/15 pt-5 text-[15px] text-white/80">{block.body}</p>}
        </div>
      </figure>
    </Section>
  );
}

export function Stats({ block }: { block: Of<"stats"> }) {
  return (
    <Section>
      <SectionHead label={block.label} title={block.title} />
      <dl className="grid grid-cols-2 gap-2.5 md:gap-4 lg:grid-cols-4">
        {block.items.map((s) => (
          <div key={s.label} className="card flex flex-col p-4 md:p-6">
            <dd className="font-serif text-[30px] leading-none font-medium tracking-[-0.02em] text-green md:text-[42px]">{s.value}</dd>
            <dt className="mt-2 text-[13px] leading-snug text-muted md:text-[14px]">{s.label}</dt>
            {s.body && <p className="mt-2 text-[13.5px] text-ink-2">{s.body}</p>}
          </div>
        ))}
      </dl>
    </Section>
  );
}

export function Faq({ block }: { block: Of<"faq"> }) {
  return (
    <Section>
      <SectionHead label={block.label} title={block.title} link={{ label: "Ask us", href: "/contact" }} />
      <div className="card divide-y divide-line">
        {block.items.map((item, i) => (
          <details key={item.q} open={i === 0} className="group">
            <summary className="flex cursor-pointer list-none items-start justify-between gap-4 px-5 py-4 text-[15.5px] font-semibold md:px-7 md:py-5 md:text-[17px]">
              {item.q}
              <span aria-hidden className="text-xl leading-none font-light text-muted transition-transform group-open:rotate-45">
                +
              </span>
            </summary>
            <p className="max-w-[48em] px-5 pb-5 text-[15px] text-ink-2 md:px-7 md:pb-6">{item.a}</p>
          </details>
        ))}
      </div>
    </Section>
  );
}

export function Cta({ block }: { block: Of<"cta"> }) {
  return (
    <Section>
      <div className="relative overflow-hidden rounded-[24px] bg-brand p-6 text-white md:flex md:items-center md:justify-between md:gap-10 md:p-12">
        <Rosette className="pointer-events-none absolute -bottom-28 -left-20 size-72 text-white opacity-[0.07]" />
        <div className="relative max-w-2xl">
          <h2 className="display text-[28px] md:text-[clamp(30px,3.2vw,44px)]">{block.title}</h2>
          {block.body && <p className="mt-3 text-[15px] text-white/75 md:text-[16.5px]">{block.body}</p>}
        </div>
        <div className="relative mt-6 grid grid-cols-2 gap-2.5 md:mt-0 md:flex md:shrink-0">
          {block.actions.map((a, i) => (
            <ButtonLink
              key={a.label}
              href={a.href}
              variant={a.variant === "secondary" ? "inverse-secondary" : "inverse"}
              className={block.actions.length === 1 || (block.actions.length % 2 && i === 0) ? "col-span-2" : ""}
            >
              {a.label}
            </ButtonLink>
          ))}
        </div>
      </div>
    </Section>
  );
}
