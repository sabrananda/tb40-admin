"use client";

import { resultPageStates } from "@/states/resultPageStates";

export default function Kepribadian() {
  const [kepribadian] = resultPageStates((state) => [state.kepribadian]);

  return (
    <div className="">
      <div className="flex-col space-y-2">
        <div className="text-center border-b text-lg bg-green-500 font-bold text-white uppercase">
          {kepribadian?.judul}
        </div>
        <div className="text-justify">{kepribadian?.paragraf1}</div>
        <div className="text-justify">{kepribadian?.paragraf2}</div>
      </div>
      {/* Julukan */}
      <div className="border-t border-b py-2">
        <div className="text-center">{kepribadian?.judulJulukan}</div>
        <div className="text-center text-2xl font-bold">
          {kepribadian?.julukan}
        </div>
      </div>
      {/* kecenderungan gaya belajar */}
      <div className="text-justify">{kepribadian?.paragraf3}</div>
      {/* Penyentuh perasaan */}
      <div className="text-justify">{kepribadian?.paragraf4}</div>
    </div>
  );
}
