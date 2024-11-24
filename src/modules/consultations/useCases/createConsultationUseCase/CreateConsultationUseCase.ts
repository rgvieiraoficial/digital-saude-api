import { Consultation } from '@prisma/client';

import { IConsultationsRepository } from "../../repositories/IConsultationsRepository";
import { IUsersRepository } from '../../../users/repositories/IUsersRepository';
import { IDoctorsRepository } from '../../../doctors/repositories/IDoctorsRepository';

interface IRequest {
  clienteId: string,
  status: number,
  id_client: string,
  id_doctor: string
}

class CreateConsultationUseCase {
  constructor(private consultationsRepository: IConsultationsRepository, private usersRepository: IUsersRepository, private doctorsRepository: IDoctorsRepository) { }

  async execute({ clienteId, id_doctor, id_client,status,}: IRequest): Promise<Consultation> {

    //Id Client (FK)
    const client = await this.usersRepository.findById(clienteId);
    //Id Doctor (FK)
    const doctor = await this.doctorsRepository.findById(id_doctor);

    const data = await this.consultationsRepository.create({
      id_client, 
      status, 
      Client: {
        connect: {
          id: client.id,
        },
      },
      Doctor: {
        connect: {
          id: doctor.id,
        },
      },
  });

    return data;
  }
}

export { CreateConsultationUseCase };