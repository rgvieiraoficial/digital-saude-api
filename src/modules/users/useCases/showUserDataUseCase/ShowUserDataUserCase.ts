import { IUsersRepository } from "../../repositories/IUsersRepository";

class CreateUserUseCase {
  constructor(private usersRepository: IUsersRepository) { }

  async execute(): Promise<{}> {
    /*const userAlreadyExists = this.usersRepository.findUser({ cpf, email, phone });

    if (userAlreadyExists) {
      throw new Error("Users already taken!");
    }*/

    return {};
  }
}

export { CreateUserUseCase };