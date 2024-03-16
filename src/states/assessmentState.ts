import { create } from "zustand";
import { pilarArray } from "./defaultValue/arrayOfPilar";
import { pilar18 } from "./defaultValue/pilar18";
import { pilar6 } from "./defaultValue/pilar6";
import { pilar3 } from "./defaultValue/pilar3";
import { Pilar, PilarAverage } from "./interface";
import { pilar40Handler } from "./handler/pilar40Handler";
import { pilar18Handler } from "./handler/pilar18Handler";
import { pilar6Handler } from "./handler/pilar6Handler";
import { pilar3Handler } from "./handler/pilar3Handler";
import { introvertIdArray } from "./defaultValue/introvert";
import { ekstrovertIdArray } from "./defaultValue/extrovert";
import { introvertAverageHandler } from "./handler/introvertAverageHandler";
import { ekstrovertAverageHandler } from "./handler/ekstrovertAverageHandler";
import { labelDIriHandler } from "./handler/labelDiriHandler";
import { julukanHandler } from "./handler/julukanHandler";
import { pilar6Array } from "./defaultValue/pilar6Array";

interface AssessmentState {
  ranks: number[];
  pilar: Pilar[];
  ranks18: number[];
  pilar18: PilarAverage[];
  ranks6: number[];
  pilar6: PilarAverage[];
  ranks3: number[];
  pilar3: PilarAverage[];
  labelDiri: string[];
  julukan: string[];

  setScore: (score: number, id: number) => void;
  sortir: () => void;
  reset: () => void;
  introvertAverage: number;
  ekstrovertAverage: number;
}

export const assessmentState = create<AssessmentState>((set, get) => ({
  ranks: [],
  pilar: pilarArray,
  ranks18: [],
  pilar18: pilar18,
  ranks6: [],
  pilar6: pilar6,
  ranks3: [],
  pilar3: pilar3,
  introvertAverage: 0,
  ekstrovertAverage: 0,
  labelDiri: [],
  julukan: [],
  setScore(score, id) {
    const newArr = get().pilar;
    newArr[id - 1].skor = score;
    set(() => ({ pilar: newArr }));
  },
  sortir() {
    // console.log(get().ranks3);
    set(() => ({
      ranks: pilar40Handler(pilarArray),
      ranks18: pilar18Handler(pilar18, pilarArray),
      ranks6: pilar6Handler(pilar6, pilarArray),
      ranks3: pilar3Handler(pilar3, pilarArray),
      introvertAverage: introvertAverageHandler(pilarArray, introvertIdArray),
      ekstrovertAverage: ekstrovertAverageHandler(
        pilarArray,
        ekstrovertIdArray
      ),
    }));
    set(() => ({ labelDiri: labelDIriHandler(pilarArray, get().ranks) }));
    set(() => ({ julukan: julukanHandler(get().ranks6) }));
    // console.log(get().ranks3);
  },
  reset() {
    set(() => ({ ranks: [], ranks18: [], ranks6: [], ranks3: [] }));
    pilarArray.map((plrArr) => {
      plrArr.skor = 0;
    });
  },
}));
