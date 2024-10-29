"use client"; // Ensure this component is client-side

import React, { useEffect, useState } from "react";
import Link from "next/link";
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
    <span className="material-icons">Cart</span>{" "}
    {cart.length > 0 && (
        <span className="absolute top-3 -right-0.25 bg-red-500 text-white text-xs rounded-full px-1">
        {cart.length}
        </span>
    )}
    </>
  );
};

export default CartIcon;
