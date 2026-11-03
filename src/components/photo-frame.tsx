import Image from "next/image";
import type { SiteImage } from "@/content/site";

type PhotoFrameProps = {
  image: SiteImage;
  sizes: string;
  priority?: boolean;
  className?: string;
};

/**
 * Responsive image that fills its positioned parent. Temporary stock images
 * carry a visible "Placeholder image" label so they are never presented as
 * Freshroots' own farms, people or facilities.
 */
export function PhotoFrame({ image, sizes, priority, className }: PhotoFrameProps) {
  return (
    <div className={["photo-frame", className].filter(Boolean).join(" ")}>
      <Image
        src={image.src}
        alt={image.alt}
        fill
        sizes={sizes}
        priority={priority}
        className="photo-frame__image"
      />
      {image.placeholder ? (
        <span className="placeholder-tag" aria-hidden="true">
          Placeholder image
        </span>
      ) : null}
    </div>
  );
}
