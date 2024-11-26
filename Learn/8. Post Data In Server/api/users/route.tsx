import { NextRequest, NextResponse } from "next/server";

type UserData = {
  name: string;
};
export async function POST(req: NextRequest): Promise<NextResponse> {
  let { name }: UserData = await req.json();
  return NextResponse.json(
    { res: " data sent successfully", name: name },
    { status: 200 }
  );
}
