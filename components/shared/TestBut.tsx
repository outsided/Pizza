"use client";
import { useState, useEffect } from "react";

export const TestBut = () => {
  const [nodeB, setNodeB] = useState<boolean>(false);
  const [timer, setTimer] = useState<number>(0);

  useEffect(()=>{
    if(nodeB){
      let a = setInterval(() => {
        setTimer((prev) => prev + 1);
      }, 1000);
      
      return () => {
        clearInterval(a);
      };
    }
    
  },[nodeB]);


  function startB(): void {
    setNodeB(!nodeB);
  }
  return (
    <div className="flex justify-center items-center w-[500px] border-3 bg-blue-800">
      <div className="text-[30px]">{timer}</div>
      <button className="border-2 bg-amber-500 rounded-3xl" onClick={startB}>
        кнопка
      </button>
    </div>
  );
};