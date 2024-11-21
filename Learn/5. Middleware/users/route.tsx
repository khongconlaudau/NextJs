import { NextResponse } from 'next/server'
import React from 'react'
import {users} from "../../../util/db"
// export const GET = () : NextResponse => {
//   return NextResponse.json({result: "Hello World"})
// }

export const GET =  async () : Promise<NextResponse> =>{
    return NextResponse.json({users})
}
