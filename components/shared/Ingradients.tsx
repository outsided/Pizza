"use client";

import {ingredientsPizza} from '@/components/shared/data';
import Button from '@/components/ui/Button';
import { FilterCheckBox } from "../ui/FilterCheckBox";
import { Title } from "../ui/Title";
import { useState } from 'react';


export default function Ingradients(){
      const [showAll,setShowAll] = useState<boolean>(false)
          const showMore=()=>{
          setShowAll(!showAll)
          }
          let haf = ingredientsPizza.slice(0,4)
    return(
              <div className="flex flex-col gap-2">
          <Title variant="title3" text="Ингредиенты:" sizeTitle="my-[5px]" />
          <input className="w-[200px] my-[20px] p-[8px] bg-gray-100 focus:outline-orange-500 rounded-[50px]" type="text" placeholder="Поиск..."/>
          {showAll?ingredientsPizza.map((item,index)=>
              <FilterCheckBox
              key={index}
              clasName="flex gap-5"
              text={item.name}
              value={item.value}
            />
          ):haf.map((item,index)=>
            <FilterCheckBox
              key={index}
              clasName="flex gap-5"
              text={item.name}
              value={item.value}
            />
          )}
          <Button variant="but1" textSize="w-[150px] " text={`${showAll?'- Скрыть':"+ Показать все"}`}  oncl={()=>showMore()}/>
      </div>
    )
}