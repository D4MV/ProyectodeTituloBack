/*
  Warnings:

  - You are about to drop the column `variedad` on the `Planta` table. All the data in the column will be lost.
  - Added the required column `variedadId` to the `Planta` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."Planta" DROP COLUMN "variedad",
ADD COLUMN     "variedadId" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "public"."variedad" (
    "id" TEXT NOT NULL,
    "nombre" TEXT NOT NULL,
    "descripcion" TEXT NOT NULL,

    CONSTRAINT "variedad_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "public"."Planta" ADD CONSTRAINT "Planta_variedadId_fkey" FOREIGN KEY ("variedadId") REFERENCES "public"."variedad"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
