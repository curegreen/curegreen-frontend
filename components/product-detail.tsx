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
  const { id, slug, name, isCategory, shortDesc, link, image, description, sizes, howItWorks, rebate, whyUpgrade, category, gallery, features } = product;
  if (sizeOfSlug > 1) return <FreeProduct product={product} />;
  else return <PaidProduct />
}
