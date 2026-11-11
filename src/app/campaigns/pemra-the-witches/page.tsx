import type { Metadata } from "next";
import { buttonClass } from "@/components/ui/button";
import { Label, Section, SectionHead, Ticks } from "@/components/ui/section";
import { PageTransition } from "@/components/ui/page-transition";
import { pageMetadata } from "@/lib/seo";
import { CopyButton } from "./copy-button";
import { gmailHref, letter, mailtoHref } from "./letter";

export const metadata: Metadata = pageMetadata({
  title: "Ask PEMRA to review The Witches",
  description:
    "Send PEMRA a formal, respectful complaint asking it to review the music video The Witches, in one click from your own email.",
  path: "/campaigns/pemra-the-witches",
});

export default function PemraCampaign() {
  return (
    <PageTransition>
      <header className="wrap pt-3 md:pt-6">
        <div className="card p-6 md:p-12">
          <Label>Campaign</Label>
          <h1 className="display mt-2 text-[38px] md:text-[clamp(48px,5.6vw,80px)]">Ask PEMRA to review The Witches</h1>
          <p className="mt-4 max-w-[38em] text-[16px] text-ink-2 md:text-[18px]">
            A music video called The Witches, released on 31 October, has worried many parents and viewers. One
            email from you asks Pakistan&apos;s media regulator to review it and say whether it is suitable for
            young audiences.
          </p>
          <div className="mt-7 grid gap-2.5 sm:inline-flex">
            <a href={mailtoHref} className={buttonClass("primary")}>
              Send the email
            </a>
            <a href={gmailHref} target="_blank" rel="noopener noreferrer" className={buttonClass("secondary")}>
              Open in Gmail
            </a>
          </div>
          <p className="mt-3 text-[13.5px] text-ink-2">
            Opens your own mail app with the letter written. Nothing is sent until you press send there.
          </p>
        </div>
      </header>

      <Section>
        <div className="grid gap-8 md:grid-cols-12 md:gap-10">
          <div className="md:col-span-5">
            <SectionHead
              label="How it works"
              title="Three steps, under a minute"
              lede="The email goes from your address, so PEMRA counts it as your complaint and replies to you."
            />
            <ol className="grid gap-3 text-[14.5px] text-ink-2">
              {[
                "Press “Send the email”. Your mail app opens with the address, subject and letter filled in.",
                "Add your full name and city at the end. Signed complaints are taken more seriously.",
                "Press send. PEMRA should reply with a complaint reference number.",
              ].map((step, i) => (
                <li key={step} className="flex gap-3">
                  <span className="grid size-6 shrink-0 place-items-center rounded-[8px] bg-green-tint text-[13px] font-semibold text-green">
                    {i + 1}
                  </span>
                  {step}
                </li>
              ))}
            </ol>
          </div>

          <div className="md:col-span-7">
            <SectionHead label="About the letter" title="What it asks for" />
            <Ticks
              items={[
                "A formal review of the video in its full context, against the standards PEMRA applies.",
                "An assessment of whether it is suitable for children, and whether age limits or content warnings are needed.",
                "A judgement on whether it simply depicts supernatural fiction or encourages admiration for occult practices.",
                "Appropriate action, such as limits on broadcasting the video and its promotional clips, if violations are found.",
                "Advice on whether the complaint should also go to another authority or to YouTube, since the video is hosted there.",
              ]}
            />
            <p className="mt-5 text-[14.5px] text-ink-2">
              The letter is written in the first person and states concerns as the sender&apos;s own view. It asks
              for a review rather than demanding a ban, which gives it the best chance of a considered answer. Feel
              free to add a line in your own words about why it matters to you.
            </p>
          </div>
        </div>
      </Section>

      <Section>
        <div className="card p-5 md:p-10">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <Label>The full text</Label>
              <h2 className="mt-1 text-[22px] leading-tight font-semibold tracking-[-0.02em] md:text-[30px]">
                Read it before you send
              </h2>
            </div>
            <CopyButton text={`To: ${letter.to}\nSubject: ${letter.subject}\n\n${letter.body}`} />
          </div>
          <dl className="mt-6 grid gap-1 border-b border-line pb-4 text-[14.5px]">
            <div className="flex gap-2">
              <dt className="w-16 shrink-0 text-ink-2">To</dt>
              <dd className="min-w-0 break-words font-medium">{letter.to}</dd>
            </div>
            <div className="flex gap-2">
              <dt className="w-16 shrink-0 text-ink-2">Subject</dt>
              <dd className="min-w-0 font-medium">{letter.subject}</dd>
            </div>
          </dl>
          <div className="mt-4 max-w-[42em] text-[15px] leading-relaxed whitespace-pre-line break-words">
            {letter.body}
          </div>
          <p className="mt-6 text-[13.5px] text-ink-2">
            No mail app on this device? Copy the letter and paste it into any email to {letter.to}.
          </p>
        </div>
      </Section>

      <Section>
        <SectionHead
          label="Good to know"
          title="About PEMRA"
          lede="The Pakistan Electronic Media Regulatory Authority licenses and regulates TV and radio in Pakistan, and takes complaints from the public about what they broadcast."
        />
        <Ticks
          items={[
            "Keep your message calm and respectful. Reviewers act on clear, specific concerns, not anger.",
            "Send it once, from your own address. Repeat emails from the same person can be treated as spam.",
            "Share this page with family and friends who share the concern.",
          ]}
        />
      </Section>
    </PageTransition>
  );
}
