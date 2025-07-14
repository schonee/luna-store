import { notFound } from "next/navigation";
import axios from "axios";
import type { Product } from "@/contexts/CartContext";

async function fetchProduct(id: string): Promise<Product> {
  const res = await axios.get(`https://fakestoreapi.com/products/${id}`);
  return res.data;
}

export default async function ProductPage({
  params,
}: {
  params: { id: string };
}) {
  const product = await fetchProduct(params.id).catch(() => null);

  if (!product) return notFound();

  return (
    <div className="p-6 max-w-5xl mx-auto justify-center">
      <div className="flex flex-col justify-center items-center md:flex-row gap-8 ">
        <div className="flex-1 justify-center">
          <img
            src={product.image}
            alt={product.title}
            className="w-full max-w-sm object-contain mx-auto max-h-[500px]"
          />
        </div>

        <div className="flex-1">
          <h1 className="text-3xl font-semibold mb-4">{product.title}</h1>
          <p className="text-gray-700 mb-4">{product.description}</p>
          <p className="text-2xl font-bold text-black mb-6">${product.price}</p>

          <button className="bg-teal-600 text-white px-6 py-3 rounded hover:bg-gray-800 transition">
            Adicionar ao carrinho
          </button>
        </div>
      </div>
    </div>
  );
}
