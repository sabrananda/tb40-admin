"use client"
import { assessmentState } from "@/states/assessmentState"

export default function StrongAndWeak() {

  const [pilar40Array, ranks] = assessmentState((state) => ([state.pilar40Array, state.ranks]))

  return (
    <div className="flex border">
      {/* kekuatan */}
      <div className="flex-1 border-r p-2">
        <div className="text-center mb-2 border-b font-bold bg-red-500 text-white">Karakter Kekuatan</div>
        <div>1. {pilar40Array[ranks[0] - 1]?.tulisan}</div>
        <div>2. {pilar40Array[ranks[1] - 1]?.tulisan}</div>
        <div>3. {pilar40Array[ranks[2] - 1]?.tulisan}</div>
        <div>4. {pilar40Array[ranks[3] - 1]?.tulisan}</div>
        <div>5. {pilar40Array[ranks[4] - 1]?.tulisan}</div>
        <div>6. {pilar40Array[ranks[5] - 1]?.tulisan}</div>
      </div>
      {/* kelemahan */}
      <div className="flex-1 p-2">
        <div className="text-center mb-2 border-b font-bold bg-slate-600 text-white">Karakter Kelemahan</div>
        <div>1. {pilar40Array[ranks[34] - 1]?.tulisan}</div>
        <div>2. {pilar40Array[ranks[35] - 1]?.tulisan}</div>
        <div>3. {pilar40Array[ranks[36] - 1]?.tulisan}</div>
        <div>4. {pilar40Array[ranks[37] - 1]?.tulisan}</div>
        <div>5. {pilar40Array[ranks[38] - 1]?.tulisan}</div>
        <div>6. {pilar40Array[ranks[39] - 1]?.tulisan}</div>
      </div>
    </div>
  )
}