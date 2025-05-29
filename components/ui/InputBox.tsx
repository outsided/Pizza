"use client";
import { ChangeEvent, useState } from "react";
export default function InputBox({
  type,
  className,
  placeHolder,
  value,
}: {
  type: number;
  className: string;
  placeHolder?: string;
  value: number;
}) {
  const [sum, setSum] = useState<number>(0);
  function ChangeSum(e: ChangeEvent<HTMLInputElement>) {
    if (sum >= 0 && sum <= 1000) {
      setSum((prev) => prev = e.target.value);
    } else {
      setSum(0);
    }
  }
  return (
    <input
      className={className}
      value={sum}
      type={`${type}`}
      onChange={(e) => ChangeSum(e)}
    />
  );
}
