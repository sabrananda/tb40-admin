"use client"
import Image from 'next/image'
import kiriAtas from '@/asset/resultImage/kiri_atas.png'
import kiriTengah from '@/asset/resultImage/kiri_tengah.png'
import kiriBawah from '@/asset/resultImage/kiri_bawah.png'
import kananAtas from '@/asset/resultImage/kanan_atas.png'
import tengahKanan from '@/asset/resultImage/tengah_kanan.png'
import kananBawah from '@/asset/resultImage/kanan_bawah.png'
import tengahAtas from '@/asset/resultImage/tengah_atas.png'
import tengahTengah from '@/asset/resultImage/tengah_tengah.png'
import tengahBawah from '@/asset/resultImage/tengah_bawah.png'
import { resultState } from '@/states/resultState'
import { assessmentState } from '@/states/assessmentState'

export default function Result40() {
  const kiriAtasId: number[] = [13, 16, 18, 40, 4, 25, 0]
  const kananAtasId: number[] = [35, 9, 22, 24, 7, 27, 19]
  const kiriTengahId: number[] = [0, 0, 8, 26, 14, 6, 11, 0]
  const kananTengahId: number[] = [36, 38, 1, 39, 23, 5, 30, 21]
  const kiriBawahId: number[] = [0, 0, 34, 15, 33, 10, 28, 37]
  const kananBawahId: number[] = [29, 17, 20, 31, 2, 3, 12, 32]
  const [warna40, warna18, warna6, warna3] = resultState((state) => [state.warna40, state.warna18, state.warna6, state.warna3])
  const [pilar, ranks, ranks18, ranks6, ranks3] = assessmentState((state) => ([state.pilar, state.ranks, state.ranks18, state.ranks6, state.ranks3]))

  return (
    <div className='border'>
      <div className="flex justify-around">
        {/* kiri */}
          <div className="flex-col space-y-2 p-2">
            {/* nafsul ammaroh */}
            <div className="flex border p-2">
              <div className="p-2">
                <div className="flex-col space-y-1">
                {kiriAtasId.map((plrId, idx) => (
                  <div key={idx} className='flex'>
                    <div>
                      <div className="w-28 text-right text-xs pr-2">{pilar[plrId - 1]?.namaArab}</div>
                      <div className="w-28 text-right text-xs pr-2">{pilar[plrId - 1]?.namaIndo}</div>
                    </div>
                    <div className={`w-20 h-8 border ${warna40(ranks.indexOf(plrId) + 1)}`}></div>
                  </div>
                ))}
                </div>
              </div>
              <div className="flex-col py-2 space-y-1">
                <div className={`${warna18(ranks18.indexOf(1) + 1)} flex-col space-y-1 w-3`}>
                  <div className="h-8"></div>
                  <div className="h-8"></div>
                </div>
                <div className={`${warna18(ranks18.indexOf(2) + 1)} flex-col space-y-1 w-3`}>
                  <div className="h-8"></div>
                  <div className="h-8"></div>
                </div>
                <div className={`${warna18(ranks18.indexOf(3) + 1)} flex-col space-y-1 w-3`}>
                  <div className="h-8"></div>
                  <div className="h-8"></div>
                </div>
                <div className="flex-col space-y-1 w-3">
                  <div className="h-8 "></div>
                </div>
              </div>
            </div>
            {/* akal */}
            <div className="flex border p-2">
              <div className="p-2">
                <div className="flex-col space-y-1">
                {kiriTengahId.map((plrId, idx) => (
                  <div key={idx} className='flex'>
                    <div>
                      <div className="w-28 text-right text-xs pr-2">{pilar[plrId - 1]?.namaArab}</div>
                      <div className="w-28 text-right text-xs pr-2">{pilar[plrId - 1]?.namaIndo}</div>
                    </div>
                    <div className={`w-20 h-8 border ${warna40(ranks.indexOf(plrId) + 1)}`}></div>
                  </div>
                ))}
                </div>
              </div>
              <div className="flex-col py-2 space-y-1">
                <div className="flex-col space-y-1 w-3">
                  <div className="h-8"></div>
                  <div className="h-8"></div>
                </div>

                <div className={`${warna18(ranks18.indexOf(4) + 1)} flex-col space-y-1 w-3`}>
                  <div className="h-8"></div>
                  <div className="h-8"></div>
                </div>
                <div className={`${warna18(ranks18.indexOf(5) + 1)} flex-col space-y-1 w-3`}>
                  <div className="h-8"></div>
                  <div className="h-8"></div>
                </div>
                <div className={`${warna18(ranks18.indexOf(6) + 1)} flex-col space-y-1 w-3`}>
                  <div className="h-8"></div>
                </div>
              </div>
            </div>
            {/* perasaan */}
            <div className="flex border p-2">
              <div className="p-2">
                <div className="flex-col space-y-1">
                {kiriBawahId.map((plrId, idx) => (
                  <div key={idx} className='flex'>
                    <div>
                      <div className="w-28 text-right text-xs pr-2">{pilar[plrId - 1]?.namaArab}</div>
                      <div className="w-28 text-right text-xs pr-2">{pilar[plrId - 1]?.namaIndo}</div>
                    </div>
                    <div className={`w-20 h-8 border ${warna40(ranks.indexOf(plrId) + 1)}`}></div>
                  </div>
                ))}
                </div>
              </div>
              <div className="flex-col py-2 space-y-1">
                <div className="flex-col space-y-1 w-3">
                  <div className="h-8"></div>
                  <div className="h-8"></div>
                </div>
                <div className={`${warna18(ranks18.indexOf(7) + 1)} flex-col space-y-1 w-3`}>
                  <div className="h-8"></div>
                  <div className="h-8"></div>
                </div>
                <div className={`${warna18(ranks18.indexOf(8) + 1)} flex-col space-y-1 w-3`}>
                  <div className="h-8"></div>
                  <div className="h-8"></div>
                </div>
                <div className={`${warna18(ranks18.indexOf(9) + 1)} flex-col space-y-1 w-3`}>
                  <div className="h-8"></div>
                  <div className="h-8"></div>
                </div>
              </div>
            </div>
        </div>
        {/* tengah */}
        <div className='flex justify-center py-2'>
          <div className="grid grid-cols-1">
            {/* tengah-atas */}
            <div className="flex-col space-y-5">
              <div className='flex  text-s text-center'>
                <div className="w-20">الحَمَاسَة</div>
                <div className="w-20"></div>
                <div className="w-20">التَّأْثِيْر</div>
              </div>
              <div className='flex'>
                <div className="flex justify-center w-20">
                  <Image
                    src={kiriAtas}
                    style={{
                      width: '80%',
                      height: 'auto',
                    }}
                    alt="hamasah" />
                </div>
                <div className="flex justify-center w-20">
                  <Image
                    src={tengahAtas}
                    style={{
                      width: '80%',
                      height: 'auto',
                    }}
                    alt="hawa"
                  />
                </div>
                <div className="flex justify-center w-20">
                  <Image
                    src={kananAtas}
                    style={{
                      width: '80%',
                      height: 'auto',
                    }}
                    alt="ta'tsiir" />
                </div>
              </div>
              <div className='flex'>
                <div className="flex justify-center w-20">
                  <div className={`w-8 h-8 border ${warna6(ranks6.indexOf(1) + 1)}`}></div>
                </div>
                <div className="flex justify-center w-20">
                  <div className={`${warna3(ranks3.indexOf(1) + 1)} text-center border h-8 w-16 p-[3px]`}>الهَوَى</div>
                </div>
                <div className="flex justify-center w-20">
                  <div className={`w-8 h-8 border ${warna6(ranks6.indexOf(4) + 1)}`}></div>
                </div>
              </div>
            </div>
            {/* tengah-tengah */}
            <div className="flex-col space-y-5">
              <div className='flex text-s text-center'>
                <div className="w-20">التَّفْكِيْر</div>
                <div className="w-20"></div>
                <div className="w-20">التَّعَامُل</div>
              </div>
              <div className='flex'>
                <div className="flex justify-center w-20">
                  <Image
                    src={kiriTengah}
                    style={{
                      width: '80%',
                      height: 'auto',
                    }}
                    alt="tafkir" />
                </div>
                <div className="flex justify-center w-20">
                  <Image
                    src={tengahTengah}
                    style={{
                      width: '80%',
                      height: 'auto',
                    }}
                    alt="akal"
                  />
                </div>
                <div className="flex justify-center w-20">
                  <Image
                    src={tengahKanan}
                    style={{
                      width: '80%',
                      height: 'auto',
                    }}
                    alt="ta'amal" />
                </div>
              </div>
              <div className='flex'>
                <div className="flex justify-center w-20">
                  <div className={`w-8 h-8 border ${warna6(ranks6.indexOf(2) + 1)}`}></div>
                </div>
                <div className="flex justify-center w-20">
                  <div className={`${warna3(ranks3.indexOf(2) + 1)} text-center border h-8 w-16 p-[3px]`}>العَقْل</div></div>
                <div className="flex justify-center w-20">
                  <div className={`w-8 h-8 border ${warna6(ranks6.indexOf(5) + 1)}`}></div>
                </div>
              </div>
            </div>
            {/* tengah-bawah */}
            <div className="flex-col space-y-5">
              <div className='flex text-s text-center'>
                <div className="w-20">الشُعُوْر</div>
                <div className="w-20"></div>
                <div className="w-20">الخِدْمَة</div>
              </div>
              <div className='flex'>
                <div className="flex justify-center w-20">
                  <Image
                    src={kiriBawah}
                    style={{
                      width: '80%',
                      height: 'auto',
                    }}
                    alt="syu'ur" />
                </div>
                <div className="flex justify-center w-20">
                  <Image
                    src={tengahBawah}
                    style={{
                      width: '80%',
                      height: 'auto',
                    }}
                    alt="akal"
                  />
                </div>
                <div className="flex justify-center w-20">
                  <Image
                    src={kananBawah}
                    width={60}
                    alt="khidmah" />
                </div>
              </div>
              <div className='flex'>
                <div className="flex justify-center w-20">
                  <div className={`w-8 h-8 border ${warna6(ranks6.indexOf(3) + 1)}`}></div>
                </div>
                <div className="flex justify-center w-20">
                  <div className={`${warna3(ranks3.indexOf(3) + 1)} text-center border h-8 w-16 p-[3px]`}>القَلْب</div></div>
                <div className="flex justify-center w-20">
                  <div className={`w-8 h-8 border ${warna6(ranks6.indexOf(6) + 1)}`}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* kanan */}
          <div className="flex-col space-y-2 p-2">
            {/* nafsul ammaroh */}
            <div className="flex border p-2">
              <div className="flex-col py-2 space-y-1">
                <div className={`${warna18(ranks18.indexOf(10) + 1)} flex-col space-y-1 w-3`}>
                  <div className="h-8"></div>
                  <div className="h-8"></div>
                  <div className="h-8"></div>
                </div>
                <div className={`${warna18(ranks18.indexOf(11) + 1)} flex-col space-y-1 w-3`}>
                  <div className="h-8"></div>
                  <div className="h-8"></div>
                </div>
                <div className={`${warna18(ranks18.indexOf(12) + 1)} flex-col space-y-1 w-3`}>
                  <div className="h-8"></div>
                  <div className="h-8"></div>
                </div>
              </div>
              <div className="p-2">
                <div className="flex-col space-y-1">
                {kananAtasId.map((plrId, idx) => (
                  <div key={idx} className='flex'>
                    <div className={`w-20 h-8 border ${warna40(ranks.indexOf(plrId) + 1)}`}></div>
                    <div>
                      <div className="w-28 text-xs pl-2">{pilar[plrId - 1]?.namaArab}</div>
                      <div className="w-28 text-xs pl-2">{pilar[plrId - 1]?.namaIndo}</div>
                    </div>
                  </div>
                ))}
                </div>
              </div>
            </div>
            {/* akal */}
            <div className="flex border p-2">
              <div className="flex-col py-2 space-y-1">
                <div className={`${warna18(ranks18.indexOf(13) + 1)} flex-col space-y-1 w-3`}>
                  <div className="h-8"></div>
                  <div className="h-8"></div>
                  <div className="h-8"></div>
                  <div className="h-8"></div>
                </div>
                <div className={`${warna18(ranks18.indexOf(14) + 1)} flex-col space-y-1 w-3`}>
                  <div className="h-8"></div>
                  <div className="h-8"></div>
                </div>
                <div className={`${warna18(ranks18.indexOf(15) + 1)} flex-col space-y-1 w-3`}>
                  <div className="h-8"></div>
                  <div className="h-8"></div>
                </div>
              </div>
              <div className="p-2">
                <div className="flex-col space-y-1">
                {kananTengahId.map((plrId, idx) => (
                  <div key={idx} className='flex'>
                    <div className={`w-20 h-8 border ${warna40(ranks.indexOf(plrId) + 1)}`}></div>
                    <div>
                      <div className="w-28 text-xs pl-2">{pilar[plrId - 1]?.namaArab}</div>
                      <div className="w-28 text-xs pl-2">{pilar[plrId - 1]?.namaIndo}</div>
                    </div>
                    </div>
                ))}
                </div>
              </div>
            </div>
            {/* perasaan */}
            <div className="flex border p-2">
              <div className="flex-col py-2 space-y-1">
                <div className={`${warna18(ranks18.indexOf(16) + 1)} flex-col space-y-1 w-3`}>
                  <div className="h-8"></div>
                  <div className="h-8"></div>
                </div>
                <div className={`${warna18(ranks18.indexOf(17) + 1)} flex-col space-y-1 w-3`}>
                  <div className="h-8"></div>
                  <div className="h-8"></div>
                </div>
                <div className={`${warna18(ranks18.indexOf(18) + 1)} flex-col space-y-1 w-3`}>
                  <div className="h-8"></div>
                  <div className="h-8"></div>
                  <div className="h-8"></div>
                  <div className="h-8"></div>
                </div>
              </div>
              <div className="p-2">
                <div className="flex-col space-y-1">
                {kananBawahId.map((plrId, idx) => (
                  <div key={idx} className='flex'>
                    <div className={`w-20 h-8 border ${warna40(ranks.indexOf(plrId) + 1)}`}></div>
                    <div>
                      <div className="w-28 text-xs pl-2">{pilar[plrId - 1]?.namaArab}</div>
                      <div className="w-28 text-xs pl-2">{pilar[plrId - 1]?.namaIndo}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}