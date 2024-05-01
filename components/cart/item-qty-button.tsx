"use client";

import { cn } from "@/lib/utils";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { BsTrash3 } from "react-icons/bs";
import { Button } from "../ui/button";

interface Props {
  setQty: React.Dispatch<React.SetStateAction<number>>;
  qty: number;
  className?: string;
}

const QtyBtn = ({ setQty, qty, className }: Props) => {
  return (
    <div
      className={cn(
        "inline-flex w-fit items-center gap-4 rounded-md border border-gray-300 px-3 py-1.5 text-xl",
        className,
      )}
    >
      <button className="h-4 w-4 text-teal-800" onClick={() => setQty(qty - 1)}>
        {qty === 1 ? (
          <BsTrash3 fontSize={16} className="animate-vanish" />
        ) : (
          <AiOutlineMinus fontSize={16} className="animate-vanish" />
        )}
      </button>
      <p className="translate-y-[1px] text-sm font-medium text-primary">
        {qty}
      </p>
      <button className="h-4 w-4 text-teal-800" onClick={() => setQty(qty + 1)}>
        <AiOutlinePlus fontSize={16} />
      </button>
    </div>
  );
};

export default QtyBtn;
