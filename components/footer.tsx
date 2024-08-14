import { footerItems } from "@/data/footerItems";
import React from "react";
import { LinkPreview } from "./ui/link-preview";

export default function Footer() {
  return (
    <>
      <footer className="dark:bg-white bg-black text-white dark:text-black flex flex-col w-full items-center justify-center max-h-80">
        <div className="flex justify-between items-center gap-10 w-full">
          {/* Left side Logo */}
          <div className="w-1/3">hello world</div>
          {/* right side links */}
          <div className="w-2/3 flex flex-col sm:flex-row justify-start items-start sm:space-x-10 md:space-x-20 px-5 sm:px-10 mb-10">
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
        <p className="w-full text-center">
          Copyright © {new Date().getFullYear()} | All Rights Reserved | <LinkPreview url="https://github.com/Prasundas99">CureGreen.com</LinkPreview>
        </p>
      </footer>
    </>
  );
}
