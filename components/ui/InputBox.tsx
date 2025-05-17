"use client";
import { useState } from "react";
export default function InputBox({
  min,
  max,
  type,
  className,
  placeHolder,
}: {
  min: string;
  max: string;
  type: string;
  className: string;
  placeHolder?: string;
}) {
  const [sum, setSum] = useState<number>(0);
  function ChangeSum(e: number) {
    setSum((prev) => (prev = e.target.value));
  }
  return (
    <input
      className={className}
      value={sum}
      type={`${type}`}
      onChange={(e) => ChangeSum(e)}
      placeholder={placeHolder}
    />
  );
}
