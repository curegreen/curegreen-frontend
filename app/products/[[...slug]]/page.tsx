import React from "react";
import ProductsArchive from "@/components/products-archive";
import { Products } from "@/data/products";
import Breadcrumbs from "@/components/dynamic-breadcrumbs";
import ProductDetailsPage from "@/components/product-detail";
import FooterForm from "@/components/footer-form";
import { findProduct } from "@/lib/utils";
import { Metadata, ResolvingMetadata } from "next";
import ProductNotFound from "@/components/product-not-found";
let imageUrl = "/images/dummyPic.jpeg";

type Props = {
  params: { slug: string[] };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { slug } = params || [];
  let title = "Products";
  let description = "Explore our range of products.";

  if (slug?.length) {
    // If there's a slug, find the relevant product or category
    const product = findProduct(slug, Products);

    if (product) {
      if (product.isCategory && product.category && !product.serviceType) {
        // Category page
        title = `${product.name}`;
        description = `Browse items in the ${product.name} category.`;
      } else {
        // Single product page
        title = product.name;
        description = `Learn more about ${product.name}.`;
        imageUrl = product.image || imageUrl;
      }
    } else {
      // If no product or category is found, fallback metadata
      title = "Product not found";
      description = "Sorry, the product you are looking for is not available.";
    }
  } else {
    title = "Products";
    description = "Browse items in the Services & Products category.";
  }

  // Access parent metadata to extend or merge
  const previousImages = (await parent).openGraph?.images || [];

  return {
    title,
    description,
    openGraph: {
      images: [imageUrl, ...previousImages],
    },
  };
}

export default function Page({ params }: { params: { slug: string[] } }) {
  const { slug } = params || {};
  const currentPath = slug?.length
    ? `/products/${slug.join("/")}`
    : "/products";
  let content;

  if (slug?.length) {
    // Find the product based on the slug
    const product = findProduct(slug, Products);

    if (product) {
      if (product.isCategory && product.category && !product.serviceType) {
        // If the product is a category, render the ProductsArchive component
        content = (
          <div className="space-y-5">
            <ProductsArchive items={product.category} free />
            <div id="form" className="pt-20 border-t-2 w-full">
              <FooterForm formTitle="Contact Us" />
            </div>
          </div>
        );
      } else {
        // If the product is a single product, render the ProductDetailsPage component
        content = (
          <ProductDetailsPage sizeOfSlug={slug.length} product={product} />
        );
      }
    } else {
      // If no product is found, render a default or error component
      content = <ProductNotFound />;
    }
  } else {
    // If slug length is 0, render the ProductsArchive component
    content = (
      <div className="space-y-5">
        <ProductsArchive />
        <div id="form" className="pt-20 border-t-2 w-full">
          <FooterForm formTitle="Get Quote" />
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="pt-40 mt-16 bg-secondary-white">
        <div className="mb-6 px-5 md:px-16">
          <Breadcrumbs currentPath={currentPath} />
        </div>
        {content}
      </div>
    </>
  );
}
