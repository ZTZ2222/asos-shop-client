"use server";

import { TAGS } from "@/lib/constants";
import { ICart } from "@/types/store.types";
import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";

export async function createCart(): Promise<ICart> {
  const res = await fetch(`http://localhost:8000/cart/new`, {
    method: "POST",
    cache: "no-store",
  });

  const cart = await res.json();

  return cart;
}

export async function addToCart(
  cartId: string,
  data: { productId: string; quantity: number }[],
): Promise<ICart> {
  const res = await fetch(`http://localhost:8000/cart`, {
    method: "POST",
    cache: "no-store",
    body: JSON.stringify({
      id: cartId,
      products: data,
    }),
  });

  const cart = await res.json();

  return cart;
}

export async function removeFromCart(
  cartId: string,
  productIds: string[],
): Promise<ICart> {
  const res = await fetch(`http://localhost:8000/cart`, {
    method: "DELETE",
    cache: "no-store",
    body: JSON.stringify({
      id: cartId,
      productsIds: productIds,
    }),
  });

  const cart = await res.json();

  return cart;
}

export async function updateCart(
  cartId: string,
  data: { productId: string; quantity: number }[],
): Promise<ICart> {
  const res = await fetch(`http://localhost:8000/cart`, {
    method: "PUT",
    cache: "no-store",
    body: JSON.stringify({
      id: cartId,
      productsIds: data,
    }),
  });

  const cart = await res.json();

  return cart;
}

export async function getCart(cartId: string) {
  try {
    const res = await fetch(`http://localhost:8000/cart`, {
      cache: "no-store",
      body: JSON.stringify({
        id: cartId,
      }),
      next: { tags: [TAGS.cart] },
    });

    const body = await res.json();

    if (body.errors) {
      throw body.errors[0];
    }

    return {
      status: res.status,
      body,
    };
  } catch (e) {
    console.log(e);
  }
}

export async function addItem(prevState: any, productId: string | undefined) {
  let cartId = cookies().get("cartId")?.value;
  let cart;

  if (cartId) {
    cart = await getCart(cartId);
  }

  if (!cartId || !cart) {
    cart = await createCart();
    cartId = cart.id;
    cookies().set("cartId", cartId);
  }

  if (!productId) {
    return "Missing product ID";
  }

  try {
    await addToCart(cartId, [{ productId, quantity: 1 }]);
    revalidateTag(TAGS.cart);
  } catch (e) {
    return "Error adding item to cart";
  }
}

export async function removeItem(prevState: any, productId: string) {
  const cartId = cookies().get("cartId")?.value;

  if (!cartId) {
    return "Missing cart ID";
  }

  try {
    await removeFromCart(cartId, [productId]);
    revalidateTag(TAGS.cart);
  } catch (e) {
    return "Error removing item from cart";
  }
}

export async function updateItemQuantity(
  prevState: any,
  payload: {
    productId: string;
    quantity: number;
  },
) {
  const cartId = cookies().get("cartId")?.value;

  if (!cartId) {
    return "Missing cart ID";
  }

  const { productId, quantity } = payload;

  try {
    if (quantity === 0) {
      await removeFromCart(cartId, [productId]);
      revalidateTag(TAGS.cart);
      return;
    }

    await updateCart(cartId, [{ productId, quantity }]);
    revalidateTag(TAGS.cart);
  } catch (e) {
    return "Error updating item quantity";
  }
}
