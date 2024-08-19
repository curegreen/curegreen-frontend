import React from "react";
import ProductsArchive from "@/components/products-archive";
import { Products } from "@/data/products";
import Breadcrumbs from "@/components/dynamic-breadcrumbs";
import { products } from "@/lib/definitions";
import ProductDetailsPage from "@/components/product-detail";
import GenericForm from "@/components/generic-form";

import DummyPic from "../../../public/images/dummyPic.jpeg";
import { constantFormFields } from "@/data/formItems";

export default function Page({ params }: { params: { slug: string[] } }) {
  const { slug } = params || {};
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

    if (product) {
      if (product.serviceType) return product;
      else if (
        remainingSlugs.length &&
        product.isCategory &&
        product.category
      ) {
        return findProduct(remainingSlugs, product.category);
      }
    } else return undefined;

    return product;
  };

  if (slug?.length) {
    // Find the product based on the slug
    const product = findProduct(slug, Products);

    if (product) {
      if (product.isCategory && product.category && !product.serviceType) {
        // If the product is a category, render the ProductsArchive component
        content = <ProductsArchive items={product.category} free />;
      } else {
        // If the product is a single product, render the ProductDetailsPage component
        content = (
          <ProductDetailsPage sizeOfSlug={slug.length} product={product} />
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
      <div className="pt-40 pb-20 bg-secondary-white">
        <div className="mb-6 px-5 md:px-16">
          <Breadcrumbs currentPath={currentPath} />
        </div>
        {content}
      </div>
      <GenericForm
        formFields={JSON.stringify(constantFormFields)}
        color="#0B0B0B"
        bgColor="#F5F5F5"
        formTitle="Contact Us"
        imageOverlayOpacity={0.28}
        imageOverlayColor="#2E3191"
        buttonTextColor="white"
        buttonBgColor="#2E3191"
        image={DummyPic}
      />
    </>
  );
}
