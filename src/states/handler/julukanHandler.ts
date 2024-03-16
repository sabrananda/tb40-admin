import { pilar6Array } from "../defaultValue/pilar6Array";

export function julukanHandler(ranks6: number[]) {
  const julukan = ["", ""];
  julukan[0] = pilar6Array[ranks6[0] - 1].label1;
  julukan[1] = pilar6Array[ranks6[1] - 1].label2;
  // console.log(julukan);
  return julukan;
}
