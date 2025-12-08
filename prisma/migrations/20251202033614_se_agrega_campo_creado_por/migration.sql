/*
  Warnings:

  - Added the required column `creadoPor` to the `Tarea` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."Tarea" ADD COLUMN     "creadoPor" TEXT NOT NULL;
