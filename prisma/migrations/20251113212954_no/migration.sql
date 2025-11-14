/*
  Warnings:

  - You are about to drop the column `userIds` on the `Rol` table. All the data in the column will be lost.
  - Added the required column `rolId` to the `UserFundo` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "public"."Rol" DROP CONSTRAINT "Rol_userIds_fkey";

-- AlterTable
ALTER TABLE "public"."Rol" DROP COLUMN "userIds";

-- AlterTable
ALTER TABLE "public"."UserFundo" ADD COLUMN     "rolId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "public"."UserFundo" ADD CONSTRAINT "UserFundo_rolId_fkey" FOREIGN KEY ("rolId") REFERENCES "public"."Rol"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
