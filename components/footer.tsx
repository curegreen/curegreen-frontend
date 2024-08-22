import { footerItems } from "@/data/footerItems";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaPhoneVolume } from "react-icons/fa6";
import { ImTarget } from "react-icons/im";
import { GoMention } from "react-icons/go";
import { IoInformationCircle } from "react-icons/io5";

const footerLogo = "/images/logos/footerLogo.png";

export default function Footer() {
  return (
    <>
      <footer className="dark:bg-white bg-black text-white dark:text-black flex flex-col w-full items-center justify-center md:max-h-80 overflow-clip">
        <div className="flex flex-col md:flex-row justify-between items-center gap-10 w-full pt-4 md:pt-10">
          {/* Left side Logo */}
          <div className="w-full md:w-1/3 flex justify-center px-5 pt-10 md:pt-0 md:pl-10">
            <Image src={footerLogo} alt={footerLogo} width={500} height={100} />
          </div>
          {/* right side links */}
          <div className="w-full md:w-2/3 flex flex-col md:flex-row justify-start items-start space-y-10 md:space-y-0 md:space-x-10 lg:space-x-20 px-5 md:px-10 mb-10">
            {footerItems.map((footerItem, id) => (
              <div key={id} className="w-2/3">
                <div className="font-bold my-5 text-2xl">{footerItem.head}</div>
                <ul className="space-y-3">
                  {footerItem.items.map(({ title, link, icon }, id) => (
                    <li key={id}>
                      <Link
                        href={link}
                        className="flex justify-start items-start text-sm hover:translate-y-1 duration-500 ease-in-out transition-transform hover:text-secondary-lightGreen"
                      >
                        {icon && <i className="mr-2 mt-1">{icon}</i>}
                        {title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div className="w-full">
              <h4 className="font-heading my-5 text-2xl">Get In Touch</h4>
              <ul className="space-y-3">
                <li className="flex justify-start md:justify-center items-start text-2xl gap-5 w-1/2">
                  <Link
                    href="https://www.facebook.com/profile.php?id=61564071297621"
                    className="hover:translate-y-1 duration-500 ease-in-out transition-transform hover:text-secondary-lightGreen"
                  >
                    <FaFacebook />
                  </Link>
                  <Link
                    href="https://www.instagram.com/curegreen.au?igsh=ZW1tMnAzejVwczUz"
                    className="hover:translate-y-1 duration-500 ease-in-out transition-transform hover:text-secondary-lightGreen"
                  >
                    <FaInstagram />
                  </Link>
                </li>
                <li className="flex justify-start items-start text-sm">
                  <div className="flex justify-center items-center gap-1">
                    <FaPhoneVolume className="mr-1" />
                    <Link
                      href={"tel:0426722199"}
                      className="hover:translate-y-1 duration-500 ease-in-out transition-transform hover:text-secondary-lightGreen"
                    >
                      0426722199
                    </Link>
                    {"/"}
                    <Link
                      href={"tel:0475237850"}
                      className="hover:translate-y-1 duration-500 ease-in-out transition-transform hover:text-secondary-lightGreen"
                    >
                      0475237850
                    </Link>
                  </div>
                </li>
                <li className="flex justify-start items-start text-sm">
                  <div className="flex justify-center items-center gap-2">
                    <ImTarget />
                    <Link
                      href={"https://maps.app.goo.gl/LzshKkAqY6PuLUf98"}
                      className="hover:translate-y-1 duration-500 ease-in-out transition-transform hover:text-secondary-lightGreen"
                    >
                      Point Cook, 3030
                    </Link>
                  </div>
                </li>
                <li className="flex justify-start items-start text-sm">
                  <div className="flex justify-center items-center gap-2">
                    <GoMention />
                    <Link
                      href={"mailto:infocuregreen@gmail.com"}
                      className="hover:translate-y-1 duration-500 ease-in-out transition-transform hover:text-secondary-lightGreen"
                    >
                      infocuregreen@gmail.com
                    </Link>
                  </div>
                </li>
                <li className="flex justify-start items-start text-sm">
                  <div className="flex justify-center items-center gap-2">
                    <IoInformationCircle className="text-xl" />
                    <Link
                      href={"tel:29679858578"}
                      className="hover:translate-y-1 duration-500 ease-in-out transition-transform hover:text-secondary-lightGreen"
                    >
                      Australian Business Number(ABN): 29679858578
                    </Link>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="w-full text-center">
          Copyright © {new Date().getFullYear()} | All Rights Reserved |{" "}
          <Link
            href="/"
            className="hover:translate-y-1 duration-500 ease-in-out transition-transform hover:text-secondary-lightGreen"
          >
            CureGreen.com
          </Link>
        </div>
      </footer>
    </>
  );
}
