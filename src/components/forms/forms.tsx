"use client";

import Link from "next/link";
import { useEffect, useRef, useState, type FormEvent, type ReactNode } from "react";
import { site } from "@/lib/site";

type Status = "idle" | "sending" | "sent" | "error";

const field =
  "mt-1.5 block w-full rounded-[14px] border border-line bg-canvas px-4 text-[16px] text-ink transition-colors placeholder:text-muted/70 hover:border-ink-2/30 focus:border-green focus:bg-paper focus:outline-none";

function Field({ label, children, hint }: { label: string; children: ReactNode; hint?: string }) {
  return (
    <label className="block">
      <span className="text-[14px] font-semibold">{label}</span>
      {hint && <span className="ml-2 text-[13px] text-muted">{hint}</span>}
      {children}
    </label>
  );
}

function useFormspree(subject: string) {
  const [status, setStatus] = useState<Status>("idle");
  const shownAt = useRef(0);
  useEffect(() => {
    shownAt.current = Date.now();
  }, [status]);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    // Honeypot: real people never fill this hidden field.
    if (data.get("_gotcha")) return;
    // Bots submit the instant the page loads; people take longer than two seconds.
    if (Date.now() - shownAt.current < 2000) return;
    if (!data.get("_subject")) data.set("_subject", subject);
    setStatus("sending");
    try {
      const res = await fetch(`https://formspree.io/f/${site.formspreeId}`, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (!res.ok) throw new Error(String(res.status));
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  return { status, onSubmit, reset: () => setStatus("idle") };
}

function Sent({
  title,
  body = "JazakAllahu khayran. A member of our team will reply by email, usually within a few days.",
  again = "Send another message",
  onReset,
}: {
  title: string;
  body?: string;
  again?: string;
  onReset: () => void;
}) {
  return (
    <div role="status" className="sent rounded-[16px] bg-green-tint p-6">
      <svg
        viewBox="0 0 24 24"
        aria-hidden
        className="sent-tick mb-3 size-9 text-green"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10.5" strokeWidth="1.5" opacity="0.35" />
        <path d="m7.5 12.5 3 3 6-6.5" />
      </svg>
      <p className="font-serif text-[26px] leading-tight tracking-[-0.02em] text-green">{title}</p>
      <p className="mt-3 max-w-[32em] text-ink-2">{body}</p>
      <button type="button" onClick={onReset} className="mt-6 text-[14.5px] font-medium underline underline-offset-4">
        {again}
      </button>
    </div>
  );
}

function Submit({ status, children }: { status: Status; children: ReactNode }) {
  return (
    <div className="flex flex-wrap items-center gap-4 pt-2">
      <button
        type="submit"
        disabled={status === "sending"}
        className="inline-flex h-12 items-center justify-center rounded-[14px] bg-brand px-6 text-[15px] font-semibold text-white transition-[background-color,scale] hover:bg-green-ink active:scale-[0.97] disabled:opacity-60 motion-reduce:active:scale-100 max-sm:w-full"
      >
        {status === "sending" ? "Sending…" : children}
      </button>
      <p className="w-full text-[13px] text-muted">
        We only use your details to reply. See our{" "}
        <Link href="/privacy" className="underline underline-offset-2 hover:text-green">
          privacy policy
        </Link>
        .
      </p>
      {status === "error" && (
        <p role="alert" className="text-[14px] text-[#9b2c2c] dark:text-[#f19a9a]">
          Something went wrong. Please try again, or email us at{" "}
          <a href={site.email.href} className="underline">
            {site.email.display}
          </a>
          .
        </p>
      )}
    </div>
  );
}

const honeypot = (
  <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
);

const topics = [
  "A question about Islam",
  "Accepting Islam",
  "Support as a new Muslim",
  "Courses",
  "Companionship program",
  "Events",
  "Publishing my work",
  "Sharing my story",
  "Something else",
];

export function ContactForm() {
  const { status, onSubmit, reset } = useFormspree("New message from allahcall.com");
  if (status === "sent") return <Sent title="Thank you, your message has been sent." onReset={reset} />;
  return (
    <form onSubmit={onSubmit} className="space-y-6">
      {honeypot}
      <div className="grid gap-6 sm:grid-cols-2">
        <Field label="Full name">
          <input name="name" required autoComplete="name" className={`${field} h-12`} />
        </Field>
        <Field label="Email">
          <input name="email" type="email" required autoComplete="email" className={`${field} h-12`} />
        </Field>
      </div>
      <Field label="What is it about?">
        <select name="topic" defaultValue={topics[0]} className={`${field} h-12`}>
          {topics.map((t) => (
            <option key={t}>{t}</option>
          ))}
        </select>
      </Field>
      <Field label="Message">
        <textarea name="message" required rows={6} className={`${field} py-3`} />
      </Field>
      <Submit status={status}>Send message</Submit>
    </form>
  );
}

export function UpdatesForm() {
  const { status, onSubmit, reset } = useFormspree("Event updates sign-up from allahcall.com");
  if (status === "sent")
    return (
      <Sent
        title="You’re on the list."
        body="JazakAllahu khayran. We will email you about upcoming events and activities."
        again="Add another email"
        onReset={reset}
      />
    );
  return (
    <form onSubmit={onSubmit} className="space-y-6">
      {honeypot}
      <input type="hidden" name="topic" value="Event updates" />
      <div className="grid gap-6 sm:grid-cols-2">
        <Field label="Name" hint="Optional">
          <input name="name" autoComplete="name" className={`${field} h-12`} />
        </Field>
        <Field label="Email">
          <input name="email" type="email" required autoComplete="email" className={`${field} h-12`} />
        </Field>
      </div>
      <Submit status={status}>Subscribe</Submit>
    </form>
  );
}

const roles = ["Dawah Team Member", "Event Coordinator", "Content Creator", "Educational Assistant"];

export function VolunteerForm() {
  const { status, onSubmit, reset } = useFormspree("New volunteer application");
  if (status === "sent") return <Sent title="Thank you for applying to volunteer." onReset={reset} />;
  return (
    <form onSubmit={onSubmit} className="space-y-6">
      {honeypot}
      <div className="grid gap-6 sm:grid-cols-2">
        <Field label="Full name">
          <input name="name" required autoComplete="name" className={`${field} h-12`} />
        </Field>
        <Field label="Email">
          <input name="email" type="email" required autoComplete="email" className={`${field} h-12`} />
        </Field>
        <Field label="Phone number" hint="Optional">
          <input name="phone" type="tel" autoComplete="tel" className={`${field} h-12`} />
        </Field>
        <Field label="Preferred role">
          <select name="role" required defaultValue="" className={`${field} h-12`}>
            <option value="" disabled>
              Select a role
            </option>
            {roles.map((r) => (
              <option key={r}>{r}</option>
            ))}
          </select>
        </Field>
      </div>
      <Field label="Why do you want to volunteer with us?">
        <textarea name="message" required rows={5} className={`${field} py-3`} />
      </Field>
      <Submit status={status}>Submit application</Submit>
    </form>
  );
}
