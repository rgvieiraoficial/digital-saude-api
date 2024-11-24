import { Prescription, $Enums } from '@prisma/client';

import { IPrescriptionsRepository } from "../../repositories/IPrescriptionsRepository";

interface IRequest {
  code: string;
  name_drug: string;
  quantity: number;
  type: string;
  instructions: string;
  status: $Enums.PrescriptionRole;
  expires_at: Date;
}

class CreatePrescriptionUseCase {
  constructor(private precriptionsRepository: IPrescriptionsRepository) { }

  async execute({ code, name_drug, quantity, type, instructions, status, expires_at }: IRequest): Promise<Prescription> {

    const data = await this.precriptionsRepository.create({ code, name_drug, quantity, type, instructions, status, expires_at });

    return data;
  }
}

export { CreatePrescriptionUseCase };