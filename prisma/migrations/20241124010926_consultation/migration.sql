-- CreateTable
CREATE TABLE "Consultation" (
    "id" TEXT NOT NULL,
    "clienteId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "status" INTEGER NOT NULL,

    CONSTRAINT "Consultation_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Consultation_clienteId_key" ON "Consultation"("clienteId");

-- CreateIndex
CREATE UNIQUE INDEX "Consultation_userId_key" ON "Consultation"("userId");

-- AddForeignKey
ALTER TABLE "Consultation" ADD CONSTRAINT "Consultation_clienteId_fkey" FOREIGN KEY ("clienteId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Consultation" ADD CONSTRAINT "Consultation_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Doctor"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
