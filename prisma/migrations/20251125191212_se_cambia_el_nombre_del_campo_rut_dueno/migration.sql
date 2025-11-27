/*
  Warnings:

  - You are about to drop the column `rutDueño` on the `Fundo` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[rutDueno]` on the table `Fundo` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "public"."Fundo_rutDueño_key";

-- AlterTable
ALTER TABLE "public"."Fundo" DROP COLUMN "rutDueño",
ADD COLUMN     "rutDueno" TEXT NOT NULL DEFAULT '00000000';

-- CreateIndex
CREATE UNIQUE INDEX "Fundo_rutDueno_key" ON "public"."Fundo"("rutDueno");
