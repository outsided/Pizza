import MainBar from "./MainBar";
import { TestBut } from "./TestBut";

export default function Conteiner() {
  return (
    <div className="flex gap-20 my-[20px]">
      <div>
        <MainBar />
      </div>
      <div className="flex my-[20px]">
        <TestBut />
      </div>
    </div>
  );
}
