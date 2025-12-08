/*
  Warnings:

  - You are about to drop the column `tipo` on the `Tarea` table. All the data in the column will be lost.
  - Added the required column `tipoTareaId` to the `Tarea` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."Tarea" DROP COLUMN "tipo",
ADD COLUMN     "tipoTareaId" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "public"."TipoTarea" (
    "id" TEXT NOT NULL,
    "nombre" TEXT NOT NULL,
    "descripcion" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "TipoTarea_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "public"."Tarea" ADD CONSTRAINT "Tarea_tipoTareaId_fkey" FOREIGN KEY ("tipoTareaId") REFERENCES "public"."TipoTarea"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
