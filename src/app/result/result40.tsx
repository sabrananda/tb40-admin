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

  const [warna40, warna18, warna6, warna3] = resultState((state) => [state.warna40, state.warna18, state.warna6, state.warna3])
  const [pilar, ranks, ranks18, ranks6, ranks3] = assessmentState((state) => ([state.pilar, state.ranks, state.ranks18, state.ranks6, state.ranks3]))

  return (
    <div className='border'>
      <div className="flex justify-around">
        {/* kiri */}
        <div>
          <div className="flex-col space-y-2 p-2">
            {/* nafsul ammaroh */}
            <div className="flex border p-2">
              <div className="p-2">
                <div className="flex-col space-y-1">
                  {/* bercita-cita tinggi */}
                  <div className="flex">
                    <div>
                      <div className="w-28 text-right text-xs pr-2">{pilar[13 - 1].namaArab}</div>
                      <div className="w-28 text-right text-xs pr-2">{pilar[13 - 1].namaIndo}</div>
                    </div>
                    <div className={`w-20 h-8 border ${warna40(ranks.indexOf(13) + 1)}`}></div>
                  </div>
                  {/* perfeksionis */}
                  <div className="flex">
                    <div>
                      <div className="w-28 text-right text-xs pr-2">{pilar[16 - 1].namaArab}</div>
                      <div className="w-28 text-right text-xs pr-2">{pilar[16 - 1].namaIndo}</div>
                    </div>
                    <div className={`w-20 h-8 border ${warna40(ranks.indexOf(16) + 1)}`}></div>
                  </div>
                  {/* harga diri */}
                  <div className="flex">
                    <div>
                      <div className="w-28 text-right text-xs pr-2">{pilar[18 - 1].namaArab}</div>
                      <div className="w-28 text-right text-xs pr-2">{pilar[18 - 1].namaIndo}</div>
                    </div>
                    <div className={`w-20 h-8 border ${warna40(ranks.indexOf(18) + 1)}`}></div>
                  </div>
                  {/* berwibawa */}
                  <div className="flex">
                    <div>
                      <div className="w-28 text-right text-xs pr-2">{pilar[40 - 1].namaArab}</div>
                      <div className="w-28 text-right text-xs pr-2">{pilar[40 - 1].namaIndo}</div>
                    </div>
                    <div className={`w-20 h-8 border ${warna40(ranks.indexOf(40) + 1)}`}></div>
                  </div>
                  {/* bertekad kuat */}
                  <div className="flex">
                    <div>
                      <div className="w-28 text-right text-xs pr-2">{pilar[4 - 1].namaArab}</div>
                      <div className="w-28 text-right text-xs pr-2">{pilar[4 - 1].namaIndo}</div>
                    </div>
                    <div className={`w-20 h-8 border ${warna40(ranks.indexOf(4) + 1)}`}></div>
                  </div>
                  {/* bersemangat */}
                  <div className="flex">
                    <div>
                      <div className="w-28 text-right text-xs pr-2">{pilar[25 - 1].namaArab}</div>
                      <div className="w-28 text-right text-xs pr-2">{pilar[25 - 1].namaIndo}</div>
                    </div>
                    <div className={`w-20 h-8 border ${warna40(ranks.indexOf(25) + 1)}`}></div>
                  </div>
                  {/* kosong */}
                  <div className="flex">
                    <div>
                      <div className="w-28 text-right text-xs pr-2"></div>
                      <div className="w-28 text-right text-xs pr-2"></div>
                    </div>
                    <div className={`w-20 h-8 border`}></div>
                  </div>

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
                  {/* kosong */}
                  <div className="flex">
                    <div>
                      <div className="w-28 text-right text-xs pr-2"></div>
                      <div className="w-28 text-right text-xs pr-2"></div>
                    </div>
                    <div className={`w-20 h-8 border`}></div>
                  </div>
                  {/* kosong */}
                  <div className="flex">
                    <div>
                      <div className="w-28 text-right text-xs pr-2"></div>
                      <div className="w-28 text-right text-xs pr-2"></div>
                    </div>
                    <div className={`w-20 h-8 border`}></div>
                  </div>
                  {/* berfirasat */}
                  <div className="flex">
                    <div>
                      <div className="w-28 text-right text-xs pr-2">{pilar[8 - 1].namaArab}</div>
                      <div className="w-28 text-right text-xs pr-2">{pilar[8 - 1].namaIndo}</div>
                    </div>
                    <div className={`w-20 h-8 border ${warna40(ranks.indexOf(8) + 1)}`}></div>
                  </div>
                  {/* cerdik */}
                  <div className="flex">
                    <div>
                      <div className="w-28 text-right text-xs pr-2">{pilar[26 - 1].namaArab}</div>
                      <div className="w-28 text-right text-xs pr-2">{pilar[26 - 1].namaIndo}</div>
                    </div>
                    <div className={`w-20 h-8 border ${warna40(ranks.indexOf(26) + 1)}`}></div>
                  </div>
                  {/* berprasangka baik */}
                  <div className="flex">
                    <div>
                      <div className="w-28 text-right text-xs pr-2">{pilar[14 - 1].namaArab}</div>
                      <div className="w-28 text-right text-xs pr-2">{pilar[14 - 1].namaIndo}</div>
                    </div>
                    <div className={`w-20 h-8 border ${warna40(ranks.indexOf(14) + 1)}`}></div>
                  </div>
                  {/* cerdas */}
                  <div className="flex">
                    <div>
                      <div className="w-28 text-right text-xs pr-2">{pilar[6 - 1].namaArab}</div>
                      <div className="w-28 text-right text-xs pr-2">{pilar[6 - 1].namaIndo}</div>
                    </div>
                    <div className={`w-20 h-8 border ${warna40(ranks.indexOf(6) + 1)}`}></div>
                  </div>
                  {/* ahli hikmah */}
                  <div className="flex">
                    <div>
                      <div className="w-28 text-right text-xs pr-2">{pilar[11 - 1].namaArab}</div>
                      <div className="w-28 text-right text-xs pr-2">{pilar[11 - 1].namaIndo}</div>
                    </div>
                    <div className={`w-20 h-8 border ${warna40(ranks.indexOf(11) + 1)}`}></div>
                  </div>
                  {/* kosong */}
                  <div className="flex">
                    <div>
                      <div className="w-28 text-right text-xs pr-2"></div>
                      <div className="w-28 text-right text-xs pr-2"></div>
                    </div>
                    <div className={`w-20 h-8 border`}></div>
                  </div>

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
                  {/* kosong */}
                  <div className="flex">
                    <div>
                      <div className="w-28 text-right text-xs pr-2"></div>
                      <div className="w-28 text-right text-xs pr-2"></div>
                    </div>
                    <div className={`w-20 h-8 border`}></div>
                  </div>
                  {/* kosong */}
                  <div className="flex">
                    <div>
                      <div className="w-28 text-right text-xs pr-2"></div>
                      <div className="w-28 text-right text-xs pr-2"></div>
                    </div>
                    <div className={`w-20 h-8 border`}></div>
                  </div>
                  {/* jujur */}
                  <div className="flex">
                    <div>
                      <div className="w-28 text-right text-xs pr-2">{pilar[34 - 1].namaArab}</div>
                      <div className="w-28 text-right text-xs pr-2">{pilar[34 - 1].namaIndo}</div>
                    </div>
                    <div className={`w-20 h-8 border ${warna40(ranks.indexOf(34) + 1)}`}></div>
                  </div>
                  {/* menjaga diri */}
                  <div className="flex">
                    <div>
                      <div className="w-28 text-right text-xs pr-2">{pilar[15 - 1].namaArab}</div>
                      <div className="w-28 text-right text-xs pr-2">{pilar[15 - 1].namaIndo}</div>
                    </div>
                    <div className={`w-20 h-8 border ${warna40(ranks.indexOf(15) + 1)}`}></div>
                  </div>
                  {/* pendiam */}
                  <div className="flex">
                    <div>
                      <div className="w-28 text-right text-xs pr-2">{pilar[33 - 1].namaArab}</div>
                      <div className="w-28 text-right text-xs pr-2">{pilar[33 - 1].namaIndo}</div>
                    </div>
                    <div className={`w-20 h-8 border ${warna40(ranks.indexOf(33) + 1)}`}></div>
                  </div>
                  {/* pemalu */}
                  <div className="flex">
                    <div>
                      <div className="w-28 text-right text-xs pr-2">{pilar[10 - 1].namaArab}</div>
                      <div className="w-28 text-right text-xs pr-2">{pilar[10 - 1].namaIndo}</div>
                    </div>
                    <div className={`w-20 h-8 border ${warna40(ranks.indexOf(10) + 1)}`}></div>
                  </div>
                  {/* sederhana */}
                  <div className="flex">
                    <div>
                      <div className="w-28 text-right text-xs pr-2">{pilar[28 - 1].namaArab}</div>
                      <div className="w-28 text-right text-xs pr-2">{pilar[28 - 1].namaIndo}</div>
                    </div>
                    <div className={`w-20 h-8 border ${warna40(ranks.indexOf(28) + 1)}`}></div>
                  </div>
                  {/* rendah hati */}
                  <div className="flex">
                    <div>
                      <div className="w-28 text-right text-xs pr-2">{pilar[37 - 1].namaArab}</div>
                      <div className="w-28 text-right text-xs pr-2">{pilar[37 - 1].namaIndo}</div>
                    </div>
                    <div className={`w-20 h-8 border ${warna40(ranks.indexOf(37) + 1)}`}></div>
                  </div>

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
                    width={60}
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
        <div>
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
                  {/* pemberani */}
                  <div className="flex">
                    <div className={`w-20 h-8 border ${warna40(ranks.indexOf(35) + 1)}`}></div>
                    <div>
                      <div className="w-28 text-xs pl-2">{pilar[35 - 1].namaArab}</div>
                      <div className="w-28 text-xs pl-2">{pilar[35 - 1].namaIndo}</div>
                    </div>
                  </div>
                  {/* pencemburu */}
                  <div className="flex">
                    <div className={`w-20 h-8 border ${warna40(ranks.indexOf(9) + 1)}`}></div>
                    <div>
                      <div className="w-28 text-xs pl-2">{pilar[9 - 1].namaArab}</div>
                      <div className="w-28 text-xs pl-2">{pilar[9 - 1].namaIndo}</div>
                    </div>
                  </div>
                  {/* kompetitif */}
                  <div className="flex">
                    <div className={`w-20 h-8 border ${warna40(ranks.indexOf(22) + 1)}`}></div>
                    <div>
                      <div className="w-28 text-xs pl-2">{pilar[22 - 1].namaArab}</div>
                      <div className="w-28 text-xs pl-2">{pilar[22 - 1].namaIndo}</div>
                    </div>
                  </div>
                  {/* penasehat */}
                  <div className="flex">
                    <div className={`w-20 h-8 border ${warna40(ranks.indexOf(24) + 1)}`}></div>
                    <div>
                      <div className="w-28 text-xs pl-2">{pilar[24 - 1].namaArab}</div>
                      <div className="w-28 text-xs pl-2">{pilar[24 - 1].namaIndo}</div>
                    </div>
                  </div>
                  {/* komunikatif */}
                  <div className="flex">
                    <div className={`w-20 h-8 border ${warna40(ranks.indexOf(7) + 1)}`}></div>
                    <div>
                      <div className="w-28 text-xs pl-2">{pilar[7 - 1].namaArab}</div>
                      <div className="w-28 text-xs pl-2">{pilar[7 - 1].namaIndo}</div>
                    </div>
                  </div>
                  {/* penolong */}
                  <div className="flex">
                    <div className={`w-20 h-8 border ${warna40(ranks.indexOf(27) + 1)}`}></div>
                    <div>
                      <div className="w-28 text-xs pl-2">{pilar[27 - 1].namaArab}</div>
                      <div className="w-28 text-xs pl-2">{pilar[27 - 1].namaIndo}</div>
                    </div>
                  </div>
                  {/* dermawan */}
                  <div className="flex">
                    <div className={`w-20 h-8 border ${warna40(ranks.indexOf(19) + 1)}`}></div>
                    <div>
                      <div className="w-28 text-xs pl-2">{pilar[19 - 1].namaArab}</div>
                      <div className="w-28 text-xs pl-2">{pilar[19 - 1].namaIndo}</div>
                    </div>
                  </div>
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
                  {/* bekerjasama */}
                  <div className="flex">
                    <div className={`w-20 h-8 border ${warna40(ranks.indexOf(36) + 1)}`}></div>
                    <div>
                      <div className="w-28 text-xs pl-2">{pilar[36 - 1].namaArab}</div>
                      <div className="w-28 text-xs pl-2">{pilar[36 - 1].namaIndo}</div>
                    </div>
                  </div>
                  {/* bersatu */}
                  <div className="flex">
                    <div className={`w-20 h-8 border ${warna40(ranks.indexOf(38) + 1)}`}></div>
                    <div>
                      <div className="w-28 text-xs pl-2">{pilar[38 - 1].namaArab}</div>
                      <div className="w-28 text-xs pl-2">{pilar[38 - 1].namaIndo}</div>
                    </div>
                  </div>
                  {/* adil */}
                  <div className="flex">
                    <div className={`w-20 h-8 border ${warna40(ranks.indexOf(1) + 1)}`}></div>
                    <div>
                      <div className="w-28 text-xs pl-2">{pilar[1 - 1].namaArab}</div>
                      <div className="w-28 text-xs pl-2">{pilar[1 - 1].namaIndo}</div>
                    </div>
                  </div>
                  {/* menepati janji */}
                  <div className="flex">
                    <div className={`w-20 h-8 border ${warna40(ranks.indexOf(39) + 1)}`}></div>
                    <div>
                      <div className="w-28 text-xs pl-2">{pilar[39 - 1].namaArab}</div>
                      <div className="w-28 text-xs pl-2">{pilar[39 - 1].namaIndo}</div>
                    </div>
                  </div>
                  {/* humoris */}
                  <div className="flex">
                    <div className={`w-20 h-8 border ${warna40(ranks.indexOf(23) + 1)}`}></div>
                    <div>
                      <div className="w-28 text-xs pl-2">{pilar[23 - 1].namaArab}</div>
                      <div className="w-28 text-xs pl-2">{pilar[23 - 1].namaIndo}</div>
                    </div>
                  </div>
                  {/* berseri-seri */}
                  <div className="flex">
                    <div className={`w-20 h-8 border ${warna40(ranks.indexOf(5) + 1)}`}></div>
                    <div>
                      <div className="w-28 text-xs pl-2">{pilar[5 - 1].namaArab}</div>
                      <div className="w-28 text-xs pl-2">{pilar[5 - 1].namaIndo}</div>
                    </div>
                  </div>
                  {/* lemah lembut */}
                  <div className="flex">
                    <div className={`w-20 h-8 border ${warna40(ranks.indexOf(30) + 1)}`}></div>
                    <div>
                      <div className="w-28 text-xs pl-2">{pilar[30 - 1].namaArab}</div>
                      <div className="w-28 text-xs pl-2">{pilar[30 - 1].namaIndo}</div>
                    </div>
                  </div>
                  {/* penuh cinta */}
                  <div className="flex">
                    <div className={`w-20 h-8 border ${warna40(ranks.indexOf(21) + 1)}`}></div>
                    <div>
                      <div className="w-28 text-xs pl-2">{pilar[21 - 1].namaArab}</div>
                      <div className="w-28 text-xs pl-2">{pilar[21 - 1].namaIndo}</div>
                    </div>
                  </div>
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
                  {/* berbelas kasih */}
                  <div className="flex">
                    <div className={`w-20 h-8 border ${warna40(ranks.indexOf(29) + 1)}`}></div>
                    <div>
                      <div className="w-28 text-xs pl-2">{pilar[29 - 1].namaArab}</div>
                      <div className="w-28 text-xs pl-2">{pilar[29 - 1].namaIndo}</div>
                    </div>
                  </div>
                  {/* melayani */}
                  <div className="flex">
                    <div className={`w-20 h-8 border ${warna40(ranks.indexOf(17) + 1)}`}></div>
                    <div>
                      <div className="w-28 text-xs pl-2">{pilar[17 - 1].namaArab}</div>
                      <div className="w-28 text-xs pl-2">{pilar[17 - 1].namaIndo}</div>
                    </div>
                  </div>
                  {/* penjaga rahasia */}
                  <div className="flex">
                    <div className={`w-20 h-8 border ${warna40(ranks.indexOf(20) + 1)}`}></div>
                    <div>
                      <div className="w-28 text-xs pl-2">{pilar[20 - 1].namaArab}</div>
                      <div className="w-28 text-xs pl-2">{pilar[20 - 1].namaIndo}</div>
                    </div>
                  </div>
                  {/* menutup aib */}
                  <div className="flex">
                    <div className={`w-20 h-8 border ${warna40(ranks.indexOf(31) + 1)}`}></div>
                    <div>
                      <div className="w-28 text-xs pl-2">{pilar[31 - 1].namaArab}</div>
                      <div className="w-28 text-xs pl-2">{pilar[31 - 1].namaIndo}</div>
                    </div>
                  </div>
                  {/* bertanggung jawab */}
                  <div className="flex">
                    <div className={`w-20 h-8 border ${warna40(ranks.indexOf(2) + 1)}`}></div>
                    <div>
                      <div className="w-28 text-xs pl-2">{pilar[2 - 1].namaArab}</div>
                      <div className="w-28 text-xs pl-2">{pilar[2 - 1].namaIndo}</div>
                    </div>
                  </div>
                  {/* tidak tergesa */}
                  <div className="flex">
                    <div className={`w-20 h-8 border ${warna40(ranks.indexOf(3) + 1)}`}></div>
                    <div>
                      <div className="w-28 text-xs pl-2">{pilar[3 - 1].namaArab}</div>
                      <div className="w-28 text-xs pl-2">{pilar[3 - 1].namaIndo}</div>
                    </div>
                  </div>
                  {/* santun */}
                  <div className="flex">
                    <div className={`w-20 h-8 border ${warna40(ranks.indexOf(12) + 1)}`}></div>
                    <div>
                      <div className="w-28 text-xs pl-2">{pilar[12 - 1].namaArab}</div>
                      <div className="w-28 text-xs pl-2">{pilar[12 - 1].namaIndo}</div>
                    </div>
                  </div>
                  {/* sabar */}
                  <div className="flex">
                    <div className={`w-20 h-8 border ${warna40(ranks.indexOf(32) + 1)}`}></div>
                    <div>
                      <div className="w-28 text-xs pl-2">{pilar[32 - 1].namaArab}</div>
                      <div className="w-28 text-xs pl-2">{pilar[32 - 1].namaIndo}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}