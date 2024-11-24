import { UsersRepository } from '../../repositories/implementations/UsersRepository';
import { ShowUserProfileUseCase } from './ShowUserProfileUseCase';
import { ShowUserProfileController } from './ShowUserProfileController';

const usersRepository = new UsersRepository();
const showUserProfileUseCase = new ShowUserProfileUseCase(usersRepository);
const showUserProfileController = new ShowUserProfileController(showUserProfileUseCase);

export { showUserProfileController };