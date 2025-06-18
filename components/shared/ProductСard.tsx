"use client";
import Image, { StaticImageData } from "next/image";
import { Title } from "../ui/Title";
import { Link } from "lucide-react";
function ProductCard({
  className,
  text,
  price,
  add,
  h3,
  imgSrc,
  id,
}: {
  className?: string;
  text: string;
  price: number;
  add?: () => void;
  h3: string;
  imgSrc: StaticImageData;
  id:number;
}) {
  return (
    <div className="flex flex-col items-center w-full  p-[10px] gap-[5%] border-1 bg-orange-100 border-b-gray-400 rounded-[10px]">
      {/* <Link href={`/product/${id}`}> </Link> */}
      <Image
        className=" self-center rounded-t-[10px]"
        src={imgSrc}
        width={200}
        alt="picture-product"
      />
      <div className="flex flex-col items-center">
        <Title variant="title3" text={h3} />
        <p>{text}</p>
      </div>
      <div className="flex w-full justify-between">
        <p>
          от <span className="">{price}</span>
        </p>
        <button onClick={add}>+ Добавить</button>
      </div>
    </div>
  );
}
export default ProductCard;
