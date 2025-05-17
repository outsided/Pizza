export const Title = ({
  variant,
  text,
  sizeTitle,
}: {
  variant: "title1" | "title2" | "title3";
  text: string;
  sizeTitle?: string;
}) => {
  switch (variant) {
    case "title1":
      return <h1 className={`text-[40px] font-bold ${sizeTitle}`}>{text}</h1>;
    case "title2":
      return <h2 className={`text-[20px] font-bold ${sizeTitle}`}>{text}</h2>;
    case "title3":
      return <h3 className={`text-[15px] font-bold ${sizeTitle}`}>{text}</h3>;
  }
};
