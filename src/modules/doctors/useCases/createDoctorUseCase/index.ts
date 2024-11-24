import { DoctorsRepository } from '../../repositories/implementations/DoctorsRepository';
import { UsersRepository } from '../../../users/repositories/implementations/UsersRepository';
import { CreateDoctorUseCase } from './CreateDoctorUseCase';
import { CreateDoctorController } from './CreateDoctorController';

const doctorsRepository = new DoctorsRepository();
const usersRepository = new UsersRepository();
const createDoctorUseCase = new CreateDoctorUseCase(doctorsRepository, usersRepository);
const createDoctorController = new CreateDoctorController(createDoctorUseCase);

export { createDoctorController };