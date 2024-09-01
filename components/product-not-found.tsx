import LottiePlayer from "@/components/LottiePlayer";
import { Button } from "@/components/ui/button";
import Link from "next/link";
const animationData = "/lottie/product-not-found.json";

export default function ProductNotFound() {
  return (
    <div className="h-screen mt-20 md:-mt-32 w-full bg-secondary-white dark:bg-black text-xl text-black dark:text-white flex flex-col md:flex-row justify-center items-center space-x-10 md:space-y-0 px-5 md:px-10">
      <div className="md:w-1/2 flex flex-col justify-between items-start md:pl-5">
        <h2 className="text-7xl text-neutral-500 mb-4 font-heading">This Product doesn't exist</h2>
        <p className="text-2xl text-center text-neutral-800 dark:text-white mb-10 md:mb-20 font-body">Let&apos;s go back!</p>
        <Link href="/"><Button variant={"ghost"} className="bg-neutral-800 dark:bg-white text-white dark:text-neutral-80 font-body">Return Home</Button></Link>
      </div>
      <div className="md:w-1/2 h-full">
        <LottiePlayer src={animationData} />
      </div>
    </div>
  );
}
