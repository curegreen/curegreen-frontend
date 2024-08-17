import { ReactElement, ReactNode } from "react";
import { ReactImageGalleryItem } from "react-image-gallery";

export type products = {
  id: number;
  slug: string;
  name: string;
  isCategory: boolean;
  shortDesc?: string;
  link?: string;
  image: string;
  optionalGallery?: genericGallery[];
  description?: string;
  sizes?: sizes[];
  howItWorks?: { img: ReactImageGalleryItem[]; desc: ReactNode };
  rebate?: { img: ReactImageGalleryItem[]; desc: ReactNode };
  whyUpgrade?: { img: ReactImageGalleryItem[]; desc: ReactNode };
  category?: products[];
  gallery?: ReactImageGalleryItem[];
  features?: string;
};

export type genericGallery = {
  imgUrl: string;
  width: string;
};

export type sizes = {
  size: string;
  houseSize: string;
  inverter?: string;
  system?: string;
  image: string;
};

export type footerLinks = {
  title: string;
  link: string;
  icon?: ReactElement;
};

export type footerItem = { head: string; items: footerLinks[] };
