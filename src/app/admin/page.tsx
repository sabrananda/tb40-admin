"use client";

import { formItems } from "./form";

export default function Admin() {
  return (
    <div className="w-full bg-slate-300 flex justify-center">
      <form action="" className="bg-red-300 p-2 w-[21cm] flex-col space-y-2">
        {formItems.map((item, idx) => (
          <div key={idx} className="flex space-x-2">
            <div className="w-28">
              <label className="" htmlFor={item.name}>
                {item.name}
              </label>
            </div>
            <input className="flex-1" type={item.inputType} id={item.name} />
          </div>
        ))}
      </form>
    </div>
  );
}
