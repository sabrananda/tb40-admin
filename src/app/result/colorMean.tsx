export default function ColorMean() {
  return <div className="flex justify-center">
    <div className="w-[21cm] p-2 border-x">
      <div className="text-center font-bold">
        Makna Warna
      </div>
      <div className="flex p-2">
        <div className="p-2 bg-red-500 w-1/5 text-center">Sangat Kuat</div>
        <div className="p-2 bg-yellow-400 w-1/5 text-center">Kuat</div>
        <div className="p-2 bg-green-500 w-1/5 text-center">Sedang</div>
        <div className="p-2 bg-slate-400 w-1/5 text-center">Lemah</div>
        <div className="p-2 bg-slate-600 w-1/5 text-center">Sangat Lemah</div>
      </div>
    </div>
  </div>
}