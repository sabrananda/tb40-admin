import { Pilar, PilarAverage } from "../interface";

export function pilar6Handler(pilar6: PilarAverage[], pilarArray: Pilar[]) {
  // bercita-cita tinggi & perfeksionis, harga diri & berwibawa, bertekad kuat & bersemangat
  pilar6[1 - 1].average =
    (pilarArray[13 - 1].skor +
      pilarArray[16 - 1].skor +
      pilarArray[18 - 1].skor +
      pilarArray[40 - 1].skor +
      pilarArray[4 - 1].skor +
      pilarArray[25 - 1].skor) /
    6;
  // berfirasat & cerdik, berprasangka baik & cerdas, ahli hikmah
  pilar6[2 - 1].average =
    (pilarArray[8 - 1].skor +
      pilarArray[26 - 1].skor +
      pilarArray[14 - 1].skor +
      pilarArray[6 - 1].skor +
      pilarArray[11 - 1].skor) /
    5;
  // jujur & menjaga diri, pendiam & pemalu, sederhana & rendah hati
  pilar6[3 - 1].average =
    (pilarArray[34 - 1].skor +
      pilarArray[15 - 1].skor +
      pilarArray[33 - 1].skor +
      pilarArray[10 - 1].skor +
      pilarArray[28 - 1].skor +
      pilarArray[37 - 1].skor) /
    6;
  // pemberani, pencemburu & kompetitif, penasehat & komunikatif, menolong & dermawan
  pilar6[4 - 1].average =
    (pilarArray[35 - 1].skor +
      pilarArray[9 - 1].skor +
      pilarArray[22 - 1].skor +
      pilarArray[24 - 1].skor +
      pilarArray[7 - 1].skor +
      pilarArray[27 - 1].skor +
      pilarArray[19 - 1].skor) /
    7;
  // bekerjasama, bersatu, adil & menepati janji, humoris & berseri-seri, lemah lembut & penuh cinta
  pilar6[5 - 1].average =
    (pilarArray[36 - 1].skor +
      pilarArray[38 - 1].skor +
      pilarArray[1 - 1].skor +
      pilarArray[39 - 1].skor +
      pilarArray[23 - 1].skor +
      pilarArray[5 - 1].skor +
      pilarArray[30 - 1].skor +
      pilarArray[21 - 1].skor) /
    8;
  // berbelas kasih & melayani, penjaga rahasia & menutup aib, bertanggung jawab, tidak tergesa, santun & penyabar
  pilar6[6 - 1].average =
    (pilarArray[29 - 1].skor +
      pilarArray[17 - 1].skor +
      pilarArray[20 - 1].skor +
      pilarArray[31 - 1].skor +
      pilarArray[2 - 1].skor +
      pilarArray[3 - 1].skor +
      pilarArray[12 - 1].skor +
      pilarArray[32 - 1].skor) /
    8;
  //

  pilar6.sort(function (a, b) {
    return b.average - a.average;
  });
  const rankPilar6: number[] = [];
  pilar6.map((avg) => {
    rankPilar6.push(avg.id);
  });
  // console.log(pilar6);
  // console.log(rankPilar6);
  return rankPilar6;
}
