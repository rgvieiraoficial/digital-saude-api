import { Consultation, Prisma } from "@prisma/client";

interface IConsultationsRepository {
  create({Client, Doctor, status, id_client, Consult_Recipes }: Prisma.ConsultationCreateInput): Promise<Consultation | null>;
  findById(id: string): Promise<Consultation | null>;
  list(): Promise<Consultation[]>;
}

export { IConsultationsRepository };