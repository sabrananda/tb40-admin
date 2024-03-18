"use client"
import { assessmentState } from "@/states/assessmentState"

export default function Chart() {

  const [pilar, ranks] = assessmentState((state) => ([state.pilar, state.ranks]))

  return (
    <div className="mb-24">
      <div className="relative top-[5px] border-t border-green-500 h-0"><div className="pl-2 relative h-0 z-40 text-xs">Sangat Kuat</div></div>
      <div className="relative top-[32px] border-t border-green-500 h-0"><div className="pl-2 relative h-0 z-40 text-xs">Kuat</div></div>
      <div className="relative top-[62px] border-t border-green-500 h-0"><div className="pl-2 relative top-[30px] h-0 z-40 text-xs">Ma'ruf/Sedang</div></div>
      <div className="relative top-[139px] border-t border-green-500 h-0"><div className="pl-2 relative  h-0 z-40 text-xs">Lemah</div></div>
      <div className="relative top-[169px] border-t border-green-500 h-0"><div className="pl-2 relative h-0 z-40 text-xs">Sangat Lemah</div></div>

      <div className="flex justify-around h-[216px]">
        <div className="w-20"></div>
        {pilar.map((plr, idx) => (
          <div className="relative grid grid-cols-1 content-end h-[100%]" key={idx} >
            <span className={`bg-blue-400 text-xs w-2 h-[${205 - (5 * (ranks.indexOf(plr.id) + 1))}px]`}></span>
            <div className="text-xs rotate-90 text-nowrap w-2">{plr.namaIndo}</div>
          </div>
        ))}
      </div>
      <div className="hidden">
        <div className=" bg-blue-400 h-[5px]"></div>
        <div className=" bg-blue-400 h-[10px]"></div>
        <div className=" bg-blue-400 h-[15px]"></div>
        <div className=" bg-blue-400 h-[20px]"></div>
        <div className=" bg-blue-400 h-[25px]"></div>
        <div className=" bg-blue-400 h-[30px]"></div>
        <div className=" bg-blue-400 h-[35px]"></div>
        <div className=" bg-blue-400 h-[40px]"></div>
        <div className=" bg-blue-400 h-[45px]"></div>
        <div className=" bg-blue-400 h-[50px]"></div>
        <div className=" bg-blue-400 h-[55px]"></div>
        <div className=" bg-blue-400 h-[60px]"></div>
        <div className=" bg-blue-400 h-[65px]"></div>
        <div className=" bg-blue-400 h-[70px]"></div>
        <div className=" bg-blue-400 h-[75px]"></div>
        <div className=" bg-blue-400 h-[80px]"></div>
        <div className=" bg-blue-400 h-[85px]"></div>
        <div className=" bg-blue-400 h-[90px]"></div>
        <div className=" bg-blue-400 h-[95px]"></div>
        <div className=" bg-blue-400 h-[100px]"></div>
        <div className=" bg-blue-400 h-[105px]"></div>
        <div className=" bg-blue-400 h-[110px]"></div>
        <div className=" bg-blue-400 h-[115px]"></div>
        <div className=" bg-blue-400 h-[120px]"></div>
        <div className=" bg-blue-400 h-[125px]"></div>
        <div className=" bg-blue-400 h-[130px]"></div>
        <div className=" bg-blue-400 h-[135px]"></div>
        <div className=" bg-blue-400 h-[140px]"></div>
        <div className=" bg-blue-400 h-[145px]"></div>
        <div className=" bg-blue-400 h-[150px]"></div>
        <div className=" bg-blue-400 h-[155px]"></div>
        <div className=" bg-blue-400 h-[160px]"></div>
        <div className=" bg-blue-400 h-[165px]"></div>
        <div className=" bg-blue-400 h-[170px]"></div>
        <div className=" bg-blue-400 h-[175px]"></div>
        <div className=" bg-blue-400 h-[180px]"></div>
        <div className=" bg-blue-400 h-[185px]"></div>
        <div className=" bg-blue-400 h-[190px]"></div>
        <div className=" bg-blue-400 h-[195px]"></div>
        <div className=" bg-blue-400 h-[200px]"></div>
      </div>


    </div>
  )
}