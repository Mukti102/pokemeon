import { create } from "zustand";

const appStore = create((set) => ({
  inputSearch: 0,
  input: (value) => {
    set({ inputSearch: value });
  },
}));

export default appStore;
