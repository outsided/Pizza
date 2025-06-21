"use client";
import React, { createContext } from "react";
import { data } from "../store/data";
import Categories from "@/components/shared/Categories";
import Conteiner from "@/components/shared/Conteiner";
import { Title } from "@/components/ui/Title";
export const MyContext = createContext(data);

export default function Home() {
  return (
    <div className="w-100%">
      <MyContext.Provider value={data}>
        <div className="flex flex-col gap-4 ">
          <Title variant="title1" sizeTitle="" text="Все пиццы" />
        </div>
        <div className="sticky top-[10px] py-[1px] rounded-3xl">
          <Categories />
        </div>
        <div>
          <Conteiner />
        </div>
      </MyContext.Provider>
    </div>
  );
}
