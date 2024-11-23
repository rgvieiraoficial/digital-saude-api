import { Prescription } from '@prisma/client';

import { IPrescriptionsRepository } from "../../repositories/IPrescriptionsRepository";

interface IRequest {
    code: string;
    name_remedy: string;
    qnts: number;
    type: string;
    instructions: string;
    status: number;
    expires_at: Date;
}

class CreatePrescriptionUseCase {
  constructor(private precriptionsRepository: IPrescriptionsRepository) { }

  async execute({ code, name_remedy, qnts, type, instructions, status, expires_at }: IRequest): Promise<Prescription> {

    const data = await this.precriptionsRepository.create({ code, name_remedy, qnts, type, instructions, status, expires_at});

    return data;
  }
}

export { CreatePrescriptionUseCase };