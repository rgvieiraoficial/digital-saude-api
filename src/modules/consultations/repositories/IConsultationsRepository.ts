import { Consultation, Prisma } from "@prisma/client";

interface IConsultationsRepository {
  create({ }: Prisma.ConsultationCreateInput): Promise<Consultation | null>;
  list(): Promise<Consultation[]>;
}

export { IConsultationsRepository };