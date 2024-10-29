// app/products/[id]/page.tsx
import React from "react";
import Image from "next/image";
import AddToCartButton from "@/components/button-add-to-cart";
import { fetchProductsById } from "@/app/api/product-list-api";
import { Product } from "@/app/interfaces/products-i";

// this page lists out the detail of a single poduct of user's choosing.

const ProductDetailPage = async ({ params }: { params: { id: string } }) => {
  const product: Product[] = await fetchProductsById(parseInt(params.id)); // Fetch the specific product
  return (
    <div className="flex min-h-screen flex-col p-4">
      <h1 className="text-3xl font-bold">{product[0]?.title}</h1>
      <Image
        src={product[0]?.image}
        alt={product[0]?.title}
        className="my-4"
        height={200}
        width={200}
      />
      <p className="text-lg">Price: ${product[0]?.price}</p>
      <p className="mt-4">{product[0]?.description}</p>
      {/* AddToCartButton is a separate component that is being used at client side.  */}
      {<AddToCartButton product={product[0]} />}
    </div>
  );
};

export default ProductDetailPage;
