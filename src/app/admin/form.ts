import React, { HTMLInputTypeAttribute } from "react";

type FormItems = {
  name: string;
  inputType: HTMLInputTypeAttribute;
  onChangeEvent: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string | number;
};

export const formItems: FormItems[] = [
  {
    name: "id",
    inputType: "number",
    onChangeEvent: (e) => {
      e.target.value;
    },
    value: 0,
  },
  {
    name: "nama",
    inputType: "text",
    onChangeEvent: (e) => {
      e.target.value;
    },
    value: "",
  },
];
