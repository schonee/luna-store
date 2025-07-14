"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

type Props = {
  onNext: () => void;
  onBack: () => void;
};

const CheckoutSchema = z.object({
  name: z.string().min(2, "Nome é obrigatório."),
  email: z.string().email("Email inválido"),
  address: z.string().min(5, "Endereço é obrigatório"),
});

type CheckoutData = z.infer<typeof CheckoutSchema>;

export default function CheckoutFormStep({ onNext, onBack }: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CheckoutData>({
    resolver: zodResolver(CheckoutSchema),
  });

  const onSubmit = (data: CheckoutData) => {
    console.log("Checkout data:", data);
    onNext();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <h2 className="text-2xl font-bold mb-4">Informações de Envio</h2>

      <div>
        <label htmlFor="name" className="block text-sm font-medium">
          Nome
        </label>
        <input
          id="name"
          {...register("name")}
          className="w-full p-2 border rounded"
        />
        {errors.name && (
          <p className="text-red-500 text-sm">{errors.name.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium">
          Email
        </label>
        <input
          id="email"
          {...register("email")}
          className="w-full p-2 border rounded"
        />
        {errors.email && (
          <p className="text-red-500 text-sm">{errors.email.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="address" className="block text-sm font-medium">
          Endereço
        </label>
        <input
          id="address"
          {...register("address")}
          className="w-full p-2 border rounded"
        />
        {errors.address && (
          <p className="text-red-500 text-sm">{errors.address.message}</p>
        )}
      </div>

      <div className="flex justify-between pt-4">
        <button
          type="button"
          onClick={onBack}
          className="text-sm text-gray-500 underline"
        >
          Voltar ao carrinho
        </button>

        <button type="submit" className="bg-black text-white py-2 px-4 rounded">
          Confirmar pedido
        </button>
      </div>
    </form>
  );
}
