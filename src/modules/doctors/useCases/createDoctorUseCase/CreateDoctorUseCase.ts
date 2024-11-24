import { Doctor } from '@prisma/client';

import { IDoctorsRepository } from "../../repositories/IDoctorsRepository";
import { IUsersRepository } from '../../../users/repositories/IUsersRepository';

interface IRequest {
  registration_document: string;
  specialty: string;
  user_id: string;
}

class CreateDoctorUseCase {
  constructor(private doctorsRepository: IDoctorsRepository, private usersRepository: IUsersRepository) { }

  async execute({ registration_document, specialty, user_id }: IRequest): Promise<Doctor> {

    const user = await this.usersRepository.findById(user_id);

    if (!user) {
      throw new Error('User does not exists!');
    }

    const data = await this.doctorsRepository.create({
      registration_document,
      specialty,
      User: {
        connect: {
          id: user.id,
        },
      }
    });

    return data;
  }
}

export { CreateDoctorUseCase };