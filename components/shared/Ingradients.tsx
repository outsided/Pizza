"use client";

import Button from "@/components/ui/Button";
import { FilterCheckBox } from "../ui/FilterCheckBox";
import { Title } from "../ui/Title";
import { useSelector } from "react-redux";
import { useState } from "react";

export default function Ingradients() {
  let s = useSelector((state: any) => state.ingredientsPizza);
  const [showAll, setShowAll] = useState<boolean>(false);
  const [search, setSearch] = useState("");

  const showMore = () => {
    setShowAll(!showAll);
  };
  function searchFilter(e: React.ChangeEvent<HTMLInputElement>): void {
    setSearch((prev) => (prev = e.target.value));
  }
  const forSearch = s.filter((item: { name: string }) =>
    item.name.toLowerCase().includes(search.toLocaleLowerCase())
  );
  let haf = forSearch.slice(0, 4);
  return (
    <div className="flex flex-col gap-2">
      <Title variant="title3" text="Ингредиенты:" sizeTitle="my-[5px]" />
      <input
        className="w-[200px] my-[20px] p-[8px] bg-gray-100 focus:outline-orange-500 rounded-[50px]"
        onChange={searchFilter}
        type="text"
        placeholder="Поиск..."
      />
      {showAll
        ? s.map((item: { name: string }, index: number) => (
            <FilterCheckBox
              key={index}
              id={index.toString()}
              clasName="flex gap-5"
              text={item.name}
            />
          ))
        : haf.map((item: { name: string }, index: number) => (
            <FilterCheckBox
              key={index}
              id={index.toString()}
              clasName="flex gap-5"
              text={item.name}
            />
          ))}

      <Button
        variant="but1"
        textSize="w-[150px] "
        text={`${showAll ? "- Скрыть" : "+ Показать все"}`}
        oncl={() => showMore()}
      />
    </div>
  );
}
