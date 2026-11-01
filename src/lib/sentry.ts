/**
 * Shared Sentry settings. Error monitoring only runs when NEXT_PUBLIC_SENTRY_DSN
 * is set, and never collects personal data (see the privacy policy).
 */
export const sentryDsn = process.env.NEXT_PUBLIC_SENTRY_DSN;

export const sentryOptions = {
  dsn: sentryDsn,
  environment: process.env.NEXT_PUBLIC_VERCEL_ENV ?? process.env.NODE_ENV,
  // Errors only; Vercel Speed Insights already covers performance.
  tracesSampleRate: 0,
  dataCollection: {
    userInfo: false,
    cookies: false,
    httpHeaders: false,
    httpBodies: [],
    urlQueryParams: false,
  },
};

/** Sends an error caught by an error boundary to Sentry, when it is configured. */
export function reportError(error: unknown) {
  console.error(error);
  if (!sentryDsn) return;
  import("@sentry/nextjs").then((Sentry) => Sentry.captureException(error));
}
