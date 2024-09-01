import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { products } from "./definitions";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function scrollToSection(sectionId: string) {
  const element = document.getElementById(sectionId);
  if (element) {
    const offset = 160; // Adjust this value as needed
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.scrollY - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  }
}

export const findProduct = (
  slugArray: string[],
  productsArray: products[]
): products | undefined => {
  if (!slugArray.length) return undefined;
  const [currentSlug, ...remainingSlugs] = slugArray;
  const product = productsArray.find((prod) => prod.slug === currentSlug);

  if (product) {
    if (product.serviceType) return product;
    else if (remainingSlugs.length && product.isCategory && product.category) {
      return findProduct(remainingSlugs, product.category);
    }
  } else return undefined;

  return product;
};
