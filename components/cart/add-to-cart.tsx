"use client";
import { ICart } from "@/types/store.types";
import { useFormStatus, useFormState } from "react-dom";

function SubmitButton({ productId }: { productId: string }) {
  const { pending } = useFormStatus();
  const buttonClasses =
    "relative flex w-full items-center justify-center rounded-full bg-blue-600 p-4 tracking-wide text-white";
  const disabledClasses = "cursor-not-allowed opacity-60 hover:opacity-60";
}

export default function AddToCart({
  addToCartAction,
}: {
  addToCartAction: () => Promise<ICart>;
}) {
  return (
    <button
      className="mt-6 rounded-lg bg-blue-800 px-8 py-2 text-lg font-bold text-white"
      onClick={async () => {}}
    >
      Add To Cart
    </button>
  );
}
