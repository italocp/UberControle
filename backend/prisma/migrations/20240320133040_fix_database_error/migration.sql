/*
  Warnings:

  - You are about to drop the column `userId` on the `Entries` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `Expenses` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `Tips` table. All the data in the column will be lost.
  - Added the required column `user_id` to the `Entries` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_id` to the `Expenses` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_id` to the `Tips` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Entries" DROP CONSTRAINT "Entries_userId_fkey";

-- DropForeignKey
ALTER TABLE "Expenses" DROP CONSTRAINT "Expenses_userId_fkey";

-- DropForeignKey
ALTER TABLE "Tips" DROP CONSTRAINT "Tips_userId_fkey";

-- AlterTable
ALTER TABLE "Entries" DROP COLUMN "userId",
ADD COLUMN     "user_id" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Expenses" DROP COLUMN "userId",
ADD COLUMN     "user_id" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Tips" DROP COLUMN "userId",
ADD COLUMN     "user_id" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Entries" ADD CONSTRAINT "Entries_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Expenses" ADD CONSTRAINT "Expenses_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Tips" ADD CONSTRAINT "Tips_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
