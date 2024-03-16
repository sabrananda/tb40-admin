import { Pilar, PilarAverage } from "../interface";

export function pilar3Handler(pilar3: PilarAverage[], pilarArray: Pilar[]) {
  // bercita-cita tinggi & perfeksionis, harga diri & berwibawa, bertekad kuat & bersemangat, pemberani, pencemburu & kompetitif, penasehat & komunikatif, menolong & dermawan
  pilar3[1 - 1].average =
    (pilarArray[13 - 1].skor +
      pilarArray[16 - 1].skor +
      pilarArray[18 - 1].skor +
      pilarArray[40 - 1].skor +
      pilarArray[4 - 1].skor +
      pilarArray[25 - 1].skor +
      pilarArray[35 - 1].skor +
      pilarArray[9 - 1].skor +
      pilarArray[22 - 1].skor +
      pilarArray[24 - 1].skor +
      pilarArray[7 - 1].skor +
      pilarArray[27 - 1].skor +
      pilarArray[19 - 1].skor) /
    13;
  // berfirasat & cerdik, berprasangka baik & cerdas, ahli hikmah, bekerjasama, bersatu, adil & menepati janji, humoris & berseri-seri, lemah lembut & penuh cinta
  pilar3[2 - 1].average =
    (pilarArray[8 - 1].skor +
      pilarArray[26 - 1].skor +
      pilarArray[14 - 1].skor +
      pilarArray[6 - 1].skor +
      pilarArray[11 - 1].skor +
      pilarArray[36 - 1].skor +
      pilarArray[38 - 1].skor +
      pilarArray[1 - 1].skor +
      pilarArray[39 - 1].skor +
      pilarArray[23 - 1].skor +
      pilarArray[5 - 1].skor +
      pilarArray[30 - 1].skor +
      pilarArray[21 - 1].skor) /
    13;
  // jujur & menjaga diri, pendiam & pemalu, sederhana & rendah hati, berbelas kasih & melayani, penjaga rahasia & menutup aib, bertanggung jawab, tidak tergesa, santun & penyabar
  pilar3[3 - 1].average =
    (pilarArray[34 - 1].skor +
      pilarArray[15 - 1].skor +
      pilarArray[33 - 1].skor +
      pilarArray[10 - 1].skor +
      pilarArray[28 - 1].skor +
      pilarArray[37 - 1].skor +
      pilarArray[29 - 1].skor +
      pilarArray[17 - 1].skor +
      pilarArray[20 - 1].skor +
      pilarArray[31 - 1].skor +
      pilarArray[2 - 1].skor +
      pilarArray[3 - 1].skor +
      pilarArray[12 - 1].skor +
      pilarArray[32 - 1].skor) /
    14;

  pilar3.sort(function (a, b) {
    return b.average - a.average;
  });
  const rankPilar3: number[] = [];
  pilar3.map((avg) => {
    rankPilar3.push(avg.id);
  });
  // console.log(pilar3);
  // console.log(rankPilar3);
  return rankPilar3;
}
