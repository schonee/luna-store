type Step = "cart" | "checkout" | "confirmation";

type Props = {
  step: Step;
};

const steps: { key: Step; label: string }[] = [
  { key: "cart", label: "Carrinho" },
  { key: "checkout", label: "Checkout" },
  { key: "confirmation", label: "Confirmação" },
];

export default function CheckoutStepper({ step }: Props) {
  return (
    <div className="flex items-center justify-center gap-4 mb-8">
      {steps.map((s, i) => {
        const isActive = s.key === step;
        const isCompleted = steps.findIndex((st) => st.key === step) > i;

        return (
          <div key={s.key} className="flex items-center gap-2">
            <div
              className={`
                w-8 h-8 rounded-full flex items-center justify-center text-sm
                ${
                  isCompleted
                    ? "bg-green-500 text-white"
                    : isActive
                    ? "bg-black text-white"
                    : "bg-gray-200 text-gray-500"
                }
              `}
            >
              {i + 1}
            </div>
            <span className={isActive ? "font-semibold" : "text-gray-500"}>
              {s.label}
            </span>
            {i < steps.length - 1 && (
              <span className="mx-2 text-gray-300">→</span>
            )}
          </div>
        );
      })}
    </div>
  );
}
