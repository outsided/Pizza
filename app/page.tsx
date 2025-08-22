"use client";
import React from "react";
import Categories from "@/components/shared/Categories";
import Conteiner from "@/components/shared/Conteiner";
import { Title } from "@/components/ui/Title";
import { Provider } from "react-redux";
import { store } from "@/store/store";


export default function Home() {
  return (
    <Provider store={store}>
      <div className="w-100%">
        <div className="flex flex-col gap-4 ">
          <Title variant="title1" sizeTitle="" text="Все пиццы" />
        </div>
        <div className="sticky top-[10px] py-[1px] rounded-3xl">
          <Categories />
        </div>
        <div>
          <Conteiner />
        </div>
      </div>
    </Provider>
  );
}
