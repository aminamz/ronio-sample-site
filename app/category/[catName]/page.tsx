"use client";
import ColoredCard from "@/app/components/Card/ColoredCard";
import { NextResponse } from "next/server";
import { useEffect, useState } from "react";

type CategoryPrams = {
  params: {
    catName: string;
  };
};
type resultType = {
  id: number;
  cat: string;
  items: string[];
}[];
function CategoryPage({ params }: CategoryPrams) {
  const [result, setResult] = useState<resultType>([]);
  
  useEffect(() => {
    
  }, []);
  return (
    <div className="min-h-[340px] flex flex-col items-center pt-10">
      <h1 className="font-bold text-4xl">{params.catName}</h1>
      <ColoredCard />
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
