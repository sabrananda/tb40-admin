"use client"
import { assessmentState } from "@/states/assessmentState"
import { pilar3Array } from "@/states/defaultValue/pilar3Array"
import { homeState } from "@/states/homeState"

export default function Kepribadian() {
  const [nama] = homeState((state) => [state.nama])
  const [introvertAverage, ekstrovertAverage, ranks3, ranks6, ranks18, labelDiri, julukan] = assessmentState((state) => ([state.introvertAverage, state.ekstrovertAverage, state.ranks3, state.ranks6, state.ranks18, state.labelDiri, state.julukan]))

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
  return (
    <div className="">
      <div className="flex-col space-y-2">
        <div className="text-center border-b text-lg bg-green-500 font-bold text-white uppercase">Kepribadian {nama == "" ? "fulan" : nama}</div>
        <div className="text-justify">
          {`${nama == "" ? "fulan" : nama} memiliki kepribadian ${introvertAverage > ekstrovertAverage ? "introvert (senang dengan kesendirian)" : "extrovert (senang bertemu orang)"}. Secara umum jiwanya cenderung suka ${pilar3Array[ranks3[0] - 1]?.bacaIndo}. Disamping ${nama == "" ? "fulan" : nama} cenderung suka ${pribadi6(ranks6)} ${nama == "" ? "fulan" : nama} juga memiliki kecenderungan ${pribadi18(ranks18)}.`}
        </div>
        <div className="text-justify">
          {`${nama == "" ? "fulan" : nama} adalah pribadi yang ${labelDiri[0]}, ${labelDiri[1]}, ${labelDiri[2]}, ${labelDiri[3]}, dan ${labelDiri[4]}.`}
        </div>
      </div>
      {/* Julukan */}
      <div className="border-t border-b py-2">
        <div className="text-center">
          {`Sehingga ${nama == "" ? "fulan" : nama} dijuluki:`}
        </div>
        <div className="text-center text-2xl font-bold">
          {`${julukan[0]} yang ${julukan[1]}`}
        </div>
      </div>
      {/* kecenderungan gaya belajar */}
      <div className="text-justify">
        {`${pilar3Array[ranks3[0] - 1]?.deskripsiGayaBelajar1}`}
      </div>
      {/* Penyentuh perasaan */}
      <div className="text-justify">
        {`Penyentuh perasaan yang paling efektif untuk ${nama == "" ? "fulan" : nama} adalah ${pilar3Array[ranks3[0] - 1]?.deskripsiBahasa}`}
      </div>
    </div>
  )
}