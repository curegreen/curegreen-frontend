import { ReactElement, ReactNode } from "react";

export type products = {
  id: number;
  name: string;
  link: string;
  rating?: number;
  image: string;
  pdfLink?: string,
};

export type sizes = {
  size: string;
  houseSize: string;
  inverter: string;
  system: string;
  image: string;
  pdfLink: string;
};

export type productDetails = {
  id: number;
  description?: string;
  sizes?: sizes[];
  howItWorks?: [img: string, desc: string];
  rebate?: [img: string, desc: string];
  whyUpgrade?: [img: string, desc: ReactNode];
  freeProducts?: products[];
};

export type footerLinks = {
  title: string;
  link: string;
  icon?: ReactElement;
};

export type footerItem = { head: string; items: footerLinks[] };
