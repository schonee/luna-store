import { CartItem } from "@/contexts/CartContext";
import { CartContext } from "@/contexts/CartContext"; // must export context for this

export const mockCart: CartItem[] = [
  {
    id: 1,
    title: "Camisa",
    price: 100,
    quantity: 2,
    image: "",
    category: "Roupas",
    description: "Camisa confortável",
  },
];

export const mockCartFunctions = {
  addToCart: jest.fn(),
  removeProduct: jest.fn(),
  updateQuantity: jest.fn(),
  clearCart: jest.fn(),
};

export const TestCartProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <CartContext.Provider value={{ cart: mockCart, ...mockCartFunctions }}>
      {children}
    </CartContext.Provider>
  );
};
