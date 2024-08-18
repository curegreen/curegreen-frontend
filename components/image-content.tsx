import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";
import { ReactImageGalleryItem } from "react-image-gallery";
import ImageCarousel from "./ui/image-carousel";

export default function ImageContentBlock({
  header,
  content,
  images,
  imagePosition,
  className,
}: {
  header?: string | ReactNode;
  content: string | ReactNode;
  images: ReactImageGalleryItem[] | string;
  imagePosition: "left" | "right";
  className?: string;
}) {
  const imageArray = Array.isArray(images) ? images : [{ original: images }];

  return (
    <div
      className={cn(
        `flex flex-col items-center w-full gap-4 lg:gap-20 ${
          imagePosition === "right" ? "md:flex-row" : "md:flex-row-reverse"
        }`,
        className
      )}
    >
      <div className="w-full md:w-1/2 p-2.5">
        {header && (
          <div className="text-5xl font-bold font-heading mb-4">{header}</div>
        )}
        {typeof content === "string" ? <p>{content}</p> : content}
      </div>
      <div className="w-full md:w-1/2 p-2.5">
        <ImageCarousel gallery={imageArray} />
      </div>
    </div>
  );
}
