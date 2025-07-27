import { NextRequest, NextResponse } from "next/server";
import prismaClient from "@/app/lib/db"



export async function POST(req: NextRequest) {
  try {
    
    const data = await req.json();
    await prismaClient.user.create({
      data: {
        username: data.username,
        password: data.password,
      },
    });
    console.log(data);
    return NextResponse.json({
      message: "You have been signed up",
    });
  }  catch (error) {
    return NextResponse.json({
      message:`Error while signed up ${error}`
    })
  }
}
