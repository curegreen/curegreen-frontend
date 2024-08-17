import React, { ReactNode } from "react";

export default function ImageContentBlock({
  header,
  content,
  images,
  imagePosition,
}: {
  header?: string;
  content: string | ReactNode;
  images: string[] | string;
  imagePosition: "left" | "right";
}) {
  const imageArray = Array.isArray(images) ? images : [images];

  return (
    <div
      className={`flex flex-col items-center md:flex-row w-full ${
        imagePosition === "right" ? "md:flex-row-reverse" : ""
      }`}
    >
      <div className="w-full md:w-1/2 p-2.5">
        {header && <h2 className="text-2xl font-bold mb-4">{header}</h2>}
        {typeof content === "string" ? <p>{content}</p> : content}
      </div>
      <div className="w-full md:w-1/2 p-2.5">
        {imageArray.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`image-${index}`}
            className="w-full h-auto mb-4 last:mb-0"
          />
        ))}
      </div>
    </div>
  );
}
