import api from "@/services/api";
import { useMutation } from "@tanstack/react-query";

export const useLogin = () => {
  return useMutation({
    mutationFn: async ({
      username,
      password,
    }: {
      username: string;
      password: string;
    }) => {
      const { data } = await api.post("/auth/login", { username, password });
      return data.token;
    },
  });
};
