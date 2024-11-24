import { ConsultsRecipesRepository } from '../../repositories/implementations/ConsultRecipes';
import { PrescriptionsRepository } from '../../../prescriptions/repositories/implementations/PrescriptionsRepository';
import { ConsultationsRepository } from '../../../consultations/repositories/implementations/ConsultationsRepository';
import { CreateConsultRecipesUseCase } from './CreateConsultRecipesUseCase';
import { CreateConsultRecipesController } from './CreateConsultRecipesController';


const consultRecipesRepository = new ConsultsRecipesRepository();
const prescriptionsRepository = new PrescriptionsRepository();
const consultationsRepository = new ConsultationsRepository();
const createConsultRecipesUseCase = new CreateConsultRecipesUseCase(consultRecipesRepository, consultationsRepository, prescriptionsRepository);
const createDoctorController = new CreateConsultRecipesController(createConsultRecipesUseCase);

export { createDoctorController };