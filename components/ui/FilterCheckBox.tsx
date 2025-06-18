"use client";

import React from "react";
import { useState } from "react";

interface Props {
  clasName: string;
  text: string;
}
export const FilterCheckBox: React.FC<Props> = ({ clasName, text }) => {
  const [check, setCheck] = useState(false);
  function isChecked() {
    setCheck(!check);
  }
  return (
    <div className={clasName}>
      <input
        type="checkbox"
        className="rounded-[30px] w-4 border focus:border-none bg-gray-200"
        id="checkbox"
        checked={check}
        onChange={isChecked}
      />
      <label htmlFor="checkbox" className="cursor-pointer">
        <p>{text}</p>
      </label>
    </div>
  );
};
