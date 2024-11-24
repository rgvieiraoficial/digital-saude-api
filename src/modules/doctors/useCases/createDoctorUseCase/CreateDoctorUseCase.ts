import { Doctor } from '@prisma/client';

import { IDoctorsRepository } from "../../repositories/IDoctorsRepository";

interface IRequest {
  registration_document: string;
  specialty: string;
  user_id: string;
}

class CreateDoctorUseCase {
  constructor(private doctorRepository: IDoctorsRepository) { }

  async execute({ registration_document, specialty, user_id }: IRequest): Promise<Doctor> {

    const data = await this.doctorRepository.create({
      registration_document,
      specialty,
      User: {
        connect: {
          id: user_id
        }
      }
    });

    return data;
  }
}

export { CreateDoctorUseCase };