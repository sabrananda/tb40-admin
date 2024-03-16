import { Pilar, PilarAverage } from "../interface";

export function pilar18Handler(pilar18: PilarAverage[], pilarArray: Pilar[]) {
  // bercita-cita tinggi & perfeksionis
  pilar18[1 - 1].average =
    (pilarArray[13 - 1].skor + pilarArray[16 - 1].skor) / 2;
  // harga diri & berwibawa
  pilar18[2 - 1].average =
    (pilarArray[18 - 1].skor + pilarArray[40 - 1].skor) / 2;
  // bertekad kuat & bersemangat
  pilar18[3 - 1].average =
    (pilarArray[4 - 1].skor + pilarArray[25 - 1].skor) / 2;
  // berfirasat & cerdik
  pilar18[4 - 1].average =
    (pilarArray[8 - 1].skor + pilarArray[26 - 1].skor) / 2;
  // berprasangka baik & cerdas
  pilar18[5 - 1].average =
    (pilarArray[14 - 1].skor + pilarArray[6 - 1].skor) / 2;
  // ahli hikmah
  pilar18[6 - 1].average = pilarArray[11 - 1].skor;
  // jujur & menjaga diri
  pilar18[7 - 1].average =
    (pilarArray[34 - 1].skor + pilarArray[15 - 1].skor) / 2;
  // pendiam & pemalu
  pilar18[8 - 1].average =
    (pilarArray[33 - 1].skor + pilarArray[10 - 1].skor) / 2;
  // sederhana & rendah hati
  pilar18[9 - 1].average =
    (pilarArray[28 - 1].skor + pilarArray[37 - 1].skor) / 2;
  // pemberani, pencemburu & kompetitif
  pilar18[10 - 1].average =
    (pilarArray[35 - 1].skor +
      pilarArray[9 - 1].skor +
      pilarArray[22 - 1].skor) /
    3;
  // penasehat & komunikatif
  pilar18[11 - 1].average =
    (pilarArray[24 - 1].skor + pilarArray[7 - 1].skor) / 2;
  // menolong & dermawan
  pilar18[12 - 1].average =
    (pilarArray[27 - 1].skor + pilarArray[19 - 1].skor) / 2;
  // bekerjasama, bersatu, adil & menepati janji
  pilar18[13 - 1].average =
    (pilarArray[36 - 1].skor +
      pilarArray[38 - 1].skor +
      pilarArray[1 - 1].skor +
      pilarArray[39 - 1].skor) /
    4;
  // humoris & berseri-seri
  pilar18[14 - 1].average =
    (pilarArray[23 - 1].skor + pilarArray[5 - 1].skor) / 2;
  // lemah lembut & penuh cinta
  pilar18[15 - 1].average =
    (pilarArray[30 - 1].skor + pilarArray[21 - 1].skor) / 2;
  // berbelas kasih & melayani
  pilar18[16 - 1].average =
    (pilarArray[29 - 1].skor + pilarArray[17 - 1].skor) / 2;
  // penjaga rahasia & menutup aib
  pilar18[17 - 1].average =
    (pilarArray[20 - 1].skor + pilarArray[31 - 1].skor) / 2;
  // bertanggung jawab, tidak tergesa, santun & penyabar
  pilar18[18 - 1].average =
    (pilarArray[2 - 1].skor +
      pilarArray[3 - 1].skor +
      pilarArray[12 - 1].skor +
      pilarArray[32 - 1].skor) /
    4;
  pilar18.sort(function (a, b) {
    return b.average - a.average;
  });
  let rankPilar18: number[] = [];

  pilar18.map((avg) => {
    rankPilar18.push(avg.id);
  });

  // console.log(pilar18);
  // console.log(rankPilar18);
  return rankPilar18;
}
