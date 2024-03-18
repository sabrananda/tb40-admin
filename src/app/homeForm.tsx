"use client"
import { homeState } from "@/states/homeState"
import { useRouter } from "next/navigation"

export default function HomeForm() {

  const router = useRouter()
  const [nama, setNama] = homeState((state) => [state.nama, state.setNama])

  function mulaiHandler(e: any) {
    e.preventDefault()
    if (nama.length < 2) {
      alert("masukkan nama")
    } else {
      router.push("/assessment")
    }
  }

  return (
    <form action={mulaiHandler} className="border border-gray-200 p-2 rounded-lg">
      <div>
        <label htmlFor="nama">Nama :</label>
        <input
          id={"nama"}
          className="block w-full rounded-md border-0 py-1.5 pl-2 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
          placeholder="masukkan nama"
          type="text"
          value={nama}
          onChange={(e) => { setNama(e.target.value) }}
        />
      </div>
      <div className="mt-10 flex justify-center">
        <button className="font-bold bg-blue-200 rounded-sm px-2 py-1 hover:bg-blue-400" onClick={mulaiHandler}>Mulai</button>
      </div>
    </form>)
}