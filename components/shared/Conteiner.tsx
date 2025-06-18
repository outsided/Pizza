import MainBar from "./MainBar";
import ProductCard from "./ProductСard";
import { stateForProducts } from "./data";
import ImgSRC from "../../public/coffe.jpg";


export default function Conteiner() {
  let forOne = stateForProducts.slice(0,7)
  return (
    <div className="flex w-full gap-20 my-[20px] ">
      <div>
        <MainBar />
      </div>
      <div className="w-full grid grid-cols-4 gap-10">

        {stateForProducts.map((item, index) => {
          return (
            <ProductCard
              id={index}
              key={index}
              imgSrc={item.imgSrc}
              text={item.discription}
              price={item.price}
              h3={item.name}
            />
          );
        })}
      </div>
    </div>
  );
}
