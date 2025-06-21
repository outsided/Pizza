import MainBar from "./MainBar";
import GroupCardComponent from "./GroupCardComponent";
import React,{useContext} from "react";
import { MyContext } from "@/app/page";
export default function Conteiner() {
  const context = useContext(MyContext)
  return (
    <div className="flex w-full gap-20 my-[20px]">
      <div>
        <MainBar />
      </div>
      <div className="flex w-full flex-col gap-[30px]">
        <GroupCardComponent textTitle="Коффе" products={context[2]} />
        <GroupCardComponent textTitle="Пицца" products={context[2]} />
      </div>
    </div>
  );
}
