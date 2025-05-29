import { Title } from "../ui/Title";
import { FilterCheckBox } from "../ui/FilterCheckBox";
import InputBox from "../ui/InputBox";
import Ingradients from "./Ingradients";

export default function MainBar() {
  return (
    <div className=" flex flex-col  gap-5 ">
      <div className="flex">
        <Title variant="title2" text="Фильтрация" />
      </div>
      <div className="flex flex-col gap-2">
        <FilterCheckBox
          clasName="flex gap-5"
          text="Можно собирать"
          value={100}
        />
        <FilterCheckBox clasName="flex gap-5" text="Новинки" value={101} />
      </div>
      <div>
        <Title variant="title3" text="Цена от и до:" sizeTitle="my-[5px]" />
        <div className="flex gap-4">
          <InputBox
            className="text-gray-700 w-[100px] focus:outline-orange-400 border rounded-[30px] border-orange-300 pl-[20px]"
            placeHolder="0"
            type="number"
            value={0}
          />
          <InputBox
            className="text-gray-700 w-[100px] focus:outline-orange-400 border rounded-[30px] border-orange-300 pl-[20px]"
            placeHolder="1000"
            type="number"
            value={1000}
          />
        </div>
      </div>
      <Ingradients />
      <div className="flex flex-col gap-2">
        <Title variant="title3" text="Тип теста:" sizeTitle="my-[5px]" />
        <FilterCheckBox
          clasName="flex gap-5"
          text="Традициаонное"
          value={103}
        />
        <FilterCheckBox clasName="flex gap-5" text="Тонкое" value={104} />
      </div>
      <button className="w-[300px] h-[50px] bg-orange-500 text-white rounded-[50px] cursor-pointer hover:bg-orange-600">
        Применить
      </button>
    </div>
  );
}
