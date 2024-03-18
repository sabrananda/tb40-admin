"use client"
import { assessmentState } from "@/states/assessmentState"
import { pilar3Array } from "@/states/defaultValue/pilar3Array"
import { homeState } from "@/states/homeState"


export default function Kepribadian() {
  const [nama] = homeState((state) => [state.nama])
  const [introvertAverage, ekstrovertAverage, ranks, ranks3, ranks6, ranks18, pilar, labelDiri, julukan] = assessmentState((state) => ([state.introvertAverage, state.ekstrovertAverage, state.ranks, state.ranks3, state.ranks6, state.ranks18, state.pilar, state.labelDiri, state.julukan]))
  function pribadi3(rank3: number[]) {
    switch (rank3[0]) {
      case 1: return "bersemangat";
      case 2: return "berfikir";
      case 3: return "berperasaan";
      default: ""
    }
  }
  function gayaBelajar3(rank3: number) {
    switch (rank3) {
      case 1: return "Al Fuad (الفُؤَاد) / bergerak";
      case 2: return "Al Bashar (البَصَر) / melihat";
      case 3: return "As Sam'u (السَمْع) / mendengar";
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
  // console.log("===================")
  // console.log(pilar.findIndex((plr, idx, obj) => plr.namaArab === pilar[34].namaArab))

  // console.log("===================")
  // console.log(pilar[34].namaArab === "الشَّجَاعَة")
  // console.log(pilar[34].namaArab === pilar[ranks[0] - 1].perbaikanBerlebihan[0])
  return (
    <div className="flex-col space-y-2 border p-2">
      {/* Kepribadian */}
      <div className="flex-col space-y-2">
        <div className="text-center border-b text-lg bg-green-500 font-bold text-white uppercase">Kepribadian {nama == "" ? "fulan" : nama}</div>
        <div className="text-justify">
          {`${nama == "" ? "fulan" : nama} memiliki kepribadian ${introvertAverage > ekstrovertAverage ? "introvert (senang dengan kesendirian)" : "extrovert (senang bertemu orang)"}. Secara umum jiwanya cenderung suka ${pribadi3(ranks3)}. Disamping ${nama == "" ? "fulan" : nama} cenderung suka ${pribadi6(ranks6)} ${nama == "" ? "fulan" : nama} juga memiliki kecenderungan ${pribadi18(ranks18)}.`}
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
        {`${pilar3Array[ranks3[0] - 1 ?? 0].deskripsiGayaBelajar1 ?? ""}`}
      </div>
      {/* Penyentuh perasaan */}
      <div className="text-justify">
        {`Penyentuh perasaan yang paling efektif untuk ${nama == "" ? "fulan" : nama} adalah ${pilar3Array[ranks3[0] - 1 ?? 0].deskripsiBahasa}`}
      </div>
      {/* bakat */}
      <div className="border">

        <div className="text-lg text-center bg-green-500 font-bold text-white">BAKAT</div>
        <div className="text-center">Bakat yang dimaksud adalah sifat (karakter) yang mendorong seseorang untuk bekerja atau beramal (Kinerja FISIK) sesuai dengan karakter unik yang dimilikinya</div>
      </div>
      {/* bakat kekuatan */}
      <div className=" px-2 w-fit bg-red-500 font-bold text-white">
        BAKAT KEKUATAN
      </div>
      {ranks.map((rank, idx) => {
        if (idx < 6) {
          return (<div key={idx}>
            <div className="font-bold underline">
              {`${idx + 1}. ${pilar[rank - 1].tulisan}`}
            </div>
            <div className="text-justify">
              {`Bakat terkuat ${nama == "" ? "fulan" : nama} adalah ${pilar[rank - 1].tulisan}, yaitu ${pilar[rank - 1].definisi}, sehingga bakat ini menjadikannya ${pilar[rank - 1].labelDiri}.`}
            </div>
            <div className="text-justify">
              {`Profesi atau peran yang sesuai dengan bakat ini antara lain: ${pilar[rank - 1].profesi}.`}
            </div>
            <div className="text-justify">
              {`Jurusan studi yang sesuai dengan bakat ini antara lain: ${pilar[rank - 1].jurusanStudi}.`}
            </div>
          </div>)
        }
      })}
      {/* bakat kelemahan */}
      <div className=" px-2 w-fit bg-slate-500 font-bold text-white">
        BAKAT KELEMAHAN
      </div>
      {ranks.map((rank, idx) => {
        if (idx > 33) {
          return (<div key={idx}>
            <div className="font-bold underline">
              {`${40 - idx}. ${pilar[rank - 1].tulisan}`}
            </div>
            <div className="text-justify">
              {`Sifat lemah ${nama == "" ? "fulan" : nama} ${idx === 39 ? "" : "berikutnya"} adalah ${pilar[rank - 1].tulisan}, yaitu ${nama == "" ? "fulan" : nama} kurang ${pilar[rank - 1].definisi}, sehingga kelemahan ini menjadikan ${nama == "" ? "fulan" : nama} kurang ${pilar[rank - 1].labelDiri}.`}
            </div>
            <div className="text-justify">
              {`Profesi atau peran yang kurang sesuai dengan kelemahan ${nama == "" ? "fulan" : nama} ini antara lain: ${pilar[rank - 1].profesi}.`}
            </div>
            <div className="text-justify">
              {`Jurusan studi yang kurang sesuai dengan kelemahan ${nama == "" ? "fulan" : nama} ini antara lain: ${pilar[rank - 1].jurusanStudi}.`}
            </div>
          </div>)
        }
      }).reverse()}
      {/* gaya belajar */}
      <div className="flex-col space-y-2 border">
        <div className="text-center border-b text-lg bg-green-500 font-bold text-white uppercase">GAYA BELAJAR</div>
        <div className="text-center">
          Gaya belajar adalah cara efektif yang dilakukan oleh seseorang dalam menggunakan inderanya dalam belajar untuk menerima ilmu atau pengetahuan (Kinerja AKAL).
        </div>
      </div>
      <div>
        {`Urutan gaya belajar ${nama == "" ? "fulan" : nama} adalah:`}
      </div>
      <div>
        {ranks3.map((rank3, idx) => (
          <div key={idx} className="flex-col space-y-2 mt-3">
            <div className="font-bold underline">
              {`${idx + 1}. ${pilar3Array[rank3 - 1].bacaArab} / ${pilar3Array[rank3 - 1].gayaBelajar}`}
            </div>
            <div>
              {`${pilar3Array[rank3 - 1].deskripsiGayaBelajar1}`}
            </div>
            <div>
              {`${pilar3Array[rank3 - 1].tempatBelajar}`}
            </div>
          </div>))}
      </div>
      {/* bahasa hati */}
      <div className="flex-col space-y-2 border">
        <div className="text-center border-b text-lg bg-green-500 font-bold text-white uppercase">BAHASA HATI</div>
        <div className="text-center">
          Bahasa hati adalah bahasa yang digunakan untuk menumbuhkan mahabbah dengan menyentuh hati seseorang sehingga  dirinya merasa disayangi atau dicintai (Kinerja HATI).
        </div>
      </div>
      <div>
        {`Urutan bahasa hati yang dapat menyentuh hati ${nama == "" ? "fulan" : nama} adalah:`}
      </div>
      <div>
        {ranks3.map((rank3, idx) => (
          <div key={idx}>
            <div>{`${idx + 1}. ${pilar3Array[rank3 - 1].bahasaHati}`}</div>
            <div>
              {`${pilar3Array[rank3 - 1].deskripsiBahasa}`}
            </div>
          </div>
        ))}
      </div>
      {/* potensi sifat tercela */}
      <div className="flex-col space-y-2 border">
        <div className="text-center border-b text-lg bg-slate-700 font-bold text-white uppercase">POTENSI MUNCULNYA SIFAT TERCELA & SOLUSINYA</div>
        <div className="text-center italic">
          “Setiap sifat mulia terkepung diantara dua sifat tercela. Sifat mulia berada di tengah sedang yang berada di kedua ujungnya adalah sifat tercela”.
        </div>
        <div className="text-center text-xs">
          (Ibnul Qayyim, Madaarijus Saalikin, 2/295)
        </div>
      </div>
      <div>
        {`Karena ${nama == "" ? "fulan" : nama} memiliki bakat terkuat ${pilar[ranks[0] - 1].tulisan.toLowerCase()}, maka berpotensi akan muncul  sifat tercela ${pilar[ranks[0] - 1].akibatBerlebihan.tulisan.toLowerCase()}, yaitu ${pilar[ranks[0] - 1].akibatBerlebihan.definisi.toLowerCase()}.`}
      </div>
      <div>
        {`${pilar[ranks[0] - 1].akibatBerlebihan.perbaikan} Yaitu dengan cara antara lain ${pilar[pilar.findIndex((plr) => plr.namaArab === pilar[ranks[0] - 1].perbaikanBerlebihan[0])].definisi}`}
      </div>
      <div>
        {`Dan karena ${nama == "" ? "fulan" : nama} juga memiliki kelemahan pada sifat ${pilar[39].tulisan.toLowerCase()}, yaitu ${nama == "" ? "fulan" : nama} kurang "&PROSES!N130&", maka berpotensi akan muncul sifat tercela "&PROSES!N137&", yaitu "&PROSES!O137`}
      </div>
      {/* <div>{`${}`}</div> */}
      <div>
        {`=PROSES!P137&" Yaitu dengan cara antara lain "&PROSES!M150&".`}
      </div>
    </div>
  )
}