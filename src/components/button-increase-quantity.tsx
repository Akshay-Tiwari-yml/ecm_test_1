"use client";
import { Product } from "@/app/interfaces/products-i";
import { useCartStore } from "@/store/cart-store";
import React from "react";

interface ButtonIncreaseQuantityProps {
  product: Product;
}
const ButtonIncreaseQuantity: React.FC<ButtonIncreaseQuantityProps> = ({
  product,
}) => {
  const updateQuantity = useCartStore((state) => state.updateQuantity);

  const handleIncrease = (id: number) => {
    updateQuantity(id, "inc");
  };

  return (
    <button
      onClick={() => handleIncrease(product.id)}
      className="rounded bg-blue-500 px-2 text-white"
    >
      +
    </button>
  );
};

export default ButtonIncreaseQuantity;
