import { Purchase, Prisma } from '@prisma/client';

import { IPurchasesRepository } from '../IPurchasesRepository';

import { prisma } from '../../../../lib/prisma';

class PurchasesRepository implements IPurchasesRepository {

  async create({ date}: Prisma.PurchaseCreateInput): Promise<Purchase | null> {
    const purchase = await prisma.purchase.create({
      data: {
        date,
        //id
      }
    });

    prisma.$disconnect;

    return purchase;
  }

  async list(): Promise<Purchase[]> {
    const purchases = await prisma.purchase.findMany();

    prisma.$disconnect();

    return purchases;
  }
}

export { PurchasesRepository };