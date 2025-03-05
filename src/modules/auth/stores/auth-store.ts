import type { UserResponse } from "zenmo-types";

import { create } from "zustand";
import { persist } from "zustand/middleware";

interface IAuthState {
  user: UserResponse | null;
  isAuthenticated: boolean;
  setUser: (user: UserResponse | null) => void;
  clearUser: () => void;
}

export const useAuthStore = create<IAuthState>()(
  persist(
    set => ({
      user: null,
      isAuthenticated: false,
      setUser: user => set({ user, isAuthenticated: true }),
      clearUser: () => set({ user: null, isAuthenticated: false }),
    }),
    {
      name: "auth-storage",
      partialize: state => ({ user: state.user }), // Only persist user data
    },
  ),
);
