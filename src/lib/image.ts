/** Resolves a content image to a URL next/image accepts. */
export function imageSrc(src: string, width = 2000): string {
  if (src.startsWith("photo-")) {
    return `https://images.unsplash.com/${src}?auto=format&fit=crop&w=${width}&q=80`;
  }
  return src;
}
