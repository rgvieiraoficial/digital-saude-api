/*
  Warnings:

  - You are about to drop the column `userId` on the `Consultation` table. All the data in the column will be lost.
  - You are about to drop the column `date` on the `Purchase` table. All the data in the column will be lost.
  - You are about to drop the column `id_pharmaceutical` on the `Purchase` table. All the data in the column will be lost.
  - You are about to drop the column `id_prescription` on the `Purchase` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[prescription_id]` on the table `Purchase` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `id_client` to the `Consultation` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id_doctor` to the `Consultation` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `Consultation` table without a default value. This is not possible if the table is not empty.
  - Added the required column `pharmaceutical_id` to the `Purchase` table without a default value. This is not possible if the table is not empty.
  - Added the required column `prescription_id` to the `Purchase` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `Purchase` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Consultation" DROP CONSTRAINT "Consultation_userId_fkey";

-- DropForeignKey
ALTER TABLE "Purchase" DROP CONSTRAINT "Purchase_id_pharmaceutical_fkey";

-- DropForeignKey
ALTER TABLE "Purchase" DROP CONSTRAINT "Purchase_id_prescription_fkey";

-- DropIndex
DROP INDEX "Consultation_userId_key";

-- DropIndex
DROP INDEX "Purchase_id_pharmaceutical_key";

-- DropIndex
DROP INDEX "Purchase_id_prescription_key";

-- AlterTable
ALTER TABLE "Consultation" DROP COLUMN "userId",
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "id_client" TEXT NOT NULL,
ADD COLUMN     "id_doctor" TEXT NOT NULL,
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "Purchase" DROP COLUMN "date",
DROP COLUMN "id_pharmaceutical",
DROP COLUMN "id_prescription",
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "pharmaceutical_id" TEXT NOT NULL,
ADD COLUMN     "prescription_id" TEXT NOT NULL,
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL;

-- CreateTable
CREATE TABLE "Consult_Recipes" (
    "id" TEXT NOT NULL,
    "consultation_id" TEXT NOT NULL,
    "prescription_id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Consult_Recipes_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Consult_Recipes_consultation_id_key" ON "Consult_Recipes"("consultation_id");

-- CreateIndex
CREATE UNIQUE INDEX "Purchase_prescription_id_key" ON "Purchase"("prescription_id");

-- AddForeignKey
ALTER TABLE "Purchase" ADD CONSTRAINT "Purchase_pharmaceutical_id_fkey" FOREIGN KEY ("pharmaceutical_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Purchase" ADD CONSTRAINT "Purchase_prescription_id_fkey" FOREIGN KEY ("prescription_id") REFERENCES "Prescription"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Consultation" ADD CONSTRAINT "Consultation_id_doctor_fkey" FOREIGN KEY ("id_doctor") REFERENCES "Doctor"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Consult_Recipes" ADD CONSTRAINT "Consult_Recipes_consultation_id_fkey" FOREIGN KEY ("consultation_id") REFERENCES "Consultation"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Consult_Recipes" ADD CONSTRAINT "Consult_Recipes_prescription_id_fkey" FOREIGN KEY ("prescription_id") REFERENCES "Prescription"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
