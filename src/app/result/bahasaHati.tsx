"use client";

import { resultPageStates } from "@/states/resultPageStates";

export default function BahasaHati() {
  const [bahasaHati] = resultPageStates((state) => [state.bahasaHati]);

  return (
    <div>
      <div className="flex-col space-y-2 border">
        <div className="text-center border-b text-lg bg-green-500 font-bold text-white uppercase">
          {bahasaHati.judul}
        </div>
        <div className="text-center">{bahasaHati.deskripsiJudul}</div>
      </div>
      <div className="mt-2">{bahasaHati.judulUraian}</div>
      <div className="">
        {bahasaHati.uraian.map((uraian, idx) => (
          <div key={idx} className="">
            <div className="underline mt-2 font-bold">{`${idx + 1}. ${
              uraian.judul
            }`}</div>
            <div className="text-justify">{uraian.deskripsiJudul}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
