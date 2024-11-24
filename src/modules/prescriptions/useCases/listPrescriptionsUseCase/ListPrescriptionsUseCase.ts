import { Prescription } from '@prisma/client';

import { IPrescriptionsRepository } from "../../repositories/IPrescriptionsRepository";

class ListPrescriptionsUseCase {
  constructor(private precriptionsRepository: IPrescriptionsRepository) { }

  async execute(): Promise<Prescription[]> {

    const data = await this.precriptionsRepository.list();

    return data;
  }
}

export { ListPrescriptionsUseCase };