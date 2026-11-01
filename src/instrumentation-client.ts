import { sentryDsn, sentryOptions } from "@/lib/sentry";

// Browser error monitoring, loaded after start-up so the SDK never delays the page.
if (sentryDsn) import("@sentry/nextjs").then((Sentry) => Sentry.init(sentryOptions));
