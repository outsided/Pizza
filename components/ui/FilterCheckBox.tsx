"use client";

import React from "react";
import { useState } from "react";

interface Props {
  clasName: string;
  text: string;
  checkBox?: boolean;
  value: string;
}
export const FilterCheckBox: React.FC<Props> = ({
  clasName,
  text,
  checkBox,
  value,
}) => {
  const [check, setCheck] = useState<boolean>(false);
  function isChecked() {
    setCheck(!check);
  }
  return (
    <div className={clasName}>
      <input
        type="checkbox"
        className='rounded-[30px] w-4 focus:bg-orange-300'
        id={value}
        checked={check}
        onChange={isChecked}
      />
      <label htmlFor={value} className="cursor-pointer">
        <p>{text}</p>
      </label>
    </div>
  );
};
