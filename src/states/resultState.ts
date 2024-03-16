import { create } from "zustand";

interface ResultState {
  warna40: (rank: number) => void;
  warna18: (rank: number) => void;
  warna6: (rank: number) => void;
  warna3: (rank: number) => void;
}

export const resultState = create<ResultState>((set) => ({
  warna40(rank) {
    if (rank >= 1 && rank <= 6) {
      return "bg-red-500";
    } else if (rank >= 7 && rank <= 11) {
      return "bg-yellow-400";
    } else if (rank >= 12 && rank <= 17) {
      return "bg-green-500";
    } else if (rank >= 18 && rank <= 32) {
      return "bg-slate-400";
    } else if (rank >= 33 && rank <= 41) {
      return "bg-slate-600";
    } else {
      return "";
    }
  },
  warna18(rank) {
    if (rank >= 1 && rank <= 3) {
      return "bg-red-500";
    } else if (rank >= 4 && rank <= 6) {
      return "bg-yellow-400";
    } else if (rank >= 7 && rank <= 12) {
      return "bg-green-500";
    } else if (rank >= 13 && rank <= 15) {
      return "bg-slate-400";
    } else if (rank >= 16 && rank <= 18) {
      return "bg-slate-600";
    } else {
      return "";
    }
  },
  warna6(rank) {
    if (rank === 1) {
      return "bg-red-500";
    } else if (rank === 2) {
      return "bg-yellow-400";
    } else if (rank >= 3 && rank <= 4) {
      return "bg-green-500";
    } else if (rank === 5) {
      return "bg-slate-400";
    } else if (rank === 6) {
      return "bg-slate-600";
    } else {
      return "";
    }
  },
  warna3(rank) {
    if (rank === 1) {
      return "bg-red-500";
    } else if (rank === 2) {
      return "bg-green-500";
    } else if (rank === 3) {
      return "bg-slate-600";
    } else {
      return "";
    }
  },
}));
