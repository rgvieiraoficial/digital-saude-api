import { Doctor, Prisma } from "@prisma/client";

interface IDoctorsRepository {
  create({ registration_document, specialty, }: Prisma.DoctorCreateInput): Promise<Doctor | null>;
  list(): Promise<Doctor[]>;
}

export { IDoctorsRepository };