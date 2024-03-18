"use client"
import { assessmentState } from "@/states/assessmentState"

export default function StrongAndWeak() {

  const [pilar, ranks] = assessmentState((state) => ([state.pilar, state.ranks]))

  return (
    <div className="flex border">
      {/* kekuatan */}
      <div className="flex-1 border-r p-2">
        <div className="text-center mb-2 border-b">Karakter Kekuatan</div>
        <div>1. {pilar[ranks[0] - 1]?.tulisan}</div>
        <div>2. {pilar[ranks[1] - 1]?.tulisan}</div>
        <div>3. {pilar[ranks[2] - 1]?.tulisan}</div>
        <div>4. {pilar[ranks[3] - 1]?.tulisan}</div>
        <div>5. {pilar[ranks[4] - 1]?.tulisan}</div>
        <div>6. {pilar[ranks[5] - 1]?.tulisan}</div>
      </div>
      {/* kelemahan */}
      <div className="flex-1 p-2">
        <div className="text-center mb-2 border-b">Karakter Kelemahan</div>
        <div>1. {pilar[ranks[34] - 1]?.tulisan}</div>
        <div>2. {pilar[ranks[35] - 1]?.tulisan}</div>
        <div>3. {pilar[ranks[36] - 1]?.tulisan}</div>
        <div>4. {pilar[ranks[37] - 1]?.tulisan}</div>
        <div>5. {pilar[ranks[38] - 1]?.tulisan}</div>
        <div>6. {pilar[ranks[39] - 1]?.tulisan}</div>
      </div>
    </div>
  )
}