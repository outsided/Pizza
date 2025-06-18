"use client";
import { useState, useEffect } from "react";

export const TestBut = () => {
  const [isStart, setIsStart] = useState<boolean>(false);
  const [timer, setTimer] = useState<number>(10);

  useEffect(() => {
    let a: ReturnType<typeof setInterval>;
    if (isStart) {
      a = setInterval(() => {
        setTimer((prev) => prev + 1);
      }, 1000);
    }
    return () => {
      clearInterval(a);
    };
  }, [isStart]);

  function start(): void {
    setIsStart(!isStart);
  }
  return (
    <div className="flex justify-center items-center w-[500px] border-3 bg-blue-800">
      <div className="text-[30px]">{timer}</div>
      <button className="border-2 bg-amber-500 rounded-3xl" onClick={start}>
        кнопка
      </button>
    </div>
  );
};
