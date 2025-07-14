"use client";

import { useState } from "react";

import CartStep from "@/components/checkout/CartStep";
import CheckoutStepper from "@/components/checkout/CheckoutStepper";
import CheckoutFormStep from "@/components/checkout/CheckoutFormStep";
import ConfirmationStep from "@/components/checkout/ConfirmationStep";

type Step = "cart" | "checkout" | "confirmation";

export default function CheckoutPage() {
  const [step, setStep] = useState<Step>("cart");

  const next = () =>
    setStep((prev) =>
      prev === "cart" ? "checkout" : prev === "checkout" ? "confirmation" : prev
    );

  const back = () =>
    setStep((prev) =>
      prev === "confirmation" ? "checkout" : prev === "checkout" ? "cart" : prev
    );

  return (
    <div className="max-w-4xl mt-10 mx-auto p-6 ">
      <CheckoutStepper step={step} />

      {step === "cart" && <CartStep onNext={next} />}
      {step === "checkout" && <CheckoutFormStep onNext={next} onBack={back} />}
      {step === "confirmation" && <ConfirmationStep />}
    </div>
  );
}
