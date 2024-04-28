export default function ColorMean() {
  return <div className="flex justify-center">
    <div className="w-full p-2 border-x">
      <div className="text-center font-bold">
        Makna Warna
      </div>
      <div className="flex px-2 font-bold">
        <div className="p-1 bg-red-500 w-1/5 text-center">Sangat Kuat</div>
        <div className="p-1 bg-yellow-400 w-1/5 text-center">Kuat</div>
        <div className="p-1 bg-green-500 w-1/5 text-center">Sedang</div>
        <div className="p-1 bg-slate-400 w-1/5 text-center">Lemah</div>
        <div className="p-1 bg-slate-600 w-1/5 text-center">Sangat Lemah</div>
      </div>
    </div>
  </div>
}