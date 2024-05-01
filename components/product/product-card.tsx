import Image from "next/image";
import { IProductResponse } from "@/types/store.types";
import { FC } from "react";
import { cn } from "@/lib/utils";

interface Props {
  product: IProductResponse;
  className?: string;
}

const ProductCard: FC<Props> = ({ product, className }) => (
  <div className={cn("flex flex-col", className)}>
    <div className="relative h-52 w-36">
      <Image
        src={`https://${product.images[0]}`}
        alt="product"
        fill
        sizes="(100vw - 2rem)"
        className="object-cover"
      />
    </div>
    <span className="">{product.name}</span>
  </div>
);

export default ProductCard;
