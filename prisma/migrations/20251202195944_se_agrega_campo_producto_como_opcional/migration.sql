-- DropForeignKey
ALTER TABLE "public"."Tarea" DROP CONSTRAINT "Tarea_productoId_fkey";

-- AlterTable
ALTER TABLE "public"."Tarea" ALTER COLUMN "productoId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "public"."Tarea" ADD CONSTRAINT "Tarea_productoId_fkey" FOREIGN KEY ("productoId") REFERENCES "public"."Producto"("id") ON DELETE SET NULL ON UPDATE CASCADE;
