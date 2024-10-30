// src/components/AddToCartButton.tsx
"use client";

import { Product } from "@/app/interfaces/products-i";
import { useCartStore } from "@/store/cart-store";
import React, { useEffect, useState } from "react";
import ButtonDecreaseQuantity from "./button-decrease-quantity";
import ButtonIncreaseQuantity from "./button-increase-quantity";

// extending existing product interface
interface AddToCartButtonProps {
  product: Product;
}

const AddToCartButton: React.FC<AddToCartButtonProps> = ({ product }) => {
  const cart = useCartStore((state) => state.cart);
  const addToCart = useCartStore((state) => state.addToCart);

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

  const handleAddToCart = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ): void => {
    event.preventDefault();
    addToCart(product);
  };

  const currentProduct = cart.find((item) => item.id === product?.id);

  return (
    <div className="flex items-center space-x-2">
      {currentProduct ? (
        <>
          <ButtonDecreaseQuantity product={product} />
          <span>{currentProduct.quantity}</span>
          <ButtonIncreaseQuantity product={product} />
        </>
      ) : (
        <button
          onClick={handleAddToCart}
          className="rounded bg-blue-500 p-2 text-white"
        >
          Add to Cart
        </button>
      )}
    </div>
  );
};

export default AddToCartButton;
