"use client"
import { assessmentState } from "@/states/assessmentState"
import { pilar3Array } from "@/states/defaultValue/pilar3Array"
import { resultState } from "@/states/resultState"

export default function GayaBelajar() {

  const [ranks3] = assessmentState((state) => ([state.ranks3]))
  const [gayaBelajar] = resultState((state) => [state.gayaBelajar])
  return (
    <div className="">
      {/* gaya belajar */}
      <div className="flex-col space-y-2 border">
        <div className="text-center border-b text-lg bg-green-500 font-bold text-white uppercase">{gayaBelajar.judul}</div>
        <div className="text-center">
          {gayaBelajar.deskripsiJudul}
        </div>
      </div>
      <div>
        {gayaBelajar.urutan}
      </div>
      <div>
        {ranks3.map((rank3, idx) => (
          <div key={idx} className="flex-col space-y-2 mt-3">
            <div className="font-bold underline">
              {`${idx + 1}. ${pilar3Array[rank3 - 1]?.namaArab} / ${pilar3Array[rank3 - 1]?.gayaBelajar}`}
            </div>
            <div className="text-justify">
              {`${pilar3Array[rank3 - 1]?.deskripsiGayaBelajar1}`}
            </div>
            <div className="text-justify">
              {`${pilar3Array[rank3 - 1]?.tempatBelajar}`}
            </div>
          </div>))}
      </div>
    </div>
  )
}