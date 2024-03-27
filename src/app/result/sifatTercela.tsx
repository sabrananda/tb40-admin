"use client"
import { assessmentState } from "@/states/assessmentState"
import { homeState } from "@/states/homeState"

export default function SifatTercela() {
  const [nama] = homeState((state) => [state.nama])
  const [pilar40Array, ranks] = assessmentState((state) => ([state.pilar40Array, state.ranks]))
  return (
    <div>
      {/* judul */}
      <div className="flex-col space-y-2 border">
        <div className="text-center border-b text-lg bg-slate-600 font-bold text-white uppercase">POTENSI MUNCULNYA SIFAT TERCELA & SOLUSINYA</div>
        <div className="text-center italic">
          “Setiap sifat mulia terkepung diantara dua sifat tercela. Sifat mulia berada di tengah sedang yang berada di kedua ujungnya adalah sifat tercela”.
        </div>
        <div className="text-center text-xs">
          (Ibnul Qayyim, Madaarijus Saalikin, 2/295)
        </div>
      </div>
      {/* uraian */}
      <div className="flex-col space-y-2 text-justify mt-2">
        <div>
          {`Karena ${nama == "" ? "fulan" : nama} memiliki bakat terkuat ${pilar40Array[ranks[0] - 1]?.tulisan.toLowerCase()}, maka berpotensi akan muncul  sifat tercela ${pilar40Array[ranks[0] - 1]?.akibatBerlebihan.tulisan.toLowerCase()}, yaitu ${pilar40Array[ranks[0] - 1]?.akibatBerlebihan.definisi.toLowerCase()}.`}
        </div>
        <div>
          {`${pilar40Array[ranks[0] - 1]?.akibatBerlebihan?.perbaikan} Yaitu dengan cara antara lain ${pilar40Array[pilar40Array.findIndex((plr) => plr.namaArab === pilar40Array[ranks[0] - 1]?.perbaikanBerlebihan[0])]?.definisi}`}
        </div>
        <div>
          {`Dan karena ${nama == "" ? "fulan" : nama} juga memiliki kelemahan pada sifat ${pilar40Array[39]?.tulisan.toLowerCase()}, yaitu ${nama == "" ? "fulan" : nama} kurang ${pilar40Array[ranks[39] - 1]?.labelDiri}, maka berpotensi akan muncul sifat tercela ${pilar40Array[ranks[39] - 1]?.akibatLalai.tulisan}, yaitu ${pilar40Array[ranks[39] - 1]?.akibatLalai.definisi}`}
        </div>
        <div>
          {`${pilar40Array[ranks[39] - 1]?.akibatLalai.perbaikan} Yaitu dengan cara antara lain ${pilar40Array[ranks[39] - 1]?.definisi}.`}
        </div>
      </div>
    </div>
  )
}