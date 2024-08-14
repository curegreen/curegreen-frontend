import { ReactElement } from "react";
import { FaPhoneVolume } from "react-icons/fa6";
import { GoMention } from "react-icons/go";
import { ImTarget } from "react-icons/im";

type footerLinks = {
  title: string;
  link: string;
  icon?: ReactElement;
};

type footerItem = { head: string; items: footerLinks[] };

export const footerItems: footerItem[] = [
  {
    head: "Services",
    items: [
      { title: "Residential Solar", link: "/" },
      { title: "Hot Water System", link: "/" },
      { title: "Split Air Conditioner", link: "/" },
    ],
  },
  {
    head: "Products",
    items: [
      { title: "Cooling Vent Covers", link: "/" },
      { title: "Shower Heads", link: "/" },
      { title: "Door seals", link: "/" },
      { title: "In-home Display Service", link: "/" },
    ],
  },
  {
    head: "Get In Touch",
    items: [
      { title: "+99 999 99999", link: "/", icon: <FaPhoneVolume /> },
      { title: "Lorem ipsum dolor sit amet consectetur. Nisi eu augue integer sagittis a.", link: "/", icon: <ImTarget /> },
      { title: "youremailaddress@gmail.com", link: "/", icon: <GoMention /> },
    ],
  },
];
