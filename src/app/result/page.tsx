"use client"
import Chart from "@/components/resultPage/chart";
import ColorMean from "@/components/resultPage/colorMean";
import Kepribadian from "@/components/resultPage/kepribadian";
import Result40 from "@/components/resultPage/result40";
import StrongAndWeak from "@/components/resultPage/strongnweak";
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
    <div className="flex justify-center ">
      <div className="w-[21cm]">
        <Result40 />
        <ColorMean />
        {ranks.length < 1 ? <></> : <StrongAndWeak />}
        <Chart />
        <Kepribadian />
      </div>
    </div >
  )
}