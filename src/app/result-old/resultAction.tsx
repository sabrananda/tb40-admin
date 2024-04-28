"use client"
import { assessmentState } from "@/states/assessmentState";
import { homeState } from "@/states/homeState";
import { useRouter } from "next/navigation";

export default function ResultAction() {
  const router = useRouter()
  const [setNama] = homeState((state) => ([state.setNama]))
  const [reset] = assessmentState((state) => ([state.reset]))
  return (
    <div className="flex justify-end space-x-2 print:hidden">
      <button onClick={() => { reset(); setNama(""); router.push("/"); }} className="my-1 bg-red-300 p-2">RESET</button>
      <button onClick={() => { window.print() }} className="my-1 bg-blue-300 p-2">PRINT</button>
    </div>
  )
}