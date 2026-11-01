import Image from "next/image";
import type { Img } from "@/content/types";
import { imageSrc } from "@/lib/image";

/**
 * A cover-cropped image that fills a box sized by its parent. `priority` marks
 * the page's main image: loaded eagerly at high fetch priority (Next 16
 * deprecates the old `priority` prop in favour of this).
 */
export function Photo({
  image,
  sizes,
  priority = false,
  className = "",
  position = "center",
}: {
  image: Img;
  sizes: string;
  priority?: boolean;
  className?: string;
  position?: string;
}) {
  return (
    <div className={`relative overflow-hidden bg-alt ${className}`}>
      <Image
        src={imageSrc(image.src)}
        alt={image.alt}
        fill
        sizes={sizes}
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : undefined}
        className="object-cover"
        style={{ objectPosition: position }}
      />
    </div>
  );
}
