import { Consultation } from '@prisma/client';

import { IConsultationsRepository } from "../../repositories/IConsultationsRepository";

interface IRequest {
    code: string;
    name_remedy: string;
    qnts: number;
    type: string;
    instructions: string;
    status: number;
    expires_at: Date;
}

class CreateConsultationUseCase {
  constructor(private consultationsRepository: IConsultationsRepository) { }

  async execute({ }: IRequest): Promise<Consultation> {

    const data = await this.consultationsRepository.create({ });

    return data;
  }
}

export { CreateConsultationUseCase };