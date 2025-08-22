import {
  tIngredientsPizza,
  tStateForProducts,
} from "@/components/shared/tData";
import ImgSRC from "../public/coffe.jpg";

const ingredientsPizza: tIngredientsPizza[] = [
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
];
const cats: string[] = [
  "Все",
  "Мясные",
  "Острые",
  "Сладкие",
  "Вегетарианское",
  "C курицей",
  "Еще",
];
const stateForProducts: tStateForProducts[] = [
  {
    name: "Pizza",
    price: 550,
    discription: "какое-то описание товара",
    imgSrc: ImgSRC,
  },
  {
    name: "Pizza",
    price: 550,
    discription: "какое-то описание товара",
    imgSrc: ImgSRC,
  },
  {
    name: "Pizza",
    price: 550,
    discription: "какое-то описание товара",
    imgSrc: ImgSRC,
  },
  {
    name: "Pizza",
    price: 550,
    discription: "какое-то описание товара",
    imgSrc: ImgSRC,
  },
  {
    name: "Pizza",
    price: 550,
    discription: "какое-то описание товара",
    imgSrc: ImgSRC,
  },
  {
    name: "Pizza",
    price: 550,
    discription: "какое-то описание товара",
    imgSrc: ImgSRC,
  },
  {
    name: "Pizza",
    price: 550,
    discription: "какое-то описание товара",
    imgSrc: ImgSRC,
  },
  {
    name: "Pizza",
    price: 550,
    discription: "какое-то описание товара",
    imgSrc: ImgSRC,
  },
];

function reducer(count: string) {
  let indxCount = cats.indexOf(count);
  return indxCount;
}

type DataTupe = [
  string[],
  tIngredientsPizza[],
  tStateForProducts[],
  (count: string) => number,
];

export const data: DataTupe = [
  cats,
  ingredientsPizza,
  stateForProducts,
  reducer,
];
