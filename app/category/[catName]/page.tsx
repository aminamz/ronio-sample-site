"use client";
import ColoredCard from "@/app/components/Card/ColoredCard";
import { ColorItems } from "@/lib/Definitions";
import { NextResponse } from "next/server";
import { useEffect, useState } from "react";

type CategoryPrams = {
  params: {
    catName: string;
  };
};
type resultType = ColorItems[];

function CategoryPage({ params }: CategoryPrams) {
  const [result, setResult] = useState<resultType>([]);
  const [title,setTitle] = useState("")

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/api/", {
        method: "POST",
        body: JSON.stringify({ catName: params.catName }),
      });
      if (!res.ok) return NextResponse.json("Fail To Get", { status: 500 });
      const { data } = await res.json();
      setResult(data);
    };

    fetchData();
  }, []);

  console.log(result);

  return (
    <div className="min-h-[340px] flex flex-col items-center p-10">
      <h1 className="font-bold text-4xl">{params.catName}</h1>
      <div className="flex flex-row-reverse self-end gap-6">
        {result.map((items) => (
          <ColoredCard item={items} key={items.id}/>
        ))}
      </div>
    </div>
  );
}

export default CategoryPage;

async function GetCatItems(catName: string) {
  const res = await fetch("/api/", {
    method: "POST",
    body: JSON.stringify({ hello: "World" }),
  });
  if (!res.ok) return NextResponse.json("Fail To Get", { status: 500 });
  const data = await res.json();
  return data;
}
