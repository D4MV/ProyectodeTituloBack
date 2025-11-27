-- CreateTable
CREATE TABLE "public"."Encargados" (
    "id" TEXT NOT NULL,
    "userFundoId" TEXT NOT NULL,
    "terrenoId" TEXT NOT NULL,

    CONSTRAINT "Encargados_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "public"."Fundo" ADD CONSTRAINT "Fundo_creadoPor_fkey" FOREIGN KEY ("creadoPor") REFERENCES "public"."User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Encargados" ADD CONSTRAINT "Encargados_terrenoId_fkey" FOREIGN KEY ("terrenoId") REFERENCES "public"."Terreno"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
