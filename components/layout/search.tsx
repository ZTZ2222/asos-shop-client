"use client";

import { HiOutlineSearch } from "react-icons/hi";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { PopoverClose } from "@radix-ui/react-popover";
import { GrClose } from "react-icons/gr";

const Search = () => {
  const [search, setSearch] = useState<string>("");
  return (
    <Popover modal>
      <PopoverTrigger>
        <HiOutlineSearch fontSize={24} strokeWidth={1} />
      </PopoverTrigger>
      <PopoverContent className="w-80 -translate-x-8 translate-y-4 border border-gray-400 p-0">
        <div className={cn("flex items-center", search && "border-b")}>
          <HiOutlineSearch fontSize={24} strokeWidth={1} className="ml-2" />
          <Input
            type="text"
            onChange={(e) => setSearch(e.target.value)}
            onBlur={() => setSearch("")}
            className="w-full border-0 p-2"
            placeholder="Search..."
          />
          <PopoverClose className="mx-2" aria-label="Close">
            <GrClose fontSize={16} />
          </PopoverClose>
        </div>
        <AnimatePresence>
          {search && (
            <motion.ul
              className="divide-y-[1px]"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, ease: [0.76, 0, 0.24, 1] }}
              exit={{ opacity: 0, scale: 0.5 }}
            >
              <li className="px-3 py-2">{search}</li>
              <li className="px-3 py-2">{search}</li>
              <li className="px-3 py-2">{search}</li>
            </motion.ul>
          )}
        </AnimatePresence>
      </PopoverContent>
    </Popover>
  );
};

export default Search;

// <HiOutlineSearch fontSize={24} strokeWidth={1} />
