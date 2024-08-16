import { ReactElement, ReactNode } from "react";

export type products = {
  id: number;
  slug: string,
  name: string;
  isCategory: boolean;
  shortDesc?: string,
  link: string;
  rating?: number;
  image: string;
  description?: string;
  sizes?: sizes[];
  howItWorks?: [img: string, desc: string];
  rebate?: [img: string, desc: string];
  whyUpgrade?: [img: string, desc: ReactNode];
  category?: products[];
  gallery?: string[];
  features?: string;
};

export type sizes = {
  size: string;
  houseSize: string;
  inverter: string;
  system: string;
  image: string;
  pdfLink: string;
};

export type footerLinks = {
  title: string;
  link: string;
  icon?: ReactElement;
};

export type footerItem = { head: string; items: footerLinks[] };
