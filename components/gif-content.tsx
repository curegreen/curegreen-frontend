import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

export default function GifContentBlock({
  header,
  content,
  gif,
  gifPosition,
  className,
}: {
  header?: string | ReactNode;
  content: string | ReactNode;
  gif: string;
  gifPosition: "left" | "right";
  className?: string;
}) {
  return (
    <div
      className={cn(
        `flex flex-col items-center w-full gap-4 lg:gap-20 ${
          gifPosition === "right" ? "md:flex-row" : "md:flex-row-reverse"
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
        <img src={gif} alt={gif} />
      </div>
    </div>
  );
}
