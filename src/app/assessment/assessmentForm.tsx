"use client"
import { assessmentState } from "@/states/assessmentState"
import { useRouter } from "next/navigation"

export default function AssessmentForm() {
  const router = useRouter()
  const [pilar, setScore, sortir, reset, ranks18] = assessmentState((state) => [state.pilar, state.setScore, state.sortir, state.reset, state.ranks18])
  function submitHandler(e: any) {
    // e.preventDefault()
    if (ranks18.length === 0) { sortir() }
    router.push("/result")
  }

  return (
    <div>


      <div className="mb-10 flex justify-end">
        <button className="font-bold bg-blue-200 rounded-sm px-2 py-1 hover:bg-blue-400" onClick={reset}>reset</button>
      </div>
      <form action={submitHandler} className="p-2">
        <div className="mb-10 flex justify-end">
          <button className="font-bold bg-blue-200 rounded-sm px-2 py-1 hover:bg-blue-400" onClick={submitHandler}>submit</button>
        </div>
        {pilar.map((plr, idx) => (
          <div key={idx} className="flex w-full">
            <div className="border p-2 w-10">{plr.id}.</div>
            <div className="border p-2 w-36">{plr.namaIndo}</div>
            <div className="border p-2 w-3/4">{plr.pernyataan}</div>

            <input
              className={`border-2 p-2 w-16 bg-slate-300 ${plr.skor === 0 ? "bg-red-300" : "bg-slate-300"}`}
              placeholder="0"
              type="number"
              value={plr.skor == 0 ? "" : plr.skor}
              onChange={(e) => {
                let skor = Number(e.target.value)
                if (skor <= 100 && skor >= 0) { setScore(skor, plr.id); }
                else { alert("angka harus antara 0 - 100") }
              }}
            />
          </div>
        ))}
      </form> </div>)
}