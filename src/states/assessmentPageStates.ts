import { create } from "zustand";
import { SkorRank } from "./interface";
import { homeState } from "./homeState";
import { ResultPage, resultPageStates } from "./resultPageStates";
import { callResult } from "@/utils/fetchResult";

interface AssessmentState {
  setScore: (score: number, id: number) => void;
  setResultValue: (resultValue: ResultPage) => Promise<boolean>;
  pernyataanArray: PernyataanArray[];
  setPernyataan: () => Promise<void>;
  bakat40Ranks: number[];
}
type PernyataanArray = {
  id: number;
  pernyataan: string;
  skor: number;
};
export const assessmentPageState = create<AssessmentState>((set, get) => ({
  setScore(score, id) {
    const pernyataanArray = get().pernyataanArray;
    pernyataanArray[id - 1].skor = score;
    set(() => ({ pernyataanArray }));
  },

  async setResultValue({
    identitas,
    bahasaHati,
    bakat,
    gayaBelajar,
    kepribadian,
    potensiSifatTercela,
    ranks40,
    ranks18,
    ranks6,
    ranks3,
    bakat6,
    bakat3,
    bakat40,
    kekuatanDanKelemahan,
  }) {
    try {
      resultPageStates.setState({
        identitas,
        ranks40,
        ranks18,
        ranks6,
        ranks3,
        bahasaHati,
        bakat,
        gayaBelajar,
        kepribadian,
        potensiSifatTercela,
        bakat6,
        bakat3,
        bakat40,
        kekuatanDanKelemahan,
      });
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  },
  pernyataanArray: [],
  async setPernyataan() {
    const data = await fetch(
      process.env.NEXT_PUBLIC_API_V1_URL_PROD + "/bakat40/pernyataan"
    );
    const pernyataanArray: PernyataanArray[] = await data.json();
    pernyataanArray.map((pernyataan: PernyataanArray, idx: number) => {
      pernyataanArray[idx].skor = 0;
    });
    set(() => ({ pernyataanArray }));
  },
  bakat40Ranks: [],
}));
