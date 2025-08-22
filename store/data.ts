import {
  tIngredientsPizza,
  tStateForProducts,
} from "@/components/shared/tData";
<<<<<<< HEAD
import ImgSRC from "../public/coffe.jpg";
=======
import ImgSRC from "../public/Pizzapie.jpg";
>>>>>>> 21428c18749f9babc28c7fe917e153bce0e15451

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
<<<<<<< HEAD

function reducer(count: string): void {
  let indxCount = cats.indexOf(count);
  see(indxCount);
}

type DataTupe = [
  string[],
  tIngredientsPizza[],
  tStateForProducts[],
  (count: string) => void,
];

export const data: DataTupe = [
  cats,
  ingredientsPizza,
  stateForProducts,
  reducer,
];
=======
function reducer(count: string) {
  console.log("соунт", count);
  let indxCount = cats.indexOf(count);
  return indxCount;
}

type DataTuple = [string[],tIngredientsPizza[], tStateForProducts[],(count:string)=>number];

export const data:DataTuple = [cats, ingredientsPizza, stateForProducts, reducer];
>>>>>>> 21428c18749f9babc28c7fe917e153bce0e15451
