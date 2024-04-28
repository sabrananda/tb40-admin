import { create } from "zustand";
import { FetchHandler } from "../utils/fetchHandler";
interface ResultPageStates {
  bakat3: { id: number; arab: string }[];
  bakat6: { id: number; arab: string; bakat40_id: number[] }[];
  bakat40: { id: number; arab: string; arti: string }[];
  identitas: Identitas;
  ranks40: number[];
  ranks18: number[];
  ranks6: number[];
  ranks3: number[];
  kepribadian: KepribadianComponent;
  bakat: BakatComponent;
  gayaBelajar: GayaBelajarComponent;
  bahasaHati: BahasaHatiComponent;
  potensiSifatTercela: PotensiSifatTercela;
  kekuatanDanKelemahan: KekuatanDanKelemahan;
  warna40: (rank: number) => void;
  warna18: (rank: number) => void;
  warna6: (rank: number) => void;
  warna3: (rank: number) => void;
}
export const resultPageStates = create<ResultPageStates>((set, get) => ({
  async getResultPageDefaultStates() {
    const data = FetchHandler({
      route: "/result/getDefaultResultStates",
      method: "GET",
    });
    return await (await data).json();
  },
  identitas: { nama: "" },
  bakat40: [],
  bakat6: [],
  bakat3: [],
  ranks40: [],
  ranks18: [],
  ranks6: [],
  ranks3: [],
  kekuatanDanKelemahan: { bakatKekuatan: [], bakatKelemahan: [] },
  kepribadian: {
    judul: "",
    judulJulukan: "",
    julukan: "",
    paragraf1: "",
    paragraf2: "",
    paragraf3: "",
    paragraf4: "",
  },
  bakat: {
    judul: "",
    deskripsiJudul: "",
    judulKekuatan: "",
    bakatKekuatan: [],
    judulKelemahan: "",
    bakatKelemahan: [],
  },
  gayaBelajar: { judul: "", deskripsiJudul: "", judulUraian: "", uraian: [] },
  bahasaHati: {
    judul: "",
    deskripsiJudul: "",
    judulUraian: "",
    uraian: [],
  },
  potensiSifatTercela: {
    judul: "",
    deskripsiJudul: "",
    refernsi: "",
    paragraf1: "",
    paragraf2: "",
    paragraf3: "",
    paragraf4: "",
  },
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
export interface KekuatanDanKelemahan {
  bakatKekuatan: Bakat40[];
  bakatKelemahan: Bakat40[];
}
interface Bakata {
  id: number;
  arab: string;
  latin: string;
  arti: string;
}
interface Bakat40 {
  id: number;
  label?: string;
  arab: string;
  definisi?: string;
  profesi?: string;
  jurusan?: string;
  latin: string;
  arti: string;
  berlebihan_arab?: string;
  berlebihan_deskripsi?: string;
  berlebihan_tulisan?: string;
  berlebihan_perbaikan?: string;
  lalai_tulisan?: string;
  lalai_deskripsi?: string;
  lalai_perbaikan?: string;
}
export interface ResultPage {
  identitas: Identitas;
  ranks40: number[];
  ranks18: number[];
  ranks6: number[];
  ranks3: number[];
  kepribadian: KepribadianComponent;
  bakat: BakatComponent;
  kekuatanDanKelemahan: KekuatanDanKelemahan;
  gayaBelajar: GayaBelajarComponent;
  bahasaHati: BahasaHatiComponent;
  potensiSifatTercela: PotensiSifatTercela;
  bakat40: PilarBakat[];
  bakat6: { id: number; arab: string; bakat40_id: number[] }[];
  bakat3: { id: number; arab: string }[];
}
interface PilarBakat {
  id: number;
  arti: string;
  arab: string;
  latin?: string;
}

export interface PotensiSifatTercela {
  judul: string;
  deskripsiJudul: string;
  refernsi: string;
  paragraf1: string;
  paragraf2: string;
  paragraf3: string;
  paragraf4: string;
}
export interface BahasaHatiComponent {
  judul: string;
  deskripsiJudul: string;
  judulUraian: string;
  uraian: UraianBahasaHati[];
}
export interface GayaBelajarComponent {
  judul: string;
  deskripsiJudul: string;
  judulUraian: string;
  uraian: UraianGayaBelajar[];
}
export interface KuatDanLemah {
  judul: string;
  deskripsiJudul: string;
  profesi: string;
  jurusan: string;
}
export interface UraianGayaBelajar {
  judul: string;
  deskripsiGayaBelajar1: string;
  tempatBelajar: string;
}
export interface UraianBahasaHati {
  judul: string;
  deskripsiJudul: string;
}
export interface Identitas {
  nama: string;
}

export interface BakatComponent {
  judul: string;
  deskripsiJudul: string;
  judulKekuatan: string;
  judulKelemahan: string;
  bakatKekuatan: KuatDanLemah[];
  bakatKelemahan: KuatDanLemah[];
}
export interface KepribadianComponent {
  judul: string;
  paragraf1: string;
  paragraf2: string;
  judulJulukan: string;
  julukan: string;
  paragraf3: string;
  paragraf4: string;
}
