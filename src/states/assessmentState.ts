import { create } from "zustand";
import { pilar40Array } from "./defaultValue/pilar40Array";
import { pilar18Average } from "./defaultValue/pilar18Average";
import { pilar6Average } from "./defaultValue/pilar6Average";
import { pilar3Average } from "./defaultValue/pilar3Average";
import { Pilar, Pilar3Array, Pilar6Array, PilarAverage } from "./interface";
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
import { pilar3Array } from "./defaultValue/pilar3Array";

interface AssessmentState {
  ranks: number[];
  pilar40Array: Pilar[];
  pilar6Array: Pilar6Array[];
  pilar3Array: Pilar3Array[];
  ranks18: number[];
  pilar18Average: PilarAverage[];
  ranks6: number[];
  pilar6Average: PilarAverage[];
  ranks3: number[];
  pilar3Average: PilarAverage[];
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
  pilar40Array,
  pilar6Array,
  pilar3Array,
  ranks18: [],
  pilar18Average: pilar18Average,
  ranks6: [],
  pilar6Average: pilar6Average,
  ranks3: [],
  pilar3Average: pilar3Average,
  introvertAverage: 0,
  ekstrovertAverage: 0,
  labelDiri: [],
  julukan: [],
  setScore(score, id) {
    const newArr = get().pilar40Array;
    newArr[id - 1].skor = score;
    set(() => ({ pilar40Array: newArr }));
  },
  sortir() {
    // console.log(get().ranks3);
    set(() => ({
      ranks: pilar40Handler(pilar40Array),
      ranks18: pilar18Handler(pilar18Average, pilar40Array),
      ranks6: pilar6Handler(pilar6Average, pilar40Array),
      ranks3: pilar3Handler(pilar3Average, pilar40Array),
      introvertAverage: introvertAverageHandler(pilar40Array, introvertIdArray),
      ekstrovertAverage: ekstrovertAverageHandler(
        pilar40Array,
        ekstrovertIdArray
      ),
    }));
    set(() => ({ labelDiri: labelDIriHandler(pilar40Array, get().ranks) }));
    set(() => ({ julukan: julukanHandler(get().ranks6) }));
    // console.log(get().ranks3);
  },
  reset() {
    set(() => ({ ranks: [], ranks18: [], ranks6: [], ranks3: [] }));
    pilar40Array.map((plrArr) => {
      plrArr.skor = 0;
    });
  },
}));
