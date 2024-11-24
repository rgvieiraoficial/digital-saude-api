import { Consultation, Prisma } from "@prisma/client";
import { IConsultationsRepository } from "../IConsultationsRepository";
import { prisma } from "../../../../lib/prisma";

class ConsultationsRepository implements IConsultationsRepository {
  async create(
    data: Prisma.ConsultationCreateInput
  ): Promise<Consultation | null> {
    const consultation = await prisma.consultation.create({
      data,
    });

    await prisma.$disconnect();

    return consultation;
  }

  async list(): Promise<Consultation[]> {
    const consultations = await prisma.consultation.findMany();

    await prisma.$disconnect();

    return consultations;
  }
}

export { ConsultationsRepository };
