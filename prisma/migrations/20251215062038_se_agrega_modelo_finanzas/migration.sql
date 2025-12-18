-- CreateTable
CREATE TABLE "public"."Finanza" (
    "id" TEXT NOT NULL,
    "tipo" TEXT NOT NULL,
    "monto" DOUBLE PRECISION NOT NULL,
    "descripcion" TEXT NOT NULL,
    "fecha" TIMESTAMP(3) NOT NULL,
    "terrenoId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Finanza_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "public"."Finanza" ADD CONSTRAINT "Finanza_terrenoId_fkey" FOREIGN KEY ("terrenoId") REFERENCES "public"."Terreno"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
