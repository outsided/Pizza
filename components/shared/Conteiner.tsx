"use client";

import MainBar from "./MainBar";
import GroupCardComponent from "./GroupCardComponent";
import React from "react";
import { useSelector } from "react-redux";

export default function Conteiner() {
  let s = useSelector((state:any) => state.stateForProducts);
  return (
    <div className="flex w-full gap-20 my-[20px]">
      <div>
        <MainBar />
      </div>
      <div className="flex w-full flex-col gap-[30px]">
        {s.ctegorProducts.map(
          (item: string, index: number) => (
            <GroupCardComponent
              key={index}
              textTitle={item}
            />
          )
        )}
      </div>
    </div>
  );
}
