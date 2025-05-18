import { Title } from "../ui/Title";
import { FilterCheckBox } from "../ui/FilterCheckBox";
import InputBox from "../ui/InputBox";

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
          value="1"
        />
        <FilterCheckBox clasName="flex gap-5" text="Новинки" value="2" />
      </div>
      <div>
        <Title variant="title3" text="Цена от и до:" sizeTitle="my-[5px]" />
        <div className="flex gap-4">
          <InputBox
            className="text-gray-700 w-[100px] focus:outline-orange-400 border rounded-[30px] border-orange-300 pl-[20px]"
            placeHolder="0"
            type="number"
          />
          <InputBox
            className="text-gray-700 w-[100px] focus:outline-orange-400 border rounded-[30px] border-orange-300 pl-[20px]"
            placeHolder="1000"
            type="number"
          />
        </div>
      </div>
      <div className="flex flex-col gap-2">
          <Title variant="title3" text="Ингредиенты:" sizeTitle="my-[5px]" />
          <FilterCheckBox
          clasName="flex gap-5"
          text="Сырный соус"
          value="3"
        /><FilterCheckBox
          clasName="flex gap-5"
          text="Моцарелла"
          value="4"
        /><FilterCheckBox
          clasName="flex gap-5"
          text="Чеснок"
          value="5"
        /><FilterCheckBox
          clasName="flex gap-5"
          text="Солёные огурчики"
          value="6"
        /><FilterCheckBox
          clasName="flex gap-5"
          text="Красный лук"
          value="7"
        />
        <FilterCheckBox
          clasName="flex gap-5"
          text="Томаты"
          value="8"
        />
      </div>
      <div className="flex flex-col gap-2">
          <Title variant="title3" text="Тип теста:" sizeTitle="my-[5px]" />
          <FilterCheckBox
          clasName="flex gap-5"
          text="Традициаонное"
          value="9"
        /><FilterCheckBox
          clasName="flex gap-5"
          text="Тонкое"
          value="10"
        />
      </div>
      <button className="w-[300px] h-[50px] bg-orange-500 text-white rounded-[50px] cursor-pointer hover:bg-orange-600">Применить</button>
    </div>
  );
}
