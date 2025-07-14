"use client";

import { useCart } from "@/contexts/CartContext";

type CartStepProps = {
  onNext: () => void;
};

export default function CartStep({ onNext }: CartStepProps) {
  const { cart, removeProduct } = useCart();
  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Seu carrinho</h2>

      {cart.length === 0 ? (
        <p className="text-gray-500">Seu carrinho está vazio.</p>
      ) : (
        <>
          <ul className="space-y-2">
            {cart.map((item) => (
              <li
                key={item.id}
                className="flex justify-between items-center border p-3 rounded"
              >
                <div>
                  <p className="font-medium">{item.title}</p>
                  <p className="text-sm text-gray-500">
                    R$ {item.price.toFixed(2)}
                  </p>
                  <p className="text-sm">Qtd: {item.quantity}</p>
                </div>

                <div className="flex gap-2 items-center">
                  <button
                    onClick={() => removeProduct(item.id)}
                    className="px-2 py-1 bg-red-400 rounded text-white"
                  >
                    Remover
                  </button>
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-6 flex justify-between items-center">
            <p className="text-lg font-medium">Total: R$ {total.toFixed(2)}</p>
            <button
              onClick={onNext}
              className="bg-teal-600 text-white px-4 py-2 rounded hover:bg-gray-800 transition"
            >
              Ir para o Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
}
