"use client"
import BahasaHati from "./bahasaHati";
import Bakat from "./bakat";
import Chart from "./chart";
import ColorMean from "./colorMean";
import GayaBelajar from "./gayaBelajar";
import Kepribadian from "./kepribadian";
import Result40 from "./result40";
import StrongAndWeak from "./strongnweak";
import { assessmentState } from "@/states/assessmentState";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import SifatTercela from "./sifatTercela";
import Identity from "./identitas";
import { homeState } from "@/states/homeState";

export default function ResultPage() {
  const router = useRouter()
  const [setNama] = homeState((state) => ([state.setNama]))
  const [ranks, reset] = assessmentState((state) => ([state.ranks, state.reset]))
  useEffect(() => {
    if (ranks.length < 1) {
      setNama("")
      reset()
      router.push("/")
    }
  }, [ranks, router, setNama, reset])

  return (
    <div className="flex justify-center m-2">
      {/* tengah halaman */}
      <div className="w-[19cm]">
        <div className="flex justify-end space-x-2">
          <button onClick={() => { reset(); setNama(""); router.push("/"); }} className="my-1 bg-red-300 p-2 print:hidden">RESET</button>
          <button onClick={() => { window.print() }} className="my-1 bg-blue-300 p-2 print:hidden">PRINT</button>
        </div>
        <div className="print:h-[27.5cm]">
          <Identity />
        </div>
        <div className="print:h-[27.7cm]">
          <Result40 />
          <ColorMean />
        </div>
        <div className="print:h-[27.7cm] print:flex-col print:space-y-10">
          <StrongAndWeak />
          <Chart />
          {/* <Chart2 /> */}
        </div>
        <div className="print:h-[110.8cm] flex-col space-y-10 border p-2">
          <Kepribadian />
          <Bakat />
        </div>
        <div className="print:h-[27.7cm] flex-col space-y-10 border p-2">
          <GayaBelajar />
        </div>
        <div className=" flex-col space-y-10 border p-2">
          <BahasaHati />
          <SifatTercela />
        </div>
      </div>
    </div >
  )
}