-- AlterTable
ALTER TABLE "public"."OrdenAplicacion" ADD COLUMN     "cuartelConfirmacion" TEXT,
ADD COLUMN     "estadoConfirmacion" TEXT NOT NULL DEFAULT 'pendiente',
ADD COLUMN     "fechaInicio" TIMESTAMP(3),
ADD COLUMN     "horaInicio" TEXT,
ADD COLUMN     "horaTermino" TEXT,
ADD COLUMN     "numMaquinariaConfirmacion" INTEGER;
