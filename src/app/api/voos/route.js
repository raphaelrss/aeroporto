import { PrismaClient } from '@prisma/client';
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export const GET = async (request) => {
    const url = new URL(request.url);
    
    try {
  
      const voos = await prisma.voo.findMany({
      });
        console.log(voos);
      return new NextResponse(JSON.stringify(voos), { status: 200 });
    } catch (err) {
      return new NextResponse("Database Error", { status: 500 });
    }
  };
  