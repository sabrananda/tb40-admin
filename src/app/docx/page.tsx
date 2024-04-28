"use client";

// import { docxHandler } from "./docx";
import { editDocx } from "./readDocx";

import { docxState } from "@/states/docxState";

export default function Docx() {
  const [docxHandler] = docxState((state) => [state.docxHandler]);

  return (
    <div>
      <div>
        <button
          className="bg-blue-300 p-2 rounded-md"
          onClick={async () => await docxHandler()}
        >
          klik
        </button>
      </div>
      <div>
        <button
          className="bg-blue-300 p-2 rounded-md"
          onClick={async () => await editDocx()}
        >
          baca
        </button>
      </div>
      \
    </div>
  );
}
