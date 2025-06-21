"use client";

import React from "react";
import { useState } from "react";

interface Props {
  clasName: string;
  text: string;
  id:string,
}
export const FilterCheckBox: React.FC<Props> = ({ clasName, text,id }) => {
  const [check, setCheck] = useState(false);
  function isChecked() {
    setCheck(!check);
  }
  return (
    <div className={clasName}>
      <input
        type="checkbox"
        className="rounded-[30px] w-4 border focus:border-none bg-gray-200"
        id={id}
        checked={check}
        onChange={isChecked}
      />
      <label htmlFor={id} className="cursor-pointer">
        <p>{text}</p>
      </label>
    </div>
  );
};
