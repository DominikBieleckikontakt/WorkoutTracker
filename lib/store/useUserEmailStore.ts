import { create } from "zustand";

const useUserEmailStore = create((set) => ({
  email: "",
  changeEmail: (email: string) =>
    set(() => ({
      email,
    })),
}));

export default useUserEmailStore;
