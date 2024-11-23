import { PrescriptionsRepository } from '../../repositories/implementations/PrescriptionsRepository';
import { CreatePrescriptionUseCase } from './CreatePrescriptionUseCase';
import { CreatePrescriptionController } from './CreatePrescriptionController';

const prescriptionsRepository = new PrescriptionsRepository();
const createPrescriptionUseCase = new CreatePrescriptionUseCase(prescriptionsRepository);
const createPrescriptionController = new CreatePrescriptionController(createPrescriptionUseCase);

export { createPrescriptionController };