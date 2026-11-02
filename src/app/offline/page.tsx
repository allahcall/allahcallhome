import type { Metadata } from "next";
import { ButtonLink } from "@/components/ui/button";
import { Rosette } from "@/components/ui/rosette";
import { site } from "@/lib/site";

// Served by the service worker (public/sw.js) when a page isn't saved for offline use.
export const metadata: Metadata = { title: "You're offline", robots: { index: false } };

export default function Offline() {
  return (
    <div className="wrap pt-3 md:pt-6">
      <div className="card grid min-h-[60svh] place-items-center p-6 py-16 text-center">
        <div>
          <Rosette className="mx-auto mb-8 size-24 text-green" />
          <h1 className="display text-[38px] md:text-[56px]">You&apos;re offline</h1>
          <p className="mx-auto mt-3 max-w-[30em] text-ink-2">
            This page isn&apos;t saved on your device yet. Pages you have opened before still work, and everything else
            will be back once you reconnect.
          </p>
          <div className="mt-7 grid grid-cols-2 gap-2.5 sm:inline-flex">
            <ButtonLink href="/">Go home</ButtonLink>
            <ButtonLink href={site.phone.href} variant="secondary">
              Call us
            </ButtonLink>
          </div>
        </div>
      </div>
    </div>
  );
}
