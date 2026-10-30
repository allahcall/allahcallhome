import { cacheLife } from "next/cache";
import type { Block, EventItem } from "@/content/types";
import { ButtonLink } from "@/components/ui/button";
import { Photo } from "@/components/ui/photo";
import { Section, SectionHead } from "@/components/ui/section";

type Of<T extends Block["type"]> = Extract<Block, { type: T }>;

// Today's date, cached for a day so the page stays prerendered.
async function today() {
  "use cache";
  cacheLife("days");
  return new Date().toISOString().slice(0, 10);
}

const fmt = new Intl.DateTimeFormat("en-GB", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" });

function When({ e }: { e: EventItem }) {
  if (!e.date) return <>{e.recurring}</>;
  const d = new Date(`${e.date}T00:00:00Z`);
  return <time dateTime={e.date}>{fmt.format(d)}</time>;
}

export async function Events({ block, index, flush }: { block: Of<"events">; index?: number; flush?: boolean }) {
  const now = await today();
  const upcoming = block.items
    .filter((e) => !e.date || e.date >= now)
    .sort((a, b) => (a.date ?? "").localeCompare(b.date ?? ""));
  const past = block.items.filter((e) => e.date && e.date < now).sort((a, b) => b.date!.localeCompare(a.date!));

  return (
    <>
      <Section flush={flush}>
        <SectionHead index={index} label={block.label ?? "Upcoming"} title={block.title ?? "Upcoming events"} lede={block.lede} />
        {upcoming.length === 0 ? (
          <p className="border-t border-ink pt-6 text-muted">
            No events are scheduled right now. Check back soon, or contact us to hear about the next gathering.
          </p>
        ) : (
          <div className="border-t border-ink">
            {upcoming.map((e) => (
              <article key={e.title} className="grid gap-5 border-b border-line py-8 md:grid-cols-12 md:items-center md:gap-8">
                <Photo image={e.image} sizes="(min-width: 768px) 20vw, 100vw" className="aspect-[16/10] md:col-span-3" />
                <div className="md:col-span-2">
                  <p className="font-serif text-[22px] leading-tight tracking-[-0.01em]">
                    <When e={e} />
                  </p>
                  {e.time && <p className="mt-1 text-[14px] text-muted">{e.time}</p>}
                </div>
                <div className="md:col-span-5">
                  <h3 className="font-serif text-[26px] leading-tight tracking-[-0.02em]">{e.title}</h3>
                  <p className="mt-1 text-[14px] text-ink-2">{e.location}</p>
                  <p className="mt-3 text-[15.5px] text-muted">{e.body}</p>
                </div>
                {e.action && (
                  <div className="md:col-span-2 md:justify-self-end">
                    <ButtonLink href={e.action.href} variant="secondary">
                      {e.action.label}
                    </ButtonLink>
                  </div>
                )}
              </article>
            ))}
          </div>
        )}
      </Section>

      {past.length > 0 && (
        <Section tone="alt">
          <SectionHead label="Archive" title="Past events" />
          <div className="grid gap-x-8 gap-y-12 md:grid-cols-2">
            {past.map((e) => (
              <article key={e.title}>
                <Photo image={e.image} sizes="(min-width: 768px) 50vw, 100vw" className="aspect-[16/9]" />
                <p className="mt-5 text-[13px] text-muted">
                  <When e={e} /> · {e.location}
                </p>
                <h3 className="mt-1.5 font-serif text-[26px] leading-tight tracking-[-0.02em]">{e.title}</h3>
                <p className="mt-2.5 text-[15.5px] text-muted">{e.body}</p>
              </article>
            ))}
          </div>
        </Section>
      )}
    </>
  );
}
