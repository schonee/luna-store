"use client";

import type { Product } from "@/contexts/CartContext";
import { useState, useEffect } from "react";

type Props = {
  products: Product[];
  onFilter: (filtered: Product[]) => void;
};

export default function CategoryFilter({ products, onFilter }: Props) {
  const [category, setCategory] = useState("all");

  const categories = Array.from(new Set(products.map((p) => p.category)));

  useEffect(() => {
    const filtered =
      category === "all"
        ? products
        : products.filter((product) => product.category === category);

    onFilter(filtered);
  }, [category, products, onFilter]);

  return (
    <div className="mb-6">
      <label
        htmlFor="category"
        className="block mb-2 text-sm font-medium text-gray-700"
      >
        Filtrar por categoria:
      </label>

      <select
        id="category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="w-full max-w-sm p-2.5 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-black"
      >
        <option value="all" className="text-gray-500">
          Todas categorias
        </option>
        {categories.map((cat) => (
          <option key={cat} value={cat}>
            {cat[0].toUpperCase() + cat.slice(1)}
          </option>
        ))}
      </select>
    </div>
  );
}
