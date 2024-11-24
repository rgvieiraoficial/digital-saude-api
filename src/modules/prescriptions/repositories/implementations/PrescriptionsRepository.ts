import { Prescription, Prisma } from '@prisma/client';

import { IPrescriptionsRepository } from '../IPrescriptionsRepository';

import { prisma } from '../../../../lib/prisma';

class PrescriptionsRepository implements IPrescriptionsRepository {

  async create({ code, name_drug, quantity, type, instructions, status, expires_at }: Prisma.PrescriptionCreateInput): Promise<Prescription | null> {
    const prescription = await prisma.prescription.create({
      data: {
        code,
        name_drug,
        quantity,
        type,
        instructions,
        status,
        expires_at
      }
    });

    prisma.$disconnect;

    return prescription;
  }

  async findById(id: string): Promise<Prescription | null> {
    const data = await prisma.prescription.findUnique({
      where: {
        id
      }
    });

    prisma.$disconnect;

    return data;
  }

  async list(): Promise<Prescription[]> {
    const prescriptions = await prisma.prescription.findMany();

    prisma.$disconnect();

    return prescriptions;
  }
}

export { PrescriptionsRepository };