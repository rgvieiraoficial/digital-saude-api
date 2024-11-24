import { Purchase } from '@prisma/client';

import { IPurchasesRepository } from "../../repositories/IPurchasesRepository";

interface IRequest {
  // id
  //id
  // date
}

class CreatePurchaseUseCase {
  constructor(private purchaseRepository: IPurchasesRepository) { }

  async execute({  }: IRequest): Promise<Purchase> {

    const data = await this.purchaseRepository.create({ date });

    return data;
  }
}

export { CreatePurchaseUseCase };