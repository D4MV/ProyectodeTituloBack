/*
  Warnings:

  - A unique constraint covering the columns `[userFundoId,terrenoId]` on the table `Encargados` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Encargados_userFundoId_terrenoId_key" ON "public"."Encargados"("userFundoId", "terrenoId");

-- AddForeignKey
ALTER TABLE "public"."Encargados" ADD CONSTRAINT "Encargados_userFundoId_fkey" FOREIGN KEY ("userFundoId") REFERENCES "public"."UserFundo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
