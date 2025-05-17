export default function Button({
  variant,
  oncl,
  text,
  textSize,
}: {
  variant: "but1" | "but2" | "but3";
  oncl?: () => void;
  text: string;
  textSize: string;
}) {
  switch (variant) {
    case "but1":
      return (
        <button
          onClick={oncl}
          className={`text-orange-600 rounded-xl ${textSize} inline-block border hover:bg-orange-700 p-[10px] hover:rotate-360 hover:text-amber-50 transform-all duration-2000 border-amber-500 cursor-pointer `}
        >
          {text}
        </button>
      );
    case "but2":
      return (
        <button
          onClick={oncl}
          className={`text-orange-600  rounded-xl ${textSize} inline-block border hover:bg-orange-700 hover:rotate-360 p-[10px] hover:text-amber-50 transform-all duration-2000 border-amber-500 cursor-pointer `}
        >
          {text}
        </button>
      );
    case "but3":
      return (
        <button
          onClick={oncl}
          className={`text-orange-600  rounded-xl inline-block text-[35px] border hover:bg-orange-700 hover:rotate-360 p-[10px] hover:text-amber-50 transform-all duration-2000 border-amber-500 cursor-pointer`}
        >
          {text}
        </button>
      );
  }
}
