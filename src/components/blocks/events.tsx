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
const dayFmt = new Intl.DateTimeFormat("en-GB", { day: "2-digit", timeZone: "UTC" });
const monFmt = new Intl.DateTimeFormat("en-GB", { month: "short", timeZone: "UTC" });

const utc = (iso: string) => new Date(`${iso}T00:00:00Z`);

function When({ e }: { e: EventItem }) {
  if (!e.date) return <>{e.recurring}</>;
  return <time dateTime={e.date}>{fmt.format(utc(e.date))}</time>;
}

/** Calendar tile: day and month for dated events, the weekday for recurring ones. */
function DateTile({ e }: { e: EventItem }) {
  const [top, big] = e.date
    ? [monFmt.format(utc(e.date)).toUpperCase(), dayFmt.format(utc(e.date))]
    : ["EVERY", (e.recurring ?? "").replace(/^Every\s+/i, "").slice(0, 3).toUpperCase()];
  return (
    <div className="grid size-16 shrink-0 place-items-center content-center rounded-[14px] bg-green-tint text-center leading-tight text-green">
      <span className="text-[11px] font-bold tracking-wide">{top}</span>
      <span className="text-[20px] font-bold">{big}</span>
    </div>
  );
}

export async function Events({ block }: { block: Of<"events"> }) {
  const now = await today();
  const upcoming = block.items
    .filter((e) => !e.date || e.date >= now)
    .sort((a, b) => (a.date ?? "").localeCompare(b.date ?? ""));
  const past = block.items.filter((e) => e.date && e.date < now).sort((a, b) => b.date!.localeCompare(a.date!));

  return (
    <>
      <Section>
        <SectionHead label={block.label ?? "Upcoming"} title={block.title ?? "Upcoming events"} lede={block.lede} />
        {upcoming.length === 0 ? (
          <p className="card p-6 text-muted">
            No events are scheduled right now. Check back soon, or contact us to hear about the next gathering.
          </p>
        ) : (
          <div className="grid gap-3 md:gap-4">
            {upcoming.map((e) => (
              <article key={e.title} className="card grid overflow-hidden md:grid-cols-[minmax(0,2fr)_minmax(0,3fr)]">
                <Photo image={e.image} sizes="(min-width: 768px) 40vw, 100vw" className="aspect-[16/9] md:aspect-auto md:min-h-64" />
                <div className="flex flex-col p-5 md:p-7">
                  <div className="flex items-center gap-4">
                    <DateTile e={e} />
                    <div className="min-w-0">
                      <h3 className="text-[19px] leading-snug font-semibold tracking-[-0.01em] md:text-[22px]">{e.title}</h3>
                      <p className="mt-0.5 text-[13.5px] text-muted">
                        <When e={e} />
                        {e.time && ` · ${e.time}`}
                      </p>
                    </div>
                  </div>
                  <p className="mt-4 text-[14px] font-medium text-ink-2">{e.location}</p>
                  <p className="mt-1.5 text-[14.5px] text-muted">{e.body}</p>
                  {e.action && (
                    <ButtonLink href={e.action.href} className="mt-5 self-start max-sm:w-full">
                      {e.action.label}
                    </ButtonLink>
                  )}
                </div>
              </article>
            ))}
          </div>
        )}
      </Section>

      {past.length > 0 && (
        <Section>
          <SectionHead label="Archive" title="Past events" />
          <div className="grid gap-3 md:grid-cols-2 md:gap-4">
            {past.map((e) => (
              <article key={e.title} className="card overflow-hidden">
                <Photo image={e.image} sizes="(min-width: 768px) 50vw, 100vw" className="aspect-[16/9]" />
                <div className="p-5 md:p-6">
                  <p className="text-[13px] font-medium text-muted">
                    <When e={e} /> · {e.location}
                  </p>
                  <h3 className="mt-1 text-[19px] leading-snug font-semibold tracking-[-0.01em]">{e.title}</h3>
                  <p className="mt-2 text-[14.5px] text-muted">{e.body}</p>
                </div>
              </article>
            ))}
          </div>
        </Section>
      )}
    </>
  );
}
