import { products } from "@/lib/definitions";
import React from "react";

export default function ProductDetailsPage({
  sizeOfSlug,
  product,
}: {
  sizeOfSlug: number;
  product: products;
}) {
  const { id, name, description, sizes, howItWorks, whyUpgrade } = product;
  if (sizeOfSlug > 1) return <div>hi free product {product.name}</div>;
  else return <div>Main Product: {name}</div>
}
