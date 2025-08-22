import { StaticImageData } from "next/image";

export type tIngredientsPizza = {
  name: string;
  value: number;
};
export type tStateForProducts = {
  name: string;
  price: number;
  discription: string;
  imgSrc: StaticImageData;
};
