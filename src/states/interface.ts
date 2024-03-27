export type SkorRank = {
  id: number;
  skor: number;
};
export type PilarAverage = {
  id: number;
  average: number;
};

export type Pilar = {
  id: number;
  bacaArab: string;
  skor: number;
  namaArab: string;
  namaIndo: string;
  tulisan: string;
  labelDiri: string;
  definisi: string;
  profesi: string;
  jurusanStudi: string;
  akibatLalai: {
    namaArab: string;
    tulisan: string;
    definisi: string;
    perbaikan: string;
  };
  perbaikanLalai: string[];
  akibatBerlebihan: {
    namaArab: string;
    tulisan: string;
    definisi: string;
    perbaikan: string;
  };
  perbaikanBerlebihan: string[];
  pernyataan: string;
};

export type Pilar6Array = {
  id: number;
  tulisan: string;
  bacaIndo: string;
  namaArab: string;
  uraian: string;
  berlebihan: string;
  label1: string;
  label2: string;
  pilar40Id: number[];
};

export type Pilar3Array = {
  id: number;
  tulisan: string;
  namaArab: string;
  bacaIndo: string;
  tulisanGayaBelajar: string;
  gayaBelajar: string;
  deskripsiGayaBelajar1: string;
  deskripsiGayaBelajar2: string;
  tempatBelajar: string;
  bahasaHati: string;
  deskripsiBahasa: string;
};

export type Kepribadian = {
  judul: string;
  paragraf1: string;
  paragraf2: string;
  judulJulukan: string;
  julukan: string;
  paragraf3: string;
  paragraf4: string;
};

export type KuatDanLemah = {
  judul: string;
  deskripsiJudul: string;
  profesi: string;
  jurusan: string;
};

export type Bakat = {
  judul: string;
  deskripsiJudul: string;
  judulKekuatan: string;
  judulKelemahan: string;
  bakatKekuatan: KuatDanLemah[];
  bakatKelemahan: KuatDanLemah[];
};
export type UraianGayaBelajar = {
  judul: string;
  deskripsiJudul: string;
  tempatBelajar: string;
};
export type GayaBelajar = {
  judul: string;
  deskripsiJudul: string;
  urutan: string;
  uraian: UraianGayaBelajar[];
};
export type UraianBahasaHati = {
  judul: string;
  deskripsiJudul: string;
};
export type BahasaHati = {
  judul: string;
  deskripsiJudul: string;
  urutan: string;
  uraian: UraianBahasaHati[];
};
export type SifatTercela = {
  judul: string;
  deskripsiJudul: string;
  reference: string;
  paragraf1: string;
  paragraf2: string;
  paragraf3: string;
  paragraf4: string;
};

