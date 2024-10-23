import { UserInit } from "@/constants/user.constant";
import { UserProfileType } from "@/types/user.type";
import Cookies from "js-cookie";
import { create } from "zustand";

interface AuthStoreInterface {
  authenticated: boolean;
  setAuthentication: (val: boolean) => void;
  user: UserProfileType;
  setUser: (user: UserProfileType) => void;
  action: {
    logout: () => void;
  };
}

export const useAuthStore = create<AuthStoreInterface>((set, get) => ({
  authenticated: false,
  user: UserInit,

  // Prevents state update if the new value is the same as the current value
  setAuthentication: (val) => {
    const { authenticated } = get();
    if (authenticated !== val) {
      set({ authenticated: val });
    }
  },

  // Prevents state update if the new user is the same as the current user
  setUser: (user) => {
    const { user: currentUser } = get();
    if (JSON.stringify(currentUser) !== JSON.stringify(user)) {
      set({ user });
    }
  },

  action: {
    logout: () => {
      Cookies.remove("token");
      set({ authenticated: false, user: UserInit });
    },
  },
}));
