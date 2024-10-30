import React from "react";
import Link from "next/link";
import CartIcon from "./cart-icon";

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 flex items-center justify-between bg-gray-800 p-4 text-white shadow">
      <div className="text-left">
        <Link href="/products" className="relative">
          <h2 className="text-xl font-bold">Your Shop</h2>{" "}
        </Link>
      </div>
      <div className="grow text-center">
        <Link href="/products" className="relative">
          <h2 className="text-xl font-bold">Shopping Made Easy</h2>{" "}
        </Link>
      </div>
      <div className="mr-2 flex">
        <Link href={"/checkout"}>
          <CartIcon />
        </Link>
      </div>
    </header>
  );
};

export default Header;
