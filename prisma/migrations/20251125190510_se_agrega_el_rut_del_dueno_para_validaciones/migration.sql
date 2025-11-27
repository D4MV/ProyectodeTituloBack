/*
  Warnings:

  - A unique constraint covering the columns `[rutDueño]` on the table `Fundo` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "public"."Fundo" ADD COLUMN     "rutDueño" TEXT NOT NULL DEFAULT 'Sin Rut';

-- CreateIndex
CREATE UNIQUE INDEX "Fundo_rutDueño_key" ON "public"."Fundo"("rutDueño");
