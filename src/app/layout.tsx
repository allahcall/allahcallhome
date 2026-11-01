import type { Metadata, Viewport } from "next";
import { Amiri, Inter, Newsreader } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { MobileNav } from "@/components/layout/mobile-menu";
import { JsonLd, siteLd } from "@/components/seo/json-ld";
import { pageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";
import "./globals.css";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  style: ["normal", "italic"],
  axes: ["opsz"],
});

const amiri = Amiri({ variable: "--font-amiri", subsets: ["arabic"], weight: "400" });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: `${site.name} · ${site.tagline}`, template: `%s · ${site.name}` },
  description: site.description,
  applicationName: site.name,
  category: "religion",
  robots: { index: true, follow: true, googleBot: { "max-image-preview": "large", "max-snippet": -1 } },
  appleWebApp: { title: site.name, statusBarStyle: "default" },
  formatDetection: { telephone: false },
  ...pageMetadata({ description: site.description, path: "/" }),
};

export const viewport: Viewport = { themeColor: "#f3f5f4", viewportFit: "cover" };

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.variable} ${newsreader.variable} ${amiri.variable}`}>
      <body className="flex min-h-svh flex-col pb-[calc(4rem+env(safe-area-inset-bottom))] lg:pb-0">
        <a
          href="#main"
          className="sr-only z-50 bg-ink px-4 py-2 text-sm text-paper focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
        >
          Skip to content
        </a>
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
        <MobileNav />
        <JsonLd data={siteLd()} />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
