import { NextResponse } from "next/server";

export function GET(){
  return NextResponse.json(
    {
      user:"sharad",
      email:"sharad@gmail.com"
    }
  )
}