import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "./ui/button";
import { FreeProducts, Products } from "@/data/products";
import { FaFacebook, FaInstagram } from "react-icons/fa6";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { ChevronDownIcon } from "@radix-ui/react-icons";

interface SidebarProps {
  isOpen: boolean;
  toggleDrawer: (state: boolean) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggleDrawer }) => {
  const sidebarVariants = {
    open: { x: "0%" },
    closed: { x: "100%" },
  };

  const listVariants = {
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.1,
        staggerDirection: 1,
        when: "beforeChildren",
        ease: "easeInOut",
      },
    },
    hidden: { opacity: 0 },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, transition: { duration: 0.5 } },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.div
      className="fixed top-0 right-0 w-4/5 h-full bg-primary-green shadow-lg z-40"
      initial="closed"
      animate={isOpen ? "open" : "closed"}
      variants={sidebarVariants}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <motion.nav
        className="flex flex-col h-full p-6 pt-28 space-y-1 font-heading"
        initial="hidden"
        animate={isOpen ? "visible" : "hidden"}
        variants={listVariants}
      >
        <motion.div
          variants={itemVariants}
          className="flex justify-start items-center rounded"
        >
          <Link
            href="/#about"
            className="w-full p-2 text-lg pl-2 text-white"
            onClick={() => toggleDrawer(false)}
          >
            About Us
          </Link>
        </motion.div>
        {Products.slice(0, 3).map((product, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="flex justify-start items-center rounded"
          >
            <Link
              href={`/products/${product.link}`}
              className="w-full p-2 text-lg pl-2 text-white"
              onClick={() => toggleDrawer(false)}
            >
              {product.name}
            </Link>
          </motion.div>
        ))}
        <motion.div
          variants={itemVariants}
          className="flex justify-start items-center rounded"
        >
          <DropdownMenu>
            <DropdownMenuTrigger
              className="focus:outline-none active:outline-none hover:outline-none"
              onClick={() => toggleDrawer(false)}
              asChild
            >
              <Link
                href={`/products/free-products`}
                className="w-full p-2 text-lg pl-2 text-white flex items-center"
              >
                Free Products
                <ChevronDownIcon className="top-[1px] ml-1 h-5 w-5" />
              </Link>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56 sm:w-72">
              {FreeProducts.map((product, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="flex flex-col items-start rounded"
                >
                  <Link href={`/products/${product.link}`} className="w-full">
                    <DropdownMenuItem
                      className="w-full text-lg text-secondary-black"
                      onClick={() => toggleDrawer(false)}
                    >
                      {product.name}
                    </DropdownMenuItem>
                  </Link>
                </motion.div>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="flex justify-start items-center rounded"
        >
          <Link
            href="/contact"
            className="w-full p-2 text-lg pl-2 text-white"
            onClick={() => toggleDrawer(false)}
          >
            Contact Us
          </Link>
        </motion.div>
        <motion.div variants={itemVariants}>
          <Link
            href="#form"
            className="mb-4"
            onClick={() => toggleDrawer(false)}
          >
            <Button
              variant={"default"}
              className="bg-secondary-white text-secondary-black text-lg"
            >
              Get a Quote
            </Button>
          </Link>
        </motion.div>
        <motion.div
          variants={itemVariants}
          className="flex w-full justify-start items-center gap-8 text-3xl h-20 text-secondary-white"
        >
          <Link
            href="https://www.facebook.com/profile.php?id=61564071297621"
            onClick={() => toggleDrawer(false)}
          >
            <FaFacebook />
          </Link>
          <Link
            href="https://www.instagram.com/curegreen.au?igsh=ZW1tMnAzejVwczUz"
            onClick={() => toggleDrawer(false)}
          >
            <FaInstagram />
          </Link>
        </motion.div>
      </motion.nav>
    </motion.div>
  );
};

export default Sidebar;
