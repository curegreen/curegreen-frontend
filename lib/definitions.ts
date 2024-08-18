import { z } from "zod";
import { ReactElement, ReactNode } from "react";
import { ReactImageGalleryItem } from "react-image-gallery";
import { SubmitHandler } from "react-hook-form";

export type products = {
  id: number;
  slug: string;
  serviceType: boolean;
  name: string;
  isCategory: boolean;
  shortDesc?: string;
  link?: string;
  image: string;
  optionalGallery?: genericGallery[];
  description?: string;
  sizes?: sizes[];
  howItWorks?: { header: ReactNode;img: ReactImageGalleryItem[]; desc: ReactNode };
  rebate?: { header: ReactNode;img: ReactImageGalleryItem[]; desc: ReactNode };
  stats?: { header: ReactNode;img: ReactImageGalleryItem[]; desc: ReactNode };
  whyUpgrade?: { header: ReactNode;img: ReactImageGalleryItem[]; desc: ReactNode };
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

export type formFieldConfig = {
  name: string;
  label: string;
  type: "text" | "email" | "tel" | "select" | "textarea" | "number";
  placeholder?: string;
  options?: { value: string; label: string }[];
  validation?: z.ZodTypeAny;
  className?: string;
  isReadOnly?: boolean;
  value?: string | number;
};

export type formProps = {
  fields: formFieldConfig[];
  onSubmit: SubmitHandler<Record<string, any>>;
  submitBtnValue: string;
  prefilledValues?: Record<string, string | number>;
}