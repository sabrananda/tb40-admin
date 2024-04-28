"use client";
import { useEffect } from "react";
// import AssessmentForm from "./assessmentForm";
import { homeState } from "@/states/homeState";
import { useRouter } from "next/navigation";
import Form from "./form";

export default function AssessmentPage() {
  const router = useRouter();
  const [nama] = homeState((state) => [state.nama]);
  useEffect(() => {
    if (nama === "") {
      router.push("/");
    }
  }, [nama, router]);
  return (
    <div>
      <Form />
    </div>
  );
}
