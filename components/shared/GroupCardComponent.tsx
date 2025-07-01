"use client";
import { Title } from "../ui/Title";
import ProductCard from "./ProductСard";
import { useIntersection } from "react-use";
import React from "react";

export default function GroupCardComponent({
  textTitle,
  products,
  category,
}: {
  textTitle: string;
  products: any;
  category: any;
}) {
  const intersectionRef: any = React.useRef(null);
  const intersection = useIntersection(intersectionRef, {
    threshold: 0.4,
  });
  React.useEffect(() => {
    if (intersection?.isIntersecting && textTitle) {
      category(textTitle);
    }
  }, [intersection?.isIntersecting, textTitle]);
  return (
    <div
      className="flex flex-col gap-[20px]"
      id={textTitle}
      ref={intersectionRef}
    >
      <Title variant="title1" text={textTitle} />
      <div className="grid grid-cols-3 gap-3 w-full">
        {products.map((item: any, index: number) => (
          <ProductCard
            id={index}
            key={index}
            imgSrc={item.imgSrc}
            text={item.discription}
            price={item.price}
            h3={item.name}
          />
        ))}
      </div>
    </div>
  );
}
