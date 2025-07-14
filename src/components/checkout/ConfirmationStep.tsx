"use client";

export default function ConfirmationStep() {
  return (
    <div className="text-center space-y-4">
      <h2 className="text-2xl font-bold">🎉 Pedido Confirmado!</h2>
      <p className="text-gray-600">Obrigado por sua compra na Luna Store!</p>

      <div className="mt-6">
        <a
          href="/"
          className="inline-block bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition"
        >
          Volta para home
        </a>
      </div>
    </div>
  );
}
