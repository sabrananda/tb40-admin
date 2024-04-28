import { create } from "zustand";
import { SkorRank } from "./interface";
import { FetchHandler } from "./utils/fetchHandler";
import { homeState } from "./homeState";
import { ResultPage, resultPageStates } from "./resultPageStates";

interface AssessmentState {
  setScore: (score: number, id: number) => void;
  postAssessment: () => Promise<boolean>;
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

  async postAssessment() {
    const skor40: SkorRank[] = [];
    get().pernyataanArray.map((plrArr) => {
      skor40.push({ skor: plrArr.skor, id: plrArr.id });
    });
    try {
      const data = await FetchHandler({
        route: "/result",
        method: "POST",
        body: JSON.stringify({ nama: homeState.getState().nama, skor40 }),
      });
      const {
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
      }: ResultPage = await data.json();
      //   console.log({
      //     identitas,
      //     bahasaHati,
      //     bakat,
      //     gayaBelajar,
      //     kepribadian,
      //     potensiSifatTercela,
      //     ranks40,
      //   });
      console.log();
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
    const data = await FetchHandler({
      route: "/bakat40/pernyataan",
      method: "GET",
    });
    const pernyataanArray: PernyataanArray[] = await data.json();
    pernyataanArray.map((pernyataan: PernyataanArray, idx: number) => {
      pernyataanArray[idx].skor = 0;
    });
    set(() => ({ pernyataanArray }));
  },
  bakat40Ranks: [],
}));
