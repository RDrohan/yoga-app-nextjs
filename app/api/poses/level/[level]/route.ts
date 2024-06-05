import { NextResponse } from "next/server";
import { baseURL } from "../../../../baseUrl";
export async function GET(request: Request, context: any) {
  const { level } = context.params;
  const response = await fetch(`${baseURL}/poses?level=${level}`);
  const data = await response.json();
  return NextResponse.json({ data });
}
