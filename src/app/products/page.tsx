// src/pages/page.tsx
import React from "react";
import ProductCard from "@/components/product-card";
import { fetchProducts } from "../api/product-list-api";
import Link from "next/link";

// this page lists out all the products.
// todo: implement pagination here.
const Page = async () => {
  const products = await fetchProducts();
  return (
    <div className="flex min-h-screen flex-col">
      <main className="grow p-4">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {products.map((product) => (
            <Link href={`/products/${product.id}`} key={product.id}>
              <ProductCard product={product} />
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Page;
