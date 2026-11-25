import Image from "next/image";
import type { Img } from "@/content/types";
import { imageSrc } from "@/lib/image";

/**
 * An image that fills a box sized by its parent. Use `fit="contain"` for
 * posters whose full text must remain visible. `priority` marks
 * the page's hero, which is the LCP element at every width, so it is preloaded
 * from <head> (Next 16's `preload`, which replaces the deprecated `priority`).
 */
export function Photo({
  image,
  sizes,
  priority = false,
  className = "",
  position = "center",
  fit = "cover",
}: {
  image: Img;
  sizes: string;
  priority?: boolean;
  className?: string;
  position?: string;
  fit?: "cover" | "contain";
}) {
  return (
    <div className={`relative overflow-hidden bg-alt ${className}`}>
      <Image
        src={imageSrc(image.src)}
        alt={image.alt}
        fill
        sizes={sizes}
        preload={priority}
        className={fit === "contain" ? "object-contain" : "object-cover"}
        style={{ objectPosition: position }}
      />
    </div>
  );
}
