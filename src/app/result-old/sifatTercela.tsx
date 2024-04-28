"use client"

import { resultState } from "@/states/resultState"

export default function SifatTercela() {

  const [sifatTercela] = resultState((state) => ([state.sifatTercela]))

  return (
    <div>
      {/* judul */}
      <div className="flex-col space-y-2 border">
        <div className="text-center border-b text-lg bg-slate-600 font-bold text-white uppercase">{sifatTercela.judul}</div>
        <div className="text-center italic">
          {sifatTercela.deskripsiJudul}
        </div>
        <div className="text-center text-xs">
          {sifatTercela.reference}
        </div>
      </div>
      {/* uraian */}
      <div className="flex-col space-y-2 text-justify mt-2">
        <div>
          {sifatTercela.paragraf1}
        </div>
        <div>
          {sifatTercela.paragraf2}
        </div>
        <div>
          {sifatTercela.paragraf3}
        </div>
        <div>
          {sifatTercela.paragraf4}
        </div>
        {/* <div>
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
        </div> */}
      </div>
    </div>
  )
}