import { footerItems } from "@/data/footerItems";
import React from "react";
import { LinkPreview } from "./ui/link-preview";
import Image from "next/image";

const footerLogo = '/images/logos/footerLogo.png'

export default function Footer() {
  return (
    <>
      <footer className="dark:bg-white bg-black text-white dark:text-black flex flex-col w-full items-center justify-center md:max-h-80 overflow-clip">
        <div className="flex flex-col md:flex-row justify-between items-center gap-10 w-full pt-4 md:pt-10">
          {/* Left side Logo */}
          <div className="w-full md:w-1/3 flex justify-center pt-10 md:pt-0 md:pl-10">
            <Image src={footerLogo} alt={footerLogo} width={500} height={100} />
          </div>
          {/* right side links */}
          <div className="w-full md:w-2/3 flex flex-col md:flex-row justify-start items-start space-y-10 md:space-y-0 md:space-x-10 lg:space-x-20 px-5 md:px-10 mb-10">
            {footerItems.map((footerItem, id) => (
              <div key={id} className={`${id == 2 ? "w-full": "w-2/3"}`}>
                <p className="font-bold my-5 text-2xl">{footerItem.head}</p>
                <ul className="space-y-3">
                  {footerItem.items.map(({ title, link, icon }, id) => (
                    <li key={id}>
                      <LinkPreview
                        url={link}
                        className="flex justify-start items-start text-sm"
                      >
                        {icon && <i className="mr-2 mt-1">{icon}</i>}
                        {title}
                      </LinkPreview>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full text-center">
          Copyright © {new Date().getFullYear()} | All Rights Reserved | <LinkPreview url="https://github.com/Prasundas99">CureGreen.com</LinkPreview>
        </div>
      </footer>
    </>
  );
}
