"use client";

import { cn } from "@/lib/utils";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useState } from "react";
import { HiOutlineHeart } from "react-icons/hi";
import SideMenu from "./side-menu";
import Cart from "../cart/index";
import Search from "./search";
import Link from "next/link";

const Navbar = () => {
  const [hidden, setHidden] = useState(false);

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() || 0;

    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <motion.header
      key="header"
      variants={{
        hidden: { y: "-100%" },
        visible: { y: 0 },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
      className={cn(
        "sticky top-0 z-50",
        "border-b border-gray-500 bg-gray-100",
      )}
    >
      <div className="flex w-full items-center justify-between px-6 py-3">
        <SideMenu />
        <Link href="/">
          <h1 className="text-xl font-medium">Shabbit.</h1>
        </Link>
        <div className="flex gap-3">
          <Search />
          <HiOutlineHeart fontSize={24} strokeWidth={1} />
          <Cart />
        </div>
      </div>
    </motion.header>
  );
};

export default Navbar;
