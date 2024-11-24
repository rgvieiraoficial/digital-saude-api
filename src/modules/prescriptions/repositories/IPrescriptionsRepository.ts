import { Prescription, Prisma } from "@prisma/client";

interface IPrescriptionsRepository {
  create({ code, name_drug, quantity, type, instructions, status, expires_at }: Prisma.PrescriptionCreateInput): Promise<Prescription | null>;
  findById(id: string): Promise<Prescription | null>;
  list(): Promise<Prescription[]>;
}

export { IPrescriptionsRepository };