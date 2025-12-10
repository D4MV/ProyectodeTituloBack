/*
  Warnings:

  - The `necesidadMaquinaria` column on the `OrdenAplicacion` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "public"."OrdenAplicacion" DROP COLUMN "necesidadMaquinaria",
ADD COLUMN     "necesidadMaquinaria" DOUBLE PRECISION DEFAULT 0;
