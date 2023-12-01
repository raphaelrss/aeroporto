import React from 'react';
import Link from "next/link";
import styles from "./VooCard.module.css";

export default function VooCard({voo}){
    return(
        <Link href={`/voos/${voo.id}`}>
            <div className={styles.vooCard}>
                <div className={styles.vooCardFooter}>
                    <div className={styles.vooCardName}>
                        <h3>{voo.numero_voo}</h3>
                    </div>
                    <div className={styles.vooCardDesc}>
                        <span>Voo(💵)</span>
                        <span>{voo.origem} - {voo.destino}</span>
                    </div>
                    <div className={styles.foodCardStatus}>
                        <span>Active:</span>
                        <span>{voo.data_hora_partida}</span>
                    </div>
                </div>
            </div>
        </Link>
    )
}