import { NextRequest, NextResponse } from "next/server";


export const GET = async (request: NextRequest): Promise<NextResponse> => {

  const id = request.nextUrl.pathname.split("/").pop();

  return NextResponse.json({ id: id });
};