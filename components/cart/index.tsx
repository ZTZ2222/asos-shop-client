"use client";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

import { Button } from "../ui/button";
import { Button as MovingBorderButton } from "../ui/moving-border";
import { FiShoppingCart } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import Image from "next/image";
import CartItem from "./cart-item";
import { IProductResponse } from "@/types/store.types";

const Cart = () => {
  const cart = {
    products: [],
  };
  return (
    <Drawer direction="right">
      <DrawerTrigger className="relative">
        <FiShoppingCart fontSize={24} strokeWidth={1} />
        <span
          key={cart.products.length}
          className="absolute -right-1 -top-1 h-4 w-4 animate-pingOnce rounded-full bg-teal-800 font-mono text-xs text-white"
        >
          {cart.products.length}
        </span>
      </DrawerTrigger>
      <DrawerContent
        className="ml-auto h-full w-[300px] rounded-none"
        showBar={false}
      >
        <DrawerHeader className="border-b p-3">
          <DrawerTitle className="flex justify-between text-primary">
            <span className="flex items-center text-2xl font-semibold">
              Корзина
            </span>
            <DrawerClose>
              <Button variant="ghost" className="p-2.5">
                <AiOutlineClose fontSize={24} strokeWidth={1} />
              </Button>
            </DrawerClose>
          </DrawerTitle>
        </DrawerHeader>
        {cart.products.length === 0 ? (
          <div className="flex h-full w-full items-center justify-center">
            <span className="text-2xl font-bold">Ваша корзина пуста</span>
          </div>
        ) : (
          <>
            <div className="overflow-auto">
              {cart.products.map((product: IProductResponse) => (
                <CartItem key={product.id} product={product} />
              ))}
            </div>
            <DrawerFooter className="border-t">
              <div className="flex justify-between">
                <span className="text-lg font-bold text-primary">Total</span>
                <span className="text-gray-700">$68.00</span>
              </div>
              <DrawerClose>
                <MovingBorderButton className="font-semibold">
                  Check out
                </MovingBorderButton>
              </DrawerClose>
            </DrawerFooter>
          </>
        )}
      </DrawerContent>
    </Drawer>
  );
};

export default Cart;
