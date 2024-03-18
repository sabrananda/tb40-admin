"use client"
import Chart from "./chart";
import ColorMean from "./colorMean";
import Kepribadian from "./kepribadian";
import Result40 from "./result40";
import StrongAndWeak from "./strongnweak";
import { assessmentState } from "@/states/assessmentState";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function ResultPage() {
  const router = useRouter()
  const [ranks] = assessmentState((state) => ([state.ranks]))
  useEffect(() => {
    if (ranks.length < 1) {
      router.push("/assessment")
    }
  }, [])

  return (
    <div className="flex justify-center border">
      <div className="w-[21cm]">
        <button onClick={() => { print() }} className="bg-blue-300 p-2 print:hidden">PRINT</button>
        <div className="print:h-[28cm]">
        <Result40 />
        </div>
        <div className="print:h-[28cm] print:flex-col print:space-y-10">
          <ColorMean />
        {ranks.length < 1 ? <></> : <StrongAndWeak />}
        <Chart />
        </div>
        <Kepribadian />
      </div>
    </div >
  )
}