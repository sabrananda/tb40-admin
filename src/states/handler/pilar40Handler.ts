import { Pilar, SkorRank } from "../interface";

export function pilar40Handler(pilarArray: Pilar[]) {
  const skorRank: SkorRank[] = [];
  const ranks: number[] = [];
  pilarArray.map((plrArr) => {
    skorRank.push({ skor: plrArr.skor, id: plrArr.id });
  });
  skorRank.sort(function (a, b) {
    return b.skor - a.skor;
  });
  skorRank.map((skr) => {
    ranks.push(skr.id);
  });
  return ranks;
}
