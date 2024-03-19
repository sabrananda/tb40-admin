"use client"
import { assessmentState } from "@/states/assessmentState"
import { homeState } from "@/states/homeState"
import { pilar3Array } from "@/states/defaultValue/pilar3Array"

export default function BahasaHati() {
  const [nama] = homeState((state) => [state.nama])
  const [ranks3,] = assessmentState((state) => ([state.ranks3,]))
  return (
    <div>
      <div className="flex-col space-y-2 border">
        <div className="text-center border-b text-lg bg-green-500 font-bold text-white uppercase">BAHASA HATI</div>
        <div className="text-center">
          Bahasa hati adalah bahasa yang digunakan untuk menumbuhkan mahabbah dengan menyentuh hati seseorang sehingga  dirinya merasa disayangi atau dicintai (Kinerja HATI).
        </div>
      </div>
      <div className="mt-2">
        {`Urutan bahasa hati yang dapat menyentuh hati ${nama == "" ? "fulan" : nama} adalah:`}
      </div>
      <div className="">
        {ranks3.map((rank3, idx) => (
          <div key={idx} className="">
            <div className="underline mt-2">{`${idx + 1}. ${pilar3Array[rank3 - 1].bahasaHati}`}</div>
            <div className="text-justify">
              {`${pilar3Array[rank3 - 1].deskripsiBahasa}`}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}