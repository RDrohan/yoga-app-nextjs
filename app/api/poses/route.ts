import { NextResponse } from "next/server";
import { baseURL } from "../../baseUrl";

export async function GET(request: Request) {
  const response = await fetch(`${baseURL}/poses`);
  const data = await response.json();
  return NextResponse.json({ data });
}
