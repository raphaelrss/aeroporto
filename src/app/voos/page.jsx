"use client"

import { PrismaClient } from "@prisma/client";
import { useEffect, useState } from "react";
import ObjectTable from "@/components/ObjectTable";

const prisma = new PrismaClient();

function Voos(props) {
  const [voos, setVoos] = useState([]);

  useEffect(() => {

    const fetchData = async () => {
      try {
        const response = await fetch(`api/voos/`);
        
        if (response.ok) {
          const data = await response.json();
          setVoos(data);
        } else {
          throw new Error("Não foi possível obter os dados dos voos");
        }
      } catch (error) {
        console.log(error)
      }
    }

    fetchData();
  }, []);

  return (
    <div>
      <h1>Voos</h1>
      <ObjectTable objects={voos} />
    </div>
  );
}

export default Voos;