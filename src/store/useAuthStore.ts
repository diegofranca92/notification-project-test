import { create } from "zustand";
import { persist } from "zustand/middleware";

interface AuthState {
  user: {
    id: number | null;
    email: string;
    name: string;
  } | null;
  token: string | null;
  setAuth: (user: AuthState["user"], token: string) => void;
  clearAuth: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      token: null,
      setAuth: (user, token) => set({ user, token }),
      clearAuth: () => set({ user: null, token: null }),
    }),
    {
      name: "auth-storage", // Nome da chave no localStorage
    }
  )
);
