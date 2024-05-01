"use client";

import React, { FC } from "react";
import Image from "next/image";
import QtyBtn from "./item-qty-button";
import { cn } from "@/lib/utils";
import { IProductResponse } from "@/types/store.types";

interface Props {
  product: IProductResponse;
  classname?: string;
}

const CartItem: FC<Props> = ({ product, classname }) => {
  const [qty, setQty] = React.useState(1);
  return (
    <div
      key={product.id}
      className={cn(
        "my-3 flex w-full gap-4 rounded-none border-0 border-b p-4",
        classname,
      )}
    >
      <div className="relative h-28 w-28 p-0">
        <Image
          src={`https://${product.images[0]}`}
          alt="product"
          fill
          className="object-cover"
        />
      </div>
      <div className="flex flex-col justify-center gap-4 p-0 text-left">
        <h3 className="text-lg font-bold leading-4">{product.name}</h3>
        <p className="leading-3 text-gray-500">
          Price: ${product.current_price}
        </p>
        <QtyBtn qty={qty} setQty={setQty} />
      </div>
    </div>
  );
};

export default CartItem;
