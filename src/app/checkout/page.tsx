"use client";
import AddToCartButton from "@/components/button-add-to-cart";
import ButtonDecreaseQuantity from "@/components/button-decrease-quantity";
import ButtonIncreaseQuantity from "@/components/button-increase-quantity";
import ButtonRemoveFromCart from "@/components/button-remove-from-cart";
import { useCartStore } from "@/store/cart-store";
import React, { useEffect, useState } from "react";

const CheckoutPage = () => {
  const cart = useCartStore((state) => state.cart);
  const [isLoading, setIsLoading] = useState(true);
  // temp logic to have a different layout at server and client to prevent errors.
  useEffect(() => {
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return (
      <button className="rounded bg-gray-500 p-2 text-white" disabled>
        Checking...
      </button>
    );
  }
  // the above logic is to prevent hydration error

  return (
    <div className="flex min-h-screen flex-col p-4">
      <h1 className="text-3xl font-bold">Checkout</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="mt-4">
          {cart.map((product) => (
            <div
              key={product.id}
              className="flex items-center justify-between border-b py-2"
            >
              <div>
                <h2 className="font-bold">{product.title}</h2>
                <p>Price: ${product.price}</p>
              </div>
              <div className="flex items-center space-x-2">
                <AddToCartButton product={product} />
                <ButtonRemoveFromCart product={product} />
              </div>
            </div>
          ))}
          <div className="mt-4">
            <h2 className="text-xl font-bold">
              Total: $
              {cart
                .reduce((total, item) => total + item.price * item.quantity, 0)
                .toFixed(2)}
            </h2>
          </div>
        </div>
      )}
    </div>
  );
};

export default CheckoutPage;
