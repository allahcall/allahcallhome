import Image from "next/image";
import type { Img } from "@/content/types";
import { imageSrc } from "@/lib/image";

/** A cover-cropped image that fills a box sized by its parent. */
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
        priority={priority}
        className="object-cover"
        style={{ objectPosition: position }}
      />
    </div>
  );
}
