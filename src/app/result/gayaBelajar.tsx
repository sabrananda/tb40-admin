"use client";

import { resultPageStates } from "@/states/resultPageStates";

export default function GayaBelajar() {
  const [gayaBelajar] = resultPageStates((state) => [state.gayaBelajar]);

  return (
    <div className="">
      {/* gaya belajar */}
      <div className="flex-col space-y-2 border">
        <div className="text-center border-b text-lg bg-green-500 font-bold text-white uppercase">
          {gayaBelajar.judul}
        </div>
        <div className="text-center">{gayaBelajar.deskripsiJudul}</div>
      </div>
      <div className="mt-2">{gayaBelajar.judulUraian}</div>
      <div>
        {gayaBelajar.uraian.map((uraian, idx) => (
          <div key={idx} className="flex-col space-y-2 mt-3">
            <div className="font-bold underline">{`${idx + 1}. ${
              uraian.judul
            }`}</div>
            <div className="text-justify">{uraian.deskripsiGayaBelajar1}</div>
            <div className="text-justify">{uraian.tempatBelajar}</div>
          </div>
        ))}
        {/* {ranks3.map((rank3, idx) => (
          <div key={idx} className="flex-col space-y-2 mt-3">
            <div className="font-bold underline">
              {`${idx + 1}. ${pilar3Array[rank3 - 1]?.namaArab} / ${pilar3Array[rank3 - 1]?.gayaBelajar}`}
            </div>
            <div className="text-justify">
              {`${pilar3Array[rank3 - 1]?.deskripsiGayaBelajar1}`}
            </div>
            <div className="text-justify">
              {`${pilar3Array[rank3 - 1]?.tempatBelajar}`}
            </div>
          </div>))} */}
      </div>
    </div>
  );
}
