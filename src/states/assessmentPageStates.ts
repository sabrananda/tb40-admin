import { create } from "zustand";
import { SkorRank } from "./interface";
import { FetchHandler } from "../utils/fetchHandler";
import { homeState } from "./homeState";
import { ResultPage, resultPageStates } from "./resultPageStates";
import { headers } from "next/headers";

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
      const body = {
        nama: homeState.getState().nama,
        skor40,
      };
      const data = await fetch(
        process.env.NEXT_PUBLIC_API_V1_URL_PROD + "/result",
        {
          method: "POST",
          body: JSON.stringify(body),
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "https://tb40.vercel.app",
            "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
            "Access-Control-Allow-Headers":
              "X-Requested-With, Content-Type, Accept, Origin, Authorization",
          },
          credentials: "include",
        }
      );

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
