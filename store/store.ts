"use client";
import ImgSRC from "@/public/Pizzapie.jpg";
import { configureStore } from "@reduxjs/toolkit";
import {
  tIngredientsPizza,
  tStateForProducts,
} from "@/components/shared/tData";

type State = {
  ingredientsPizza: tIngredientsPizza[];
  stateForProducts: {};
  cats: string[];
};

export type Incriment = {
  type: "Incriment";
};

export type Decriment = {
  type: "Dicriment";
};

type Action = Incriment | Decriment;
const initialState: State = {
  ingredientsPizza: [
    {
      name: "Сырный соус",
      value: 1,
    },
    {
      name: "Моцарелла",
      value: 2,
    },
    {
      name: "Чеснок",
      value: 3,
    },
    {
      name: "Солёные огурчики",
      value: 4,
    },
    {
      name: "Красный лук",
      value: 5,
    },
    {
      name: "Томаты",
      value: 6,
    },
    {
      name: "Перец",
      value: 7,
    },
    {
      name: "Ветчина",
      value: 8,
    },
    {
      name: "Курица",
      value: 9,
    },
    {
      name: "Сыр",
      value: 10,
    },
  ],
  stateForProducts: {
    ctegorProducts: ["Мясные", "Острые", "Сосать"],
    contentCategory: [
      {
        name: "Pizza",
        text: "sddddddads",
        imgg: ImgSRC,
        price: 600,
      },
      {
        name: "Pizza",
        text: "sdads",
        imgg: ImgSRC,
        price: 600,
      },
      {
        name: "Pizza",
        text: "sdads",
        imgg: ImgSRC,
        price: 600,
      },
      {
        name: "Pizza",
        text: "sdads",
        imgg: ImgSRC,
        price: 600,
      },
      {
        name: "Pizza",
        text: "sdads",
        imgg: ImgSRC,
        price: 600,
      },
      {
        name: "Pizza",
        text: "sdads",
        imgg: ImgSRC,
        price: 600,
      },
    ],
  },
  cats: [
    "Все",
    "Мясные",
    "Острые",
    "Сладкие",
    "Вегетарианское",
    "C курицей",
    "Еще",
  ],
};

const reducer = (state = initialState, action: Action): State => {
  switch (action.type) {
    case "Incriment":
      return {
        ...state,
      };
    case "Dicriment":
      return {
        ...state,
      };
    default:
      return state;
  }
};

export const store = configureStore({
  reducer: reducer,
});
