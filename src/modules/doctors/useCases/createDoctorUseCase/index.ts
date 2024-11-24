import { DoctorsRepository } from '../../repositories/implementations/DoctorsRepository';
import { CreateDoctorUseCase } from './CreateDoctorUseCase';
import { CreateDoctorController } from './CreateDoctorController';

const doctorsRepository = new DoctorsRepository();
const createDoctorUseCase = new CreateDoctorUseCase(doctorsRepository);
const createDoctorController = new CreateDoctorController(createDoctorUseCase);

export { createDoctorController };