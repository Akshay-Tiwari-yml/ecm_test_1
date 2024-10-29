import React from "react";
import Link from "next/link";
import CartIcon from "./cart-icon";

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 shadow z-50 flex items-center justify-between bg-gray-800 p-4 text-white">
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
      <div className="flex items-right mr-2">
        <Link href={"/checkout"}>
          <CartIcon />
        </Link>
      </div>
    </header>
  );
};

export default Header;
