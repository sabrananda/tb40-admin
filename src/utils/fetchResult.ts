"use server";
import { SkorRank } from "@/states/interface";
type PernyataanArray = {
  id: number;
  pernyataan: string;
  skor: number;
};
export async function callResult({
  nama,
  pernyataanArray,
}: {
  nama: string;
  pernyataanArray: PernyataanArray[];
}) {
  const skor40: SkorRank[] = [];
  pernyataanArray.map((plrArr) => {
    skor40.push({ skor: plrArr.skor, id: plrArr.id });
  });
  try {
    const res = await fetch(
      process.env.NEXT_PUBLIC_API_V1_URL_PROD + "/result",
      {
        method: "POST",
        headers: { "Content-Type": "Application/json" },
        body: JSON.stringify({ nama, skor40: pernyataanArray }),
      }
    );
    const result = await res.json();
    return result;
  } catch (error) {
    return error;
  }
}
