import { NextRequest, NextResponse } from "next/server";
import { itemsData } from "@/lib/db.js";

import { ResponseColor } from "@/lib/Definitions";

export async function POST(req: Request) {
  const { catName } = await req.json();
  const filterdData: ResponseColor = itemsData.filter(
    (item) => item.cat === catName
  );
  return NextResponse.json({ data: filterdData }, { status: 200 });
}

export async function GET(req: NextRequest) {
  return NextResponse.json("");
}
