import { Prescription, Prisma } from "@prisma/client";

interface IPrescriptionsRepository {
  create({ code, name_remedy, qnts, type, instructions, status, expires_at}: Prisma.PrescriptionCreateInput): Promise<Prescription | null>;
  list(): Promise<Prescription[]>;
}

export { IPrescriptionsRepository };