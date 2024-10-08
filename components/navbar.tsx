"use client";
import React, { Fragment, useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn, scrollToSection } from "@/lib/utils";
import { Button } from "./ui/button";
import {
  FaArrowRightLong,
  FaChevronDown,
  FaPhoneVolume,
} from "react-icons/fa6";
import { Products } from "@/data/products";
import { products } from "@/lib/definitions";
import Image from "next/image";
import { GoMention } from "react-icons/go";
import Link from "next/link";
import NavBurgerBtn from "./ui/burger-btn";
import Sidebar from "./sidebar";
import { useRouter } from "next/navigation";

const headerLogo = "/images/logos/headerLogo.png";
// const mobHeaderLogo = "/images/logos/CureGreen_No Bg LogoMark.png";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = (open: boolean) => setIsOpen(open);
  return (
    <div>
      {/* Mobile Nav */}
      <div className="relative w-full md:hidden">
        <div className="bg-white fixed top-0 inset-x-0 z-50 h-auto rounded">
          <div className="relative w-full flex flex-col items-center justify-center shadow-md">
            {/* blue bar */}
            <div className="w-full flex justify-center md:justify-between py-1 mt-0 md:px-16 items-center bg-primary-navy text-white">
              <div className="flex justify-center items-center space-x-8 text-sm font-heading">
                {Products.slice(0, 3).map((product, index) => (
                  <Link
                    key={index}
                    href={`/products/${product.link}`}
                    className="hover:translate-y-1 duration-500 ease-in-out transition-transform hover:text-secondary-lightGreen"
                  >
                    {product.name.length > 12
                      ? `${product.name.slice(0, 12)}.`
                      : product.name}
                  </Link>
                ))}
              </div>
            </div>
            {/* green bar */}
            <div className="w-full flex justify-center md:justify-between py-1 mt-0 md:px-16 items-center bg-primary-green text-white">
              <div className="md:flex justify-center items-center gap-3 hidden">
                <p>Contact for knowing more details</p>
                <span>
                  <FaArrowRightLong />
                </span>
              </div>
              <div className="flex justify-center items-center flex-wrap space-x-4 text-sm">
                <div className="flex justify-center items-center gap-2">
                  <span>
                    <FaPhoneVolume />
                  </span>
                  <div className="flex justify-center items-center gap-1">
                    <Link href={"tel:0426722199"}>0426722199</Link>
                    {" / "}
                    <Link href={"tel:0475237850"}>0475237850</Link>
                  </div>
                </div>
                <Link
                  href={"mailto:infocuregreen@gmail.com"}
                  className="flex justify-center items-center gap-1"
                >
                  <span>
                    <GoMention />
                  </span>
                  <p className="font-body">infocuregreen@gmail.com</p>
                </Link>
              </div>
            </div>

            <div className="flex items-center justify-between w-full py-1">
              <div className="w-2/3 flex justify-start ml-5">
                <HoveredLink href="/">
                  <Image
                    src={headerLogo}
                    alt={headerLogo}
                    height={200}
                    width={200}
                  />
                </HoveredLink>
              </div>
              <div className="w-1/3 flex justify-end relative z-50">
                <NavBurgerBtn toggleDrawer={toggleDrawer} state={isOpen} />
              </div>
              {/* nav sidebar */}
              <Sidebar isOpen={isOpen} toggleDrawer={toggleDrawer} />
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Nav */}
      <div className="hidden relative w-full md:flex items-center justify-center">
        <Navbar />
      </div>
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const router = useRouter();
  const [active, setActive] = useState<string | null>(null);
  return (
    <div className={cn("fixed top-0 inset-x-0 w-full mx-auto z-50", className)}>
      <Menu setActive={setActive}>
        {/* blue bar */}
        <div className="w-full text-xl flex justify-center py-2.5 space-x-2 items-center bg-primary-navy text-white">
          <h6>Claim Your Government Rebate Under VEU Right Now! </h6>
          <Link
            href={"#form"}
            className="hover:translate-y-1 duration-500 ease-in-out transition-transform hover:text-secondary-lightGreen font-extrabold"
          >
            Check Your Eligibility
          </Link>
        </div>
        {/* green bar */}
        <div className="w-full flex justify-center md:justify-between py-2.5 mt-0 md:px-16 items-center bg-primary-green text-white">
          <div className="md:flex justify-center items-center gap-3 hidden">
            <p>Contact for knowing more details</p>
            <span>
              <FaArrowRightLong />
            </span>
          </div>
          <div className="flex justify-center items-center gap-1 md:gap-5">
            <div className="flex justify-center items-center md:gap-3 gap-1 text-xs md:text-base">
              <span>
                <FaPhoneVolume className="hidden sm:block" />
              </span>
              <div className="flex justify-center items-center gap-1">
                <Link href={"tel:0426722199"}>0426722199</Link>
                {"/"}
                <Link href={"tel:0475237850"}>0475237850</Link>
              </div>
            </div>
            <Link
              href={"mailto:infocuregreen@gmail.com"}
              className="flex justify-center items-center gap-1"
            >
              <span>
                <GoMention className="hidden sm:block" />
              </span>
              <p className="text-xs md:text-base">infocuregreen@gmail.com</p>
            </Link>
          </div>
        </div>
        <div className="w-full px-16 py-2 flex justify-between items-center">
          <HoveredLink href="/">
            <Image src={headerLogo} alt={headerLogo} width={250} height={20} />
          </HoveredLink>
          <div className="flex items-center justify-center space-x-8 lg:space-x-16">
            <HoveredLink
              href="/#about"
              scroll={false}
              onClick={() => scrollToSection("about")}
            >
              About Us
            </HoveredLink>
            
            <MenuItem
              setActive={setActive}
              active={active}
              item="Products"
              icon={<FaChevronDown />}
              onClick={() => router.push('/products')}
            >
              <div className="text-sm grid grid-cols-1 gap-4 p-4">
                {Products.map(({ id, name, shortDesc, image, link }) => (
                  <Fragment key={id}>
                    <ProductItem
                      title={name}
                      href={`/products${link}`}
                      src={image}
                      description={shortDesc || ""}
                    />
                  </Fragment>
                ))}
              </div>
            </MenuItem>

            <HoveredLink href="/contact">
              Contact Us
            </HoveredLink>
            <HoveredLink href="#form">
              <Button className="bg-primary-blue hover:bg-secondary-darkBlue">
                Get a Quote
              </Button>
            </HoveredLink>
          </div>
        </div>
      </Menu>
    </div>
  );
}
