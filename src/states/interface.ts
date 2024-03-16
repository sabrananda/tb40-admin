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
