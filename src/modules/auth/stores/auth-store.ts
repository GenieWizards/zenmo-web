import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface IUser {
  id: string;
  email: string;
  emailVerified: boolean;
  fullName: string;
  role: string;
  createdAt: string;
  updatedAt: string;
  session: string;
}

interface IAuthState {
  user: IUser | null;
  isAuthenticated: boolean;
  setUser: (user: IUser | null) => void;
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
