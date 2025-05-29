import sortImg from "@/public/vercel.svg";
import { FilterCheckBox } from "@/components/ui/FilterCheckBox";
import Image from "next/image";

export default function Sort() {
  return (
    <div>
      <button>
        <Image src={sortImg} alt="dsadasd" />
      </button>
      <FilterCheckBox clasName="flex" text="daddddddddddddddddsd" value={1} />
    </div>
  );
}
