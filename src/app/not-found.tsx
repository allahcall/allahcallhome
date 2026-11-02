import { ButtonLink } from "@/components/ui/button";
import { PageTransition } from "@/components/ui/page-transition";
import { Rosette } from "@/components/ui/rosette";

export default function NotFound() {
  return (
    <PageTransition>
      <div className="wrap pt-3 md:pt-6">
        <div className="card grid min-h-[60svh] place-items-center p-6 py-16 text-center">
          <div>
            <Rosette className="mx-auto mb-8 size-24 text-green" />
            <h1 className="display text-[38px] md:text-[56px]">This page could not be found</h1>
            <p className="mx-auto mt-3 max-w-[30em] text-ink-2">
              The page may have moved. Try the home page, or get in touch and we will help you find what you need.
            </p>
            <div className="mt-7 grid grid-cols-2 gap-2.5 sm:inline-flex">
              <ButtonLink href="/">Go home</ButtonLink>
              <ButtonLink href="/contact" variant="secondary">
                Contact us
              </ButtonLink>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
