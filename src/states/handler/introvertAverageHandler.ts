// import { introvertIdArray } from "../defaultValue/Introvert";
import { Pilar } from "../interface";

export function introvertAverageHandler(
  pilarArray: Pilar[],
  introvertIdArray: number[]
) {
  let skorAvg: number = 0;
  introvertIdArray.forEach((id) => {
    skorAvg += pilarArray[id - 1].skor;
    // console.log(pilarArray[id - 1].skor);
  });
  skorAvg = skorAvg / introvertIdArray.length;
  return skorAvg;
}
