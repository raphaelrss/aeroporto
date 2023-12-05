
// import { NextResponse } from "next/server";

// const prisma = new PrismaClient();

// export const GET = async (request) => {
//     const url = new URL(request.url);
    
//     try {
  
//       const voos = await prisma.voo.findMany();
//         console.log(voos);
//       return new NextResponse(JSON.stringify(voos), { status: 200 });
//     } catch (err) {
//       return new NextResponse("Database Error", { status: 500 });
//     }
//   };

import { PrismaClient } from '@prisma/client';
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export const GET = async (request, { params }) => {
const { id } = params;

try {

    const voo = await prisma.voo.findUnique({
        where: {
            id: parseInt(id)
        }
    });

    const reservas = await prisma.reserva.findMany({
        where: {
            voo_id: parseInt(id)
        }
    }); 

    const data = {
        voo: voo,
        reservas: reservas
    }

    return new NextResponse(JSON.stringify(data), { status: 200 });
} catch (err) {
    console.log(err)
    return new NextResponse("Database Error", { status: 500 });
}
};