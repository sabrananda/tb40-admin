"use client"
import { assessmentState } from "@/states/assessmentState"
import { pilar3Array } from "@/states/defaultValue/pilar3Array"
import { homeState } from "@/states/homeState"

export default function GayaBelajar() {
  const [nama] = homeState((state) => [state.nama])
  const [introvertAverage, ekstrovertAverage, ranks, ranks3, ranks6, ranks18, pilar, labelDiri, julukan] = assessmentState((state) => ([state.introvertAverage, state.ekstrovertAverage, state.ranks, state.ranks3, state.ranks6, state.ranks18, state.pilar, state.labelDiri, state.julukan]))
  return (
    <div>
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
            <div className="text-justify">
              {`${pilar3Array[rank3 - 1].deskripsiGayaBelajar1}`}
            </div>
            <div className="text-justify">
              {`${pilar3Array[rank3 - 1].tempatBelajar}`}
            </div>
          </div>))}
      </div>
    </div>
  )
}