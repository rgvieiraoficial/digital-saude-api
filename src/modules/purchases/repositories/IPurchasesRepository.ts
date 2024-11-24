import { Purchase, Prisma } from "@prisma/client";

interface IPurchasesRepository {
  create({ }: Prisma.PurchaseCreateInput): Promise<Purchase | null>;
  list(): Promise<Purchase[]>;
}

export { IPurchasesRepository };