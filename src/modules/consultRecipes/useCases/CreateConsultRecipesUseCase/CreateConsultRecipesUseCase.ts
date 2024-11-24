import { Consult_Recipes } from '@prisma/client';

import { IConsultsRecipesRepository } from "../../repositories/IConsultsRecipesRepository";
// Id Consultation 
import { IConsultationsRepository } from '../../../consultations/repositories/IConsultationsRepository';
//Id prescription
import { IPrescriptionsRepository } from '../../../prescriptions/repositories/IPrescriptionsRepository';

interface IRequest {
  consultation_id: string,
  prescription_id: string,
}

class CreateConsultRecipesUseCase {
  constructor(private consultsRecipesRepository: IConsultsRecipesRepository, private consultationsRepository: IConsultationsRepository, private prescriptionsRepository: IPrescriptionsRepository) { }

  async execute({ consultation_id, prescription_id   }: IRequest): Promise<Consult_Recipes> {

    //take consultation Id 
    const consultation = await this.consultationsRepository.findById(consultation_id);

    //take prescription Id
    const prescription = await this.prescriptionsRepository.findById(prescription_id)

    if (!consultation) {
      throw new Error('User does not exists!');
    }

    const data = await this.consultsRecipesRepository.create({
      Consultation: {
        connect: {
          id: consultation.id,
        },
      },
      Prescription: {
        connect: {
          id: prescription.id,
          },
      }
    });

    return data;
   }
}

export { CreateConsultRecipesUseCase };