"use client"
import { assessmentState } from "@/states/assessmentState"

export default function Chart2() {

  const [pilar, ranks] = assessmentState((state) => ([state.pilar, state.ranks]))

  return (
    <div className="p-2 border-x h-[9cm]">

      <div className="relative top-[5px] border-t border-green-500 h-0"><div className="pl-2 relative h-0 z-40 text-xs">{`Sangat Kuat`}</div></div>
      <div className="relative top-[32px] border-t border-green-500 h-0"><div className="pl-2 relative h-0 z-40 text-xs">{`Kuat`}</div></div>
      <div className="relative top-[62px] border-t border-green-500 h-0"><div className="pl-2 relative top-[30px] h-0 z-40 text-xs">{`Ma'ruf/Sedang`}</div></div>
      <div className="relative top-[139px] border-t border-green-500 h-0"><div className="pl-2 relative  h-0 z-40 text-xs">{`Lemah`}</div></div>
      <div className="relative top-[169px] border-t border-green-500 h-0"><div className="pl-2 relative h-0 z-40 text-xs">{`Sangat Lemah`}</div></div>
      <div className="relative top-[200px] border-t border-slate-500 h-0"><div className="pl-2 relative h-0 z-40 text-xs"></div></div>

      <div className="flex justify-around h-[216px]">
        <div className="w-20"></div>
        {pilar.map((plr, idx) => (
          <div className="relative grid grid-cols-1 content-end h-[100%]" key={idx} >
            <span className={`bg-blue-400 text-xs w-2 h-[${pilar[idx].skor * 2}px]`}>
              <span className="relative -top-4 text-center">
                {pilar[idx].skor}
              </span>
            </span>
            <div className="text-xs rotate-90 text-nowrap w-2">{plr.namaIndo}</div>
          </div>
        ))}
      </div>
      <div className="hidden">
        <div className=" bg-blue-400 h-[0px]"></div>
        <div className=" bg-blue-400 h-[2px]"></div>
        <div className=" bg-blue-400 h-[4px]"></div>
        <div className=" bg-blue-400 h-[6px]"></div>
        <div className=" bg-blue-400 h-[8px]"></div>
        <div className=" bg-blue-400 h-[10px]"></div>
        <div className=" bg-blue-400 h-[12px]"></div>
        <div className=" bg-blue-400 h-[14px]"></div>
        <div className=" bg-blue-400 h-[16px]"></div>
        <div className=" bg-blue-400 h-[18px]"></div>
        <div className=" bg-blue-400 h-[20px]"></div>
        <div className=" bg-blue-400 h-[22px]"></div>
        <div className=" bg-blue-400 h-[24px]"></div>
        <div className=" bg-blue-400 h-[26px]"></div>
        <div className=" bg-blue-400 h-[28px]"></div>
        <div className=" bg-blue-400 h-[30px]"></div>
        <div className=" bg-blue-400 h-[32px]"></div>
        <div className=" bg-blue-400 h-[34px]"></div>
        <div className=" bg-blue-400 h-[36px]"></div>
        <div className=" bg-blue-400 h-[38px]"></div>
        <div className=" bg-blue-400 h-[40px]"></div>
        <div className=" bg-blue-400 h-[42px]"></div>
        <div className=" bg-blue-400 h-[44px]"></div>
        <div className=" bg-blue-400 h-[46px]"></div>
        <div className=" bg-blue-400 h-[48px]"></div>
        <div className=" bg-blue-400 h-[50px]"></div>
        <div className=" bg-blue-400 h-[52px]"></div>
        <div className=" bg-blue-400 h-[54px]"></div>
        <div className=" bg-blue-400 h-[56px]"></div>
        <div className=" bg-blue-400 h-[58px]"></div>
        <div className=" bg-blue-400 h-[60px]"></div>
        <div className=" bg-blue-400 h-[62px]"></div>
        <div className=" bg-blue-400 h-[64px]"></div>
        <div className=" bg-blue-400 h-[66px]"></div>
        <div className=" bg-blue-400 h-[68px]"></div>
        <div className=" bg-blue-400 h-[70px]"></div>
        <div className=" bg-blue-400 h-[72px]"></div>
        <div className=" bg-blue-400 h-[74px]"></div>
        <div className=" bg-blue-400 h-[76px]"></div>
        <div className=" bg-blue-400 h-[78px]"></div>
        <div className=" bg-blue-400 h-[80px]"></div>
        <div className=" bg-blue-400 h-[82px]"></div>
        <div className=" bg-blue-400 h-[84px]"></div>
        <div className=" bg-blue-400 h-[86px]"></div>
        <div className=" bg-blue-400 h-[88px]"></div>
        <div className=" bg-blue-400 h-[90px]"></div>
        <div className=" bg-blue-400 h-[92px]"></div>
        <div className=" bg-blue-400 h-[94px]"></div>
        <div className=" bg-blue-400 h-[96px]"></div>
        <div className=" bg-blue-400 h-[98px]"></div>
        <div className=" bg-blue-400 h-[100px]"></div>
      </div>
    </div>
  )
}