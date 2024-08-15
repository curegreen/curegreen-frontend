import React from "react";
import ProductsArchive from "@/components/products-archive";
import { FreeProducts, Products } from "@/data/products";
import Breadcrumbs from "@/components/dynamic-breadcrumbs";

export default function Page({ params }: { params: { slug: string[] } }) {
  const { slug } = params || {};
  const currentPath = slug?.length
    ? `/products/${slug.join("/")}`
    : "/products";
  let content;
  if (slug?.length == 1)
    content = (
      <ProductsArchive
        items={FreeProducts}
        free
      />
    );
  else content = <ProductsArchive items={Products} />;

  return (
    <>
      <div className="mt-32 mb-20 px-5 sm:px-10">
        <div className="mb-6">
          <Breadcrumbs currentPath={currentPath} />
        </div>
        {content}
      </div>
    </>
  );
}
