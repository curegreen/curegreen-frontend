import { footerItem } from "@/lib/definitions";
import { FreeProducts, Products } from "./products";

const url = '/products'

export const footerItems: footerItem[] = [
  {
    head: <h4 className="font-heading text-2xl">Services</h4>,
    items: Products.slice(0,3).map(({name, link}) => ({
      title: name,
      link: `${url}${link}`,
    })),
  },
  {
    head: <h4 className="font-heading text-2xl">Products</h4>,
    items: FreeProducts.map(({name, link}) => ({
      title: name,
      link: `${url}${link}`,
    })),
  },
];
