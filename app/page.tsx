
import Categories from "@/components/shared/Categories";
import Conteiner from "@/components/shared/Conteiner";
import MainBar from "@/components/shared/MainBar";
import { Title } from "@/components/ui/Title";

export default function Home() {
  return (
    <div className="w-100%">
      <div className="flex flex-col gap-4 ">
        <Title variant="title1" sizeTitle="" text="Все пиццы" />
      </div>
      <div className="sticky top-[10px] shadow-lg py-[1px] rounded-3xl">
        <Categories />
      </div>
      <div>
        <Conteiner />
      </div>
    </div>
  );
}
