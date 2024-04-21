import styles from "@/app/components/CardSection.module.css";

import { Category } from "../page";

import clsx from "clsx";
import Card from "./Card/Card";
import Link from "next/link";

type CardSectionProp = {
  category: Category;
};

export type CategoryDetails = {
  id: number;
  cat: number;
  name: string;
  faTitle: string;
  ukTitle: string;
  isAvail: boolean;
  image: string;
};

type FetchDetails = {
  id: number;
  cat: number;
  name: string;
  faTitle: string;
  ukTitle: string;
  isAvail: boolean;
  image: string;
}[];

export default async function CardSection({ category }: CardSectionProp) {
  const data: FetchDetails = await getCardItems(category.name);
  console.log();
  return (
    <div
      className={clsx([
        "flex flex-col md:flex-row items:center justify-evenly gap-4 md:w-10/12 p-10 mt-4 mb-4",
        `${styles.border}`,
      ])}
    >
      <h1 className={styles.title}>{category.faTitle}</h1>
      {data.map((item) => (
        <Card key={item.id} item={item}/>
      ))}
    </div>
  );
}

async function getCardItems(category: string) {
  const res = await fetch(`http://127.0.0.1:3001/${category}`);

  const data: FetchDetails = await res.json();

  return data;
}
