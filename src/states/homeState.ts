import { create } from "zustand";

interface HomeState {
  nama: string;
  setNama: (nama: string) => void;
}

export const homeState = create<HomeState>((set) => ({
  nama: "",
  setNama(nama) {
    set(() => ({ nama }));
  },
}));
