"use client"
import { assessmentState } from "@/states/assessmentState"
import { resultState } from "@/states/resultState"
import { useRouter } from "next/navigation"

export default function Form() {
  const router = useRouter()
  const [setKepribadian, setBakat, setGayaBelajar, setBahasaHati, setSifatTercela] = resultState((state) => [state.setKepribadian, state.setBakat, state.setGayaBelajar, state.setBahasaHati, state.setSifatTercela])
  const [pilar40Array, setScore, sortir, reset, ranks18] = assessmentState((state) => [state.pilar40Array, state.setScore, state.sortir, state.reset, state.ranks18])
  function submitHandler(e: any) {
    // e.preventDefault()
    if (ranks18.length === 0) {
      sortir();
      setKepribadian();
      setBakat();
      setGayaBelajar();
      setBahasaHati();
      setSifatTercela();
    }
    const skorArray: number[] = []
    for (let i = 0; i < pilar40Array.length; i++) {
      // console.log(skorArray.findIndex((skor) => {
      //   skor < pilar40Array[i].skor
      // }))
      skorArray.push(pilar40Array[i].skor)
      // if (skorArray.includes(pilar40Array[i].skor)) {
      //   alert("tidak boleh ada angka yang sama");
      //   break;
      // } else {
      // }
    }
    router.push("/result")
  }

  return (
    <div className="flex justify-center w-full">
      <div className="justify-center w-[21cm] text-slate-700 ">
        <form action={submitHandler} className="p-2 flex-col border m-2">
          <div className="text-center border-b font-bold text-xl bg-slate-300 p-2">
            ASSESSMENT TAFSIR BAKAT 40
          </div>
          <div className="flex justify-between py-2 border-b ">
            <div className="italic mb-2 font-bold">
              Geser slide, sesuaikan dengan karaktermu!
            </div>
            <div className=" flex justify-end">
              <button className="font-bold bg-blue-300 rounded-md px-2 py-1 hover:bg-blue-500" onClick={submitHandler}>submit</button>
            </div>
          </div>
          {pilar40Array.map((plr, idx) => (
            <div key={idx} className="flex border-b hover:bg-gray-200 cursor-pointer">
              <div className="p-2 w-10">{plr.id}.</div>
              <div>
                <div className="p-2">{plr.pernyataan}</div>
                <div className="flex">
                  <div className="relative mb-6 w-full">
                    <label htmlFor="labels-range-input" className="sr-only">Labels range</label>
                    <input
                      id="labels-range-input"
                      type="range"
                      value={plr.skor}
                      min="0"
                      max="100"
                      className="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
                      onChange={(e) => {
                        let skor = Number(e.target.value)
                        if (skor <= 100 && skor >= 0) { setScore(skor, plr.id); }
                        else { alert("angka harus antara 0 - 100") }
                      }} />
                    <span className={`text-xs ${plr.skor <= 30 ? "font-bold" : ''} text-gray-500 dark:text-gray-400 absolute start-0 -bottom-0`}>sangat tidak sesuai</span>
                    <span className={`text-xs ${plr.skor > 30 && plr.skor <= 70 ? "font-bold" : ''} text-gray-500 dark:text-gray-400 absolute start-1/2 -translate-x-1/2 rtl:translate-x-1/2 -bottom-0`}>netral</span>
                    <span className={`text-xs ${plr.skor > 70 ? "font-bold" : ''} text-gray-500 dark:text-gray-400 absolute end-0 -bottom-0`}>sangat sesuai</span>
                  </div>
                  <div className={`border border-green-900 w-14 text-center p-2
                  bg-slate-300                
                  rounded-md m-2 font-bold`
                  }>{plr.skor}</div>
                </div>
              </div>
            </div>
          ))}
        </form>
      </div>
    </div>)
}