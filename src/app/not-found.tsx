import { ButtonLink } from "@/components/ui/button";
import { Rosette } from "@/components/ui/rosette";

export default function NotFound() {
  return (
    <div className="wrap grid min-h-[60svh] place-items-center py-24 text-center">
      <div>
        <Rosette className="mx-auto mb-10 size-24 text-green" />
        <h1 className="display text-[44px] md:text-[56px]">This page could not be found</h1>
        <p className="mx-auto mt-4 max-w-[30em] text-ink-2">
          The page may have moved. Try the home page, or get in touch and we will help you find what you need.
        </p>
        <div className="mt-8 flex justify-center gap-2.5">
          <ButtonLink href="/">Go home</ButtonLink>
          <ButtonLink href="/contact" variant="secondary">
            Contact us
          </ButtonLink>
        </div>
      </div>
    </div>
  );
}
