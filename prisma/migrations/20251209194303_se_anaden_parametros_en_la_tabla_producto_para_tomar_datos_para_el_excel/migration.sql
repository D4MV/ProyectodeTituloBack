/*
  Warnings:

  - You are about to drop the column `nombre` on the `Producto` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "public"."Producto" DROP COLUMN "nombre",
ADD COLUMN     "ingrActivo" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "nombreComercial" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "postAsoex" TEXT DEFAULT '',
ADD COLUMN     "postEtiqueta" TEXT DEFAULT '',
ADD COLUMN     "postPppl" TEXT DEFAULT '',
ADD COLUMN     "unidadMedida" TEXT DEFAULT '';

-- AlterTable
ALTER TABLE "public"."cuartel" ADD COLUMN     "posibleCosecha" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP;
