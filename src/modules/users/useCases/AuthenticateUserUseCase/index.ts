import { UsersRepository } from '../../repositories/implementations/UsersRepository';
import { AuthenticateUserUseCase } from './AuthenticateUserUseCase';
import { AuthenticateUserController } from './AuthenticateUserController';

const usersRepository = new UsersRepository();
const authenticateUserUseCase = new AuthenticateUserUseCase(usersRepository);
const authenticateUserController = new AuthenticateUserController(authenticateUserUseCase);

export { authenticateUserController };