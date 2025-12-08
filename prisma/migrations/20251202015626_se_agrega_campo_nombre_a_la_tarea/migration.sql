/*
  Warnings:

  - Added the required column `nombre` to the `Tarea` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."Tarea" ADD COLUMN     "nombre" TEXT NOT NULL;
