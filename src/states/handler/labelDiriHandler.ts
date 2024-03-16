import { Pilar } from "../interface";

export function labelDIriHandler(pilar: Pilar[], ranks: number[]): string[] {
  const label: string[] = [];
  for (let i = 0; i < 6; i++) {
    label.push(pilar[ranks[i] - 1].labelDiri);
  }
  // console.log(label);
  return label;
}
