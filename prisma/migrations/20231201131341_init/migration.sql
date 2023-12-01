-- CreateTable
CREATE TABLE "aeroporto" (
    "id" SERIAL NOT NULL,
    "nome" VARCHAR(100),
    "cidade" VARCHAR(150),
    "pais" VARCHAR(100),

    CONSTRAINT "aeroporto_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "passageiro" (
    "id" SERIAL NOT NULL,
    "nome" VARCHAR(50),
    "sobrenome" VARCHAR(50),
    "cpf" VARCHAR(11),
    "email" VARCHAR(250),
    "telefone" VARCHAR(11),

    CONSTRAINT "passageiro_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "reserva" (
    "id" SERIAL NOT NULL,
    "passageiro_id" INTEGER,
    "voo_id" INTEGER,
    "data_reserva" TIMESTAMP(6),
    "status" VARCHAR(50),

    CONSTRAINT "reserva_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "voo" (
    "id" SERIAL NOT NULL,
    "origem" INTEGER,
    "destino" INTEGER,
    "data_hora_partida" TIMESTAMP(6),
    "preco" DECIMAL(10,2),
    "numero_voo" VARCHAR(20),

    CONSTRAINT "voo_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "reserva" ADD CONSTRAINT "reserva_passageiro_id_fkey" FOREIGN KEY ("passageiro_id") REFERENCES "passageiro"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "reserva" ADD CONSTRAINT "reserva_voo_id_fkey" FOREIGN KEY ("voo_id") REFERENCES "voo"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "voo" ADD CONSTRAINT "voo_destino_fkey" FOREIGN KEY ("destino") REFERENCES "aeroporto"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "voo" ADD CONSTRAINT "voo_origem_fkey" FOREIGN KEY ("origem") REFERENCES "aeroporto"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
