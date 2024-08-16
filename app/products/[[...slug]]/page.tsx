import React from "react";
import ProductsArchive from "@/components/products-archive";
import { Products } from "@/data/products";
import Breadcrumbs from "@/components/dynamic-breadcrumbs";
import { products } from "@/lib/definitions";
import ProductDetailsPage from "@/components/product-detail";

export default function Page({ params }: { params: { slug: string[] } }) {
  const { slug } = params || {};
  console.log(slug);
  const currentPath = slug?.length
    ? `/products/${slug.join("/")}`
    : "/products";
  let content;

  const findProduct = (
    slugArray: string[],
    productsArray: products[]
  ): products | undefined => {
    if (!slugArray.length) return undefined;
    const [currentSlug, ...remainingSlugs] = slugArray;
    const product = productsArray.find((prod) => prod.slug === currentSlug);

    if (
      product &&
      remainingSlugs.length &&
      product.isCategory &&
      product.category
    ) {
      return findProduct(remainingSlugs, product.category);
    }

    return product;
  };

  if (slug?.length) {
    // Find the product based on the slug
    const product = findProduct(slug, Products);

    if (product) {
      if (product.isCategory && product.category) {
        // If the product is a category, render the ProductsArchive component
        content = <ProductsArchive items={product.category} free />;
      } else {
        // If the product is a single product, render the ProductDetailsPage component
        content = (
          <ProductDetailsPage
            sizeOfSlug={slug.length}
            product={product}
          />
        );
      }
    } else {
      // If no product is found, render a default or error component
      content = <div>Product not found</div>;
    }
  } else {
    // If slug length is 0, render the ProductsArchive component
    content = <ProductsArchive />;
  }

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
