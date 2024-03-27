"use client"

import { resultState } from "@/states/resultState"

export default function BahasaHati() {

  const [bahasaHati] = resultState((state) => ([state.bahasaHati]))

  return (
    <div>
      <div className="flex-col space-y-2 border">
        <div className="text-center border-b text-lg bg-green-500 font-bold text-white uppercase">{bahasaHati.judul}</div>
        <div className="text-center">
          {bahasaHati.deskripsiJudul}
        </div>
      </div>
      <div className="mt-2">
        {bahasaHati.urutan}
      </div>
      <div className="">
        {bahasaHati.uraian.map((uraian, idx) => (
          <div key={idx} className="">
            <div className="underline mt-2 font-bold">{uraian.judul}</div>
            <div className="text-justify">
              {uraian.deskripsiJudul}
            </div>
          </div>
        ))}
        {/* {ranks3.map((rank3, idx) => (
          <div key={idx} className="">
            <div className="underline mt-2">{`${idx + 1}. ${pilar3Array[rank3 - 1].bahasaHati}`}</div>
            <div className="text-justify">
              {`${pilar3Array[rank3 - 1].deskripsiBahasa}`}
            </div>
          </div>
        ))} */}
      </div>
    </div>
  )
}