
import sortImg from "@/public/vercel.svg";
import {FilterCheckBox} from "@/components/ui/FilterCheckBox"
import Image from "next/image";
export default function Sort() {
  return (
    <div className="">
      <button><Image src={sortImg} alt="dsadasd"/></button>
      <FilterCheckBox className='flex' text='daddddddddddddddddsd'/>
    </div>
  );
}
