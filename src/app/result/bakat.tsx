"use client"
import { assessmentState } from "@/states/assessmentState"
import { homeState } from "@/states/homeState"

export default function Bakat() {
  const [nama] = homeState((state) => [state.nama])
  const [ranks, pilar] = assessmentState((state) => ([state.ranks, state.pilar]))
  return (<div>
    <div className="border">
      <div className="text-lg text-center bg-green-500 font-bold text-white">BAKAT</div>
      <div className="text-center">Bakat yang dimaksud adalah sifat (karakter) yang mendorong seseorang untuk bekerja atau beramal (Kinerja FISIK) sesuai dengan karakter unik yang dimilikinya</div>
    </div>
    {/* bakat kekuatan */}
    <div className="px-2 w-fit bg-red-500 font-bold text-white mt-2">
      BAKAT KEKUATAN
    </div>
    {ranks.map((rank, idx) => {
      if (idx < 6) {
        return (
          <div key={idx} className="flex-col space-y-1 mt-2">
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
    <div className="mt-2 px-2 w-fit bg-slate-500 font-bold text-white">
      BAKAT KELEMAHAN
    </div>
    {ranks.map((rank, idx) => {
      if (idx > 33) {
        return (
          <div key={idx} className="flex-col space-y-1 mt-2">
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
  </div>
  )
}