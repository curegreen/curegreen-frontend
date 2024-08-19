import LottiePlayer from "@/components/LottiePlayer";
import React from "react";
const loadingAnimation = "/lottie/loadingLottie.json";
export default function Loading() {
  return (
    <div className="relative z-50 min-h-screen flex justify-center items-center">
      <LottiePlayer src={loadingAnimation} className="max-h-[4rem] max-w-sm" />
    </div>
  );
}
