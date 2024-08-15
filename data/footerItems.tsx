import { footerItem } from "@/lib/definitions";
import { FaPhoneVolume } from "react-icons/fa6";
import { GoMention } from "react-icons/go";
import { ImTarget } from "react-icons/im";

export const footerItems: footerItem[] = [
  {
    head: "Services",
    items: [
      { title: "Residential Solar", link: "https://github.com/Prasundas99" },
      { title: "Hot Water System", link: "https://github.com/Prasundas99" },
      { title: "Split Air Conditioner", link: "https://github.com/Prasundas99" },
    ],
  },
  {
    head: "Products",
    items: [
      { title: "Cooling Vent Covers", link: "https://github.com/Prasundas99" },
      { title: "Shower Heads", link: "https://github.com/Prasundas99" },
      { title: "Door seals", link: "https://github.com/Prasundas99" },
      { title: "In-home Display Service", link: "https://github.com/Prasundas99" },
    ],
  },
  {
    head: "Get In Touch",
    items: [
      { title: "+99 999 99999", link: "https://github.com/Prasundas99", icon: <FaPhoneVolume /> },
      { title: "Lorem ipsum dolor sit amet consectetur. Nisi eu augue integer sagittis a.", link: "https://github.com/Prasundas99", icon: <ImTarget /> },
      { title: "youremailaddress@gmail.com", link: "https://github.com/Prasundas99", icon: <GoMention /> },
    ],
  },
];
