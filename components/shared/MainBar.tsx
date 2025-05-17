import { Title } from "../ui/Title";
import { FilterCheckBox } from "../ui/FilterCheckBox";
import InputBox from "../ui/InputBox";

export default function MainBar() {
  const filtrCon = [1, 23, 4];

  return (
    <div className=" flex flex-col  gap-5 ">
      <div className="flex">
        <Title variant="title2" text="Фильтрация" />
      </div>
      <div className="flex flex-col gap-2">
        <FilterCheckBox
          className="flex gap-5"
          text="Можно собирать"
          value="1"
        />
        <FilterCheckBox className="flex gap-5" text="Новинки" value="2" />
      </div>
      <div>
        <Title variant="title3" text="Цена от и до:" sizeTitle="my-[5px]" />
        <div>
          <InputBox
            className=""
            min={0}
            max={100}
            placeHolder="0"
            type="number"
          />
          <InputBox
            className=""
            min={0}
            max={100}
            placeHolder="1000"
            type="number"
          />
        </div>
      </div>
    </div>
  );
}
