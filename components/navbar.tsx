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

const headerLogo = "/images/logos/headerLogo.png";

export function Header() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar items={Products.slice(0, 2)} />
    </div>
  );
}

function Navbar({
  items,
  className,
}: {
  items: products[];
  className?: string;
}) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div className={cn("fixed top-0 inset-x-0 w-full mx-auto z-50", className)}>
      <Menu setActive={setActive}>
        <div className="w-full flex justify-center md:justify-between py-2 mt-0 md:px-16 items-center bg-primary-green text-white">
          <div className="md:flex justify-center items-center gap-3 hidden">
            <p>Contact for knowing more details</p>
            <span>
              <FaArrowRightLong />
            </span>
          </div>
          <div className="flex justify-center items-center gap-5">
            <div className="flex justify-center items-center gap-3">
              <span>
                <FaPhoneVolume />
              </span>
              <div className="flex justify-center items-center">
                <Link href={"tel:0426722199"}>0426722199</Link>
                {"/"}
                <Link href={"tel:0475237850"}>0475237850</Link>
              </div>
            </div>
            <Link
              href={"mailto:infogreen@gmail.com"}
              className="flex justify-center items-center gap-1"
            >
              <span>
                <GoMention />
              </span>
              <p>infogreen@gmail.com</p>
            </Link>
          </div>
        </div>
        <div className="w-full px-16 py-2 flex justify-between items-center">
          <HoveredLink href="/">
            <Image src={headerLogo} alt={headerLogo} width={250} height={20} />
          </HoveredLink>
          <div className="flex items-center justify-center space-x-4 md:space-x-16">
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
            >
              <div className="  text-sm grid grid-cols-1 gap-10 p-4">
                {items.map(({ id, name, shortDesc, image, link }) => (
                  <Fragment key={id}>
                    <ProductItem
                      title={name}
                      href={`/products/${link}`}
                      src={image}
                      description={shortDesc || ""}
                    />
                  </Fragment>
                ))}
                <HoveredLink href="/products">
                  <p className="w-full flex justify-center items-center">
                    See more...
                  </p>
                </HoveredLink>
              </div>
            </MenuItem>
            <HoveredLink href="/quote">
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
