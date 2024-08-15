"use client";
import { cn } from "@/lib/utils";
import dynamic from "next/dynamic";
import React from "react";
const DotLottieReact = dynamic(
  () =>
    import("@lottiefiles/dotlottie-react").then(
      ({ DotLottieReact }) => DotLottieReact
    ),
  { ssr: false }
);
export default function LottiePlayer({
  src,
  className,
}: {
  src: string;
  className?: string;
}) {
  return (
    <>
      <DotLottieReact
        src={src}
        autoplay
        loop
        className={cn("w-full h-full", className)}
      />
    </>
  );
}
