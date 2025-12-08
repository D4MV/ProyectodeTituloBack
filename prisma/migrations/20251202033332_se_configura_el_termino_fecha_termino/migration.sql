/*
  Warnings:

  - You are about to drop the column `fecha` on the `Tarea` table. All the data in the column will be lost.
  - Added the required column `fechaTermino` to the `Tarea` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."Tarea" DROP COLUMN "fecha",
ADD COLUMN     "fechaTermino" TIMESTAMP(3) NOT NULL;
