import { Doctor, Prisma } from "@prisma/client";

interface IDoctorsRepository {
  create({ registration_document, specialty, User }: Prisma.DoctorCreateInput): Promise<Doctor | null>;
  findById(id: string): Promise<Doctor | null>;
  list(): Promise<Doctor[]>;
}

export { IDoctorsRepository };