"use client";
import React from "react";
import ImageGallery, { ReactImageGalleryItem } from "react-image-gallery";

export default function ImageCarousel({
  gallery,
}: {
  gallery: ReactImageGalleryItem[];
}) {
  return (
    <>
      <ImageGallery
        items={gallery}
        lazyLoad
        showNav={false}
        showPlayButton={false}
        showFullscreenButton={false}
        thumbnailPosition="left"
      />
    </>
  );
}
