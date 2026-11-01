import { ogSize, shareCard } from "@/lib/og";
import { site } from "@/lib/site";

export const alt = `${site.name}: ${site.tagline}`;
export const size = ogSize;
export const contentType = "image/png";

export default function Image() {
  return shareCard({ label: "Learn Islam · Take your Shahada · Find support", title: "Discover the truth of Islam’s beautiful message" });
}
