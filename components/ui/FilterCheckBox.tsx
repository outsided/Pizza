"use client";

import React from "react";
import { useState } from "react";

interface Props {
  className: string;
  text: string;
  checkBox?: boolean;
  value: string;
}
export const FilterCheckBox: React.FC<Props> = ({
  className,
  text,
  checkBox,
  value,
}) => {
  const [check, setCheck] = useState<boolean>(false);
  function isChecked() {
    setCheck(!check);
  }
  return (
    <div className={className}>
      <input
        type="checkbox"
        className={`rounded-[8px] w-4`}
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
