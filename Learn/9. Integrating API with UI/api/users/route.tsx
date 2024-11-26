import { ok } from "assert";
import { error } from "console";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest): Promise<NextResponse> {
  let { name, age, email } = await req.json();

  if (!name || !age || !email) {
    return NextResponse.json(
      { error: "required filed not found", ok: false },
      { status: 400 }
    );
  }

  return NextResponse.json(
    { res: "Credientials verified, User successfully logged in.", ok: true },
    { status: 201 }
  );
}
