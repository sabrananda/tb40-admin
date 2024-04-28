"use client";
import { assessmentPageState } from "@/states/assessmentPageStates";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Form() {
  const router = useRouter();
  const [setScore, postAssessment, setPernyataan, pernyataanArray] =
    assessmentPageState((state) => [
      state.setScore,
      state.postAssessment,
      state.setPernyataan,
      state.pernyataanArray,
    ]);
  async function submitHandler() {
    const route = await postAssessment();
    // console.log(route);
    if (route) {
      router.push("/result");
    }
  }
  useEffect(() => {
    const fetchData = async () => {
      return await setPernyataan();
    };
    fetchData();
    // console.log(data);
  }, [setPernyataan]);
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
              <button className="font-bold bg-blue-300 rounded-md px-2 py-1 hover:bg-blue-500">
                submit
              </button>
            </div>
          </div>
          {pernyataanArray.map((plr, idx) => (
            <div
              key={idx}
              className="flex border-b hover:bg-gray-200 cursor-pointer"
            >
              <div className="p-2 w-10">{plr.id}.</div>
              <div>
                <div className="p-2">{plr.pernyataan}</div>
                <div className="flex">
                  <div className="relative mb-6 w-full">
                    <label htmlFor="labels-range-input" className="sr-only">
                      Labels range
                    </label>
                    <input
                      id="labels-range-input"
                      type="range"
                      value={plr.skor}
                      min="0"
                      max="100"
                      className="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
                      onChange={(e) => {
                        setScore(Number(e.target.value), plr.id);
                      }}
                    />
                    <span
                      className={`text-xs ${
                        plr.skor <= 30 ? "font-bold" : ""
                      } text-gray-500 dark:text-gray-400 absolute start-0 -bottom-0`}
                    >
                      sangat tidak sesuai
                    </span>
                    <span
                      className={`text-xs ${
                        plr.skor > 30 && plr.skor <= 70 ? "font-bold" : ""
                      } text-gray-500 dark:text-gray-400 absolute start-1/2 -translate-x-1/2 rtl:translate-x-1/2 -bottom-0`}
                    >
                      netral
                    </span>
                    <span
                      className={`text-xs ${
                        plr.skor > 70 ? "font-bold" : ""
                      } text-gray-500 dark:text-gray-400 absolute end-0 -bottom-0`}
                    >
                      sangat sesuai
                    </span>
                  </div>
                  <div
                    className={`border border-green-900 w-14 text-center p-2
                  bg-slate-300                
                  rounded-md m-2 font-bold`}
                  >
                    {plr.skor}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </form>
      </div>
    </div>
  );
}
