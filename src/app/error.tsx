"use client";

import { useEffect } from "react";
import { ButtonLink, buttonClass } from "@/components/ui/button";
import { Rosette } from "@/components/ui/rosette";

export default function Error({ error, retry }: { error: unknown; retry: () => void }) {
  useEffect(() => console.error(error), [error]);

  return (
    <div className="wrap pt-3 md:pt-6">
      <div className="card grid min-h-[60svh] place-items-center p-6 py-16 text-center">
        <div>
          <Rosette className="mx-auto mb-8 size-24 text-green" />
          <h1 className="display text-[38px] md:text-[56px]">Something went wrong</h1>
          <p className="mx-auto mt-3 max-w-[30em] text-ink-2">
            Please try again, or get in touch if it keeps happening.
          </p>
          <div className="mt-7 grid grid-cols-2 gap-2.5 sm:inline-flex">
            <button type="button" onClick={() => retry()} className={buttonClass()}>
              Try again
            </button>
            <ButtonLink href="/contact" variant="secondary">
              Contact us
            </ButtonLink>
          </div>
        </div>
      </div>
    </div>
  );
}
