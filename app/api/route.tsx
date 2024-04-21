import { NextRequest, NextResponse } from "next/server";
import { itemsData } from "@/lib/db";

export async function POST(req: Request) {
  const { hello } = await req.json();
  console.log(hello);
  return NextResponse.json(`${hello}`);
}
