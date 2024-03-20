"use client"
import { assessmentState } from "@/states/assessmentState"
import { homeState } from "@/states/homeState"
import { useRouter } from "next/navigation"

export default function Router() {
  const router = useRouter()
  const [nama] = homeState((state) => [state.nama])

  const [ranks] = assessmentState((state) => ([state.ranks]))
  const routerHandler = (e: any, path: string) => {
    e.preventDefault()
    console.log(path)
    switch (path) {
      case "/": return router.push("/");
      case "/assessment": {
        if (nama === "") {
          return alert("isi nama terlebih dahulu!")
        } else {
          return router.push("/assessment");
        }
      };
      case "/result": {
        if (nama === "") {
          return router.push("/")
        } else if (ranks.length < 1) {
          return alert("klik submit!")
        } else {
          return router.push("/result");
        }
      };
      default: return router.push("/")
    }
  }

  return (
    <div className="flex justify-center bg-slate-300 print:hidden">
      <button className="underline hover:font-bold bg-slate-300 p-2 hover:bg-slate-400 cursor-pointer" onClick={(e) => routerHandler(e, "/")}>home</button>
      <button className="underline hover:font-bold bg-slate-300 p-2 hover:bg-slate-400 cursor-pointer" onClick={(e) => routerHandler(e, "/assessment")}>assessment</button>
      <button className="underline hover:font-bold bg-slate-300 p-2 hover:bg-slate-400 cursor-pointer" onClick={(e) => routerHandler(e, "/result")}>result</button>
    </div>
  )
}