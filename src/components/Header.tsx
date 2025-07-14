"use client";

import { useQuery } from "@tanstack/react-query";
import { productService } from "@/services/productService";
import Link from "next/link";
import { useCart } from "@/contexts/CartContext";
import { ShoppingCart, Moon } from "lucide-react";

export default function Header() {
  const { cart } = useCart();

  const productItems = cart.reduce(
    (acc, currentValue) => acc + currentValue.quantity,
    0
  );
  return (
    <header className="flex items-center justify-between px-6 py-4 bg-teal-600 shadow-md sticky top-0 z-50">
      <Link href="/">
        <h1 className="flex gap-2 items-center text-xl font-bold text-white">
          <Moon /> Luna Store
        </h1>
      </Link>

      <Link href="/checkout" className="relative">
        <ShoppingCart className="w-6 h-6 text-white" />
        {productItems > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
            {productItems}
          </span>
        )}
      </Link>
    </header>
  );
}
