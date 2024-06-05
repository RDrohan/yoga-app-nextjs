import { NextResponse } from "next/server";
import { baseURL } from "../../../baseURL";
export async function GET(request: Request, context: any) {
  const { id } = context.params;
  const response = await fetch(`${baseURL}/categories?id=${id}`);
  const data = await response.json();
  return NextResponse.json({ data });
}
