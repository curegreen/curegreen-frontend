import React from "react";
import { DirectionAwareHover } from "./direction-aware-hover";
import Link from "next/link";
import { Button } from "./button";

export default function ProductCard({image, name, free, link}: {image: string, name: string, free: boolean, link?: string}) {
  return (
    <div className="bg-neutral-100 rounded-md">
      <div className="relative flex items-center justify-center">
        <DirectionAwareHover imageUrl={image}>
          <p className="font-bold text-xl">Something Faltu</p>
          <p className="font-normal text-sm">Description of Faltu</p>
        </DirectionAwareHover>
      </div>
      <div className="px-4 space-y-2 pb-4">
        <h4 className="mt-2 capitalize font-bold text-xl text-black">{name}</h4>
        <div className="flex justify-around items-center">
          {free && (
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
              {free ? "Know More" : "View Products"}
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
