import { NextRequest, NextResponse } from "next/server";
import React from "react";

// export const middleware = (): NextResponse => {
//   return NextResponse.json({ success: "successfully ran" });
// };

export const middleware = (request: NextRequest) => {
  if (request.nextUrl.pathname != "/login") {
    return NextResponse.redirect(new URL("/login", request.url));
  }
};
export const config = {
  marcher: ["/api/users/:path*"],
};
