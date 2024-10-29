import { Product } from "@/app/interfaces/products-i";
import Image from "next/image";
import React from "react";
import AddToCartButton from "./button-add-to-cart";

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="overflow-hidden rounded-lg border p-4 shadow-lg">
      <Image
        src={product.image}
        alt={product.title}
        width={200}
        height={200}
        className="h-48 w-full object-cover"
      />
      <h2 className="mt-2 text-lg font-bold">{product.title}</h2>
      <p className="text-gray-700">${product.price.toFixed(2)}</p>
      <AddToCartButton product={product} />
    </div>
  );
};

export default ProductCard;
