import React from "react";
import { products } from "@/lib/definitions";
import { DirectionAwareHover } from "./ui/direction-aware-hover";
import Link from "next/link";
import { Button } from "./ui/button";
import { Products } from "@/data/products";

export default function ProductsArchive({
  items = Products,
  free = false,
}: {
  items?: products[];
  free?: boolean;
}) {
  return (
    <>
      <div className="min-h-screen flex flex-col items-start w-full px-5 sm:px-10">
        <div className="flex flex-col items-start text-black dark:text-white mb-8">
          <h2 className="text-5xl font-bold capitalize mb-4">
            {free ? "free products" : "products"}
          </h2>
          {free ? (
            <p>
              There are government approved products for saving energy for free
            </p>
          ) : (
            <p>
              CureGreen offers a range of eco-friendly products, including
              advanced solar panels, hot water systems, and air purifiers
              designed to promote sustainability and enhance the quality of life
              for residential setups
            </p>
          )}
        </div>

        <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {items.map(({ id, name, image, link }) => (
            <div key={id} className="bg-neutral-100 rounded-md">
              <div className="relative flex items-center justify-center">
                <DirectionAwareHover imageUrl={image}>
                  <p className="font-bold text-xl">Something Faltu</p>
                  <p className="font-normal text-sm">Description of Faltu</p>
                </DirectionAwareHover>
              </div>
              <div className="px-4 space-y-2 pb-4">
                <h4 className="mt-2 capitalize font-bold text-xl text-black">
                  {name}
                </h4>
                <div className="flex justify-around items-center">
                  {free && (
                    <Link href={"#"}>
                      <Button
                        variant={"default"}
                        className="bg-green-500 hover:bg-green-600"
                      >
                        Enquiry
                      </Button>
                    </Link>
                  )}
                  <Link href={`/products/${link}`}>
                    <Button
                      variant={"outline"}
                      className="hover:bg-neutral-200"
                    >
                      {free ? "Know More" : "View Products"}
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
