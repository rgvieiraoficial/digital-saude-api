-- CreateTable
CREATE TABLE "Purchase" (
    "id" TEXT NOT NULL,
    "id_pharmaceutical" TEXT NOT NULL,
    "id_prescription" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Purchase_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Purchase_id_pharmaceutical_key" ON "Purchase"("id_pharmaceutical");

-- CreateIndex
CREATE UNIQUE INDEX "Purchase_id_prescription_key" ON "Purchase"("id_prescription");

-- AddForeignKey
ALTER TABLE "Purchase" ADD CONSTRAINT "Purchase_id_pharmaceutical_fkey" FOREIGN KEY ("id_pharmaceutical") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Purchase" ADD CONSTRAINT "Purchase_id_prescription_fkey" FOREIGN KEY ("id_prescription") REFERENCES "Prescription"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
