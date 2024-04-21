import { ColorItems } from "@/lib/Definitions";
import { FiUser } from "react-icons/fi";

type ColoredCardProp = {
  item: ColorItems;
};

function ColoredCard({ item }: ColoredCardProp) {
  return (
    <div className="flex flex-col rounded-md shadow-md bg-secodary w-[300px] p-4">
      <ul className="grid grid-cols-5 grid-rows-1 rounded-md overflow-hidden">
        {item.items.map((item, index) => (
          <li
            key={index}
            className="w-full h-[40px]"
            style={{ background: `${item}` }}
          ></li>
        ))}
      </ul>
      <div className="flex flex-row justify-between items-center p-1 mt-4">
        <div className="flex flex-row items-center">
          <FiUser style={{ width: "100%", height: "100%" }} />
          <span className="font-semibold text-lx mr-1">{item.team}</span>
        </div>
      </div>
    </div>
  );
}

export default ColoredCard;
