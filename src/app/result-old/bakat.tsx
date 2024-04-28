"use client"

import { resultState } from "@/states/resultState"

export default function Bakat() {

  const [bakat] = resultState((state) => ([state.bakat]))

  return (
    <div>
      <div className="border">
        <div className="text-lg text-center bg-green-500 font-bold text-white">{bakat.judul}</div>
        <div className="text-center">{bakat.deskripsiJudul}</div>
      </div>
      {/* bakat kekuatan */}
      <div className="px-2 w-fit bg-red-500 font-bold text-white mt-2 uppercase">
        {bakat.judulKekuatan}
      </div>
      {bakat.bakatKekuatan.map((arr, idx) => (
        <div key={idx} className="flex-col space-y-1 mt-2">
          <div className="font-bold underline">
            {arr.judul}
          </div>
          <div className="text-justify">
            {arr.deskripsiJudul}
          </div>
          <div className="text-justify">
            {arr.profesi}
          </div>
          <div className="text-justify">
            {arr.jurusan}
          </div>
        </div>
      ))}
      {/* {ranks.map((rank, idx) => {
      if (idx < 6) {
        return (
          <div key={idx} className="flex-col space-y-1 mt-2">
            <div className="font-bold underline">
              {`${idx + 1}. ${pilar40Array[rank - 1].tulisan}`}
            </div>
            <div className="text-justify">
              {`Bakat terkuat ${nama} adalah ${pilar40Array[rank - 1].tulisan}, yaitu ${pilar40Array[rank - 1].definisi}, sehingga bakat ini menjadikannya ${pilar40Array[rank - 1].labelDiri}.`}
            </div>
            <div className="text-justify">
              {`Profesi atau peran yang sesuai dengan bakat ini antara lain: ${pilar40Array[rank - 1].profesi}.`}
            </div>
            <div className="text-justify">
              {`Jurusan studi yang sesuai dengan bakat ini antara lain: ${pilar40Array[rank - 1].jurusanStudi}.`}
            </div>
          </div>)
      }
    })} */}
    {/* bakat kelemahan */}
      <div className="mt-2 px-2 w-fit bg-slate-500 font-bold text-white uppercase">
        {bakat.judulKelemahan}
      </div>
      {bakat.bakatKelemahan.map((arr, idx) => (
        <div key={idx} className="flex-col space-y-1 mt-2">
          <div className="font-bold underline">
            {arr.judul}
          </div>
          <div className="text-justify">
            {arr.deskripsiJudul}
          </div>
          <div className="text-justify">
            {arr.profesi}
          </div>
          <div className="text-justify">
            {arr.jurusan}
          </div>
        </div>
      ))}
      {/* {ranks.map((rank, idx) => {
      if (idx > 33) {
        return (
          <div key={idx} className="flex-col space-y-1 mt-2">
            <div className="font-bold underline">
              {`${40 - idx}. ${pilar40Array[rank - 1].tulisan}`}
            </div>
            <div className="text-justify">
              {`Sifat lemah ${nama} ${idx === 39 ? "" : "berikutnya"} adalah ${pilar40Array[rank - 1].tulisan}, yaitu ${nama} kurang ${pilar40Array[rank - 1].definisi}, sehingga kelemahan ini menjadikan ${nama} kurang ${pilar40Array[rank - 1].labelDiri}.`}
            </div>
            <div className="text-justify">
              {`Profesi atau peran yang kurang sesuai dengan kelemahan ${nama} ini antara lain: ${pilar40Array[rank - 1].profesi}.`}
            </div>
            <div className="text-justify">
              {`Jurusan studi yang kurang sesuai dengan kelemahan ${nama} ini antara lain: ${pilar40Array[rank - 1].jurusanStudi}.`}
            </div>
          </div>)
      }
    }).reverse()} */}
  </div>
  )
}