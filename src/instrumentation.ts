import type { Instrumentation } from "next";
import { sentryDsn, sentryOptions } from "@/lib/sentry";

export async function register() {
  if (!sentryDsn) return;
  const Sentry = await import("@sentry/nextjs");
  Sentry.init(sentryOptions);
}

export const onRequestError: Instrumentation.onRequestError = async (...args) => {
  if (!sentryDsn) return;
  const Sentry = await import("@sentry/nextjs");
  Sentry.captureRequestError(...args);
};
