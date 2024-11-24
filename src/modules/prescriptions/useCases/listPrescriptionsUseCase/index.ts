import { ListPrescriptionsUseCase } from './ListPrescriptionsUseCase';
import { ListPrescriptionsController } from './ListPrescriptionsController';
import { PrescriptionsRepository } from '../../repositories/implementations/PrescriptionsRepository';

const prescriptionsRepository = new PrescriptionsRepository();
const listPrescriptionsUseCase = new ListPrescriptionsUseCase(prescriptionsRepository);
const listPrescriptionsController = new ListPrescriptionsController(listPrescriptionsUseCase);

export { listPrescriptionsController };