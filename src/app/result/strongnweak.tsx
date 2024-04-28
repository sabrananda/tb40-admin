"use client";
import { resultPageStates } from "@/states/resultPageStates";

export default function StrongAndWeak() {
  const [kekuatanDanKelemahan] = resultPageStates((state) => [
    state.kekuatanDanKelemahan,
  ]);

  return (
    <div className="flex border">
      {/* kekuatan */}
      <div className="flex-1 border-r p-2">
        <div className="text-center mb-2 border-b font-bold bg-red-500 text-white">
          Karakter Kekuatan
        </div>
        {kekuatanDanKelemahan.bakatKekuatan.map((data, idx) => (
          <div key={idx}>
            {`${idx + 1}. ${data.latin} / ${data.arab} (${data.arti})`}
          </div>
        ))}
      </div>
      {/* kelemahan */}
      <div className="flex-1 p-2">
        <div className="text-center mb-2 border-b font-bold bg-slate-600 text-white">
          Karakter Kelemahan
        </div>
        {kekuatanDanKelemahan.bakatKelemahan.map((data, idx) => (
          <div key={idx}>
            {`${idx + 1}. ${data.latin} / ${data.arab} (${data.arti})`}
          </div>
        ))}
      </div>
    </div>
  );
}
