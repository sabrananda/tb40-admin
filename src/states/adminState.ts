import { create } from "zustand";

interface AdminState {
  nama: string;
  setNama: (nama: string) => void;
}

export const adminState = create<AdminState>((set) => ({
  nama: "",
  setNama(nama) {
    set(() => ({ nama }));
  },
}));
