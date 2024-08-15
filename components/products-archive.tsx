import React from "react";
import { products } from "@/lib/definitions";
import { DirectionAwareHover } from "./ui/direction-aware-hover";
import Link from "next/link";
import { Button } from "./ui/button";

export default function ProductsArchive({
  items,
  free = false,
}: {
  items: products[];
  free?: boolean;
}) {
  return (
    <>
      <div className="min-h-screen flex flex-col items-start w-full px-5 sm:px-10">
        <div className="flex flex-col items-start text-black dark:text-white mb-8">
          <h2 className="text-5xl font-bold capitalize mb-4">
            {free ? "free products" : "products"}
          </h2>
          {free && (
            <p>
              There are government approved products for saving energy for free
            </p>
          )}
        </div>

        <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {items.map(({ id, name, rating, image, link, pdfLink }) => (
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
                {rating && <div className="rating">{rating}</div>}
                <div className="flex justify-around items-center">
                  {pdfLink && (
                    <Link
                      href={pdfLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button
                        variant={"default"}
                        className="bg-green-600 text-white hover:bg-green-900"
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
