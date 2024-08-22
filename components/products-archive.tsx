import React, { Fragment } from "react";
import { products } from "@/lib/definitions";
import { Products } from "@/data/products";
import ProductCard from "./ui/product-card";
import { cn } from "@/lib/utils";

export default function ProductsArchive({
  items = Products,
  free = false,
  header,
  className,
}: {
  items?: products[];
  free?: boolean;
  header?: string;
  className?: string;
}) {
  return (
    <>
      <div
        className={cn(
          "min-h-screen flex flex-col items-start w-full px-5 md:px-16",
          className
        )}
      >
        <div className="flex flex-col items-start text-black dark:text-white mb-8">
          <h2 className="text-5xl font-bold font-heading capitalize mb-4">
            {free ? "free products" : header ? <>{header}</> : "products"}
          </h2>
          {free ? (
            <p className="font-body">
              There are government approved products for saving energy for free
            </p>
          ) : (
            <p className="font-body w-full md:w-1/2">
              CureGreen offers a range of eco-friendly products, including
              advanced solar panels, hot water systems, and air conditioners
              designed to promote sustainability and enhance the quality of life
              for residential setups
            </p>
          )}
        </div>

        <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {items.map(({ id, name, image, link, isCategory }) => (
            <Fragment key={id}>
              <ProductCard name={name} image={image} link={link} free={free} isCategory={isCategory} />
            </Fragment>
          ))}
        </div>
      </div>
    </>
  );
}
