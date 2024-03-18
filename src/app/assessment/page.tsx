import AssessmentForm from "./assessmentForm";

export default function AssessmentPage() {
  // const [reset] = assessmentState((state) => [state.reset])

  return (
    <div>
      <div>halaman assesment</div>
      {/* <div className="mb-10 flex justify-end">
        <button className="font-bold bg-blue-200 rounded-sm px-2 py-1 hover:bg-blue-400" onClick={reset}>reset</button>
      </div> */}
      <AssessmentForm />
    </div>
  )
}