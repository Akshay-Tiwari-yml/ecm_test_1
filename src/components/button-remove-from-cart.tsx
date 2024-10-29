"use client";
import { Product } from '@/app/interfaces/products-i'
import { useCartStore } from '@/store/cart-store';
import React from 'react'

interface ButtonRemoveFromCartProps {
    product: Product
}
const ButtonRemoveFromCart: React.FC<ButtonRemoveFromCartProps> = ({product}) => {
  const cart = useCartStore((state) => state.cart);
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  return (
    <button
        onClick={() => removeFromCart(product.id)}
        className="rounded bg-gray-500 px-2 text-white"
    >
        🗑️
    </button>
  )
}

export default ButtonRemoveFromCart