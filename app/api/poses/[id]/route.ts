import { NextResponse } from "next/server";
import { baseURL } from "../../../baseUrl";
export async function GET(request: Request, context: any) {
  const { id } = context.params;
  const response = await fetch(`${baseURL}/poses?id=${id}`);
  const data = await response.json();
  return NextResponse.json({ data });
}
