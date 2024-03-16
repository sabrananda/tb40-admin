// import { ekstrovertIdtArray } from "../defaultValue/extrovert";
import { Pilar } from "../interface";

export function ekstrovertAverageHandler(
  pilarArray: Pilar[],
  ekstrovertIdtArray: number[]
) {
  let skorAvg: number = 0;
  ekstrovertIdtArray.forEach((id) => {
    skorAvg += pilarArray[id - 1].skor;
    // console.log(pilarArray[id].skor);
  });
  skorAvg = skorAvg / ekstrovertIdtArray.length;
  // console.log(skorAvg);
  return skorAvg;
}
