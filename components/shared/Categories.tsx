"use client";

import { useState } from "react";
import { ArrowDownUp } from "lucide-react";

export default function Categories() {
  const cats = [
    "Все",
    "Мясные",
    "Острые",
    "Сладкие",
    "Вегетарианское",
    "C курицей",
    "Еще",
  ];
  const [f, setF] = useState(0);
  function funActiveIndex(indx: number) {
    setF(indx);
  }
  return (
    <div className="flex justify-between ">
      <div className="flex rounded-3xl bg-gray-100 text-black gap-10">
        {cats.map((item, index: number) => (
          <a key={index} className="flex m-[1px]">
            <button
              className={`hover:bg-white rounded-2xl p-[15px] cursor-pointer transform duration-300 hover:rotate-360 font-bold ${
                f !== index ? `` : `text-orange-600 bg-white`
              }`}
              onClick={() => funActiveIndex(index)}
            >
              {item}
            </button>
          </a>
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