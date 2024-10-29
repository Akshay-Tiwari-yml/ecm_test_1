"use client";
import { useCartStore } from '@/store/cart-store';
import { Product } from "@/app/interfaces/products-i";
import React from 'react'

interface ButtonDecreaseQuantityProps {
    product: Product;
}

const ButtonDecreaseQuantity: React.FC<ButtonDecreaseQuantityProps> = ({product}) => {
    const cart = useCartStore((state) => state.cart);
    const updateQuantity = useCartStore((state) => state.updateQuantity);
  
    const handleDecrease = (id: number) => {
      updateQuantity(id, "dec");
    };
  return (
    <button
        onClick={() => handleDecrease(product.id)}
        className="rounded bg-red-500 px-2 text-white"
    >
        -
    </button>
  )
}

export default ButtonDecreaseQuantity