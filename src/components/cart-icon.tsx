"use client"; // Ensure this component is client-side

import React, { useEffect, useState } from "react";
import { useCartStore } from "@/store/cart-store";

const CartIcon: React.FC = () => {
  const cart = useCartStore((state) => state.cart);

  // Temp logic to prevent erros.
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    // Simulate loading, replace with actual initialization logic if needed
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
    <>
      <span>Cart</span>{" "}
      {cart.length > 0 && (
        <span className="absolute -right-0.5 top-3 rounded-full bg-red-500 px-1 text-xs text-white">
          {cart.length}
        </span>
      )}
    </>
  );
};

export default CartIcon;
