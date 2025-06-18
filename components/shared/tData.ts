import { StaticImageData } from "next/image";
import { ImgHTMLAttributes } from "react";

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
