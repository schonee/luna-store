"use client";

import { useQuery } from "@tanstack/react-query";
import { productService } from "@/services/productService";
import { useCart } from "@/contexts/CartContext";
import Link from "next/link";
import { toast } from "sonner";
import { useState } from "react";
import CategoryFilter from "./CategoryFilter";

export default function ProductList() {
  const {
    data: products = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["products"],
    queryFn: productService.list,
  });

  const [filtered, setFiltered] = useState(products);
  const { addToCart } = useCart();

  if (isLoading)
    return <p className="text-center mt-10">Carregando produtos...</p>;
  if (isError)
    return (
      <p className="text-center mt-10 text-red-500">
        Erro ao carregar produtos.
      </p>
    );

  return (
    <section className="flex flex-wrap justify-center m-10 gap-10">
      <div className="w-full lg:w-1/5">
        <CategoryFilter products={products} onFilter={setFiltered} />
      </div>
      <div className="flex flex-wrap gap-6 max-w-4/6 ">
        {filtered.map((product) => (
          <div
            key={product.id}
            className="w-full sm:w-[calc(50%-0.75rem)] md:w-[calc(33.333%-1rem)] lg:w-[calc(25%-1.125rem)] bg-white  rounded-lg p-4 shadow-sm hover:shadow-md transition"
          >
            <Link href={`/product/${product.id}`}>
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-40 object-contain mb-2"
              />
              <h3 className="text-sm font-medium line-clamp-2 min-h-[3rem]">
                {product.title}
              </h3>
              <p className="text-lg font-semibold text-teal-500 mt-1">
                R$ {product.price}
              </p>
            </Link>

            <button
              onClick={() => {
                addToCart(product);
                toast.success(`🛒 ${product.title} adicionado ao carrinho`);
              }}
              className="mt-3 w-full bg-teal-600 text-white py-1.5 px-4 rounded hover:bg-teal-700 transition cursor-pointer"
            >
              Adicionar ao carrinho
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
