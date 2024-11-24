import { Doctor } from '@prisma/client';

import { IDoctorsRepository } from "../../repositories/IDoctorsRepository";

interface IRequest {
  registration_document: string;
  specialty: string;
}

class CreateDoctorUseCase {
  constructor(private doctorRepository: IDoctorsRepository) { }

  async execute({ registration_document, specialty}: IRequest): Promise<Doctor> {

    const data = await this.doctorRepository.create({ registration_document, specialty });

    return data;
  }
}

export { CreateDoctorUseCase };