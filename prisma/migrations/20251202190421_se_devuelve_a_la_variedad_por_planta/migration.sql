/*
  Warnings:

  - You are about to drop the column `variedadId` on the `Planta` table. All the data in the column will be lost.
  - You are about to drop the `variedad` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `variedad` to the `Planta` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "public"."Planta" DROP CONSTRAINT "Planta_variedadId_fkey";

-- AlterTable
ALTER TABLE "public"."Planta" DROP COLUMN "variedadId",
ADD COLUMN     "variedad" TEXT NOT NULL;

-- DropTable
DROP TABLE "public"."variedad";
