"use client"
import styles from "./Voos.module.css";
import FoodCard from "./../../components/voocard";
import { PrismaClient } from "@prisma/client";
import { useEffect, useState } from "react";
import VooCard from "@/components/voocard";

const prisma = new PrismaClient();

function Voos(props) {
  const [voos, setVoos] = useState([]);

  useEffect(() => {
    // async function fetchVoos() {
    //   const response = await fetch('/api/voos');
    //   const data = await response.data;
    //   setVoos(data);
    // }

    const fetchData = async () => {
      try {
        const response = await fetch("/api/voos/");
        if (response.ok) {
          const data = await response.json();
          setVoos(data);
        } else {
          throw new Error("Não foi possível obter os dados dos voos");
        }
      } catch (error) {
        setError(error);
      }
    }

    fetchData();
  }, []);

  return (
    <div className={styles.voos}>
      {voos?.map((voo) => (
            <div className={styles.voo} key={voo.id}>
              <h2 className={styles.vooTitle}>{voo.numero_voo}</h2>
              <span>
                X
              </span>
            </div>
        ))}
    </div>
  );
}

export default Voos;