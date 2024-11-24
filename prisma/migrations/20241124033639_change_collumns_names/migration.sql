/*
  Warnings:

  - You are about to drop the column `name_remedy` on the `Prescription` table. All the data in the column will be lost.
  - You are about to drop the column `qnts` on the `Prescription` table. All the data in the column will be lost.
  - The `status` column on the `Prescription` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Added the required column `name_drug` to the `Prescription` table without a default value. This is not possible if the table is not empty.
  - Added the required column `quantity` to the `Prescription` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "PrescriptionRole" AS ENUM ('PENDING', 'EXPIRED', 'USED');

-- AlterTable
ALTER TABLE "Prescription" DROP COLUMN "name_remedy",
DROP COLUMN "qnts",
ADD COLUMN     "name_drug" TEXT NOT NULL,
ADD COLUMN     "quantity" INTEGER NOT NULL,
DROP COLUMN "status",
ADD COLUMN     "status" "PrescriptionRole" NOT NULL DEFAULT 'PENDING';
