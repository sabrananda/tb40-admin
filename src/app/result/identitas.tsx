"use client"
import { homeState } from "@/states/homeState"

export default function Identity() {
  const [nama] = homeState((state) => [state.nama])
  return (
    <div className="border h-full bg-gradient-to-r from-cyan-500 to-blue-500">
      <div className="grid grid-cols-1 place-content-around h-full ">

        <div className="text-center font-bold uppercase text-5xl">
          TAFSIR BAKAT 40
        </div>
        <div className="text-center font-bold uppercase text-3xl">
          {nama != "" ? nama : "fulan"}
        </div>
        <div className="text-center font-bold text-2xl italic">
          Setiap anak terlahir beriman, pembelajar, berbakat dan tumbuh
        </div>
      </div>
    </div>
  )
}