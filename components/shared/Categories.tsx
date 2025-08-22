"use client";

import React from "react";
import { ArrowDownUp } from "lucide-react";
import { useSelector } from "react-redux";
import { useState } from "react";

export default function Categories() {
<<<<<<< HEAD
  const [qwe, setQwe] = useState<number>(0);
  function showButton(e: number) {
    setQwe(e);
=======
  const context = useContext(MyContext);
  const [cats] = context
  const [f, setF] = useState<number>(0);

  function funActiveIndex(indx: number) {
    setF(indx);
>>>>>>> 21428c18749f9babc28c7fe917e153bce0e15451
  }
  const stateRoom = useSelector((state:any) => state);
  return (
    <div className="flex justify-between ">
<<<<<<< HEAD
      <div className="flex rounded-3xl bg-gray-100 text-black gap-10">
        {stateRoom.cats.map((item: string, index: number) => (
          <button
            key={index}
            className={`gap-10 cursor-pointer p-[15px] m-[5px] text-[18px] text-orange-600
          ${qwe === index ? " bg-white rounded-2xl font-bold" : ""}`}
            onClick={() => showButton(index)}
          >
            {item}
          </button>
=======
      <div className="flex rounded-3xl bg-gray-100 text-black gap-10 ">
        {cats.map((item:string, index: number) => (
          <a key={index} className="flex m-[4px]">
            <button
              className={`hover:bg-white rounded-2xl p-[15px] cursor-pointer transform duration-300 font-bold ${
                f !== index ? `` : `text-orange-600 bg-white`
              }`}
              onClick={() => funActiveIndex(index)}
            >
              {item}
            </button>
          </a>
>>>>>>> 21428c18749f9babc28c7fe917e153bce0e15451
        ))}
      </div>
      <div className="flex bg-gray-100 rounded-3xl justify-center items-center gap-5 p-[5px]">
        <button className=" cursor-pointer">
          <ArrowDownUp />
        </button>
        <p>
          Сортировка: <span className="text-orange-500">рейтингу</span>
        </p>
      </div>
    </div>
  );
}
