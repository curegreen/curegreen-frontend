"use client";
import React from "react";
import ImageGallery, { ReactImageGalleryItem } from "react-image-gallery";

export default function ImageCarousel({
  gallery,
  lazyLoad = true,
  showNav = true,
  showPlayButton = false,
  showFullscreenButton = false,
  thumbnailPosition = "bottom",
}: {
  gallery: ReactImageGalleryItem[];
  lazyLoad?: boolean;
  showNav?: boolean;
  showPlayButton?: boolean;
  showFullscreenButton?: boolean;
  thumbnailPosition?: "left" | "top" | "right" | "bottom";
}) {
  return (
    <>
      <ImageGallery
        items={gallery}
        lazyLoad={lazyLoad}
        showNav={showNav}
        showPlayButton={showPlayButton}
        showFullscreenButton={showFullscreenButton}
        thumbnailPosition={thumbnailPosition}
      />
    </>
  );
}
