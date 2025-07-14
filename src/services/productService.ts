import type { Product } from "@/contexts/CartContext";
import api from "./api";

export const productService = {
  list: async (): Promise<Product[]> => {
    const { data } = await api.get("/products");
    return data;
  },

  get: async (id: string | number): Promise<Product> => {
    const { data } = await api.get(`/products/${id}`);
    return data;
  },

  add: async (product: Partial<Product>): Promise<Product> => {
    const { data } = await api.post("/products", product);
    return data;
  },

  update: async (id: number, product: Partial<Product>): Promise<Product> => {
    const { data } = await api.put(`/products/${id}`, product);
    return data;
  },

  remove: async (id: number): Promise<void> => {
    await api.delete(`/products/${id}`);
  },
};
