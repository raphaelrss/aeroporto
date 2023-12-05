"use client"
import { PrismaClient } from "@prisma/client";
import { useEffect, useState } from "react";
import { notFound } from "next/navigation";

async function getData(id) {
  const res = await fetch(`http://127.0.0.1:3000/api/voos/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    return notFound()
  }

  return res.json();
}

const Voo = async ({ params }) => {
  const data = await getData(params.id);
  return (
    <div>
      {data.reservas?.map((reserva) => (
            <div key={reserva.id}>
              <h2>{data.voo.numero_voo}</h2>
              <span>
                X
              </span>
            </div>
        ))}
    </div>
  );
};

export default Voo;