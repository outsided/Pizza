'use client'
import nextPizza from "@/public/next.svg";
import globe from "@/public/Search.png";
import Button from "@/components/ui/Button";
import Image from "next/image";
import { Title } from "@/components/ui/Title";
import { User, BaggageClaim, ArrowBigRight } from "lucide-react";

export default function Header() {

  return (
    <header className="flex w-full h-[200px] justify-between ">
      <div className="flex justify-center gap-[50px] w-100%">
        <Image src={nextPizza} width={150} alt="nextpizza" className="w-100%" />
        <div className="flex flex-col justify-center w-100%">
          <Title variant="title1" sizeTitle="" text="PIZZA NEXT" />
          <p className="text-gray-500 text-[20px]">Вкуснее уже некуда</p>
        </div>
        <div className="self-center relative">
          <input
            className="rounded-3xl w-[500px] h-[40px] pl-[40px] border border-amber-600 w-100%"
            type="text"
          />

          <Image
            className="absolute top-[10px] left-[10px] w-100%"
            src={globe}
            width={20}
            alt="nextpizza"
          />
        </div>
      </div>
      <div className="flex items-center gap-2">
        <User size={35} className="text-amber-600" />
        <Button variant="but2" textSize="text-[20px]" text="Войти" />
        <button className="relative border group border-amber-600 p-[30px] rounded-2xl text-amber-600">
          <BaggageClaim className="absolute group-hover:opacity-0 duration-300 left-[17px] top-[17px] " />
          <ArrowBigRight className="absolute opacity-0 group-hover:opacity-100 duration-300 left-[17px] top-[17px] " />
        </button>
      </div>
    </header>
  );
}
