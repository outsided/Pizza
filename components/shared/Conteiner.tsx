import MainBar from "./MainBar";
import GroupCardComponent from "./GroupCardComponent";
import React, { useContext } from "react";
import { MyContext } from "@/app/page";

export default function Conteiner() {
  const context = useContext(MyContext);

  return (
    <div className="flex w-full gap-20 my-[20px]">
      <div>
        <MainBar />
      </div>
      <div className="flex w-full flex-col gap-[30px]">
        <GroupCardComponent
          textTitle="Мясные"
          products={context[2]}
          category={context[3]}
        />
        <GroupCardComponent
          textTitle="Острые"
          products={context[2]}
          category={context[3]}
        />
      </div>
    </div>
  );
}
