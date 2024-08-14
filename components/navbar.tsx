"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { FaChevronDown } from "react-icons/fa6";

export function Header() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar />
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div className={cn("fixed top-0 inset-x-0 w-full mx-auto z-50", className)}>
      <Menu setActive={setActive}>
        <HoveredLink href="/">Logo</HoveredLink>
        <div className="flex items-center justify-center space-x-4 md:space-x-16">
          <HoveredLink href="/about">About Us</HoveredLink>
          <MenuItem setActive={setActive} active={active} item="Products" icon={<FaChevronDown />}>
            <div className="  text-sm grid grid-cols-1 gap-10 p-4">
              <ProductItem
                title="Algochurn"
                href="https://algochurn.com"
                src="https://assets.aceternity.com/demos/algochurn.webp"
                description="Prepare for tech interviews like never before."
              />
              <ProductItem
                title="Tailwind Master Kit"
                href="https://tailwindmasterkit.com"
                src="https://assets.aceternity.com/demos/tailwindmasterkit.webp"
                description="Production ready Tailwind css components for your next project"
              />
              <HoveredLink href="/products"><p className="w-full flex justify-center items-center">See more...</p></HoveredLink>
            </div>
          </MenuItem>
          <HoveredLink href="/resources">Resources</HoveredLink>
          <HoveredLink href="/quote">
            <Button className="bg-blue-700 hover:bg-blue-900">Get a Quote</Button>
          </HoveredLink>
        </div>
      </Menu>
    </div>
  );
}
