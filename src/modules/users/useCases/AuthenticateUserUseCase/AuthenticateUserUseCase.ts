import { compare } from 'bcryptjs'
import { sign } from 'jsonwebtoken';

import { $Enums } from '@prisma/client';

import { IUsersRepository } from "../../repositories/IUsersRepository";

import auth from '../../../../config/auth';

interface IRequest {
  email: string;
  password: string;
}

interface IResponse {
  user: {
    name: string;
    email: string;
    role: $Enums.UserRole;
  }
  token: string;
}

class AuthenticateUserUseCase {
  constructor(private usersRepository: IUsersRepository) { }

  async execute({ email, password }: IRequest): Promise<IResponse> {
    const user = await this.usersRepository.findByEmail(email);

    if (!user) {
      throw new Error('E-mail or Password incorrect!');
    }

    const passwordMatch = await compare(password, user.password);

    if (!passwordMatch) {
      throw new Error('E-mail or Password incorrect!');
    }

    const { secret_token, expires_in_token } = auth;

    const token = sign({}, secret_token, {
      subject: user.id,
      expiresIn: expires_in_token
    });

    return {
      user: {
        name: user.name,
        email: user.email,
        role: user.role,
      },
      token
    };
  }
}

export { AuthenticateUserUseCase };