"use client";
import React, { Fragment, useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { FaChevronDown } from "react-icons/fa6";
import { Products } from "@/data/products";
import { products } from "@/lib/definitions";
import Image from "next/image";

const headerLogo = '/images/logos/headerLogo.png'

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
        <HoveredLink href="/">
          <Image src={headerLogo} alt={headerLogo} width={250} height={20} />
        </HoveredLink>
        <div className="flex items-center justify-center space-x-4 md:space-x-16">
          <HoveredLink href="/about">About Us</HoveredLink>
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
            <Button className="bg-blue-700 hover:bg-blue-900">
              Get a Quote
            </Button>
          </HoveredLink>
        </div>
      </Menu>
    </div>
  );
}
