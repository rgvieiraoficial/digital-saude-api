import { Doctor, Prisma } from '@prisma/client';

import { IDoctorsRepository } from '../IDoctorsRepository';

import { prisma } from '../../../../lib/prisma';

class DoctorsRepository implements IDoctorsRepository {

  async create({ registration_document, specialty, User }: Prisma.DoctorCreateInput): Promise<Doctor | null> {
    const doctor = await prisma.doctor.create({
      data: {
        registration_document,
        specialty,
        User
      }
    });

    prisma.$disconnect;

    return doctor;
  }

  async findById(id: string): Promise<Doctor | null> {
    const data = await prisma.doctor.findUnique({
      where: {
        id
      }
    });

    prisma.$disconnect;

    return data;
  }

  async list(): Promise<Doctor[]> {
    const doctors = await prisma.doctor.findMany();

    prisma.$disconnect();

    return doctors;
  }
}

export { DoctorsRepository };