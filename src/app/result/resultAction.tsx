"use client";
import { homeState } from "@/states/homeState";
import { useRouter } from "next/navigation";

export default function ResultAction() {
  const router = useRouter();
  const [setNama] = homeState((state) => [state.setNama]);
  return (
    <div className="flex justify-end space-x-2 print:hidden">
      <button
        onClick={() => {
          window.print();
        }}
        className="my-1 bg-blue-300 p-2"
      >
        PRINT
      </button>
    </div>
  );
}
