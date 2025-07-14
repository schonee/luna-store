import CheckoutFormStep from "@/components/checkout/CheckoutFormStep";
import { render, screen, fireEvent } from "@testing-library/react";

describe("CheckoutFormStep", () => {
  it("valida os campos obrigatórios", async () => {
    render(<CheckoutFormStep onNext={jest.fn()} onBack={jest.fn()} />);

    fireEvent.click(screen.getByRole("button", { name: /confirmar pedido/i }));

    expect(await screen.findByText(/nome é obrigatório/i)).toBeInTheDocument();
    expect(await screen.findByText(/email inválido/i)).toBeInTheDocument();
    expect(
      await screen.findByText(/endereço é obrigatório/i)
    ).toBeInTheDocument();
  });

  it("envia dados válidos e chama onNext", async () => {
    const onNext = jest.fn();
    render(<CheckoutFormStep onNext={onNext} onBack={jest.fn()} />);

    fireEvent.change(screen.getByLabelText(/nome/i), {
      target: { value: "Fulano" },
    });
    fireEvent.change(screen.getByLabelText(/email/i), {
      target: { value: "teste@email.com" },
    });
    fireEvent.change(screen.getByLabelText(/endereço/i), {
      target: { value: "Rua 123" },
    });

    fireEvent.click(screen.getByRole("button", { name: /confirmar pedido/i }));

    expect(await screen.findByText(/confirmar pedido/i)).toBeInTheDocument();
    expect(onNext).toHaveBeenCalled();
  });
});
