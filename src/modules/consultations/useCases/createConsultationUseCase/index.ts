import { ConsultationsRepository } from '../../repositories/implementations/ConsultationsRepository';
import { CreateConsultationUseCase } from './CreateConsultationUseCase';
import { CreateConsultationController } from './CreateConsultationController';

const consultationsRepository = new ConsultationsRepository();
const createConsultationUseCase = new CreateConsultationUseCase(consultationsRepository);
const createConsultationController = new CreateConsultationController(createConsultationUseCase);

export { createConsultationController };