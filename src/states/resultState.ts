import { create } from "zustand";
import { Bakat, GayaBelajar, Kepribadian, KuatDanLemah } from "./interface";
import { homeState } from "./homeState";
import { assessmentState } from "./assessmentState";
import { kepribadian } from "./defaultValue/kepribadian";
import { bakat } from "./defaultValue/bakat";
import { gayaBelajar } from "./defaultValue/gayaBelajar";

interface ResultState {
  warna40: (rank: number) => void;
  warna18: (rank: number) => void;
  warna6: (rank: number) => void;
  warna3: (rank: number) => void;
  kepribadian: Kepribadian;
  setKepribadian: () => void;
  bakat: Bakat;
  setBakat: () => void;
  gayaBelajar: GayaBelajar;
  setGayaBelajar: () => void;
}

export const resultState = create<ResultState>((set, get) => ({
  kepribadian,
  bakat,
  gayaBelajar,
  setGayaBelajar() {
    const nama = homeState.getState().nama;
    set(() => ({
      gayaBelajar: {
        ...get().gayaBelajar,
        urutan: `Urutan gaya belajar ${nama} adalah:`,
      },
    }));
  },
  setBakat() {
    const nama = homeState.getState().nama;
    const ranks = assessmentState.getState().ranks;
    const pilar40Array = assessmentState.getState().pilar40Array;
    const kekuatan: KuatDanLemah[] = [];
    const kelemahan: KuatDanLemah[] = [];
    // console.log(assessmentState.getState().ranks);
    ranks.map((rank, idx) => {
      if (idx < 6) {
        kekuatan.push({
          judul: `${idx + 1}. ${pilar40Array[rank - 1].tulisan}`,
          deskripsiJudul: `Bakat terkuat ${nama} adalah ${
            pilar40Array[rank - 1].tulisan
          }, yaitu ${
            pilar40Array[rank - 1].definisi
          }, sehingga bakat ini menjadikannya ${
            pilar40Array[rank - 1].labelDiri
          }.`,
          profesi: `Profesi atau peran yang sesuai dengan bakat ini antara lain: ${
            pilar40Array[rank - 1].profesi
          }.`,
          jurusan: `Jurusan studi yang sesuai dengan bakat ini antara lain: ${
            pilar40Array[rank - 1].jurusanStudi
          }.`,
        });
      }
    });
    {
      ranks.map((rank, idx) => {
        if (idx > 33) {
          kelemahan.push({
            judul: `${40 - idx}. ${pilar40Array[rank - 1].tulisan}`,
            deskripsiJudul: `Sifat lemah ${nama} ${
              idx === 39 ? "" : "berikutnya"
            } adalah ${pilar40Array[rank - 1].tulisan}, yaitu ${nama} kurang ${
              pilar40Array[rank - 1].definisi
            }, sehingga kelemahan ini menjadikan ${nama} kurang ${
              pilar40Array[rank - 1].labelDiri
            }.`,
            profesi: `Profesi atau peran yang kurang sesuai dengan kelemahan ${nama} ini antara lain: ${
              pilar40Array[rank - 1].profesi
            }.`,
            jurusan: `Jurusan studi yang kurang sesuai dengan kelemahan ${nama} ini antara lain: ${
              pilar40Array[rank - 1].jurusanStudi
            }.`,
          });
        }
      });
    }
    kelemahan.reverse();

    set(() => ({
      bakat: {
        ...get().bakat,
        bakatKekuatan: kekuatan,
        bakatKelemahan: kelemahan,
      },
    }));
  },
  setKepribadian() {
    const nama = homeState.getState().nama;
    const introvertAverage = assessmentState.getState().introvertAverage;
    const ekstrovertAverage = assessmentState.getState().ekstrovertAverage;
    const pilar3Array = assessmentState.getState().pilar3Array;
    const ranks3 = assessmentState.getState().ranks3;
    const ranks6 = assessmentState.getState().ranks6;
    const ranks18 = assessmentState.getState().ranks18;
    const labelDiri = assessmentState.getState().labelDiri;
    const julukan = assessmentState.getState().julukan;
    set(() => ({
      kepribadian: {
        judul: `Kepribadian ${nama}`,
        paragraf1: `${nama} memiliki kepribadian ${
          introvertAverage > ekstrovertAverage
            ? "introvert (senang dengan kesendirian)"
            : "extrovert (senang bertemu orang)"
        }. Secara umum jiwanya cenderung suka ${
          pilar3Array[ranks3[0] - 1]?.bacaIndo
        }. Disamping ${nama} cenderung suka ${pribadi6(
          ranks6
        )} ${nama} juga memiliki kecenderungan ${pribadi18(ranks18)}.`,
        paragraf2: `${nama} adalah pribadi yang ${labelDiri[0]}, ${labelDiri[1]}, ${labelDiri[2]}, ${labelDiri[3]}, dan ${labelDiri[4]}.`,
        judulJulukan: `Sehingga ${nama} dijuluki:`,
        julukan: `${julukan[0]} yang ${julukan[1]}`,
        paragraf3: `${pilar3Array[ranks3[0] - 1]?.deskripsiGayaBelajar1}`,
        paragraf4: `Penyentuh perasaan yang paling efektif untuk ${nama} adalah ${
          pilar3Array[ranks3[0] - 1]?.deskripsiBahasa
        }`,
      },
    }));
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
function pribadi6(rank6: number[]) {
  switch (rank6[0]) {
    case 1:
      return "al-hamaasah (الحَمَاسَة)";
    case 2:
      return "at tafkiir (التَّفْكِيْر)";
    case 3:
      return "as syu'uur (الشُعُوْر)";
    case 4:
      return "at ta'tsiir (التَّأْثِيْر)";
    case 5:
      return "at ta'aamul (التَّعَامُل)";
    case 6:
      return "al khidmah (الخِدْمَة)";
    default:
      "";
  }
}
function pribadi18(rank18: number[]) {
  switch (rank18[0]) {
    case 1:
      return "bekerja keras karena ambisi";
    case 2:
      return "bekerja keras karena wibawa";
    case 3:
      return "bekerja keras karena giat bekerja";
    case 4:
      return "berpikir imajinatif";
    case 5:
      return "berpikir positif";
    case 6:
      return "berpikir analitis";
    case 7:
      return "apa adanya";
    case 8:
      return "berdiam diri";
    case 9:
      return "merendah";
    case 10:
      return "mempengaruhi dengan cara menguasai";
    case 11:
      return "mempengaruhi dengan cara memotivasi";
    case 12:
      return "mempengaruhi dengan cara menolong";
    case 13:
      return "memanfaatkan hubungan";
    case 14:
      return "memulai hubungan baru";
    case 15:
      return "menguatkan hubungan yang ada";
    case 16:
      return "melayani dengan cara memberi";
    case 17:
      return "melayani dengan cara menjaga";
    case 18:
      return "melayani dengan cara mengalah";
    default:
      "";
  }
}