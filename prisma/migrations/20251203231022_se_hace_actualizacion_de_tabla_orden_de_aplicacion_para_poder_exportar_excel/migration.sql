/*
  Warnings:

  - You are about to drop the column `gastoTotal` on the `OrdenAplicacion` table. All the data in the column will be lost.
  - You are about to drop the column `mojamientoReal` on the `OrdenAplicacion` table. All the data in the column will be lost.
  - You are about to drop the column `mojamientoRecomendado` on the `OrdenAplicacion` table. All the data in the column will be lost.
  - You are about to drop the column `nombre` on the `OrdenAplicacion` table. All the data in the column will be lost.
  - You are about to drop the column `numMaquinadas` on the `OrdenAplicacion` table. All the data in the column will be lost.
  - Added the required column `formaAplicacion` to the `OrdenAplicacion` table without a default value. This is not possible if the table is not empty.
  - Added the required column `mojamiento` to the `OrdenAplicacion` table without a default value. This is not possible if the table is not empty.
  - Added the required column `necesidadMaquinaria` to the `OrdenAplicacion` table without a default value. This is not possible if the table is not empty.
  - Added the required column `necesidadTotal` to the `OrdenAplicacion` table without a default value. This is not possible if the table is not empty.
  - Added the required column `numMaquinaria` to the `OrdenAplicacion` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."OrdenAplicacion" DROP COLUMN "gastoTotal",
DROP COLUMN "mojamientoReal",
DROP COLUMN "mojamientoRecomendado",
DROP COLUMN "nombre",
DROP COLUMN "numMaquinadas",
ADD COLUMN     "formaAplicacion" TEXT NOT NULL,
ADD COLUMN     "mojamiento" INTEGER NOT NULL,
ADD COLUMN     "necesidadMaquinaria" TEXT NOT NULL,
ADD COLUMN     "necesidadTotal" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "numAutSag" INTEGER,
ADD COLUMN     "numGuia" INTEGER,
ADD COLUMN     "numLote" INTEGER,
ADD COLUMN     "numMaquinaria" INTEGER NOT NULL;
