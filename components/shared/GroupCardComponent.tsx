"use client";
import { Title } from "../ui/Title";
import ProductCard from "./ProductСard";
import { useIntersection } from "react-use";
import React from "react";
import { useSelector } from "react-redux";

export default function GroupCardComponent({
  textTitle,
}: {
  textTitle: string;
}) {
  const s = useSelector((state: any) => state);

  const intersectionRef: any = React.useRef(null);
  const intersection = useIntersection(intersectionRef, {
    threshold: 0.4,
  });
  React.useEffect(() => {
    if (intersection?.isIntersecting) {
      // category(textTitle)
    }
  }, [intersection?.isIntersecting, textTitle]);
  console.log(s)
  return (
    <div
      className="flex flex-col gap-[20px]"
      id={textTitle}
      ref={intersectionRef}
    >
      <Title variant="title1" text={textTitle} />
      <div className="grid grid-cols-3 gap-3 w-full">
        {/* {s.map((item,index: number,) => (
            <ProductCard
              id={index}
              key={index}
              imgSrc={item.imgSrc}
              text={item.text}
              price={item.price}
              h3={item.name}
            />
          )
        )} */}
      </div>
    </div>
  );
}


