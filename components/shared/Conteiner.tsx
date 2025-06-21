import MainBar from "./MainBar";
import { stateForProducts } from "./data";
import GroupCardComponent from "./GroupCardComponent";
import React from "react";


export default function Conteiner() {

  return (
    <div className="flex w-full gap-20 my-[20px]">
      <div>
        <MainBar />
      </div>
      <div className="flex w-full flex-col gap-[30px]" >
        <GroupCardComponent textTitle="Коффе" products={stateForProducts} />
        <GroupCardComponent textTitle="Пицца" products={stateForProducts} />
      </div>
    </div>
  );
}
