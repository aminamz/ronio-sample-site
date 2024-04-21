import Image from "next/image";

import { CategoryDetails } from "../CardSection";
import Link from "next/link";

type CardProps = {
  item: CategoryDetails;
};

export default function Card({ item }: CardProps) {
  return (
    <div className="flex flex-col justify-center items-center p-4 py-10 gap-6 w-full h-1/4 md:w-1/4 md:h-full shadow-md rounded-md bg-secondary relative">
      {!item.isAvail && (
        <div className="absolute flex items-center justify-center h-full w-full backdrop-blur">
          <h2 className="text-primary font-semibold text-xl"> بزودی</h2>
        </div>
      )}
      <Link
        href={`category/${item.name}`}
        className="flex flex-col gap-8 items-center w-full h-full"
      >
        <Image
          src={`/${item.image}.svg`}
          alt=""
          width={80}
          height={80}
          className="self-center"
        ></Image>
        <p className="font-semibold text-2xl">{item.faTitle}</p>
      </Link>
    </div>
  );
}
