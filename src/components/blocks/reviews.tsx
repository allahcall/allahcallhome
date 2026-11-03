import { Section, SectionHead } from "@/components/ui/section";
import { featured, programs, reviews, type Program, type Review } from "@/content/reviews";

const rated = reviews.filter((r) => r.rating);
const wall = featured.map((name) => reviews.find((r) => r.name === name)!);
const rest = reviews.filter((r) => r.program !== "workshop" && !featured.includes(r.name));
/** Phones show this many wall cards; the rest move under “Show all”. */
const phoneWall = 5;
const workshop = reviews.filter((r) => r.program === "workshop");
const spotlight = reviews.find((r) => r.name === "Areesha Batool")!;
const counts = (Object.keys(programs) as Program[]).map((p) => ({
  program: p,
  count: reviews.filter((r) => r.program === p).length,
}));

/** Home page student reviews: a spotlight, a moving strip of short comments, and a wall that pops in on scroll. */
export function Reviews() {
  return (
    <Section>
      <SectionHead
        label="Student reviews"
        title="What our students say"
        link={{ label: "Browse courses", href: "/courses" }}
      />

      <div className="grid gap-3 lg:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)] lg:gap-4">
        <figure className="pop relative isolate overflow-hidden rounded-[20px] bg-green p-6 text-paper md:p-10">
          <span aria-hidden className="absolute -top-6 right-4 -z-10 font-serif text-[220px] leading-none text-paper/8">
            ”
          </span>
          <Stars className="text-leaf" />
          <blockquote className="display mt-4 max-w-[22em] text-[26px] leading-[1.15] md:text-[clamp(28px,2.8vw,38px)]">
            {spotlight.quote.at(-1)}
          </blockquote>
          <figcaption className="mt-6 flex items-center gap-3">
            <Initial name={spotlight.name} className="bg-paper/15 text-paper" />
            <span>
              <span className="block font-semibold">{spotlight.name}</span>
              <span className="block text-[13px] text-paper/70">{programs[spotlight.program]}</span>
            </span>
          </figcaption>
        </figure>

        <div className="pop card flex flex-col p-6 md:p-8">
          <p className="flex items-baseline gap-2">
            <span className="font-serif text-[56px] leading-none font-medium tracking-[-0.03em] text-green">5.0</span>
            <span className="text-[14px] text-muted">out of 5</span>
          </p>
          <Stars className="mt-2 text-green" />
          <p className="mt-2 text-[14px] text-ink-2">
            All {rated.length} star ratings are five stars, from {reviews.length} student reviews in total.
          </p>
          <ul className="mt-5 grid gap-2 border-t border-line pt-4 lg:mt-auto">
            {counts.map((c) => (
              <li key={c.program} className="flex justify-between gap-3 text-[14px]">
                <span className="text-ink-2">{programs[c.program]}</span>
                <span className="font-semibold tabular-nums">{c.count}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="marquee mt-3 lg:mt-4" aria-label="Comments from the Why Islam Is True! workshop">
        <ul className="marquee-track">
          {[...workshop, ...workshop].map((r, i) => (
            <li
              key={i}
              aria-hidden={i >= workshop.length || undefined}
              className="flex shrink-0 items-center gap-2.5 rounded-full border border-line bg-paper py-1.5 pr-4 pl-1.5 text-[14px]"
            >
              <Initial name={r.name} className="size-7 text-[13px]" />
              <span className="text-ink-2">“{r.quote[0]}”</span>
              <span className="text-[12.5px] whitespace-nowrap text-muted">{r.name}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-3 gap-3 sm:columns-2 lg:mt-4 lg:columns-3 lg:gap-4">
        {wall.map((r, i) => (
          <ReviewCard key={r.name} review={r} className={i >= phoneWall ? "max-sm:hidden" : ""} />
        ))}
      </div>

      <details className="group">
        <summary className="mx-auto mt-2 flex w-fit cursor-pointer list-none items-center gap-2 rounded-[12px] border border-line bg-paper px-4 py-2.5 text-[14.5px] font-medium hover:border-green hover:text-green group-open:hidden">
          Show all {rest.length + wall.length} written reviews
          <span aria-hidden>↓</span>
        </summary>
        <div className="gap-3 sm:columns-2 lg:columns-3 lg:gap-4">
          {wall.slice(phoneWall).map((r) => (
            <ReviewCard key={r.name} review={r} className="sm:hidden" />
          ))}
          {rest.map((r) => (
            <ReviewCard key={r.name} review={r} />
          ))}
        </div>
      </details>
    </Section>
  );
}

function ReviewCard({ review: r, className = "" }: { review: Review; className?: string }) {
  return (
    <figure className={`pop card mb-3 break-inside-avoid p-5 lg:mb-4 md:p-6 ${className}`}>
      <span className="inline-block rounded-full bg-green-tint px-2.5 py-1 text-[12px] font-medium text-green">{programs[r.program]}</span>
      <blockquote className="mt-4 grid gap-2.5 text-[15px] leading-relaxed text-ink-2">
        {r.quote.map((p, i) => (
          <p key={i} className={i === 0 ? "font-serif text-[19px] leading-snug tracking-[-0.01em] text-ink" : undefined}>
            {p}
          </p>
        ))}
      </blockquote>
      <figcaption className="mt-5 flex items-center gap-2.5 border-t border-line pt-4">
        <Initial name={r.name} />
        <span className="min-w-0 text-[14px] font-semibold">{r.name}</span>
        {r.rating && <Stars className="ml-auto text-green" small />}
      </figcaption>
    </figure>
  );
}

function Initial({ name, className = "" }: { name: string; className?: string }) {
  return (
    <span
      aria-hidden
      className={`grid size-9 shrink-0 place-items-center rounded-full bg-green-tint font-serif text-[16px] text-green ${className}`}
    >
      {name.charAt(0)}
    </span>
  );
}

function Stars({ className = "", small }: { className?: string; small?: boolean }) {
  return (
    <span role="img" aria-label="5 out of 5 stars" className={`flex gap-0.5 ${className}`}>
      {Array.from({ length: 5 }, (_, i) => (
        <svg key={i} viewBox="0 0 20 20" fill="currentColor" aria-hidden className={small ? "size-3.5" : "size-[18px]"}>
          <path d="M10 1.8l2.5 5.3 5.8.7-4.3 4 1.1 5.8L10 14.8l-5.1 2.8 1.1-5.8-4.3-4 5.8-.7z" />
        </svg>
      ))}
    </span>
  );
}
