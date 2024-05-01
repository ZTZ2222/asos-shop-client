import ProductCard from "@/components/product/product-card";
import { IProductResponse } from "@/types/store.types";
import Link from "next/link";

export default async function Home() {
  const response = await fetch("http://localhost:8000/products?limit=2");
  const products: IProductResponse[] = await response.json();

  return (
    <>
      <div className="text-bold grid h-screen place-content-center text-3xl">
        Hero
      </div>
      <ul role="list" className="">
        {products.map((product) => (
          <li key={product.id} className="">
            <Link href={`/products/${product.id}`}>
              <ProductCard product={product} />
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
