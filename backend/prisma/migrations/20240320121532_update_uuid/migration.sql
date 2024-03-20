/*
  Warnings:

  - The primary key for the `Entries` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Expenses` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Tips` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "Entries" DROP CONSTRAINT "Entries_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Entries_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Entries_id_seq";

-- AlterTable
ALTER TABLE "Expenses" DROP CONSTRAINT "Expenses_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Expenses_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Expenses_id_seq";

-- AlterTable
ALTER TABLE "Tips" DROP CONSTRAINT "Tips_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Tips_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Tips_id_seq";
