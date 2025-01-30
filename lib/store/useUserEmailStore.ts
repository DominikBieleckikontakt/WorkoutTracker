import { create } from "zustand";
import { persist } from "zustand/middleware";

interface UserEmailStore {
  email: string;
  changeEmail: (email: string) => void;
}

const useUserEmailStore = create<UserEmailStore>()(
  persist(
    (set) => ({
      email: "",
      changeEmail: (email: string) => set({ email }),
    }),
    {
      name: "user-email",
    }
  )
);

export default useUserEmailStore;
