import React, { Fragment } from "react";
import { products } from "@/lib/definitions";
import { Products } from "@/data/products";
import ProductCard from "./ui/product-card";

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
            <Fragment key={id}>
              <ProductCard name={name} image={image} link={link} free={free} />
            </Fragment>
          ))}
        </div>
      </div>
    </>
  );
}
