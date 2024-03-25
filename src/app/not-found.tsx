import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex space-x-3 p-2">

      <div>halaman tidak ada, kembali ke awal</div>
      <Link href={"/"} className="bg-blue-400 px-2 rounded-md">Home</Link>
    </div>
  )
}