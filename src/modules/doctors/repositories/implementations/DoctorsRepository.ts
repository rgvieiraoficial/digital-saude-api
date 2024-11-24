import { Doctor, Prisma } from '@prisma/client';

import { IDoctorsRepository } from '../IDoctorsRepository';

import { prisma } from '../../../../lib/prisma';

class DoctorsRepository implements IDoctorsRepository {

  async create({ registration_document, specialty, User}: Prisma.DoctorCreateInput): Promise<Doctor | null> {
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

  async list(): Promise<Doctor[]> {
    const doctors = await prisma.doctor.findMany();

    prisma.$disconnect();

    return doctors;
  }
}

export { DoctorsRepository };