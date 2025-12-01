/*
  Warnings:

  - Added the required column `nombre` to the `cuartel` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."cuartel" ADD COLUMN     "nombre" TEXT NOT NULL;
