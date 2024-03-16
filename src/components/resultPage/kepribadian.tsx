"use client"
import { assessmentState } from "@/states/assessmentState"
import { pilar3Array } from "@/states/defaultValue/pilar3Array"
import { homeState } from "@/states/homeState"

export default function Kepribadian() {
  const [nama,] = homeState((state) => [state.nama])
  const [introvertAverage, ekstrovertAverage, ranks, ranks3, ranks6, ranks18, pilar, labelDiri, julukan] = assessmentState((state) => ([state.introvertAverage, state.ekstrovertAverage, state.ranks, state.ranks3, state.ranks6, state.ranks18, state.pilar, state.labelDiri, state.julukan]))
  function pribadi3(rank3: number[]) {
    switch (rank3[0]) {
      case 1: return "bersemangat";
      case 2: return "berfikir";
      case 3: return "berperasaan";
      default: ""
    }
  }
  function pribadi6(rank6: number[]) {
    switch (rank6[0]) {
      case 1: return "al-hamaasah (الحَمَاسَة)";
      case 2: return "at tafkiir (التَّفْكِيْر)";
      case 3: return "as syu'uur (الشُعُوْر)";
      case 4: return "at ta'tsiir (التَّأْثِيْر)";
      case 5: return "at ta'aamul (التَّعَامُل)";
      case 6: return "al khidmah (الخِدْمَة)";
      default: ""
    }
  }
  function pribadi18(rank18: number[]) {
    switch (rank18[0]) {

      case 1: return "bekerja keras karena ambisi";
      case 2: return "bekerja keras karena wibawa";
      case 3: return "bekerja keras karena giat bekerja";
      case 4: return "berpikir imajinatif";
      case 5: return "berpikir positif";
      case 6: return "berpikir analitis";
      case 7: return "apa adanya";
      case 8: return "berdiam diri";
      case 9: return "merendah";
      case 10: return "mempengaruhi dengan cara menguasai";
      case 11: return "mempengaruhi dengan cara memotivasi";
      case 12: return "mempengaruhi dengan cara menolong";
      case 13: return "memanfaatkan hubungan";
      case 14: return "memulai hubungan baru";
      case 15: return "menguatkan hubungan yang ada";
      case 16: return "melayani dengan cara memberi";
      case 17: return "melayani dengan cara menjaga";
      case 18: return "melayani dengan cara mengalah";
      default: ""

    }
  }
  // console.log(ranks[0])
  return <div className="flex-col space-y-2 border p-2">
    <div className="text-center border-b">Kepribadian {nama == "" ? "fulan" : nama}</div>
    <div>

    </div>
    <div>{`${nama == "" ? "fulan" : nama} memiliki kepribadian ${introvertAverage > ekstrovertAverage ? "introvert (senang dengan kesendirian)" : "extrovert (senang bertemu orang)"}. Secara umum jiwanya cenderung suka ${pribadi3(ranks3)}. Disamping ${nama == "" ? "fulan" : nama} cenderung suka ${pribadi6(ranks6)} ${nama == "" ? "fulan" : nama} juga memiliki kecenderungan ${pribadi18(ranks18)}.`}</div>
    <div>
      {`${nama == "" ? "fulan" : nama} adalah pribadi yang ${labelDiri[0]}, ${labelDiri[1]}, ${labelDiri[2]}, ${labelDiri[3]}, dan ${labelDiri[4]}.`}
    </div>
    <div>
      {`Sehingga ${nama == "" ? "fulan" : nama} dijuluki: ${julukan[0]} yang ${julukan[1]}`}
    </div>
    {/* kecenderungan gaya belajar */}
    <div>
      {`${pilar3Array[ranks3[0] - 1 ?? 1 - 1].deskripsiGayaBelajar1}`}
    </div>
    {/* Penyentuh perasaan */}
    <div>
      {`Penyentuh perasaan yang paling efektif untuk ${nama == "" ? "fulan" : nama} adalah ${pilar3Array[ranks3[0] - 1 ?? 1 - 1].deskripsiBahasa}`}
    </div>
    <div className="text-lg text-center bg-red-500 font-bold text-white">BAKAT</div>
    <div className="text-center">Bakat yang dimaksud adalah sifat (karakter) yang mendorong seseorang untuk bekerja atau beramal (Kinerja FISIK) sesuai dengan karakter unik yang dimilikinya </div>
  </div>
}