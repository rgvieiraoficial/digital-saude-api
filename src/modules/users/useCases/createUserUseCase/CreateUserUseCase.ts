import { User, $Enums } from '@prisma/client';
import { hash } from 'bcryptjs';

import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  name: string;
  cpf: string;
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

    const passwordHash = await hash(password, 8);

    const newUser = await this.usersRepository.create({ name, cpf, email, phone, password: passwordHash, role });

    return newUser;
  }
}

export { CreateUserUseCase };