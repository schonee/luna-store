import { render, screen, fireEvent } from "@testing-library/react";
import { CartProvider } from "@/contexts/CartContext";
import CartStep from "@/components/checkout/CartStep";
import { TestCartProvider } from "@/__mocks__/CartContext";

function renderWithCart(children: React.ReactNode) {
  return render(<TestCartProvider>{children}</TestCartProvider>);
}

describe("CartStep", () => {
  it("exibe produtos no carrinho e total", () => {
    renderWithCart(<CartStep onNext={jest.fn()} />);

    expect(screen.getByText("Seu carrinho")).toBeInTheDocument();
    expect(screen.getByText("Camisa")).toBeInTheDocument();
    expect(screen.getByText("Qtd: 2")).toBeInTheDocument();
    expect(screen.getByText("Total: R$ 200.00")).toBeInTheDocument();
  });

  it("avança para o checkout ao clicar no botão", () => {
    const onNext = jest.fn();
    renderWithCart(<CartStep onNext={onNext} />);

    const btn = screen.getByRole("button", { name: /ir para o checkout/i });
    fireEvent.click(btn);

    expect(onNext).toHaveBeenCalled();
  });
});
