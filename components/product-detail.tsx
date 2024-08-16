import { productDetails, products } from "@/lib/definitions";
import React from "react";

export default function ProductDetailsPage({
  sizeOfSlug,
  product,
  productDetails,
}: {
  sizeOfSlug: number;
  product: products;
  productDetails: productDetails;
}) {
  console.log(productDetails);
  const { id, description, sizes, howItWorks, whyUpgrade } = productDetails;
  if (sizeOfSlug > 1) return <div>hi free product {product.name}</div>;
  else return <div>Main Product: {product.name}</div>
}
