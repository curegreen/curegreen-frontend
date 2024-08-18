import { products } from "@/lib/definitions";
import React from "react";
import FreeProduct from "./free-product";
import PaidProduct from "./paid-product";

export default function ProductDetailsPage({
  sizeOfSlug,
  product,
}: {
  sizeOfSlug: number;
  product: products;
}) {
  if (sizeOfSlug > 1) return <FreeProduct product={product} />;
  else return <PaidProduct product={product} />
}
