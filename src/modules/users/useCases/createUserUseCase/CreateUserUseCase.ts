import { User, $Enums } from '@prisma/client';

import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  name: string;
  cpf: number;
  email: string;
  phone: number;
  password: string;
  role: $Enums.UserRole;
}

class CreateUserUseCase {
  constructor(private usersRepository: IUsersRepository) { }

  async execute({ name, cpf, email, phone, password, role }: IRequest): Promise<User> {
    /*const userAlreadyExists = this.usersRepository.findUser({ cpf, email, phone });

    if (userAlreadyExists) {
      throw new Error("Users already taken!");
    }*/

    const newUser = await this.usersRepository.create({ name, cpf, email, phone, password, role });

    return newUser;
  }
}

export { CreateUserUseCase };