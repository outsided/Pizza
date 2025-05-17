import MainBar from "./MainBar";

export default function Conteiner() {
  return (
    <div className="flex gap-20 my-[20px]">
      <div >
        <MainBar/>
      </div>
      <div className="flex my-[20px]">
            описание
      </div>
    </div>
  );
}
