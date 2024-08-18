import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "./ui/button";

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
        className="flex flex-col h-full p-6 pt-40 space-y-10"
        initial="hidden"
        animate={isOpen ? "visible" : "hidden"}
        variants={listVariants}
      >
        <motion.div variants={itemVariants} className="bg-secondary flex justify-start items-center rounded">
          <Link
            href="/#about"
            className="w-full p-2 text-lg font-semibold hover:text-primary-green transition-colors pl-2"
            onClick={() => toggleDrawer(false)}
          >
            About Us
          </Link>
        </motion.div>
        <motion.div variants={itemVariants} className="bg-secondary flex justify-start items-center rounded">
          <Link
            href="/products"
            className="w-full p-2  text-lg font-semibold hover:text-primary-green transition-colors pl-2"
            onClick={() => toggleDrawer(false)}
          >
            Products
          </Link>
        </motion.div>
        <motion.div variants={itemVariants}>
          <Link
            href="#section2"
            className="mb-4"
            onClick={() => toggleDrawer(false)}
          >
            <Button
              variant={"default"}
              className="font-body bg-secondary-darkBlue text-secondary-white text-lg font-semibold"
            >
              Get a Quote
            </Button>
          </Link>
        </motion.div>
      </motion.nav>
    </motion.div>
  );
};

export default Sidebar;
