import React from "react";
import { DirectionAwareHover } from "./direction-aware-hover";
import Link from "next/link";
import { Button } from "./button";

export default function ProductCard({
  image,
  name,
  free,
  link,
  isCategory,
}: {
  image: string;
  name: string;
  free: boolean;
  link?: string;
  isCategory?: boolean
}) {
  return (
    <div className="bg-white rounded-md">
      <Link href={`/products/${link}`}>
        <div className="relative flex items-center justify-center">
          <DirectionAwareHover imageUrl={image}>
          </DirectionAwareHover>
        </div>
      </Link>
      <div className="px-4 space-y-2 pb-4">
        <h4 className="mt-2 capitalize font-bold text-xl text-black">{name}</h4>
        <div className="flex justify-around items-center">
          {free && !isCategory && (
            <Link href={"#"}>
              <Button
                variant={"default"}
                className="bg-primary-green hover:bg-secondary-lightGreen"
              >
                Enquiry
              </Button>
            </Link>
          )}
          <Link href={`/products/${link}`}>
            <Button variant={"outline"} className="hover:bg-neutral-200">
              {free && !isCategory ? "Know More" : "View Products"}
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
