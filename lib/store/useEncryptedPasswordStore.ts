import { StateType } from "@/types";
import { create } from "zustand";

const useEncryptedPasswordStore = create((set) => ({
  password: "",
  changePassword: (password: string) =>
    set(() => ({
      password,
    })),
}));

export default useEncryptedPasswordStore;
